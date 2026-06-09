import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { SECTIONS, SUBFOLDER_LABELS, TEMPLATE_SLUGS } from "./wiki-sections";
import { isArticleVisible } from "./mod-registry";
import { humanizeSlug } from "../utils/wiki-paths";

/* =============================================================
   useWikiIndex — pełna mapa wszystkich artykułów wiki.
   ─────────────────────────────────────────────────────────────
   Hook zwraca dwie struktury:

     byUrlPath: { '/wiki/wiara/przeglad-wiary': { ... } }
       — szybki lookup dla popoverów (klucz = urlPath).
     bySection: { wiara: [...], kultury: [...] }
       — pogrupowane do mega-menu i powiązanych.

   Każdy wpis zawiera tytuł, podtytuł (opcjonalnie z frontmattera),
   krótki blurb (z frontmattera albo auto-z-excerptu) i metadane sekcji.

   `useStaticQuery` jest cachowany przez Gatsby — query odpala się raz
   na build, niezależnie od liczby instancji `<WikiLinkProvider>`.
   ============================================================= */

export interface WikiEntry {
  /** Pełny URL strony, np. '/wiki/wiara/przeglad-wiary'. */
  urlPath: string;
  /** Ostatni segment URL (stabilne id wpisu). */
  slug: string;
  /** Tytuł H1 albo frontmatter.title. */
  title: string;
  /** Opcjonalny podtytuł (frontmatter.subtitle). */
  subtitle?: string;
  /** "Bogowie · Wschodniosłowiańscy" — frontmatter.kicker albo derived. */
  kicker: string;
  /** ~30 słów. frontmatter.blurb albo auto-excerpt. */
  blurb: string;
  /** Slug sekcji top-level ("wiara", "kultury", ...). */
  section: string | null;
  /** Pełne segmenty URL bez `wiki/`. */
  segments: string[];
  /** Czy to landing-page kategorii (README.md w podfolderze). */
  isCategoryIndex: boolean;
  /** Opcjonalny badge z frontmattera (np. "REFORMA", "NOWE"). */
  badge?: string;
}

export interface WikiSection {
  id: string;
  label: string;
  /** Skrócona etykieta do topbara (fallback → label). */
  navLabel: string;
  entries: WikiEntry[];
}

export interface WikiIndex {
  byUrlPath: Record<string, WikiEntry>;
  /** Sekcje uporządkowane wg `SECTIONS[s].order`, każda z listą wpisów. */
  bySection: WikiSection[];
  /** Sekcje z co najmniej jednym prawdziwym artykułem (bez szablonów i indeksów). */
  visibleSections: WikiSection[];
  /** Wszystkie wpisy (płaska lista, do search). */
  all: WikiEntry[];
}

/* ----- Surowy GraphQL ----- */

interface RawNode {
  fields: {
    urlPath: string | null;
    slug: string | null;
    section: string | null;
    isContent: boolean | null;
    isCategoryIndex: boolean | null;
    segments: string[] | null;
    title: string | null;
  };
  frontmatter: {
    subtitle: string | null;
    kicker: string | null;
    blurb: string | null;
    mod: string | null;
    badge: string | null;
  };
  excerpt: string;
}

const WIKI_INDEX_QUERY = graphql`
  query WikiIndex {
    allMarkdownRemark(sort: { fields: { urlPath: ASC } }) {
      nodes {
        fields {
          urlPath
          slug
          section
          isContent
          isCategoryIndex
          segments
          title
        }
        frontmatter {
          subtitle
          kicker
          blurb
          mod
          badge
        }
        excerpt(pruneLength: 200)
      }
    }
  }
`;

/** Kicker w stylu "Sekcja · Subfolder" — jeśli frontmatter go nie podał. */
function deriveKicker(entry: Pick<WikiEntry, "section" | "segments">): string {
  if (!entry.section) return "Wiki";
  const sectionLabel = SECTIONS[entry.section]?.label ?? humanizeSlug(entry.section);
  if (entry.segments.length <= 2) return sectionLabel;
  const middle = entry.segments.slice(1, -1).map(s => SUBFOLDER_LABELS[s] ?? humanizeSlug(s)).join(" · ");
  return middle ? `${sectionLabel} · ${middle}` : sectionLabel;
}

export function useWikiIndex(): WikiIndex {
  const data = useStaticQuery<{
    allMarkdownRemark: { nodes: RawNode[] };
  }>(WIKI_INDEX_QUERY);

  return React.useMemo(() => {
    const all: WikiEntry[] = [];
    const byUrlPath: Record<string, WikiEntry> = {};

    for (const node of data.allMarkdownRemark.nodes) {
      const f = node.fields;
      if (!f.isContent || !f.urlPath || !f.slug) continue;
      if (!isArticleVisible(f.section, node.frontmatter?.mod)) continue;
      if (TEMPLATE_SLUGS.has(f.slug)) continue;

      const entry: WikiEntry = {
        urlPath: f.urlPath,
        slug: f.slug,
        title: f.title ?? humanizeSlug(f.slug),
        subtitle: node.frontmatter?.subtitle ?? undefined,
        kicker:
          node.frontmatter?.kicker ??
          deriveKicker({ section: f.section, segments: f.segments ?? [] }),
        blurb:
          node.frontmatter?.blurb ??
          (node.excerpt ? node.excerpt.replace(/\s+/g, " ").trim() : ""),
        section: f.section || null,
        segments: f.segments ?? [],
        isCategoryIndex: !!f.isCategoryIndex,
        badge: node.frontmatter?.badge ?? undefined,
      };
      all.push(entry);
      byUrlPath[entry.urlPath] = entry;
    }

    // Buduj sekcje w kolejności SECTIONS[s].order, ale nie pomijaj sekcji,
    // które są w treści a nie ma ich w mapie (mogą pojawić się przyszłe).
    const sectionIds = new Set(all.map((e) => e.section).filter(Boolean) as string[]);
    const ordered = Array.from(sectionIds).sort(
      (a, b) =>
        (SECTIONS[a]?.order ?? 99) - (SECTIONS[b]?.order ?? 99) ||
        a.localeCompare(b)
    );
    const bySection = ordered.map((id) => {
      const meta = SECTIONS[id];
      const label = meta?.label ?? humanizeSlug(id);
      return {
        id,
        label,
        navLabel: meta?.navLabel ?? label,
        entries: all.filter((e) => e.section === id),
      };
    });

    const visibleSections = bySection.filter(
      (s) => s.entries.filter((e) => !e.isCategoryIndex).length > 0
    );

    return { all, byUrlPath, bySection, visibleSections };
  }, [data]);
}
