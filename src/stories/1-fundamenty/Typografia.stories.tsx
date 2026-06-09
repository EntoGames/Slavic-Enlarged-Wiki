import * as React from "react";
import type { Story } from "@ladle/react";
import { CopyChip } from "../_helpers/CopyChip";

const row = (role: string, cssPrefix: string, family: string, size: string, line: string, text: string) => (
  <div key={role} style={{ marginBottom: 24 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
      <span style={{ color: "var(--gold)", fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", minWidth: 80 }}>{role}</span>
      <CopyChip kind="token">{size}</CopyChip>
      <CopyChip kind="token">{line}</CopyChip>
    </div>
    <div style={{ fontFamily: `var(${family})`, fontSize: `var(${size})`, lineHeight: `var(${line})`, color: "var(--fg-on-dark)", textShadow: family.includes("display") ? "var(--shadow-carved)" : "none" }}>
      {text}
    </div>
  </div>
);

const Skala: Story = () => (
  <div style={{ fontFamily: "var(--font-body)", maxWidth: 800 }}>
    {row("Hero", "--t-hero-*", "--font-display", "--t-hero-size", "--t-hero-line", "Slavic Enlarged")}
    {row("Title", "--t-title-*", "--font-display", "--t-title-size", "--t-title-line", "Kultury slowianskie")}
    {row("Subtitle", "--t-subtitle-*", "--font-display", "--t-subtitle-size", "--t-subtitle-line", "Krywicze — Rod Dzwiny")}
    {row("H2", "--t-h2-*", "--font-display", "--t-h2-size", "--t-h2-line", "Tradycje i innowacje kulturowe")}
    {row("H3", "--t-h3-*", "--font-display", "--t-h3-size", "--t-h3-line", "Etos: Wspolnotowy")}
    {row("Section", "--t-section-*", "--font-display", "--t-section-size", "--t-section-line", "Miejsca swiete")}
    {row("Tag", "--t-tag-*", "--font-display", "--t-tag-size", "--t-tag-line", "Work in Progress")}
    <hr style={{ border: "none", height: 1, background: "rgba(179,153,77,0.2)", margin: "32px 0" }} />
    {row("Body", "--t-body-*", "--font-body", "--t-body-size", "--t-body-line", "Krywicze osiedlili sie w dorzeczu Dzwiny, budujac swoja potege na handlu i rzemioslach. Ich glownym grodem byl Polack.")}
    {row("Body Large", "--t-body-lg-*", "--font-body", "--t-body-lg-size", "--t-body-lg-line", "Jeden panteon, trzy odlamy, pietnascie miejsc swietych.")}
    {row("Caption", "--t-caption-*", "--font-body", "--t-caption-size", "--t-caption-line", "KULTURA WSCHODNIOSLOWIANSKA")}
    {row("Footnote", "--t-foot-*", "--font-body", "--t-foot-size", "--t-foot-line", "Zrodlo: design-docs, iteracja 9.1")}

    <h3 style={{ fontFamily: "var(--font-display)", color: "var(--gold)", fontSize: 22, marginTop: 48, marginBottom: 16, textShadow: "var(--shadow-carved)" }}>Rodziny fontow</h3>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
      <div>
        <div style={{ marginBottom: 6 }}><CopyChip kind="token">--font-display</CopyChip></div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "#fff" }}>Paradox King Script</div>
      </div>
      <div>
        <div style={{ marginBottom: 6 }}><CopyChip kind="token">--font-body</CopyChip></div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 20, color: "#fff" }}>Lato — Regular 400</div>
      </div>
      <div>
        <div style={{ marginBottom: 6 }}><CopyChip kind="token">--font-mono</CopyChip></div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 15, color: "#fff" }}>ui-monospace SF Mono</div>
      </div>
    </div>
  </div>
);
Skala.storyName = "Skala typograficzna";

export { Skala };
export default { title: "Design System / Fundamenty / Typografia" };
