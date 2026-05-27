import * as React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";

import kolovratSvg from "../assets/img/kolovrat.svg";
import wordmarkSvg from "../assets/img/wordmark.svg";
import iconTraditionsSvg from "../assets/img/icon-traditions.svg";

import { WikiLinkProvider } from "./components/WikiLink";
import { MegaMenu } from "./components/MegaMenu";
import { Section } from "./components/Section";
import {
  parseArticleBody,
  splitLede,
} from "./components/parseBody";
import { buildBreadcrumbs } from "../utils/wiki-paths";
import { SECTION_LABELS, SECTIONS } from "../data/wiki-sections";
import { useWikiIndex } from "../data/use-wiki-index";

import "./wiki-article.module.css";
import "./mega-menu.module.css";

/* =============================================================
   wiki-article.tsx — szablon strony pojedynczego wpisu wiki.
   ─────────────────────────────────────────────────────────────
   Pobiera POJEDYNCZY węzeł markdown po `id` z context. Wszystkie meta
   (urlPath, section, segments, title) są auto-derywowane przez
   gatsby-node.ts; frontmatter jest OPCJONALNY i służy do wzbogacenia
   wpisu (subtitle, kicker, marginalia, relatedSlugs).

   Dlaczego id a nie slug: slug nie jest unikalny w hierarchii
   (`/wiki/X/y` i `/wiki/Z/y` mają to samo slug). Gatsby's createPages
   przekazuje id, które JEST unikalne.
   ============================================================= */

/* ----- Typy odpowiedzi GraphQL ----- */

interface MarginaliaNote {
  type: "note";
  kicker: string;
  body: string;
}
interface MarginaliaFigure {
  type: "figure";
  icon: "kolovrat" | "wordmark" | "iconTraditions";
  title: string;
  caption: string;
}
type MarginaliaItem = MarginaliaNote | MarginaliaFigure;

interface ArticleNode {
  html: string;
  fields: {
    urlPath: string;
    slug: string;
    section: string | null;
    segments: string[];
    isCategoryIndex: boolean;
    title: string;
  };
  frontmatter: {
    subtitle?: string | null;
    kicker?: string | null;
    lede?: string | null;
    edited?: string | null;
    author?: string | null;
    status?: string | null;
    version?: string | null;
    reads?: string | null;
    tags?: string[] | null;
    relatedSlugs?: string[] | null;
    marginalia?: MarginaliaItem[] | null;
  };
}

interface QueryData {
  markdownRemark: ArticleNode;
}

const ICON_MAP = {
  kolovrat: kolovratSvg,
  wordmark: wordmarkSvg,
  iconTraditions: iconTraditionsSvg,
} as const;

/* ============================================================
   GŁÓWNY KOMPONENT
   ============================================================ */

const WikiArticleTemplate: React.FC<PageProps<QueryData>> = ({ data }) => {
  const node = data.markdownRemark;
  const { html, fields, frontmatter: fm } = node;

  const parsed = useMemo(
    () => parseArticleBody(html, fields.segments),
    [html, fields.segments]
  );
  const { ledeNode, rest } = useMemo(() => splitLede(parsed), [parsed]);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeId, setActiveId] = useState<string>(rest.sections[0]?.id ?? "");

  /* Scroll-spy */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const ids = rest.sections.map((s) => s.id);
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => ({ id: e.target.id, top: e.boundingClientRect.top }))
          .sort((a, b) => a.top - b.top);
        if (visible[0]) setActiveId(visible[0].id);
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = sectionRefs.current[id];
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [rest.sections]);

  const onJump = useCallback((id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const r = el.getBoundingClientRect();
    window.scrollBy({ top: r.top - 24, behavior: "smooth" });
  }, []);

  /* Pochodne metadane */
  const isSectionLanding =
    fields.isCategoryIndex && fields.segments.length === 1 && !!fields.section;
  const sectionMeta = fields.section ? SECTIONS[fields.section] : undefined;

  const kicker = fm.kicker || deriveKicker(fields, isSectionLanding, sectionMeta);
  const heroTitle = isSectionLanding && sectionMeta ? sectionMeta.label : fields.title;
  const heroSubtitle =
    fm.subtitle ?? (isSectionLanding ? sectionMeta?.blurb : undefined);
  const breadcrumbs = useMemo(
    () => buildBreadcrumbs(fields.segments, SECTION_LABELS),
    [fields.segments]
  );

  return (
    <WikiLinkProvider>
      <div className={"wf" + (isSectionLanding ? " wf--landing" : "")}>
        <MegaMenu activeUrlPath={fields.urlPath} />

        <Hero
          kicker={kicker}
          title={heroTitle}
          subtitle={heroSubtitle}
          breadcrumbs={breadcrumbs}
          isLanding={isSectionLanding}
          sectionOrder={sectionMeta?.order}
        />

        <div className="wf-body">
          <TOC
            sections={rest.sections}
            activeId={activeId}
            onJump={onJump}
            meta={fm}
          />

          <article className="wf-article">
            {fm.lede ? (
              // Frontmatter-supplied lede with drop cap
              <p
                className="wf-lede wf-dropcap"
                dangerouslySetInnerHTML={{ __html: fm.lede }}
              />
            ) : ledeNode ? (
              <LedeFromFirstParagraph node={ledeNode} />
            ) : null}

            {rest.intro}
            {rest.sections.map((s, i) => (
              <Section
                key={s.id}
                id={s.id}
                title={s.title}
                num={i + 1}
                collapsed={false}
                onToggle={() => {}}
                registerRef={(el) => {
                  sectionRefs.current[s.id] = el;
                }}
              >
                {s.body}
              </Section>
            ))}
          </article>

          <Marginalia items={fm.marginalia ?? []} />
        </div>

        <RelatedGrid
          urlPath={fields.urlPath}
          section={fields.section}
          relatedSlugs={fm.relatedSlugs ?? []}
        />

        <Footer />
      </div>
    </WikiLinkProvider>
  );
};

export default WikiArticleTemplate;

/* ============================================================
   GŁOWA — Gatsby 5 Head API
   ============================================================ */
export const Head: HeadFC<QueryData> = ({ data }) => {
  const n = data.markdownRemark;
  return (
    <>
      <title>{n.fields.title} — Slavic Enlarged Wiki</title>
      <meta
        name="description"
        content={n.frontmatter.subtitle || n.fields.title}
      />
      <html lang="pl" />
    </>
  );
};

/* ============================================================
   GraphQL — pobieramy konkretny node po id (z gatsby-node context).
   ============================================================ */
export const pageQuery = graphql`
  query WikiArticleById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        urlPath
        slug
        section
        segments
        isCategoryIndex
        title
      }
      frontmatter {
        subtitle
        kicker
        lede
        edited
        author
        status
        version
        reads
        tags
        relatedSlugs
        marginalia {
          type
          kicker
          body
          icon
          title
          caption
        }
      }
    }
  }
`;

/* ============================================================
   ─────────────  SUB-WIDOKI  ─────────────
   ============================================================ */

function deriveKicker(
  fields: ArticleNode["fields"],
  isSectionLanding?: boolean,
  sectionMeta?: { order: number; label: string }
): string {
  if (isSectionLanding && sectionMeta) {
    return `Sekcja ${String(sectionMeta.order).padStart(2, "0")} · Slavic Enlarged Wiki`;
  }
  if (!fields.section) return "Wiki";
  const sectionLabel = SECTIONS[fields.section]?.label ?? fields.section;
  if (fields.segments.length <= 2) return sectionLabel;
  const middle = fields.segments
    .slice(1, -1)
    .map(humanize)
    .join(" · ");
  return middle ? `${sectionLabel} · ${middle}` : sectionLabel;
}
function humanize(slug: string): string {
  return slug
    .split("-")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

function Hero({
  kicker, title, subtitle, breadcrumbs, isLanding, sectionOrder,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href: string }[];
  isLanding?: boolean;
  sectionOrder?: number;
}) {
  return (
    <div
      className={"wf-hero" + (isLanding ? " wf-hero--landing" : "")}
      data-screen-label={`Hero — ${title}`}
    >
      <div className="wf-hero__inner">
        {breadcrumbs.length > 0 && (
          <nav className="wf-hero__breadcrumbs" aria-label="Okruszki">
            <Link to="/">Wiki</Link>
            {breadcrumbs.slice(0, -1).map((b, i) => (
              <React.Fragment key={`${b.href}-${i}`}>
                <span className="sep">›</span>
                <Link to={b.href}>{b.label}</Link>
              </React.Fragment>
            ))}
            {isLanding && breadcrumbs.length > 0 && (
              <>
                <span className="sep">›</span>
                <span>{breadcrumbs[breadcrumbs.length - 1].label}</span>
              </>
            )}
          </nav>
        )}
        {isLanding && sectionOrder ? (
          <div className="wf-hero__landing-num">
            {String(sectionOrder).padStart(2, "0")}
          </div>
        ) : null}
        <div className="wf-hero__kicker">
          <span className="dot" />
          {kicker}
        </div>
        <h1 className="wf-hero__title">{title}</h1>
        {subtitle && <div className="wf-hero__subtitle">{subtitle}</div>}
      </div>
    </div>
  );
}

function TOC({
  sections, activeId, onJump, meta,
}: {
  sections: { id: string; title: string }[];
  activeId: string;
  onJump: (id: string) => void;
  meta: ArticleNode["frontmatter"];
}) {
  if (sections.length === 0 && !meta.edited && !meta.author) {
    return <aside className="wf-toc" aria-hidden="true" />;
  }
  return (
    <aside className="wf-toc" aria-label="Spis treści">
      {sections.length > 0 && (
        <>
          <div className="wf-toc__head">
            <img src={iconTraditionsSvg} alt="" />
            <span>Spis Treści</span>
          </div>
          <ol>
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={"#" + s.id}
                  className={activeId === s.id ? "is-active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    onJump(s.id);
                  }}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </>
      )}
      {(meta.edited || meta.author || meta.status || meta.tags) && (
        <dl className="wf-toc__meta">
          {meta.edited && (<><dt>Ostatnia edycja</dt><dd>{meta.edited}</dd></>)}
          {meta.author && (<><dt>Redakcja</dt><dd>{meta.author}</dd></>)}
          {meta.status && (<><dt>Status</dt><dd>{meta.status}</dd></>)}
          {meta.version && (<><dt>Wersja</dt><dd>{meta.version}</dd></>)}
          {meta.reads && (<><dt>Odsłony</dt><dd>{meta.reads}</dd></>)}
          {meta.tags && meta.tags.length > 0 && (
            <>
              <dt>Tagi</dt>
              <dd>{meta.tags.join(" · ")}</dd>
            </>
          )}
        </dl>
      )}
    </aside>
  );
}

function LedeFromFirstParagraph({ node }: { node: React.ReactNode }) {
  // Klonujemy z dodanymi klasami
  if (!React.isValidElement(node)) return null;
  const el = node as React.ReactElement<{ className?: string }>;
  const cls = ["wf-lede", "wf-dropcap", el.props.className].filter(Boolean).join(" ");
  return React.cloneElement(el, { className: cls });
}

function Marginalia({ items }: { items: MarginaliaItem[] }) {
  if (items.length === 0) return <aside className="wf-margin" aria-hidden="true" />;
  return (
    <aside className="wf-margin" aria-label="Marginalia">
      <div className="wf-margin__inner">
        {items.map((item, i) =>
          item.type === "note" ? (
            <div className="wf-note" key={i}>
              <span className="wf-note__kicker">{item.kicker}</span>
              <span dangerouslySetInnerHTML={{ __html: item.body }} />
            </div>
          ) : (
            <div className="wf-figure" key={i}>
              <div className="wf-figure__glyph">
                <img src={ICON_MAP[item.icon] ?? iconTraditionsSvg} alt="" />
              </div>
              <div className="wf-figure__cap">
                <b>{item.title}</b>
                <span dangerouslySetInnerHTML={{ __html: item.caption }} />
              </div>
            </div>
          )
        )}
      </div>
    </aside>
  );
}

function RelatedGrid({
  urlPath, section, relatedSlugs,
}: {
  urlPath: string;
  section: string | null;
  relatedSlugs: string[];
}) {
  const index = useWikiIndex();

  // 1) Jawnie podane relatedSlugs mają pierwszeństwo
  // 2) Auto: siostrzane wpisy w tej samej sekcji, max 4, bez bieżącego
  const items = useMemo(() => {
    if (relatedSlugs.length > 0) {
      return relatedSlugs
        .map((s) => index.all.find((e) => e.slug === s))
        .filter(Boolean) as Array<NonNullable<typeof index.all[number]>>;
    }
    if (!section) return [];
    return index.all
      .filter((e) => e.section === section && e.urlPath !== urlPath && !e.isCategoryIndex)
      .slice(0, 4);
  }, [index, relatedSlugs, section, urlPath]);

  if (items.length === 0) return null;
  return (
    <section className="wf-related">
      <div className="wf-related__head">
        <h2>Powiązane</h2>
      </div>
      <div className="wf-related__grid">
        {items.map((p) => (
          <a className="wf-rcard" key={p.urlPath} href={p.urlPath}>
            <div className="wf-rcard__kicker">{p.kicker}</div>
            <h3 className="wf-rcard__title">{p.title}</h3>
            {p.subtitle && <div className="wf-rcard__sub">{p.subtitle}</div>}
            {p.blurb && <p className="wf-rcard__blurb">{p.blurb}</p>}
            <div className="wf-rcard__go">Czytaj →</div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <div className="wf-footer">
      <div className="wf-footer__brand">
        <img className="kolovrat" src={kolovratSvg} alt="" />
        <img className="wordmark" src={wordmarkSvg} alt="Slavic Enlarged" />
      </div>
      <p>
        „Slavic Enlarged" is a fan-created mod designed to expand the gameplay
        experience in „Crusader Kings III". Treści wiki są tworzone przez
        społeczność moda; wszystkie nazwy własne i prawa do gry-bazy należą do
        Paradox Interactive.
      </p>
    </div>
  );
}
