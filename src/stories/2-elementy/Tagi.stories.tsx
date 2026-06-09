import * as React from "react";
import type { Story } from "@ladle/react";
import { CopyChip } from "../_helpers/CopyChip";
import "../../styles/home.css";

const Warianty: Story = () => (
  <div style={{ fontFamily: "var(--font-body)", display: "flex", flexDirection: "column", gap: 32 }}>
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <CopyChip kind="class">.wf-tag</CopyChip>
        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 11 }}>pill na ciemnym tle</span>
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <span className="wf-tag">Work in Progress</span>
        <span className="wf-tag">Nowe w 1.1</span>
        <span className="wf-tag">DLC Required</span>
      </div>
    </div>

    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <CopyChip kind="class">.tag-pos</CopyChip>
        <CopyChip kind="class">.tag-neu</CopyChip>
        <CopyChip kind="class">.tag-neg</CopyChip>
        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 11 }}>tagi inline w tabelach</span>
      </div>
      <table className="wf-table" style={{ borderCollapse: "collapse", fontFamily: "var(--font-body)", fontSize: 14 }}>
        <tbody>
          <tr>
            <td style={{ padding: "6px 16px 6px 0", color: "var(--gold-light)" }}>Kompatybilnosc</td>
            <td style={{ padding: 6 }}><span className="tag-pos">TAK</span></td>
          </tr>
          <tr>
            <td style={{ padding: "6px 16px 6px 0", color: "var(--gold-light)" }}>Testowane</td>
            <td style={{ padding: 6 }}><span className="tag-neu">CZESCIOWO</span></td>
          </tr>
          <tr>
            <td style={{ padding: "6px 16px 6px 0", color: "var(--gold-light)" }}>Przestarzale</td>
            <td style={{ padding: 6 }}><span className="tag-neg">USUNIETY</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <CopyChip kind="class">.mm-pill</CopyChip>
        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 11 }}>pill w mega-menu</span>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <span className="mm-pill">35 kultur</span>
        <span className="mm-pill">REFORMA</span>
        <span className="mm-pill">NOWE</span>
      </div>
    </div>
  </div>
);
Warianty.storyName = "Warianty";

export { Warianty };
export default { title: "Design System / Elementy / Tagi" };
