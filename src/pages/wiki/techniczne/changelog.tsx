import * as React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, type HeadFC } from "gatsby";

import { MegaMenu } from "../../../templates/components/MegaMenu";
import {
  VERSIONS,
  PREVIEWS,
  CATEGORY_META,
  PHASE_TAG_LABEL,
  countByCategory,
  pluralizeWpisy,
  type ChangeCategory,
  type ChangelogVersion,
  type ChangePhase,
} from "../../../data/changelog-data";

import kolovratSvg from "../../../assets/img/kolovrat.svg";
import wordmarkSvg from "../../../assets/img/wordmark.svg";
import iconTraditionsSvg from "../../../assets/img/icon-traditions.svg";

import "../../../templates/wiki-article.module.css";
import "../../../templates/mega-menu.module.css";
import "../../../templates/kroniki.module.css";

/* =============================================================
   /wiki/techniczne/changelog/ — Kronika Zmian.
   ─────────────────────────────────────────────────────────────
   Strona zbudowana z pliku danych `src/data/changelog-data.ts`.
   Reużywa MegaMenu, tokenów i konwencji wiki (.wf-hero, .wf-link).
   Specyficzne style w `src/templates/kroniki.module.css`.
   ============================================================= */

const ALL_CATEGORIES: ChangeCategory[] = [
  "added",
  "changed",
  "fixed",
  "removed",
  "wip",
];

const URL_PATH = "/wiki/techniczne/changelog";

const ChangelogPage: React.FC = () => {
  /* ----- Filtry kategorii ----- */
  const [active, setActive] = useState<Record<ChangeCategory, boolean>>({
    added: true,
    changed: true,
    fixed: true,
    removed: true,
    wip: true,
  });

  const toggleCategory = (cat: ChangeCategory) =>
    setActive((s) => ({ ...s, [cat]: !s[cat] }));

  /* ----- Scroll-spy: aktywny wpis w TOC ----- */
  const [activeVersion, setActiveVersion] = useState<string>(
    VERSIONS[1]?.version ?? VERSIONS[0]?.version ?? ""
  );

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const entries = document.querySelectorAll<HTMLElement>(".cl-entry");
    if (!entries.length) return;
    const obs = new IntersectionObserver(
      (records) => {
        const visible = records
          .filter((r) => r.isIntersecting)
          .map((r) => ({
            id: r.target.id,
            top: r.boundingClientRect.top,
          }))
          .sort((a, b) => a.top - b.top);
        if (visible[0]) {
          const v = visible[0].id.replace(/^v-/, "");
          setActiveVersion(v);
        }
      },
      { rootMargin: "-120px 0px -60% 0px" }
    );
    entries.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, []);

  /* ----- Smooth scroll z TOC ----- */
  const handleTocClick = (version: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(`v-${version}`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveVersion(version);
  };

  /* ----- Liczniki kategorii ----- */
  const counts = useMemo(() => countByCategory(VERSIONS), []);
  const totalNonWip = counts.added + counts.changed + counts.fixed + counts.removed;

  /* ----- Empty state? ----- */
  const anyActive = ALL_CATEGORIES.some((c) => active[c]);

  /* ----- Popover (hover) ----- */
  const popoverRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLElement>(null);
  const popoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const article = articleRef.current;
    const pop = popoverRef.current;
    if (!article || !pop) return;

    const cancelClose = () => {
      if (popoverTimer.current) {
        clearTimeout(popoverTimer.current);
        popoverTimer.current = null;
      }
    };
    const scheduleClose = () => {
      cancelClose();
      popoverTimer.current = setTimeout(() => {
        pop.classList.remove("is-open");
      }, 220);
    };

    const show = (link: HTMLElement) => {
      const key = link.dataset.preview;
      if (!key) return;
      const data = PREVIEWS[key];
      if (!data) return;
      cancelClose();

      const kicker = pop.querySelector(".cl-preview__kicker") as HTMLElement;
      const title = pop.querySelector(".cl-preview__title") as HTMLElement;
      const sub = pop.querySelector(".cl-preview__sub") as HTMLElement;
      const blurb = pop.querySelector(".cl-preview__blurb") as HTMLElement;
      const kind = pop.querySelector(".cl-preview__footer .kind") as HTMLElement;
      if (kicker) kicker.textContent = data.kicker;
      if (title) title.textContent = data.title;
      if (sub) {
        sub.textContent = data.sub ?? "";
        sub.style.display = data.sub ? "block" : "none";
      }
      if (blurb) blurb.textContent = data.blurb;
      if (kind) kind.textContent = data.external ? "Zewnętrzne" : "Artykuł wiki";

      const r = link.getBoundingClientRect();
      const W = 320;
      let left = r.left;
      if (left + W + 12 > window.innerWidth) left = window.innerWidth - W - 12;
      if (left < 12) left = 12;
      pop.style.left = left + "px";
      pop.style.top = r.bottom + 8 + "px";
      pop.classList.add("is-open");
    };

    const onEnterLink = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t || !t.matches?.("a.wf-link[data-preview]")) return;
      show(t);
    };
    const onLeaveLink = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t || !t.matches?.("a.wf-link[data-preview]")) return;
      scheduleClose();
    };
    const onPopEnter = () => cancelClose();
    const onPopLeave = () => scheduleClose();

    article.addEventListener("mouseover", onEnterLink, true);
    article.addEventListener("mouseout", onLeaveLink, true);
    article.addEventListener("focusin", onEnterLink);
    article.addEventListener("focusout", onLeaveLink);
    pop.addEventListener("mouseenter", onPopEnter);
    pop.addEventListener("mouseleave", onPopLeave);

    return () => {
      article.removeEventListener("mouseover", onEnterLink, true);
      article.removeEventListener("mouseout", onLeaveLink, true);
      article.removeEventListener("focusin", onEnterLink);
      article.removeEventListener("focusout", onLeaveLink);
      pop.removeEventListener("mouseenter", onPopEnter);
      pop.removeEventListener("mouseleave", onPopLeave);
      cancelClose();
    };
  }, []);

  /* ----- Hero stats — najnowsza wydana wersja ----- */
  const latestReleased = VERSIONS.find((v) => v.phase !== "brainstorming");
  const heroLatest = latestReleased?.version ?? VERSIONS[0]?.version ?? "";
  const heroDate = latestReleased?.tocDateLabel ?? "—";
  const heroVersionCount = VERSIONS.filter((v) => v.phase !== "brainstorming").length;

  return (
    <div className="wf">
      <MegaMenu activeUrlPath={URL_PATH} />

      <main className="wf">
        {/* HERO */}
        <section className="wf-hero" data-screen-label="Kronika Zmian — Hero">
          <div className="wf-hero__inner">
            <div className="wf-hero__crumbs">
              <Link to="/">Wiki</Link>
              <span className="sep">›</span>
              <Link to="/wiki/techniczne">Techniczne</Link>
              <span className="sep">›</span>
              <span>Kronika Zmian</span>
            </div>
            <div className="wf-hero__kicker">
              <span className="dot"></span>
              Kronika · Roczniki Moda
            </div>
            <h1 className="wf-hero__title">Kronika Zmian</h1>
            <div className="wf-hero__subtitle">Annales Slavorum Auctorum</div>

            <div className="cl-hero__strap">
              <div className="cl-hero__col">
                <span className="cl-hero__col-k">Najnowsza wersja</span>
                <span className="cl-hero__col-v">{heroLatest}-alpha</span>
              </div>
              <span className="cl-hero__divider" />
              <div className="cl-hero__col">
                <span className="cl-hero__col-k">Wydano</span>
                <span className="cl-hero__col-v cl-hero__col-v--sm">{heroDate}</span>
              </div>
              <span className="cl-hero__divider" />
              <div className="cl-hero__col">
                <span className="cl-hero__col-k">Wersji w sumie</span>
                <span className="cl-hero__col-v">{heroVersionCount}</span>
              </div>
              <span className="cl-hero__divider" />
              <div className="cl-hero__col">
                <span className="cl-hero__col-k">Status moda</span>
                <span className="cl-hero__col-v cl-hero__col-v--tag">
                  WORK IN PROGRESS
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* BODY */}
        <div className="cl-body">
          {/* TOC */}
          <aside className="cl-toc" aria-label="Wersje">
            <div className="cl-toc__head">
              <img src={iconTraditionsSvg} alt="" />
              <span>Spis Wersji</span>
            </div>
            <ol className="cl-toc__list">
              {VERSIONS.map((v) => (
                <li key={v.version}>
                  <button
                    type="button"
                    onClick={handleTocClick(v.version)}
                    className={
                      "cl-toc__item" +
                      (v.phase === "brainstorming" ? " is-wip" : "") +
                      (activeVersion === v.version ? " is-active" : "")
                    }
                  >
                    <span className="cl-toc__v">{v.version}</span>
                    <span className="cl-toc__meta">
                      <span className="cl-toc__name">{v.name}</span>
                      <span className="cl-toc__date">{v.tocDateLabel}</span>
                    </span>
                    <span className={tocTagClass(v.phase)}>
                      {v.phase === "brainstorming"
                        ? "WIP"
                        : PHASE_TAG_LABEL[v.phase]}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <dl className="cl-toc__meta-block">
              <dt>Format</dt>
              <dd>keep-a-changelog ⊕ rocznik</dd>
              <dt>Język wpisów</dt>
              <dd>polski (kanoniczny)</dd>
              <dt>Autor kroniki</dt>
              <dd>Pseuobalbinus</dd>
              <dt>Pierwszy wpis</dt>
              <dd>{VERSIONS[VERSIONS.length - 1]?.tocDateLabel}</dd>
            </dl>
          </aside>

          {/* ARTICLE */}
          <article className="cl-article" ref={articleRef}>
            <p className="cl-lede">
              Spisana ręką jednego autora, prowadzona od pierwszego dnia, w
              którym imię Peruna padło w pliku <em>scripted_triggers</em>.
              Każdy wpis to jedna wersja moda — co dodano, co zmieniono, co
              naprawiono, a co dopiero rośnie pod dębem.
            </p>

            {/* FILTRY */}
            <div className="cl-filters">
              <span className="cl-filters__label">Filtruj wpisy:</span>
              <div className="cl-filters__chips">
                {ALL_CATEGORIES.map((cat) => {
                  const meta = CATEGORY_META[cat];
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => toggleCategory(cat)}
                      className={
                        `cl-chip cl-chip--${meta.tone}` +
                        (active[cat] ? "" : " is-off")
                      }
                    >
                      <span className="cl-chip__glyph">{meta.glyph}</span>
                      <span>{meta.label}</span>
                      <span className="cl-chip__count">{counts[cat]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {!anyActive && (
              <div className="cl-empty">
                Wszystkie filtry wyłączone. Włącz przynajmniej jedną kategorię,
                żeby zobaczyć wpisy kroniki.
              </div>
            )}

            {/* TIMELINE */}
            <div className="cl-timeline">
              {VERSIONS.map((v) => (
                <VersionEntry key={v.version} version={v} active={active} />
              ))}
            </div>
          </article>

          {/* MARGINALIA */}
          <aside className="cl-margin" aria-label="Marginalia">
            <div className="cl-margin__inner">
              <div className="cl-note">
                <span className="cl-note__kicker">Rocznikarz mówi</span>
                Mod jest <strong>dziełem jednego autora</strong>. Każdy wpis tej
                kroniki spisany został tą samą ręką, w tej samej pracowni, w
                tych samych krótkich godzinach po pracy. Stąd rytm wydań nierówny.
              </div>

              <div className="cl-figure cl-stats">
                <div className="cl-stats__head">Bilans wszystkich wpisów</div>
                <ul className="cl-stats__list">
                  <li className="cl-stat cl-stat--pos">
                    <span className="cl-stat__g">+</span>
                    <span className="cl-stat__l">Dodano</span>
                    <span className="cl-stat__n">{counts.added}</span>
                  </li>
                  <li className="cl-stat cl-stat--gold">
                    <span className="cl-stat__g">~</span>
                    <span className="cl-stat__l">Zmieniono</span>
                    <span className="cl-stat__n">{counts.changed}</span>
                  </li>
                  <li className="cl-stat cl-stat--info">
                    <span className="cl-stat__g">✓</span>
                    <span className="cl-stat__l">Naprawiono</span>
                    <span className="cl-stat__n">{counts.fixed}</span>
                  </li>
                  <li className="cl-stat cl-stat--neg">
                    <span className="cl-stat__g">−</span>
                    <span className="cl-stat__l">Wycofano</span>
                    <span className="cl-stat__n">{counts.removed}</span>
                  </li>
                  <li className="cl-stat cl-stat--total">
                    <span className="cl-stat__l">Razem</span>
                    <span className="cl-stat__n">{totalNonWip}</span>
                  </li>
                </ul>
              </div>

              <div className="cl-note">
                <span className="cl-note__kicker">Versioning</span>
                Mod używa nieformalnego <strong>major.minor</strong> + tagu
                fazowego (<em>alpha</em>, <em>beta</em>, <em>rc</em>). Po
                wydaniu wiary południowej w 0.5 planowane przejście na{" "}
                <strong>0.x-beta</strong>.
              </div>

              <div className="cl-figure">
                <div className="cl-figure__glyph">
                  <img src={kolovratSvg} alt="" />
                </div>
                <div className="cl-figure__cap">
                  <b>Znak Peruna</b>
                  Ośmiopromieniste słońce na nagłówku każdej wersji oznacza,
                  że wpis był sprawdzony w grze na patchu z ostatnich 8 tygodni.
                </div>
              </div>

              <div className="cl-note">
                <span className="cl-note__kicker">Zgłaszanie błędów</span>
                Crashe i nieoczywiste zachowania należy zgłaszać w wątku
                „Wiec" na Discordzie moda. Każdy zgłoszony błąd trafia do
                notatnika jako kandydat do kolejnego <em>Naprawiono</em>.
              </div>

              <div className="cl-note">
                <span className="cl-note__kicker">Pełna historia</span>
                Ta strona pokazuje kronikę od wersji <strong>0.1</strong>.
                Wcześniejsze, prywatne buildy (0.0.x) były próbą sił z modlingiem
                CK3 i nie są publikowane.
              </div>
            </div>
          </aside>
        </div>

        <footer className="wf-footer">
          <div className="wf-footer__brand">
            <img className="kolovrat" src={kolovratSvg} alt="" />
            <img className="wordmark" src={wordmarkSvg} alt="Slavic Enlarged" />
          </div>
          <p>
            „Slavic Enlarged" is a fan-created mod designed to expand the
            gameplay experience in „Crusader Kings III". Kronika zmian
            prowadzona ręcznie przez autora; wszystkie nazwy własne i prawa do
            gry-bazy należą do Paradox Interactive.
          </p>
        </footer>
      </main>

      {/* Popover renderowany raz, sterowany imperatywnie z useEffect */}
      <div className="cl-preview" ref={popoverRef} role="tooltip">
        <div className="cl-preview__kicker" />
        <h4 className="cl-preview__title" />
        <div className="cl-preview__sub" />
        <p className="cl-preview__blurb" />
        <div className="cl-preview__footer">
          <span className="kind">Artykuł wiki</span>
          <span className="go">Czytaj →</span>
        </div>
      </div>
    </div>
  );
};

export default ChangelogPage;

export const Head: HeadFC = () => (
  <>
    <title>Kronika Zmian — Slavic Enlarged Wiki</title>
    <meta
      name="description"
      content="Annales Slavorum Auctorum — pełna kronika zmian moda Slavic Enlarged dla Crusader Kings III."
    />
    <html lang="pl" />
  </>
);

/* =============================================================
   Pojedynczy wpis wersji (timeline entry)
   ============================================================= */

interface VersionEntryProps {
  version: ChangelogVersion;
  active: Record<ChangeCategory, boolean>;
}

function VersionEntry({ version, active }: VersionEntryProps) {
  const visibleGroups = version.groups.filter((g) => active[g.category]);
  const isHidden = visibleGroups.length === 0;
  const isWip = version.phase === "brainstorming";

  return (
    <section
      id={`v-${version.version}`}
      className={
        "cl-entry" + (isWip ? " cl-entry--wip" : "") + (isHidden ? " is-hidden" : "")
      }
    >
      <header className="cl-entry__head">
        <div className="cl-entry__rail">
          <div className="cl-entry__v">{version.version}</div>
          <div className={railTagClass(version.phase)}>
            {PHASE_TAG_LABEL[version.phase]}
          </div>
          <div className="cl-entry__rune">
            <img src={kolovratSvg} alt="" />
          </div>
        </div>
        <div className="cl-entry__title">
          <div className="cl-entry__annal">{version.annal}</div>
          <h2 className="cl-entry__name">{version.name}</h2>
          <div className="cl-entry__date">{version.releaseDateLabel}</div>
          <p className="cl-entry__summary">{version.summary}</p>
        </div>
      </header>
      <div className="cl-entry__body">
        {version.groups.map((g) => {
          const meta = CATEGORY_META[g.category];
          const hidden = !active[g.category];
          return (
            <div
              key={g.category}
              className={
                `cl-group cl-group--${meta.tone}` + (hidden ? " is-hidden" : "")
              }
            >
              <div className="cl-group__head">
                <span className="cl-group__glyph">{meta.glyph}</span>
                <span className="cl-group__label">{meta.label}</span>
                <span className="cl-group__count">
                  {g.items.length} {pluralizeWpisy(g.items.length)}
                </span>
              </div>
              <ul className="cl-group__list">
                {g.items.map((item, i) => (
                  <li key={i} className={`cl-change cl-change--${meta.tone}`}>
                    <span className="cl-change__glyph">{meta.glyph}</span>
                    <span
                      className="cl-change__text"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ----- Pomocnicze klasy ----- */

function tocTagClass(phase: ChangePhase): string {
  const base = "cl-toc__tag";
  if (phase === "brainstorming") return `${base} ${base}--brainstorming`;
  return `${base} ${base}--${phase}`;
}

function railTagClass(phase: ChangePhase): string {
  const base = "cl-entry__tag";
  if (phase === "brainstorming") return `${base} ${base}--brainstorming`;
  return `${base} ${base}--${phase}`;
}
