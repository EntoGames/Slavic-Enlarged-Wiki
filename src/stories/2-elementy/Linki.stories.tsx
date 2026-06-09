import * as React from "react";
import type { Story } from "@ladle/react";
import { CopyChip } from "../_helpers/CopyChip";

const Warianty: Story = () => (
  <div className="wf-article" style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.82)", maxWidth: 600 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
      <CopyChip kind="class">.wf-link</CopyChip>
      <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 11 }}>warianty linkow w tresci artykulu</span>
    </div>

    <p>
      Link wewnetrzny: <a className="wf-link" href="#">Krywicze — Rod Dzwiny</a> prowadzi do artykulu kultury.
    </p>
    <p>
      Link zewnetrzny: <a className="wf-link is-external" href="#">Steam Workshop</a> otwiera sie w nowej karcie.
      <CopyChip kind="class">.is-external</CopyChip>
    </p>
    <p>
      Link stub (brak artykulu): <a className="wf-link is-stub" href="#">Zubrowie</a> — artykul w przygotowaniu.
      <CopyChip kind="class">.is-stub</CopyChip>
    </p>
    <p>
      Link missing: <a className="wf-link wf-link--missing" href="#">nieznany-slug</a> — nie pasuje do zadnego wpisu.
      <CopyChip kind="class">.wf-link--missing</CopyChip>
    </p>

    <hr />

    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
      <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 11 }}>Separator</span>
      <CopyChip kind="class">.wf-article hr</CopyChip>
    </div>
    <p>Zlota linia miedzy sekcjami tresci. Gradient od przezroczystego przez zloto z powrotem do przezroczystego.</p>
  </div>
);
Warianty.storyName = "Warianty";

export { Warianty };
export default { title: "Design System / Elementy / Linki" };
