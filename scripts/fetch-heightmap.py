"""
Pobiera kafelki wysokościowe z AWS Terrain Tiles (Terrarium encoding),
skleja je i przycina do regionu mapy scenariuszy (8°E–38°E, 39°N–57°N).
Wynik: heightmap PNG w odcieniach szarości.
"""

import math
import os
import urllib.request
from PIL import Image

# === Parametry ===
ZOOM = 6
LON_MIN, LON_MAX = -5.0, 45.0
LAT_MIN, LAT_MAX = 39.0, 57.0   # min = south, max = north
TILE_SIZE = 256
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "static", "img")
OUT_FILE = os.path.join(OUT_DIR, "heightmap-europe.png")

TILE_URL = "https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png"

# === Tile math (Web Mercator / Slippy Map) ===
def lon_to_tile_x(lon, z):
    return int(math.floor((lon + 180.0) / 360.0 * (1 << z)))

def lat_to_tile_y(lat, z):
    lat_rad = math.radians(lat)
    n = 1 << z
    return int(math.floor((1.0 - math.asinh(math.tan(lat_rad)) / math.pi) / 2.0 * n))

def tile_x_to_lon(x, z):
    return x / (1 << z) * 360.0 - 180.0

def tile_y_to_lat(y, z):
    n = math.pi - 2.0 * math.pi * y / (1 << z)
    return math.degrees(math.atan(math.sinh(n)))

# === Oblicz zakres kafelków ===
x_min = lon_to_tile_x(LON_MIN, ZOOM)
x_max = lon_to_tile_x(LON_MAX, ZOOM)
y_min = lat_to_tile_y(LAT_MAX, ZOOM)   # north = mniejsze y
y_max = lat_to_tile_y(LAT_MIN, ZOOM)   # south = większe y

cols = x_max - x_min + 1
rows = y_max - y_min + 1
print(f"Zoom {ZOOM}: x [{x_min}..{x_max}] ({cols}), y [{y_min}..{y_max}] ({rows})")
print(f"Tiles to download: {cols * rows}")

# === Pobierz i sklej ===
merged = Image.new("RGB", (cols * TILE_SIZE, rows * TILE_SIZE))

for ty in range(y_min, y_max + 1):
    for tx in range(x_min, x_max + 1):
        url = TILE_URL.format(z=ZOOM, x=tx, y=ty)
        print(f"  Fetching tile z={ZOOM} x={tx} y={ty} ...", end=" ")
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = resp.read()
            from io import BytesIO
            tile = Image.open(BytesIO(data))
            px = (tx - x_min) * TILE_SIZE
            py = (ty - y_min) * TILE_SIZE
            merged.paste(tile, (px, py))
            print("OK")
        except Exception as e:
            print(f"FAIL: {e}")

# === Terrarium → elevation + sea mask → grayscale ===
# Terrarium encoding: elevation = (R * 256 + G + B / 256) - 32768
# Sea = negative elevation, land at sea level = 0
w, h = merged.size
pixels = merged.load()
elevations = []
is_sea = []
e_max = 0.0

for py_i in range(h):
    row_e = []
    row_s = []
    for px_i in range(w):
        r, g, b = pixels[px_i, py_i][:3]
        elev = (r * 256.0 + g + b / 256.0) - 32768.0
        sea = elev < -1.0  # anything below -1m is sea
        if elev < 0:
            elev = 0.0
        if elev > e_max:
            e_max = elev
        row_e.append(elev)
        row_s.append(sea)
    elevations.append(row_e)
    is_sea.append(row_s)

E_CAP = 2000.0
e_norm = min(e_max, E_CAP)
print(f"Elevation range: 0 - {e_max:.0f} m (capped to {e_norm:.0f} m)")

# Output: grayscale heightmap + alpha channel (0=sea, 255=land)
gray_img = Image.new("LA", (w, h))
gray_pixels = gray_img.load()
for py_i in range(h):
    for px_i in range(w):
        if is_sea[py_i][px_i]:
            gray_pixels[px_i, py_i] = (0, 0)  # transparent sea
        else:
            val = min(255, int(elevations[py_i][px_i] / e_norm * 255))
            gray_pixels[px_i, py_i] = (val, 255)  # opaque land

full_img = gray_img

# === Przycięcie do dokładnych współrzędnych ===
# Oblicz pixel offset dla naszych granic wewnątrz siatki kafelków
full_lon_min = tile_x_to_lon(x_min, ZOOM)
full_lon_max = tile_x_to_lon(x_max + 1, ZOOM)
full_lat_max = tile_y_to_lat(y_min, ZOOM)  # top
full_lat_min = tile_y_to_lat(y_max + 1, ZOOM)  # bottom

total_w = cols * TILE_SIZE
total_h = rows * TILE_SIZE

# Pixel crop (linear approx for longitude, mercator for latitude)
crop_left = int((LON_MIN - full_lon_min) / (full_lon_max - full_lon_min) * total_w)
crop_right = int((LON_MAX - full_lon_min) / (full_lon_max - full_lon_min) * total_w)

def lat_to_merc_frac(lat, lat_top, lat_bot, z, y_top, rows):
    """Convert lat to fraction of the stitched image height using Mercator math."""
    y_exact_top = (1.0 - math.asinh(math.tan(math.radians(lat_top))) / math.pi) / 2.0 * (1 << z)
    y_exact_bot = (1.0 - math.asinh(math.tan(math.radians(lat_bot))) / math.pi) / 2.0 * (1 << z)
    y_exact = (1.0 - math.asinh(math.tan(math.radians(lat))) / math.pi) / 2.0 * (1 << z)
    frac = (y_exact - y_exact_top) / (y_exact_bot - y_exact_top)
    return frac

crop_top = int(lat_to_merc_frac(LAT_MAX, full_lat_max, full_lat_min, ZOOM, y_min, rows) * total_h)
crop_bottom = int(lat_to_merc_frac(LAT_MIN, full_lat_max, full_lat_min, ZOOM, y_min, rows) * total_h)

print(f"Crop box: ({crop_left}, {crop_top}, {crop_right}, {crop_bottom})")
cropped = full_img.crop((crop_left, crop_top, crop_right, crop_bottom))

os.makedirs(OUT_DIR, exist_ok=True)
cropped.save(OUT_FILE)
cw, ch = cropped.size
print(f"Saved: {OUT_FILE} ({cw}x{ch})")
