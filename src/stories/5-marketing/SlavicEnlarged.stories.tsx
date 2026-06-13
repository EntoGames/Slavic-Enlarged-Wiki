import * as React from "react";
import type { Story } from "@ladle/react";
import { CopyChip } from "../_helpers/CopyChip";
import { SteamCopyBlock } from "../_helpers/SteamCopyBlock";
import { ScreenshotGallery } from "../_helpers/ScreenshotGallery";

/* ───── Slavic Enlarged — mod bazowy ───── */

const coverStyle: React.CSSProperties = {
  maxWidth: 512,
  borderRadius: "var(--radius-sm)",
  border: "1px solid rgba(var(--gold-border-rgb), 0.3)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(var(--gold-border-rgb), 0.1)",
};

const Cover: Story = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <CopyChip kind="component">Slavic Enlarged</CopyChip>
      <CopyChip kind="token">se-cover.png</CopyChip>
    </div>
    <img
      src="/marketing/se-cover.png"
      alt="Slavic Enlarged — okladka Steam Workshop"
      style={coverStyle}
    />
    <table style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--fg-on-dark-soft)", borderCollapse: "collapse" }}>
      <tbody>
        <tr>
          <td style={{ padding: "4px 16px 4px 0", color: "var(--fg-meta)" }}>Format</td>
          <td style={{ padding: "4px 0" }}>PNG 512 &times; 512</td>
        </tr>
        <tr>
          <td style={{ padding: "4px 16px 4px 0", color: "var(--fg-meta)" }}>Rozmiar</td>
          <td style={{ padding: "4px 0" }}>~233 KB</td>
        </tr>
        <tr>
          <td style={{ padding: "4px 16px 4px 0", color: "var(--fg-meta)" }}>Plik zrodlowy</td>
          <td style={{ padding: "4px 0", fontFamily: "var(--font-mono)", fontSize: 11 }}>Slavic-Enlarged/thumbnail.png</td>
        </tr>
        <tr>
          <td style={{ padding: "4px 16px 4px 0", color: "var(--fg-meta)" }}>Uzycie</td>
          <td style={{ padding: "4px 0" }}>Steam Workshop, Paradox Mods</td>
        </tr>
      </tbody>
    </table>
  </div>
);
Cover.storyName = "Okladka";

const STEAM_EN = `[h1]Slavic Enlarged[/h1]
A comprehensive Slavic overhaul for [b]Crusader Kings III[/b] — 35 cultures, 4 faith branches, 15 holy sites and a holy-site-driven reformation reward system.

[h1]What does this mod do?[/h1]
Slavic Enlarged replaces the base game's broad Slavic cultures with historical tribes and gives Slavic paganism a three-branch regional structure with its own reformation mechanic.

[h1]Cultures — 31 new + 4 vanilla corrections[/h1]
[b]Eastern (11)[/b]
Krivichians, Vyatichi, Drevlyans, Dregovichs, Polyans, Ulichs, Radimichs, Polochans, Severian, Tivertsi, Ilmenian

[b]Southern (7)[/b]
Travunians, Docleani, Timocani, Branicevci, Smolyani, Pannonian Slavs, Draguvites

[b]Western & Polabian (12)[/b]
Polans, Goplans, Mazovians, Kashubians, Nitrianians, Hevelli, Wagrians, Obodrites, Lutici, Rani, Sorbian, Drevani

[b]Vanilla corrections (+4)[/b]
Vistulan, Silesian, Pommeranian, Croatian / Serbian / Carantanian

[h1]Religion — 4 Slavic Faiths[/h1]
All Slavic pagans in 867 start in one of three regional branches. A fourth faith — Ancient — represents the common root and holds all 15 holy sites.
[list]
[*] [b]Eastern[/b] — Ruthenia, Polotia (ancestor worship, ritual celebrations, sanctity of nature)
[*] [b]Western[/b] — Polabia, Poland, Bohemia (warmonger, ritual celebrations, sanctity of nature)
[*] [b]Southern[/b] — Balkans (false conversion sanction, ritual celebrations, sanctity of nature)
[*] [b]Ancient[/b] — common root, no starting characters (ancestor worship, sanctity of nature, communal identity)
[/list]
All faiths are polytheist, male-dominated, headless, with married clergy.

[h1]15 Holy Sites[/h1]
[b]Eastern:[/b] Kyiv, Lviv, Minsk, Novgorod, Polotsk
[b]Western:[/b] Arkona (Rugen), Plock, Prague, Legnica, Retra (Mecklenburg)
[b]Southern:[/b] Velbazhd, Tolna, Ston (Zachlumia), Barlad, Szerem

Each holy site grants unique piety and prestige bonuses.

[h1]Reformation Mechanic[/h1]
Reform via the standard vanilla button. The mod checks how many of the 15 Slavic holy sites you control and fires a reward or penalty:
[list]
[*] [b]9+ holy sites[/b] — Great Reformer: +500 piety, +250 prestige, 30-year modifier (+10% piety/mo, +20 same-faith opinion)
[*] [b]6–8 holy sites[/b] — neutral outcome, no bonus or penalty
[*] [b]< 6 holy sites[/b] — Hasty Reformer: -300 piety, 15-year penalty modifier
[/list]
Use the "Assess the Slavic Holy Sites" decision before reforming to check your tier.

[h1]Languages[/h1]
[list]
[*] English — native
[*] Polish — native
[*] French — LLM translation
[*] German — LLM translation
[*] Spanish — LLM translation
[/list]

[h1]Compatibility[/h1]
[list]
[*] Requires CK3 1.19.*
[*] Overrides a few vanilla cultures (Croatian, Serbian, Pommeranian, Carantanian) — may conflict with mods editing the same cultures
[*] Safe to add mid-campaign
[*] Recommended start: 867 AD
[/list]

[h1]Bug Reports & Feedback[/h1]
Found a bug, typo, or have an idea? Leave a comment — I read every report.
Helpful info: start date, cultures/faiths involved, a screenshot or snippet from error.log.

[h1]Enjoying the mod?[/h1]
Drop a rating and share it with friends — it's the best motivation to keep developing!

[url=https://frolicking-donut-9d7999.netlify.app/]Wiki & Documentation[/url]`;

const STEAM_PL = `[h1]Slavic Enlarged[/h1]
Kompleksowy overhaul slowianskich kultur dla [b]Crusader Kings III[/b] — 35 kultur, 4 galęzie wiary, 15 swietych miejsc i system nagrod za reformacje oparty na swietych miejscach.

[h1]Co robi ten mod?[/h1]
Slavic Enlarged zastepuje ogolne slowianskie kultury z podstawowej gry historycznymi plemionami i nadaje slowiańskiemu poganstwu trójgaleziowa strukture regionalna z wlasna mechanika reformacji.

[h1]Kultury — 31 nowych + 4 korekty vanilla[/h1]
[b]Wschodnie (11)[/b]
Krywiczanie, Wiatyczanie, Drewlanie, Dregowiczanie, Polanie, Uliczanie, Radymiczanie, Poloczanie, Siewierzanie, Tywerce, Ilmeńscy

[b]Poludniowe (7)[/b]
Trawunianie, Dukljanie, Timoczanie, Braniczewcy, Smolanie, Slowianie Panonscy, Draguwici

[b]Zachodnie i Polabskie (12)[/b]
Polanie, Goplanie, Mazowszanie, Kaszubi, Nitranie, Hawelanie, Wagrowie, Obodryci, Lucice, Ranie, Serbowie Luzyccy, Drzewanie

[b]Korekty vanilla (+4)[/b]
Wislanie, Slezanie, Pomorzanie, Chorwaci / Serbowie / Karantanie

[h1]Religia — 4 wiary slowianskie[/h1]
Wszyscy slowiansey poganie w 867 zaczynaja w jednej z trzech galezi regionalnych. Czwarta wiara — Starozytna — reprezentuje wspolny korzen i posiada wszystkie 15 swietych miejsc.
[list]
[*] [b]Wschodnia[/b] — Rus, Polocie (kult przodkow, obrzedy rytualne, swietosc natury)
[*] [b]Zachodnia[/b] — Polabie, Polska, Czechy (wojowniczosc, obrzedy rytualne, swietosc natury)
[*] [b]Poludniowa[/b] — Balkany (sankcja falszyweg nawrocenia, obrzedy rytualne, swietosc natury)
[*] [b]Starozytna[/b] — wspolny korzen, brak startowych postaci (kult przodkow, swietosc natury, tozsamosc wspolnotowa)
[/list]
Wszystkie wiary sa politeistyczne, z dominacja meska, bez glowy kosciola, z zonatym duchowienstwem.

[h1]15 swietych miejsc[/h1]
[b]Wschodnie:[/b] Kijow, Lwow, Minsk, Nowgorod, Polock
[b]Zachodnie:[/b] Arkona (Rugia), Plock, Praga, Legnica, Retra (Meklemburgia)
[b]Poludniowe:[/b] Welbazd, Tolna, Ston (Zachlumia), Barlad, Szerem

Kazde swiete miejsce daje unikalne bonusy do poboznosci i prestizu.

[h1]Mechanika reformacji[/h1]
Reformuj standardowym przyciskiem vanilla. Mod sprawdza ile z 15 slowianskich swietych miejsc kontrolujesz i przyznaje nagrode lub kare:
[list]
[*] [b]9+ swietych miejsc[/b] — Wielki Reformator: +500 poboznosci, +250 prestizu, 30-letni modyfikator (+10% poboznosci/msc, +20 opinia tej samej wiary)
[*] [b]6–8 swietych miejsc[/b] — neutralny wynik, bez bonusu i kary
[*] [b]< 6 swietych miejsc[/b] — Pospieszny Reformator: -300 poboznosci, 15-letni modyfikator kary
[/list]
Uzyj decyzji "Oceń Slowianskie Swiete Miejsca" przed reformacja, by sprawdzic swoj poziom.

[h1]Jezyki[/h1]
[list]
[*] Angielski — natywny
[*] Polski — natywny
[*] Francuski — tlumaczenie LLM
[*] Niemiecki — tlumaczenie LLM
[*] Hiszpanski — tlumaczenie LLM
[/list]

[h1]Kompatybilnosc[/h1]
[list]
[*] Wymaga CK3 1.19.*
[*] Nadpisuje kilka kultur vanilla (Chorwacka, Serbska, Pomorska, Karantanska) — moze kolidowac z modami edytujacymi te same kultury
[*] Mozna dodac w trakcie kampanii
[*] Zalecany start: 867 n.e.
[/list]

[h1]Bledy i opinie[/h1]
Znalazles blad, literowke, albo masz pomysl? Zostaw komentarz — czytam kazde zgloszenie.
Przydatne info: data startu, kultury/wiary, screenshot lub fragment error.log.

[h1]Podoba Ci sie mod?[/h1]
Zostaw ocene i podziel sie ze znajomymi — to najlepsza motywacja do dalszego rozwoju!

[url=https://frolicking-donut-9d7999.netlify.app/]Wiki i dokumentacja[/url]`;

const Overview: Story = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <CopyChip kind="component">Slavic Enlarged</CopyChip>
      <CopyChip kind="token">--gold</CopyChip>
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
        Steam Workshop
      </span>
      <span style={{
        display: "inline-block",
        padding: "4px 12px",
        borderRadius: "var(--radius-pill)",
        background: "rgba(131,200,77,0.08)",
        border: "1px solid rgba(131,200,77,0.25)",
        fontFamily: "var(--font-body)",
        fontSize: 12,
        color: "rgb(163,214,120)",
      }}>
        Brak wymaganych DLC
      </span>
    </div>
    <SteamCopyBlock en={STEAM_EN} pl={STEAM_PL} />
  </div>
);
Overview.storyName = "Przeglad";

/* ───── Screenshots ───── */

const SE_SCREENSHOTS: { src: string; alt: string }[] = [
  { src: "/marketing/screenshots/se/01-mapa-kultur.png", alt: "Mapa kultur slowianskich — przeglad regionow" },
  { src: "/marketing/screenshots/se/02-reddit-announcement.png", alt: "Post na Reddit — ogloszenie premiery moda" },
];

const Screenshots: Story = () => (
  <ScreenshotGallery
    modName="Slavic Enlarged"
    folder="se"
    screenshots={SE_SCREENSHOTS}
    spec={{ width: 1920, height: 1080, format: "JPG / PNG" }}
  />
);
Screenshots.storyName = "Screenshoty";

/* ─── Reddit Milestone 1200×628 — 1000 visitors ─── */

const REDDIT_W = 1200;
const REDDIT_H = 628;

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
      <linearGradient id="kol-gold-r" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#B89A5A" />
        <stop offset="30%" stopColor="#A88845" />
        <stop offset="55%" stopColor="#8E7638" />
        <stop offset="82%" stopColor="#6A5020" />
        <stop offset="100%" stopColor="#806735" />
      </linearGradient>
    </defs>
    <path
      d="M 51.984 4.35 C 51.984 6.752 50.037 8.7 47.634 8.7 C 45.232 8.7 43.284 6.752 43.284 4.35 C 43.284 1.948 45.232 0 47.634 0 C 50.037 0 51.984 1.948 51.984 4.35 Z M 51.984 46.883 C 51.984 49.285 50.037 51.233 47.634 51.233 C 45.232 51.233 43.284 49.285 43.284 46.883 C 43.284 44.481 45.232 42.533 47.634 42.533 C 50.037 42.533 51.984 44.481 51.984 46.883 Z M 59.644 4.405 C 59.644 11.009 54.291 16.362 47.688 16.362 C 41.084 16.362 35.731 11.009 35.731 4.405 C 35.731 4.247 35.734 4.09 35.74 3.933 L 26.705 3.933 L 47.687 40.275 L 68.67 3.933 L 59.635 3.933 C 59.641 4.09 59.644 4.247 59.644 4.405 Z M 43.285 89.416 C 43.285 87.014 45.232 85.067 47.634 85.067 C 50.037 85.067 51.984 87.014 51.984 89.416 C 51.984 91.819 50.037 93.766 47.634 93.766 C 45.232 93.766 43.285 91.819 43.285 89.416 Z M 35.73 89.361 C 35.73 82.758 41.084 77.404 47.687 77.404 C 54.291 77.404 59.644 82.758 59.644 89.361 C 59.644 89.519 59.641 89.677 59.635 89.833 L 68.67 89.833 L 47.687 53.491 L 26.705 89.833 L 35.739 89.833 C 35.733 89.677 35.73 89.519 35.73 89.361 Z M 13.102 21.829 C 15.209 23.046 15.931 25.74 14.714 27.847 C 13.498 29.954 10.804 30.676 8.697 29.459 C 6.59 28.243 5.868 25.549 7.084 23.442 C 8.301 21.335 10.995 20.613 13.102 21.829 Z M 16.878 15.289 C 22.597 18.591 24.556 25.904 21.255 31.622 C 17.953 37.341 10.64 39.301 4.921 35.999 C 4.785 35.92 4.65 35.839 4.517 35.755 L 0 43.579 L 41.965 43.579 L 20.982 7.237 L 16.465 15.061 C 16.604 15.134 16.741 15.21 16.878 15.289 Z M 82.272 71.937 C 80.165 70.721 79.443 68.027 80.659 65.92 C 81.876 63.813 84.57 63.091 86.677 64.307 C 88.784 65.524 89.505 68.218 88.289 70.325 C 87.073 72.432 84.378 73.154 82.272 71.937 Z M 78.496 78.477 C 72.777 75.175 70.818 67.862 74.12 62.144 C 77.421 56.425 84.734 54.465 90.453 57.767 C 90.59 57.846 90.724 57.927 90.857 58.011 L 95.374 50.187 L 53.41 50.187 L 74.392 86.529 L 78.909 78.705 C 78.771 78.632 78.633 78.556 78.496 78.477 Z M 8.697 64.307 C 10.804 63.091 13.498 63.813 14.715 65.92 C 15.931 68.027 15.209 70.721 13.102 71.937 C 10.995 73.154 8.301 72.432 7.085 70.325 C 5.868 68.218 6.59 65.524 8.697 64.307 Z M 4.921 57.768 C 10.64 54.466 17.953 56.425 21.254 62.144 C 24.556 67.863 22.597 75.176 16.878 78.477 C 16.741 78.556 16.604 78.632 16.465 78.705 L 20.982 86.53 L 41.965 50.187 L 0 50.187 L 4.517 58.011 C 4.65 57.928 4.784 57.847 4.921 57.768 Z M 86.677 29.459 C 84.57 30.675 81.876 29.953 80.659 27.846 C 79.443 25.74 80.165 23.045 82.272 21.829 C 84.378 20.613 87.073 21.334 88.289 23.441 C 89.506 25.548 88.784 28.242 86.677 29.459 Z M 90.453 35.999 C 84.734 39.301 77.421 37.342 74.119 31.623 C 70.818 25.904 72.777 18.591 78.496 15.29 C 78.633 15.211 78.77 15.135 78.909 15.062 L 74.391 7.237 L 53.409 43.58 L 95.374 43.58 L 90.856 35.756 C 90.724 35.839 90.589 35.92 90.453 35.999 Z"
      fill="url(#kol-gold-r)"
      fillRule="evenodd"
    />
  </svg>
);

const rdFrameStyle: React.CSSProperties = {
  width: REDDIT_W,
  height: REDDIT_H,
  position: "relative",
  overflow: "hidden",
  borderRadius: 0,
  border: "none",
  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
  backgroundImage: "url(/marketing/Pergamin_1920x1080.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const rdOverlayStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(135deg, rgba(28,34,20,0.92) 0%, rgba(28,34,20,0.85) 40%, rgba(28,34,20,0.88) 100%)",
  pointerEvents: "none",
};

const rdVignetteStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgba(28,34,20,0.5) 100%)",
  pointerEvents: "none",
};

const rdContentStyle: React.CSSProperties = {
  position: "relative",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 0,
  textAlign: "center",
};

/* Big celebratory number */
const rdBigNumberStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 120,
  fontWeight: 400,
  letterSpacing: "0.05em",
  lineHeight: 1,
  margin: 0,
  background: "linear-gradient(180deg, #f5e8c0 0%, #c5a048 45%, #8a6d30 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  filter: "drop-shadow(0 4px 20px rgba(197,160,72,0.3))",
};

const rdLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 22,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.7)",
  margin: 0,
  lineHeight: 1,
};

const rdSubtextStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 16,
  color: "rgba(255,255,255,0.45)",
  letterSpacing: "0.03em",
  margin: 0,
  lineHeight: 1.4,
};

const rdStatRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 48,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 16,
};

const rdStatStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
};

const rdStatNumStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 36,
  letterSpacing: "0.05em",
  lineHeight: 1,
  margin: 0,
  color: "#c5a048",
};

const rdStatLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.4)",
  margin: 0,
};

const rdFooterStyle: React.CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 52,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  background: "linear-gradient(180deg, transparent 0%, rgba(28,34,20,0.8) 50%)",
  zIndex: 3,
};

const rdFooterTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 18,
  color: "#c5a048",
  letterSpacing: "0.1em",
  textShadow: "0 2px 8px rgba(0,0,0,0.5)",
};

const rdDotSep: React.CSSProperties = {
  width: 4,
  height: 4,
  borderRadius: "50%",
  background: "rgba(255,255,255,0.2)",
  flexShrink: 0,
};

const RedditMilestone: Story = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <CopyChip kind="component">Reddit Milestone</CopyChip>
      <CopyChip kind="token">1200 &times; 628</CopyChip>
    </div>

    {/* === REDDIT GRAPHIC === */}
    <div style={rdFrameStyle}>
      <div style={rdOverlayStyle} />
      <div style={rdVignetteStyle} />

      <div style={rdContentStyle}>
        {/* Logo above content */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
          <div
            style={{
              width: 36,
              height: 36,
              flexShrink: 0,
              WebkitMask: "url(/logo/kolovrat-base.svg) center / contain no-repeat",
              mask: "url(/logo/kolovrat-base.svg) center / contain no-repeat",
              background: "linear-gradient(140deg, #B89A5A 0%, #A88845 30%, #8E7638 55%, #6A5020 82%, #806735 100%)",
            }}
          />
          <img
            src="/logo/slavic-enlarged-wordmark.svg"
            alt="Slavic Enlarged"
            style={{ height: 28, filter: "brightness(0) invert(1) drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }}
          />
        </div>

        {/* Pre-label */}
        <p style={{ ...rdSubtextStyle, marginBottom: 8 }}>in just 2 days</p>

        {/* Big number */}
        <p style={rdBigNumberStyle}>1,000</p>

        {/* Label */}
        <p style={{ ...rdLabelStyle, marginTop: -4 }}>unique visitors</p>

        {/* Stat chips row */}
        <div style={rdStatRowStyle}>
          <div style={rdStatStyle}>
            <p style={rdStatNumStyle}>100+</p>
            <p style={rdStatLabelStyle}>subscribers</p>
          </div>
          <span style={rdDotSep} />
          <div style={rdStatStyle}>
            <p style={rdStatNumStyle}>2</p>
            <p style={rdStatLabelStyle}>days since launch</p>
          </div>
          <span style={rdDotSep} />
          <div style={rdStatStyle}>
            <p style={rdStatNumStyle}>35</p>
            <p style={rdStatLabelStyle}>slavic cultures</p>
          </div>
        </div>

        {/* Thank you */}
        <p style={{ ...rdSubtextStyle, marginTop: 20, fontStyle: "italic" }}>
          Thank you for an amazing start!
        </p>
      </div>

    </div>
  </div>
);
RedditMilestone.storyName = "Reddit — 1000 visitors";

export { Cover, Overview, Screenshots, RedditMilestone };
export default { title: "Marketing / Slavic Enlarged" };
