import * as React from "react";
import { useState, useCallback } from "react";

/* =============================================================
   CopyChip — klikalny chip z tokenem / klasą / komponentem.
   Click → kopiuje do schowka, flash "Skopiowano".
   ─────────────────────────────────────────────────────────────
   Rodzaje:
     token     — CSS custom property (--gold, --space-4)      → złoto
     class     — CSS class (.wf-link, .mm-pill)               → mech/zieleń
     component — React component (Combobox, Dialog.Root)       → info/teal
   ============================================================= */

type ChipKind = "token" | "class" | "component";

const PALETTE: Record<ChipKind, { bg: string; border: string; color: string; flash: string }> = {
  token: {
    bg: "rgba(197,160,72,0.10)",
    border: "rgba(197,160,72,0.28)",
    color: "rgb(226,195,121)",
    flash: "rgba(197,160,72,0.25)",
  },
  class: {
    bg: "rgba(131,200,77,0.08)",
    border: "rgba(131,200,77,0.25)",
    color: "rgb(163,214,120)",
    flash: "rgba(131,200,77,0.22)",
  },
  component: {
    bg: "rgba(77,193,200,0.08)",
    border: "rgba(77,193,200,0.25)",
    color: "rgb(130,210,215)",
    flash: "rgba(77,193,200,0.22)",
  },
};

interface CopyChipProps {
  /** Tekst do wyświetlenia i skopiowania. */
  children: string;
  /** Rodzaj tokena — wpływa na kolor chipu. Domyślnie "token". */
  kind?: ChipKind;
  /** Opcjonalny override tekstu do skopiowania (np. bez prefiksu var()). */
  copyText?: string;
}

export function CopyChip({ children, kind = "token", copyText }: CopyChipProps) {
  const [copied, setCopied] = useState(false);
  const pal = PALETTE[kind];

  const handleClick = useCallback(() => {
    navigator.clipboard.writeText(copyText ?? children).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1100);
    });
  }, [copyText, children]);

  return (
    <code
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleClick(); } }}
      title={`Kliknij aby skopiować: ${copyText ?? children}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "2px 8px",
        fontFamily: "var(--font-mono, ui-monospace, 'SF Mono', monospace)",
        fontSize: 11,
        lineHeight: "18px",
        color: copied ? "rgb(131,200,77)" : pal.color,
        background: copied ? pal.flash : pal.bg,
        border: `1px solid ${pal.border}`,
        borderRadius: 4,
        cursor: "pointer",
        userSelect: "none",
        whiteSpace: "nowrap",
        transition: "background 150ms, color 150ms",
      }}
    >
      {copied ? (
        <>
          <CopyCheckIcon />
          <span style={{ fontSize: 10, letterSpacing: "0.02em" }}>Skopiowano</span>
        </>
      ) : (
        <>
          <span>{children}</span>
          <CopyIcon />
        </>
      )}
    </code>
  );
}

/* ----- Ikonki inline (8×8) ----- */

function CopyIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ opacity: 0.45, flexShrink: 0, marginLeft: 2 }}>
      <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 5V3.5A1.5 1.5 0 009.5 2h-6A1.5 1.5 0 002 3.5v6A1.5 1.5 0 003.5 11H5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CopyCheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
