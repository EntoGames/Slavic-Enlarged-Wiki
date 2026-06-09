import * as React from "react";
import type { Story } from "@ladle/react";
import { MegaMenu } from "../templates/components/MegaMenu";

const Default: Story = () => (
  <div style={{ margin: -24 }}>
    <MegaMenu activeUrlPath="/wiki/kultury/przeglad-kultur" />
    <div style={{ padding: "40px 48px", fontFamily: "var(--font-body)", color: "var(--fg-on-dark)" }}>
      <p>Najedź na sekcje w nawigacji, by otworzyć mega-panel. Wpisz w pole szukaj, by filtrować artykuły.</p>
    </div>
  </div>
);
Default.storyName = "Domyślny";

const NoActiveSection: Story = () => (
  <div style={{ margin: -24 }}>
    <MegaMenu activeUrlPath="/" />
    <div style={{ padding: "40px 48px", fontFamily: "var(--font-body)", color: "var(--fg-on-dark)" }}>
      <p>Widok bez aktywnej sekcji (strona główna).</p>
    </div>
  </div>
);
NoActiveSection.storyName = "Bez aktywnej sekcji";

export { Default, NoActiveSection };
export default { title: "MegaMenu" };
