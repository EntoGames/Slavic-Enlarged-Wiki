"""
Koloryzuje heightmapę w brand palette Slavic Enlarged.
Styl: ilustracyjna mapa z symbolicznymi drzewami.
"""

import os
import random
from PIL import Image, ImageFilter, ImageDraw

SRC = os.path.join(os.path.dirname(__file__), "..", "static", "img", "heightmap-europe.png")
OUT = os.path.join(os.path.dirname(__file__), "..", "static", "img", "heightmap-europe-color.png")

GAMMA = 0.45

# Stonowana hipsometria — zieleń → oliwka → złoto (brand).
RAMP = [
    (0.00, (32, 44, 20)),
    (0.03, (34, 46, 20)),
    (0.08, (36, 46, 20)),
    (0.14, (38, 44, 19)),
    (0.22, (38, 42, 18)),
    (0.30, (42, 40, 18)),
    (0.38, (48, 38, 18)),
    (0.48, (56, 42, 18)),
    (0.58, (64, 46, 20)),
    (0.70, (72, 52, 24)),
    (0.82, (78, 56, 26)),
    (0.92, (74, 52, 24)),
    (1.00, (68, 48, 22)),
]

def lerp_color(t, ramp):
    if t <= ramp[0][0]:
        return ramp[0][1]
    if t >= ramp[-1][0]:
        return ramp[-1][1]
    for i in range(len(ramp) - 1):
        t0, c0 = ramp[i]
        t1, c1 = ramp[i + 1]
        if t0 <= t <= t1:
            f = (t - t0) / (t1 - t0) if t1 != t0 else 0
            return (
                int(c0[0] + (c1[0] - c0[0]) * f),
                int(c0[1] + (c1[1] - c0[1]) * f),
                int(c0[2] + (c1[2] - c0[2]) * f),
            )
    return ramp[-1][1]

LUT = []
for v in range(256):
    t = (v / 255.0) ** GAMMA
    LUT.append(lerp_color(t, RAMP))

# === Koloryzacja ===
src = Image.open(SRC).convert("LA")
w, h = src.size

gray_ch, alpha_ch = src.split()
alpha_ch = alpha_ch.filter(ImageFilter.GaussianBlur(radius=0.8))

out = Image.new("RGBA", (w, h))
src_px = src.load()
alpha_px = alpha_ch.load()
out_px = out.load()

gray_values = [[0]*w for _ in range(h)]

for y in range(h):
    for x in range(w):
        gray = src_px[x, y][0]
        a = alpha_px[x, y]
        gray_values[y][x] = gray
        if a == 0:
            out_px[x, y] = (0, 0, 0, 0)
        else:
            r, g, b = LUT[gray]
            out_px[x, y] = (r, g, b, a)

rng = random.Random(867)

# === Rzeki ===
import math as _math

LON_MIN, LON_MAX = -5.0, 45.0
LAT_MIN, LAT_MAX = 39.0, 57.0

def _lat_to_merc(lat):
    return _math.log(_math.tan(_math.pi/4 + _math.radians(lat)/2))

_merc_top = _lat_to_merc(LAT_MAX)
_merc_bot = _lat_to_merc(LAT_MIN)

def geo_to_px(lat, lon):
    px = (lon - LON_MIN) / (LON_MAX - LON_MIN) * w
    py = (_merc_top - _lat_to_merc(lat)) / (_merc_top - _merc_bot) * h
    return int(px), int(py)

RIVERS = {
    "Wisła": [
        (49.7, 19.2), (50.0, 19.9), (50.4, 20.1), (51.0, 21.0),
        (51.8, 20.8), (52.2, 20.9), (52.5, 19.5), (53.0, 18.7),
        (53.8, 18.6), (54.3, 18.9),
    ],
    "Odra": [
        (49.9, 17.8), (50.4, 17.3), (51.1, 17.0), (51.6, 16.9),
        (52.0, 15.5), (52.4, 14.6), (53.0, 14.3), (53.5, 14.5),
    ],
    "Łaba": [
        (50.8, 14.4), (50.6, 13.5), (51.0, 12.8), (51.4, 12.0),
        (52.0, 11.8), (52.6, 11.5), (53.3, 10.6), (53.6, 10.0),
    ],
    "Dunaj": [
        (48.8, 10.0), (48.6, 11.5), (48.4, 13.0), (48.2, 14.3),
        (48.2, 16.4), (48.1, 17.1), (47.7, 18.2), (47.5, 19.1),
        (46.8, 18.9), (46.2, 18.8), (45.5, 19.1), (45.0, 20.0),
        (44.8, 21.0), (44.4, 22.5), (44.1, 23.5), (43.8, 25.5),
        (44.0, 26.5), (44.4, 27.5), (45.0, 29.0), (45.3, 29.7),
    ],
    "Dniepr": [
        (54.5, 31.5), (53.5, 31.0), (52.5, 31.0), (51.5, 31.0),
        (50.5, 30.5), (49.5, 32.0), (48.5, 33.5), (47.5, 34.5),
        (46.8, 35.0),
    ],
    "Ren": [
        (47.6, 9.5), (48.3, 8.2), (49.0, 8.4), (49.5, 8.4),
        (50.0, 7.6), (50.6, 7.0), (51.0, 6.8), (51.8, 6.0),
    ],
    "Sawa": [
        (46.1, 14.5), (45.8, 15.6), (45.3, 17.0), (45.0, 18.5),
        (44.8, 20.4),
    ],
    "Morawa": [
        (49.5, 16.8), (49.0, 17.0), (48.5, 17.0), (48.2, 16.9),
    ],
    "Bug": [
        (50.4, 23.6), (51.0, 23.5), (51.5, 23.8), (52.0, 23.6),
        (52.5, 23.2), (52.8, 22.0),
    ],
    "Warta": [
        (51.5, 18.6), (51.8, 17.8), (52.2, 17.1), (52.3, 16.0),
        (52.5, 15.5),
    ],
    "Neman": [
        (53.9, 24.0), (54.2, 23.5), (54.5, 23.8), (54.8, 24.0),
        (55.1, 23.5), (55.3, 21.5),
    ],
    "Drina": [
        (44.8, 19.4), (44.3, 19.3), (43.8, 19.5), (43.3, 19.4),
    ],
}

RIVER_COLOR_BASE = (28, 34, 20)
draw = ImageDraw.Draw(out)

def catmull_rom(p0, p1, p2, p3, num=20):
    """Generuje punkty na krzywej Catmull-Rom między p1 a p2."""
    pts = []
    for i in range(num):
        t = i / num
        t2 = t * t
        t3 = t2 * t
        x = 0.5 * (
            2*p1[0] + (-p0[0]+p2[0])*t +
            (2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t2 +
            (-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t3
        )
        y = 0.5 * (
            2*p1[1] + (-p0[1]+p2[1])*t +
            (2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t2 +
            (-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t3
        )
        pts.append((int(x), int(y)))
    return pts

def smooth_river(points):
    """Catmull-Rom spline przez waypoints — gładka krzywa."""
    if len(points) < 2:
        return points
    padded = [points[0]] + points + [points[-1]]
    smooth = []
    for i in range(len(padded) - 3):
        smooth.extend(catmull_rom(padded[i], padded[i+1], padded[i+2], padded[i+3], num=16))
    smooth.append(padded[-2])
    return smooth

def draw_river(draw, coords, base_width, name):
    """Rysuje rzekę z gradientem szerokości (cieńsza u źródła, szersza u ujścia)
    i drobnymi perturbacjami dla naturalności."""
    points = [geo_to_px(lat, lon) for lat, lon in coords]
    smooth = smooth_river(points)
    n = len(smooth)
    for i in range(n - 1):
        progress = i / max(1, n - 1)
        w = max(1, int(base_width * (0.4 + 0.6 * progress)))
        jitter = rng.randint(-8, 8)
        alpha = 160 + jitter + int(40 * progress)
        alpha = max(120, min(220, alpha))
        color = (
            RIVER_COLOR_BASE[0] + rng.randint(-3, 3),
            RIVER_COLOR_BASE[1] + rng.randint(-3, 3),
            RIVER_COLOR_BASE[2] + rng.randint(-3, 3),
            alpha,
        )
        draw.line([smooth[i], smooth[i+1]], fill=color, width=w)

MAJOR = ("Dunaj", "Dniepr", "Ren", "Wisła", "Odra", "Łaba")

for name, coords in RIVERS.items():
    base_w = 6 if name in ("Dunaj", "Dniepr") else 5 if name in MAJOR else 3
    draw_river(draw, coords, base_w, name)

print(f"Rivers drawn: {len(RIVERS)}")

# === Symboliczne drzewa ===

TREE_COLORS = [
    (22, 36, 14),
    (26, 40, 16),
    (20, 32, 12),
    (24, 38, 15),
    (18, 30, 11),
]

def draw_conifer(draw, cx, cy, size, color):
    """Choinka — 3 warstwy trójkątów + pień."""
    s = size
    trunk_c = tuple(max(0, c - 10) for c in color)
    tw = max(2, s // 4)
    th = s // 3
    draw.rectangle([cx - tw//2, cy + s//2 - th//2, cx + tw//2, cy + s//2 + th//2], fill=trunk_c + (200,))
    layers = [
        (s * 0.55, cy + s * 0.25),
        (s * 0.45, cy - s * 0.05),
        (s * 0.30, cy - s * 0.30),
    ]
    for half_w, top_y in layers:
        draw.polygon([
            (cx, top_y - s * 0.25),
            (cx - half_w, top_y + s * 0.15),
            (cx + half_w, top_y + s * 0.15),
        ], fill=color + (180,))

def draw_deciduous(draw, cx, cy, size, color):
    """Liściasty — bujna korona z nakładających się okręgów."""
    s = size
    trunk_c = tuple(max(0, c - 12) for c in color)
    tw = max(2, s // 4)
    draw.rectangle([cx - tw//2, cy + s*0.1, cx + tw//2, cy + s*0.45], fill=trunk_c + (200,))
    r = int(s * 0.38)
    offsets = [(0, -s*0.15), (-s*0.15, 0), (s*0.15, 0), (0, s*0.05)]
    lighter = tuple(min(255, c + 4) for c in color)
    for ox, oy in offsets:
        draw.ellipse([cx + ox - r, cy + oy - r, cx + ox + r, cy + oy + r], fill=color + (170,))
    draw.ellipse([cx - r*0.7, cy - s*0.2 - r*0.7, cx + r*0.7, cy - s*0.2 + r*0.7], fill=lighter + (160,))

# === Skupiska leśne ===
MARGIN = 20
placed = 0

def is_land(px, py):
    if px < 0 or px >= w or py < 0 or py >= h:
        return False
    return alpha_px[px, py] >= 200

def elev_ok(px, py):
    if not is_land(px, py):
        return False
    return gray_values[py][px] <= 120

# Generuj centra skupisk
clusters = []
for _ in range(1200):
    cx = rng.randint(MARGIN, w - MARGIN - 1)
    cy = rng.randint(MARGIN, h - MARGIN - 1)
    if not elev_ok(cx, cy):
        continue
    gray = gray_values[cy][cx]
    # mniej skupisk na wyższych elewacjach
    if gray > 60 and rng.random() > 0.5:
        continue
    if gray > 90 and rng.random() > 0.3:
        continue
    radius = rng.randint(15, 45)
    density = rng.randint(5, 14)
    clusters.append((cx, cy, radius, density))

for cx, cy, radius, density in clusters:
    for _ in range(density):
        ox = int(rng.gauss(0, radius * 0.45))
        oy = int(rng.gauss(0, radius * 0.45))
        tx, ty = cx + ox, cy + oy
        if not elev_ok(tx, ty):
            continue
        size = rng.randint(5, 9)
        color = rng.choice(TREE_COLORS)
        if rng.random() < 0.6:
            draw_conifer(draw, tx, ty, size, color)
        else:
            draw_deciduous(draw, tx, ty, size, color)
        placed += 1

print(f"Forest clusters: {len(clusters)}, trees placed: {placed}")

out.save(OUT, optimize=True)
print(f"Saved: {OUT} ({w}x{h})")
