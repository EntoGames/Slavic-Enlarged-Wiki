import * as React from "react";
import type { Story } from "@ladle/react";
import { CopyChip } from "../_helpers/CopyChip";
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

const Overview: Story = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 640 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <CopyChip kind="component">Slavic Enlarged</CopyChip>
      <CopyChip kind="token">--gold</CopyChip>
    </div>
    <div style={{ fontFamily: "var(--font-body)", color: "var(--fg-on-dark)", lineHeight: 1.6 }}>
      <h2 style={{ fontFamily: "var(--font-display)", color: "var(--gold)", textShadow: "var(--shadow-carved)", margin: "0 0 12px" }}>
        Slavic Enlarged
      </h2>
      <p>
        Mod bazowy rozszerzajacy slowianskie kultury, wiary i mechaniki w Crusader Kings III.
        Dodaje 35 nowych kultur, unikalne tradycje, reformowalna wiare slowianska
        oraz system eventow i decyzji opartych na slawistyce.
      </p>
      <ul style={{ paddingLeft: 20, marginTop: 12 }}>
        <li>35 nowych kultur (wschodnie, zachodnie, poludniowe)</li>
        <li>Reformowalna wiara slowianska z dogmatami</li>
        <li>Unikalne decyzje: Odnowa Poganska, Wielki Wiec</li>
        <li>Kompatybilnosc z wiekszoscia modow</li>
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

export { Cover, Overview, Screenshots };
export default { title: "Marketing / Slavic Enlarged" };
