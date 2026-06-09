import * as React from "react";
import type { Story } from "@ladle/react";
import { CopyChip } from "../_helpers/CopyChip";

const swatch = (label: string, value: string, css: string) => (
  <div key={label} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
    <div style={{
      width: 48, height: 48, borderRadius: 6,
      background: value,
      border: "1px solid rgba(255,255,255,0.1)",
      flexShrink: 0,
    }} />
    <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <div style={{ color: "#fff", fontWeight: 600, fontSize: 13 }}>{label}</div>
      <CopyChip kind="token">{css}</CopyChip>
    </div>
  </div>
);

const group = (title: string, items: [string, string, string][]) => (
  <div style={{ marginBottom: 32 }}>
    <h3 style={{
      fontFamily: "var(--font-display)", color: "var(--gold)", fontSize: 22,
      marginBottom: 12, textShadow: "var(--shadow-carved)",
    }}>{title}</h3>
    {items.map(([l, v, c]) => swatch(l, v, c))}
  </div>
);

const Paleta: Story = () => (
  <div style={{ fontFamily: "var(--font-body)", maxWidth: 700, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 40px" }}>
    {group("Zloto", [
      ["Gold", "#C5A048", "--gold"],
      ["Gold Bright", "rgb(228,172,66)", "--gold-bright"],
      ["Gold Warm", "rgb(200,153,77)", "--gold-warm"],
      ["Gold Light", "rgb(226,195,121)", "--gold-light"],
      ["Gold Deep", "rgb(126,95,37)", "--gold-deep"],
      ["Gold Shadow", "rgb(98,75,38)", "--gold-shadow"],
      ["Gold Glow", "rgb(169,148,88)", "--gold-glow"],
    ])}
    {group("Bagno", [
      ["Bog Deep", "rgb(28,34,20)", "--bog-deep"],
      ["Bog Warm", "rgb(26,22,14)", "--bog-warm"],
      ["Bog Tar", "rgb(8,13,0)", "--bog-tar"],
      ["Bog Moss", "rgb(31,50,0)", "--bog-moss"],
      ["Bog Stroke", "rgb(14,17,6)", "--bog-stroke"],
      ["Banner Fill", "rgb(57,52,30)", "--banner-fill"],
    ])}
    {group("Powierzchnia", [
      ["Slate", "rgb(107,127,148)", "--slate"],
      ["Parchment", "rgb(217,217,217)", "--parchment"],
      ["Ink", "rgb(0,0,0)", "--ink"],
      ["Ink Soft", "rgba(0,0,0,0.93)", "--ink-soft"],
    ])}
    {group("Akcenty semantyczne", [
      ["Positive", "rgb(131,200,77)", "--accent-positive-solid"],
      ["Info", "rgb(77,193,200)", "--accent-info"],
      ["Warning", "rgb(255,161,161)", "--accent-warning"],
      ["Blood", "rgba(225,98,98,0.5)", "--accent-blood"],
    ])}
  </div>
);
Paleta.storyName = "Paleta kolorow";

export { Paleta };
export default { title: "Design System / Fundamenty / Kolory" };
