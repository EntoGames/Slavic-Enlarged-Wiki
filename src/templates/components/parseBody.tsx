import * as React from "react";
import parse, { domToReact, Element, type DOMNode } from "html-react-parser";
import { WikiLink } from "./WikiLink";
import { Section } from "./Section";
import { isWikiHref, normalizeWikiHref } from "../../utils/wiki-paths";

/* =============================================================
   parseBody — surowy HTML z gatsby-transformer-remark → React.
   ─────────────────────────────────────────────────────────────
   Dwa zadania:

   1. Zamienia każdy <a href="…"> na <WikiLink> jeśli href wskazuje
      na wewnętrzny artykuł (relatywna ścieżka, ".md", lub
      "/wiki/..."). Linki zewnętrzne (http, mailto) zostają zwykłymi
      <a target="_blank">.

   2. Dzieli HTML na sekcje po nagłówkach <h2>. Każda sekcja staje
      się <Section> z akordeonem, numerem i id-anchor.

   Funkcje są PURE — żadnego stanu, łatwo testowalne.
   ============================================================= */

interface ParseContext {
  /** Segmenty URL bieżącego artykułu (do rozwiązywania ścieżek względnych). */
  currentSegments: string[];
}

/** Domknięcie z kontekstem — html-react-parser nie przekazuje go bezpośrednio. */
function makeReplacer(ctx: ParseContext) {
  return function replaceNode(node: DOMNode): React.ReactNode | undefined {
    if (!(node instanceof Element)) return undefined;

    if (node.name === "a" && node.attribs?.href) {
      const href = node.attribs.href;
      const children = domToReact(node.children as DOMNode[], { replace: replaceNode });

      if (isWikiHref(href)) {
        const to = normalizeWikiHref(href, ctx.currentSegments);
        return <WikiLink to={to}>{children}</WikiLink>;
      }

      // Zewnętrzny link (http, mailto, anchor)
      const isExternal = /^(https?:|mailto:)/i.test(href);
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={isExternal ? "wf-link is-external" : "wf-link"}
        >
          {children}
        </a>
      );
    }

    return undefined;
  };
}

/* ===== Sekcjonowanie po <h2> ===== */

export interface ParsedSection {
  id: string;
  title: string;
  body: React.ReactNode[];
}
export interface ParsedBody {
  intro: React.ReactNode[];
  sections: ParsedSection[];
}

/**
 * Parsuj HTML artykułu na intro + listę sekcji.
 * @param html  Surowy HTML z gatsby-transformer-remark (markdownRemark.html).
 * @param currentSegments Segmenty URL aktualnego artykułu (np. ["walka-slowianczyzny", "fazy", "burza-peruna"]).
 */
export function parseArticleBody(
  html: string,
  currentSegments: string[]
): ParsedBody {
  const intro: React.ReactNode[] = [];
  const sections: ParsedSection[] = [];
  let current: ParsedSection | null = null;
  let topLevelKey = 0;

  const replace = makeReplacer({ currentSegments });
  const result = parse(html, { replace });
  const topLevel = Array.isArray(result) ? result : [result];

  for (const node of topLevel) {
    if (typeof node === "string") {
      const trimmed = node.trim();
      if (!trimmed) continue;
      (current ? current.body : intro).push(node);
      continue;
    }
    if (!React.isValidElement(node)) continue;

    const tag = typeof node.type === "string" ? node.type : null;

    // Pomijamy H1 — szablon i tak renderuje tytuł w hero
    if (tag === "h1") continue;

    if (tag === "h2") {
      const title = extractText(node);
      const id = slugify(title);
      current = { id, title, body: [] };
      sections.push(current);
      continue;
    }

    const cloned = React.cloneElement(node as React.ReactElement, {
      key: `n-${topLevelKey++}`,
    });
    (current ? current.body : intro).push(cloned);
  }

  return { intro, sections };
}

/* ----- Helpers ----- */

function extractText(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (React.isValidElement(node)) {
    return extractText((node.props as { children?: React.ReactNode }).children);
  }
  return "";
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* =============================================================
   Auto-lede — wyciągnij pierwszy akapit jako lede z dropcapem.
   ─────────────────────────────────────────────────────────────
   Drugi agent NIE musi dodawać frontmattera. Szablon woli `frontmatter.lede`,
   ale jeśli go nie ma, bierze pierwszy akapit z intro i pokazuje go jako
   manuskryptowy lede; pierwszy akapit jest usuwany z reszty (żeby nie był
   zdublowany).
   ============================================================= */

export function splitLede(parsed: ParsedBody): {
  ledeNode: React.ReactNode | null;
  rest: ParsedBody;
} {
  // Szukaj pierwszego elementu <p> w intro
  for (let i = 0; i < parsed.intro.length; i++) {
    const node = parsed.intro[i];
    if (React.isValidElement(node) && (node.type === "p" || node.type === "P")) {
      const rest: ParsedBody = {
        intro: [...parsed.intro.slice(0, i), ...parsed.intro.slice(i + 1)],
        sections: parsed.sections,
      };
      return { ledeNode: node, rest };
    }
  }
  return { ledeNode: null, rest: parsed };
}

/* =============================================================
   Renderer pełnej treści artykułu (akapity + sekcje).
   ============================================================= */

interface ArticleBodyRendererProps {
  parsed: ParsedBody;
  sectionRefs: React.MutableRefObject<Record<string, HTMLElement | null>>;
}

export function ArticleBodyRenderer({ parsed, sectionRefs }: ArticleBodyRendererProps) {
  const [collapsed, setCollapsed] = React.useState<Record<string, boolean>>({});
  const toggle = (id: string) => setCollapsed((c) => ({ ...c, [id]: !c[id] }));

  return (
    <article className="wf-article">
      {parsed.intro}
      {parsed.sections.map((s, i) => (
        <Section
          key={s.id}
          id={s.id}
          title={s.title}
          num={i + 1}
          collapsed={!!collapsed[s.id]}
          onToggle={() => toggle(s.id)}
          registerRef={(el) => {
            sectionRefs.current[s.id] = el;
          }}
        >
          {s.body}
        </Section>
      ))}
    </article>
  );
}
