import * as React from "react";
import { useState, useCallback, useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from "react";
import "../scenario-map.module.css";

/* =============================================================
   ScenarioMap — interaktywna mapa z postaciami startowymi.
   Markery pulsują, klik otwiera kartę postaci z boku,
   linia SVG łączy pozycję startową z miejscem świętym.
   ============================================================= */

interface CharacterData {
  id: string;
  name: string;
  title: string;
  culture: string;
  state: string;
  faith: string;
  holySite: string;
  playStyle: string;
  description: string;
  pos: [number, number];
  holySitePos?: [number, number];
  accent: string;
}

const CHARACTERS: CharacterData[] = [
  {
    id: "siemowit",
    name: "Siemowit",
    title: "wódz Polanii",
    culture: "Polanie lechiccy",
    state: "Gniezno (Wielkopolska)",
    faith: "zachodniosłowiańska",
    holySite: "Płock (w zasięgu)",
    playStyle: "Budowa",
    description:
      "Legendarny protoplasta dynastii Piastów. Rządzisz niewielkim plemieniem, ale jesteś otoczony pokrewnymi kulturami — Goplanami, Mazowszanami, Wiślanami. Zjednocz ich pod swoim berłem, a staniesz się królem.",
    pos: [45.2, 28.6],
    holySitePos: [49.4, 28.6],
    accent: "#c5a048",
  },
  {
    id: "swietopelk",
    name: "Świętopełk",
    title: "książę Moraw",
    culture: "Nitrianie",
    state: "Wielkie Morawy",
    faith: "zachodniosłowiańska",
    holySite: "Praga (w zasięgu)",
    playStyle: "Imperium",
    description:
      "Władca największego słowiańskiego państwa tego okresu. Masz zasoby, armię i prestiż, ale wrogowie otaczają cię ze wszystkich stron. Pytanie nie brzmi, czy będziesz walczył — ale z kim najpierw.",
    pos: [46.2, 52.8],
    holySitePos: [38.8, 42.7],
    accent: "#e4ac42",
  },
  {
    id: "msciwoj",
    name: "Mściwoj",
    title: "wódz Obodryców",
    culture: "Obodryci (Połabianie)",
    state: "Federacja Obodrzycka",
    faith: "zachodniosłowiańska",
    holySite: "Retra (w zasięgu)",
    playStyle: "Przetrwanie",
    description:
      "Najbardziej dramatyczny start. Twoi ludzie żyją na styku ze światem germańskim, a historia mówi, że przegrali. Czy potrafisz zmienić bieg dziejów? Arkona, najświętsze miejsce zachodniej Słowiańszczyzny, jest w zasięgu — ale Sasi też o niej wiedzą.",
    pos: [33.0, 20.0],
    holySitePos: [35.6, 22.5],
    accent: "#a99458",
  },
  {
    id: "dyre",
    name: "Dyre",
    title: "wódz Kijowa",
    culture: "Polanie kijowscy",
    state: "Kijów",
    faith: "wschodniosłowiańska",
    holySite: "Kijów (w posiadaniu!)",
    playStyle: "Fuzja",
    description:
      "Historycznie Dyre to Normanin na słowiańskim tronie. Kontrolujesz Kijów — najświętsze miejsce wschodniej Słowiańszczyzny. Pytanie: czy przyjmiesz kulturę swoich poddanych, czy narzucisz im swoją?",
    pos: [71.0, 41.0],
    holySitePos: undefined,
    accent: "#7ec8c8",
  },
  {
    id: "borys",
    name: "Borys I",
    title: "car Bułgarii",
    culture: "bułgarska",
    state: "Bułgaria",
    faith: "prawosławie",
    holySite: "—",
    playStyle: "Konwersja",
    description:
      "Jedyny chrześcijański władca na ekranie startowym. Borys stoi przed historycznym wyborem — chrystianizacja Bułgarii to droga do prestiżu i sojuszy z Bizancjum, ale kosztem tradycji i ludowego buntu.",
    pos: [64.2, 78.6],
    holySitePos: undefined,
    accent: "#c89458",
  },
  {
    id: "mutimir",
    name: "Mutimir",
    title: "wielki żupan Serbii",
    culture: "serbska",
    state: "Raszka",
    faith: "południowosłowiańska",
    holySite: "Velbazhd (w zasięgu)",
    playStyle: "Balans",
    description:
      "Władca Serbów na pograniczu wielkich mocarstw. Każdy sojusz ma cenę, każda wojna — ryzyko. Twoja wiara południowosłowiańska jest pod presją zarówno katolickiego zachodu, jak i prawosławnego Bizancjum.",
    pos: [51.0, 80.1],
    holySitePos: [55.4, 84.1],
    accent: "#c86058",
  },
  {
    id: "domagoj",
    name: "Domagoj",
    title: "książę Chorwacji",
    culture: "chorwacka",
    state: "Chorwacja",
    faith: "południowosłowiańska",
    holySite: "Ston (w zasięgu)",
    playStyle: "Morska potęga",
    description:
      "Rządzisz Dalmacją — chorwackim wybrzeżem Adriatyku. Twoja kultura jest morska, twoi sąsiedzi to Wenecjanie i Frankowie, a twoja wiara jest zagrożona. Czy zbudujesz chorwacką potęgę morską, czy ugniesz się pod ciężarem krzyża?",
    pos: [42.8, 78.1],
    holySitePos: [45.4, 81.6],
    accent: "#58a0c8",
  },
];

export function ScenarioMap() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const active = CHARACTERS.find((c) => c.id === selected) ?? null;

  const handleSelect = useCallback((id: string) => {
    setSelected((prev) => (prev === id ? null : id));
  }, []);

  const handleClose = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!active || !modalRef.current) return;
    const modal = modalRef.current;
    const prev = document.activeElement as HTMLElement | null;
    const closeBtn = modal.querySelector<HTMLElement>(".sm__modal-close");
    closeBtn?.focus();

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    modal.addEventListener("keydown", trapFocus);
    return () => {
      modal.removeEventListener("keydown", trapFocus);
      prev?.focus();
    };
  }, [active]);

  return (
    <div className="sm" ref={mapRef}>
      <div className="sm__viewport">
        <div className="sm__map">
          <svg className="sm__lines" viewBox="0 0 100 100" preserveAspectRatio="none">
            {CHARACTERS.map(
              (c) =>
                c.holySitePos &&
                selected === c.id && (
                  <line
                    key={c.id}
                    className="sm__holy-line is-active"
                    x1={c.pos[0]}
                    y1={c.pos[1]}
                    x2={c.holySitePos[0]}
                    y2={c.holySitePos[1]}
                    stroke={c.accent}
                  />
                )
            )}
          </svg>

          {CHARACTERS.map(
            (c) =>
              c.holySitePos &&
              selected === c.id && (
                <div
                  key={`hs-${c.id}`}
                  className="sm__holy-marker is-active"
                  style={{
                    left: `${c.holySitePos[0]}%`,
                    top: `${c.holySitePos[1]}%`,
                    borderColor: c.accent,
                  }}
                  title={c.holySite}
                />
              )
          )}

          {CHARACTERS.map((c) => (
            <button
              key={c.id}
              className={
                "sm__marker" +
                (selected === c.id ? " is-selected" : "") +
                (hovered === c.id ? " is-hovered" : "")
              }
              style={{
                left: `${c.pos[0]}%`,
                top: `${c.pos[1]}%`,
                "--marker-accent": c.accent,
              } as React.CSSProperties}
              onClick={() => handleSelect(c.id)}
              onMouseEnter={() => setHovered(c.id)}
              onMouseLeave={() => setHovered(null)}
              aria-label={`${c.name} — ${c.title}`}
              aria-pressed={selected === c.id}
            >
              <span className="sm__marker-ring" />
              <span className="sm__marker-dot" />
              {(hovered === c.id && selected !== c.id) && (
                <span className="sm__marker-tooltip">{c.name}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Modal karty postaci */}
      {active && (
        <div className="sm__backdrop" onClick={handleClose}>
          <div
            ref={modalRef}
            className="sm__modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${active.name} — ${active.title}`}
            onClick={(e) => e.stopPropagation()}
            style={{ "--modal-accent": active.accent } as React.CSSProperties}
          >
            <button
              className="sm__modal-close"
              onClick={handleClose}
              aria-label="Zamknij"
            >
              ×
            </button>
            <div className="sm__modal-style">{active.playStyle}</div>
            <h3 className="sm__modal-name">{active.name}</h3>
            <div className="sm__modal-title">{active.title}</div>

            <dl className="sm__modal-stats">
              <dt>Kultura</dt>
              <dd>{active.culture}</dd>
              <dt>Państwo</dt>
              <dd>{active.state}</dd>
              <dt>Wiara</dt>
              <dd>{active.faith}</dd>
              {active.holySite !== "—" && (
                <>
                  <dt>Miejsce święte</dt>
                  <dd>{active.holySite}</dd>
                </>
              )}
            </dl>

            <p className="sm__modal-desc">{active.description}</p>

            <div className="sm__modal-hint">
              <span className="sm__modal-hint-icon">◆</span>
              {active.holySitePos
                ? "Linia na mapie wskazuje miejsce święte"
                : active.id === "dyre"
                ? "Miejsce święte w posiadaniu — brak linii"
                : "Brak pogańskiego miejsca świętego"}
            </div>
          </div>
        </div>
      )}

      <div className="sm__legend">
        {CHARACTERS.map((c) => (
          <button
            key={c.id}
            className={
              "sm__legend-item" + (selected === c.id ? " is-selected" : "")
            }
            onClick={() => handleSelect(c.id)}
            onMouseEnter={() => setHovered(c.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <span
              className="sm__legend-dot"
              style={{ background: c.accent }}
            />
            <span className="sm__legend-name">{c.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
