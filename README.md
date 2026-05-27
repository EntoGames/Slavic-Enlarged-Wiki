# Slavic Enlarged Wiki

Wiki dla moda **Slavic Enlarged** i **Slavic Struggle of Perun** do
*Crusader Kings III*. Stack: **Gatsby 5 + TypeScript**, content w
markdownie (`wiki/*.md`), hosting na **Netlify**.

---

## Szybki start

### Lokalnie

```bash
npm install
npm run develop        # http://localhost:8000
```

Treść wiki: `wiki/**/*.md` — drugi agent (lub ty) dopisuje pliki, build
podchwytuje je automatycznie (bez frontmattera).

### Build produkcyjny

```bash
npm run build          # wypluje /public
npm run serve          # podejrzyj produkcję na :9000
```

---

## Deploy na Netlify

### Wariant A — z poziomu UI (zalecane)

1. Wepchnij to repo na GitHuba / GitLaba.
2. W panelu Netlify: **Add new site → Import an existing project**.
3. Wybierz repo. Netlify wykryje `netlify.toml` i ustawi:
   - **Build command:** `npm run build`
   - **Publish directory:** `public`
   - **Node version:** 20
   - **Plugin:** `@netlify/plugin-gatsby` (automatycznie zainstalowany).
4. Kliknij **Deploy**. Pierwszy build ~3–5 min, kolejne <1 min dzięki
   cache plugina Gatsby.

### Wariant B — z CLI

```bash
npm install -g netlify-cli
netlify login
netlify init           # link / create site
netlify deploy --prod  # build + upload
```

### Zmienne środowiskowe (opcjonalne)

Ustaw w panelu Netlify → *Site settings → Environment variables*:

| Zmienna | Domyślna | Co robi |
|---|---|---|
| `SITE_URL` | `https://slavic-enlarged-wiki.netlify.app` | URL dla `sitemap.xml`, kanonicznych meta |

---

## Struktura repo

```
.
├── gatsby-config.ts      ← plugins, siteMetadata
├── gatsby-node.ts        ← onCreateNode + createPages + schema
├── gatsby-browser.ts     ← global CSS (tokens + fonts)
├── gatsby-ssr.ts         ← lustro SSR-side
├── netlify.toml          ← build + headers + plugin
├── tsconfig.json
│
├── wiki/                 ← TREŚĆ (markdown, edytowalna przez agenta-pisarza)
│   ├── 01-wprowadzenie/
│   ├── 02-kultury/
│   ├── 03-wiara/
│   ├── 04-walka-slowianczyzny/
│   ├── 05-decyzje/
│   ├── 06-wydarzenia/
│   ├── 07-scenariusze/
│   ├── 08-poradniki/
│   ├── 09-historia/
│   ├── 10-techniczne/
│   ├── ARCHITECTURE.md   ← (ignorowany przez build)
│   └── index.md
│
└── src/
    ├── pages/
    │   ├── index.tsx     ← strona główna /
    │   └── 404.tsx
    ├── templates/
    │   ├── wiki-article.tsx          ← główny szablon artykułu
    │   ├── wiki-article.module.css
    │   ├── mega-menu.module.css
    │   └── components/
    │       ├── MegaMenu.tsx
    │       ├── WikiLink.tsx
    │       ├── Section.tsx
    │       └── parseBody.tsx
    ├── data/
    │   ├── wiki-sections.ts          ← mapa sekcji (order, label, blurb)
    │   └── use-wiki-index.ts         ← GraphQL → pełny indeks artykułów
    ├── utils/
    │   └── wiki-paths.ts             ← derywacja slug/urlPath/section
    ├── styles/
    │   ├── tokens.css                ← 107 CSS variables z DS
    │   └── fonts.css                 ← @font-face Paradox King Script + Lato
    ├── assets/
    │   ├── fonts/                    ← .ttf / .otf
    │   └── img/                      ← kolovrat.svg, wordmark.svg, icon-traditions.svg
    └── types/
        └── assets.d.ts
```

---

## Dodawanie nowego artykułu

1. Stwórz plik w `wiki/<sekcja>/<podsekcja>/<slug>.md`.
2. Zacznij od `# Tytuł` w pierwszej linii.
3. Pisz markdown. Linki względne (`../wiara/x.md`) są normalizowane
   automatycznie do `/wiki/wiara/x` i dostają hover-popover.
4. Push → Netlify zrobi rebuild → strona pojawi się pod URL-em
   wyliczonym ze ścieżki pliku (prefiksy `NN-` są strippowane).

Pełna specyfikacja schematu (opcjonalny frontmatter, marginalia, related):
patrz `gatsby-template/README.md` w głównym repo deweloperskim.

---

## Konwencje URL

| Plik | URL |
|---|---|
| `wiki/01-wprowadzenie/o-modach.md` | `/wiki/wprowadzenie/o-modach` |
| `wiki/04-walka-slowianczyzny/fazy/burza-peruna.md` | `/wiki/walka-slowianczyzny/fazy/burza-peruna` |
| `wiki/02-kultury/przeglad-kultur.md` | `/wiki/kultury/przeglad-kultur` |
| `wiki/02-kultury/poludniowoslowianskie/README.md` | `/wiki/kultury/poludniowoslowianskie` (jako index folderu) |

Prefiks `NN-` służy WYŁĄCZNIE do sortowania w mega-menu i nie pojawia
się w URL.

---

## Stack

- **Gatsby 5.13** — statyczny SSG, hot-reload, image optimisation
- **TypeScript 5.5** — strict mode, baseUrl `@/*`
- **gatsby-transformer-remark** — markdown → MarkdownRemark
- **html-react-parser** — postprocessing HTML do React (linki wiki,
  hover-popovery)
- **CSS Modules** — scoped klasy + globalne tokeny z DS
- **@netlify/plugin-gatsby** — build cache + SSR/DSG support

---

## Licencje

- **Lato** — SIL Open Font License (wolne).
- **Paradox King Script** — załączony za zgodą społeczności moda.
  Przy publicznym deployu sprawdź licencję u Paradoxa. Bezpieczna
  alternatywa: usuń `.ttf` z `src/assets/fonts/`, zostaw fallbacki
  w `fonts.css` (`Cinzel`, `Trajan Pro`, `Times`).
- **Treść wiki** — CC BY-SA 4.0 (chyba że jasno oznaczona inaczej).
- **Slavic Enlarged & SSoP** — mod fan-made; wszystkie nazwy własne
  i prawa do gry-bazy należą do Paradox Interactive.
