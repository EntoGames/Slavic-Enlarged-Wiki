import * as React from "react";
import type { Story } from "@ladle/react";
import { CopyChip } from "../_helpers/CopyChip";
import { ScreenshotGallery } from "../_helpers/ScreenshotGallery";

/* ───── Slavic Struggle of Perun — addon Struggle ───── */

/* ─── Okładka jako HTML (Brand Mark Color + pioruny) ─── */

const COVER_SIZE = 512;

const frameStyle: React.CSSProperties = {
  width: COVER_SIZE,
  height: COVER_SIZE,
  position: "relative",
  overflow: "hidden",
  borderRadius: 0,
  border: "none",
  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
  /* Mapa pergaminowa jako tło */
  backgroundImage: "url(/marketing/Pergamin_1254x1254.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 0,
};

/* Pioruny SVG — rozbudowane z rozgałęzieniami */
const LightningBolts: React.FC = () => (
  <svg
    viewBox="0 0 512 512"
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
    }}
  >
    <defs>
      <linearGradient id="lg-bolt" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f5e0a0" />
        <stop offset="35%" stopColor="#c5a048" />
        <stop offset="70%" stopColor="#9a7a35" />
        <stop offset="100%" stopColor="#6a5020" />
      </linearGradient>
      <linearGradient id="lg-branch" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e8d080" />
        <stop offset="100%" stopColor="#7a6028" />
      </linearGradient>
      {/* Ostry glow — rdzeń */}
      <filter id="glow-core">
        <feGaussianBlur stdDeviation="3" result="b1" />
        <feMerge>
          <feMergeNode in="b1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      {/* Szeroki ambient glow */}
      <filter id="glow-ambient">
        <feGaussianBlur stdDeviation="12" result="b2" />
        <feComponentTransfer in="b2">
          <feFuncA type="linear" slope="0.4" />
        </feComponentTransfer>
      </filter>
    </defs>

    {/* ═══ LEWY PIORUN — główny ═══ */}
    <g opacity="0.45">
      {/* Ambient glow */}
      <polyline
        points="105,0 92,48 116,56 84,120 110,128 78,200 104,208 88,280 112,288 94,360"
        fill="none" stroke="#c5a048" strokeWidth="8"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-ambient)" opacity="0.5"
      />
      {/* Rdzeń */}
      <g filter="url(#glow-core)">
        <polyline
          points="105,0 92,48 116,56 84,120 110,128 78,200 104,208 88,280 112,288 94,360"
          fill="none" stroke="url(#lg-bolt)" strokeWidth="2.8"
          strokeLinecap="round" strokeLinejoin="round"
        />
      </g>
      {/* Gałąź 1 — krótka w prawo */}
      <polyline
        points="92,48 72,78 86,84"
        fill="none" stroke="url(#lg-branch)" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-core)" opacity="0.55"
      />
      {/* Gałąź 2 — średnia w lewo */}
      <polyline
        points="110,128 130,158 118,165 134,200"
        fill="none" stroke="url(#lg-branch)" strokeWidth="1.2"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-core)" opacity="0.4"
      />
      {/* Gałąź 3 — krótka w lewo */}
      <polyline
        points="78,200 58,225 70,232"
        fill="none" stroke="url(#lg-branch)" strokeWidth="1"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-core)" opacity="0.35"
      />
      {/* Mikrogałąź */}
      <polyline
        points="88,280 70,298"
        fill="none" stroke="url(#lg-branch)" strokeWidth="0.8"
        strokeLinecap="round" filter="url(#glow-core)" opacity="0.25"
      />
    </g>

    {/* ═══ PRAWY PIORUN — główny ═══ */}
    <g opacity="0.4">
      {/* Ambient glow */}
      <polyline
        points="407,0 420,52 396,60 428,132 404,140 432,215 408,222 424,295 400,302 416,370"
        fill="none" stroke="#c5a048" strokeWidth="8"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-ambient)" opacity="0.5"
      />
      {/* Rdzeń */}
      <g filter="url(#glow-core)">
        <polyline
          points="407,0 420,52 396,60 428,132 404,140 432,215 408,222 424,295 400,302 416,370"
          fill="none" stroke="url(#lg-bolt)" strokeWidth="2.8"
          strokeLinecap="round" strokeLinejoin="round"
        />
      </g>
      {/* Gałąź 1 — w lewo */}
      <polyline
        points="420,52 440,82 426,88"
        fill="none" stroke="url(#lg-branch)" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-core)" opacity="0.55"
      />
      {/* Gałąź 2 — średnia w prawo */}
      <polyline
        points="404,140 384,170 396,176 380,210"
        fill="none" stroke="url(#lg-branch)" strokeWidth="1.2"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-core)" opacity="0.4"
      />
      {/* Gałąź 3 — w prawo */}
      <polyline
        points="432,215 452,240 440,246"
        fill="none" stroke="url(#lg-branch)" strokeWidth="1"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-core)" opacity="0.35"
      />
      {/* Mikrogałąź */}
      <polyline
        points="424,295 442,312"
        fill="none" stroke="url(#lg-branch)" strokeWidth="0.8"
        strokeLinecap="round" filter="url(#glow-core)" opacity="0.25"
      />
    </g>

    {/* ═══ CENTRALNY GÓRNY — cienki ═══ */}
    <g opacity="0.2">
      <polyline
        points="256,0 248,38 266,44 252,88 268,94 256,135"
        fill="none" stroke="url(#lg-branch)" strokeWidth="1.2"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-core)"
      />
      <polyline
        points="248,38 238,56"
        fill="none" stroke="url(#lg-branch)" strokeWidth="0.7"
        strokeLinecap="round" filter="url(#glow-core)" opacity="0.5"
      />
    </g>

    {/* ═══ CENTRALNY DOLNY — cienki ═══ */}
    <g opacity="0.2">
      <polyline
        points="256,385 248,418 266,424 252,460 268,466 256,512"
        fill="none" stroke="url(#lg-branch)" strokeWidth="1.2"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-core)"
      />
      <polyline
        points="266,424 276,442"
        fill="none" stroke="url(#lg-branch)" strokeWidth="0.7"
        strokeLinecap="round" filter="url(#glow-core)" opacity="0.5"
      />
    </g>
  </svg>
);

/* Dym / mgła — gradientowe warstwy */
const smokeBottomStyle: React.CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: "45%",
  background: "linear-gradient(to top, rgba(28,34,20,0.92) 0%, rgba(28,34,20,0.6) 30%, rgba(28,34,20,0.25) 60%, transparent 100%)",
  pointerEvents: "none",
  zIndex: 0,
};

const smokeTopStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: "30%",
  background: "linear-gradient(to bottom, rgba(28,34,20,0.75) 0%, rgba(28,34,20,0.3) 40%, transparent 100%)",
  pointerEvents: "none",
  zIndex: 0,
};

/* Mgła boczna — lewą i prawą stronę */
const smokeSideStyle = (side: "left" | "right"): React.CSSProperties => ({
  position: "absolute",
  top: "20%",
  [side]: 0,
  width: "35%",
  height: "60%",
  background: `radial-gradient(ellipse at ${side === "left" ? "0% 50%" : "100% 50%"}, rgba(28,34,20,0.65) 0%, rgba(28,34,20,0.2) 50%, transparent 80%)`,
  pointerEvents: "none",
  zIndex: 0,
});

/* Mgła centralna — subtelna poświata za tytułem */
const smokeGlowStyle: React.CSSProperties = {
  position: "absolute",
  top: "30%",
  left: "15%",
  right: "15%",
  height: "40%",
  background: "radial-gradient(ellipse at center, rgba(160,130,60,0.06) 0%, rgba(160,130,60,0.02) 40%, transparent 70%)",
  pointerEvents: "none",
  zIndex: 0,
};

/* Dark brand overlay na mapie */
const overlayStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(180deg, rgba(28,34,20,0.85) 0%, rgba(28,34,20,0.78) 40%, rgba(28,34,20,0.88) 100%)",
  pointerEvents: "none",
};

/* Vignette */
const vignetteStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.5) 100%)",
  pointerEvents: "none",
};

/* Brand Mark: Color · on dark — gold gradient sygnet + white wordmark */
const brandMarkWrapStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  zIndex: 1,
  filter: "drop-shadow(0 2px 6px #1c2214) drop-shadow(0 4px 12px #1c2214)",
};

/* Kolovrat inline SVG — gradient fill (CSS mask nie eksportuje do PNG) */
const KolovratGold: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 95.374 93.766"
    style={{ flexShrink: 0 }}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="kol-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#B89A5A" />
        <stop offset="30%" stopColor="#A88845" />
        <stop offset="55%" stopColor="#8E7638" />
        <stop offset="82%" stopColor="#6A5020" />
        <stop offset="100%" stopColor="#806735" />
      </linearGradient>
    </defs>
    <path
      d="M 51.984 4.35 C 51.984 6.752 50.037 8.7 47.634 8.7 C 45.232 8.7 43.284 6.752 43.284 4.35 C 43.284 1.948 45.232 0 47.634 0 C 50.037 0 51.984 1.948 51.984 4.35 Z M 51.984 46.883 C 51.984 49.285 50.037 51.233 47.634 51.233 C 45.232 51.233 43.284 49.285 43.284 46.883 C 43.284 44.481 45.232 42.533 47.634 42.533 C 50.037 42.533 51.984 44.481 51.984 46.883 Z M 59.644 4.405 C 59.644 11.009 54.291 16.362 47.688 16.362 C 41.084 16.362 35.731 11.009 35.731 4.405 C 35.731 4.247 35.734 4.09 35.74 3.933 L 26.705 3.933 L 47.687 40.275 L 68.67 3.933 L 59.635 3.933 C 59.641 4.09 59.644 4.247 59.644 4.405 Z M 43.285 89.416 C 43.285 87.014 45.232 85.067 47.634 85.067 C 50.037 85.067 51.984 87.014 51.984 89.416 C 51.984 91.819 50.037 93.766 47.634 93.766 C 45.232 93.766 43.285 91.819 43.285 89.416 Z M 35.73 89.361 C 35.73 82.758 41.084 77.404 47.687 77.404 C 54.291 77.404 59.644 82.758 59.644 89.361 C 59.644 89.519 59.641 89.677 59.635 89.833 L 68.67 89.833 L 47.687 53.491 L 26.705 89.833 L 35.739 89.833 C 35.733 89.677 35.73 89.519 35.73 89.361 Z M 13.102 21.829 C 15.209 23.046 15.931 25.74 14.714 27.847 C 13.498 29.954 10.804 30.676 8.697 29.459 C 6.59 28.243 5.868 25.549 7.084 23.442 C 8.301 21.335 10.995 20.613 13.102 21.829 Z M 16.878 15.289 C 22.597 18.591 24.556 25.904 21.255 31.622 C 17.953 37.341 10.64 39.301 4.921 35.999 C 4.785 35.92 4.65 35.839 4.517 35.755 L 0 43.579 L 41.965 43.579 L 20.982 7.237 L 16.465 15.061 C 16.604 15.134 16.741 15.21 16.878 15.289 Z M 82.272 71.937 C 80.165 70.721 79.443 68.027 80.659 65.92 C 81.876 63.813 84.57 63.091 86.677 64.307 C 88.784 65.524 89.505 68.218 88.289 70.325 C 87.073 72.432 84.378 73.154 82.272 71.937 Z M 78.496 78.477 C 72.777 75.175 70.818 67.862 74.12 62.144 C 77.421 56.425 84.734 54.465 90.453 57.767 C 90.59 57.846 90.724 57.927 90.857 58.011 L 95.374 50.187 L 53.41 50.187 L 74.392 86.529 L 78.909 78.705 C 78.771 78.632 78.633 78.556 78.496 78.477 Z M 8.697 64.307 C 10.804 63.091 13.498 63.813 14.715 65.92 C 15.931 68.027 15.209 70.721 13.102 71.937 C 10.995 73.154 8.301 72.432 7.085 70.325 C 5.868 68.218 6.59 65.524 8.697 64.307 Z M 4.921 57.768 C 10.64 54.466 17.953 56.425 21.254 62.144 C 24.556 67.863 22.597 75.176 16.878 78.477 C 16.741 78.556 16.604 78.632 16.465 78.705 L 20.982 86.53 L 41.965 50.187 L 0 50.187 L 4.517 58.011 C 4.65 57.928 4.784 57.847 4.921 57.768 Z M 86.677 29.459 C 84.57 30.675 81.876 29.953 80.659 27.846 C 79.443 25.74 80.165 23.045 82.272 21.829 C 84.378 20.613 87.073 21.334 88.289 23.441 C 89.506 25.548 88.784 28.242 86.677 29.459 Z M 90.453 35.999 C 84.734 39.301 77.421 37.342 74.119 31.623 C 70.818 25.904 72.777 18.591 78.496 15.29 C 78.633 15.211 78.77 15.135 78.909 15.062 L 74.391 7.237 L 53.409 43.58 L 95.374 43.58 L 90.856 35.756 C 90.724 35.839 90.589 35.92 90.453 35.999 Z"
      fill="url(#kol-gold)"
      fillRule="evenodd"
    />
  </svg>
);

const wordmarkStyle: React.CSSProperties = {
  height: 22,
  width: "auto",
  display: "block",
  filter: "brightness(0) invert(1)",
  opacity: 0.9,
};

const titleSmallStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 32,
  letterSpacing: "0.25em",
  color: "rgba(255,255,255,0.9)",
  textTransform: "uppercase",
  margin: 0,
  lineHeight: 1,
};

const titleLargeStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 62,
  letterSpacing: "0.08em",
  background: "linear-gradient(180deg, #e8d5a0 0%, #c5a048 50%, #8a6d30 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  margin: "-4px 0",
  lineHeight: 1,
  fontWeight: 400,
};

const subtitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 32,
  letterSpacing: "0.25em",
  color: "rgba(255,255,255,0.9)",
  textTransform: "uppercase",
  margin: 0,
  lineHeight: 1,
};

const separatorStyle: React.CSSProperties = {
  width: 180,
  height: 1,
  background: "rgba(197,160,72,0.2)",
  margin: "10px 0",
};

const badgeStyle: React.CSSProperties = {
  position: "absolute",
  bottom: 24,
  fontFamily: "var(--font-body)",
  fontSize: 9,
  letterSpacing: "0.2em",
  color: "rgba(197,160,72,0.25)",
  textTransform: "uppercase",
};

const Cover: Story = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <CopyChip kind="component">Slavic Struggle of Perun</CopyChip>
      <CopyChip kind="token">512 &times; 512 HTML</CopyChip>
    </div>

    {/* === OKŁADKA === */}
    <div style={frameStyle}>
      <div style={overlayStyle} />
      <LightningBolts />
      <div style={smokeBottomStyle} />
      <div style={smokeTopStyle} />
      <div style={smokeSideStyle("left")} />
      <div style={smokeSideStyle("right")} />
      <div style={smokeGlowStyle} />
      <div style={vignetteStyle} />

      {/* Brand Mark: Color · on dark */}
      <div style={brandMarkWrapStyle}>
        <KolovratGold size={32} />
        <img
          src="/logo/slavic-enlarged-wordmark.svg"
          alt="Slavic Enlarged"
          style={wordmarkStyle}
        />
      </div>

      <div style={separatorStyle} />

      {/* Tytuł centralny */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1, gap: 0, filter: "drop-shadow(0 2px 8px #1c2214) drop-shadow(0 6px 20px #1c2214)" }}>
        <p style={titleSmallStyle}>Slavic</p>
        <p style={titleLargeStyle}>Struggle</p>
        <p style={subtitleStyle}>of Perun</p>
      </div>

      <div style={separatorStyle} />

      {/* Badge */}
      <span style={badgeStyle}>Addon · Fate of Iberia</span>
    </div>

    <table style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--fg-on-dark-soft)", borderCollapse: "collapse" }}>
      <tbody>
        <tr>
          <td style={{ padding: "4px 16px 4px 0", color: "var(--fg-meta)" }}>Format docelowy</td>
          <td style={{ padding: "4px 0" }}>PNG 512 &times; 512</td>
        </tr>
        <tr>
          <td style={{ padding: "4px 16px 4px 0", color: "var(--fg-meta)" }}>Plik zrodlowy</td>
          <td style={{ padding: "4px 0", fontFamily: "var(--font-mono)", fontSize: 11 }}>Renderowane z HTML — eksport do PNG</td>
        </tr>
        <tr>
          <td style={{ padding: "4px 16px 4px 0", color: "var(--fg-meta)" }}>Status</td>
          <td style={{ padding: "4px 0", color: "var(--accent-warning)" }}>Koncept — do zatwierdzenia</td>
        </tr>
      </tbody>
    </table>
  </div>
);
Cover.storyName = "Okladka";

/* ─── Screenshot 1920×1080 — mapa e_slavia w tle ─── */

const SHOT_W = 1920;
const SHOT_H = 1080;

const shotFrameStyle: React.CSSProperties = {
  width: SHOT_W,
  height: SHOT_H,
  position: "relative",
  overflow: "hidden",
  borderRadius: 0,
  border: "none",
  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
  backgroundImage: "url(/marketing/slavia-map-16x9.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 0,
};

/* Warstwa pergaminu pod overlayem — delikatna tekstura */
const shotParchmentStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  backgroundImage: "url(/marketing/Pergamin_1920x1080.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.18,
  pointerEvents: "none",
  mixBlendMode: "screen",
};

const shotOverlayStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(180deg, rgba(28,34,20,0.72) 0%, rgba(28,34,20,0.55) 35%, rgba(28,34,20,0.55) 65%, rgba(28,34,20,0.78) 100%)",
  pointerEvents: "none",
};

/* Pioruny skalowane do 1920×1080 */
const LightningBoltsWide: React.FC = () => (
  <svg
    viewBox="0 0 1920 1080"
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
    }}
  >
    <defs>
      <linearGradient id="lg-bolt-w" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f5e0a0" />
        <stop offset="35%" stopColor="#c5a048" />
        <stop offset="70%" stopColor="#9a7a35" />
        <stop offset="100%" stopColor="#6a5020" />
      </linearGradient>
      <linearGradient id="lg-branch-w" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e8d080" />
        <stop offset="100%" stopColor="#7a6028" />
      </linearGradient>
      <filter id="glow-core-w">
        <feGaussianBlur stdDeviation="4" result="b1" />
        <feMerge>
          <feMergeNode in="b1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="glow-ambient-w">
        <feGaussianBlur stdDeviation="18" result="b2" />
        <feComponentTransfer in="b2">
          <feFuncA type="linear" slope="0.4" />
        </feComponentTransfer>
      </filter>
    </defs>

    {/* LEWY PIORUN */}
    <g opacity="0.4">
      <polyline
        points="280,0 260,80 300,92 250,200 290,215 240,340 280,355 256,460 290,475 264,580"
        fill="none" stroke="#c5a048" strokeWidth="12"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-ambient-w)" opacity="0.5"
      />
      <g filter="url(#glow-core-w)">
        <polyline
          points="280,0 260,80 300,92 250,200 290,215 240,340 280,355 256,460 290,475 264,580"
          fill="none" stroke="url(#lg-bolt-w)" strokeWidth="3.5"
          strokeLinecap="round" strokeLinejoin="round"
        />
      </g>
      <polyline
        points="260,80 230,120 252,128"
        fill="none" stroke="url(#lg-branch-w)" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-core-w)" opacity="0.5"
      />
      <polyline
        points="290,215 320,260 304,268 326,320"
        fill="none" stroke="url(#lg-branch-w)" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-core-w)" opacity="0.4"
      />
      <polyline
        points="240,340 210,380 228,388"
        fill="none" stroke="url(#lg-branch-w)" strokeWidth="1.2"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-core-w)" opacity="0.35"
      />
    </g>

    {/* PRAWY PIORUN */}
    <g opacity="0.35">
      <polyline
        points="1640,0 1660,85 1620,96 1670,210 1630,222 1680,350 1640,362 1660,470 1624,482 1650,590"
        fill="none" stroke="#c5a048" strokeWidth="12"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-ambient-w)" opacity="0.5"
      />
      <g filter="url(#glow-core-w)">
        <polyline
          points="1640,0 1660,85 1620,96 1670,210 1630,222 1680,350 1640,362 1660,470 1624,482 1650,590"
          fill="none" stroke="url(#lg-bolt-w)" strokeWidth="3.5"
          strokeLinecap="round" strokeLinejoin="round"
        />
      </g>
      <polyline
        points="1660,85 1690,125 1672,132"
        fill="none" stroke="url(#lg-branch-w)" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-core-w)" opacity="0.5"
      />
      <polyline
        points="1630,222 1600,265 1618,272 1596,320"
        fill="none" stroke="url(#lg-branch-w)" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-core-w)" opacity="0.4"
      />
    </g>

    {/* DODATKOWY LEWY — daleko od środka */}
    <g opacity="0.2">
      <polyline
        points="80,100 68,180 92,188 60,290 86,298 72,400"
        fill="none" stroke="url(#lg-branch-w)" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-core-w)"
      />
    </g>

    {/* DODATKOWY PRAWY */}
    <g opacity="0.2">
      <polyline
        points="1840,120 1852,200 1828,208 1856,310 1832,318 1848,420"
        fill="none" stroke="url(#lg-branch-w)" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-core-w)"
      />
    </g>
  </svg>
);

const shotSmokeBottomStyle: React.CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: "50%",
  background: "linear-gradient(to top, rgba(28,34,20,0.95) 0%, rgba(28,34,20,0.65) 25%, rgba(28,34,20,0.25) 55%, transparent 100%)",
  pointerEvents: "none",
  zIndex: 0,
};

const shotSmokeTopStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: "35%",
  background: "linear-gradient(to bottom, rgba(28,34,20,0.8) 0%, rgba(28,34,20,0.35) 40%, transparent 100%)",
  pointerEvents: "none",
  zIndex: 0,
};

const shotSmokeGlowStyle: React.CSSProperties = {
  position: "absolute",
  top: "25%",
  left: "20%",
  right: "20%",
  height: "50%",
  background: "radial-gradient(ellipse at center, rgba(160,130,60,0.08) 0%, rgba(160,130,60,0.03) 40%, transparent 70%)",
  pointerEvents: "none",
  zIndex: 0,
};

const shotTitleSmallStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 52,
  letterSpacing: "0.25em",
  color: "rgba(255,255,255,0.9)",
  textTransform: "uppercase",
  margin: 0,
  lineHeight: 1,
};

const shotTitleLargeStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 110,
  letterSpacing: "0.08em",
  background: "linear-gradient(180deg, #e8d5a0 0%, #c5a048 50%, #8a6d30 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  margin: "-6px 0",
  lineHeight: 1,
  fontWeight: 400,
};

const shotSubtitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 52,
  letterSpacing: "0.25em",
  color: "rgba(255,255,255,0.9)",
  textTransform: "uppercase",
  margin: 0,
  lineHeight: 1,
};

const shotSeparatorStyle: React.CSSProperties = {
  width: 320,
  height: 1,
  background: "rgba(197,160,72,0.2)",
  margin: "14px 0",
};

const shotBadgeStyle: React.CSSProperties = {
  position: "absolute",
  bottom: 36,
  fontFamily: "var(--font-body)",
  fontSize: 13,
  letterSpacing: "0.2em",
  color: "rgba(197,160,72,0.3)",
  textTransform: "uppercase",
};

const shotBrandMarkWrapStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 14,
  zIndex: 1,
  filter: "drop-shadow(0 2px 8px #1c2214) drop-shadow(0 6px 24px #1c2214)",
};

const shotWordmarkStyle: React.CSSProperties = {
  height: 32,
  width: "auto",
  display: "block",
  filter: "brightness(0) invert(1)",
  opacity: 0.9,
};

const SteamScreenshot: Story = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <CopyChip kind="component">Slavic Struggle of Perun</CopyChip>
      <CopyChip kind="token">1920 &times; 1080 HTML</CopyChip>
    </div>

    {/* === SCREENSHOT === */}
    <div style={shotFrameStyle}>
      <div style={shotParchmentStyle} />
      <div style={shotOverlayStyle} />
      <div style={shotSmokeBottomStyle} />
      <div style={shotSmokeTopStyle} />
      <div style={shotSmokeGlowStyle} />
      <div style={vignetteStyle} />

      {/* Brand Mark: Color on dark */}
      <div style={shotBrandMarkWrapStyle}>
        <KolovratGold size={44} />
        <img
          src="/logo/slavic-enlarged-wordmark.svg"
          alt="Slavic Enlarged"
          style={shotWordmarkStyle}
        />
      </div>

      <div style={shotSeparatorStyle} />

      {/* Tytuł centralny */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1, gap: 0, filter: "drop-shadow(0 3px 12px #1c2214) drop-shadow(0 8px 30px #1c2214)" }}>
        <p style={shotTitleSmallStyle}>Slavic</p>
        <p style={shotTitleLargeStyle}>Struggle</p>
        <p style={shotSubtitleStyle}>of Perun</p>
      </div>

      <div style={shotSeparatorStyle} />

      {/* Badge */}
      <span style={shotBadgeStyle}>Addon · Fate of Iberia</span>
    </div>

    <table style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--fg-on-dark-soft)", borderCollapse: "collapse" }}>
      <tbody>
        <tr>
          <td style={{ padding: "4px 16px 4px 0", color: "var(--fg-meta)" }}>Format docelowy</td>
          <td style={{ padding: "4px 0" }}>PNG 1920 &times; 1080</td>
        </tr>
        <tr>
          <td style={{ padding: "4px 16px 4px 0", color: "var(--fg-meta)" }}>Tlo</td>
          <td style={{ padding: "4px 0", fontFamily: "var(--font-mono)", fontSize: 11 }}>Mapa e_slavia (se_region_slavia, 509 prowincji)</td>
        </tr>
        <tr>
          <td style={{ padding: "4px 16px 4px 0", color: "var(--fg-meta)" }}>Status</td>
          <td style={{ padding: "4px 0", color: "var(--accent-warning)" }}>Koncept — do zatwierdzenia</td>
        </tr>
      </tbody>
    </table>
  </div>
);
SteamScreenshot.storyName = "Screenshot 1920x1080";

const Overview: Story = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 640 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <CopyChip kind="component">Slavic Struggle of Perun</CopyChip>
      <CopyChip kind="class">sessp_</CopyChip>
    </div>
    <div style={{ fontFamily: "var(--font-body)", color: "var(--fg-on-dark)", lineHeight: 1.6 }}>
      <h2 style={{ fontFamily: "var(--font-display)", color: "var(--gold)", textShadow: "var(--shadow-carved)", margin: "0 0 12px" }}>
        Slavic Struggle of Perun
      </h2>
      <p>
        Addon wprowadzajacy system Walki Slowianczyzny (Struggle) — dynamiczna
        rywalizacja miedzy frakcjami slowianskimi, nordyckimi i stepowymi.
        Wymaga DLC Fate of Iberia.
      </p>
      <ul style={{ paddingLeft: 20, marginTop: 12 }}>
        <li>System Struggle z 4 fazami: Podboj, Opor, Rownowaga, Zjednoczenie</li>
        <li>Unikalne eventy i decyzje per faza</li>
        <li>Catalyst events oparte na historii Slowian</li>
        <li>Koncowki Struggle: Unia Slowian, Dominacja Nordycka, Konwersja</li>
      </ul>
    </div>
    <div style={{ display: "flex", gap: 8 }}>
      <span style={{
        display: "inline-block",
        padding: "4px 12px",
        borderRadius: "var(--radius-pill)",
        background: "rgba(var(--gold-border-rgb), 0.15)",
        border: "1px solid rgba(var(--gold-border-rgb), 0.3)",
        fontFamily: "var(--font-body)",
        fontSize: 12,
        color: "var(--gold-light)",
      }}>
        Wymaga: SE + Fate of Iberia
      </span>
    </div>
  </div>
);
Overview.storyName = "Przeglad";

/* ───── Screenshots ───── */

const SSP_SCREENSHOTS: { src: string; alt: string }[] = [
  // Dodaj screenshoty tutaj:
  // { src: "/marketing/screenshots/ssp/01-struggle.png", alt: "System Struggle — faza Podboju" },
];

const Screenshots: Story = () => (
  <ScreenshotGallery
    modName="Slavic Struggle of Perun"
    folder="ssp"
    screenshots={SSP_SCREENSHOTS}
    spec={{ width: 1920, height: 1080, format: "JPG / PNG" }}
  />
);
Screenshots.storyName = "Screenshoty";

/* ─── Diagram Screenshot 1920×1080 — jak działają zmagania ─── */

/* Phase data */
const PHASES = [
  { id: "swarozyc", name: "Swarozyc's Blessing", sub: "Slavic faith flourishes", color: "#c5a048", glow: "rgba(197,160,72,0.35)", x: 960, y: 160, start: true },
  { id: "perun", name: "Perun's Storm", sub: "Open religious warfare", color: "#b83030", glow: "rgba(184,48,48,0.35)", x: 560, y: 380 },
  { id: "lada", name: "Lada's Harmony", sub: "Compromise & syncretism", color: "#5a9a5a", glow: "rgba(90,154,90,0.35)", x: 1360, y: 380 },
  { id: "veles", name: "Veles's Descent", sub: "Faith goes underground", color: "#5a6a9a", glow: "rgba(90,106,154,0.35)", x: 960, y: 580 },
  { id: "marzanna", name: "Marzanna's Wane", sub: "Faith fading away", color: "#7a5a7a", glow: "rgba(122,90,122,0.35)", x: 960, y: 800 },
] as const;

/* Transitions: [fromId, toId] — bidirectional pairs drawn once */
const TRANSITIONS: [string, string][] = [
  ["swarozyc", "perun"],
  ["swarozyc", "lada"],
  ["perun", "lada"],
  ["perun", "veles"],
  ["lada", "veles"],
  ["veles", "marzanna"],
];

const ENDINGS = [
  { name: "Slavic Revival", color: "#c5a048" },
  { name: "Christian Triumph", color: "#7a9aba" },
  { name: "Eternal Dvoeverie", color: "#9a7ab0" },
] as const;

const phaseById = (id: string) => PHASES.find(p => p.id === id)!;

/* Arrowhead offset from center */
const BOX_W = 280;
const BOX_H = 80;

/* Compute arrow endpoints, shortened to box edge */
function arrowLine(fromId: string, toId: string) {
  const f = phaseById(fromId);
  const t = phaseById(toId);
  const dx = t.x - f.x;
  const dy = t.y - f.y;
  const angle = Math.atan2(dy, dx);
  const halfW = BOX_W / 2 + 12;
  const halfH = BOX_H / 2 + 12;
  /* Ray-box intersection for offset */
  const absC = Math.abs(Math.cos(angle));
  const absS = Math.abs(Math.sin(angle));
  const dist = absC > 0.001 ? Math.min(halfW / absC, halfH / absS) : halfH / absS;
  const x1 = f.x + Math.cos(angle) * dist;
  const y1 = f.y + Math.sin(angle) * dist;
  const x2 = t.x - Math.cos(angle) * dist;
  const y2 = t.y - Math.sin(angle) * dist;
  return { x1, y1, x2, y2 };
}

const diagFrameStyle: React.CSSProperties = {
  width: SHOT_W,
  height: SHOT_H,
  position: "relative",
  overflow: "hidden",
  borderRadius: 0,
  border: "none",
  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
  background: "#1c2214",
};

const diagOverlayStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  backgroundImage: "url(/marketing/Pergamin_1920x1080.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.08,
  mixBlendMode: "screen",
  pointerEvents: "none",
};

const diagVignetteStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(28,34,20,0.6) 100%)",
  pointerEvents: "none",
};

const phaseBoxStyle = (p: typeof PHASES[number]): React.CSSProperties => ({
  position: "absolute",
  left: p.x - BOX_W / 2,
  top: p.y - BOX_H / 2,
  width: BOX_W,
  height: BOX_H,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: `linear-gradient(135deg, rgba(28,34,20,0.85) 0%, rgba(28,34,20,0.95) 100%)`,
  border: `2px solid ${p.color}`,
  borderRadius: 12,
  boxShadow: `0 0 24px ${p.glow}, 0 0 60px ${p.glow}, inset 0 1px 0 rgba(255,255,255,0.05)`,
  zIndex: 2,
});

const phaseNameStyle = (color: string): React.CSSProperties => ({
  fontFamily: "var(--font-display)",
  fontSize: 22,
  fontWeight: 400,
  color,
  letterSpacing: "0.06em",
  lineHeight: 1.2,
  textShadow: `0 0 12px ${color}60`,
  margin: 0,
  textAlign: "center",
});

const phaseSubStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 13,
  color: "rgba(255,255,255,0.5)",
  letterSpacing: "0.03em",
  lineHeight: 1.3,
  margin: 0,
  textAlign: "center",
};

const startBadgeStyle: React.CSSProperties = {
  position: "absolute",
  top: -12,
  right: -10,
  padding: "2px 10px",
  borderRadius: 20,
  background: "#c5a048",
  color: "#1c2214",
  fontFamily: "var(--font-body)",
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

/* Footer bar */
const diagFooterStyle: React.CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 70,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 16,
  background: "linear-gradient(180deg, transparent 0%, rgba(28,34,20,0.9) 40%)",
  zIndex: 3,
};

const diagFooterTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 24,
  color: "#c5a048",
  letterSpacing: "0.1em",
  textShadow: "0 2px 8px rgba(0,0,0,0.6)",
};

/* Heading */
const diagHeadingStyle: React.CSSProperties = {
  position: "absolute",
  top: 32,
  left: 0,
  right: 0,
  textAlign: "center",
  zIndex: 3,
  fontFamily: "var(--font-display)",
  fontSize: 30,
  color: "rgba(255,255,255,0.7)",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  textShadow: "0 2px 12px rgba(0,0,0,0.6)",
  margin: 0,
};

/* Endings row */
const endingBoxStyle = (color: string): React.CSSProperties => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "6px 16px",
  border: `1px solid ${color}60`,
  borderRadius: 8,
  background: "rgba(28,34,20,0.7)",
});

const endingDotStyle = (color: string): React.CSSProperties => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  background: color,
  boxShadow: `0 0 8px ${color}80`,
  flexShrink: 0,
});

const endingLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 13,
  color: "rgba(255,255,255,0.6)",
  letterSpacing: "0.03em",
};

const DiagramScreenshot: Story = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <CopyChip kind="component">Diagram Zmagań</CopyChip>
      <CopyChip kind="token">1920 &times; 1080 HTML</CopyChip>
    </div>

    {/* === DIAGRAM SCREENSHOT === */}
    <div style={diagFrameStyle}>
      <div style={diagOverlayStyle} />
      <div style={diagVignetteStyle} />

      {/* Heading */}
      <p style={diagHeadingStyle}>The Slavic Struggle</p>

      {/* SVG arrows */}
      <svg viewBox="0 0 1920 1080" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1, pointerEvents: "none" }}>
        <defs>
          <marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M 0 1 L 8 5 L 0 9 z" fill="rgba(255,255,255,0.25)" />
          </marker>
        </defs>
        {TRANSITIONS.map(([fId, tId]) => {
          const { x1, y1, x2, y2 } = arrowLine(fId, tId);
          return (
            <line key={`${fId}-${tId}`} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="rgba(255,255,255,0.15)" strokeWidth={2}
              markerEnd="url(#ah)" markerStart="url(#ah)" />
          );
        })}
        {/* "Only exit" annotation next to Marzanna→Veles arrow */}
        <text x={1030} y={695} fill="rgba(255,255,255,0.25)" fontSize={11} fontFamily="var(--font-body)" letterSpacing="0.04em">only exit ↑</text>
      </svg>

      {/* Phase boxes */}
      {PHASES.map(p => (
        <div key={p.id} style={phaseBoxStyle(p)}>
          {p.start && <span style={startBadgeStyle}>START</span>}
          <p style={phaseNameStyle(p.color)}>{p.name}</p>
          <p style={phaseSubStyle}>{p.sub}</p>
        </div>
      ))}

      {/* Endings row */}
      <div style={{
        position: "absolute",
        bottom: 110,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        zIndex: 2,
      }}>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: 11,
          color: "rgba(255,255,255,0.3)",
          letterSpacing: "0.06em",
          margin: 0,
        }}>Available from every phase</p>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            margin: 0,
            marginRight: 4,
          }}>Endings</p>
          {ENDINGS.map(e => (
            <div key={e.name} style={endingBoxStyle(e.color)}>
              <span style={endingDotStyle(e.color)} />
              <span style={endingLabelStyle}>{e.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={diagFooterStyle}>
        <KolovratGold size={32} />
        <span style={diagFooterTitleStyle}>Slavic Struggle of Perun</span>
      </div>
    </div>
  </div>
);
DiagramScreenshot.storyName = "Diagram 1920x1080";

export { Cover, SteamScreenshot, DiagramScreenshot, Overview, Screenshots };
export default { title: "Marketing / Slavic Struggle of Perun" };
