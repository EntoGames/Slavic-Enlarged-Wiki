import * as React from "react";
import type { Story } from "@ladle/react";
import { WikiLinkProvider, WikiLink } from "../templates/components/WikiLink";

const WithPopover: Story = () => (
  <WikiLinkProvider>
    <div style={{ fontFamily: "var(--font-body)", color: "var(--fg-on-dark)", lineHeight: 1.6, maxWidth: 600 }}>
      <p>
        Mod Slavic Enlarged dodaje 35 kultur, w tym{" "}
        <WikiLink to="/wiki/kultury/wschodnioslowianskie/krywicze">Krywiczów</WikiLink>,{" "}
        <WikiLink to="/wiki/kultury/wschodnioslowianskie/polanie-kijowscy">Polan kijowskich</WikiLink>{" "}
        i wiele innych. System wiary opisany jest w{" "}
        <WikiLink to="/wiki/wiara/przeglad-wiary">przeglądzie wiary</WikiLink>.
      </p>
      <p>
        Najważniejszym bóstwem panteonu jest{" "}
        <WikiLink to="/wiki/wiara/bogowie/perun">Perun</WikiLink> — bóg piorunów.
      </p>
      <p>
        Link do nieistniejącego artykułu:{" "}
        <WikiLink to="/wiki/nieznany/artykul">nieznany artykuł</WikiLink>.
      </p>
    </div>
  </WikiLinkProvider>
);
WithPopover.storyName = "Hover popover";

export { WithPopover };
export default { title: "WikiLink" };
