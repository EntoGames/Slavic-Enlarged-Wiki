export type { NodeType, GraphNode, GraphLink, GraphPath, KingdomGraphData } from "./graph-types";
export { NODE_TYPE_CONFIG, GRID_ROWS, GRID_COLS } from "./graph-types";
import type { GraphNode, GraphLink, GraphPath } from "./graph-types";

export const SLOVAKIA_NODES: GraphNode[] = [
  // ═══ ROW 0 — Bookmarks (timeline) ═══
  { id: "bk_867",       label: "867",            type: "bookmark", era: "867",  note: "Wielkie Morawy pod Rastislavem, Nitra jako ośrodek plemienny",         row: 0, col: 0 },
  { id: "bk_1066",      label: "1066",           type: "bookmark", era: "1066", note: "Region Nitry jako część Królestwa Węgier, katolicyzm",                 row: 0, col: 3 },
  { id: "bk_1178",      label: "1178",           type: "bookmark", era: "1178", note: "Nitrianské kniežatstvo — autonomia pod koroną węgierską",              row: 0, col: 5 },

  // ═══ ROW 1 — Vanilla mechanics ═══
  { id: "struggle_ssp",     label: "Struggle of Perun",  type: "mechanic", note: "SSP: pogaństwo zachodniosłow. aktywne 867–~1250; fazy Swarozyc → Perun → zakończenie", row: 1, col: 0 },
  { id: "tribal_to_feudal", label: "Tribal → Feudal",    type: "mechanic", note: "Przejście ustrojowe regionu Nitry (867 → feudalizm)",                        row: 1, col: 1 },
  { id: "conversion",       label: "Konwersja wiary",    type: "mechanic", note: "Pogaństwo → katolicyzm; chrzest Pribiny ~830, misja Cyryla i Metodego 863",  row: 1, col: 3 },
  { id: "hungarian_vassal", label: "Wasalstwo węgierskie", type: "mechanic", note: "Region Nitry jako wasal k_hungary od 907+",                                row: 1, col: 5 },
  { id: "dejure_drift",     label: "De jure drift",      type: "mechanic", note: "d_nyitra: de jure k_hungary",                                                row: 1, col: 6 },
  { id: "succession",       label: "Sukcesja",           type: "mechanic", note: "System sukcesji — od senioratu morawskiego do primogenitury węgierskiej",     row: 1, col: 7 },

  // ═══ ROW 2 — Planned events ═══
  { id: "evt_pribina",       label: "Przybycie Pribiny",      type: "event", planned: true, era: "~830",     note: "Pribina — pierwszy znany władca Nitry",                              row: 2, col: 0 },
  { id: "evt_baptism",       label: "Chrzest Pribiny",        type: "event", planned: true, era: "~830",     note: "Chrzest w Traismauer — pierwszy udokumentowany chrzest słow. władcy", row: 2, col: 1 },
  { id: "evt_expulsion",     label: "Wygnanie przez Mojmíra", type: "event", planned: true, era: "833",      note: "Mojmír I wypędza Pribinę — Nitra traci niezależność",                row: 2, col: 2 },
  { id: "evt_cyril",         label: "Misja Cyryla i Metodego", type: "event", planned: true, era: "863",     note: "Liturgia słowiańska, głagolica — wpływ na piśmiennictwo",            row: 2, col: 3 },
  { id: "evt_svatopluk",     label: "Szczyt Świętopełka",     type: "event", planned: true, era: "870–894",  note: "Świętopełk I — szczyt potęgi Wielkich Moraw",                        row: 2, col: 4 },
  { id: "evt_fall_moravia",  label: "Upadek Wielkich Moraw",  type: "event", planned: true, era: "906",      note: "Rozpad po śmierci Świętopełka, najazdy Madziarów",                   row: 2, col: 5 },
  { id: "evt_bratislava",    label: "Bitwa pod Bratysławą",   type: "event", planned: true, era: "907",      note: "Madziarzy rozbijają resztki morawskie — kres Wielkich Moraw",         row: 2, col: 6 },

  // ═══ ROW 3 — Faith + Dynasty ═══
  { id: "slavic_pagan", label: "Pogaństwo zachodniosłow.", type: "faith",   note: "Wiara dominująca w 867; zachodniosłowiańskie pogaństwo z systemem SSP",                  row: 3, col: 0 },
  { id: "catholic",     label: "Katolicyzm",              type: "faith",   note: "Wiara dominująca od ~830 (chrzest Pribiny), oficjalnie od misji Cyryla i Metodego",       row: 3, col: 3 },
  { id: "mojmirovci",   label: "Mojmírovci",              type: "dynasty", note: "Dynastia Wielkich Moraw — Mojmír I, Rastislav, Świętopełk I",                             row: 3, col: 5 },
  { id: "arpad",         label: "Arpadowie",               type: "dynasty", note: "Dynastia węgierska — władcy k_hungary od X w.",                                           row: 3, col: 7 },

  // ═══ ROW 4 — Planned decisions ═══
  { id: "dec_nitra_revival", label: "Odrodzenie Księstwa Nitrzańskiego", type: "decision", planned: true, note: "Odtwórz niezależną Nitrę jako tytuł królestwa",               row: 4, col: 0 },
  { id: "dec_liturgy",       label: "Liturgia słow. vs łacińska",       type: "decision", planned: true, note: "Wybór przy chrystianizacji — wpływa na relacje z Papiestwem i Bizancjum", row: 4, col: 2 },
  { id: "dec_coronation",    label: "Koronacja w Nitrze",               type: "decision", planned: true, note: "Unikalna decyzja prestiżowa — legitymizacja władcy",           row: 4, col: 4 },

  // ═══ ROW 5 — Titles ═══
  { id: "e_carpathia",  label: "e_carpathia",    type: "title", note: "Imperium Karpat — potencjalny suweren de jure",                  row: 5, col: 7 },
  { id: "k_hungary",    label: "k_hungary",      type: "title", note: "Królestwo Węgier — suweren regionu Nitry od 907+",               row: 5, col: 4 },
  { id: "d_nyitra",     label: "d_nyitra",       type: "title", note: "Księstwo Nitry — serce Księstwa Nitrzańskiego, rdzeń modu",       row: 5, col: 1 },
  { id: "d_pressburg",  label: "d_pressburg",    type: "title", note: "Księstwo Bratysławy / Preszburga — zachodnia Słowacja",           row: 5, col: 6 },

  // ═══ ROW 6 — Planned modifiers ═══
  { id: "mod_great_moravia", label: "Dziedzictwo Wielkich Moraw", type: "modifier", planned: true, note: "+prestiż za kontrolę dawnych terytoriów morawskich",          row: 6, col: 0 },
  { id: "mod_nitra_piety",   label: "Ośrodek chrześcijański",    type: "modifier", planned: true, note: "+pobożność za kontrolę Nitry — najstarszy ośrodek chrztu",     row: 6, col: 2 },
  { id: "mod_unification",   label: "Zjednoczenie morawsko-nitr.", type: "modifier", planned: true, note: "+prestiż za zjednoczenie regionów Nitry i Moraw",             row: 6, col: 4 },
  { id: "tenet_liturgy",     label: "Liturgia słowiańska",       type: "tenet",    planned: true, note: "Wspólna z Czechami (sebp_) — wybór liturgii przy chrystianizacji", row: 6, col: 6 },

  // ═══ ROW 7 — Cultures + heritage ═══
  { id: "slovak",       label: "Slovak",         type: "culture", note: "Zachodnioslowiańska, heritage west_slavic",                      row: 7, col: 1 },
  { id: "nitrianians",  label: "Nitrianians",    type: "culture", note: "Kultura SE — główna kultura regionu d_nyitra",                  row: 7, col: 3 },
  { id: "west_slavic",  label: "West Slavic",    type: "culture", note: "Heritage — wspólne dla Czech, Słowaków, Polski, Łużyc",         row: 7, col: 5 },
  { id: "hungarian",    label: "Hungarian",      type: "culture", note: "Kultura madziarskich najeźdźców — od 907+ dominująca politycznie", row: 7, col: 7 },

  // ═══ ROW 8 — Key provinces ═══
  { id: "nyitra",       label: "Nyitra",          type: "province", note: "Stolica Księstwa Nitrzańskiego — serce modu",                  row: 8, col: 0 },
  { id: "poszony",      label: "Poszony",         type: "province", note: "Bratysława / Preszburg — bitwa 907, zachodnia brama",          row: 8, col: 2 },
  { id: "bars",         label: "Bars",            type: "province", note: "Hrabstwo górnicze — centralna Słowacja",                       row: 8, col: 4 },
  { id: "trenscen",     label: "Trenscen",        type: "province", note: "Trenczyn — północno-zachodnia Słowacja, pogranicze morawskie", row: 8, col: 6 },
];

export const SLOVAKIA_LINKS: GraphLink[] = [
  // ── Vanilla: timeline flow ──
  { source: "bk_867",  target: "bk_1066", relation: "→" },
  { source: "bk_1066", target: "bk_1178", relation: "→" },

  // ── Vanilla: title hierarchy ──
  { source: "d_nyitra",    target: "k_hungary",   relation: "de jure" },
  { source: "d_pressburg", target: "k_hungary",   relation: "de jure" },
  { source: "k_hungary",   target: "e_carpathia", relation: "de jure" },

  // ── Vanilla: provinces → duchies ──
  { source: "nyitra",   target: "d_nyitra",    relation: "stolica" },
  { source: "bars",     target: "d_nyitra",    relation: "hrabstwo" },
  { source: "trenscen", target: "d_nyitra",    relation: "hrabstwo" },
  { source: "poszony",  target: "d_pressburg", relation: "stolica" },

  // ── Vanilla: culture → region / heritage ──
  { source: "nitrianians", target: "d_nyitra",    relation: "region" },
  { source: "slovak",      target: "d_nyitra",    relation: "region" },
  { source: "slovak",      target: "west_slavic", relation: "heritage" },
  { source: "nitrianians", target: "west_slavic", relation: "heritage" },
  { source: "hungarian",   target: "k_hungary",   relation: "dominacja od 907" },

  // ── Vanilla: dynasty → title ──
  { source: "mojmirovci", target: "d_nyitra",    relation: "rządzi (867)" },
  { source: "mojmirovci", target: "nyitra",      relation: "stolica" },
  { source: "arpad",      target: "k_hungary",   relation: "rządzi (1000+)" },

  // ── Vanilla: faith ↔ bookmarks ──
  { source: "slavic_pagan", target: "bk_867",       relation: "wiara w" },
  { source: "catholic",     target: "bk_1066",      relation: "wiara w" },
  { source: "catholic",     target: "bk_1178",      relation: "wiara w" },
  { source: "conversion",   target: "slavic_pagan", relation: "z" },
  { source: "conversion",   target: "catholic",     relation: "na" },

  // ── Vanilla/SSP: pogaństwo zachodniosłowiańskie ──
  { source: "struggle_ssp",  target: "slavic_pagan", relation: "system wiary" },
  { source: "struggle_ssp",  target: "bk_867",       relation: "start" },

  // ── Vanilla: bookmark → title state ──
  { source: "bk_867",       target: "d_nyitra",      relation: "plemienne" },
  { source: "bk_1066",      target: "k_hungary",     relation: "wasal" },
  { source: "bk_1178",      target: "k_hungary",     relation: "autonomia" },

  // ── Vanilla: mechanics ──
  { source: "dejure_drift",     target: "d_nyitra",      relation: "dotyczy" },
  { source: "hungarian_vassal", target: "k_hungary",     relation: "dotyczy" },
  { source: "hungarian_vassal", target: "d_nyitra",      relation: "wasal" },
  { source: "tribal_to_feudal", target: "bk_867",        relation: "start" },
  { source: "tribal_to_feudal", target: "d_nyitra",      relation: "dotyczy" },
  { source: "succession",       target: "k_hungary",     relation: "dotyczy" },

  // ── Planned: event chain — Era Pribiny ──
  { source: "evt_pribina",    target: "evt_baptism",     relation: "następuje" },
  { source: "evt_baptism",    target: "evt_expulsion",   relation: "wyzwala" },
  { source: "evt_pribina",    target: "nyitra",          relation: "lokalizacja" },
  { source: "evt_baptism",    target: "conversion",      relation: "realizuje" },
  { source: "evt_baptism",    target: "catholic",        relation: "kontekst" },
  { source: "evt_expulsion",  target: "mojmirovci",      relation: "dotyczy" },

  // ── Planned: event chain — Wielkie Morawy ──
  { source: "evt_cyril",        target: "tenet_liturgy",     relation: "tworzy" },
  { source: "evt_cyril",        target: "dec_liturgy",       relation: "odblokuje" },
  { source: "evt_cyril",        target: "slavic_pagan",      relation: "kontekst" },
  { source: "evt_svatopluk",    target: "mojmirovci",        relation: "dotyczy" },
  { source: "evt_svatopluk",    target: "mod_great_moravia", relation: "nadaje" },
  { source: "evt_fall_moravia", target: "evt_bratislava",    relation: "następuje" },
  { source: "evt_fall_moravia", target: "mojmirovci",        relation: "kres dynastii" },
  { source: "evt_bratislava",   target: "poszony",           relation: "lokalizacja" },
  { source: "evt_bratislava",   target: "hungarian_vassal",  relation: "wyzwala" },

  // ── Planned: decisions → vanilla/planned anchors ──
  { source: "dec_nitra_revival", target: "d_nyitra",          relation: "wymaga" },
  { source: "dec_nitra_revival", target: "nyitra",            relation: "wymaga" },
  { source: "dec_nitra_revival", target: "mod_great_moravia", relation: "powiązany z" },
  { source: "dec_liturgy",       target: "tenet_liturgy",     relation: "wybiera" },
  { source: "dec_liturgy",       target: "catholic",          relation: "wpływa na" },
  { source: "dec_coronation",    target: "nyitra",            relation: "lokalizacja" },
  { source: "dec_coronation",    target: "d_nyitra",          relation: "wymaga" },
  { source: "dec_coronation",    target: "mod_nitra_piety",   relation: "nadaje" },

  // ── Planned: modifiers → vanilla anchors ──
  { source: "mod_great_moravia", target: "d_nyitra",      relation: "dotyczy" },
  { source: "mod_nitra_piety",   target: "nyitra",        relation: "dotyczy" },
  { source: "mod_unification",   target: "d_nyitra",      relation: "wymaga" },
  { source: "mod_unification",   target: "d_pressburg",   relation: "wymaga" },
];

export const SLOVAKIA_PATHS: GraphPath[] = [
  {
    id: "political",
    label: "Ewolucja polityczna",
    color: "#e6b43c",
    description: "Od Księstwa Nitrzańskiego przez Wielkie Morawy po wasalstwo węgierskie (vanilla + planowane)",
    nodes: ["bk_867", "tribal_to_feudal", "d_nyitra", "hungarian_vassal", "k_hungary", "e_carpathia", "succession", "bk_1066", "bk_1178"],
  },
  {
    id: "territory",
    label: "Hierarchia terytorialna",
    color: "#78909c",
    description: "Prowincje → księstwa → królestwo → imperium (vanilla)",
    nodes: ["nyitra", "bars", "trenscen", "d_nyitra", "poszony", "d_pressburg", "k_hungary", "e_carpathia"],
  },
  {
    id: "great_moravia",
    label: "Wielkie Morawy",
    color: "#6ba0d6",
    description: "Cykl Wielkich Moraw — od Pribiny przez szczyt Świętopełka do upadku (planowane eventy)",
    nodes: ["evt_pribina", "evt_baptism", "evt_expulsion", "evt_cyril", "evt_svatopluk", "mod_great_moravia", "evt_fall_moravia", "evt_bratislava"],
  },
  {
    id: "faith_journey",
    label: "Droga wiary",
    color: "#ce93d8",
    description: "Od pogaństwa przez chrzest Pribiny do chrystianizacji — wybór liturgii (vanilla + planowane)",
    nodes: ["slavic_pagan", "struggle_ssp", "conversion", "evt_baptism", "evt_cyril", "dec_liturgy", "tenet_liturgy", "catholic"],
  },
  {
    id: "dynasty_path",
    label: "Dynastie Nitry",
    color: "#e63946",
    description: "Mojmírovci → upadek → Arpadowie — zmiana dynastyczna (vanilla + planowane)",
    nodes: ["mojmirovci", "nyitra", "d_nyitra", "evt_fall_moravia", "arpad", "k_hungary", "hungarian_vassal"],
  },
  {
    id: "nitra_revival",
    label: "Odrodzenie Nitry",
    color: "#4db6ac",
    description: "Odbudowa Księstwa Nitrzańskiego — koronacja, prestiż, autonomia (planowane)",
    nodes: ["dec_nitra_revival", "dec_coronation", "mod_nitra_piety", "mod_unification", "d_nyitra", "nyitra"],
  },
];
