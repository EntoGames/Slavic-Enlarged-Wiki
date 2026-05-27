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
- **Repo:** https://github.com/tomekbbk/Slavic-Enlarged-Wiki.git
- **Build:** `npm run build` → folder `public/`
- **Node:** 20 (`.nvmrc`)
- Deploy automatyczny po każdym pushu na `main`.

## Zasady pracy

- Język komunikacji: **polski**
- Kodowanie plików: UTF-8 z BOM
- Przed edycją pliku zawsze go przeczytaj
- CSS: wszystkie klasy w `:global()` w plikach `.module.css`
- Prefiks klas: `wf-` (wiki-frontend)
- Po każdym pushu **poczekaj ~2 minuty** na build Netlify, potem **zweryfikuj stronę** w przeglądarce pod adresem produkcji
- Fonty: Paradox King Script (display), Lato (body), SatyrSP, SlavicEnlarged (fallbacki)
- Tokeny kolorów i typografii: `src/styles/tokens.css`
