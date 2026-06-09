import * as React from "react";
import { useState, useEffect } from "react";
import type { Story } from "@ladle/react";
import { CopyChip } from "../_helpers/CopyChip";
import { Avatar } from "@ark-ui/react/avatar";
import { Clipboard } from "@ark-ui/react/clipboard";
import { Collapsible } from "@ark-ui/react/collapsible";
import "./ark-brand.css";

/* ───── Avatar ───── */

const AvatarDemo: Story = () => (
  <div className="se-story-col">
    <div className="se-story-row">
      <CopyChip kind="component">Avatar</CopyChip>
      <CopyChip kind="class">.se-avatar</CopyChip>
    </div>
    <div className="se-story-section">
      <span className="se-story-label">Rozmiary</span>
      <div className="se-story-row">
        <Avatar.Root className="se-avatar se-avatar--sm">
          <Avatar.Fallback className="se-avatar__fallback">SI</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className="se-avatar">
          <Avatar.Fallback className="se-avatar__fallback">SW</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className="se-avatar se-avatar--lg">
          <Avatar.Fallback className="se-avatar__fallback">MS</Avatar.Fallback>
        </Avatar.Root>
      </div>
    </div>
    <div className="se-story-section">
      <span className="se-story-label">Postacie Struggle</span>
      <div className="se-story-row">
        {[
          { initials: "SI", name: "Siemowit" },
          { initials: "SW", name: "Swietopelk" },
          { initials: "MS", name: "Msciwoj" },
          { initials: "DY", name: "Dyre" },
          { initials: "BI", name: "Borys I" },
          { initials: "MU", name: "Mutimir" },
          { initials: "DM", name: "Domagoj" },
        ].map((c) => (
          <div key={c.initials} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <Avatar.Root className="se-avatar">
              <Avatar.Fallback className="se-avatar__fallback">{c.initials}</Avatar.Fallback>
            </Avatar.Root>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--fg-on-dark-soft)" }}>
              {c.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
AvatarDemo.storyName = "Avatar";

/* ───── Clipboard ───── */

const ClipboardDemo: Story = () => (
  <div className="se-story-col">
    <div className="se-story-row">
      <CopyChip kind="component">Clipboard</CopyChip>
      <CopyChip kind="class">.se-clipboard</CopyChip>
    </div>
    <Clipboard.Root className="se-clipboard" value="steam://url/CommunityFilePage/3740630117">
      <Clipboard.Label className="se-clipboard__label">Link do Steam Workshop</Clipboard.Label>
      <Clipboard.Control className="se-clipboard__control">
        <Clipboard.Input className="se-clipboard__input" />
        <Clipboard.Trigger className="se-clipboard__trigger">
          <Clipboard.Indicator
            copied={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-positive-solid)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            }
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          </Clipboard.Indicator>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>

    <Clipboard.Root className="se-clipboard" value="slavic_enlarged">
      <Clipboard.Label className="se-clipboard__label">ID moda (do descriptor.mod)</Clipboard.Label>
      <Clipboard.Control className="se-clipboard__control">
        <Clipboard.Input className="se-clipboard__input" />
        <Clipboard.Trigger className="se-clipboard__trigger">
          <Clipboard.Indicator
            copied={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-positive-solid)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            }
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          </Clipboard.Indicator>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  </div>
);
ClipboardDemo.storyName = "Clipboard";

/* ───── Collapsible ───── */

const CollapsibleDemo: Story = () => (
  <div className="se-story-col">
    <div className="se-story-row">
      <CopyChip kind="component">Collapsible</CopyChip>
      <CopyChip kind="class">.se-collapsible</CopyChip>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Collapsible.Root className="se-collapsible">
        <Collapsible.Trigger className="se-collapsible__trigger">
          Czym jest Slavic Enlarged?
          <Collapsible.Indicator className="se-collapsible__indicator">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </Collapsible.Indicator>
        </Collapsible.Trigger>
        <Collapsible.Content className="se-collapsible__content">
          <div className="se-collapsible__body">
            Slavic Enlarged to mod do Crusader Kings III, ktory rozszerza
            slowianskie kultury, wiary i mechaniki gry. Dodaje 35 nowych kultur,
            system Walki Slowianczyzny (Struggle) oraz unikalne eventy i decyzje.
          </div>
        </Collapsible.Content>
      </Collapsible.Root>

      <Collapsible.Root className="se-collapsible">
        <Collapsible.Trigger className="se-collapsible__trigger">
          Jakie DLC sa wymagane?
          <Collapsible.Indicator className="se-collapsible__indicator">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </Collapsible.Indicator>
        </Collapsible.Trigger>
        <Collapsible.Content className="se-collapsible__content">
          <div className="se-collapsible__body">
            Mod bazowy (Slavic Enlarged) nie wymaga zadnego DLC. Addon
            Slavic Struggle of Perun wymaga DLC Fate of Iberia (system Struggle).
            Addon Myths &amp; Legends wymaga DLC Legends of the Dead.
          </div>
        </Collapsible.Content>
      </Collapsible.Root>

      <Collapsible.Root className="se-collapsible">
        <Collapsible.Trigger className="se-collapsible__trigger">
          Czy mod jest kompatybilny z innymi?
          <Collapsible.Indicator className="se-collapsible__indicator">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </Collapsible.Indicator>
        </Collapsible.Trigger>
        <Collapsible.Content className="se-collapsible__content">
          <div className="se-collapsible__body">
            Tak — Slavic Enlarged jest kompatybilny z wiekszoscia modow,
            ktore nie modyfikuja slowianskich kultur i wiary Slowianskiej.
            Lista niekompatybilnych modow jest dostepna na stronie Workshop.
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  </div>
);
CollapsibleDemo.storyName = "Collapsible";

/* ───── Progress (pure CSS, no Ark — component has no examples) ───── */

const ProgressDemo: Story = () => {
  const [value, setValue] = useState(42);

  useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 1));
    }, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="se-story-col">
      <div className="se-story-row">
        <CopyChip kind="component">Progress</CopyChip>
        <CopyChip kind="class">.se-progress</CopyChip>
      </div>
      <div className="se-story-section">
        <span className="se-story-label">Animowany</span>
        <div className="se-progress">
          <div className="se-progress__label">
            <span>Pobieranie kultur...</span>
            <span>{value}%</span>
          </div>
          <div className="se-progress__track">
            <div className="se-progress__range" style={{ width: `${value}%` }} />
          </div>
        </div>
      </div>
      <div className="se-story-section">
        <span className="se-story-label">Statyczny</span>
        <div className="se-progress">
          <div className="se-progress__label">
            <span>Kompatybilnosc</span>
            <span>78%</span>
          </div>
          <div className="se-progress__track">
            <div className="se-progress__range" style={{ width: "78%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
ProgressDemo.storyName = "Progress";

export { AvatarDemo, ClipboardDemo, CollapsibleDemo, ProgressDemo };
export default { title: "Design System / Komponenty / Dane" };
