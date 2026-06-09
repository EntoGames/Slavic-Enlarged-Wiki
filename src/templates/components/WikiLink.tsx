import * as React from "react";
import { useRef } from "react";
import { Link } from "gatsby";
import { HoverCard } from "@ark-ui/react/hover-card";
import { Portal } from "@ark-ui/react/portal";
import { useWikiIndex, type WikiEntry } from "../../data/use-wiki-index";

/* =============================================================
   WikiLink — link wewnątrz treści artykułu z hover-popoverem.
   ─────────────────────────────────────────────────────────────
   Sygnatura: <WikiLink to="/wiki/wiara/przeglad-wiary">
   Hover wyświetla HoverCard (Ark UI) z danymi z `useWikiIndex()`.
   Jeśli `to` nie odpowiada żadnemu artykułowi, renderujemy plain link.
   ============================================================= */

/**
 * WikiLinkProvider — backward-compat wrapper, nie wymaga już contextu.
 * Ark UI HoverCard zarządza stanem per-link (open/close, positioning).
 */
export function WikiLinkProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export interface WikiLinkProps {
  to: string;
  children: React.ReactNode;
}

export function WikiLink({ to, children }: WikiLinkProps) {
  const index = useWikiIndex();
  const ref = useRef<HTMLAnchorElement>(null);

  // Próba dopasowania entry — najpierw dokładny urlPath
  let entry: WikiEntry | undefined = index.byUrlPath[to];

  // Fallback: szukaj po ostatnim segmencie (slug) jeśli ścieżki nie pasują
  if (!entry) {
    const lastSeg = to.replace(/[#?].*$/, "").replace(/\/+$/, "").split("/").pop();
    if (lastSeg) entry = index.all.find((e) => e.slug === lastSeg);
  }

  const isInternal = to.startsWith("/");
  const Anchor = isInternal ? (Link as any) : "a";
  const linkProps = isInternal ? { to } : { href: to };

  // Bez entry — plain link, bez HoverCard
  if (!entry) {
    return (
      <Anchor
        ref={ref}
        className="wf-link is-unresolved"
        {...linkProps}
      >
        {children}
      </Anchor>
    );
  }

  return (
    <HoverCard.Root
      openDelay={600}
      closeDelay={220}
      positioning={{ placement: "bottom-start", gutter: 8 }}
      lazyMount
      unmountOnExit
    >
      <HoverCard.Trigger asChild>
        <Anchor
          ref={ref}
          className="wf-link"
          {...linkProps}
        >
          {children}
        </Anchor>
      </HoverCard.Trigger>

      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content className="wf-preview">
            <PreviewBody entry={entry} />
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  );
}

/* ----- Preview body (extracted for clarity) ----- */

function PreviewBody({ entry }: { entry: WikiEntry }) {
  return (
    <>
      <div className="wf-preview__kicker">{entry.kicker}</div>
      <h4 className="wf-preview__title">{entry.title}</h4>
      {entry.subtitle && (
        <div className="wf-preview__subtitle">{entry.subtitle}</div>
      )}
      {entry.blurb && (
        <p className="wf-preview__blurb">{entry.blurb}</p>
      )}
      <div className="wf-preview__footer">
        <span>{entry.kicker}</span>
        <Link to={entry.urlPath} className="go">
          Czytaj →
        </Link>
      </div>
    </>
  );
}
