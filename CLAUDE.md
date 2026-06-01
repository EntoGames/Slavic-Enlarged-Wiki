# Slavic Enlarged Wiki — Gatsby 5 + Netlify

## Projekt

Strona wiki dla modów Slavic Enlarged & Slavic Struggle of Perun do Crusader Kings III.
Stack: Gatsby 5, TypeScript, CSS Modules, Netlify.

## Struktura

```
wiki/                     ← root projektu Gatsby
├── src/
│   ├── pages/            # index.tsx, 404.tsx
│   ├── templates/        # wiki-article.tsx + komponenty
│   ├── styles/           # tokens.css, fonts.css (globalne)
│   ├── data/             # wiki-sections.ts, use-wiki-index.ts
│   ├── assets/           # fonty (.ttf/.otf), obrazki (.svg)
│   └── utils/            # wiki-paths.ts
├── wiki/                 # Treść markdown (gatsby-source-filesystem)
├── gatsby-config.ts
├── gatsby-node.ts        # createPages + createSchemaCustomization
├── gatsby-browser.ts     # globalne importy CSS
├── gatsby-ssr.ts         # lustro gatsby-browser
├── netlify.toml          # konfiguracja builda Netlify
└── package.json
```

## Netlify

- **URL produkcji:** https://frolicking-donut-9d7999.netlify.app/
- **Repo:** https://github.com/EntoGames/Slavic-Enlarged-Wiki.git
- **Build:** `npm run build` → folder `public/`
- **Node:** 20 (`.nvmrc`)
- Deploy automatyczny po każdym pushu na `main`.

## Zasady pracy

- Język komunikacji: **polski**
- Kodowanie plików: UTF-8 z BOM
- Przed edycją pliku zawsze go przeczytaj
- CSS: wszystkie klasy w `:global()` w plikach `.module.css`
- Prefiks klas: `wf-` (wiki-frontend)
- Fonty: Paradox King Script (display), Lato (body), SatyrSP, SlavicEnlarged (fallbacki)
- Tokeny kolorów i typografii: `src/styles/tokens.css`

## Mapy prowincji

### Jak to działa

Mapy prowincji CK3 są generowane skryptem Python z plików gry. Gotowe PNG trafiają do `wiki/maps/` i są serwowane jako statyczne zasoby Gatsby (przez `static/` lub bezpośrednio z `wiki/maps/`).

### Pliki źródłowe (read-only, pliki gry)

```
<CK3>/game/map_data/
├── provinces.png      # 9216×4608 RGB — każdy pixel = kolor prowincji
├── heightmap.png      # 18432×9216 I;16 — mapa wysokości (2× rozdzielczość)
└── definition.csv     # ID;R;G;B;NAZWA — mapowanie prowincji
```

Ścieżka w shellu: `/sessions/fervent-serene-newton/mnt/Crusader Kings III/game/map_data/`

### Skrypt

```
Slavic Enlarged/scripts/province_painter.py
```

Shell: `/sessions/fervent-serene-newton/mnt/Slavic Enlarged/scripts/province_painter.py`

### Generowanie mapy

```bash
python3 province_painter.py \
  --provinces "KRAKOW:#e63946,WARSAW:#457b9d" \
  --output "ścieżka/do/wiki/maps/nazwa.png" \
  --scale 0.5 \
  --alpha 170 \
  --base hybrid
```

Parametry:
| Parametr | Domyślnie | Opis |
|---|---|---|
| `--provinces` | — | `NAZWA:#kolor` oddzielone przecinkami (nazwy z definition.csv) |
| `--ids` | — | `ID:#kolor` (numeryczne ID prowincji) |
| `--json` | — | Plik JSON `{"NAZWA": "#kolor"}` |
| `--output` | `painted_map.png` | Ścieżka wyjściowa PNG |
| `--scale` | `0.5` | Skala: `0.5` = 4608×2304, `0.25` = 2304×1152, `1.0` = pełna |
| `--alpha` | `170` | Krycie nakładki prowincji (0–255) |
| `--base` | `hybrid` | Tło: `hybrid` (heightmap+prowincje), `heightmap`, `provinces` |

### Workflow na żądanie użytkownika

Gdy użytkownik prosi o mapę z zaznaczonymi prowincjami:

1. Ustal nazwy/ID prowincji i kolory
2. Uruchom skrypt z `--output` wskazującym na `wiki/maps/<nazwa>.png`
3. Skala domyślna: `0.5`; jeśli użytkownik chce podglądu/testów — `0.25`
4. Poinformuj o ścieżce pliku wynikowego

### Wyszukiwanie prowincji

Nazwy prowincji są w `definition.csv` (kolumna 5, wielkie litery). Aby znaleźć prowincje po nazwie:

```bash
grep -i "KRAKOW" "/sessions/fervent-serene-newton/mnt/Crusader Kings III/game/map_data/definition.csv"
```

### Lokalizacja outputów

Mapy do wiki: `Slavic Enlarged - Wiki/wiki/maps/`
Shell: `/sessions/fervent-serene-newton/mnt/Slavic Enlarged/Slavic Enlarged - Wiki/wiki/maps/`
