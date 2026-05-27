/* =============================================================
   gatsby-browser.ts
   ─────────────────────────────────────────────────────────────
   Globalne importy uruchamiane raz w przeglądarce (i w SSR).
   Tu wpinamy:
     1. tokeny (CSS variables) — `tokens.css`
     2. deklaracje @font-face dla Paradox King Script + Lato

   Plik leży w korzeniu projektu Gatsby (obok gatsby-config / gatsby-node).
   Jeśli już masz swoje gatsby-browser.ts, po prostu dodaj te dwa importy.
   ============================================================= */

import "./src/styles/tokens.css";
import "./src/styles/fonts.css";
import "./src/styles/home.css";
