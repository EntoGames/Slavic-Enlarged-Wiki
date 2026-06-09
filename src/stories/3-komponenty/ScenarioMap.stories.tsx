import * as React from "react";
import type { Story } from "@ladle/react";
import { CopyChip } from "../_helpers/CopyChip";
import { ScenarioMap } from "../../templates/components/ScenarioMap";

const Default: Story = () => (
  <div style={{ maxWidth: 1100, margin: "0 auto" }}>
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16, fontFamily: "var(--font-body)" }}>
      <CopyChip kind="component">ScenarioMap</CopyChip>
      <CopyChip kind="component">Dialog</CopyChip>
      <CopyChip kind="component">Tooltip</CopyChip>
      <CopyChip kind="class">.sm__marker</CopyChip>
      <CopyChip kind="class">.sm__modal</CopyChip>
    </div>
    <ScenarioMap />
  </div>
);
Default.storyName = "Domyslna";

export { Default };
export default { title: "Design System / Komponenty / ScenarioMap" };
