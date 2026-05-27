import * as React from "react";
import { useCallback, useContext, useMemo, useRef, useState } from "react";
import { Link } from "gatsby";
import { useWikiIndex, type WikiEntry } from "../../data/use-wiki-index";

/* =============================================================
   WikiLink — link wewnątrz treści artykułu z hover-popoverem.
   ─────────────────────────────────────────────────────────────
   Sygnatura podstawowa: <WikiLink to="/wiki/wiara/przeglad-wiary">
   Hover wyświetla popover z danymi z `useWikiIndex()` (auto-generowany
   z plików markdown — autor nie musi NIC dodawać do frontmattera).
   Jeśli `to` nie odpowiada żadnemu artykułowi, renderujemy plain link
   (np. linki do folderów-indeksów, które jeszcze nie istnieją).
   ============================================================= */

interface PreviewState {
  entry: WikiEntry | null;
  x: number;
  y: number;
  open: boolean;
}

interface PreviewCtx {
  open: (entry: WikiEntry, rect: DOMRect) => void;
  scheduleClose: () => void;
  cancelClose: () => void;
}

const PreviewContext = React.createContext<PreviewCtx | null>(null);

export function WikiLinkProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<PreviewState>({
    entry: null, x: 0, y: 0, open: false,
  });
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = useCallback((entry: WikiEntry, rect: DOMRect) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setState({ entry, x: rect.left, y: rect.bottom + 8, open: true });
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setState((s) => ({ ...s, open: false }));
      setTimeout(() => setState((s) => ({ ...s, entry: null })), 200);
    }, 220);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const ctx = useMemo<PreviewCtx>(
    () => ({ open, scheduleClose, cancelClose }),
    [open, scheduleClose, cancelClose]
  );

  return (
    <PreviewContext.Provider value={ctx}>
      {children}
      <PreviewPopover state={state} onEnter={cancelClose} onLeave={scheduleClose} />
    </PreviewContext.Provider>
  );
}

export interface WikiLinkProps {
  to: string;
  children: React.ReactNode;
}

export function WikiLink({ to, children }: WikiLinkProps) {
  const ctx = useContext(PreviewContext);
  const index = useWikiIndex();
  const ref = useRef<HTMLAnchorElement>(null);

  // Próba dopasowania entry — najpierw dokładny urlPath
  let entry: WikiEntry | undefined = index.byUrlPath[to];

  // Fallback: szukaj po ostatnim segmencie (slug) jeśli ścieżki nie pasują
  if (!entry) {
    const lastSeg = to.replace(/[#?].*$/, "").replace(/\/+$/, "").split("/").pop();
    if (lastSeg) entry = index.all.find((e) => e.slug === lastSeg);
  }

  const onEnter = () => {
    if (!entry || !ctx || !ref.current) return;
    ctx.open(entry, ref.current.getBoundingClientRect());
  };
  const onLeave = () => ctx?.scheduleClose();

  // Gatsby's <Link> woli ścieżki absolutne; jeśli nie pasuje, użyj <a>
  const isInternal = to.startsWith("/");
  const Anchor = isInternal ? (Link as any) : "a";
  const linkProps = isInternal ? { to } : { href: to };

  return (
    <Anchor
      ref={ref}
      className={"wf-link" + (entry ? "" : " is-unresolved")}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      {...linkProps}
    >
      {children}
    </Anchor>
  );
}

/* ----- Popover ----- */
interface PreviewPopoverProps {
  state: PreviewState;
  onEnter: () => void;
  onLeave: () => void;
}

function PreviewPopover({ state, onEnter, onLeave }: PreviewPopoverProps) {
  if (!state.entry || typeof window === "undefined") return null;

  const W = 320;
  const vw = window.innerWidth;
  let left = state.x;
  if (left + W + 12 > vw) left = vw - W - 12;
  if (left < 12) left = 12;

  return (
    <div
      className={"wf-preview" + (state.open ? " is-open" : "")}
      style={{ left, top: state.y }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      role="tooltip"
    >
      <div className="wf-preview__kicker">{state.entry.kicker}</div>
      <h4 className="wf-preview__title">{state.entry.title}</h4>
      {state.entry.subtitle && (
        <div className="wf-preview__subtitle">{state.entry.subtitle}</div>
      )}
      {state.entry.blurb && (
        <p className="wf-preview__blurb">{state.entry.blurb}</p>
      )}
      <div className="wf-preview__footer">
        <span>Artykuł wiki</span>
        <span className="go">Czytaj →</span>
      </div>
    </div>
  );
}
