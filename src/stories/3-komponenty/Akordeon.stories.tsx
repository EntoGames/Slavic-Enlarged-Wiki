import * as React from "react";
import type { Story } from "@ladle/react";
import { CopyChip } from "../_helpers/CopyChip";
import { Section, SectionGroup } from "../../templates/components/Section";

const SectionDemo: Story = () => (
  <div>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
      <CopyChip kind="component">SectionGroup</CopyChip>
      <CopyChip kind="component">Section</CopyChip>
      <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 11 }}>Ark UI Accordion</span>
    </div>
  <SectionGroup
    value={["demo-section"]}
    onValueChange={() => {}}
  >
    <Section
      id="demo-section"
      title="Kultury wschodniosłowiańskie"
      num={2}
      registerRef={() => {}}
    >
      <div style={{ padding: "16px 24px", color: "var(--fg-on-dark)", fontFamily: "var(--font-body)" }}>
        <p>Krywicze, Polanie kijowscy, Drewlanie, Wołynianie i inni — razem tworzą mozaikę wschodniosłowiańskich kultur osadzonych w dorzeczu Dniepru i Dźwiny.</p>
        <p>Każda kultura posiada unikalne tradycje, etos i zestaw innowacji kulturowych.</p>
      </div>
    </Section>
  </SectionGroup>
  </div>
);
SectionDemo.storyName = "Interaktywna";

const MultipleSections: Story = () => {
  const [openIds, setOpenIds] = React.useState(["section-0"]);
  const titles = ["Wprowadzenie", "Kultury", "Wiara", "Walka Slowianczyzny"];
  return (
    <SectionGroup
      value={openIds}
      onValueChange={({ value }) => setOpenIds(value)}
    >
      {titles.map((t, i) => (
        <Section
          key={i}
          id={`section-${i}`}
          title={t}
          num={i + 1}
          registerRef={() => {}}
        >
          <div style={{ padding: "16px 24px", color: "var(--fg-on-dark)", fontFamily: "var(--font-body)" }}>
            <p>Tresc sekcji „{t}" — kliknij naglowek, by zwinac/rozwinac.</p>
          </div>
        </Section>
      ))}
    </SectionGroup>
  );
};
MultipleSections.storyName = "Akordeon (wiele sekcji)";

export { SectionDemo, MultipleSections };
export default { title: "Design System / Komponenty / Akordeon" };
