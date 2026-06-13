export type { NodeType, GraphNode, GraphLink, GraphPath, KingdomGraphData } from "./graph-types";
export { NODE_TYPE_CONFIG, GRID_ROWS, GRID_COLS } from "./graph-types";
import type { GraphNode, GraphLink, GraphPath } from "./graph-types";

export const POLAND_NODES: GraphNode[] = [
  // ═══ ROW 0 — Bookmarks (timeline) ═══
  { id: "bk_867",  label: "867",  type: "bookmark", era: "867",  note: "Poganie, plemienne, niezależne; Siemowit/Lestek/Siemomysł",       row: 0, col: 0 },
  { id: "bk_1066", label: "1066", type: "bookmark", era: "1066", note: "Bolesław II Śmiały, katolicyzm, królestwo od 1025",                row: 0, col: 3 },
  { id: "bk_1178", label: "1178", type: "bookmark", era: "1178", note: "Rozbicie dzielnicowe, wielu Piastów, brak jednego króla",           row: 0, col: 5 },
  { id: "bk_1230", label: "1230", type: "bookmark", era: "1230", note: "Henryk Brodaty / Konrad Mazowiecki, krzyżacy na Mazowszu",          row: 0, col: 7 },

  // ═══ ROW 1 — Vanilla mechanics ═══
  { id: "struggle_ssp",     label: "Struggle of Perun",      type: "mechanic", note: "SSP: pogaństwo zachodniosłow. aktywne 867–~1250; fazy Swarozyc → Perun → zakończenie",        row: 1, col: 0 },
  { id: "tribal_to_feudal", label: "Tribal → Feudal",        type: "mechanic", note: "Przejście ustrojowe: plemiona lechickie → feudalizm (po chrzcie 966)",                        row: 1, col: 1 },
  { id: "conversion",       label: "Konwersja wiary",        type: "mechanic", note: "Pogaństwo → katolicyzm (chrzest Mieszka I, 966)",                                             row: 1, col: 3 },
  { id: "fragmentation",    label: "Rozbicie dzielnicowe",   type: "mechanic", note: "Testament Bolesława Krzywoustego 1138 — podział na dzielnice; sukcesja senioralna",            row: 1, col: 5 },
  { id: "succession",       label: "Sukcesja senioralna",    type: "mechanic", note: "Zasada senioratu: najstarszy Piast dziedziczy Kraków (princeps)",                              row: 1, col: 6 },
  { id: "dejure_drift",     label: "De jure drift",          type: "mechanic", note: "Potencjalny drift: Śląsk (wpływy HRE), Kujawy (między Wielkopolską a Mazowszem)",              row: 1, col: 7 },

  // ═══ ROW 2 — Planned events ═══
  { id: "evt_dobrawa",    label: "Chrześcijańska Oblubienica",  type: "event", planned: true, era: "~965",      note: "sepl_polans.0001 — Dobrawa przybywa na dwór Mieszka",                     row: 2, col: 0 },
  { id: "evt_kupala",     label: "Noc Kupały",                  type: "event", planned: true, era: "cykliczny",  note: "sepl_polans.0002 — Pogańskie obrzędy przetrwałe po chrzcie",               row: 2, col: 1 },
  { id: "evt_gniezno",    label: "Zjazd Gnieźnieński",          type: "event", planned: true, era: "1000",       note: "sepl_polans.0003 — Otton III u grobu św. Wojciecha; arcybiskupstwo",       row: 2, col: 3 },
  { id: "evt_maslaw",     label: "Bunt Masława",                type: "event", planned: true, era: "1037–1047",  note: "sepl_levelb.0001 — Mazowszanie podnoszą bunt przeciw Piastom",             row: 2, col: 5 },
  { id: "evt_legend",     label: "Legenda Piasta Kołodzieja",   type: "event", planned: true, era: "mityczne",   note: "PC1 — Popiel i myszy, Piast gości aniołów, postrzyżyny",                  row: 2, col: 7 },

  // ═══ ROW 3 — Faith + Dynasty ═══
  { id: "slavic_pagan", label: "Pogaństwo zachodniosłow.",  type: "faith",   note: "Lechickie plemiona pogańskie do 966; nurt ludowy trwa znacznie dłużej",                   row: 3, col: 0 },
  { id: "catholic",     label: "Katolicyzm",               type: "faith",   note: "Wiara dominująca od 966 (chrzest Mieszka I)",                                              row: 3, col: 3 },
  { id: "piast",        label: "Piastowie",                 type: "dynasty", note: "Dynastia Piastów — od legendarnego Piasta po rozbicie dzielnicowe i zjednoczenie",          row: 3, col: 5 },
  { id: "goplanie",     label: "Goplanie",                  type: "dynasty", note: "Ród plemienny — Goplanie znad jez. Gopło (Kruszwica); legendarny Popiel",                  row: 3, col: 7 },

  // ═══ ROW 4 — Planned decisions ═══
  { id: "dec_mieszko",   label: "Strategia Mieszka",            type: "decision", planned: true, note: "sepl_mieszko_strategy_decision — major decision: kształtuj politykę chrystianizacji", row: 4, col: 0 },
  { id: "dec_unite",     label: "Zjednocz plemiona lechickie",  type: "decision", planned: true, note: "PC2 — mapowa/tytułowa decyzja standalone (bez Struggle)",                            row: 4, col: 3 },
  { id: "blocked_pagan", label: "Blokada: decyzje SSP",         type: "mechanic", planned: true, note: "Po konwersji: pogańskie decyzje SSP niedostępne; odblokowane przy powrocie",          row: 4, col: 6 },

  // ═══ ROW 5 — Titles ═══
  { id: "k_poland",        label: "k_poland",          type: "title", note: "Królestwo Polskie — niezależne; koronacja 1025 (Bolesław Chrobry)",                     row: 5, col: 3 },
  { id: "d_lesser_poland", label: "d_lesser_poland",   type: "title", note: "Małopolska — Kraków, Sandomierz; stolica senioralna od 1138",                          row: 5, col: 1 },
  { id: "d_greater_poland",label: "d_greater_poland",  type: "title", note: "Wielkopolska — Gniezno, Poznań; kolebka państwa lechickiego",                          row: 5, col: 5 },
  { id: "d_mazovia",       label: "d_mazovia",         type: "title", note: "Mazowsze — Płock, Warszawa, Czersk; odrębność kulturowa mazowiecka",                    row: 5, col: 7 },
  { id: "d_silesia",       label: "d_silesia",         type: "title", note: "Śląsk — Wrocław (Breslau), Legnica; wpływy HRE i Ostsiedlung",                         row: 5, col: 0 },

  // ═══ ROW 6 — Planned modifiers + MaA ═══
  { id: "mod_piast_legacy",    label: "Dziedzictwo Piastów",       type: "modifier", planned: true, note: "sepl_polans_piast_legacy — prestiż dynastii, legitimizacja władzy",              row: 6, col: 0 },
  { id: "mod_christian_counsel", label: "Chrześcijańska rada",     type: "modifier", planned: true, note: "sepl_polans_christian_counsel — +dyplomacja po przybyciu Dobrawy",               row: 6, col: 1 },
  { id: "mod_shallow_baptism", label: "Płytki chrzest",            type: "modifier", planned: true, note: "sepl_shallow_baptism — pogańskie przeżytki w chrystianizowanym ludzie",          row: 6, col: 3 },
  { id: "mod_mazovian_rebel",  label: "Bunt mazowiecki",           type: "modifier", planned: true, note: "sepl_mazovian_rebellion — niestabilność Mazowsza po buncie Masława",             row: 6, col: 5 },
  { id: "maa_druzyna",        label: "Drużyna lechicka",           type: "mechanic", planned: true, note: "PC4 — men-at-arms: elitarna jednostka Piastów",                                 row: 6, col: 7 },

  // ═══ ROW 7 — Cultures + heritage ═══
  { id: "polish",     label: "Polish",     type: "culture", note: "Zachodnioslowiańska, heritage west_slavic — rdzeń Wielkopolski i Małopolski",       row: 7, col: 1 },
  { id: "mazovian",   label: "Mazovian",   type: "culture", note: "Zachodnioslowiańska, heritage west_slavic — odrębna kultura Mazowsza",              row: 7, col: 5 },
  { id: "west_slavic",label: "West Slavic", type: "culture", note: "Heritage — wspólne dla polskich, mazowieckich, czeskich, łużyckich kultur",        row: 7, col: 3 },

  // ═══ ROW 8 — Key provinces + planned buildings ═══
  { id: "gniezno",       label: "Gniezno",           type: "province", note: "Pierwsza stolica — kolebka chrześcijaństwa polskiego; arcybiskupstwo 1000",       row: 8, col: 0 },
  { id: "krakow",        label: "Kraków",            type: "province", note: "Stolica senioralna od 1038; Wawel — centrum władzy Piastów",                     row: 8, col: 2 },
  { id: "plock",         label: "Płock",             type: "province", note: "Stolica Mazowsza; katedra romańska, ośrodek kultury mazowieckiej",                row: 8, col: 4 },
  { id: "poznan",        label: "Poznań",            type: "province", note: "Ostrów Tumski — gród Mieszka I; pierwsza katedra polska",                        row: 8, col: 6 },
  { id: "bld_gniezno",   label: "Katedra gnieźnieńska",   type: "building", planned: true, note: "PC3 — budynek specjalny w Gnieźnie",                        row: 8, col: 1 },
  { id: "bld_wawel",     label: "Wawel",                  type: "building", planned: true, note: "PC3 — budynek specjalny: zamek/katedra na Wawelu",           row: 8, col: 3 },
  { id: "bld_lednica",   label: "Ostrów Lednicki",        type: "building", planned: true, note: "PC3 — budynek specjalny: palatium na wyspie (Gniezno)",      row: 8, col: 5 },
];

export const POLAND_LINKS: GraphLink[] = [
  // ── Vanilla: timeline flow ──
  { source: "bk_867",  target: "bk_1066", relation: "→" },
  { source: "bk_1066", target: "bk_1178", relation: "→" },
  { source: "bk_1178", target: "bk_1230", relation: "→" },

  // ── Vanilla: title hierarchy ──
  { source: "d_lesser_poland",  target: "k_poland", relation: "de jure" },
  { source: "d_greater_poland", target: "k_poland", relation: "de jure" },
  { source: "d_mazovia",        target: "k_poland", relation: "de jure" },
  { source: "d_silesia",        target: "k_poland", relation: "de jure" },

  // ── Vanilla: provinces → duchies ──
  { source: "krakow",  target: "d_lesser_poland",  relation: "stolica" },
  { source: "gniezno", target: "d_greater_poland",  relation: "stolica" },
  { source: "poznan",  target: "d_greater_poland",  relation: "hrabstwo" },
  { source: "plock",   target: "d_mazovia",         relation: "stolica" },

  // ── Vanilla: culture → region / heritage ──
  { source: "polish",   target: "d_lesser_poland",  relation: "region" },
  { source: "polish",   target: "d_greater_poland", relation: "region" },
  { source: "polish",   target: "d_silesia",        relation: "region" },
  { source: "mazovian", target: "d_mazovia",         relation: "region" },
  { source: "polish",   target: "west_slavic",      relation: "heritage" },
  { source: "mazovian", target: "west_slavic",       relation: "heritage" },

  // ── Vanilla: dynasty → title ──
  { source: "piast",    target: "k_poland",          relation: "rządzi" },
  { source: "piast",    target: "d_greater_poland",  relation: "kolebka" },
  { source: "piast",    target: "gniezno",           relation: "stolica" },
  { source: "goplanie", target: "gniezno",           relation: "legendarne siedlisko" },

  // ── Vanilla: faith ↔ bookmarks ──
  { source: "slavic_pagan", target: "bk_867",       relation: "wiara w" },
  { source: "catholic",     target: "bk_1066",      relation: "wiara w" },
  { source: "catholic",     target: "bk_1178",      relation: "wiara w" },
  { source: "catholic",     target: "bk_1230",      relation: "wiara w" },
  { source: "conversion",   target: "slavic_pagan", relation: "z" },
  { source: "conversion",   target: "catholic",     relation: "na" },

  // ── Vanilla/SSP: pogaństwo zachodniosłowiańskie ──
  { source: "struggle_ssp",  target: "slavic_pagan", relation: "system wiary" },
  { source: "struggle_ssp",  target: "bk_867",       relation: "start" },
  { source: "struggle_ssp",  target: "bk_1066",      relation: "aktywny" },

  // ── Vanilla: mechanics ──
  { source: "tribal_to_feudal", target: "bk_867",          relation: "start" },
  { source: "tribal_to_feudal", target: "d_greater_poland", relation: "dotyczy" },
  { source: "fragmentation",    target: "bk_1178",          relation: "aktywne w" },
  { source: "fragmentation",    target: "k_poland",          relation: "rozbija" },
  { source: "fragmentation",    target: "succession",        relation: "ustanawia" },
  { source: "succession",       target: "krakow",            relation: "stolica senioralna" },
  { source: "succession",       target: "d_lesser_poland",   relation: "dzielnica senioralna" },
  { source: "dejure_drift",     target: "d_silesia",         relation: "dotyczy" },

  // ── Vanilla: bookmark → title state ──
  { source: "bk_867",  target: "d_greater_poland", relation: "plemienne" },
  { source: "bk_1066", target: "k_poland",         relation: "królestwo" },
  { source: "bk_1178", target: "k_poland",         relation: "rozbicie" },

  // ── Planned: event chain — chrystianizacja Mieszka ──
  { source: "evt_dobrawa",  target: "conversion",           relation: "realizuje" },
  { source: "evt_dobrawa",  target: "mod_christian_counsel", relation: "nadaje" },
  { source: "evt_dobrawa",  target: "catholic",             relation: "wprowadza" },
  { source: "evt_dobrawa",  target: "slavic_pagan",         relation: "kontekst" },
  { source: "evt_kupala",   target: "slavic_pagan",         relation: "wynika z" },
  { source: "evt_kupala",   target: "mod_shallow_baptism",  relation: "nadaje" },
  { source: "evt_gniezno",  target: "gniezno",              relation: "lokalizacja" },
  { source: "evt_gniezno",  target: "catholic",             relation: "umacnia" },
  { source: "evt_gniezno",  target: "piast",                relation: "prestiż" },

  // ── Planned: Bunt Masława ──
  { source: "evt_maslaw",  target: "d_mazovia",          relation: "dotyczy" },
  { source: "evt_maslaw",  target: "mazovian",           relation: "kontekst kulturowy" },
  { source: "evt_maslaw",  target: "mod_mazovian_rebel", relation: "nadaje" },
  { source: "evt_maslaw",  target: "piast",              relation: "zagraża" },

  // ── Planned: legenda piastowska ──
  { source: "evt_legend",  target: "piast",     relation: "źródło" },
  { source: "evt_legend",  target: "goplanie",  relation: "dotyczy Popiela" },
  { source: "evt_legend",  target: "gniezno",   relation: "kontekst" },

  // ── Planned: decisions ──
  { source: "dec_mieszko",   target: "evt_dobrawa",      relation: "odblokuje" },
  { source: "dec_mieszko",   target: "conversion",       relation: "kształtuje" },
  { source: "dec_mieszko",   target: "mod_piast_legacy", relation: "nadaje" },
  { source: "dec_mieszko",   target: "piast",            relation: "wymaga dynastii" },
  { source: "dec_unite",     target: "k_poland",         relation: "cel" },
  { source: "dec_unite",     target: "d_greater_poland",  relation: "wymaga" },
  { source: "dec_unite",     target: "d_lesser_poland",   relation: "wymaga" },
  { source: "blocked_pagan", target: "struggle_ssp",      relation: "wynika z" },
  { source: "blocked_pagan", target: "conversion",        relation: "blokuje po" },

  // ── Planned: modifiers → vanilla anchors ──
  { source: "mod_piast_legacy",      target: "piast",             relation: "dotyczy" },
  { source: "mod_shallow_baptism",   target: "conversion",        relation: "efekt uboczny" },
  { source: "mod_mazovian_rebel",    target: "d_mazovia",         relation: "dotyczy" },
  { source: "mod_christian_counsel", target: "catholic",          relation: "wzmacnia" },

  // ── Planned: MaA ──
  { source: "maa_druzyna", target: "piast",   relation: "jednostka dynastyczna" },
  { source: "maa_druzyna", target: "polish",  relation: "rekrutacja" },

  // ── Planned: buildings → provinces ──
  { source: "bld_gniezno", target: "gniezno", relation: "lokalizacja" },
  { source: "bld_wawel",   target: "krakow",  relation: "lokalizacja" },
  { source: "bld_lednica",  target: "gniezno", relation: "lokalizacja (okolice)" },
  { source: "bld_gniezno", target: "catholic", relation: "wymaga" },
  { source: "bld_wawel",   target: "piast",    relation: "siedziba" },
];

export const POLAND_PATHS: GraphPath[] = [
  // ── Vanilla paths ──
  {
    id: "political",
    label: "Ewolucja polityczna",
    color: "#e6b43c",
    description: "Od plemion lechickich do rozbicia dzielnicowego (vanilla)",
    nodes: ["bk_867", "tribal_to_feudal", "d_greater_poland", "k_poland", "fragmentation", "succession", "bk_1178", "bk_1230"],
  },
  {
    id: "territory",
    label: "Hierarchia terytorialna",
    color: "#78909c",
    description: "Prowincje → księstwa → królestwo (vanilla)",
    nodes: ["gniezno", "poznan", "d_greater_poland", "krakow", "d_lesser_poland", "plock", "d_mazovia", "d_silesia", "k_poland"],
  },
  {
    id: "dynasty_path",
    label: "Dynastia Piastów",
    color: "#e63946",
    description: "Piastowie — od legendarnego Piasta przez Mieszka po rozbicie (vanilla + planned)",
    nodes: ["goplanie", "evt_legend", "piast", "gniezno", "d_greater_poland", "k_poland", "mod_piast_legacy", "fragmentation"],
  },

  // ── Planned paths ──
  {
    id: "christening",
    label: "Chrystianizacja",
    color: "#ce93d8",
    description: "Chrzest Mieszka I → Dobrawa → Zjazd Gnieźnieński (planowane eventy)",
    nodes: ["slavic_pagan", "dec_mieszko", "evt_dobrawa", "conversion", "mod_christian_counsel", "catholic", "evt_gniezno", "bld_gniezno"],
  },
  {
    id: "pagan_survival",
    label: "Przetrwanie pogaństwa",
    color: "#ff7043",
    description: "Pogańskie obrzędy trwają po chrzcie — Noc Kupały, płytki chrzest (SSP + planned)",
    nodes: ["slavic_pagan", "struggle_ssp", "evt_kupala", "mod_shallow_baptism", "conversion", "blocked_pagan"],
  },
  {
    id: "mazovia_path",
    label: "Mazowsze — odrębność",
    color: "#4db6ac",
    description: "Kultura mazowiecka, bunt Masława, odrębność Mazowsza (planned)",
    nodes: ["mazovian", "d_mazovia", "plock", "evt_maslaw", "mod_mazovian_rebel", "piast"],
  },
  {
    id: "unification",
    label: "Zjednoczenie lechickie",
    color: "#7986cb",
    description: "Decyzja: zjednocz plemiona lechickie w królestwo (planned)",
    nodes: ["dec_unite", "d_greater_poland", "d_lesser_poland", "k_poland", "piast"],
  },
  {
    id: "buildings_path",
    label: "Budowle Piastów",
    color: "#83c84d",
    description: "Planowane budynki specjalne: Gniezno, Wawel, Ostrów Lednicki",
    nodes: ["bld_gniezno", "gniezno", "bld_lednica", "bld_wawel", "krakow"],
  },
];
