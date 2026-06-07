import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { toRoman } from "../../utils/to-roman";

/* =============================================================
   Section — zwijany rozdział artykułu (akordeon).
   ─────────────────────────────────────────────────────────────
   Numerację (I, II, III, …) liczy szablon — `num` w propsach.
   Animowane max-height: krótko po zmianie `collapsed` najpierw
   ustawiamy konkretną wysokość px, by transition działała,
   a po zakończeniu wracamy do `none` aby nie blokować dynamiki
   treści (obrazków, hover-popoverów wewnątrz itd.).
   ============================================================= */

export interface SectionProps {
  id: string;
  title: string;
  num: number;
  collapsed: boolean;
  onToggle: () => void;
  registerRef: (el: HTMLElement | null) => void;
  children: React.ReactNode;
}

export function Section({
  id,
  title,
  num,
  collapsed,
  onToggle,
  registerRef,
  children,
}: SectionProps) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState<string>("none");

  useEffect(() => {
    if (!bodyRef.current) return;
    if (collapsed) {
      const h = bodyRef.current.scrollHeight;
      setMaxH(h + "px");
      requestAnimationFrame(() => setMaxH("0px"));
    } else {
      const h = bodyRef.current.scrollHeight;
      setMaxH(h + "px");
      const t = setTimeout(() => setMaxH("none"), 300);
      return () => clearTimeout(t);
    }
  }, [collapsed]);

  return (
    <section
      className={"wf-section" + (collapsed ? " is-collapsed" : "")}
      id={id}
      ref={(el) => registerRef(el)}
    >
      <header
        className="wf-section__head"
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={!collapsed}
      >
        <span className="wf-section__num">{toRoman(num)}</span>
        <h2 className="wf-section__title">{title}</h2>
        <span className="wf-section__chevron">▾</span>
      </header>
      <div
        ref={bodyRef}
        className="wf-section__body"
        style={{ maxHeight: maxH }}
      >
        <div>{children}</div>
      </div>
    </section>
  );
}
