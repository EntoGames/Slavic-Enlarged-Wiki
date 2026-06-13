import * as React from "react";
import type { Story } from "@ladle/react";

/* ───── Epiki Slavic Enlarged ───── */

type Priority = "P0" | "P1" | "P2";
type Criticality = "blocker" | "important" | "separate";

interface BacklogItem {
  id: number;
  mod: string;
  title: string;
  priority: Priority;
  done?: boolean;
}

interface Phase {
  num: number;
  title: string;
  done?: boolean;
}

interface Epic {
  num: number;
  title: string;
  subtitle: string;
  status: string;
  criticality: Criticality;
  mods: string[];
  goal: string;
  phases: Phase[];
  backlog: BacklogItem[];
}

const EPICS: Epic[] = [
  {
    num: 1,
    title: "Swiate Miejsca",
    subtitle: "Holy Sites & Special Buildings",
    status: "Planowanie",
    criticality: "blocker",
    mods: ["SE", "SSP", "Kingdoms"],
    goal: "Spojny system Holy Sites: budynki specjalne, triggery, catalysty SSP, i per-kingdom warianty.",
    phases: [
      { num: 1, title: "SE triggers — fundament" },
      { num: 2, title: "SSP catalyst hooks" },
      { num: 3, title: "SE budynki Arkona + Kijow" },
      { num: 4, title: "KM Pomerania + Carinthia" },
      { num: 5, title: "Pivoty SSP + synergia Os Kultu" },
    ],
    backlog: [
      { id: 1, mod: "SE", title: "FIX se_controls_shared_holy_sites_trigger → 3/5", priority: "P0" },
      { id: 2, mod: "SE", title: "Trigger se_is_holy_site_trigger (county vs 15 HS)", priority: "P0" },
      { id: 3, mod: "SE", title: "Trigger se_struggle_region_county_trigger", priority: "P0" },
      { id: 4, mod: "SE", title: "Zlagodzenie warunku HS reformacji (3/5 + 1/region)", priority: "P0" },
      { id: 5, mod: "SSP", title: "on_title_gain hook: catalyst HS captured/lost", priority: "P0" },
      { id: 6, mod: "SSP", title: "on_title_gain hook dla 3 pivotow", priority: "P0" },
      { id: 7, mod: "KM", title: "Modifier Knezji Kamen (Carinthia)", priority: "P0" },
      { id: 8, mod: "SE", title: "Budynki se_shrine_arkona_1/2", priority: "P1" },
      { id: 9, mod: "SE", title: "Budynki se_shrine_kyiv_1/2", priority: "P1" },
      { id: 10, mod: "SE", title: "Modifier Strzegacy Kult (dynamiczny HS)", priority: "P1" },
      { id: 11, mod: "SSP", title: "Catalyst: utrata HS przez pogan", priority: "P1" },
      { id: 12, mod: "SSP", title: "Catalyst przy zmianie pivotu", priority: "P1" },
      { id: 13, mod: "SSP", title: "Modifiery pivotow: 6 types", priority: "P1" },
      { id: 14, mod: "KM", title: "Budynek Trzyglow (Pomerania)", priority: "P1" },
      { id: 15, mod: "SE", title: "Event odkrycie HS (losowy, DLC-aware)", priority: "P2" },
      { id: 16, mod: "SE", title: "Decision Pielgrzymka do swietego miejsca", priority: "P2" },
      { id: 17, mod: "SSP", title: "Os Kultu: synergia 3+ HS kontrola", priority: "P2" },
    ],
  },
  {
    num: 2,
    title: "Struggle Core",
    subtitle: "Fazy, Katalizatory, Endings, AI",
    status: "Planowanie",
    criticality: "blocker",
    mods: ["SSP", "SE", "Kingdoms"],
    goal: "Pelny cykl zycia Slavic Struggle: fazy Swarozyc → Storm → Harmony → Veles → Marzanna do endings.",
    phases: [
      { num: 1, title: "Architektura scope i cross-mod flow" },
      { num: 2, title: "FIX catalysts + effects audit" },
      { num: 3, title: "Phase transitions — eventy faz" },
      { num: 4, title: "AI behavior" },
      { num: 5, title: "Pivoty — regionalna warstwa" },
      { num: 6, title: "Endings + scope/interloper" },
    ],
    backlog: [
      { id: 1, mod: "SSP", title: "FIX catalyst_ssp_arkona_fell", priority: "P0" },
      { id: 2, mod: "SSP", title: "FIX catalyst_ssp_faith_reformed", priority: "P0" },
      { id: 3, mod: "SSP", title: "Katalizatory per faza + decyzja", priority: "P0" },
      { id: 4, mod: "SSP", title: "ai_will_do per decyzja per faza", priority: "P0" },
      { id: 5, mod: "SSP", title: "Hamulec AI anty-dominino", priority: "P0" },
      { id: 6, mod: "SSP", title: "on_faith_conversion hook", priority: "P0" },
      { id: 7, mod: "SSP", title: "Event Zejscie do Podziemia (Harmony→Veles)", priority: "P0" },
      { id: 8, mod: "SSP", title: "Event Marzanna wita (Veles→Marzanna)", priority: "P0" },
      { id: 9, mod: "SSP", title: "On_entry effects per faza", priority: "P0" },
      { id: 10, mod: "SSP", title: "Ending trigger Trwale Dwuwierstwo", priority: "P0" },
      { id: 11, mod: "SSP", title: "Modifier dynastyczny guardian_of_traditions", priority: "P0" },
      { id: 12, mod: "SSP", title: "Balans involvement_prerequisite", priority: "P0" },
      { id: 13, mod: "SSP", title: "on_title_gain hook dla pivotow", priority: "P0" },
      { id: 14, mod: "SSP", title: "Effect sessp_neighbor_converted_effect", priority: "P0" },
      { id: 15, mod: "SSP", title: "Effect sessp_check_dvoeverie_ending_effect", priority: "P0" },
      { id: 16, mod: "SSP", title: "Effect sessp_ai_brake_check_effect", priority: "P0" },
      { id: 17, mod: "SSP", title: "Five_year_county_pulse dryf faith", priority: "P0" },
      { id: 18, mod: "SSP", title: "Event Burza Peruna (Swarozyc→Storm)", priority: "P1" },
      { id: 19, mod: "SSP", title: "Pivot Arkona: modifiers", priority: "P1" },
      { id: 20, mod: "SSP", title: "Pivot Kijow: modifiers", priority: "P1" },
      { id: 21, mod: "SSP", title: "Pivot Gniezno: modifiers", priority: "P1" },
      { id: 22, mod: "SSP", title: "Decision Wiec Slowian (push Storm)", priority: "P1" },
      { id: 23, mod: "SSP", title: "Decision Wezwanie Peruna (push Harmony)", priority: "P1" },
      { id: 24, mod: "SSP", title: "Decision Akt Pokory (push Veles)", priority: "P1" },
      { id: 25, mod: "SSP", title: "Event Przesilenie (Storm→Harmony)", priority: "P1" },
      { id: 26, mod: "SSP", title: "AI: pogan priorytet HS recapture", priority: "P1" },
      { id: 27, mod: "SSP", title: "AI: chrzescijanin priorytet konwersji", priority: "P1" },
      { id: 28, mod: "SSP", title: "AI: dvoeverie neutralnosc", priority: "P1" },
      { id: 29, mod: "SSP", title: "Interloper: Byzantine/Frankish AI intervention", priority: "P1" },
      { id: 30, mod: "SSP", title: "Ending: Slavic Renaissance modifier chain", priority: "P1" },
      { id: 31, mod: "SSP", title: "Ending event cinematic: Perun's Judgment", priority: "P2" },
    ],
  },
  {
    num: 3,
    title: "Tozsamosc Kulturowa",
    subtitle: "Cultural Identity",
    status: "Planowanie",
    criticality: "important",
    mods: ["SE", "Kingdoms"],
    goal: "31+ kultur slowianskich czuje sie unikatowo: nazwy dynastii, etosy, tradycje per-heritage.",
    phases: [
      { num: 1, title: "Dynasty names (gotowe)", done: true },
      { num: 2, title: "Cultural acceptance (gotowe)", done: true },
      { num: 3, title: "Etosy + tradycje per-heritage" },
      { num: 4, title: "Innowacje kulturowe" },
      { num: 5, title: "Per-kingdom culture events" },
      { num: 6, title: "Lokalizacja kulturowa" },
      { num: 7, title: "Balansowanie + testy" },
    ],
    backlog: [
      { id: 1, mod: "SE", title: "Dynasty names per kultura", priority: "P0", done: true },
      { id: 2, mod: "SE", title: "Cultural acceptance miedzy kulturami SE", priority: "P0", done: true },
      { id: 3, mod: "SE", title: "Ethos per heritage group (East/West/South)", priority: "P0" },
      { id: 4, mod: "SE", title: "3 tradycje per heritage (Eastern/Western/Southern)", priority: "P0" },
      { id: 5, mod: "SE", title: "Innowacja: Wiece Plemienne (Tribal Assemblies)", priority: "P0" },
      { id: 6, mod: "SE", title: "Innowacja: Pisownia Glagolicka", priority: "P0" },
      { id: 7, mod: "SE", title: "Lokalizacja 31 kultur (opisy, nazwy)", priority: "P0" },
      { id: 8, mod: "SE", title: "FIX cultural_acceptance brakujace pary", priority: "P0" },
      { id: 9, mod: "KM", title: "Event kulturowy: Polanie vs Goplanie (Poland)", priority: "P1" },
      { id: 10, mod: "KM", title: "Event: Rani opor chrystianizacji (Pomerania)", priority: "P1" },
      { id: 11, mod: "KM", title: "Event: Serbowie vs Bolgaria rywalizacja (Serbia)", priority: "P1" },
      { id: 12, mod: "SE", title: "Tradycja: Druzyna (Eastern heritage)", priority: "P1" },
      { id: 13, mod: "SE", title: "Tradycja: Wojownicy Swiatyni (Western heritage)", priority: "P1" },
      { id: 14, mod: "SE", title: "Tradycja: Grazhdanstvo (South heritage)", priority: "P1" },
      { id: 15, mod: "SE", title: "Pillars: nowe name_lists per kultura", priority: "P1" },
    ],
  },
  {
    num: 4,
    title: "Ukryty Kult & Dwuwierstwo",
    subtitle: "Hidden Cult & Dual Faith",
    status: "Planowanie",
    criticality: "blocker",
    mods: ["SSP", "SE", "Kingdoms"],
    goal: "Podwojna warstwa: widoczny Struggle + podziemna siec kultow; dwuwierstwo jako trzecia sciezka.",
    phases: [
      { num: 1, title: "Architektura dvoeverie scale" },
      { num: 2, title: "Hidden cult events core" },
      { num: 3, title: "Kingdom-specific cult variants" },
      { num: 4, title: "Dual faith path rewards" },
      { num: 5, title: "Interaction z Struggle phases" },
      { num: 6, title: "Endings dwuwierstwa" },
    ],
    backlog: [
      { id: 1, mod: "SSP", title: "Dvoeverie county scale (0-100)", priority: "P0" },
      { id: 2, mod: "SSP", title: "Five-year pulse: dryf scale per faza", priority: "P0" },
      { id: 3, mod: "SSP", title: "Threshold events (25/50/75/100)", priority: "P0" },
      { id: 4, mod: "SE", title: "Hidden trait se_secret_pagan", priority: "P0" },
      { id: 5, mod: "SSP", title: "Event: odkrycie kultu (losowy, per phase)", priority: "P1" },
      { id: 6, mod: "SSP", title: "Event: donos na kultystow", priority: "P1" },
      { id: 7, mod: "SSP", title: "Event: nocne obrady w grodzisku", priority: "P1" },
      { id: 8, mod: "SSP", title: "Decision: Zakamufluj wiary", priority: "P1" },
      { id: 9, mod: "KM", title: "Polesia: bagienne sanktuarium (White Ruthenia)", priority: "P1" },
      { id: 10, mod: "KM", title: "Arkiv Wiary: ukryte pisma (Novgorod)", priority: "P1" },
    ],
  },
  {
    num: 5,
    title: "Reformacja & Wolchwy",
    subtitle: "Reformation & Priests",
    status: "Planowanie",
    criticality: "important",
    mods: ["SE", "SSP"],
    goal: "Najtrudniejsza sciezka poganska: 3-etapowa reformacja wymagajaca kontroli HS + poparcia politycznego.",
    phases: [
      { num: 1, title: "Warunki reformacji (HS + poparcie)" },
      { num: 2, title: "Etap 1: Wiec Zjednoczenia" },
      { num: 3, title: "Etap 2: Spory Doktrynalne" },
      { num: 4, title: "Etap 3: Konsekracja" },
      { num: 5, title: "Post-reforma: unikalne zdolnosci" },
    ],
    backlog: [
      { id: 1, mod: "SE", title: "Trigger reformacji: 3/5 HS + 1 per region", priority: "P0" },
      { id: 2, mod: "SE", title: "Decision: Zwolaj Wiec Zjednoczenia", priority: "P0" },
      { id: 3, mod: "SE", title: "Event chain: Spory Doktrynalne (3 eventy)", priority: "P1" },
      { id: 4, mod: "SE", title: "Event: Konsekracja Nowej Wiary", priority: "P1" },
      { id: 5, mod: "SE", title: "Post-reforma modifier: Obrzedy Sezonowe", priority: "P1" },
      { id: 6, mod: "SE", title: "Post-reforma: Holy Order Wolchwow", priority: "P1" },
      { id: 7, mod: "SSP", title: "Catalyst: faith_reformed → Struggle shift", priority: "P1" },
      { id: 8, mod: "SSP", title: "Reforma wpływa na Struggle phase transitions", priority: "P1" },
      { id: 9, mod: "SE", title: "Wolchw court position + events", priority: "P1" },
      { id: 10, mod: "SE", title: "Rytualy: 4 sezonowe + 2 specjalne", priority: "P1" },
      { id: 11, mod: "SE", title: "Cinematic event: moment reformacji", priority: "P2" },
    ],
  },
  {
    num: 6,
    title: "Wojska Slowianskie",
    subtitle: "Slavic Military Units",
    status: "Planowanie",
    criticality: "important",
    mods: ["SE", "Kingdoms"],
    goal: "5 unikatowych MaA odzwierciedlajacych regionalne style wojny: druzyna, lucznicy, wojownicy swiatyni.",
    phases: [
      { num: 1, title: "MaA Eastern: Druzyna + Lucznicy" },
      { num: 2, title: "MaA Western: Wojownicy Swiatyni + Weleci" },
      { num: 3, title: "MaA Southern: Straz Graniczna" },
      { num: 4, title: "Unlock conditions (tradycja/budynek)" },
      { num: 5, title: "Balansowanie + terrain bonusy" },
    ],
    backlog: [
      { id: 1, mod: "SE", title: "MaA se_druzyna (heavy infantry, Eastern)", priority: "P0" },
      { id: 2, mod: "SE", title: "MaA se_slavic_archers (skirmisher, Eastern)", priority: "P0" },
      { id: 3, mod: "SE", title: "MaA se_temple_warriors (heavy, Western)", priority: "P0" },
      { id: 4, mod: "SE", title: "MaA se_weleci (light cavalry, Western)", priority: "P1" },
      { id: 5, mod: "SE", title: "MaA se_border_guard (pike, Southern)", priority: "P1" },
      { id: 6, mod: "SE", title: "Tradycja Druzyna unlock + modifiers", priority: "P1" },
      { id: 7, mod: "SE", title: "Budynek Koszary Swiatynne → temple_warriors", priority: "P1" },
      { id: 8, mod: "SE", title: "Terrain bonusy: lasy, bagna, gory", priority: "P1" },
      { id: 9, mod: "KM", title: "Per-kingdom MaA variant (Pomerania rani)", priority: "P2" },
      { id: 10, mod: "KM", title: "Per-kingdom MaA variant (Serbia granica)", priority: "P2" },
    ],
  },
  {
    num: 7,
    title: "Artefakty & Legendy",
    subtitle: "Artifacts & Legends (SML)",
    status: "Planowanie",
    criticality: "separate",
    mods: ["SML", "SE", "SSP"],
    goal: "Slowianskie artefakty zyja historia: Topor Peruna aktywuje sie w Storm, Idol Swiatowita traci moc gdy pada Arkona.",
    phases: [
      { num: 1, title: "SE: fizyczne artefakty (bez DLC)" },
      { num: 2, title: "SML: legendary mechanics (DLC LoTD)" },
      { num: 3, title: "Interaction z Struggle phases" },
      { num: 4, title: "Per-kingdom legendary variants" },
      { num: 5, title: "Balansowanie + testy" },
    ],
    backlog: [
      { id: 1, mod: "SE", title: "Artefakt: Topor Peruna (fizyczny, +prowess)", priority: "P0" },
      { id: 2, mod: "SE", title: "Artefakt: Idol Swiatowita (fizyczny, +piety)", priority: "P1" },
      { id: 3, mod: "SML", title: "Legend: Topor Peruna (aktywny w Storm phase)", priority: "P1" },
      { id: 4, mod: "SML", title: "Legend: Idol Swiatowita (deaktywacja gdy Arkona pada)", priority: "P1" },
      { id: 5, mod: "SML", title: "Legend: Miecz Ruryka (Novgorod)", priority: "P1" },
      { id: 6, mod: "KM", title: "Per-kingdom artifact (Poland: Szczerbiec proto)", priority: "P2" },
      { id: 7, mod: "KM", title: "Per-kingdom artifact (Serbia: Nemanjic relic)", priority: "P2" },
      { id: 8, mod: "SE", title: "Artefakt interaction z Holy Sites", priority: "P2" },
    ],
  },
];

/* ───── Style ───── */

const CRIT_COLORS: Record<Criticality, { bg: string; border: string; label: string; emoji: string }> = {
  blocker:   { bg: "rgba(230,57,70,0.12)", border: "rgba(230,57,70,0.4)",  label: "Bloker",    emoji: "\u{1F534}" },
  important: { bg: "rgba(230,180,60,0.10)", border: "rgba(230,180,60,0.35)", label: "Wazny",     emoji: "\u{1F7E1}" },
  separate:  { bg: "rgba(100,160,230,0.10)", border: "rgba(100,160,230,0.3)", label: "Osobny DLC", emoji: "\u{1F535}" },
};

const PRIO_COLORS: Record<Priority, string> = {
  P0: "#e63946",
  P1: "#e6b43c",
  P2: "#6ba0d6",
};

const MOD_COLORS: Record<string, string> = {
  SE: "#c5a048",
  SSP: "#e63946",
  SML: "#6ba0d6",
  Kingdoms: "#83c84d",
  KM: "#83c84d",
};

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(197,160,72,0.15)",
  borderRadius: 8,
  padding: "20px 24px",
  marginBottom: 16,
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-display, 'Paradox King Script', serif)",
  fontSize: 20,
  color: "#e2c379",
  margin: "0 0 4px",
  letterSpacing: "0.03em",
};

const metaStyle: React.CSSProperties = {
  fontSize: 12,
  color: "rgba(255,255,255,0.45)",
  margin: "0 0 12px",
};

const pillStyle = (color: string): React.CSSProperties => ({
  display: "inline-block",
  padding: "1px 8px",
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "0.04em",
  borderRadius: 3,
  background: `${color}22`,
  border: `1px solid ${color}55`,
  color,
  marginRight: 4,
});

const progressBarBg: React.CSSProperties = {
  height: 6,
  borderRadius: 3,
  background: "rgba(255,255,255,0.08)",
  overflow: "hidden",
  margin: "8px 0",
};

/* ───── Components ───── */

function ProgressBar({ done, total }: { done: number; total: number }) {
  const pct = total > 0 ? (done / total) * 100 : 0;
  return (
    <div style={progressBarBg}>
      <div
        style={{
          height: "100%",
          width: `${pct}%`,
          borderRadius: 3,
          background: pct === 100 ? "#83c84d" : "linear-gradient(90deg, #c5a048, #e2c379)",
          transition: "width 300ms ease",
        }}
      />
    </div>
  );
}

function CritBadge({ c }: { c: Criticality }) {
  const cfg = CRIT_COLORS[c];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "2px 10px",
        fontSize: 11,
        fontWeight: 600,
        borderRadius: 4,
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        color: cfg.border.replace(/[\d.]+\)$/, "1)"),
      }}
    >
      {cfg.emoji} {cfg.label}
    </span>
  );
}

function ModPills({ mods }: { mods: string[] }) {
  return (
    <span>
      {mods.map((m) => (
        <span key={m} style={pillStyle(MOD_COLORS[m] || "#999")}>
          {m}
        </span>
      ))}
    </span>
  );
}

/* ───── Dashboard Story ───── */

const Dashboard: Story = () => {
  const totalItems = EPICS.reduce((s, e) => s + e.backlog.length, 0);
  const doneItems = EPICS.reduce((s, e) => s + e.backlog.filter((b) => b.done).length, 0);
  const p0Total = EPICS.reduce((s, e) => s + e.backlog.filter((b) => b.priority === "P0").length, 0);
  const p1Total = EPICS.reduce((s, e) => s + e.backlog.filter((b) => b.priority === "P1").length, 0);
  const p2Total = EPICS.reduce((s, e) => s + e.backlog.filter((b) => b.priority === "P2").length, 0);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24, fontFamily: "var(--font-body, 'Lato', sans-serif)" }}>
      <h1
        style={{
          fontFamily: "var(--font-display, 'Paradox King Script', serif)",
          fontSize: 28,
          color: "#e2c379",
          letterSpacing: "0.06em",
          margin: "0 0 8px",
        }}
      >
        Epiki — Slavic Enlarged
      </h1>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", margin: "0 0 24px" }}>
        7 cross-mod epikow definiujacych roadmape rozwoju SE, SSP i Kingdom Mods.
      </p>

      {/* Summary strip */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 12,
          marginBottom: 24,
        }}
      >
        {[
          { label: "Lacznie", value: totalItems, sub: `${doneItems} gotowe`, color: "#c5a048" },
          { label: "P0 Blokery", value: p0Total, sub: "krytyczne", color: PRIO_COLORS.P0 },
          { label: "P1 Wazne", value: p1Total, sub: "wysoki priorytet", color: PRIO_COLORS.P1 },
          { label: "P2 Pozniej", value: p2Total, sub: "nice to have", color: PRIO_COLORS.P2 },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: `${s.color}11`,
              border: `1px solid ${s.color}33`,
              borderRadius: 8,
              padding: "12px 16px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 700, color: s.color, lineHeight: 1.1 }}>{s.value}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: s.color, opacity: 0.8, marginTop: 2 }}>{s.label}</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Epic cards */}
      {EPICS.map((epic) => {
        const done = epic.backlog.filter((b) => b.done).length;
        const total = epic.backlog.length;
        const phasesDone = epic.phases.filter((p) => p.done).length;

        return (
          <div key={epic.num} style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <h2 style={h2Style}>
                  <span style={{ opacity: 0.5, marginRight: 8 }}>#{String(epic.num).padStart(2, "0")}</span>
                  {epic.title}
                </h2>
                <p style={metaStyle}>
                  {epic.subtitle} &middot; <ModPills mods={epic.mods} />
                </p>
              </div>
              <CritBadge c={epic.criticality} />
            </div>

            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", margin: "0 0 12px", lineHeight: 1.5 }}>
              {epic.goal}
            </p>

            {/* Progress */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
              <span>
                Backlog: <strong style={{ color: "rgba(255,255,255,0.7)" }}>{done}/{total}</strong>
              </span>
              <span>
                Fazy: <strong style={{ color: "rgba(255,255,255,0.7)" }}>{phasesDone}/{epic.phases.length}</strong>
              </span>
            </div>
            <ProgressBar done={done} total={total} />

            {/* Phases */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
              {epic.phases.map((ph) => (
                <span
                  key={ph.num}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "2px 10px",
                    fontSize: 10,
                    borderRadius: 3,
                    background: ph.done ? "rgba(131,200,77,0.15)" : "rgba(255,255,255,0.04)",
                    border: ph.done ? "1px solid rgba(131,200,77,0.3)" : "1px solid rgba(255,255,255,0.08)",
                    color: ph.done ? "#a3d678" : "rgba(255,255,255,0.45)",
                  }}
                >
                  {ph.done ? "✓" : ph.num}. {ph.title}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
Dashboard.storyName = "Dashboard";

/* ───── Backlog detail Story ───── */

const Backlog: Story = () => {
  const [filter, setFilter] = React.useState<string>("all");
  const [prioFilter, setPrioFilter] = React.useState<string>("all");

  const allItems = EPICS.flatMap((e) =>
    e.backlog.map((b) => ({ ...b, epicNum: e.num, epicTitle: e.title }))
  );

  const filtered = allItems
    .filter((b) => filter === "all" || b.mod === filter)
    .filter((b) => prioFilter === "all" || b.priority === prioFilter);

  const mods = [...new Set(allItems.map((b) => b.mod))].sort();

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24, fontFamily: "var(--font-body, 'Lato', sans-serif)" }}>
      <h1
        style={{
          fontFamily: "var(--font-display, 'Paradox King Script', serif)",
          fontSize: 28,
          color: "#e2c379",
          letterSpacing: "0.06em",
          margin: "0 0 16px",
        }}
      >
        Backlog
      </h1>

      {/* Filters */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", alignSelf: "center", marginRight: 4 }}>Mod:</span>
        {["all", ...mods].map((m) => (
          <button
            key={m}
            onClick={() => setFilter(m)}
            style={{
              padding: "3px 12px",
              fontSize: 11,
              fontWeight: filter === m ? 700 : 400,
              borderRadius: 4,
              border: `1px solid ${filter === m ? "#c5a04888" : "rgba(255,255,255,0.1)"}`,
              background: filter === m ? "rgba(197,160,72,0.15)" : "transparent",
              color: filter === m ? "#e2c379" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
            }}
          >
            {m === "all" ? "Wszystkie" : m}
          </button>
        ))}

        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", alignSelf: "center", marginLeft: 12, marginRight: 4 }}>
          Priorytet:
        </span>
        {["all", "P0", "P1", "P2"].map((p) => (
          <button
            key={p}
            onClick={() => setPrioFilter(p)}
            style={{
              padding: "3px 12px",
              fontSize: 11,
              fontWeight: prioFilter === p ? 700 : 400,
              borderRadius: 4,
              border: `1px solid ${prioFilter === p ? (PRIO_COLORS[p as Priority] || "#c5a048") + "88" : "rgba(255,255,255,0.1)"}`,
              background: prioFilter === p ? `${PRIO_COLORS[p as Priority] || "#c5a048"}22` : "transparent",
              color: prioFilter === p ? (PRIO_COLORS[p as Priority] || "#e2c379") : "rgba(255,255,255,0.5)",
              cursor: "pointer",
            }}
          >
            {p === "all" ? "Wszystkie" : p}
          </button>
        ))}
      </div>

      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>
        {filtered.length} elementow
      </div>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 12,
          color: "rgba(255,255,255,0.7)",
        }}
      >
        <thead>
          <tr
            style={{
              borderBottom: "1px solid rgba(197,160,72,0.2)",
              color: "rgba(255,255,255,0.4)",
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            <th style={{ padding: "6px 8px", textAlign: "left", fontWeight: 600 }}>Epic</th>
            <th style={{ padding: "6px 8px", textAlign: "left", fontWeight: 600 }}>Prio</th>
            <th style={{ padding: "6px 8px", textAlign: "left", fontWeight: 600 }}>Mod</th>
            <th style={{ padding: "6px 8px", textAlign: "left", fontWeight: 600 }}>Tytul</th>
            <th style={{ padding: "6px 8px", textAlign: "center", fontWeight: 600 }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item, i) => (
            <tr
              key={`${item.epicNum}-${item.id}`}
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                opacity: item.done ? 0.45 : 1,
                background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
              }}
            >
              <td style={{ padding: "6px 8px", whiteSpace: "nowrap", color: "rgba(255,255,255,0.4)" }}>
                #{String(item.epicNum).padStart(2, "0")}
              </td>
              <td style={{ padding: "6px 8px" }}>
                <span
                  style={{
                    ...pillStyle(PRIO_COLORS[item.priority]),
                    fontSize: 9,
                    fontWeight: 700,
                  }}
                >
                  {item.priority}
                </span>
              </td>
              <td style={{ padding: "6px 8px" }}>
                <span style={pillStyle(MOD_COLORS[item.mod] || "#999")}>{item.mod}</span>
              </td>
              <td
                style={{
                  padding: "6px 8px",
                  textDecoration: item.done ? "line-through" : "none",
                }}
              >
                {item.title}
              </td>
              <td style={{ padding: "6px 8px", textAlign: "center" }}>
                {item.done ? "✅" : "⬜"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
Backlog.storyName = "Backlog";

/* ───── Dependency map Story ───── */

const Dependencies: Story = () => {
  const deps = [
    { from: "EPIC 01: Swiete Miejsca", to: "EPIC 02: Struggle Core", label: "HS triggers → SSP catalysts" },
    { from: "EPIC 01: Swiete Miejsca", to: "EPIC 05: Reformacja", label: "HS control → reform conditions" },
    { from: "EPIC 02: Struggle Core", to: "EPIC 04: Dwuwierstwo", label: "Phase transitions → cult events" },
    { from: "EPIC 02: Struggle Core", to: "EPIC 07: Artefakty", label: "Phase state → artifact activation" },
    { from: "EPIC 03: Tozsamosc", to: "EPIC 06: Wojska", label: "Heritage groups → MaA unlock" },
    { from: "EPIC 04: Dwuwierstwo", to: "EPIC 05: Reformacja", label: "Dvoeverie scale → reform path" },
    { from: "EPIC 05: Reformacja", to: "EPIC 02: Struggle Core", label: "Reform catalyst → phase shift" },
  ];

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24, fontFamily: "var(--font-body, 'Lato', sans-serif)" }}>
      <h1
        style={{
          fontFamily: "var(--font-display, 'Paradox King Script', serif)",
          fontSize: 28,
          color: "#e2c379",
          letterSpacing: "0.06em",
          margin: "0 0 8px",
        }}
      >
        Zaleznosci miedzy epikami
      </h1>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", margin: "0 0 24px" }}>
        Cross-mod dependencies — co musi byc gotowe zanim mozna zaczac kolejny epik.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {deps.map((d, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              gap: 12,
              padding: "10px 16px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(197,160,72,0.1)",
              borderRadius: 6,
            }}
          >
            <span style={{ fontSize: 12, color: "#e2c379", fontWeight: 600 }}>{d.from}</span>
            <span style={{ fontSize: 18, color: "rgba(197,160,72,0.4)" }}>{"→"}</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
              <strong style={{ color: "#e2c379" }}>{d.to}</strong>
              <br />
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>{d.label}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Critical path */}
      <div style={{ marginTop: 32 }}>
        <h2 style={{ ...h2Style, fontSize: 18 }}>Sciezka krytyczna</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexWrap: "wrap",
            marginTop: 12,
            padding: "16px 20px",
            background: "rgba(230,57,70,0.06)",
            border: "1px solid rgba(230,57,70,0.2)",
            borderRadius: 8,
          }}
        >
          {[
            "01 Swiete Miejsca",
            "02 Struggle Core",
            "04 Dwuwierstwo",
            "05 Reformacja",
          ].map((name, i, arr) => (
            <React.Fragment key={name}>
              <span
                style={{
                  padding: "4px 12px",
                  fontSize: 12,
                  fontWeight: 600,
                  borderRadius: 4,
                  background: "rgba(230,57,70,0.15)",
                  border: "1px solid rgba(230,57,70,0.3)",
                  color: "#e88",
                }}
              >
                #{name}
              </span>
              {i < arr.length - 1 && (
                <span style={{ color: "rgba(230,57,70,0.4)", fontSize: 16 }}>{"→"}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
Dependencies.storyName = "Zaleznosci";

export { Dashboard, Backlog, Dependencies };
export default {
  title: "Epiki",
};
