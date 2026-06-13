export type { NodeType, GraphNode, GraphLink, GraphPath, KingdomGraphData } from "./graph-types";
export { NODE_TYPE_CONFIG, GRID_ROWS, GRID_COLS } from "./graph-types";
import type { GraphNode, GraphLink, GraphPath } from "./graph-types";

export const GALICIA_VOLHYNIA_NODES: GraphNode[] = [
  // ═══ ROW 0 — Bookmarks (timeline) ═══
  { id: "bk_867",  label: "867",  type: "bookmark", era: "867",  note: "Poganie, plemienne, wasale e_russia",           row: 0, col: 0 },
  { id: "bk_1066", label: "1066", type: "bookmark", era: "1066", note: "Rurykowicze, prawosławie, rozbicie dzielnicowe", row: 0, col: 3 },
  { id: "bk_1178", label: "1178", type: "bookmark", era: "1178", note: "Zjednoczone Halicko-Wołyńskie pod Romanem",     row: 0, col: 5 },
  { id: "bk_1230", label: "1230", type: "bookmark", era: "1230", note: "Daniił Romanowicz, odbudowa po najazdach",      row: 0, col: 7 },

  // ═══ ROW 1 — Vanilla mechanics ═══
  { id: "struggle_ssp",     label: "Struggle of Perun",  type: "mechanic", note: "SSP: pogaństwo wschodniosłow. aktywne 867–~1050; fazy Swarozyc → Perun → zakończenie", row: 1, col: 0 },
  { id: "tribal_to_feudal", label: "Tribal → Feudal",    type: "mechanic", note: "Przejście ustrojowe (867 → późniejsze daty)",                                        row: 1, col: 1 },
  { id: "conversion",       label: "Konwersja wiary",    type: "mechanic", note: "Pogaństwo → prawosławie (~988, chrzest Rusi)",                                        row: 1, col: 3 },
  { id: "dejure_drift",     label: "De jure drift",      type: "mechanic", note: "d_cherven_cities: potencjalny drift między k_galicia_volhynia a k_poland",            row: 1, col: 5 },
  { id: "succession",       label: "Sukcesja dzielnicowa", type: "mechanic", note: "Rota system — seniorat Rurykowiczów, podział między synów",                        row: 1, col: 7 },

  // ═══ ROW 2 — Planned events ═══
  { id: "evt_zjazd",         label: "Zjazd Możnych Halicza",   type: "event", planned: true, note: "segv_volhynian.0001 — cykliczny co 10 lat; bojarzy vs kniaź, wybór: posłuchaj lub zignoruj",       row: 2, col: 0 },
  { id: "evt_kupiec",        label: "Kupiec ze Lwowa",         type: "event", planned: true, note: "segv_volhynian.0002 — kupiec łaciński/grecki chce założyć faktorię; gold vs presja konwersyjna",   row: 2, col: 2 },
  { id: "evt_volkhv",        label: "Wolchwowie z Dwóch Stron", type: "event", planned: true, note: "Dialog odłamów Rodzimowierczy + Peruniczny w Haliczu; sojusz, schizma lub synkretyzm",            row: 2, col: 4 },
  { id: "evt_tatar",         label: "Tatarzy niszczą Halicz",  type: "event", planned: true, era: "1240+", note: "Chaos tatarski = powrót do starych praktyk; +Fervor, modifier Resztki Wiary",       row: 2, col: 5 },
  { id: "evt_papal_crown",   label: "Korona od papieża",       type: "event", planned: true, era: "1253",  note: "Daniił przyjmuje koronę od Innocentego IV — nominalnie, realnie lub odrzucenie",    row: 2, col: 7 },

  // ═══ ROW 3 — Faith + Dynasty ═══
  { id: "slavic_pagan", label: "Pogaństwo słowiańskie",    type: "faith",   note: "Wiara w 867 — wschodniosłowiańskie pogaństwo",                        row: 3, col: 0 },
  { id: "orthodox",     label: "Prawosławie",              type: "faith",   note: "Wiara dominująca od ~988 (chrzest Rusi Kijowskiej)",                  row: 3, col: 3 },
  { id: "catholic",     label: "Katolicyzm",              type: "faith",   note: "Presja z zachodu (Polska, Węgry) — potencjalna konwersja Daniła 1253", row: 3, col: 5 },
  { id: "rurikid",      label: "Rurykowicze",             type: "dynasty", note: "Dynastia panująca — linia wołyńska, potem Romanowicze",               row: 3, col: 7 },

  // ═══ ROW 4 — Planned decisions ═══
  { id: "dec_border_watch", label: "Straż Pogranicza",       type: "decision", planned: true, note: "segv_border_watch_decision — sieć obronna Galicji; wymaga volhynian + ≥3 hrabstwa; +defensywa, -development", row: 4, col: 0 },
  { id: "dec_volkhv_corr",  label: "Korytarz Wolchwów",      type: "decision", planned: true, note: "Galicja jako strefa buforowa; wolchwowie z innych regionów mogą tu uciec; +tradycja, +sieć",                  row: 4, col: 3 },

  // ═══ ROW 5 — Titles ═══
  { id: "e_russia",          label: "e_russia",              type: "title", note: "Cesarstwo Rusi — suweren Galicji-Wołynia",                            row: 5, col: 7 },
  { id: "k_galicia_volhynia", label: "k_galicia_volhynia",   type: "title", note: "Królestwo Halicko-Wołyńskie — zjednoczone 1199 przez Romana",        row: 5, col: 4 },
  { id: "d_halych",          label: "d_halych",              type: "title", note: "Księstwo Halickie — rdzeń: Halych, Lviv, Kolomyia",                   row: 5, col: 1 },
  { id: "d_volhynia",        label: "d_volhynia",           type: "title", note: "Księstwo Wołyńskie — rdzeń: Volodymyr, Lutsk",                        row: 5, col: 3 },
  { id: "d_cherven_cities",  label: "d_cherven_cities",     type: "title", note: "Grody Czerwieńskie — pogranicze polsko-ruskie, sporne od 981",        row: 5, col: 6 },

  // ═══ ROW 6 — Planned modifiers ═══
  { id: "mod_boyar_power",   label: "Boyar Power",            type: "modifier", planned: true, note: "segv_modifier_boyar_power — pasywny: +5 powerful vassal opinion, -5 authority; silni bojarzy ograniczają kniazia", row: 6, col: 0 },
  { id: "mod_dual_frontier", label: "Dual Frontier",          type: "modifier", planned: true, note: "segv_modifier_dual_frontier — -20% missionary efficiency; dwa kościoły się neutralizują",                        row: 6, col: 2 },
  { id: "mod_western_gate",  label: "Zachodnia Brama",        type: "modifier", planned: true, note: "segv_modifier_western_gate — punkt transferu tradycji; +1 poziom sieci wolchwów",                                row: 6, col: 4 },
  { id: "mod_syncretism",    label: "Synkretyzm Pogranicza",  type: "modifier", planned: true, note: "segv_modifier_borderland_syncretism — Harmony zamiast Descent przy konwersji w strefie pogranicza",              row: 6, col: 6 },

  // ═══ ROW 7 — Cultures + heritage ═══
  { id: "volhynian",     label: "Volhynian",      type: "culture", note: "Wschodniosłowiańska, heritage east_slavic — główna kultura królestwa",    row: 7, col: 1 },
  { id: "white_croatian", label: "White Croatian", type: "culture", note: "Wschodniosłowiańska, heritage east_slavic — kultura historyczna Galicji", row: 7, col: 3 },
  { id: "east_slavic",   label: "East Slavic",    type: "culture", note: "Heritage — wspólne dla Wołynia, Rusi, Nowogrodu",                        row: 7, col: 5 },

  // ═══ ROW 8 — Key provinces ═══
  { id: "halych",     label: "Halych",     type: "province", note: "Stolica księstwa halickiego — centrum bojarów galicyjskich",       row: 8, col: 0 },
  { id: "lviv",       label: "Lviv",       type: "province", note: "Centrum handlowe między wschodem a zachodem — faktorii kupieckie", row: 8, col: 2 },
  { id: "volodymyr",  label: "Volodymyr",  type: "province", note: "Stolica Wołynia — siedziba linii wołyńskiej Rurykowiczów",        row: 8, col: 4 },
  { id: "kholm",      label: "Kholm",      type: "province", note: "Grody Czerwieńskie — pogranicze z Polską, sporne od 981",         row: 8, col: 5 },
  { id: "peremyshl",  label: "Peremyshl",  type: "province", note: "Pogranicze z Węgrami — strategiczny punkt obronny",               row: 8, col: 7 },
];

export const GALICIA_VOLHYNIA_LINKS: GraphLink[] = [
  // ── Vanilla: timeline flow ──
  { source: "bk_867",  target: "bk_1066", relation: "→" },
  { source: "bk_1066", target: "bk_1178", relation: "→" },
  { source: "bk_1178", target: "bk_1230", relation: "→" },

  // ── Vanilla: title hierarchy ──
  { source: "d_halych",         target: "k_galicia_volhynia", relation: "de jure" },
  { source: "d_volhynia",       target: "k_galicia_volhynia", relation: "de jure" },
  { source: "d_cherven_cities", target: "k_galicia_volhynia", relation: "de jure" },
  { source: "k_galicia_volhynia", target: "e_russia",         relation: "de jure" },

  // ── Vanilla: provinces → duchies ──
  { source: "halych",    target: "d_halych",         relation: "stolica" },
  { source: "lviv",      target: "d_halych",         relation: "hrabstwo" },
  { source: "volodymyr", target: "d_volhynia",       relation: "stolica" },
  { source: "kholm",     target: "d_cherven_cities", relation: "hrabstwo" },
  { source: "peremyshl", target: "d_halych",         relation: "hrabstwo" },

  // ── Vanilla: culture → region / heritage ──
  { source: "volhynian",      target: "d_volhynia",   relation: "region" },
  { source: "volhynian",      target: "d_halych",      relation: "region" },
  { source: "white_croatian", target: "d_halych",      relation: "region" },
  { source: "volhynian",      target: "east_slavic",   relation: "heritage" },
  { source: "white_croatian", target: "east_slavic",   relation: "heritage" },

  // ── Vanilla: dynasty → title ──
  { source: "rurikid", target: "k_galicia_volhynia", relation: "rządzi" },
  { source: "rurikid", target: "d_volhynia",         relation: "rządzi" },
  { source: "rurikid", target: "d_halych",           relation: "rządzi" },

  // ── Vanilla: faith ↔ bookmarks ──
  { source: "slavic_pagan", target: "bk_867",  relation: "wiara w" },
  { source: "orthodox",     target: "bk_1066", relation: "wiara w" },
  { source: "orthodox",     target: "bk_1178", relation: "wiara w" },
  { source: "orthodox",     target: "bk_1230", relation: "wiara w" },
  { source: "conversion",  target: "slavic_pagan", relation: "z" },
  { source: "conversion",  target: "orthodox",     relation: "na" },

  // ── Vanilla/SSP: pogaństwo ──
  { source: "struggle_ssp",  target: "slavic_pagan", relation: "system wiary" },
  { source: "struggle_ssp",  target: "bk_867",       relation: "start" },

  // ── Vanilla: bookmark → title state ──
  { source: "bk_867",  target: "d_halych",            relation: "plemienne" },
  { source: "bk_867",  target: "d_volhynia",          relation: "plemienne" },
  { source: "bk_1178", target: "k_galicia_volhynia",  relation: "zjednoczone" },

  // ── Vanilla: mechanics ──
  { source: "dejure_drift",     target: "d_cherven_cities", relation: "dotyczy" },
  { source: "tribal_to_feudal", target: "bk_867",           relation: "start" },
  { source: "succession",       target: "rurikid",          relation: "system" },
  { source: "succession",       target: "k_galicia_volhynia", relation: "dotyczy" },

  // ── Planned: events → anchors ──
  { source: "evt_zjazd",   target: "halych",        relation: "lokalizacja" },
  { source: "evt_zjazd",   target: "mod_boyar_power", relation: "powiązany z" },
  { source: "evt_zjazd",   target: "volhynian",     relation: "wymaga kultury" },
  { source: "evt_kupiec",  target: "lviv",           relation: "lokalizacja" },
  { source: "evt_kupiec",  target: "conversion",     relation: "presja" },
  { source: "evt_kupiec",  target: "catholic",       relation: "kontekst" },

  // ── Planned: wolchwowie i synkretyzm ──
  { source: "evt_volkhv",      target: "halych",         relation: "lokalizacja" },
  { source: "evt_volkhv",      target: "slavic_pagan",   relation: "dialog odłamów" },
  { source: "evt_volkhv",      target: "mod_syncretism", relation: "prowadzi do" },
  { source: "evt_volkhv",      target: "struggle_ssp",   relation: "powiązany z" },
  { source: "mod_western_gate", target: "struggle_ssp",  relation: "wzmacnia" },
  { source: "mod_western_gate", target: "d_halych",      relation: "dotyczy" },

  // ── Planned: tatarzy i korona papieska ──
  { source: "evt_tatar",       target: "halych",         relation: "lokalizacja" },
  { source: "evt_tatar",       target: "slavic_pagan",   relation: "powrót wiary" },
  { source: "evt_tatar",       target: "bk_1230",        relation: "era" },
  { source: "evt_papal_crown", target: "rurikid",        relation: "dotyczy Daniła" },
  { source: "evt_papal_crown", target: "catholic",       relation: "propozycja" },
  { source: "evt_papal_crown", target: "orthodox",       relation: "napięcie z" },
  { source: "evt_papal_crown", target: "bk_1230",        relation: "era" },

  // ── Planned: decisions → anchors ──
  { source: "dec_border_watch", target: "volhynian",           relation: "wymaga kultury" },
  { source: "dec_border_watch", target: "d_halych",            relation: "dotyczy" },
  { source: "dec_border_watch", target: "peremyshl",           relation: "pogranicze" },
  { source: "dec_volkhv_corr",  target: "slavic_pagan",        relation: "chroni" },
  { source: "dec_volkhv_corr",  target: "mod_western_gate",    relation: "wzmacnia" },
  { source: "dec_volkhv_corr",  target: "k_galicia_volhynia",  relation: "dotyczy" },

  // ── Planned: modifiers → anchors ──
  { source: "mod_boyar_power",   target: "rurikid",            relation: "ogranicza kniazia" },
  { source: "mod_boyar_power",   target: "d_halych",           relation: "dotyczy" },
  { source: "mod_dual_frontier", target: "orthodox",           relation: "neutralizuje" },
  { source: "mod_dual_frontier", target: "catholic",           relation: "neutralizuje" },
  { source: "mod_dual_frontier", target: "d_cherven_cities",   relation: "dotyczy" },
  { source: "mod_syncretism",    target: "d_halych",           relation: "dotyczy" },
  { source: "mod_syncretism",    target: "slavic_pagan",       relation: "zachowuje" },

  // ── Catholic pressure from west ──
  { source: "catholic", target: "mod_dual_frontier", relation: "presja" },
  { source: "orthodox", target: "mod_dual_frontier", relation: "presja" },
];

export const GALICIA_VOLHYNIA_PATHS: GraphPath[] = [
  // ── Vanilla paths ──
  {
    id: "political",
    label: "Ewolucja polityczna",
    color: "#e6b43c",
    description: "Od plemion do królestwa halicko-wołyńskiego (vanilla)",
    nodes: ["bk_867", "tribal_to_feudal", "d_halych", "d_volhynia", "k_galicia_volhynia", "e_russia", "succession", "bk_1178", "bk_1230"],
  },
  {
    id: "territory",
    label: "Hierarchia terytorialna",
    color: "#78909c",
    description: "Prowincje → księstwa → królestwo → cesarstwo (vanilla)",
    nodes: ["halych", "lviv", "peremyshl", "d_halych", "volodymyr", "d_volhynia", "kholm", "d_cherven_cities", "k_galicia_volhynia", "e_russia"],
  },
  {
    id: "faith_journey",
    label: "Droga wiary",
    color: "#ce93d8",
    description: "Pogaństwo → konwersja → prawosławie, z presją katolicyzmu z zachodu (vanilla + planned)",
    nodes: ["slavic_pagan", "struggle_ssp", "conversion", "orthodox", "catholic", "mod_dual_frontier", "evt_papal_crown"],
  },

  // ── Planned paths ──
  {
    id: "boyar_power",
    label: "Potęga bojarów",
    color: "#e63946",
    description: "Bojarzy galicyjscy — cykliczne zjazdy, ograniczenie władzy kniazia (planowane)",
    nodes: ["rurikid", "mod_boyar_power", "evt_zjazd", "halych", "volhynian", "d_halych"],
  },
  {
    id: "borderland",
    label: "Pogranicze zachodnie",
    color: "#4db6ac",
    description: "Galicja jako zachodnia rubież Rusi — Straż Pogranicza, handel, presja konwersyjna (planowane)",
    nodes: ["dec_border_watch", "peremyshl", "d_cherven_cities", "dejure_drift", "evt_kupiec", "lviv", "catholic"],
  },
  {
    id: "pagan_refuge",
    label: "Azyl pogański",
    color: "#ff8a65",
    description: "Galicja jako skrzyżowanie tradycji pogańskich — wolchwowie, synkretyzm, Korytarz (planowane)",
    nodes: ["slavic_pagan", "evt_volkhv", "mod_western_gate", "dec_volkhv_corr", "mod_syncretism", "halych", "struggle_ssp"],
  },
  {
    id: "tatar_crown",
    label: "Tatarzy i korona",
    color: "#7986cb",
    description: "Najazd tatarski 1240 → odbudowa → korona od papieża 1253 (planowane)",
    nodes: ["bk_1230", "evt_tatar", "halych", "evt_papal_crown", "rurikid", "catholic", "orthodox"],
  },
];
