import * as React from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";

import { MegaMenu } from "../templates/components/MegaMenu";
import { WikiLinkProvider } from "../templates/components/WikiLink";
import { SECTIONS, SECTION_LABELS } from "../data/wiki-sections";
import { useWikiIndex } from "../data/use-wiki-index";

import kolovratSvg from "../assets/img/kolovrat.svg";

import "../templates/wiki-article.module.css";
import "../templates/mega-menu.module.css";

/* =============================================================
   /  — Strona główna wiki.
   Lista wszystkich sekcji z liczbą artykułów + ostatnio dodane.
   ============================================================= */

interface QueryData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

const IndexPage: React.FC<PageProps<QueryData>> = ({ data }) => {
  const meta = data.site.siteMetadata;
  const index = useWikiIndex();

  /* Grupuj wszystkie artykuły po sekcji + posortuj sekcje po `order` */
  const sections = React.useMemo(() => {
    const grouped = new Map<string, typeof index.all>();
    for (const entry of index.all) {
      if (!entry.section) continue;
      const arr = grouped.get(entry.section) ?? [];
      arr.push(entry);
      grouped.set(entry.section, arr);
    }
    return Array.from(grouped.entries())
      .map(([key, items]) => ({
        key,
        label: SECTION_LABELS[key] ?? humanize(key),
        blurb: SECTIONS[key]?.blurb ?? "",
        order: SECTIONS[key]?.order ?? 999,
        items,
      }))
      .sort((a, b) => a.order - b.order);
  }, [index]);

  return (
    <WikiLinkProvider>
      <div className="wf">
        <MegaMenu activeUrlPath="/" />

        <section className="wf-home-hero" data-screen-label="Home — Hero">
          <div className="wf-home-hero__inner">
            <img className="wf-home-hero__mark" src={kolovratSvg} alt="" />
            <div className="wf-home-hero__brand">
              <h2 className="wf-home-hero__brand-name">Slavic Enlarged</h2>
              <span className="wf-tag">Work in Progress</span>
            </div>
            <h1 className="wf-home-hero__title">{meta.title}</h1>
            <p className="wf-home-hero__lede">{meta.description}</p>
            <div className="wf-home-hero__cta">
              <Link className="wf-btn wf-btn--gold" to="/wiki/wprowadzenie/o-modach">
                Zacznij od „O Modach"
              </Link>
              <Link className="wf-btn" to="/wiki/walka-slowianczyzny/czym-jest-walka">
                Czytaj o Walce Słowiańszczyzny
              </Link>
            </div>
          </div>
        </section>

        <section className="wf-home-sections">
          <h2 className="wf-home-sections__head">Spis Sekcji</h2>
          <div className="wf-home-sections__grid">
            {sections.map((s) => (
              <Link
                key={s.key}
                to={`/wiki/${s.key}`}
                className="wf-home-card"
                data-screen-label={`Sekcja — ${s.label}`}
              >
                <div className="wf-home-card__num">
                  {String(s.order).padStart(2, "0")}
                </div>
                <h3 className="wf-home-card__title">{s.label}</h3>
                {s.blurb && (
                  <p className="wf-home-card__blurb">{s.blurb}</p>
                )}
                <div className="wf-home-card__count">
                  {s.items.length} {pluralizeArtykuly(s.items.length)} →
                </div>
              </Link>
            ))}
          </div>
        </section>

        <footer className="wf-footer">
          <div className="wf-footer__brand">
            <img className="kolovrat" src={kolovratSvg} alt="" />
            <img className="wordmark" src={wordmarkSvg} alt="Slavic Enlarged" />
          </div>
          <p>
            „Slavic Enlarged" is a fan-created mod designed to expand the
            gameplay experience in „Crusader Kings III". Wszystkie nazwy własne
            i prawa do gry-bazy należą do Paradox Interactive.
          </p>
        </footer>
      </div>
    </WikiLinkProvider>
  );
};

export default IndexPage;

export const Head: HeadFC<QueryData> = ({ data }) => (
  <>
    <title>{data.site.siteMetadata.title}</title>
    <meta name="description" content={data.site.siteMetadata.description} />
    <html lang="pl" />
  </>
);

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

function humanize(slug: string): string {
  return slug
    .split("-")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}
function pluralizeArtykuly(n: number): string {
  if (n === 1) return "artykuł";
  const last = n % 10;
  const lastTwo = n % 100;
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return "artykuły";
  return "artykułów";
}
