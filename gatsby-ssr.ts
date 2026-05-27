/* =============================================================
   gatsby-ssr.ts
   ─────────────────────────────────────────────────────────────
   Lustro gatsby-browser.ts dla render-time. Ten sam zestaw
   styli musi być wstrzyknięty podczas SSR/SSG, inaczej
   build-out pokaże flash-of-unstyled-content przy hydracji.
   ============================================================= */

import "./src/styles/tokens.css";
import "./src/styles/fonts.css";
import "./src/styles/home.css";
