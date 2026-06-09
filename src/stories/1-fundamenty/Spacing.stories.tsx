import * as React from "react";
import type { Story } from "@ladle/react";
import { CopyChip } from "../_helpers/CopyChip";

const SPACES = [
  ["--space-1", "4px"],
  ["--space-2", "8px"],
  ["--space-3", "10px"],
  ["--space-4", "14px"],
  ["--space-5", "16px"],
  ["--space-6", "20px"],
  ["--space-7", "25px"],
  ["--space-8", "30px"],
  ["--space-9", "40px"],
  ["--space-10", "50px"],
  ["--space-11", "60px"],
  ["--space-12", "70px"],
  ["--space-13", "80px"],
];

const RADII = [
  ["--radius-xs", "4px"],
  ["--radius-sm", "6px"],
  ["--radius-soft", "10px"],
  ["--radius-card", "20px"],
  ["--radius-pill", "999px"],
];

const SpacingScale: Story = () => (
  <div style={{ fontFamily: "var(--font-body)" }}>
    <h3 style={{ fontFamily: "var(--font-display)", color: "var(--gold)", fontSize: 22, marginBottom: 16, textShadow: "var(--shadow-carved)" }}>Spacing</h3>
    {SPACES.map(([token, px]) => (
      <div key={token} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
        <div style={{ minWidth: 110, textAlign: "right" }}>
          <CopyChip kind="token">{token}</CopyChip>
        </div>
        <div style={{
          width: px, height: 20,
          background: "linear-gradient(90deg, var(--gold-deep), var(--gold))",
          borderRadius: 3,
          flexShrink: 0,
        }} />
        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>{px}</span>
      </div>
    ))}

    <h3 style={{ fontFamily: "var(--font-display)", color: "var(--gold)", fontSize: 22, marginTop: 48, marginBottom: 16, textShadow: "var(--shadow-carved)" }}>Border Radius</h3>
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
      {RADII.map(([token, px]) => (
        <div key={token} style={{ textAlign: "center" }}>
          <div style={{
            width: 64, height: 64,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(179,153,77,0.3)",
            borderRadius: px,
          }} />
          <div style={{ marginTop: 8 }}>
            <CopyChip kind="token">{token}</CopyChip>
          </div>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 10 }}>{px}</span>
        </div>
      ))}
    </div>

    <h3 style={{ fontFamily: "var(--font-display)", color: "var(--gold)", fontSize: 22, marginTop: 48, marginBottom: 16, textShadow: "var(--shadow-carved)" }}>Cienie</h3>
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
      {([
        ["Carved", "--shadow-carved"],
        ["Card", "--shadow-card"],
        ["Aura", "--shadow-aura"],
        ["Inset Ring", "--shadow-inset-ring"],
      ] as const).map(([name, token]) => (
        <div key={name} style={{ textAlign: "center" }}>
          <div style={{
            width: 80, height: 80,
            background: "var(--banner-fill)",
            borderRadius: 10,
            boxShadow: `var(${token})`,
          }} />
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, display: "block", marginTop: 8 }}>{name}</span>
          <div style={{ marginTop: 4 }}>
            <CopyChip kind="token">{token}</CopyChip>
          </div>
        </div>
      ))}
    </div>
  </div>
);
SpacingScale.storyName = "Spacing, radius, cienie";

export { SpacingScale };
export default { title: "Design System / Fundamenty / Spacing" };
