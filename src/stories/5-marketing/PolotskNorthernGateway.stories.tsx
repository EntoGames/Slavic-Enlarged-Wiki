import * as React from "react";
import type { Story } from "@ladle/react";
import { CopyChip } from "../_helpers/CopyChip";
import { SteamCopyBlock } from "../_helpers/SteamCopyBlock";
import { ScreenshotGallery } from "../_helpers/ScreenshotGallery";

/* ───── Polotsk: Northern Gateway — kingdom sub-mod ───── */

const COVER_SIZE = 512;

const frameStyle: React.CSSProperties = {
  width: COVER_SIZE,
  height: COVER_SIZE,
  position: "relative",
  overflow: "hidden",
  borderRadius: 0,
  border: "none",
  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
  backgroundImage: "url(/marketing/polotsk-kingdom-map.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
};

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(180deg, rgba(28,34,20,0.7) 0%, rgba(28,34,20,0.3) 30%, rgba(28,34,20,0.15) 50%, rgba(28,34,20,0.3) 70%, rgba(28,34,20,0.75) 100%)",
  pointerEvents: "none",
};

const vignetteStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.55) 100%)",
  pointerEvents: "none",
};

const smokeBottomStyle: React.CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: "40%",
  background: "linear-gradient(to top, rgba(28,34,20,0.9) 0%, rgba(28,34,20,0.5) 35%, transparent 100%)",
  pointerEvents: "none",
  zIndex: 0,
};

const smokeTopStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: "25%",
  background: "linear-gradient(to bottom, rgba(28,34,20,0.7) 0%, transparent 100%)",
  pointerEvents: "none",
  zIndex: 0,
};

const brandMarkWrapStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  zIndex: 1,
  filter: "drop-shadow(0 2px 6px #1c2214) drop-shadow(0 4px 12px #1c2214)",
};

const wordmarkStyle: React.CSSProperties = {
  height: 22,
  width: "auto",
  display: "block",
  filter: "brightness(0) invert(1)",
  opacity: 0.9,
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
      <linearGradient id="kol-gold-sept" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#B89A5A" />
        <stop offset="30%" stopColor="#A88845" />
        <stop offset="55%" stopColor="#8E7638" />
        <stop offset="82%" stopColor="#6A5020" />
        <stop offset="100%" stopColor="#806735" />
      </linearGradient>
    </defs>
    <path
      d="M 51.984 4.35 C 51.984 6.752 50.037 8.7 47.634 8.7 C 45.232 8.7 43.284 6.752 43.284 4.35 C 43.284 1.948 45.232 0 47.634 0 C 50.037 0 51.984 1.948 51.984 4.35 Z M 51.984 46.883 C 51.984 49.285 50.037 51.233 47.634 51.233 C 45.232 51.233 43.284 49.285 43.284 46.883 C 43.284 44.481 45.232 42.533 47.634 42.533 C 50.037 42.533 51.984 44.481 51.984 46.883 Z M 59.644 4.405 C 59.644 11.009 54.291 16.362 47.688 16.362 C 41.084 16.362 35.731 11.009 35.731 4.405 C 35.731 4.247 35.734 4.09 35.74 3.933 L 26.705 3.933 L 47.687 40.275 L 68.67 3.933 L 59.635 3.933 C 59.641 4.09 59.644 4.247 59.644 4.405 Z M 43.285 89.416 C 43.285 87.014 45.232 85.067 47.634 85.067 C 50.037 85.067 51.984 87.014 51.984 89.416 C 51.984 91.819 50.037 93.766 47.634 93.766 C 45.232 93.766 43.285 91.819 43.285 89.416 Z M 35.73 89.361 C 35.73 82.758 41.084 77.404 47.687 77.404 C 54.291 77.404 59.644 82.758 59.644 89.361 C 59.644 89.519 59.641 89.677 59.635 89.833 L 68.67 89.833 L 47.687 53.491 L 26.705 89.833 L 35.739 89.833 C 35.733 89.677 35.73 89.519 35.73 89.361 Z M 13.102 21.829 C 15.209 23.046 15.931 25.74 14.714 27.847 C 13.498 29.954 10.804 30.676 8.697 29.459 C 6.59 28.243 5.868 25.549 7.084 23.442 C 8.301 21.335 10.995 20.613 13.102 21.829 Z M 16.878 15.289 C 22.597 18.591 24.556 25.904 21.255 31.622 C 17.953 37.341 10.64 39.301 4.921 35.999 C 4.785 35.92 4.65 35.839 4.517 35.755 L 0 43.579 L 41.965 43.579 L 20.982 7.237 L 16.465 15.061 C 16.604 15.134 16.741 15.21 16.878 15.289 Z M 82.272 71.937 C 80.165 70.721 79.443 68.027 80.659 65.92 C 81.876 63.813 84.57 63.091 86.677 64.307 C 88.784 65.524 89.505 68.218 88.289 70.325 C 87.073 72.432 84.378 73.154 82.272 71.937 Z M 78.496 78.477 C 72.777 75.175 70.818 67.862 74.12 62.144 C 77.421 56.425 84.734 54.465 90.453 57.767 C 90.59 57.846 90.724 57.927 90.857 58.011 L 95.374 50.187 L 53.41 50.187 L 74.392 86.529 L 78.909 78.705 C 78.771 78.632 78.633 78.556 78.496 78.477 Z M 8.697 64.307 C 10.804 63.091 13.498 63.813 14.715 65.92 C 15.931 68.027 15.209 70.721 13.102 71.937 C 10.995 73.154 8.301 72.432 7.085 70.325 C 5.868 68.218 6.59 65.524 8.697 64.307 Z M 4.921 57.768 C 10.64 54.466 17.953 56.425 21.254 62.144 C 24.556 67.863 22.597 75.176 16.878 78.477 C 16.741 78.556 16.604 78.632 16.465 78.705 L 20.982 86.53 L 41.965 50.187 L 0 50.187 L 4.517 58.011 C 4.65 57.928 4.784 57.847 4.921 57.768 Z M 86.677 29.459 C 84.57 30.675 81.876 29.953 80.659 27.846 C 79.443 25.74 80.165 23.045 82.272 21.829 C 84.378 20.613 87.073 21.334 88.289 23.441 C 89.506 25.548 88.784 28.242 86.677 29.459 Z M 90.453 35.999 C 84.734 39.301 77.421 37.342 74.119 31.623 C 70.818 25.904 72.777 18.591 78.496 15.29 C 78.633 15.211 78.77 15.135 78.909 15.062 L 74.391 7.237 L 53.409 43.58 L 95.374 43.58 L 90.856 35.756 C 90.724 35.839 90.589 35.92 90.453 35.999 Z"
      fill="url(#kol-gold-sept)"
      fillRule="evenodd"
    />
  </svg>
);

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
  fontSize: 72,
  letterSpacing: "0.06em",
  background: "linear-gradient(180deg, #f5e0a0 0%, #c5a048 45%, #8a6d30 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  margin: "-4px 0",
  lineHeight: 1,
  fontWeight: 400,
};

const subtitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 20,
  letterSpacing: "0.2em",
  color: "rgba(197,160,72,0.85)",
  textTransform: "uppercase",
  margin: 0,
  lineHeight: 1,
};

const badgeStyle: React.CSSProperties = {
  position: "absolute",
  bottom: 24,
  fontFamily: "var(--font-body)",
  fontSize: 11,
  letterSpacing: "0.15em",
  color: "rgba(197,160,72,0.5)",
  textTransform: "uppercase",
};

const Cover: Story = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <CopyChip kind="component">Polotsk: Northern Gateway</CopyChip>
      <CopyChip kind="token">512 &times; 512 HTML</CopyChip>
    </div>

    <div style={frameStyle} role="img" aria-label="Okladka moda Polotsk: Northern Gateway -- Kingdom sub-mod dla Slavic Enlarged">
      <div style={overlayStyle} />
      <div style={smokeBottomStyle} />
      <div style={smokeTopStyle} />
      <div style={vignetteStyle} />

      <div style={brandMarkWrapStyle}>
        <KolovratGold size={32} />
        <img
          src="/logo/slavic-enlarged-wordmark.svg"
          alt="Slavic Enlarged"
          style={wordmarkStyle}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1, gap: 0, filter: "drop-shadow(0 2px 8px #1c2214) drop-shadow(0 6px 20px #1c2214)" }}>
        <p style={subtitleStyle}>Duchy of</p>
        <p style={titleLargeStyle}>Polotsk</p>
        <p style={titleSmallStyle}>Northern Gateway</p>
      </div>

      <span style={badgeStyle}>Kingdom Sub-mod &middot; Slavic Enlarged</span>
    </div>

    <table style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--fg-on-dark-soft)", borderCollapse: "collapse" }}>
      <tbody>
        <tr>
          <td style={{ padding: "4px 16px 4px 0", color: "var(--fg-meta)" }}>Format docelowy</td>
          <td style={{ padding: "4px 0" }}>PNG 512 &times; 512</td>
        </tr>
        <tr>
          <td style={{ padding: "4px 16px 4px 0", color: "var(--fg-meta)" }}>Prefiks</td>
          <td style={{ padding: "4px 0", fontFamily: "var(--font-mono)", fontSize: 11 }}>sept</td>
        </tr>
      </tbody>
    </table>
  </div>
);
Cover.storyName = "Okladka";

const STEAM_EN = `[h1]Polotsk: Northern Gateway[/h1]
A [b]Slavic Enlarged[/b] kingdom sub-mod for Crusader Kings III.

A kingdom-level sub-mod expanding the Duchy of Polotsk with unique cultures, events, and decisions tied to the northern gateway between the Baltic and the Rus.

[h1]Features[/h1]
[list]
[*] Tribal cultures of the Polotsk region
[*] Royal decision: forge the Polotskian culture
[*] Unique northern trade event chains
[*] Regional modifiers and flavour decisions
[/list]

[h1]Requirements[/h1]
[list]
[*] [url=https://steamcommunity.com/sharedfiles/filedetails/?id=3740630117]Slavic Enlarged[/url] (base mod)
[/list]

[h1]Compatibility[/h1]
[list]
[*] Safe to add mid-campaign
[*] Compatible with other Slavic Enlarged kingdom sub-mods
[/list]

[h1]Languages[/h1]
[list]
[*] English
[*] Polish
[/list]

[url=https://frolicking-donut-9d7999.netlify.app/]Wiki & Documentation[/url]`;

const STEAM_PL = `[h1]Polotsk: Northern Gateway[/h1]
Sub-mod krolewskiego poziomu dla [b]Slavic Enlarged[/b] do Crusader Kings III.

Sub-mod rozszerzajacy Ksiestwo Polockie o unikalne kultury, eventy i decyzje zwiazane z polnocna brama miedzy Baltykiem a Rusia.

[h1]Zawartość[/h1]
[list]
[*] Kultury plemienne regionu Polocka
[*] Decyzja krolewska: stworzenie kultury Polockiej
[*] Unikalne eventy zwiazane z handlem polnocnym
[*] Modyfikatory regionalne i decyzje
[/list]

[h1]Wymagania[/h1]
[list]
[*] [url=https://steamcommunity.com/sharedfiles/filedetails/?id=3740630117]Slavic Enlarged[/url] (mod bazowy)
[/list]

[h1]Kompatybilnosc[/h1]
[list]
[*] Mozna dodac w trakcie kampanii
[*] Kompatybilny z innymi sub-modami krolewskimi Slavic Enlarged
[/list]

[h1]Jezyki[/h1]
[list]
[*] Angielski
[*] Polski
[/list]

[url=https://frolicking-donut-9d7999.netlify.app/]Wiki i dokumentacja[/url]`;

const Overview: Story = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 640 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <CopyChip kind="component">Polotsk: Northern Gateway</CopyChip>
      <CopyChip kind="class">sept</CopyChip>
    </div>
    <div style={{ fontFamily: "var(--font-body)", color: "var(--fg-on-dark)", lineHeight: 1.6 }}>
      <h2 style={{ fontFamily: "var(--font-display)", color: "var(--gold)", textShadow: "var(--shadow-carved)", margin: "0 0 12px" }}>
        Polotsk: Northern Gateway
      </h2>
      <p>Sub-mod krolewskiego poziomu rozszerzajacy Ksiestwo Polockie o unikalne kultury, eventy i decyzje zwiazane z brama polnocna.</p>
      <ul style={{ paddingLeft: 20, marginTop: 12 }}>
        <li>Kultury plemienne regionu Polocka</li>
        <li>Decyzja krolewska: stworzenie kultury Polockiej</li>
        <li>Unikalne eventy zwiazane z handlem polnocnym</li>
        <li>Modyfikatory regionalne i decyzje</li>
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
        Wymaga: Slavic Enlarged
      </span>
      <span style={{
        display: "inline-block",
        padding: "4px 12px",
        borderRadius: "var(--radius-pill)",
        background: "rgba(196,64,64,0.1)",
        border: "1px solid rgba(196,64,64,0.25)",
        fontFamily: "var(--font-body)",
        fontSize: 12,
        color: "rgb(200,120,120)",
      }}>
        Kingdom sub-mod
      </span>
    </div>
    <SteamCopyBlock en={STEAM_EN} pl={STEAM_PL} />
  </div>
);
Overview.storyName = "Przeglad";

const SCREENSHOTS: { src: string; alt: string }[] = [];

const Screenshots: Story = () => (
  <ScreenshotGallery
    modName="Polotsk: Northern Gateway"
    folder="sept"
    screenshots={SCREENSHOTS}
    spec={{ width: 1920, height: 1080, format: "JPG / PNG" }}
  />
);
Screenshots.storyName = "Screenshoty";

export { Cover, Overview, Screenshots };
export default { title: "Marketing / Kingdoms / Polotsk Northern Gateway" };
