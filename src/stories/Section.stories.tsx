import * as React from "react";
import { useState } from "react";
import type { Story } from "@ladle/react";
import { Section } from "../templates/components/Section";

const SectionDemo: Story = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Section
      id="demo-section"
      title="Kultury wschodniosłowiańskie"
      num={2}
      collapsed={collapsed}
      onToggle={() => setCollapsed((c) => !c)}
      registerRef={() => {}}
    >
      <div style={{ padding: "16px 24px", color: "var(--fg-on-dark)", fontFamily: "var(--font-body)" }}>
        <p>Krywicze, Polanie kijowscy, Drewlanie, Wołynianie i inni — razem tworzą mozaikę wschodniosłowiańskich kultur osadzonych w dorzeczu Dniepru i Dźwiny.</p>
        <p>Każda kultura posiada unikalne tradycje, etos i zestaw innowacji kulturowych.</p>
      </div>
    </Section>
  );
};
SectionDemo.storyName = "Interaktywna";

const MultipleSections: Story = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const titles = ["Wprowadzenie", "Kultury", "Wiara", "Walka Słowiańszczyzny"];
  return (
    <div>
      {titles.map((t, i) => (
        <Section
          key={i}
          id={`section-${i}`}
          title={t}
          num={i + 1}
          collapsed={openIdx !== i}
          onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
          registerRef={() => {}}
        >
          <div style={{ padding: "16px 24px", color: "var(--fg-on-dark)", fontFamily: "var(--font-body)" }}>
            <p>Treść sekcji „{t}" — kliknij nagłówek, by zwinąć/rozwinąć.</p>
          </div>
        </Section>
      ))}
    </div>
  );
};
MultipleSections.storyName = "Akordeon (wiele sekcji)";

export { SectionDemo, MultipleSections };
export default { title: "Section" };
