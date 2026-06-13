export type { NodeType, GraphNode, GraphLink, GraphPath, KingdomGraphData } from "./graph-types";
export { NODE_TYPE_CONFIG, GRID_ROWS, GRID_COLS } from "./graph-types";
import type { GraphNode, GraphLink, GraphPath } from "./graph-types";

export const BULGARIA_NODES: GraphNode[] = [
  // ═══ ROW 0 — Bookmarks (timeline) ═══
  { id: "bk_867",  label: "867",  type: "bookmark", era: "867",  note: "Borys I — chrystianizacja od 864, wasalstwo bizantyjskie",        row: 0, col: 0 },
  { id: "bk_1066", label: "1066", type: "bookmark", era: "1066", note: "Bułgaria pod Bizancjum — tematyzacja po 1018 (Bazyli II)",        row: 0, col: 3 },
  { id: "bk_1178", label: "1178", type: "bookmark", era: "1178", note: "Bunt Asena i Piotra — odrodzenie Drugiego Carstwa Bułgarskiego",  row: 0, col: 5 },
  { id: "bk_1230", label: "1230", type: "bookmark", era: "1230", note: "Iwan Asen II — hegemonia na Bałkanach, bitwa pod Kłokotnicy",    row: 0, col: 7 },

  // ═══ ROW 1 — Vanilla mechanics ═══
  { id: "tribal_to_feudal", label: "Tribal → Feudal",       type: "mechanic", note: "Przejście ustrojowe Bułgarii — od chanatu do carstwa",               row: 1, col: 0 },
  { id: "conversion",       label: "Konwersja wiary",       type: "mechanic", note: "Pogaństwo → prawosławie (Borys I, 864)",                             row: 1, col: 1 },
  { id: "byz_vassal",       label: "Wasalstwo Bizancjum",   type: "mechanic", note: "Bułgaria wasal/rywale Bizancjum — zmienna relacja 681–1396",         row: 1, col: 3 },
  { id: "dejure_drift",     label: "De jure drift",         type: "mechanic", note: "Przesunięcia de jure między k_bulgaria a e_byzantium",               row: 1, col: 5 },
  { id: "succession",       label: "Sukcesja słowiańska",   type: "mechanic", note: "Confederate partition — typowa dla wczesnośredniowiecznej Bułgarii",  row: 1, col: 7 },

  // ═══ ROW 2 — Planned events (brak — scaffold) ═══

  // ═══ ROW 3 — Faith + Dynasty ═══
  { id: "slavic_pagan", label: "Pogaństwo słowiańskie",     type: "faith",   note: "Wierzenia protobułgarskie i słowiańskie — Tangra/Perun do 864",      row: 3, col: 0 },
  { id: "orthodox",     label: "Prawosławie",               type: "faith",   note: "Wiara dominująca od 864; patriarchat bułgarski od 919",              row: 3, col: 3 },
  { id: "krum",         label: "Dynastia Krumowiczów",      type: "dynasty", note: "Ród Kruma — chanowie/carowie Bułgarii (VII–XI w.)",                  row: 3, col: 5 },
  { id: "cometopuli",   label: "Kometopuli",                type: "dynasty", note: "Dynastia Samuela — Zachodnie Carstwo Bułgarskie (976–1018)",         row: 3, col: 7 },

  // ═══ ROW 4 — Planned decisions (brak — scaffold) ═══

  // ═══ ROW 5 — Titles ═══
  { id: "e_byzantium", label: "e_byzantium",  type: "title", note: "Cesarstwo Bizantyjskie — suweren Bułgarii w 1066",        row: 5, col: 7 },
  { id: "k_bulgaria",  label: "k_bulgaria",   type: "title", note: "Królestwo/Carstwo Bułgarii — tytuł główny",               row: 5, col: 4 },
  { id: "d_turnovo",   label: "d_turnovo",    type: "title", note: "Księstwo Tyrnowa — rdzeń Drugiego Carstwa",               row: 5, col: 1 },
  { id: "d_vidin",     label: "d_vidin",      type: "title", note: "Księstwo Widynia — zachodnia Bułgaria, osobny despotat",  row: 5, col: 3 },
  { id: "d_macedonia", label: "d_macedonia",  type: "title", note: "Księstwo Macedonii — siedziba Kometopulich (Ochryda)",    row: 5, col: 6 },

  // ═══ ROW 6 — Planned modifiers/traits (brak — scaffold) ═══

  // ═══ ROW 7 — Cultures + heritage ═══
  { id: "bulgarian",         label: "Bulgarian",         type: "culture", note: "Południowosłowiańska, heritage south_slavic",                        row: 7, col: 1 },
  { id: "macedonian_slavic", label: "Macedonian Slavic", type: "culture", note: "Południowosłowiańska, heritage south_slavic — region d_macedonia",   row: 7, col: 4 },
  { id: "south_slavic",      label: "South Slavic",      type: "culture", note: "Heritage — wspólne dla Bułgarów, Serbów, Chorwatów, Macedończyków", row: 7, col: 6 },

  // ═══ ROW 8 — Key provinces ═══
  { id: "preslav",       label: "Preslav",       type: "province", note: "Stolica Pierwszego Carstwa po 893 (Symeon Wielki)",     row: 8, col: 0 },
  { id: "philippopolis", label: "Philippopolis", type: "province", note: "Strategiczne miasto — pograniczne z Bizancjum (Płowdiw)", row: 8, col: 2 },
  { id: "vidin",         label: "Vidin",         type: "province", note: "Stolica d_vidin — zachodni bastion",                    row: 8, col: 3 },
  { id: "skopje",        label: "Skopje",        type: "province", note: "Kluczowe miasto Macedonii — pod Kometopulami",          row: 8, col: 5 },
  { id: "varna",         label: "Varna",         type: "province", note: "Port czarnomorski — handel i obrona",                   row: 8, col: 7 },
];

export const BULGARIA_LINKS: GraphLink[] = [
  // ── Vanilla: timeline flow ──
  { source: "bk_867",  target: "bk_1066", relation: "→" },
  { source: "bk_1066", target: "bk_1178", relation: "→" },
  { source: "bk_1178", target: "bk_1230", relation: "→" },

  // ── Vanilla: title hierarchy ──
  { source: "d_turnovo",   target: "k_bulgaria",   relation: "de jure" },
  { source: "d_vidin",     target: "k_bulgaria",   relation: "de jure" },
  { source: "d_macedonia", target: "k_bulgaria",   relation: "de jure" },
  { source: "k_bulgaria",  target: "e_byzantium",  relation: "wasal (1018–1185)" },

  // ── Vanilla: provinces → duchies ──
  { source: "preslav",       target: "d_turnovo",   relation: "stolica" },
  { source: "varna",         target: "d_turnovo",   relation: "hrabstwo" },
  { source: "vidin",         target: "d_vidin",     relation: "stolica" },
  { source: "philippopolis", target: "d_turnovo",   relation: "hrabstwo" },
  { source: "skopje",        target: "d_macedonia", relation: "stolica" },

  // ── Vanilla: culture → region / heritage ──
  { source: "bulgarian",         target: "d_turnovo",    relation: "region" },
  { source: "bulgarian",         target: "d_vidin",      relation: "region" },
  { source: "macedonian_slavic", target: "d_macedonia",  relation: "region" },
  { source: "bulgarian",         target: "south_slavic", relation: "heritage" },
  { source: "macedonian_slavic", target: "south_slavic", relation: "heritage" },

  // ── Vanilla: dynasty → title ──
  { source: "krum",        target: "k_bulgaria", relation: "rządzi (867)" },
  { source: "cometopuli",  target: "k_bulgaria", relation: "rządzi (976–1018)" },
  { source: "krum",        target: "preslav",    relation: "stolica" },
  { source: "cometopuli",  target: "skopje",     relation: "stolica" },

  // ── Vanilla: faith ↔ bookmarks ──
  { source: "slavic_pagan", target: "bk_867",   relation: "przed konwersją" },
  { source: "orthodox",     target: "bk_867",   relation: "wiara w (od 864)" },
  { source: "orthodox",     target: "bk_1066",  relation: "wiara w" },
  { source: "orthodox",     target: "bk_1178",  relation: "wiara w" },
  { source: "orthodox",     target: "bk_1230",  relation: "wiara w" },
  { source: "conversion",   target: "slavic_pagan", relation: "z" },
  { source: "conversion",   target: "orthodox",     relation: "na" },

  // ── Vanilla: bookmark → title state ──
  { source: "bk_867",  target: "k_bulgaria",  relation: "carstwo" },
  { source: "bk_1066", target: "e_byzantium", relation: "pod Bizancjum" },
  { source: "bk_1178", target: "k_bulgaria",  relation: "odrodzenie" },
  { source: "bk_1230", target: "k_bulgaria",  relation: "hegemonia" },

  // ── Vanilla: mechanics ──
  { source: "tribal_to_feudal", target: "bk_867",       relation: "start" },
  { source: "tribal_to_feudal", target: "d_turnovo",    relation: "dotyczy" },
  { source: "byz_vassal",       target: "k_bulgaria",   relation: "dotyczy" },
  { source: "byz_vassal",       target: "e_byzantium",  relation: "suweren" },
  { source: "byz_vassal",       target: "bk_1066",      relation: "aktywne w" },
  { source: "dejure_drift",     target: "d_macedonia",  relation: "dotyczy" },
  { source: "dejure_drift",     target: "k_bulgaria",   relation: "dotyczy" },
  { source: "succession",       target: "k_bulgaria",   relation: "dotyczy" },
  { source: "succession",       target: "krum",         relation: "dotyczy" },

  // ── Dynasty rivalry ──
  { source: "krum",       target: "cometopuli", relation: "następcy" },
  { source: "cometopuli", target: "d_macedonia", relation: "siedziba" },
];

export const BULGARIA_PATHS: GraphPath[] = [
  {
    id: "political",
    label: "Ewolucja polityczna",
    color: "#e6b43c",
    description: "Od Pierwszego Carstwa przez dominację bizantyjską do odrodzenia w 1185 (vanilla)",
    nodes: ["bk_867", "tribal_to_feudal", "k_bulgaria", "byz_vassal", "bk_1066", "e_byzantium", "bk_1178", "bk_1230"],
  },
  {
    id: "territory",
    label: "Hierarchia terytorialna",
    color: "#78909c",
    description: "Prowincje → księstwa → carstwo → cesarstwo (vanilla)",
    nodes: ["preslav", "varna", "d_turnovo", "vidin", "d_vidin", "skopje", "d_macedonia", "k_bulgaria", "e_byzantium"],
  },
  {
    id: "faith",
    label: "Wiara i konwersja",
    color: "#ce93d8",
    description: "Pogaństwo protobułgarskie → prawosławie Borysa I (864) — patriarchat bułgarski (vanilla)",
    nodes: ["slavic_pagan", "conversion", "orthodox", "bk_867", "bk_1066"],
  },
  {
    id: "dynasty",
    label: "Dynastia i sukcesja",
    color: "#e63946",
    description: "Krumowicze → Kometopuli — dwa ośrodki władzy bułgarskiej (vanilla)",
    nodes: ["krum", "preslav", "k_bulgaria", "cometopuli", "skopje", "d_macedonia", "succession"],
  },
  {
    id: "cultures",
    label: "Kultury południowosłowiańskie",
    color: "#4dd0e1",
    description: "Bulgarian i Macedonian Slavic — wspólne dziedzictwo South Slavic (vanilla)",
    nodes: ["bulgarian", "macedonian_slavic", "south_slavic", "d_turnovo", "d_vidin", "d_macedonia"],
  },
];
