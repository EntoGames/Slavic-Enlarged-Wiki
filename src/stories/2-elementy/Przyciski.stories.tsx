import * as React from "react";
import type { Story } from "@ladle/react";
import { CopyChip } from "../_helpers/CopyChip";
import "../../styles/home.css";

const Warianty: Story = () => (
  <div style={{ fontFamily: "var(--font-body)", display: "flex", flexDirection: "column", gap: 32 }}>
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <CopyChip kind="class">.wf-btn</CopyChip>
        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 11 }}>domyslny (ghost)</span>
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a className="wf-btn" href="#">Czytaj wiki</a>
        <a className="wf-btn" href="#">Steam Workshop</a>
        <button className="wf-btn" type="button">Disabled look</button>
      </div>
    </div>

    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <CopyChip kind="class">.wf-btn</CopyChip>
        <CopyChip kind="class">.wf-btn--gold</CopyChip>
        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 11 }}>CTA (gradient zloto)</span>
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a className="wf-btn wf-btn--gold" href="#">Zacznij gre</a>
        <a className="wf-btn wf-btn--gold" href="#">Pobierz mod</a>
      </div>
    </div>

    <div>
      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginBottom: 8, letterSpacing: "0.08em" }}>
        Rozmiary i stany
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <a className="wf-btn wf-btn--gold" href="#" style={{ fontSize: 12, padding: "8px 18px" }}>Maly</a>
        <a className="wf-btn wf-btn--gold" href="#">Domyslny</a>
        <a className="wf-btn wf-btn--gold" href="#" style={{ fontSize: 16, padding: "14px 36px" }}>Duzy</a>
      </div>
    </div>
  </div>
);
Warianty.storyName = "Warianty";

export { Warianty };
export default { title: "Design System / Elementy / Przyciski" };
