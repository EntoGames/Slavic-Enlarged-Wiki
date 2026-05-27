import * as React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "gatsby";
import kolovratSvg from "../../assets/img/kolovrat.svg";
import wordmarkSvg from "../../assets/img/wordmark.svg";
import { useWikiIndex, type WikiEntry } from "../../data/use-wiki-index";
import { SECTIONS } from "../../data/wiki-sections";

/* =============================================================
   MegaMenu — top-bar wiki z mega-panelami.
   ─────────────────────────────────────────────────────────────
   Wariant CODEX (wybrany na podstawie demo). Pełny układ:

     [Logo+Wordmark]    [Wprowadzenie] [Kultury] [Wiara] …    [Szukaj  ⌘K]
                       └──────────────────────────────┘
                       Panel: intro (count + blurb) | columns | featured

   Dane zasysamy z `useWikiIndex()` — to znaczy:
   - liczba artykułów w sekcji ⇐ z indeksu auto-generowanego z plików
   - kolumny ⇐ grupowane po SUB-folderach (drugi segment urlPath)
   - "featured" ⇐ landing-page kategorii (README.md w podfolderze)
                  albo pierwszy wpis sekcji

   Otwieranie: HOVER z grace-period 180ms (zarówno wejście na trigger,
   jak i przejście trigger → panel). Escape zamyka.
   ============================================================= */

interface MegaMenuProps {
  /** URL aktualnego artykułu — żeby podświetlić sekcję w nav. */
  activeUrlPath: string;
}

interface PanelData {
  sectionId: string;
  label: string;
  blurb: string;
  count: number;
  columns: { key: string; title: string; sub?: string; items: WikiEntry[] }[];
  featured: WikiEntry | null;
}

/* ============================================================
   Komponent
   ============================================================ */

export function MegaMenu({ activeUrlPath }: MegaMenuProps) {
  const index = useWikiIndex();
  const [openId, setOpenId] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  // Zamknij na Escape
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenId(null);
        setDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  // Blokada scrolla body kiedy drawer otwarty
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (drawerOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [drawerOpen]);

  // Zamknij drawer przy zmianie szerokości na desktop
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setDrawerOpen(false);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Wylicz aktywną sekcję
  const activeSection = useMemo(() => {
    const m = activeUrlPath.match(/^\/wiki\/([^/]+)/);
    return m ? m[1] : null;
  }, [activeUrlPath]);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenId(null), 180);
  };

  // Aktualny panel
  const panel = useMemo<PanelData | null>(() => {
    if (!openId) return null;
    const section = index.bySection.find((s) => s.id === openId);
    if (!section) return null;
    return buildPanelData(section);
  }, [openId, index.bySection]);

  return (
    <header className="mm-top" onMouseLeave={scheduleClose}>
      <Link to="/" className="mm-top__brand" aria-label="Slavic Enlarged Wiki">
        <img className="kolovrat" src={kolovratSvg} alt="" />
        <img className="wordmark" src={wordmarkSvg} alt="Slavic Enlarged" />
      </Link>

      <nav className="mm-top__nav" aria-label="Sekcje wiki">
        {index.bySection.map((s) => (
          <button
            key={s.id}
            className={
              "mm-top__nav-item" +
              (openId === s.id ? " is-open" : "") +
              (activeSection === s.id ? " is-active" : "")
            }
            onMouseEnter={() => {
              cancelClose();
              setOpenId(s.id);
            }}
            onFocus={() => {
              cancelClose();
              setOpenId(s.id);
            }}
            aria-expanded={openId === s.id}
            aria-controls={`mm-panel-${s.id}`}
          >
            <span>{s.label}</span>
            <svg className="mm-caret" viewBox="0 0 10 6" aria-hidden="true">
              <path d="M0,0 L5,6 L10,0" fill="currentColor" />
            </svg>
          </button>
        ))}
      </nav>

      <label className="mm-top__search" aria-label="Szukaj w wiki">
        <svg className="mm-search-ico" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11,11 L15,15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input type="text" placeholder="szukaj w wiki…" />
        <span className="mm-kbd">⌘ K</span>
      </label>

      <button
        type="button"
        className="mm-burger"
        aria-label="Otwórz menu nawigacji"
        aria-expanded={drawerOpen}
        aria-controls="mm-drawer"
        onClick={() => setDrawerOpen((v) => !v)}
      >
        <span className={"mm-burger__bars" + (drawerOpen ? " is-open" : "")}>
          <span /><span /><span />
        </span>
      </button>

      {panel && (
        <CodexPanel
          panel={panel}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        />
      )}

      <MobileDrawer
        open={drawerOpen}
        sections={index.bySection}
        activeSection={activeSection}
        onClose={closeDrawer}
      />
    </header>
  );
}

/* ============================================================
   Panel content builder
   ─────────────────────────────────────────────────────────────
   Grupuje wpisy sekcji po PIERWSZYM podfolderze (drugi segment URL).
   Wpisy bezpośrednio w sekcji (bez podfolderu) trafiają do kolumny
   "Główne". README-landing podfolderów stają się "featured" jeśli są
   dostępne, w przeciwnym razie pierwszy wpis sekcji.
   ============================================================ */

function buildPanelData(section: {
  id: string;
  label: string;
  entries: WikiEntry[];
}): PanelData {
  const groups = new Map<string, WikiEntry[]>();
  for (const e of section.entries) {
    // segments[0] = sekcja, więc grupujemy po segments[1] albo "_root"
    const groupKey = e.segments[1] && !e.isCategoryIndex ? e.segments[1] : "_root";
    if (!groups.has(groupKey)) groups.set(groupKey, []);
    groups.get(groupKey)!.push(e);
  }

  // Posortuj wpisy w grupach: katalog-index pierwszy, potem alfabetycznie
  const columns: PanelData["columns"] = [];
  // Wpisy w korzeniu sekcji
  if (groups.has("_root")) {
    columns.push({
      key: "_root",
      title: "Główne",
      items: groups.get("_root")!.filter((e) => !e.isCategoryIndex),
    });
    groups.delete("_root");
  }
  // Podfoldery
  for (const [key, items] of groups) {
    columns.push({
      key,
      title: humanize(key),
      sub: `${items.filter((i) => !i.isCategoryIndex).length} ${pluralizeArtykul(items.length)}`,
      items: items.filter((e) => !e.isCategoryIndex),
    });
  }

  // Featured: pierwszy podfolder-index, albo pierwszy artykuł w sekcji
  const featured =
    section.entries.find((e) => e.isCategoryIndex && e.segments.length === 2) ||
    section.entries.find((e) => !e.isCategoryIndex) ||
    null;

  return {
    sectionId: section.id,
    label: section.label,
    blurb: SECTIONS[section.id]?.blurb ?? "",
    count: section.entries.filter((e) => !e.isCategoryIndex).length,
    columns,
    featured,
  };
}

function humanize(slug: string): string {
  return slug
    .split("-")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

function pluralizeArtykul(n: number): string {
  if (n === 1) return "artykuł";
  const lastTwo = n % 100;
  const last = n % 10;
  if (lastTwo >= 12 && lastTwo <= 14) return "artykułów";
  if (last >= 2 && last <= 4) return "artykuły";
  return "artykułów";
}

/* ============================================================
   Codex panel (sub-component)
   ============================================================ */

function CodexPanel({
  panel, onMouseEnter, onMouseLeave,
}: {
  panel: PanelData;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className="mm-panel mm-panel--codex"
      id={`mm-panel-${panel.sectionId}`}
      role="region"
      aria-label={panel.label}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mm-panel__inner">
        <div className="mm-panel__intro">
          <div className="mm-panel__count">
            <span className="mm-panel__count-num">
              {String(panel.count).padStart(2, "0")}
            </span>
            <span className="mm-panel__count-lbl">
              {pluralizeArtykul(panel.count)}
            </span>
          </div>
          <div className="mm-panel__intro-text">
            <h3>{panel.label}</h3>
            {panel.blurb && <p>{panel.blurb}</p>}
            <Link className="mm-panel__seeall" to={`/wiki/${panel.sectionId}`}>
              Zobacz całą sekcję →
            </Link>
          </div>
        </div>

        <div
          className="mm-panel__grid"
          style={{ ["--col-count" as string]: panel.columns.length }}
        >
          {panel.columns.map((col) => (
            <div className="mm-col" key={col.key}>
              <header className="mm-col__head">
                <h4>{col.title}</h4>
                {col.sub && <span className="mm-col__sub">{col.sub}</span>}
              </header>
              <ul className="mm-col__list">
                {col.items.slice(0, 12).map((it) => (
                  <li key={it.urlPath}>
                    <Link to={it.urlPath}>{it.title}</Link>
                  </li>
                ))}
                {col.items.length > 12 && (
                  <li className="mm-col__more">
                    <Link to={`/wiki/${panel.sectionId}/${col.key !== "_root" ? col.key : ""}`}>
                      + {col.items.length - 12} więcej →
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}

          {panel.featured && (
            <aside className="mm-feat">
              <div className="mm-feat__art">
                <img src={kolovratSvg} alt="" />
              </div>
              <div className="mm-feat__body">
                <div className="mm-feat__kicker">{panel.featured.kicker}</div>
                <h4 className="mm-feat__title">{panel.featured.title}</h4>
                {panel.featured.subtitle && (
                  <div className="mm-feat__sub">{panel.featured.subtitle}</div>
                )}
                {panel.featured.blurb && (
                  <p className="mm-feat__blurb">{panel.featured.blurb}</p>
                )}
                <Link className="mm-feat__cta" to={panel.featured.urlPath}>
                  Czytaj →
                </Link>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MobileDrawer — pełnoekranowa szuflada dla < 1024px.
   ─────────────────────────────────────────────────────────────
   Brak mega-panelu — sekcje są płaskimi linkami z licznikiem i
   blurbem. Stosunek "1 sekcja = 1 wiersz" + akordeon nie ma
   sensu w tym formacie (sekcje już mają landing-page z całą listą).
   ============================================================ */

function MobileDrawer({
  open, sections, activeSection, onClose,
}: {
  open: boolean;
  sections: { id: string; label: string; entries: WikiEntry[] }[];
  activeSection: string | null;
  onClose: () => void;
}) {
  return (
    <>
      <div
        className={"mm-scrim" + (open ? " is-open" : "")}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        id="mm-drawer"
        className={"mm-drawer" + (open ? " is-open" : "")}
        role="dialog"
        aria-modal="true"
        aria-label="Menu nawigacji"
        aria-hidden={!open}
      >
        <header className="mm-drawer__head">
          <Link to="/" className="mm-drawer__brand" onClick={onClose}>
            <img className="kolovrat" src={kolovratSvg} alt="" />
            <img className="wordmark" src={wordmarkSvg} alt="Slavic Enlarged" />
          </Link>
          <button
            type="button"
            className="mm-drawer__close"
            onClick={onClose}
            aria-label="Zamknij menu"
          >
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <path d="M2,2 L14,14 M14,2 L2,14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        <label className="mm-drawer__search" aria-label="Szukaj w wiki">
          <svg className="mm-search-ico" viewBox="0 0 16 16" aria-hidden="true">
            <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11,11 L15,15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input type="text" placeholder="szukaj w wiki…" />
        </label>

        <nav className="mm-drawer__nav" aria-label="Sekcje wiki">
          <ol className="mm-drawer__list">
            {sections.map((s) => {
              const count = s.entries.filter((e) => !e.isCategoryIndex).length;
              const order = SECTIONS[s.id]?.order ?? 0;
              const blurb = SECTIONS[s.id]?.blurb ?? "";
              return (
                <li key={s.id}>
                  <Link
                    to={`/wiki/${s.id}`}
                    className={
                      "mm-drawer__item" +
                      (activeSection === s.id ? " is-active" : "")
                    }
                    onClick={onClose}
                  >
                    <span className="mm-drawer__num">
                      {String(order).padStart(2, "0")}
                    </span>
                    <span className="mm-drawer__meta">
                      <span className="mm-drawer__label">{s.label}</span>
                      {blurb && <span className="mm-drawer__blurb">{blurb}</span>}
                    </span>
                    <span className="mm-drawer__count">
                      {count} {pluralizeArtykul(count)} ›
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>

        <footer className="mm-drawer__foot">
          „Slavic Enlarged" — fan-mod do Crusader Kings III
        </footer>
      </aside>
    </>
  );
}
