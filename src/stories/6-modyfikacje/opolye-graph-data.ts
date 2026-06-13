export type { NodeType, GraphNode, GraphLink, GraphPath, KingdomGraphData } from "./graph-types";
export { NODE_TYPE_CONFIG, GRID_ROWS, GRID_COLS } from "./graph-types";
import type { GraphNode, GraphLink, GraphPath } from "./graph-types";

export const OPOLYE_NODES: GraphNode[] = [
  // ═══ ROW 0 — Bookmarks ═══
  { id: "bk_867",   label: "867",   type: "bookmark", era: "867",  note: "Wiatycze, plemienne, pogaństwo słowiańskie, wasale e_russia",  row: 0, col: 0 },
  { id: "bk_1066",  label: "1066",  type: "bookmark", era: "1066", note: "Rurykowicze, mieszanka prawosławia i pogaństwa, wasal e_russia", row: 0, col: 3 },
  { id: "bk_1178",  label: "1178",  type: "bookmark", era: "1178", note: "Rozbicie dzielnicowe, ostatnie bastiony pogaństwa u Wiatyczów", row: 0, col: 5 },
  { id: "bk_1230",  label: "1230",  type: "bookmark", era: "1230", note: "Najazd mongolski, upadek struktur plemiennych",               row: 0, col: 7 },

  // ═══ ROW 1 — Vanilla mechanics ═══
  { id: "struggle_ssp",     label: "Struggle of Perun",  type: "mechanic", note: "SSP: pogaństwo wschodniosłow. aktywne 867–~1250; Wiatycze jako ostatni obrońcy",   row: 1, col: 0 },
  { id: "tribal_to_feudal", label: "Tribal → Feudal",    type: "mechanic", note: "Przejście ustrojowe — Opolye pozostaje tribalne najdłużej wśród Rusi",              row: 1, col: 2 },
  { id: "conversion",       label: "Konwersja wiary",    type: "mechanic", note: "Pogaństwo → prawosławie (XII w. — ostatni ze wschodnich Słowian)",                  row: 1, col: 4 },
  { id: "vassalage",        label: "Wasalstwo e_russia", type: "mechanic", note: "k_opolye de jure pod e_russia, Rurykowicze narzucają zwierzchnictwo",              row: 1, col: 6 },

  // ═══ ROW 2 — Planned events ═══
  { id: "evt_zebranie",     label: "Zebranie Opola",         type: "event", planned: true, era: "cykl. 10 lat", note: "seop_vyatichi.0001 — gminna rada Wiatyczów, horyzontalny wybór: tradycja / handel / nowy wódz", row: 2, col: 0 },
  { id: "evt_wolchw",       label: "Wołchw z Polesia",       type: "event", planned: true, era: "cykl. 20 lat", note: "seop_vyatichi.0002 — cross-event z White Ruthenia (sewr_); wołchw przynosi tradycję",          row: 2, col: 3 },

  // ═══ ROW 3 — Faith + Dynasty ═══
  { id: "slavic_pagan", label: "Pogaństwo słowiańskie", type: "faith",   note: "Wiara Wiatyczów w 867; ostatnie wschodnie plemię konwertujące (XII w.)",   row: 3, col: 0 },
  { id: "orthodox",     label: "Prawosławie",           type: "faith",   note: "Wiara dominująca od XII w., narzucana przez Rurykowiczów z Kijowa",        row: 3, col: 3 },
  { id: "rurikid",      label: "Rurykowicze",           type: "dynasty", note: "Dynastia panująca nad k_opolye; narzucają chrześcijaństwo i feudalizm",    row: 3, col: 5 },

  // ═══ ROW 4 — Planned decisions + modifiers ═══
  { id: "dec_sanctuaries",     label: "Sanktuaria Leśne",           type: "decision", planned: true, note: "seop_forest_sanctuaries_decision — ukryte miejsca kultu w lasach Oki; wymaga vyatichi, ≥2 leśne prow., 150 piety", row: 4, col: 1 },
  { id: "mod_vyatichi_memory", label: "Dynastyczna Pamięć",         type: "modifier", planned: true, note: "seop_modifier_vyatichi_memory — dynastyczny, 2 pokolenia; +5 opinion lokalni, +3 Fervor",                        row: 4, col: 4 },

  // ═══ ROW 5 — Titles ═══
  { id: "e_russia",   label: "e_russia",   type: "title", note: "Imperium ruskie — suweren k_opolye",                                   row: 5, col: 7 },
  { id: "k_opolye",   label: "k_opolye",   type: "title", note: "Królestwo Opolye — rdzeń Wiatyczów, lasy Oki",                         row: 5, col: 4 },
  { id: "d_opolye",   label: "d_opolye",   type: "title", note: "Księstwo Opolye — centralna dorzecze Oki",                              row: 5, col: 1 },
  { id: "d_ryazan",   label: "d_ryazan",   type: "title", note: "Księstwo Riazania — południowy człon królestwa",                        row: 5, col: 3 },
  { id: "d_murom",    label: "d_murom",    type: "title", note: "Księstwo Murom — wschodni bastion na granicy ze stepem",                row: 5, col: 5 },

  // ═══ ROW 6 — Planned modifiers ═══
  { id: "mod_oka_forests",       label: "Lasy Oki",               type: "modifier", planned: true, note: "seop_modifier_oka_forests — startowy, pasywny; +30% opór konwersji, -20% development, +10% levy",       row: 6, col: 0 },
  { id: "mod_sanctuaries_active", label: "Sanktuaria aktywne",    type: "modifier", planned: true, note: "seop_forest_sanctuaries_active — efekt decyzji: +opór konwersji, -development; 30 lat lub utrata lasów", row: 6, col: 2 },
  { id: "mod_opole_tradition",   label: "Tradycja Opola",         type: "modifier", planned: true, note: "seop_opole_tradition_active — efekt eventu Zebranie: +Fervor, +opór konwersji na 10 lat",                row: 6, col: 5 },

  // ═══ ROW 7 — Cultures + heritage ═══
  { id: "vyatichian",   label: "Vyatichi",      type: "culture", note: "Wschodniosłowiańska, heritage east_slavic, ethos stoic, tradycje forest_folk + hunters",     row: 7, col: 1 },
  { id: "meshcherian",  label: "Meshchera",     type: "culture", note: "Wschodniosłowiańska z naleciałościami ugrofińskimi, pogranicze leśne",                      row: 7, col: 4 },
  { id: "east_slavic",  label: "East Slavic",   type: "culture", note: "Heritage — wspólne dla Wiatyczów, Meszczeran, Krywiczów, Siewierzan",                      row: 7, col: 6 },

  // ═══ ROW 8 — Key provinces ═══
  { id: "moskva",    label: "Moskva",    type: "province", note: "Przyszła stolica Rusi — w 867 niewielka osada w lasach",              row: 8, col: 0 },
  { id: "suzdal",    label: "Suzdal",    type: "province", note: "Centrum d_opolye — ważny ośrodek religijny i handlowy",              row: 8, col: 2 },
  { id: "ryazan",    label: "Ryazan",    type: "province", note: "Stolica d_ryazan — punkt styku ze stepem",                           row: 8, col: 4 },
  { id: "murom",     label: "Murom",     type: "province", note: "Stolica d_murom — pogranicze z ludami ugrofińskimi",                 row: 8, col: 6 },
];

export const OPOLYE_LINKS: GraphLink[] = [
  // ── Vanilla: timeline flow ──
  { source: "bk_867",  target: "bk_1066", relation: "→" },
  { source: "bk_1066", target: "bk_1178", relation: "→" },
  { source: "bk_1178", target: "bk_1230", relation: "→" },

  // ── Vanilla: title hierarchy ──
  { source: "d_opolye", target: "k_opolye",  relation: "de jure" },
  { source: "d_ryazan", target: "k_opolye",  relation: "de jure" },
  { source: "d_murom",  target: "k_opolye",  relation: "de jure" },
  { source: "k_opolye", target: "e_russia",  relation: "de jure" },

  // ── Vanilla: provinces → duchies ──
  { source: "suzdal",  target: "d_opolye", relation: "hrabstwo" },
  { source: "moskva",  target: "d_opolye", relation: "hrabstwo" },
  { source: "ryazan",  target: "d_ryazan", relation: "stolica" },
  { source: "murom",   target: "d_murom",  relation: "stolica" },

  // ── Vanilla: culture → region / heritage ──
  { source: "vyatichian",  target: "d_opolye",    relation: "region" },
  { source: "vyatichian",  target: "d_ryazan",    relation: "region" },
  { source: "meshcherian", target: "d_murom",     relation: "region" },
  { source: "vyatichian",  target: "east_slavic", relation: "heritage" },
  { source: "meshcherian", target: "east_slavic", relation: "heritage" },

  // ── Vanilla: dynasty → title ──
  { source: "rurikid",  target: "k_opolye",  relation: "rządzi" },
  { source: "rurikid",  target: "e_russia",  relation: "dynastia" },

  // ── Vanilla: faith ↔ bookmarks ──
  { source: "slavic_pagan", target: "bk_867",  relation: "wiara w" },
  { source: "slavic_pagan", target: "bk_1066", relation: "wiara w (częściowo)" },
  { source: "orthodox",     target: "bk_1066", relation: "wiara w (częściowo)" },
  { source: "orthodox",     target: "bk_1178", relation: "wiara w" },
  { source: "orthodox",     target: "bk_1230", relation: "wiara w" },
  { source: "conversion",   target: "slavic_pagan", relation: "z" },
  { source: "conversion",   target: "orthodox",     relation: "na" },

  // ── Vanilla: SSP ──
  { source: "struggle_ssp", target: "slavic_pagan", relation: "system wiary" },
  { source: "struggle_ssp", target: "bk_867",       relation: "start" },
  { source: "struggle_ssp", target: "bk_1066",      relation: "aktywny" },

  // ── Vanilla: bookmark → title state ──
  { source: "bk_867",  target: "d_opolye",  relation: "plemienne" },
  { source: "bk_1066", target: "k_opolye",  relation: "wasalne" },

  // ── Vanilla: mechanics ──
  { source: "tribal_to_feudal", target: "bk_867",   relation: "start" },
  { source: "tribal_to_feudal", target: "d_opolye", relation: "dotyczy" },
  { source: "vassalage",        target: "k_opolye", relation: "dotyczy" },
  { source: "vassalage",        target: "e_russia", relation: "suweren" },

  // ── Planned: Zebranie Opola ──
  { source: "evt_zebranie",     target: "mod_opole_tradition",   relation: "nadaje (opcja A)" },
  { source: "evt_zebranie",     target: "mod_vyatichi_memory",   relation: "nadaje (opcja A)" },
  { source: "evt_zebranie",     target: "vyatichian",            relation: "wymaga kultury" },
  { source: "evt_zebranie",     target: "struggle_ssp",          relation: "wymaga Struggle" },

  // ── Planned: Sanktuaria Leśne ──
  { source: "dec_sanctuaries",       target: "mod_sanctuaries_active", relation: "nadaje" },
  { source: "dec_sanctuaries",       target: "vyatichian",             relation: "wymaga kultury" },
  { source: "dec_sanctuaries",       target: "slavic_pagan",           relation: "wymaga wiary" },
  { source: "mod_sanctuaries_active", target: "d_opolye",              relation: "dotyczy" },
  { source: "mod_sanctuaries_active", target: "d_ryazan",              relation: "dotyczy" },

  // ── Planned: Lasy Oki (startowy modifier) ──
  { source: "mod_oka_forests", target: "d_opolye",  relation: "dotyczy" },
  { source: "mod_oka_forests", target: "d_ryazan",  relation: "dotyczy" },
  { source: "mod_oka_forests", target: "d_murom",   relation: "dotyczy" },
  { source: "mod_oka_forests", target: "vyatichian", relation: "wynika z" },

  // ── Planned: Wołchw z Polesia (cross-event) ──
  { source: "evt_wolchw",  target: "slavic_pagan",  relation: "wzmacnia" },
  { source: "evt_wolchw",  target: "vyatichian",    relation: "dotyczy" },
  { source: "evt_wolchw",  target: "conversion",    relation: "opóźnia" },

  // ── Planned: Dynastyczna Pamięć ──
  { source: "mod_vyatichi_memory", target: "rurikid",     relation: "dynastyczny" },
  { source: "mod_vyatichi_memory", target: "vyatichian",  relation: "wynika z" },
];

export const OPOLYE_PATHS: GraphPath[] = [
  // ── Vanilla paths ──
  {
    id: "political",
    label: "Ewolucja polityczna",
    color: "#e6b43c",
    description: "Od plemion Wiatyczów do wasalnego królestwa pod Rusią (vanilla)",
    nodes: ["bk_867", "tribal_to_feudal", "d_opolye", "vassalage", "k_opolye", "e_russia", "bk_1066", "bk_1230"],
  },
  {
    id: "territory",
    label: "Hierarchia terytorialna",
    color: "#78909c",
    description: "Prowincje → księstwa → królestwo → imperium (vanilla)",
    nodes: ["moskva", "suzdal", "d_opolye", "ryazan", "d_ryazan", "murom", "d_murom", "k_opolye", "e_russia"],
  },
  {
    id: "faith_shift",
    label: "Konwersja wiary",
    color: "#ce93d8",
    description: "Ostatnia konwersja wschodnich Słowian — pogaństwo trwa do XII w. (vanilla + SSP)",
    nodes: ["slavic_pagan", "struggle_ssp", "bk_867", "conversion", "orthodox", "bk_1178"],
  },

  // ── Planned paths ──
  {
    id: "forest_resistance",
    label: "Opór leśny",
    color: "#4caf50",
    description: "Lasy Oki jako bastion pogaństwa — modifier, sanktuaria, tradycja opola (planowane)",
    nodes: ["mod_oka_forests", "dec_sanctuaries", "mod_sanctuaries_active", "evt_zebranie", "mod_opole_tradition", "slavic_pagan"],
  },
  {
    id: "vyatichi_identity",
    label: "Tożsamość Wiatyczów",
    color: "#e63946",
    description: "Kultura Wiatyczów — gminna tradycja, dynastyczna pamięć, cross-event z Polesiem (planowane)",
    nodes: ["vyatichian", "evt_zebranie", "mod_vyatichi_memory", "rurikid", "evt_wolchw", "east_slavic"],
  },
];
