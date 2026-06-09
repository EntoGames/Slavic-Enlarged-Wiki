import * as React from "react";
import type { Story } from "@ladle/react";
import { CopyChip } from "../_helpers/CopyChip";
import { Popover } from "@ark-ui/react/popover";
import { HoverCard } from "@ark-ui/react/hover-card";
import { Toast, Toaster, createToaster } from "@ark-ui/react/toast";
import { Portal } from "@ark-ui/react/portal";
import "./ark-brand.css";

/* ───── Popover ───── */

const PopoverDemo: Story = () => (
  <div className="se-story-col">
    <div className="se-story-row">
      <CopyChip kind="component">Popover</CopyChip>
      <CopyChip kind="class">.se-popover</CopyChip>
    </div>
    <Popover.Root>
      <Popover.Trigger className="se-btn-brand">
        Szczegoly kultury
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content className="se-popover__content">
            <Popover.Title className="se-popover__title">Krywicze</Popover.Title>
            <Popover.Description className="se-popover__description">
              Kultura wschodniosłowiańska osadzona w dorzeczu Dźwiny. Słyną z silnych
              tradycji handlowych i bliskich kontaktów z Waregami. Ich stolica, Połock,
              jest jednym z najstarszych grodów Rusi.
            </Popover.Description>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  </div>
);
PopoverDemo.storyName = "Popover";

/* ───── Hover Card ───── */

const HoverCardDemo: Story = () => (
  <div className="se-story-col">
    <div className="se-story-row">
      <CopyChip kind="component">HoverCard</CopyChip>
      <CopyChip kind="class">.se-hover-card</CopyChip>
    </div>
    <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--fg-on-dark)", maxWidth: 480 }}>
      Mod Slavic Enlarged dodaje 35 nowych kultur, w tym{" "}
      <HoverCard.Root openDelay={200} closeDelay={100}>
        <HoverCard.Trigger className="se-hover-card__trigger" asChild>
          <a href="#krywicze">Krywiczow</a>
        </HoverCard.Trigger>
        <Portal>
          <HoverCard.Positioner>
            <HoverCard.Content className="se-hover-card__content">
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div className="se-avatar" style={{ width: 48, height: 48, fontSize: 16 }}>
                    <span className="se-avatar__fallback">KR</span>
                  </div>
                  <div>
                    <p className="se-hover-card__name" style={{ fontSize: 18 }}>Krywicze</p>
                    <p className="se-hover-card__username">Kultura wschodnioslowianska</p>
                  </div>
                </div>
                <p className="se-hover-card__bio">
                  Lud zamieszkujacy dorzecze Dzwiny. Handlarze i wojownicy —
                  ich grod Polock konkuruje z samym Kijowem.
                </p>
                <div className="se-hover-card__stats">
                  <span>
                    <span className="se-hover-card__stat-value">4</span>
                    <span className="se-hover-card__stat-label">tradycje</span>
                  </span>
                  <span>
                    <span className="se-hover-card__stat-value">Perun</span>
                    <span className="se-hover-card__stat-label">wiara</span>
                  </span>
                </div>
              </div>
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </HoverCard.Root>{" "}
      — lud zamieszkujacy dorzecze Dzwiny, slynacy z handlu i wojen z Waregami.
    </p>
  </div>
);
HoverCardDemo.storyName = "Hover Card";

/* ───── Toast ───── */

const toaster = createToaster({
  placement: "bottom-end",
  overlap: true,
  gap: 16,
});

const ToastDemo: Story = () => (
  <div className="se-story-col">
    <div className="se-story-row">
      <CopyChip kind="component">Toast</CopyChip>
      <CopyChip kind="class">.se-toast</CopyChip>
    </div>
    <div className="se-story-row">
      <button
        type="button"
        className="se-btn-brand"
        onClick={() =>
          toaster.create({
            title: "Reforma przeprowadzona",
            description: "Wiara slowianska zostala zreformowana. Nowe dogmaty sa aktywne.",
            type: "info",
          })
        }
      >
        Info toast
      </button>
      <button
        type="button"
        className="se-btn-brand--solid se-btn-brand"
        onClick={() =>
          toaster.create({
            title: "Sojusz zawarty",
            description: "Unia ludow slowianskich zostala sformowana pomyslnie.",
            type: "success",
          })
        }
      >
        Success toast
      </button>
      <button
        type="button"
        className="se-btn-brand"
        onClick={() =>
          toaster.create({
            title: "Bunt chlopski",
            description: "Prowincja Gniezno podniosla bunt! Wyslij wojska natychmiast.",
            type: "error",
          })
        }
      >
        Error toast
      </button>
    </div>
    <Portal>
      <Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root key={toast.id} className="se-toast">
            <Toast.Title className="se-toast__title">{toast.title}</Toast.Title>
            <Toast.Description className="se-toast__description">
              {toast.description}
            </Toast.Description>
            <Toast.CloseTrigger className="se-toast__close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </Toast.CloseTrigger>
          </Toast.Root>
        )}
      </Toaster>
    </Portal>
  </div>
);
ToastDemo.storyName = "Toast";

export { PopoverDemo, HoverCardDemo, ToastDemo };
export default { title: "Design System / Komponenty / Nakladki" };
