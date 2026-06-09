import * as React from "react";
import type { Story } from "@ladle/react";
import { CopyChip } from "../_helpers/CopyChip";

/* ───── Brand Mark — poprawne uzycie loga ───── */

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 0,
  maxWidth: 700,
};

const swatchBase: React.CSSProperties = {
  position: "relative",
  padding: "28px 22px 18px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 18,
  boxSizing: "border-box",
};

const stageStyle: React.CSSProperties = {
  flex: 1,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 14,
  padding: "18px 12px",
};

const kolovratBase: React.CSSProperties = {
  width: 58,
  height: 58,
  flexShrink: 0,
  WebkitMask: "url(/logo/kolovrat-base.svg) center / contain no-repeat",
  mask: "url(/logo/kolovrat-base.svg) center / contain no-repeat",
};

const wordmarkStyle: React.CSSProperties = {
  height: 38,
  width: "auto",
  display: "block",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 14,
  lineHeight: 1,
  letterSpacing: "0.02em",
};

const noteStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono, monospace)",
  fontSize: 9,
  lineHeight: 1,
  opacity: 0.6,
};

const borderLeft: React.CSSProperties = {
  borderLeft: "1px solid rgba(179,153,77,0.18)",
};

/* ─── Swatch: Color on dark (gold gradient sygnet) ─── */

const darkSwatchStyle: React.CSSProperties = {
  ...swatchBase,
  background: "linear-gradient(rgb(11,16,4) 0%, rgb(26,22,14) 100%)",
};

const darkKolovratStyle: React.CSSProperties = {
  ...kolovratBase,
  background:
    "linear-gradient(140deg, #B89A5A 0%, #A88845 30%, #8E7638 55%, #6A5020 82%, #806735 100%)",
};

const darkWordmarkStyle: React.CSSProperties = {
  ...wordmarkStyle,
  filter: "brightness(0) invert(1)",
};

/* ─── Swatch: White mono on black ─── */

const blackSwatchStyle: React.CSSProperties = {
  ...swatchBase,
  ...borderLeft,
  background: "#000",
};

const blackKolovratStyle: React.CSSProperties = {
  ...kolovratBase,
  background: "#fff",
};

const blackWordmarkStyle: React.CSSProperties = {
  ...wordmarkStyle,
  filter: "brightness(0) invert(1)",
};

/* ─── Swatch: Black mono on parchment ─── */

const whiteSwatchStyle: React.CSSProperties = {
  ...swatchBase,
  ...borderLeft,
  background: "#f3efe7",
};

const whiteKolovratStyle: React.CSSProperties = {
  ...kolovratBase,
  background: "#000",
};

const whiteWordmarkStyle: React.CSSProperties = {
  ...wordmarkStyle,
  filter: "brightness(0)",
};

/* ─── Stories ─── */

const BrandMark: Story = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <CopyChip kind="component">Brand Mark</CopyChip>
      <CopyChip kind="token">kolovrat-base.svg</CopyChip>
      <CopyChip kind="token">slavic-enlarged-wordmark.svg</CopyChip>
    </div>

    <div style={gridStyle}>
      {/* Color on dark */}
      <div style={darkSwatchStyle}>
        <div style={stageStyle}>
          <div style={darkKolovratStyle} aria-hidden="true" />
          <img
            style={darkWordmarkStyle}
            src="/logo/slavic-enlarged-wordmark.svg"
            alt="Slavic Enlarged"
          />
        </div>
        <span style={{ ...labelStyle, color: "#fff" }}>Color · on dark</span>
        <span style={{ ...noteStyle, color: "rgba(255,255,255,0.65)" }}>
          gold gradient sygnet
        </span>
      </div>

      {/* White mono */}
      <div style={blackSwatchStyle}>
        <div style={stageStyle}>
          <div style={blackKolovratStyle} aria-hidden="true" />
          <img
            style={blackWordmarkStyle}
            src="/logo/slavic-enlarged-wordmark.svg"
            alt="Slavic Enlarged"
          />
        </div>
        <span style={{ ...labelStyle, color: "#fff" }}>White · mono</span>
        <span style={{ ...noteStyle, color: "rgba(255,255,255,0.5)" }}>
          on black
        </span>
      </div>

      {/* Black mono */}
      <div style={whiteSwatchStyle}>
        <div style={stageStyle}>
          <div style={whiteKolovratStyle} aria-hidden="true" />
          <img
            style={whiteWordmarkStyle}
            src="/logo/slavic-enlarged-wordmark.svg"
            alt="Slavic Enlarged"
          />
        </div>
        <span style={{ ...labelStyle, color: "#1a160e" }}>Black · mono</span>
        <span style={{ ...noteStyle, color: "rgba(0,0,0,0.55)" }}>
          on parchment
        </span>
      </div>
    </div>

    {/* Specyfikacja */}
    <table
      style={{
        fontFamily: "var(--font-body)",
        fontSize: 13,
        color: "var(--fg-on-dark-soft)",
        borderCollapse: "collapse",
        maxWidth: 700,
      }}
    >
      <tbody>
        <tr>
          <td style={{ padding: "4px 16px 4px 0", color: "var(--fg-meta)" }}>
            Sygnet
          </td>
          <td style={{ padding: "4px 0", fontFamily: "var(--font-mono, monospace)", fontSize: 11 }}>
            kolovrat-base.svg — CSS mask + background color/gradient
          </td>
        </tr>
        <tr>
          <td style={{ padding: "4px 16px 4px 0", color: "var(--fg-meta)" }}>
            Wordmark
          </td>
          <td style={{ padding: "4px 0", fontFamily: "var(--font-mono, monospace)", fontSize: 11 }}>
            slavic-enlarged-wordmark.svg — fill: currentColor
          </td>
        </tr>
        <tr>
          <td style={{ padding: "4px 16px 4px 0", color: "var(--fg-meta)" }}>
            Proporcje
          </td>
          <td style={{ padding: "4px 0" }}>
            Sygnet 58×58 · Wordmark h=38 · Gap 14px
          </td>
        </tr>
        <tr>
          <td style={{ padding: "4px 16px 4px 0", color: "var(--fg-meta)" }}>
            Gradient zlota
          </td>
          <td style={{ padding: "4px 0", fontFamily: "var(--font-mono, monospace)", fontSize: 11 }}>
            140deg: #B89A5A → #A88845 → #8E7638 → #6A5020 → #806735
          </td>
        </tr>
        <tr>
          <td style={{ padding: "4px 16px 4px 0", color: "var(--fg-meta)" }}>
            Tlo dark
          </td>
          <td style={{ padding: "4px 0", fontFamily: "var(--font-mono, monospace)", fontSize: 11 }}>
            linear-gradient(rgb(11,16,4), rgb(26,22,14))
          </td>
        </tr>
        <tr>
          <td style={{ padding: "4px 16px 4px 0", color: "var(--fg-meta)" }}>
            Tlo parchment
          </td>
          <td style={{ padding: "4px 0", fontFamily: "var(--font-mono, monospace)", fontSize: 11 }}>
            #f3efe7
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
BrandMark.storyName = "Brand Mark";

export { BrandMark };
export default { title: "Design System / Fundamenty / Brand Mark" };
