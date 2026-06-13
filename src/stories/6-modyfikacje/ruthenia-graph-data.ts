export type { NodeType, GraphNode, GraphLink, GraphPath, KingdomGraphData } from "./graph-types";
export { NODE_TYPE_CONFIG, GRID_ROWS, GRID_COLS } from "./graph-types";
import type { GraphNode, GraphLink, GraphPath } from "./graph-types";

export const RUTHENIA_NODES: GraphNode[] = [
  // ═══ ROW 0 — Bookmarks (timeline) ═══
  { id: "bk_867",  label: "867",  type: "bookmark", era: "867",  note: "Ruś pogańska, ustrój plemienny, Rurykowicze w Kijowie",  row: 0, col: 0 },
  { id: "bk_1066", label: "1066", type: "bookmark", era: "1066", note: "Izjasław I, prawosławie, rozbicie dzielnicowe Rusi",       row: 0, col: 3 },
  { id: "bk_1178", label: "1178", type: "bookmark", era: "1178", note: "Ruś rozbita, Kijów traci prymat na rzecz Włodzimierza",   row: 0, col: 5 },

  // ═══ ROW 1 — Vanilla mechanics ═══
  { id: "struggle_ssp",     label: "Struggle of Perun",   type: "mechanic", note: "SSP: pogaństwo wschodniosłow. aktywne 867–~1050; fazy Swarozyc → Perun → zakończenie", row: 1, col: 0 },
  { id: "tribal_to_feudal", label: "Tribal → Feudal",     type: "mechanic", note: "Przejście ustrojowe Rusi (867 → późniejsze daty)",       row: 1, col: 1 },
  { id: "conversion",       label: "Konwersja wiary",     type: "mechanic", note: "Pogaństwo → prawosławie (~988, chrzest Rusi)",            row: 1, col: 3 },
  { id: "succession",       label: "Sukcesja senioralna", type: "mechanic", note: "Rota — najstarszy Rurykowicz dziedziczy Kijów",          row: 1, col: 5 },
  { id: "dejure_drift",     label: "De jure drift",       type: "mechanic", note: "Księstwa Rusi mogą dryfować między królestwami",          row: 1, col: 7 },

  // ═══ ROW 2 — Planned events (brak — scaffold) ═══

  // ═══ ROW 3 — Faith + Dynasty ═══
  { id: "slavic_pagan", label: "Pogaństwo wschodniosłow.", type: "faith",   note: "Wiara wschodniosłowiańska do ~988 (Perun, Weles, Swaróg)",       row: 3, col: 0 },
  { id: "orthodox",     label: "Prawosławie",              type: "faith",   note: "Wiara dominująca od 988 (chrzest Włodzimierza)",                 row: 3, col: 3 },
  { id: "rurikid",      label: "Rurykowicze",              type: "dynasty", note: "Dynastia wareska rządząca Rusią od IX w. — linia kijowska",     row: 3, col: 5 },

  // ═══ ROW 4 — Planned decisions (brak — scaffold) ═══

  // ═══ ROW 5 — Titles ═══
  { id: "e_russia",      label: "e_russia",      type: "title", note: "Imperium Rusi — de jure suweren k_ruthenia",                   row: 5, col: 7 },
  { id: "k_ruthenia",    label: "k_ruthenia",     type: "title", note: "Królestwo Rusi (Kijów) — rdzeń: d_kiev, d_pereyaslavl, d_chernigov", row: 5, col: 4 },
  { id: "d_kiev",        label: "d_kiev",         type: "title", note: "Księstwo Kijowa — stolica Rusi, prestiżowy ośrodek",          row: 5, col: 1 },
  { id: "d_pereyaslavl", label: "d_pereyaslavl",  type: "title", note: "Księstwo Perejasławia — wschodnia granica stepowa",            row: 5, col: 2 },
  { id: "d_chernigov",   label: "d_chernigov",    type: "title", note: "Księstwo Czernihowa — potężni Olegowicze, rywal Kijowa",      row: 5, col: 6 },

  // ═══ ROW 6 — Planned modifiers (brak — scaffold) ═══

  // ═══ ROW 7 — Cultures + heritage ═══
  { id: "volhynian",    label: "Volhynian",     type: "culture", note: "Wschodniosłowiańska, heritage east_slavic — Kijów, Perejasław",    row: 7, col: 1 },
  { id: "severian",     label: "Severian",      type: "culture", note: "Wschodniosłowiańska, heritage east_slavic — Czernihów, Siewierz",  row: 7, col: 5 },
  { id: "east_slavic",  label: "East Slavic",   type: "culture", note: "Heritage — wspólne dla Rusi, Nowogrodu, Białorusi",               row: 7, col: 3 },

  // ═══ ROW 8 — Key provinces ═══
  { id: "kiev",               label: "Kiev",               type: "province", note: "Stolica Rusi — prestiżowe hrabstwo, ośrodek władzy",             row: 8, col: 0 },
  { id: "pereyaslavl",        label: "Pereyaslavl",        type: "province", note: "Wschodnia granica — obrona przed stepem",                        row: 8, col: 2 },
  { id: "chernigov",          label: "Chernigov",          type: "province", note: "Stolica potężnego księstwa — rywal Kijowa",                       row: 8, col: 4 },
  { id: "novgorod_seversky",  label: "Novgorod Seversky",  type: "province", note: "Ośrodek Siewierzan — Słowo o wyprawie Igora",                    row: 8, col: 6 },
  { id: "kursk",              label: "Kursk",              type: "province", note: "Południowo-wschodnie pogranicze — styk ze stepem",                row: 8, col: 7 },
];

export const RUTHENIA_LINKS: GraphLink[] = [
  // ── Vanilla: timeline flow ──
  { source: "bk_867",  target: "bk_1066", relation: "→" },
  { source: "bk_1066", target: "bk_1178", relation: "→" },

  // ── Vanilla: title hierarchy ──
  { source: "d_kiev",        target: "k_ruthenia",  relation: "de jure" },
  { source: "d_pereyaslavl", target: "k_ruthenia",  relation: "de jure" },
  { source: "d_chernigov",   target: "k_ruthenia",  relation: "de jure" },
  { source: "k_ruthenia",    target: "e_russia",    relation: "de jure" },

  // ── Vanilla: provinces → duchies ──
  { source: "kiev",              target: "d_kiev",        relation: "stolica" },
  { source: "pereyaslavl",       target: "d_pereyaslavl", relation: "stolica" },
  { source: "chernigov",         target: "d_chernigov",   relation: "stolica" },
  { source: "novgorod_seversky", target: "d_chernigov",   relation: "hrabstwo" },
  { source: "kursk",             target: "d_chernigov",   relation: "hrabstwo" },

  // ── Vanilla: culture → region / heritage ──
  { source: "volhynian", target: "d_kiev",        relation: "region" },
  { source: "volhynian", target: "d_pereyaslavl", relation: "region" },
  { source: "severian",  target: "d_chernigov",   relation: "region" },
  { source: "volhynian", target: "east_slavic",   relation: "heritage" },
  { source: "severian",  target: "east_slavic",   relation: "heritage" },

  // ── Vanilla: dynasty → title ──
  { source: "rurikid", target: "k_ruthenia", relation: "rządzi" },
  { source: "rurikid", target: "d_kiev",     relation: "stolica" },
  { source: "rurikid", target: "kiev",       relation: "siedziba" },

  // ── Vanilla: faith ↔ bookmarks ──
  { source: "slavic_pagan", target: "bk_867",  relation: "wiara w" },
  { source: "orthodox",     target: "bk_1066", relation: "wiara w" },
  { source: "orthodox",     target: "bk_1178", relation: "wiara w" },
  { source: "conversion",   target: "slavic_pagan", relation: "z" },
  { source: "conversion",   target: "orthodox",     relation: "na" },

  // ── Vanilla/SSP: pogaństwo wschodniosłowiańskie ──
  { source: "struggle_ssp", target: "slavic_pagan", relation: "system wiary" },
  { source: "struggle_ssp", target: "bk_867",       relation: "start" },

  // ── Vanilla: bookmark → title state ──
  { source: "bk_867",  target: "d_kiev",     relation: "tytularne" },
  { source: "bk_1066", target: "k_ruthenia", relation: "królestwo" },
  { source: "bk_1178", target: "k_ruthenia", relation: "rozbicie" },

  // ── Vanilla: mechanics ──
  { source: "tribal_to_feudal", target: "bk_867",      relation: "start" },
  { source: "tribal_to_feudal", target: "d_kiev",      relation: "dotyczy" },
  { source: "succession",       target: "k_ruthenia",  relation: "dotyczy" },
  { source: "succession",       target: "rurikid",     relation: "system dynastyczny" },
  { source: "dejure_drift",     target: "k_ruthenia",  relation: "dotyczy" },
  { source: "dejure_drift",     target: "e_russia",    relation: "kontekst" },
];

export const RUTHENIA_PATHS: GraphPath[] = [
  {
    id: "political",
    label: "Ewolucja polityczna",
    color: "#e6b43c",
    description: "Od plemion pogańskich do rozbicia dzielnicowego Rusi (vanilla)",
    nodes: ["bk_867", "tribal_to_feudal", "d_kiev", "conversion", "k_ruthenia", "succession", "bk_1066", "bk_1178"],
  },
  {
    id: "territory",
    label: "Hierarchia terytorialna",
    color: "#78909c",
    description: "Prowincje → księstwa → królestwo → imperium (vanilla)",
    nodes: ["kiev", "pereyaslavl", "d_kiev", "d_pereyaslavl", "chernigov", "novgorod_seversky", "kursk", "d_chernigov", "k_ruthenia", "e_russia"],
  },
  {
    id: "faith_transition",
    label: "Przemiana wiary",
    color: "#ce93d8",
    description: "Od pogaństwa wschodniosłowiańskiego przez SSP do prawosławia (vanilla)",
    nodes: ["slavic_pagan", "struggle_ssp", "bk_867", "conversion", "orthodox", "bk_1066"],
  },
  {
    id: "dynasty_path",
    label: "Dynastia Rurykowiczów",
    color: "#e63946",
    description: "Rurykowicze — wareska dynastia rządząca Rusią (vanilla)",
    nodes: ["rurikid", "kiev", "d_kiev", "k_ruthenia", "succession", "e_russia"],
  },
  {
    id: "cultures",
    label: "Mozaika kulturowa",
    color: "#4dd0e1",
    description: "Wołynianie i Siewierzanie — dwie kultury wschodniosłowiańskie Rusi (vanilla)",
    nodes: ["volhynian", "severian", "east_slavic", "d_kiev", "d_pereyaslavl", "d_chernigov"],
  },
];
