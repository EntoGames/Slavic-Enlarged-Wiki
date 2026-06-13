export type { NodeType, GraphNode, GraphLink, GraphPath, KingdomGraphData } from "./graph-types";
export { NODE_TYPE_CONFIG, GRID_ROWS, GRID_COLS } from "./graph-types";
import type { GraphNode, GraphLink, GraphPath } from "./graph-types";

export const NOVGOROD_NODES: GraphNode[] = [
  // ═══ ROW 0 — Bookmarks (timeline) ═══
  { id: "bk_867",  label: "867",  type: "bookmark", era: "867",  note: "Nowogrod poganski, ustroj plemienny, Rurykowicze na polnocy",   row: 0, col: 0 },
  { id: "bk_1066", label: "1066", type: "bookmark", era: "1066", note: "Prawoslawny Nowogrod, ksiaze zalezy od Kijowa",                 row: 0, col: 3 },
  { id: "bk_1178", label: "1178", type: "bookmark", era: "1178", note: "Republika nowogrodzka umacnia autonomie wobec Rusi",             row: 0, col: 5 },
  { id: "bk_1230", label: "1230", type: "bookmark", era: "1230", note: "Szczyt potegi republiki — Tatarzy omijaja Nowogrod",             row: 0, col: 7 },

  // ═══ ROW 1 — Vanilla mechanics ═══
  { id: "struggle_ssp",     label: "Struggle of Perun",   type: "mechanic", note: "SSP: poganstwo wschodnioslow. aktywne 867-~1050; fazy Swarozyc -> Perun -> zakonczenie", row: 1, col: 0 },
  { id: "tribal_to_feudal", label: "Tribal -> Feudal",     type: "mechanic", note: "Przejscie ustrojowe z plemiennego na feudalny",       row: 1, col: 2 },
  { id: "conversion",       label: "Konwersja wiary",      type: "mechanic", note: "Poganstwo -> prawoslawie (~988, chrzest Rusi)",       row: 1, col: 4 },
  { id: "vassalage",        label: "Wasalstwo wobec Kijowa", type: "mechanic", note: "Nowogrod jako wasal Rusi kijowskiej — napiecia autonomiczne", row: 1, col: 6 },

  // ═══ ROW 2 — Planned events ═══
  { id: "evt_bell",        label: "Dzwon Wiecowy",           type: "event", note: "senv_ilmenian.0001 — glosowanie: Wiara/Handel/Obrona",              row: 2, col: 0, planned: true },
  { id: "evt_merchants",   label: "Obcy Kupcy (Hanza)",      type: "event", note: "senv_ilmenian.0002 — kupcy hanzeatyccy przybywaja do Nowogrodu",    row: 2, col: 2, planned: true },
  { id: "evt_last_volkhv", label: "Ostatni Wolchw",          type: "event", note: "senv_ilmenian.0003 — ostatni straznik starej wiary w Nowogrodzie",  row: 2, col: 4, planned: true },
  { id: "evt_exile",       label: "Wiec zada wygnania",      type: "event", note: "senv_ilmenian.0004 — wiec wyrzuca ksiecia (ustap/stlum/negocjuj); P0 ikoniczna mechanika", row: 2, col: 6, planned: true },

  // ═══ ROW 3 — Faith + Dynasty ═══
  { id: "slavic_pagan", label: "Poganstwo wschodnioslow.", type: "faith",   note: "Wiara wschodnislowianska do ~988 (Perun, Weles, Swarog)",       row: 3, col: 0 },
  { id: "orthodox",     label: "Prawoslawie",              type: "faith",   note: "Wiara dominujaca od 988 (chrzest Wlodzimierza)",                 row: 3, col: 3 },
  { id: "rurikid",      label: "Rurykowicze",              type: "dynasty", note: "Dynastia wareska — linia nowogrodzka Rurykowiczow",              row: 3, col: 5 },

  // ═══ ROW 4 — Planned decisions ═══
  { id: "dec_veche",    label: "Zwolaj Wiec",              type: "decision", note: "senv_convene_veche_decision — major decision, glosowanie rady", row: 4, col: 1, planned: true },
  { id: "dec_republic", label: "Republika Welesowa",       type: "decision", note: "senv_decision_velesian_republic — ALT: poganskie rzady kupieckie zamiast arcybiskupa", row: 4, col: 4, planned: true },
  { id: "dec_treaty",   label: "Traktat Welesowy",         type: "decision", note: "senv_decision_velesian_treaty — immunity od misji za neutralnosc handlowa", row: 4, col: 6, planned: true },

  // ═══ ROW 5 — Titles ═══
  { id: "e_russia",    label: "e_russia",    type: "title", note: "Imperium Rusi — de jure suweren k_novgorod",                      row: 5, col: 7 },
  { id: "k_novgorod",  label: "k_novgorod",  type: "title", note: "Krolewstwo Nowogrodu — rdzen: d_novgorod, d_pskov, d_beloozero",  row: 5, col: 4 },
  { id: "d_novgorod",  label: "d_novgorod",  type: "title", note: "Ksiestwo Nowogrodu — stolica republiki, siedziba wiecu",          row: 5, col: 1 },
  { id: "d_pskov",     label: "d_pskov",     type: "title", note: "Ksiestwo Pskowa — zachodnia rubież, Izborsk",                     row: 5, col: 2 },
  { id: "d_beloozero", label: "d_beloozero", type: "title", note: "Ksiestwo Bialego Jeziora — polnocny kraniec Rusi",                row: 5, col: 6 },

  // ═══ ROW 6 — Planned modifiers + court positions ═══
  { id: "mod_freedom",      label: "Novogradska Wolnosc",   type: "modifier", note: "senv_modifier_novgorod_freedom — +development, +trade gdy wiec aktywny; znika po stlumieniu", row: 6, col: 0, planned: true },
  { id: "mod_broken",       label: "Broken Veche",          type: "modifier", note: "senv_modifier_broken_veche — malus -opinion przez 20 lat po stlumieniu wiecu",                row: 6, col: 2, planned: true },
  { id: "court_posadnik",   label: "Posadnik",              type: "court",    note: "senv_court_position_posadnik — namiestnik cywilny; +15% dochod z handlu; wymaga ilmenian",    row: 6, col: 4, planned: true },
  { id: "court_tysyatsky",  label: "Tysiacki",              type: "court",    note: "senv_court_position_tysyatsky — namiestnik wojskowy; +10% levy; wymaga ilmenian",              row: 6, col: 6, planned: true },

  // ═══ ROW 7 — Cultures + heritage ═══
  { id: "ilmenian",    label: "Ilmenian",     type: "culture", note: "Wschodnislowianska kultura Nowogrodu — heritage east_slavic",    row: 7, col: 1 },
  { id: "novgorodian", label: "Novgorodian",  type: "culture", note: "Kultura nowogrodzka — pozniejsza ewolucja ilmenian",            row: 7, col: 4 },
  { id: "east_slavic", label: "East Slavic",  type: "culture", note: "Heritage — wspolne dla Rusi, Nowogrodu, Bialorusi",             row: 7, col: 6 },

  // ═══ ROW 8 — Key provinces ═══
  { id: "novgorod",   label: "Novgorod",   type: "province", note: "Stolica republiki — siedziba wiecu, centrum handlu",             row: 8, col: 0 },
  { id: "ladoga",     label: "Ladoga",     type: "province", note: "Stara Ladoga — pierwsza siedziba Ruryka, port na Ladodze",       row: 8, col: 2 },
  { id: "pskov",      label: "Pskov",      type: "province", note: "Stolica ksiestwa — zachodnia twierdza, granica z Liwonia",        row: 8, col: 4 },
  { id: "beloozero",  label: "Beloozero",  type: "province", note: "Biale Jezioro — polnocne pogranicze, handel futrami",             row: 8, col: 6 },
  { id: "torzhok",    label: "Torzhok",    type: "province", note: "Miasto targowe — kluczowy punkt handlowy Nowogrodu",              row: 8, col: 7 },
];

export const NOVGOROD_LINKS: GraphLink[] = [
  // ── Vanilla: timeline flow ──
  { source: "bk_867",  target: "bk_1066", relation: "→" },
  { source: "bk_1066", target: "bk_1178", relation: "→" },
  { source: "bk_1178", target: "bk_1230", relation: "→" },

  // ── Vanilla: title hierarchy ──
  { source: "d_novgorod",  target: "k_novgorod",  relation: "de jure" },
  { source: "d_pskov",     target: "k_novgorod",  relation: "de jure" },
  { source: "d_beloozero", target: "k_novgorod",  relation: "de jure" },
  { source: "k_novgorod",  target: "e_russia",    relation: "de jure" },

  // ── Vanilla: provinces → duchies ──
  { source: "novgorod",  target: "d_novgorod",  relation: "stolica" },
  { source: "ladoga",    target: "d_novgorod",  relation: "hrabstwo" },
  { source: "pskov",     target: "d_pskov",     relation: "stolica" },
  { source: "beloozero", target: "d_beloozero", relation: "stolica" },
  { source: "torzhok",   target: "d_novgorod",  relation: "hrabstwo" },

  // ── Vanilla: culture → region / heritage ──
  { source: "ilmenian",    target: "d_novgorod",  relation: "region" },
  { source: "ilmenian",    target: "d_beloozero", relation: "region" },
  { source: "ilmenian",    target: "east_slavic",  relation: "heritage" },
  { source: "novgorodian", target: "east_slavic",  relation: "heritage" },
  { source: "novgorodian", target: "d_pskov",      relation: "region" },

  // ── Vanilla: dynasty → title ──
  { source: "rurikid", target: "k_novgorod", relation: "rzadzi" },
  { source: "rurikid", target: "d_novgorod", relation: "stolica" },
  { source: "rurikid", target: "novgorod",   relation: "siedziba" },

  // ── Vanilla: faith ↔ bookmarks ──
  { source: "slavic_pagan", target: "bk_867",  relation: "wiara w" },
  { source: "orthodox",     target: "bk_1066", relation: "wiara w" },
  { source: "orthodox",     target: "bk_1178", relation: "wiara w" },
  { source: "orthodox",     target: "bk_1230", relation: "wiara w" },
  { source: "conversion",   target: "slavic_pagan", relation: "z" },
  { source: "conversion",   target: "orthodox",     relation: "na" },

  // ── Vanilla/SSP: poganstwo ──
  { source: "struggle_ssp", target: "slavic_pagan", relation: "system wiary" },
  { source: "struggle_ssp", target: "bk_867",       relation: "start" },

  // ── Vanilla: bookmark → title state ──
  { source: "bk_867",  target: "d_novgorod", relation: "tytularne" },
  { source: "bk_1066", target: "k_novgorod", relation: "krolewstwo" },
  { source: "bk_1178", target: "k_novgorod", relation: "republika" },

  // ── Vanilla: mechanics ──
  { source: "tribal_to_feudal", target: "bk_867",     relation: "start" },
  { source: "tribal_to_feudal", target: "d_novgorod", relation: "dotyczy" },
  { source: "vassalage",        target: "k_novgorod", relation: "dotyczy" },
  { source: "vassalage",        target: "e_russia",   relation: "kontekst" },

  // ── Planned: veche decision → events ──
  { source: "dec_veche",    target: "evt_bell",        relation: "odpala" },
  { source: "evt_bell",     target: "evt_merchants",   relation: "opcja Handel" },
  { source: "evt_bell",     target: "evt_last_volkhv", relation: "opcja Wiara" },
  { source: "evt_bell",     target: "evt_exile",       relation: "nastepstwo" },

  // ── Planned: veche → modifiers ──
  { source: "dec_veche",       target: "mod_freedom", relation: "aktywuje" },
  { source: "evt_exile",       target: "mod_broken",  relation: "opcja B: stlum" },
  { source: "mod_freedom",     target: "novgorod",    relation: "dotyczy" },
  { source: "mod_broken",      target: "novgorod",    relation: "dotyczy" },

  // ── Planned: court positions ──
  { source: "court_posadnik",  target: "dec_veche",    relation: "wzmacnia" },
  { source: "court_posadnik",  target: "ilmenian",     relation: "wymaga kultury" },
  { source: "court_tysyatsky", target: "ilmenian",     relation: "wymaga kultury" },
  { source: "court_tysyatsky", target: "d_novgorod",   relation: "wzmacnia levy" },

  // ── Planned: ALT decisions ──
  { source: "dec_republic",   target: "slavic_pagan",  relation: "wymaga wiary" },
  { source: "dec_republic",   target: "k_novgorod",    relation: "zmienia ustroj" },
  { source: "dec_treaty",     target: "dec_republic",  relation: "wymaga" },
  { source: "dec_treaty",     target: "conversion",    relation: "blokuje misje" },

  // ── Planned: exile event → SSP catalyst ──
  { source: "evt_exile",      target: "struggle_ssp",  relation: "catalyst SSP" },
];

export const NOVGOROD_PATHS: GraphPath[] = [
  {
    id: "political",
    label: "Ewolucja polityczna",
    color: "#e6b43c",
    description: "Od plemion poganskich przez wasalstwo po autonomie republiki wiecowej (vanilla + planowane)",
    nodes: ["bk_867", "tribal_to_feudal", "d_novgorod", "conversion", "vassalage", "k_novgorod", "bk_1066", "bk_1178", "bk_1230"],
  },
  {
    id: "territory",
    label: "Hierarchia terytorialna",
    color: "#78909c",
    description: "Prowincje → ksiestwa → krolewstwo → imperium (vanilla)",
    nodes: ["novgorod", "ladoga", "torzhok", "d_novgorod", "pskov", "d_pskov", "beloozero", "d_beloozero", "k_novgorod", "e_russia"],
  },
  {
    id: "veche_system",
    label: "System wiecowy",
    color: "#4caf50",
    description: "Wiec nowogrodzki — decyzja, eventy, pozycje dworskie, modyfikatory (planowane)",
    nodes: ["dec_veche", "evt_bell", "evt_merchants", "evt_last_volkhv", "evt_exile", "court_posadnik", "court_tysyatsky", "mod_freedom", "mod_broken"],
  },
  {
    id: "faith_transition",
    label: "Przemiana wiary",
    color: "#ce93d8",
    description: "Od poganstwa wschodnislowianskiego przez SSP do prawoslawia (vanilla + ALT: Republika Welesowa)",
    nodes: ["slavic_pagan", "struggle_ssp", "bk_867", "conversion", "orthodox", "bk_1066", "dec_republic", "dec_treaty"],
  },
  {
    id: "cultures",
    label: "Mozaika kulturowa",
    color: "#4dd0e1",
    description: "Ilmenianie i Nowogrodzianie — kultury wschodnislowianskie polnocy (vanilla)",
    nodes: ["ilmenian", "novgorodian", "east_slavic", "d_novgorod", "d_pskov", "d_beloozero"],
  },
];
