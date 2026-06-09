import * as React from "react";
import { useEffect, useState } from "react";
import { Link, type HeadFC } from "gatsby";

import { MegaMenu } from "../../templates/components/MegaMenu";
import { WikiLinkProvider } from "../../templates/components/WikiLink";
import { Section } from "../../templates/components/Section";
import { useWikiIndex } from "../../data/use-wiki-index";

import kolovratSvg from "../../assets/img/kolovrat.svg";
import wordmarkSvg from "../../assets/img/wordmark.svg";

import godDazbogSvg from "../../assets/img/god-dazbog.svg";
import godSwarozycSvg from "../../assets/img/god-swarozyc.svg";
import godLadaSvg from "../../assets/img/god-lada.svg";
import godMarzannaSvg from "../../assets/img/god-marzanna.svg";
import godSwietowitSvg from "../../assets/img/god-swietowit.svg";
import godWelesSvg from "../../assets/img/god-weles.svg";

import "../../templates/wiki-article.module.css";
import "../../templates/mega-menu.module.css";
import "../../styles/home.css";
import "./komponenty.module.css";

/* =============================================================
   /dev/komponenty — Design System showcase (dev-only).
   ─────────────────────────────────────────────────────────────
   Organizacja wg warstw:
     I.   Fundamenty  — tokeny: kolory, typografia, spacing, cienie, dostępność
     II.  Elementy     — atomowe: odznaki, przyciski, breadcrumbs
     III. Komponenty   — złożone: MegaMenu, Section, WikiLink, Marginalia, Footer, Preview
     IV.  Wzorce       — layouts: Hero artykułu, Home Hero, Karta sekcji
     V.   Markdown     — elementy renderowane z treści wiki
     VI.  Zasoby       — ikony bogów, branding (logotyp, wordmark)

   Nawigacja: sticky sidebar z scroll-spy (IntersectionObserver).
   Nie buduje się na produkcji (guard w gatsby-node.ts).
   ============================================================= */

/* ─── helpers ─── */

function Swatch({ name, cssVar }: { name: string; cssVar: string }) {
  return (
    <div className="kb-swatch">
      <div className="kb-swatch__chip" style={{ background: `var(${cssVar})` }} />
      <div className="kb-swatch__meta">
        <span className="kb-swatch__name">{name}</span>
        <code className="kb-swatch__var">{cssVar}</code>
      </div>
    </div>
  );
}

function SpaceBar({ token, px }: { token: string; px: number }) {
  return (
    <div className="kb-space-row">
      <code className="kb-space-row__token">{token}</code>
      <div className="kb-space-row__bar" style={{ width: px }} />
      <span className="kb-space-row__px">{px}px</span>
    </div>
  );
}

function ShadowBox({ name, cssVar }: { name: string; cssVar: string }) {
  return (
    <div className="kb-shadow-box" style={{ boxShadow: `var(${cssVar})` }}>
      <code>{name}</code>
    </div>
  );
}

function DemoCard({
  id,
  title,
  desc,
  children,
}: {
  id: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="kb-card">
      <header className="kb-card__head">
        <h3 className="kb-card__title">{title}</h3>
        {desc && <p className="kb-card__desc">{desc}</p>}
      </header>
      <div className="kb-card__body">{children}</div>
    </section>
  );
}

function SectionDivider({ id, num, title }: { id: string; num: string; title: string }) {
  return (
    <div id={id} className="kb-divider">
      <span className="kb-divider__num">{num}</span>
      <h2 className="kb-divider__title">{title}</h2>
    </div>
  );
}

/* ─── data ─── */

const COLOR_GROUPS = [
  {
    label: "Złoto (brand)",
    items: [
      { name: "Gold", cssVar: "--gold" },
      { name: "Gold bright", cssVar: "--gold-bright" },
      { name: "Gold warm", cssVar: "--gold-warm" },
      { name: "Gold light", cssVar: "--gold-light" },
      { name: "Gold deep", cssVar: "--gold-deep" },
      { name: "Gold shadow", cssVar: "--gold-shadow" },
      { name: "Gold glow", cssVar: "--gold-glow" },
    ],
  },
  {
    label: "Bagno (tła)",
    items: [
      { name: "Bog deep", cssVar: "--bog-deep" },
      { name: "Bog warm", cssVar: "--bog-warm" },
      { name: "Bog tar", cssVar: "--bog-tar" },
      { name: "Bog moss", cssVar: "--bog-moss" },
      { name: "Banner fill", cssVar: "--banner-fill" },
    ],
  },
  {
    label: "Akcenty (in-game)",
    items: [
      { name: "Positive", cssVar: "--accent-positive-solid" },
      { name: "Info", cssVar: "--accent-info" },
      { name: "Info soft", cssVar: "--accent-info-soft" },
      { name: "Warning", cssVar: "--accent-warning" },
      { name: "Blood", cssVar: "--accent-blood" },
    ],
  },
  {
    label: "Tekst",
    items: [
      { name: "On dark", cssVar: "--fg-on-dark" },
      { name: "On dark soft", cssVar: "--fg-on-dark-soft" },
      { name: "On light", cssVar: "--fg-on-light" },
      { name: "Muted", cssVar: "--fg-muted" },
    ],
  },
  {
    label: "Overlaye",
    items: [
      { name: "Overlay 90", cssVar: "--bg-overlay-90" },
      { name: "Overlay 80", cssVar: "--bg-overlay-80" },
      { name: "Overlay 70", cssVar: "--bg-overlay-70" },
      { name: "Card dark", cssVar: "--bg-card-dark" },
    ],
  },
  {
    label: "Wiki (pergamin)",
    items: [
      { name: "Parchment", cssVar: "--wf-parchment" },
      { name: "Parchment warm", cssVar: "--wf-parchment-warm" },
      { name: "Parchment edge", cssVar: "--wf-parchment-edge" },
      { name: "Rubric", cssVar: "--wf-rubric" },
      { name: "Ink", cssVar: "--wf-ink" },
    ],
  },
];

type TypeRow = {
  token: string;
  family: string;
  size: string;
  px: string;
  weight: string;
  line: string;
  color: string;
  sample: string;
  group: "display" | "body";
};

const TYPE_SCALE: TypeRow[] = [
  { token: "Hero",     family: "var(--font-display)", size: "var(--t-hero-size)",     px: "64", weight: "400", line: "var(--t-hero-line)",     color: "var(--gold)",            sample: "Slavic Enlarged",     group: "display" },
  { token: "Title",    family: "var(--font-display)", size: "var(--t-title-size)",    px: "48", weight: "400", line: "var(--t-title-line)",    color: "var(--gold)",            sample: "Kultury",             group: "display" },
  { token: "Subtitle", family: "var(--font-display)", size: "var(--t-subtitle-size)", px: "36", weight: "400", line: "var(--t-subtitle-line)", color: "var(--gold-light)",      sample: "Podtytuł sekcji",     group: "display" },
  { token: "H2",       family: "var(--font-display)", size: "var(--t-h2-size)",       px: "28", weight: "400", line: "var(--t-h2-line)",       color: "var(--gold)",            sample: "Krywicze",            group: "display" },
  { token: "Section",  family: "var(--font-display)", size: "var(--t-section-size)",  px: "24", weight: "400", line: "var(--t-section-line)",  color: "var(--gold-light)",      sample: "Tradycje",            group: "display" },
  { token: "Tag",      family: "var(--font-display)", size: "var(--t-tag-size)",      px: "20", weight: "400", line: "var(--t-tag-line)",      color: "var(--gold)",            sample: "Work in Progress",    group: "display" },
  { token: "Body-lg",  family: "var(--font-body)",    size: "var(--t-body-lg-size)",  px: "20", weight: "400", line: "var(--t-body-lg-line)",  color: "var(--fg-on-dark)",      sample: "Lede artykułu",       group: "body" },
  { token: "Body",     family: "var(--font-body)",    size: "var(--t-body-size)",     px: "16", weight: "500", line: "var(--t-body-line)",     color: "var(--fg-on-dark)",      sample: "Tekst akapitu wiki",  group: "body" },
  { token: "Caption",  family: "var(--font-body)",    size: "var(--t-caption-size)",  px: "14", weight: "700", line: "var(--t-caption-line)",  color: "var(--fg-on-dark-soft)", sample: "Kicker sekcji",       group: "body" },
  { token: "Menu",     family: "var(--font-body)",    size: "var(--t-menu-size)",     px: "20", weight: "400", line: "var(--t-menu-line)",     color: "var(--fg-on-dark)",      sample: "Pozycja menu",        group: "body" },
  { token: "Footnote", family: "var(--font-body)",    size: "var(--t-foot-size)",     px: "12", weight: "500", line: "var(--t-foot-line)",     color: "var(--fg-muted)",        sample: "Drobny tekst, metadane", group: "body" },
];

const SPACING = [
  { token: "--space-1", px: 4 },
  { token: "--space-2", px: 8 },
  { token: "--space-3", px: 10 },
  { token: "--space-4", px: 14 },
  { token: "--space-5", px: 15 },
  { token: "--space-6", px: 20 },
  { token: "--space-7", px: 25 },
  { token: "--space-8", px: 30 },
  { token: "--space-9", px: 40 },
  { token: "--space-10", px: 50 },
  { token: "--space-11", px: 60 },
  { token: "--space-12", px: 70 },
  { token: "--space-13", px: 80 },
];

const TOC = [
  { num: "I", group: "Fundamenty", items: [
    { id: "kolory", label: "Kolory" },
    { id: "typografia", label: "Typografia" },
    { id: "spacing", label: "Spacing" },
    { id: "cienie", label: "Cienie i krawędzie" },
    { id: "dostepnosc", label: "Dostępność" },
  ]},
  { num: "II", group: "Elementy", items: [
    { id: "odznaki", label: "Odznaki i tagi" },
    { id: "przyciski", label: "Przyciski" },
    { id: "breadcrumbs", label: "Breadcrumbs" },
  ]},
  { num: "III", group: "Komponenty", items: [
    { id: "mega-menu", label: "MegaMenu" },
    { id: "section", label: "Section (akordeon)" },
    { id: "wiki-link", label: "WikiLink (popover)" },
    { id: "marginalia", label: "Marginalia" },
    { id: "footer", label: "Footer" },
    { id: "preview", label: "Preview (tooltip)" },
  ]},
  { num: "IV", group: "Wzorce", items: [
    { id: "hero", label: "Hero artykułu" },
    { id: "home-hero", label: "Hero strony głównej" },
    { id: "karta-sekcji", label: "Karta sekcji" },
  ]},
  { num: "V", group: "Markdown", items: [
    { id: "md-proza", label: "Proza" },
    { id: "md-listy", label: "Listy" },
    { id: "md-tabela", label: "Tabela" },
    { id: "md-cytat", label: "Cytat" },
    { id: "md-linki", label: "Linki" },
    { id: "md-hr", label: "Separator" },
  ]},
  { num: "VI", group: "Zasoby", items: [
    { id: "ikony-bogow", label: "Ikony bogów" },
    { id: "branding", label: "Branding" },
    { id: "mapy-kultur", label: "Mapy kultur" },
  ]},
];

const CULTURE_MAPS = [
  "branicevci", "carantanian", "croatian", "docleani", "draguvites",
  "dregovichs", "drevani", "drevlyans", "goplans", "hevelli",
  "ilmenian", "kashubians", "krivichians", "lutici", "mazovians",
  "nitrianians", "obodrites", "pannonian_slavs", "polans", "polochans",
  "polyans", "pommeranian", "radimichs", "rani", "serbian",
  "silesian", "smolyani", "sorbian", "timocani", "tivertsi",
  "travunians", "ulichs", "vistulan", "vyatichi", "wagrians",
];

function humanizeCulture(key: string): string {
  return key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ─── main ─── */

/* ─── scroll-spy hook ─── */

function useScrollSpy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: `-${offset}px 0px -60% 0px`, threshold: 0 }
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
}

const ALL_IDS = TOC.flatMap((g) => g.items.map((t) => t.id));

const KomponentyPage: React.FC = () => {
  const index = useWikiIndex();
  const visibleSections = index.visibleSections;
  const activeId = useScrollSpy(ALL_IDS);

  const [sectionCollapsed, setSectionCollapsed] = useState<Record<string, boolean>>({
    demo1: false,
    demo2: true,
    demo3: true,
  });

  return (
    <WikiLinkProvider>
      <main id="main" className="wf" style={{ background: "var(--bg-page-dark)", minHeight: "100vh" }}>

        {/* ── Live MegaMenu ── */}
        <MegaMenu activeUrlPath="/dev/komponenty" />

        {/* ── Header ── */}
        <div className="kb-header">
          <span className="kb-header__eyebrow">Dev-only</span>
          <h1 className="kb-header__title">Design System</h1>
          <p className="kb-header__sub">
            Slavic Enlarged Wiki — komponenty, tokeny, wzorce.
            Wskaż element, opisz zmianę.
          </p>
        </div>

        {/* ── Sidebar + Content layout ── */}
        <div className="kb-layout">

          {/* ── Sidebar TOC ── */}
          <nav className="kb-sidebar" aria-label="Spis komponentów">
            {TOC.map((g) => (
              <div key={g.group} className="kb-sidebar__group">
                <span className="kb-sidebar__group-label">
                  <span className="kb-sidebar__group-num" aria-hidden="true">{g.num}</span>
                  {g.group}
                </span>
                <ul className="kb-sidebar__list">
                  {g.items.map((t) => (
                    <li key={t.id}>
                      <a
                        href={`#${t.id}`}
                        className={`kb-sidebar__link${activeId === t.id ? " kb-sidebar__link--active" : ""}`}
                      >
                        {t.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* ── Content ── */}
          <div className="kb-grid">

          {/* ═══════════════════════════════════════════════════════
             I. FUNDAMENTY
             ═══════════════════════════════════════════════════════ */}
          <SectionDivider id="fundamenty" num="I" title="Fundamenty" />

          {/* ── Kolory ── */}
          <DemoCard id="kolory" title="Kolory" desc="Plik: src/styles/tokens.css — paleta CSS custom properties.">
            <div className="kb-color-grid">
              {COLOR_GROUPS.map((g) => (
                <div key={g.label} className="kb-color-group">
                  <div className="kb-label">{g.label}</div>
                  {g.items.map((c) => (
                    <Swatch key={c.cssVar} name={c.name} cssVar={c.cssVar} />
                  ))}
                </div>
              ))}
            </div>
          </DemoCard>

          {/* ── Typografia ── */}
          <DemoCard id="typografia" title="Typografia" desc="3 rodziny fontow, 10 ról semantycznych. Tokeny --t-* w tokens.css.">
            <div className="kb-type-families">
              <div className="kb-type-family">
                <div className="kb-label">--font-display</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 36, color: "var(--gold)" }}>
                  Paradox King Script
                </div>
              </div>
              <div className="kb-type-family">
                <div className="kb-label">--font-body</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 18, color: "var(--fg-on-dark)" }}>
                  Lato — tekst akapitów, UI, formularze
                </div>
              </div>
              <div className="kb-type-family">
                <div className="kb-label">--font-mono</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--accent-info)" }}>
                  se_slavic_east = {"{"} ethos = ethos_communal {"}"}
                </div>
              </div>
            </div>

            <div className="kb-label" style={{ marginTop: 24 }}>Skala — display (Paradox King Script)</div>
            <div className="kb-type-scale">
              {TYPE_SCALE.filter((t) => t.group === "display").map((t) => (
                <div key={t.token} className="kb-type-row">
                  <code className="kb-type-row__token">{t.token}</code>
                  <span className="kb-type-row__info">{t.px}px / {t.weight}</span>
                  <div
                    className="kb-type-row__sample"
                    style={{
                      fontFamily: t.family,
                      fontSize: t.size,
                      lineHeight: t.line,
                      color: t.color,
                    }}
                  >
                    {t.sample}
                  </div>
                </div>
              ))}
            </div>

            <div className="kb-label" style={{ marginTop: 24 }}>Skala — body (Lato)</div>
            <div className="kb-type-scale">
              {TYPE_SCALE.filter((t) => t.group === "body").map((t) => (
                <div key={t.token} className="kb-type-row">
                  <code className="kb-type-row__token">{t.token}</code>
                  <span className="kb-type-row__info">{t.px}px / {t.weight}</span>
                  <div
                    className="kb-type-row__sample"
                    style={{
                      fontFamily: t.family,
                      fontSize: t.size,
                      lineHeight: t.line,
                      color: t.color,
                    }}
                  >
                    {t.sample}
                  </div>
                </div>
              ))}
            </div>
          </DemoCard>

          {/* ── Spacing ── */}
          <DemoCard id="spacing" title="Spacing" desc="Skala 4–80px, tokeny --space-1 do --space-13.">
            <div className="kb-spacing">
              {SPACING.map((s) => (
                <SpaceBar key={s.token} token={s.token} px={s.px} />
              ))}
            </div>
          </DemoCard>

          {/* ── Cienie i krawędzie ── */}
          <DemoCard id="cienie" title="Cienie i krawędzie" desc="Tokeny --shadow-*, --border-ink-*, --radius-*.">
            <div className="kb-shadows">
              <ShadowBox name="--shadow-carved" cssVar="--shadow-carved" />
              <ShadowBox name="--shadow-card" cssVar="--shadow-card" />
              <ShadowBox name="--shadow-aura" cssVar="--shadow-aura" />
            </div>
            <div className="kb-label" style={{ marginTop: 20 }}>Border radius</div>
            <div className="kb-radii">
              <div className="kb-radius-box" style={{ borderRadius: "var(--radius-card)" }}>
                <code>--radius-card (20px)</code>
              </div>
              <div className="kb-radius-box" style={{ borderRadius: "var(--radius-soft)" }}>
                <code>--radius-soft (10px)</code>
              </div>
              <div className="kb-radius-box" style={{ borderRadius: "var(--radius-pill)" }}>
                <code>--radius-pill (999px)</code>
              </div>
            </div>
          </DemoCard>

          {/* ── Dostępność (WCAG 2.1 AA) ── */}
          <DemoCard id="dostepnosc" title="Dostępność" desc="Zasady WCAG 2.1 AA wbudowane w design system. Pełna specyfikacja w tokens.css.">
            <div>
              <div className="kb-label">Kontrast tekstu</div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, color: "var(--fg-on-dark-soft)" }}>
                <thead>
                  <tr style={{ textAlign: "left", borderBottom: "1px solid rgba(179,153,77,0.2)" }}>
                    <th style={{ padding: "6px 8px" }}>Para</th>
                    <th style={{ padding: "6px 8px" }}>Stosunek</th>
                    <th style={{ padding: "6px 8px" }}>Wymagane</th>
                    <th style={{ padding: "6px 8px" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { pair: "#fff na bog-deep", ratio: "16.30:1", req: "4.5:1", ok: true },
                    { pair: "rgba(…,0.82) na bog-deep", ratio: "11.29:1", req: "4.5:1", ok: true },
                    { pair: "#C5A048 na bog-deep", ratio: "6.59:1", req: "3:1 (large)", ok: true },
                    { pair: "rgba(…,0.6) na bog-deep", ratio: "6.69:1", req: "4.5:1", ok: true },
                    { pair: "rgba(…,0.5) na bog-deep", ratio: "~4.95:1", req: "4.5:1", ok: true },
                  ].map((r, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid var(--bg-overlay-70, rgba(255,255,255,0.05))" }}>
                      <td style={{ padding: "6px 8px", fontFamily: "var(--font-mono)", fontSize: 11 }}>{r.pair}</td>
                      <td style={{ padding: "6px 8px" }}>{r.ratio}</td>
                      <td style={{ padding: "6px 8px" }}>{r.req}</td>
                      <td style={{ padding: "6px 8px" }}>{r.ok ? "✅" : "❌"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="kb-label" style={{ marginTop: 20 }}>Reguły</div>
              <ul style={{ margin: 0, paddingLeft: 20, fontSize: 13, lineHeight: 1.8, color: "var(--fg-on-dark-soft)" }}>
                <li>Touch target: min. <strong>44×44 CSS px</strong> (WCAG 2.5.5)</li>
                <li>Każdy interaktywny element: <code>:focus-visible</code> z <code>box-shadow: 0 0 0 2px var(--gold)</code></li>
                <li>Nigdy <code>outline: none</code> bez zamiennika</li>
                <li>Każda strona: <code>&lt;main id="main"&gt;</code> + skip-link</li>
                <li>Nagłówki: monotonowa hierarchia H1 → H2 → H3</li>
                <li>Animacje: <code>@media (prefers-reduced-motion: reduce)</code></li>
                <li>Dekoracje: <code>alt=""</code> na obrazkach, <code>aria-hidden="true"</code> na numerach</li>
                <li>Minimum opacity tekstu na <code>bog-deep</code>: <strong>0.5</strong> (nie 0.45!)</li>
              </ul>
            </div>
          </DemoCard>

          {/* ═══════════════════════════════════════════════════════
             II. ELEMENTY
             ═══════════════════════════════════════════════════════ */}
          <SectionDivider id="elementy" num="II" title="Elementy" />

          {/* ── Odznaki i tagi ── */}
          <DemoCard id="odznaki" title="Odznaki i tagi" desc="Klasy .mm-pill, .wf-tag, .tag-pos/neu/neg — etykiety inline w różnych kontekstach.">
            <div className="kb-label">.mm-pill — badge w mega-menu (frontmatter)</div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: 16 }}>
              {["REFORMA", "NOWE", "DLC", "BETA"].map((label) => (
                <span key={label} className="mm-pill">{label}</span>
              ))}
            </div>
            <div className="kb-label">.wf-tag — pill na ciemnym tle (Home Hero, karty)</div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: 16 }}>
              <span className="wf-tag">Work in Progress</span>
              <span className="wf-tag">DLC</span>
              <span className="wf-tag">Nowe</span>
            </div>
            <div className="kb-label">.tag-pos / .tag-neu / .tag-neg — tagi kolorowe w tabelach</div>
            <div className="wf-table" style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", marginTop: 6, border: "none", background: "none" }}>
              <span className="tag-pos">Pozytywna</span>
              <span className="tag-neu">Neutralna</span>
              <span className="tag-neg">Negatywna</span>
            </div>
          </DemoCard>

          {/* ── Przyciski ── */}
          <DemoCard id="przyciski" title="Przyciski" desc="Klasy .wf-btn i .wf-cta — akcje i nawigacja.">
            <div className="kb-label">.wf-btn — CTA w hero i formularzach</div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center", marginBottom: 16 }}>
              <span className="wf-btn wf-btn--gold">Gold (główny CTA)</span>
              <span className="wf-btn">Ghost (drugorzędny)</span>
            </div>
            <div className="kb-label">.wf-cta — link nawigacyjny w treści artykułu</div>
            <div style={{ marginBottom: 16 }}>
              <Link to="/" className="wf-cta" style={{ display: "inline-block" }}>
                Przeczytaj wprowadzenie →
              </Link>
            </div>
            <div className="kb-label">.mm-col__more — „zobacz wszystkie" w mega-menu</div>
            <div className="mm-col__more">
              <a href="#">Zobacz wszystkie 12 →</a>
            </div>
          </DemoCard>

          {/* ── Breadcrumbs ── */}
          <DemoCard id="breadcrumbs" title="Breadcrumbs" desc="Klasa .wf-breadcrumbs — nawigacja okruszkowa generowana z urlPath.">
            <nav className="wf-breadcrumbs" aria-label="Breadcrumbs demo">
              <ol>
                <li><Link to="/">Wiki</Link></li>
                <li><Link to="/wiki/kultury">Kultury</Link></li>
                <li><Link to="/wiki/kultury/wschodnioslowianskie">Wschodniosłowiańskie</Link></li>
                <li aria-current="page">Krywicze</li>
              </ol>
            </nav>
          </DemoCard>

          {/* ═══════════════════════════════════════════════════════
             III. KOMPONENTY
             ═══════════════════════════════════════════════════════ */}
          <SectionDivider id="komponenty" num="III" title="Komponenty" />

          {/* ── MegaMenu ── */}
          <DemoCard
            id="mega-menu"
            title="MegaMenu"
            desc="Top-bar + mega-panele + wyszukiwarka + mobile drawer. Renderowany live powyżej. Plik: MegaMenu.tsx."
          >
            <div className="kb-props">
              <div><code>activeUrlPath</code>: string — podswietla sekcje</div>
              <div><strong>Sekcje:</strong> {visibleSections.map((s) => s.navLabel).join(", ")}</div>
              <div><strong>Artykułów w indeksie:</strong> {index.all.length}</div>
              <div><strong>Plik:</strong> <code>src/templates/components/MegaMenu.tsx</code></div>
            </div>
          </DemoCard>

          {/* ── Section ── */}
          <DemoCard
            id="section"
            title="Section (akordeon)"
            desc="Zwijany rozdział artykułu z animacją max-height. Plik: Section.tsx."
          >
            <div style={{ background: "var(--bg-overlay-90)", borderRadius: 4, padding: "0 16px" }}>
              {["Otwarty rozdzial", "Zamkniety rozdzial", "Kolejny zamkniety"].map(
                (title, i) => {
                  const key = `demo${i + 1}`;
                  return (
                    <Section
                      key={key}
                      id={key}
                      title={title}
                      num={i + 1}
                      collapsed={!!sectionCollapsed[key]}
                      onToggle={() =>
                        setSectionCollapsed((prev) => ({ ...prev, [key]: !prev[key] }))
                      }
                      registerRef={() => {}}
                    >
                      <p style={{ color: "var(--fg-on-dark-soft)", padding: "8px 0 16px" }}>
                        Treść rozdziału. Numeracja dynamiczna (01., 02., ...).
                        Kliknij nagłówek aby zwinąć/rozwinąć.
                      </p>
                    </Section>
                  );
                }
              )}
            </div>
          </DemoCard>

          {/* ── WikiLink ── */}
          <DemoCard
            id="wiki-link"
            title="WikiLink (popover)"
            desc="Link wewnętrzny z hover-popoverem. Dane z useWikiIndex(). Plik: WikiLink.tsx."
          >
            <div style={{ padding: "4px 0" }}>
              {index.all.slice(0, 5).map((e) => (
                <div key={e.urlPath} style={{ marginBottom: 8 }}>
                  <Link to={e.urlPath} className="wf-wikilink" data-url={e.urlPath}>
                    {e.title}
                  </Link>
                  <span style={{ color: "var(--fg-muted)", fontSize: 11, marginLeft: 8 }}>
                    {e.section}
                  </span>
                </div>
              ))}
            </div>
          </DemoCard>

          {/* ── Marginalia ── */}
          <DemoCard
            id="marginalia"
            title="Marginalia"
            desc="Notatki i figury w prawej kolumnie artykułu. Klasy .wf-note i .wf-figure wewnątrz .wf-margin."
          >
            <aside className="wf-margin" aria-label="Marginalia" style={{ padding: 0 }}>
              <div className="wf-margin__inner">
                {/* Note */}
                <div>
                  <div className="kb-label">Wariant: note</div>
                  <div className="wf-note">
                    <span className="wf-note__kicker">Uwaga do gry</span>
                    <span>
                      Zmiana wiary wymaga zgromadzenia co najmniej <strong>250 Pietas</strong>.
                      Jeśli masz reformowaną wiarę, koszt wzrasta do <em>500</em>.
                    </span>
                  </div>
                </div>
                {/* Figure */}
                <div>
                  <div className="kb-label">Wariant: figure</div>
                  <div className="wf-figure">
                    <div className="wf-figure__glyph">
                      <img src={kolovratSvg} alt="" />
                    </div>
                    <div className="wf-figure__cap">
                      <b>Kolovrat</b>
                      Słowiański symbol solarny, w modzie pojawia się jako
                      glyph przy&nbsp;świętych miejscach i&nbsp;rytuałach pogańskich.
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </DemoCard>

          {/* ── Footer ── */}
          <DemoCard id="footer" title="Footer" desc="Klasa .wf-footer — stopka z logotypem i disclaimerem. Wspólna dla artykułów i strony głównej.">
            <div className="wf-footer" style={{ margin: 0, padding: "18px 0 0", maxWidth: "none" }}>
              <div className="wf-footer__brand">
                <img className="kolovrat" src={kolovratSvg} alt="" />
                <img className="wordmark" src={wordmarkSvg} alt="Slavic Enlarged" />
              </div>
              <p>
                „Slavic Enlarged" is a fan-created mod designed to expand the
                gameplay experience in „Crusader Kings III". Wszystkie nazwy własne
                i prawa do gry-bazy należą do Paradox Interactive.
              </p>
            </div>
          </DemoCard>

          {/* ── Preview (tooltip) ── */}
          <DemoCard id="preview" title="Preview (tooltip)" desc="Klasy .wf-preview — popup na hover WikiLink. Wyświetla podgląd artykułu.">
            <div style={{ position: "relative", minHeight: 160 }}>
              <div className="wf-preview" style={{ position: "relative", opacity: 1, transform: "none", pointerEvents: "auto" }}>
                <div className="wf-preview__kicker">Kultury</div>
                <div className="wf-preview__title">Krywicze</div>
                <div className="wf-preview__subtitle">Etos dyplomatyczny</div>
                <div className="wf-preview__blurb">
                  Krywicze zamieszkiwali tereny dzisiejszej Białorusi i zachodnich
                  rubieży Rosji. Ich głównym grodem był Połock.
                </div>
                <div className="wf-preview__footer">
                  <span>Kultury › Wschodniosłowiańskie</span>
                  <span className="go">Otwórz →</span>
                </div>
              </div>
            </div>
          </DemoCard>

          {/* ═══════════════════════════════════════════════════════
             IV. WZORCE
             ═══════════════════════════════════════════════════════ */}
          <SectionDivider id="wzorce" num="IV" title="Wzorce" />

          {/* ── Hero ── */}
          <DemoCard id="hero" title="Hero artykułu" desc="Klasy .wf-hero — nagłówek artykułu z ordinal, kicker, H1, subtitle, lede.">
            <div className="wf-hero" style={{ margin: "-20px -24px 0", borderRadius: "4px 4px 0 0" }}>
              <div className="wf-hero__ordinal">
                <span className="wf-hero__ordinal-line" />
                <span className="wf-hero__ordinal-text">Sekcja 01</span>
                <span className="wf-hero__ordinal-line" />
              </div>
              <div className="wf-hero__kicker">Demo · Komponenty</div>
              <h1 className="wf-hero__h1">Przykładowy tytuł</h1>
              <p className="wf-hero__subtitle">Podtytuł z frontmattera</p>
              <p className="wf-hero__lede">
                Lede — pierwszy akapit wprowadzający artykuł wiki.
                Piszemy po polsku, z perspektywy gracza CK3.
              </p>
            </div>
          </DemoCard>

          {/* ── Home Hero ── */}
          <DemoCard id="home-hero" title="Hero strony głównej" desc="Klasy .wf-home-hero — mapa w tle, logo, brand name, tag WIP, H1, lede, dwa CTA.">
            <div className="wf-home-hero" style={{ margin: "-20px -24px 0", borderRadius: "4px 4px 0 0", padding: "56px 24px 48px" }}>
              <div className="wf-home-hero__inner">
                <img className="wf-home-hero__mark" src={kolovratSvg} alt="" style={{ animation: "none" }} />
                <div className="wf-home-hero__brand">
                  <h2 className="wf-home-hero__brand-name">Slavic Enlarged</h2>
                  <span className="wf-tag">Work in Progress</span>
                </div>
                <h1 className="wf-home-hero__title">Slavic Enlarged Wiki</h1>
                <p className="wf-home-hero__lede">
                  Przewodnik po świecie słowiańskiego pogaństwa w Crusader Kings III
                  — mod Slavic Enlarged &amp; Slavic Struggle of Perun.
                </p>
                <div className="wf-home-hero__cta">
                  <span className="wf-btn wf-btn--gold">Scenariusze startowe</span>
                  <span className="wf-btn">Zacznij od „O Modach"</span>
                </div>
              </div>
            </div>
          </DemoCard>

          {/* ── Karta sekcji ── */}
          <DemoCard id="karta-sekcji" title="Karta sekcji" desc="Klasa .wf-rcard.wf-rcard--home — kafelek sekcji na stronie głównej z numerem, tytułem i opisem. Bazuje na wspólnym komponencie .wf-rcard.">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gridTemplateRows: "auto auto 1fr auto", gap: 16 }}>
              <div className="wf-rcard wf-rcard--home" style={{ cursor: "default" }}>
                <div className="wf-rcard__kicker" aria-hidden="true">01</div>
                <h3 className="wf-rcard__title">Wprowadzenie</h3>
                <p className="wf-rcard__blurb">Czym jest mod i jak zacząć grę.</p>
                <div className="wf-rcard__go">4 artykuły →</div>
              </div>
              <div className="wf-rcard wf-rcard--home" style={{ cursor: "default" }}>
                <div className="wf-rcard__kicker" aria-hidden="true">02</div>
                <h3 className="wf-rcard__title">Kultury</h3>
                <p className="wf-rcard__blurb">34 kultury słowiańskie z unikalnymi tradycjami.</p>
                <div className="wf-rcard__go">12 artykułów →</div>
              </div>
            </div>
          </DemoCard>

          {/* ═══════════════════════════════════════════════════════
             V. MARKDOWN — elementy renderowane z treści wiki
             ═══════════════════════════════════════════════════════ */}
          <SectionDivider id="markdown" num="V" title="Markdown" />

          {/* ── Proza ── */}
          <DemoCard id="md-proza" title="Proza" desc="Klasa .wf-article — akapity, lede z dropcapem, nagłówek H3, strong, em.">
            <article className="wf-article" style={{ padding: 0 }}>
              {/* Lede z dropcapem */}
              <div className="kb-label">Lede + dropcap</div>
              <p className="wf-lede wf-dropcap">
                Slavic Enlarged rozbija wielkie, monolityczne kultury słowiańskie
                na dziesiątki historycznych plemion i odłamów. Każde z nich ma
                unikalny zestaw tradycji, odzwierciedlający realia wczesnego
                średniowiecza.
              </p>

              {/* Akapity */}
              <div className="kb-label">Akapity (p + p z text-indent)</div>
              <p>
                Mod dodaje 34 kultury słowiańskie — od Ilmenian nad Ładogą
                po Duklian nad Adriatykiem. Każda kultura posiada własne tradycje,
                unikalne nazwy i historyczne odniesienia.
              </p>
              <p>
                Dzięki temu każda rozgrywka jako słowiański władca zaczyna się
                inaczej. Krywicze nie są tym samym co Polanie, a Obodryci mają
                zupełnie inne wyzwania niż Bułgarzy.
              </p>

              {/* H3 */}
              <div className="kb-label" style={{ marginTop: 24 }}>Nagłówek H3</div>
              <h3>Tradycje i etosy</h3>
              <p>
                Każda kultura definiuje <strong>etos</strong> (podstawowy archetyp)
                oraz zestaw <em>tradycji</em>, które determinują dostępne
                mechaniki i bonusy w grze.
              </p>

              {/* Inline: strong, em */}
              <div className="kb-label" style={{ marginTop: 24 }}>Inline: strong + em</div>
              <p>
                To jest <strong>pogrubiony tekst</strong>, a to jest{" "}
                <em>kursywa</em>. Można je też{" "}
                <strong><em>łączyć razem</em></strong>.
              </p>
            </article>
          </DemoCard>

          {/* ── Listy ── */}
          <DemoCard id="md-listy" title="Listy" desc="Klasa .wf-article — listy punktowane (ul) i numerowane (ol) z zagnieżdżeniem.">
            <article className="wf-article" style={{ padding: 0 }}>
              <div className="kb-label">Lista punktowana (ul)</div>
              <ul>
                <li>Polanie lechiccy — etos wspólnotowy</li>
                <li>Krywicze — etos dyplomatyczny</li>
                <li>
                  Obodryci — etos wojowniczy
                  <ul>
                    <li>Wagriowie (odłam)</li>
                    <li>Połabianie (odłam)</li>
                  </ul>
                </li>
                <li>Wieleci — etos wojowniczy</li>
              </ul>

              <div className="kb-label" style={{ marginTop: 20 }}>Lista numerowana (ol)</div>
              <ol>
                <li>Zainstaluj mod z Workshopu Steam</li>
                <li>Włącz mod w launcherze CK3</li>
                <li>Rozpocznij nową grę (bookmark 867)</li>
              </ol>
            </article>
          </DemoCard>

          {/* ── Tabela ── */}
          <DemoCard id="md-tabela" title="Tabela" desc="Klasa .wf-table z .wf-table-wrap (overflow-x). Pierwsza kolumna złota.">
            <article className="wf-article" style={{ padding: 0 }}>
              <div className="wf-table-wrap">
                <table className="wf-table">
                  <thead>
                    <tr>
                      <th>Kultura</th>
                      <th>Dziedzictwo</th>
                      <th>Etos</th>
                      <th>Tradycje</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Polanie lechiccy</td>
                      <td>zachodniosłowiańskie</td>
                      <td>Communal</td>
                      <td>City Keepers, Agrarian</td>
                    </tr>
                    <tr>
                      <td>Krywicze</td>
                      <td>wschodniosłowiańskie</td>
                      <td>Diplomatic</td>
                      <td>Riverine, Parochial</td>
                    </tr>
                    <tr>
                      <td>Obodryci</td>
                      <td>zachodniosłowiańskie</td>
                      <td>Bellicose</td>
                      <td>Stand and Fight, Warrior Culture</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="kb-label" style={{ marginTop: 20 }}>Tagi w komórkach</div>
              <div className="wf-table-wrap">
                <table className="wf-table">
                  <thead>
                    <tr>
                      <th>Cecha</th>
                      <th>Wpływ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>City Keepers</td>
                      <td><span className="tag-pos">pozytywna</span> — +10% dev growth</td>
                    </tr>
                    <tr>
                      <td>Isolationist</td>
                      <td><span className="tag-neu">neutralna</span> — ogranicza konwersję</td>
                    </tr>
                    <tr>
                      <td>Human Sacrifice</td>
                      <td><span className="tag-neg">negatywna</span> — -15 opinion</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </DemoCard>

          {/* ── Cytat ── */}
          <DemoCard id="md-cytat" title="Cytat (blockquote)" desc="Klasa .wf-quote — cytat z cite w font display. Element &lt;blockquote&gt; z markdown.">
            <article className="wf-article" style={{ padding: 0 }}>
              <blockquote className="wf-quote">
                <p>
                  Nie ten rządzi, kto mieczem włada, lecz ten, kto ogień
                  w sercach poddanych niesie.
                </p>
                <cite>— Kronika Galla Anonima (parafraza)</cite>
              </blockquote>
            </article>
          </DemoCard>

          {/* ── Linki ── */}
          <DemoCard id="md-linki" title="Linki" desc="Klasy .wf-link, .is-external, .is-stub, .wf-link--missing — warianty linków w treści.">
            <article className="wf-article" style={{ padding: 0 }}>
              <p>
                Sprawdź artykuł o{" "}
                <a href="/wiki/kultury" className="wf-link">kulturach słowiańskich</a>{" "}
                lub otwórz{" "}
                <a href="https://ck3.paradoxwikis.com" target="_blank" rel="noopener noreferrer" className="wf-link is-external">
                  oficjalną wiki CK3
                </a>.
              </p>
              <div className="kb-label" style={{ marginTop: 16 }}>Warianty linków</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 16 }}>
                <span><a href="#" className="wf-link">WikiLink (wewnętrzny)</a> — kropkowane podkreślenie, hover popover</span>
                <span><a href="#" className="wf-link is-external">Link zewnętrzny ↗</a> — strzałka, target=_blank</span>
                <span><a href="#" className="wf-link is-stub">Stub (brak artykułu)</a> — dashed, cursor: help</span>
                <span><a href="#" className="wf-link wf-link--missing">Missing</a> — wyblakły, bez dekoracji</span>
              </div>
            </article>
          </DemoCard>

          {/* ── Separator ── */}
          <DemoCard id="md-hr" title="Separator (hr)" desc="Złota linia gradientowa między sekcjami treści.">
            <article className="wf-article" style={{ padding: 0 }}>
              <p>Tekst przed separatorem.</p>
              <hr />
              <p>Tekst po separatorze.</p>
            </article>
          </DemoCard>

          {/* ═══════════════════════════════════════════════════════
             VI. ZASOBY — ikony, branding, pliki graficzne
             ═══════════════════════════════════════════════════════ */}
          <SectionDivider id="zasoby" num="VI" title="Zasoby" />

          {/* ── Ikony bogów ── */}
          <DemoCard id="ikony-bogow" title="Ikony bogów" desc="SVG 64×64, stroke-based (stroke=&quot;currentColor&quot;). Renderowane jako <img> z filter: brightness(0) invert(1). Pliki: src/assets/img/god-*.svg.">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 16 }}>
              {[
                { src: kolovratSvg, name: "Perun", desc: "Kołowrót (gromovnik)", file: "kolovrat.svg" },
                { src: godDazbogSvg, name: "Dadźbóg", desc: "Dysk słoneczny + 8 promieni", file: "god-dazbog.svg" },
                { src: godSwarozycSvg, name: "Swarożyc", desc: "Płomień w okręgu", file: "god-swarozyc.svg" },
                { src: godLadaSvg, name: "Łada", desc: "Gwiazda Łady (oktagram)", file: "god-lada.svg" },
                { src: godMarzannaSvg, name: "Marzanna", desc: "Lunula (sierp księżyca)", file: "god-marzanna.svg" },
                { src: godSwietowitSvg, name: "Świętowit", desc: "Krzyż w okręgu (4 twarze)", file: "god-swietowit.svg" },
                { src: godWelesSvg, name: "Weles", desc: "Pieczęć Welesa", file: "god-weles.svg" },
              ].map(god => (
                <div key={god.name} className="kb-icon-card">
                  <img
                    src={god.src}
                    alt={god.name}
                    style={{ width: 64, height: 64, filter: "brightness(0) invert(1)" }}
                  />
                  <div style={{ textAlign: "center" }}>
                    <div className="kb-icon-card__name">{god.name}</div>
                    <div className="kb-icon-card__desc">{god.desc}</div>
                    <code className="kb-icon-card__file">{god.file}</code>
                  </div>
                </div>
              ))}
            </div>

            <div className="kb-label" style={{ marginTop: 20 }}>Skalowanie (Dadźbóg)</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
              {[16, 24, 32, 48, 64, 96].map(size => (
                <div key={size} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <img src={godDazbogSvg} alt="" style={{ width: size, height: size, filter: "brightness(0) invert(1)" }} />
                  <code className="kb-icon-card__file">{size}px</code>
                </div>
              ))}
            </div>
          </DemoCard>

          {/* ── Branding ── */}
          <DemoCard id="branding" title="Branding" desc="Logotyp i wordmark. Pliki: src/assets/img/kolovrat.svg, wordmark.svg.">
            <div style={{ display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap" }}>
              <div className="kb-icon-card" style={{ flexDirection: "column" }}>
                <img src={kolovratSvg} alt="Kolovrat" style={{ width: 64, height: 64, filter: "brightness(0) invert(1)" }} />
                <code className="kb-icon-card__file">kolovrat.svg</code>
              </div>
              <div className="kb-icon-card" style={{ flexDirection: "column" }}>
                <img src={wordmarkSvg} alt="Slavic Enlarged" style={{ height: 32, filter: "brightness(0) invert(1)" }} />
                <code className="kb-icon-card__file">wordmark.svg</code>
              </div>
            </div>
          </DemoCard>

          {/* ── Mapy kultur ── */}
          <DemoCard
            id="mapy-kultur"
            title="Mapy kultur"
            desc={`${CULTURE_MAPS.length} map generowanych z heightmapy CK3. Styl wiki: globalna normalizacja, rampa zieleń→banner-fill→pomarańcz. Pliki: static/maps/culture_*.png.`}
          >
            <div className="kb-carousel">
              <div className="kb-carousel__track">
                {CULTURE_MAPS.map((key) => (
                  <figure key={key} className="kb-carousel__slide">
                    <img
                      src={`/maps/culture_${key}.png`}
                      alt={`Mapa prowincji: ${humanizeCulture(key)}`}
                      loading="lazy"
                    />
                    <figcaption>{humanizeCulture(key)}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="kb-label" style={{ marginTop: 16 }}>
              Scroll-snap carousel — przewiń w poziomie. {CULTURE_MAPS.length} kultur × 2 warianty (hero 16:9 + OG 40:21).
            </div>
          </DemoCard>

          </div>
        </div>{/* /kb-layout */}

        {/* ── Footer ── */}
        <footer className="kb-footer">
          <img src={kolovratSvg} alt="" style={{ width: 20, opacity: 0.25 }} />
          <span>Dev-only — nie buduje się na produkcji</span>
        </footer>

      </main>
    </WikiLinkProvider>
  );
};

export default KomponentyPage;

export const Head: HeadFC = () => (
  <>
    <title>Design System — Slavic Enlarged Wiki (dev)</title>
    <html lang="pl" />
  </>
);
