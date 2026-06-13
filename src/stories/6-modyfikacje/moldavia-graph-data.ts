export type { NodeType, GraphNode, GraphLink, GraphPath, KingdomGraphData } from "./graph-types";
export { NODE_TYPE_CONFIG, GRID_ROWS, GRID_COLS } from "./graph-types";
import type { GraphNode, GraphLink, GraphPath } from "./graph-types";

export const MOLDAVIA_NODES: GraphNode[] = [
  // ═══ ROW 0 — Bookmarks (timeline) ═══
  { id: "bk_867",       label: "867",            type: "bookmark", era: "867",  note: "Tivertsi i Ulicze na peryferiach Rusi; poganie, plemienne",       row: 0, col: 0 },
  { id: "bk_1066",      label: "1066",           type: "bookmark", era: "1066", note: "Peryferyjne tereny; mieszanka pogańsko-prawosławna",              row: 0, col: 3 },
  { id: "bk_1230",      label: "1230",           type: "bookmark", era: "1230", note: "Przed inwazją tatarską; Tivertsi w sojuszu ze stepem (ALT)",      row: 0, col: 6 },

  // ═══ ROW 1 — Vanilla mechanics ═══
  { id: "struggle_ssp",     label: "Struggle of Perun",  type: "mechanic", note: "SSP: pogaństwo wschodnioslowiańskie aktywne 867–~1250",                      row: 1, col: 0 },
  { id: "tribal_to_feudal", label: "Tribal → Feudal",    type: "mechanic", note: "Przejście ustrojowe — peryferyjne plemiona mołdawskie",                     row: 1, col: 1 },
  { id: "conversion",       label: "Konwersja wiary",    type: "mechanic", note: "Pogaństwo → prawosławie (wolna, peryferyjna konwersja)",                    row: 1, col: 3 },
  { id: "dejure_drift",     label: "De jure drift",      type: "mechanic", note: "d_wallachia potencjalny drift do k_moldavia",                              row: 1, col: 5 },
  { id: "succession",       label: "Sukcesja",           type: "mechanic", note: "Konfederacyjny podział — standard plemiennych władców",                     row: 1, col: 7 },

  // ═══ ROW 2 — Planned events ═══
  { id: "evt_steppe_ritual",   label: "Pieczyngowie Pytają o Boga",  type: "event", planned: true, era: "X–XI w.",  note: "Wymiana rytuałów z koczownikami; decyzja: synkretyzm Perun/Tengri lub oddzielenie",  row: 2, col: 0 },
  { id: "evt_tatars_unseen",   label: "Tatarzy Nie Widzą Nas",      type: "event", planned: true, era: "1240+",    note: "Tivertsi bez miast = Tatarzy nie mają czego zniszczyć; +Fervor tymczasowy",          row: 2, col: 3 },
  { id: "evt_pact_renewal",    label: "Renegocjacja Paktu",         type: "event", planned: true, era: "XI w.",     note: "Połowcy zastępują Pieczyngów; Tivertsi renegocjują sojusz stepowy",                  row: 2, col: 5 },

  // ═══ ROW 3 — Faith + Dynasty ═══
  { id: "slavic_pagan", label: "Pogaństwo wschodnioslowiańskie",  type: "faith",   note: "Wiara wschodnioslowiańska; Perun, Weles, Mokosz; aktywna 867",            row: 3, col: 0 },
  { id: "orthodox",     label: "Prawosławie",                     type: "faith",   note: "Wiara dominująca od XI–XII w. w regionie mołdawskim",                    row: 3, col: 3 },
  { id: "tengri",       label: "Tengryzm",                        type: "faith",   note: "Wiara koczowników stepowych — Pieczyngowie, Połowcy",                    row: 3, col: 5 },
  { id: "basarab",      label: "Basarab",                         type: "dynasty", note: "Dynastia wołoska — historyczni założyciele Wołoszczyzny",                row: 3, col: 7 },

  // ═══ ROW 4 — Planned decisions ═══
  { id: "dec_brodnik",          label: "Brodnickie Bractwo",       type: "decision", planned: true, note: "Wolni wojownicy rzeczni; protoKozacy; ochrona szlaku bez centrum",                  row: 4, col: 0 },
  { id: "dec_steppe_pact",      label: "Pakt Stepowy",             type: "decision", planned: true, note: "Sojusz z pogańskim koczownikiem; bonus militarny; ryzyko asymilacji kulturowej",     row: 4, col: 3 },

  // ═══ ROW 5 — Titles ═══
  { id: "k_moldavia",   label: "k_moldavia",     type: "title", note: "Królestwo Mołdawii — tytuł de jure; brak suwerena imperialnego",    row: 5, col: 3 },
  { id: "d_moldau",     label: "d_moldau",       type: "title", note: "Księstwo Mołdawii — rdzeń: Suceava, Iasi, Baia",                    row: 5, col: 1 },
  { id: "d_wallachia",  label: "d_wallachia",    type: "title", note: "Księstwo Wołoszczyzny — Galati, Focsani, Bacau",                    row: 5, col: 5 },

  // ═══ ROW 6 — Planned modifiers ═══
  { id: "mod_river_shrines",      label: "Rzeki jako Świątynie",         type: "modifier", planned: true, note: "Brak stałych świątyń; immunity na zniszczenie; -25% Fervor stability",                  row: 6, col: 0 },
  { id: "mod_peripheral_survival", label: "Przetrwanie przez Peryferyjność", type: "modifier", planned: true, note: "Descent wolniejszy im dalej od chrześcijańskiej metropolii",                     row: 6, col: 2 },
  { id: "mod_steppe_syncretism",  label: "Synkretyzm Stepowy",          type: "modifier", planned: true, note: "Hybrid Perun/Tengri po 50+ lat Paktu; +opór konwersji, -czystość tradycji",           row: 6, col: 4 },
  { id: "mod_tatars_invisible",   label: "Anonimowość",                 type: "modifier", planned: true, note: "Stare bogi chronią przez niewidoczność; +Fervor tymczasowy po 1240",                  row: 6, col: 6 },

  // ═══ ROW 7 — Cultures + heritage ═══
  { id: "vlach",            label: "Vlach",              type: "culture", note: "Kultura wołoska, heritage south_slavic/romance, pasterze karpacki",       row: 7, col: 1 },
  { id: "slavic_moldavian", label: "Slavic Moldavian",   type: "culture", note: "Kultura mołdawska, heritage east_slavic; Tivertsi i Ulicze",              row: 7, col: 3 },
  { id: "east_slavic",      label: "East Slavic",        type: "culture", note: "Heritage — wspólne dla Rusi, Mołdawii, Białorusi",                        row: 7, col: 5 },

  // ═══ ROW 8 — Key provinces ═══
  { id: "suceava",       label: "Suceava",         type: "province", note: "Stolica historyczna Mołdawii; rdzeń d_moldau",                 row: 8, col: 0 },
  { id: "iasi",          label: "Iasi",            type: "province", note: "Główne miasto; centrum kulturowe regionu",                     row: 8, col: 2 },
  { id: "chisinau",      label: "Chisinau",        type: "province", note: "Centralna Mołdawia; przeprawa przez Dniestr",                  row: 8, col: 3 },
  { id: "cetatea_alba",  label: "Cetatea Alba",    type: "province", note: "Twierdza nad Morzem Czarnym; punkt handlowy",                  row: 8, col: 5 },
  { id: "galati",        label: "Galati",          type: "province", note: "Ujście Dunaju; klucz do d_wallachia",                          row: 8, col: 7 },
];

export const MOLDAVIA_LINKS: GraphLink[] = [
  // ── Vanilla: timeline flow ──
  { source: "bk_867",  target: "bk_1066", relation: "→" },
  { source: "bk_1066", target: "bk_1230", relation: "→" },

  // ── Vanilla: title hierarchy ──
  { source: "d_moldau",     target: "k_moldavia",   relation: "de jure" },
  { source: "d_wallachia",  target: "k_moldavia",   relation: "de jure" },

  // ── Vanilla: provinces → duchies ──
  { source: "suceava",      target: "d_moldau",     relation: "stolica" },
  { source: "iasi",         target: "d_moldau",     relation: "hrabstwo" },
  { source: "chisinau",     target: "d_moldau",     relation: "hrabstwo" },
  { source: "cetatea_alba", target: "d_wallachia",  relation: "hrabstwo" },
  { source: "galati",       target: "d_wallachia",  relation: "hrabstwo" },

  // ── Vanilla: culture → region / heritage ──
  { source: "slavic_moldavian", target: "d_moldau",     relation: "region" },
  { source: "vlach",            target: "d_wallachia",  relation: "region" },
  { source: "slavic_moldavian", target: "east_slavic",  relation: "heritage" },

  // ── Vanilla: dynasty → title ──
  { source: "basarab",    target: "k_moldavia",   relation: "rządzi" },
  { source: "basarab",    target: "d_wallachia",  relation: "rządzi" },

  // ── Vanilla: faith ↔ bookmarks ──
  { source: "slavic_pagan", target: "bk_867",      relation: "wiara w" },
  { source: "orthodox",     target: "bk_1066",     relation: "wiara w" },
  { source: "orthodox",     target: "bk_1230",     relation: "wiara w" },
  { source: "conversion",   target: "slavic_pagan", relation: "z" },
  { source: "conversion",   target: "orthodox",     relation: "na" },

  // ── Vanilla/SSP: pogaństwo wschodnioslowiańskie ──
  { source: "struggle_ssp",  target: "slavic_pagan", relation: "system wiary" },
  { source: "struggle_ssp",  target: "bk_867",       relation: "start" },

  // ── Vanilla: bookmark → title state ──
  { source: "bk_867",  target: "d_moldau",    relation: "tytularne" },
  { source: "bk_1066", target: "k_moldavia",  relation: "peryferia" },
  { source: "bk_1230", target: "k_moldavia",  relation: "przetrwanie" },

  // ── Vanilla: mechanics ──
  { source: "dejure_drift",     target: "d_wallachia",  relation: "dotyczy" },
  { source: "tribal_to_feudal", target: "bk_867",       relation: "start" },
  { source: "tribal_to_feudal", target: "d_moldau",     relation: "dotyczy" },
  { source: "succession",       target: "k_moldavia",   relation: "dotyczy" },

  // ── Planned: Pakt Stepowy ──
  { source: "dec_steppe_pact",    target: "tengri",           relation: "sojusz z" },
  { source: "dec_steppe_pact",    target: "slavic_pagan",     relation: "chroni" },
  { source: "dec_steppe_pact",    target: "mod_steppe_syncretism", relation: "po 50+ lat" },
  { source: "dec_steppe_pact",    target: "bk_867",           relation: "dostępne od" },

  // ── Planned: Rzeki jako Świątynie ──
  { source: "mod_river_shrines",  target: "slavic_pagan",     relation: "chroni" },
  { source: "mod_river_shrines",  target: "d_moldau",         relation: "dotyczy" },
  { source: "mod_river_shrines",  target: "conversion",       relation: "spowalnia" },

  // ── Planned: Synkretyzm Stepowy ──
  { source: "mod_steppe_syncretism", target: "slavic_pagan",  relation: "modyfikuje" },
  { source: "mod_steppe_syncretism", target: "tengri",        relation: "łączy z" },

  // ── Planned: Brodnickie Bractwo ──
  { source: "dec_brodnik",       target: "d_moldau",          relation: "dotyczy" },
  { source: "dec_brodnik",       target: "slavic_pagan",      relation: "chroni" },
  { source: "dec_brodnik",       target: "cetatea_alba",      relation: "szlak rzeczny" },

  // ── Planned: event chain — wymiana rytuałów ──
  { source: "evt_steppe_ritual",  target: "tengri",            relation: "kontakt z" },
  { source: "evt_steppe_ritual",  target: "slavic_pagan",      relation: "kontekst" },
  { source: "evt_steppe_ritual",  target: "mod_steppe_syncretism", relation: "może nadać" },
  { source: "evt_steppe_ritual",  target: "dec_steppe_pact",   relation: "wynika z" },

  // ── Planned: renegocjacja Paktu ──
  { source: "evt_pact_renewal",  target: "dec_steppe_pact",    relation: "odnawia" },
  { source: "evt_pact_renewal",  target: "bk_1066",            relation: "era" },

  // ── Planned: Tatarzy Nie Widzą Nas ──
  { source: "evt_tatars_unseen", target: "mod_tatars_invisible", relation: "nadaje" },
  { source: "evt_tatars_unseen", target: "bk_1230",             relation: "era" },
  { source: "evt_tatars_unseen", target: "k_moldavia",          relation: "dotyczy" },
  { source: "mod_tatars_invisible", target: "slavic_pagan",     relation: "chroni" },

  // ── Planned: Peryferyjność ──
  { source: "mod_peripheral_survival", target: "k_moldavia",    relation: "dotyczy" },
  { source: "mod_peripheral_survival", target: "conversion",    relation: "spowalnia" },
];

export const MOLDAVIA_PATHS: GraphPath[] = [
  // ── Vanilla paths ──
  {
    id: "political",
    label: "Ewolucja polityczna",
    color: "#e6b43c",
    description: "Od plemion peryferyjnych do przetrwania przez anonimowość (vanilla + ALT)",
    nodes: ["bk_867", "tribal_to_feudal", "d_moldau", "k_moldavia", "succession", "bk_1230"],
  },
  {
    id: "territory",
    label: "Hierarchia terytorialna",
    color: "#78909c",
    description: "Prowincje → księstwa → królestwo (vanilla)",
    nodes: ["suceava", "iasi", "chisinau", "d_moldau", "galati", "cetatea_alba", "d_wallachia", "k_moldavia"],
  },
  {
    id: "faith_evolution",
    label: "Ewolucja wiary",
    color: "#ce93d8",
    description: "Pogaństwo wschodnioslowiańskie → konwersja na prawosławie (vanilla)",
    nodes: ["slavic_pagan", "struggle_ssp", "conversion", "orthodox", "bk_867", "bk_1066"],
  },

  // ── Planned paths ──
  {
    id: "steppe_pact",
    label: "Pakt Stepowy",
    color: "#e63946",
    description: "Sojusz z koczownikami → synkretyzm Perun/Tengri → przetrwanie (planowane ALT)",
    nodes: ["dec_steppe_pact", "tengri", "evt_steppe_ritual", "mod_steppe_syncretism", "evt_pact_renewal", "slavic_pagan"],
  },
  {
    id: "river_defense",
    label: "Obrona rzeczna",
    color: "#4db6ac",
    description: "Rzeki jako linie obrony i rozproszone świątynie — Brodnickie Bractwo (planowane)",
    nodes: ["mod_river_shrines", "dec_brodnik", "d_moldau", "cetatea_alba", "slavic_pagan"],
  },
  {
    id: "invisibility",
    label: "Przetrwanie przez niewidoczność",
    color: "#ff8a65",
    description: "Peryferyjność + brak miast = Tatarzy omijają Mołdawię (planowane ALT 1240+)",
    nodes: ["mod_peripheral_survival", "evt_tatars_unseen", "mod_tatars_invisible", "k_moldavia", "bk_1230"],
  },
];
