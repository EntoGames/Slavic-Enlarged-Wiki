import * as React from "react";
import type { Story } from "@ladle/react";
import { CopyChip } from "../_helpers/CopyChip";
import { ScreenshotGallery } from "../_helpers/ScreenshotGallery";

/* ───── Myths & Legends — addon Legend system ───── */

/* ─── Okładka jako HTML (Brand Mark Color + mistyczne płomienie) ─── */

const COVER_SIZE = 512;

const frameStyle: React.CSSProperties = {
  width: COVER_SIZE,
  height: COVER_SIZE,
  position: "relative",
  overflow: "hidden",
  borderRadius: 0,
  border: "none",
  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
  backgroundImage: "url(/marketing/Pergamin_1254x1254.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 0,
};

/* Mistyczne płomienie / duchy SVG */
const MysticFlames: React.FC = () => (
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
      <linearGradient id="ml-flame" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#6a5020" stopOpacity="0" />
        <stop offset="30%" stopColor="#8E7638" />
        <stop offset="60%" stopColor="#c5a048" />
        <stop offset="100%" stopColor="#f5e0a0" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="ml-wisp" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#7a6028" stopOpacity="0" />
        <stop offset="50%" stopColor="#c5a048" />
        <stop offset="100%" stopColor="#e8d080" stopOpacity="0.3" />
      </linearGradient>
      <filter id="ml-glow">
        <feGaussianBlur stdDeviation="4" result="b1" />
        <feMerge>
          <feMergeNode in="b1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="ml-glow-wide">
        <feGaussianBlur stdDeviation="14" result="b2" />
        <feComponentTransfer in="b2">
          <feFuncA type="linear" slope="0.35" />
        </feComponentTransfer>
      </filter>
    </defs>

    {/* ═══ LEWY PŁOMIEŃ — główny, falujący ═══ */}
    <g opacity="0.4">
      <path
        d="M80,512 Q75,460 90,420 Q100,390 85,350 Q70,310 95,270 Q110,240 90,200 Q75,170 100,130 Q115,100 95,60 Q85,35 100,0"
        fill="none" stroke="#c5a048" strokeWidth="8"
        strokeLinecap="round" filter="url(#ml-glow-wide)" opacity="0.4"
      />
      <path
        d="M80,512 Q75,460 90,420 Q100,390 85,350 Q70,310 95,270 Q110,240 90,200 Q75,170 100,130 Q115,100 95,60 Q85,35 100,0"
        fill="none" stroke="url(#ml-flame)" strokeWidth="2"
        strokeLinecap="round" filter="url(#ml-glow)"
      />
      {/* Mniejszy wispotwór obok */}
      <path
        d="M60,512 Q55,475 68,445 Q78,420 65,390 Q52,360 70,325 Q82,298 68,265"
        fill="none" stroke="url(#ml-wisp)" strokeWidth="1.2"
        strokeLinecap="round" filter="url(#ml-glow)" opacity="0.45"
      />
      {/* Iskra odchodząca */}
      <path
        d="M95,270 Q115,255 120,235"
        fill="none" stroke="url(#ml-wisp)" strokeWidth="0.8"
        strokeLinecap="round" filter="url(#ml-glow)" opacity="0.3"
      />
      <path
        d="M85,350 Q65,340 55,320"
        fill="none" stroke="url(#ml-wisp)" strokeWidth="0.8"
        strokeLinecap="round" filter="url(#ml-glow)" opacity="0.25"
      />
    </g>

    {/* ═══ PRAWY PŁOMIEŃ — główny ═══ */}
    <g opacity="0.35">
      <path
        d="M432,512 Q437,455 422,415 Q412,385 427,345 Q442,305 417,265 Q402,235 422,195 Q437,165 415,125 Q400,95 420,55 Q430,30 412,0"
        fill="none" stroke="#c5a048" strokeWidth="8"
        strokeLinecap="round" filter="url(#ml-glow-wide)" opacity="0.4"
      />
      <path
        d="M432,512 Q437,455 422,415 Q412,385 427,345 Q442,305 417,265 Q402,235 422,195 Q437,165 415,125 Q400,95 420,55 Q430,30 412,0"
        fill="none" stroke="url(#ml-flame)" strokeWidth="2"
        strokeLinecap="round" filter="url(#ml-glow)"
      />
      <path
        d="M452,512 Q457,470 444,440 Q434,415 447,385 Q460,355 444,320 Q432,295 445,260"
        fill="none" stroke="url(#ml-wisp)" strokeWidth="1.2"
        strokeLinecap="round" filter="url(#ml-glow)" opacity="0.45"
      />
      <path
        d="M417,265 Q397,250 392,230"
        fill="none" stroke="url(#ml-wisp)" strokeWidth="0.8"
        strokeLinecap="round" filter="url(#ml-glow)" opacity="0.3"
      />
      <path
        d="M427,345 Q447,335 457,315"
        fill="none" stroke="url(#ml-wisp)" strokeWidth="0.8"
        strokeLinecap="round" filter="url(#ml-glow)" opacity="0.25"
      />
    </g>

    {/* ═══ CENTRALNY DUCH — subtelny, eteryczny ═══ */}
    <g opacity="0.15">
      <path
        d="M256,512 Q250,470 260,440 Q268,415 252,385 Q240,360 258,330 Q270,305 254,275 Q242,250 260,220 Q272,195 256,165 Q244,140 260,110 Q270,88 256,60"
        fill="none" stroke="url(#ml-wisp)" strokeWidth="1.5"
        strokeLinecap="round" filter="url(#ml-glow)"
      />
    </g>

    {/* ═══ ISKRY / cząsteczki unoszące się ═══ */}
    <g filter="url(#ml-glow)">
      {/* Duże iskry — blisko płomieni */}
      <circle cx="95" cy="160" r="1.8" fill="#e8d080" opacity="0.55" />
      <circle cx="420" cy="175" r="1.6" fill="#c5a048" opacity="0.5" />
      <circle cx="75" cy="280" r="1.5" fill="#c5a048" opacity="0.45" />
      <circle cx="440" cy="260" r="1.4" fill="#e8d080" opacity="0.5" />
      {/* Średnie — rozrzucone */}
      <circle cx="130" cy="120" r="1.2" fill="#e8d080" opacity="0.4" />
      <circle cx="380" cy="130" r="1.3" fill="#c5a048" opacity="0.45" />
      <circle cx="150" cy="340" r="1.1" fill="#c5a048" opacity="0.35" />
      <circle cx="360" cy="350" r="1.2" fill="#e8d080" opacity="0.4" />
      <circle cx="110" cy="220" r="1" fill="#f5e0a0" opacity="0.5" />
      <circle cx="400" cy="210" r="1.1" fill="#f5e0a0" opacity="0.45" />
      {/* Małe — drobne pyłki */}
      <circle cx="170" cy="180" r="0.8" fill="#e8d080" opacity="0.35" />
      <circle cx="340" cy="190" r="0.7" fill="#c5a048" opacity="0.3" />
      <circle cx="200" cy="260" r="0.9" fill="#c5a048" opacity="0.3" />
      <circle cx="310" cy="240" r="0.8" fill="#e8d080" opacity="0.35" />
      <circle cx="140" cy="400" r="0.7" fill="#c5a048" opacity="0.25" />
      <circle cx="370" cy="410" r="0.8" fill="#e8d080" opacity="0.3" />
      <circle cx="220" cy="150" r="0.6" fill="#f5e0a0" opacity="0.3" />
      <circle cx="290" cy="170" r="0.7" fill="#f5e0a0" opacity="0.25" />
      {/* Centralne — wokół tytułu */}
      <circle cx="195" cy="310" r="0.9" fill="#c5a048" opacity="0.3" />
      <circle cx="320" cy="300" r="0.8" fill="#e8d080" opacity="0.3" />
      <circle cx="230" cy="380" r="0.7" fill="#c5a048" opacity="0.25" />
      <circle cx="280" cy="390" r="0.6" fill="#e8d080" opacity="0.2" />
      {/* Górne — unoszące się */}
      <circle cx="160" cy="70" r="0.9" fill="#c5a048" opacity="0.3" />
      <circle cx="350" cy="80" r="0.8" fill="#e8d080" opacity="0.3" />
      <circle cx="250" cy="50" r="0.6" fill="#f5e0a0" opacity="0.2" />
      <circle cx="270" cy="110" r="0.7" fill="#c5a048" opacity="0.25" />
      {/* Dolne — tonące w dymie */}
      <circle cx="180" cy="450" r="1" fill="#c5a048" opacity="0.2" />
      <circle cx="330" cy="460" r="0.9" fill="#e8d080" opacity="0.2" />
      <circle cx="100" cy="440" r="0.7" fill="#c5a048" opacity="0.15" />
      <circle cx="410" cy="430" r="0.8" fill="#e8d080" opacity="0.18" />
    </g>
  </svg>
);

/* Dym / mgła */
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

/* Dark brand overlay */
const overlayStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(180deg, rgba(28,34,20,0.85) 0%, rgba(28,34,20,0.78) 40%, rgba(28,34,20,0.88) 100%)",
  pointerEvents: "none",
};

const vignetteStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.5) 100%)",
  pointerEvents: "none",
};

/* Brand Mark */
const brandMarkWrapStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  zIndex: 1,
  filter: "drop-shadow(0 2px 6px #1c2214) drop-shadow(0 4px 12px #1c2214)",
};

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
      <linearGradient id="kol-gold-ml" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#B89A5A" />
        <stop offset="30%" stopColor="#A88845" />
        <stop offset="55%" stopColor="#8E7638" />
        <stop offset="82%" stopColor="#6A5020" />
        <stop offset="100%" stopColor="#806735" />
      </linearGradient>
    </defs>
    <path
      d="M 51.984 4.35 C 51.984 6.752 50.037 8.7 47.634 8.7 C 45.232 8.7 43.284 6.752 43.284 4.35 C 43.284 1.948 45.232 0 47.634 0 C 50.037 0 51.984 1.948 51.984 4.35 Z M 51.984 46.883 C 51.984 49.285 50.037 51.233 47.634 51.233 C 45.232 51.233 43.284 49.285 43.284 46.883 C 43.284 44.481 45.232 42.533 47.634 42.533 C 50.037 42.533 51.984 44.481 51.984 46.883 Z M 59.644 4.405 C 59.644 11.009 54.291 16.362 47.688 16.362 C 41.084 16.362 35.731 11.009 35.731 4.405 C 35.731 4.247 35.734 4.09 35.74 3.933 L 26.705 3.933 L 47.687 40.275 L 68.67 3.933 L 59.635 3.933 C 59.641 4.09 59.644 4.247 59.644 4.405 Z M 43.285 89.416 C 43.285 87.014 45.232 85.067 47.634 85.067 C 50.037 85.067 51.984 87.014 51.984 89.416 C 51.984 91.819 50.037 93.766 47.634 93.766 C 45.232 93.766 43.285 91.819 43.285 89.416 Z M 35.73 89.361 C 35.73 82.758 41.084 77.404 47.687 77.404 C 54.291 77.404 59.644 82.758 59.644 89.361 C 59.644 89.519 59.641 89.677 59.635 89.833 L 68.67 89.833 L 47.687 53.491 L 26.705 89.833 L 35.739 89.833 C 35.733 89.677 35.73 89.519 35.73 89.361 Z M 13.102 21.829 C 15.209 23.046 15.931 25.74 14.714 27.847 C 13.498 29.954 10.804 30.676 8.697 29.459 C 6.59 28.243 5.868 25.549 7.084 23.442 C 8.301 21.335 10.995 20.613 13.102 21.829 Z M 16.878 15.289 C 22.597 18.591 24.556 25.904 21.255 31.622 C 17.953 37.341 10.64 39.301 4.921 35.999 C 4.785 35.92 4.65 35.839 4.517 35.755 L 0 43.579 L 41.965 43.579 L 20.982 7.237 L 16.465 15.061 C 16.604 15.134 16.741 15.21 16.878 15.289 Z M 82.272 71.937 C 80.165 70.721 79.443 68.027 80.659 65.92 C 81.876 63.813 84.57 63.091 86.677 64.307 C 88.784 65.524 89.505 68.218 88.289 70.325 C 87.073 72.432 84.378 73.154 82.272 71.937 Z M 78.496 78.477 C 72.777 75.175 70.818 67.862 74.12 62.144 C 77.421 56.425 84.734 54.465 90.453 57.767 C 90.59 57.846 90.724 57.927 90.857 58.011 L 95.374 50.187 L 53.41 50.187 L 74.392 86.529 L 78.909 78.705 C 78.771 78.632 78.633 78.556 78.496 78.477 Z M 8.697 64.307 C 10.804 63.091 13.498 63.813 14.715 65.92 C 15.931 68.027 15.209 70.721 13.102 71.937 C 10.995 73.154 8.301 72.432 7.085 70.325 C 5.868 68.218 6.59 65.524 8.697 64.307 Z M 4.921 57.768 C 10.64 54.466 17.953 56.425 21.254 62.144 C 24.556 67.863 22.597 75.176 16.878 78.477 C 16.741 78.556 16.604 78.632 16.465 78.705 L 20.982 86.53 L 41.965 50.187 L 0 50.187 L 4.517 58.011 C 4.65 57.928 4.784 57.847 4.921 57.768 Z M 86.677 29.459 C 84.57 30.675 81.876 29.953 80.659 27.846 C 79.443 25.74 80.165 23.045 82.272 21.829 C 84.378 20.613 87.073 21.334 88.289 23.441 C 89.506 25.548 88.784 28.242 86.677 29.459 Z M 90.453 35.999 C 84.734 39.301 77.421 37.342 74.119 31.623 C 70.818 25.904 72.777 18.591 78.496 15.29 C 78.633 15.211 78.77 15.135 78.909 15.062 L 74.391 7.237 L 53.409 43.58 L 95.374 43.58 L 90.856 35.756 C 90.724 35.839 90.589 35.92 90.453 35.999 Z"
      fill="url(#kol-gold-ml)"
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

const titleAmpStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 22,
  letterSpacing: "0.15em",
  background: "linear-gradient(180deg, #e8d5a0 0%, #c5a048 50%, #8a6d30 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  margin: "2px 0",
  lineHeight: 1,
  fontWeight: 400,
};

const titleLargeStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 62,
  letterSpacing: "0.06em",
  background: "linear-gradient(180deg, #e8d5a0 0%, #c5a048 50%, #8a6d30 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  margin: "-4px 0",
  lineHeight: 1,
  fontWeight: 400,
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
      <CopyChip kind="component">Myths &amp; Legends</CopyChip>
      <CopyChip kind="token">512 &times; 512 HTML</CopyChip>
    </div>

    {/* === OKŁADKA === */}
    <div style={frameStyle}>
      <div style={overlayStyle} />
      <MysticFlames />
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
        <p style={titleSmallStyle}>Myths</p>
        <p style={titleAmpStyle}>&amp;</p>
        <p style={titleLargeStyle}>Legends</p>
      </div>

      <div style={separatorStyle} />

      {/* Badge */}
      <span style={badgeStyle}>Addon · Legends of the Dead</span>
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

const Overview: Story = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 640 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <CopyChip kind="component">Myths &amp; Legends</CopyChip>
      <CopyChip kind="class">sml_</CopyChip>
    </div>
    <div style={{ fontFamily: "var(--font-body)", color: "var(--fg-on-dark)", lineHeight: 1.6 }}>
      <h2 style={{ fontFamily: "var(--font-display)", color: "var(--gold)", textShadow: "var(--shadow-carved)", margin: "0 0 12px" }}>
        Myths &amp; Legends
      </h2>
      <p>
        Addon rozszerzajacy system Legend z DLC Legends of the Dead
        o slowianskie mity, podania i legendy. Dodaje unikalne typy legend
        zwiazane z bogami i tradycjami slowianskimi.
      </p>
      <ul style={{ paddingLeft: 20, marginTop: 12 }}>
        <li>Legendy bogow: Perun, Weles, Mokosz, Swarog</li>
        <li>Legendy miejsc: Arkona, Rethra, Wolin</li>
        <li>Legendy bohaterow: unikalne chain eventy</li>
        <li>Nowe typy legend z dedykowanymi mechanikami</li>
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
        Wymaga: SE + Legends of the Dead
      </span>
      <span style={{
        display: "inline-block",
        padding: "4px 12px",
        borderRadius: "var(--radius-pill)",
        background: "rgba(197,160,72,0.08)",
        border: "1px solid rgba(197,160,72,0.2)",
        fontFamily: "var(--font-body)",
        fontSize: 12,
        color: "var(--fg-meta)",
        fontStyle: "italic",
      }}>
        Faza koncepcyjna
      </span>
    </div>
  </div>
);
Overview.storyName = "Przeglad";

/* ───── Screenshots ───── */

const SML_SCREENSHOTS: { src: string; alt: string }[] = [];

const Screenshots: Story = () => (
  <ScreenshotGallery
    modName="Myths &amp; Legends"
    folder="sml"
    screenshots={SML_SCREENSHOTS}
    spec={{ width: 1920, height: 1080, format: "JPG / PNG" }}
  />
);
Screenshots.storyName = "Screenshoty";

export { Cover, Overview, Screenshots };
export default { title: "Marketing / Myths and Legends" };
