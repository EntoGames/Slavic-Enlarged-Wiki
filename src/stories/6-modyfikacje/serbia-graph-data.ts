export type { NodeType, GraphNode, GraphLink, GraphPath, KingdomGraphData } from "./graph-types";
export { NODE_TYPE_CONFIG, GRID_ROWS, GRID_COLS } from "./graph-types";
import type { GraphNode, GraphLink, GraphPath } from "./graph-types";

export const SERBIA_NODES: GraphNode[] = [
  // ═══ ROW 0 — Bookmarks ═══
  { id: "bk_867",  label: "867",  type: "bookmark", era: "867",  note: "Pogańsko-prawosławna Serbia, plemiona, wasal Bizancjum (nominalny)", row: 0, col: 0 },
  { id: "bk_1066", label: "1066", type: "bookmark", era: "1066", note: "Wielki Župan Raszki, prawosławie, wasal e_byzantium",                row: 0, col: 3 },
  { id: "bk_1178", label: "1178", type: "bookmark", era: "1178", note: "Stefan Nemanja, jednoczenie żup, przed autokefalią",                row: 0, col: 5 },

  // ═══ ROW 1 — Vanilla mechanics ═══
  { id: "struggle_ssp",     label: "Struggle of Perun",     type: "mechanic", note: "SSP: pogaństwo południowosłow. w regionie serbskim; fazy Swarozyc → Storm → zakończenie", row: 1, col: 0 },
  { id: "tribal_to_feudal", label: "Tribal → Feudal",       type: "mechanic", note: "Przejście ustrojowe Serbii (867 → późniejsze daty)",       row: 1, col: 1 },
  { id: "conversion",       label: "Konwersja wiary",       type: "mechanic", note: "Pogaństwo → prawosławie (~870, chrzest Mutimira)",         row: 1, col: 3 },
  { id: "byz_vassal",       label: "Wasalstwo Bizancjum",   type: "mechanic", note: "k_serbia wasal e_byzantium — nominalny suzeren",           row: 1, col: 5 },
  { id: "succession",       label: "Sukcesja župańska",     type: "mechanic", note: "Konfederacyjna partycja — bracia, bratankowie, rywalizacja", row: 1, col: 7 },

  // ═══ ROW 2 — Planned events ═══
  { id: "evt_papal_crown",    label: "Korona z Rzymu",           type: "event", planned: true, era: "1077+",  note: "Event-chain: doniesienia o papieskiej koronie Michała z Zety — 3 eventy", row: 2, col: 0 },
  { id: "evt_brother_part",   label: "Podział braci",            type: "event", planned: true, era: "~1166",  note: "Czterech braci dzieli Serbię; fork: centralizacja (HIST) lub konfederacja (ALT)", row: 2, col: 2 },
  { id: "evt_ras_investiture", label: "Inwestytura biskupa Rasu", type: "event", planned: true, era: "867+",  note: "Koronacja/inwestytura przez biskupa Rasu; zależy od relacji z Konstantynopolem", row: 2, col: 4 },
  { id: "evt_slava",          label: "Kult Slavy",               type: "event", planned: true, era: "1166+",  note: "Kult przodków (Slava) wzmacnia się bez presji kościelnej; +Fervor rocznie", row: 2, col: 6 },

  // ═══ ROW 3 — Faith + Dynasty ═══
  { id: "slavic_pagan", label: "Pogaństwo południowosłow.", type: "faith",   note: "Południowa Słowiańszczyzna pogańska; dvoeverie w górach Raszki trwa przez wieki", row: 3, col: 0 },
  { id: "orthodox",     label: "Prawosławie",              type: "faith",   note: "Wiara dominująca od ~870 (chrzest Mutimira); Diecezja Ras",                      row: 3, col: 3 },
  { id: "catholic",     label: "Katolicyzm",              type: "faith",   note: "Wiara Zety/Duklji; Arcybiskupstwo Baru 1089; papieska korona 1077",               row: 3, col: 5 },
  { id: "vlastimirovic", label: "Vlastimirovici",          type: "dynasty", note: "Pierwsza dynastia serbska (IX–X w.); wielcy župani Raszki",                       row: 3, col: 6 },
  { id: "nemanjic",     label: "Nemanjici",                type: "dynasty", note: "Dynastia od 1166; Stefan Nemanja → Królestwo Serbii → Imperium Duszana",          row: 3, col: 7 },

  // ═══ ROW 4 — Planned decisions ═══
  { id: "dec_incorporate_zeta", label: "Inkorporacja Zety",       type: "decision", planned: true, era: "1101+", note: "Inkorporacja Zety po upadku Vojislavljiciów; trwały modifier latin_enclave", row: 4, col: 0 },
  { id: "dec_orient_east",     label: "Orientacja wschodnia",    type: "decision", planned: true,               note: "Formalny wybór orbity Konstantynopola; 25-letni cooldown; wymaga prawosławia", row: 4, col: 2 },
  { id: "dec_orient_west",     label: "Orientacja zachodnia",    type: "decision", planned: true,               note: "Formalny wybór orbity Rzymu; 25-letni cooldown; wymaga katolicyzmu lub enklawy", row: 4, col: 4 },
  { id: "dec_zupa_confed",     label: "Konfederacja żup",        type: "decision", planned: true, era: "1166+", note: "ALT: Nemanja rezygnuje z centralizacji; -centralizacja, +autonomia lokalna",   row: 4, col: 6 },

  // ═══ ROW 5 — Titles ═══
  { id: "e_byzantium", label: "e_byzantium",  type: "title", note: "Cesarstwo Bizantyńskie — suweren Serbii",                     row: 5, col: 7 },
  { id: "k_serbia",    label: "k_serbia",     type: "title", note: "Królestwo Serbii — tytuł župański, potem królewski (1217)",    row: 5, col: 4 },
  { id: "d_rashka",    label: "d_rashka",     type: "title", note: "Księstwo Raszki — rdzeń: Ras, Kruševac, Arilje",               row: 5, col: 1 },
  { id: "d_dioclea",   label: "d_dioclea",    type: "title", note: "Księstwo Duklji/Zety — Skadar, Antivari, katolickie centrum",  row: 5, col: 3 },
  { id: "d_bosnia",    label: "d_bosnia",     type: "title", note: "Księstwo Bośni — Visegrád, Goražde, pogranicze",               row: 5, col: 5 },

  // ═══ ROW 6 — Planned modifiers ═══
  { id: "mod_dual_orbit",    label: "Podwójna orbita",       type: "modifier", planned: true, note: "Stałe napięcie Raszka/Zeta: bonus wschód vs zachód; -5 opinion od obu jeśli brak wyboru", row: 6, col: 0 },
  { id: "mod_latin_enclave", label: "Łacińska enklawa",      type: "modifier", planned: true, note: "Po inkorporacji Zety: katolicka diecezja Baru trwa; coroczna presja konwersji",           row: 6, col: 2 },
  { id: "mod_dvoeverie",     label: "Dvoeverie gór",         type: "modifier", planned: true, note: "Prowincje górskie z dwoierstwem; -missionary_strength dla obu kościołów",                 row: 6, col: 4 },
  { id: "mod_veliki_zupan",  label: "Veliki Župan de facto",  type: "modifier", planned: true, note: "Legitymizacja od Bizancjum; destabilizuje gdy Bizancjum słabe (faza Lada/Veles)",         row: 6, col: 6 },

  // ═══ ROW 7 — Cultures + heritage ═══
  { id: "serbian",       label: "Serbian",       type: "culture", note: "Południowosłowiańska, heritage south_slavic; rdzeń Raszki i Zety",   row: 7, col: 1 },
  { id: "bosnian",       label: "Bosnian",       type: "culture", note: "Południowosłowiańska, heritage south_slavic; region Bośni",           row: 7, col: 3 },
  { id: "south_slavic",  label: "South Slavic",  type: "culture", note: "Heritage — wspólne dla Serbów, Bośniaków, Chorwatów, Bułgarów",     row: 7, col: 5 },

  // ═══ ROW 8 — Key provinces ═══
  { id: "ras",       label: "Ras (Zica)",   type: "province", note: "Stolica Raszki — siedziba Diecezji Ras; centrum prawosławne",          row: 8, col: 0 },
  { id: "skadar",    label: "Skadar",       type: "province", note: "Stolica Zety/Duklji — arcybiskupstwo Baru; centrum katolickie",        row: 8, col: 2 },
  { id: "pristina",  label: "Pristina",     type: "province", note: "Kluczowa prowincja Kosowa; bitwa 1389",                               row: 8, col: 4 },
  { id: "smederevo", label: "Smederevo",    type: "province", note: "Twierdza nad Dunajem; późniejsza stolica despotatu",                   row: 8, col: 5 },
  { id: "trebinje",  label: "Trebinje",     type: "province", note: "Pogranicze Travunji — między Raszką a Adriatykiem",                    row: 8, col: 7 },
];

export const SERBIA_LINKS: GraphLink[] = [
  // ── Vanilla: timeline flow ──
  { source: "bk_867",  target: "bk_1066", relation: "→" },
  { source: "bk_1066", target: "bk_1178", relation: "→" },

  // ── Vanilla: title hierarchy ──
  { source: "d_rashka",  target: "k_serbia",    relation: "de jure" },
  { source: "d_dioclea", target: "k_serbia",    relation: "de jure" },
  { source: "d_bosnia",  target: "k_serbia",    relation: "de jure" },
  { source: "k_serbia",  target: "e_byzantium", relation: "wasal" },

  // ── Vanilla: provinces → duchies ──
  { source: "ras",       target: "d_rashka",  relation: "stolica" },
  { source: "pristina",  target: "d_rashka",  relation: "hrabstwo" },
  { source: "smederevo", target: "d_rashka",  relation: "hrabstwo" },
  { source: "skadar",    target: "d_dioclea", relation: "stolica" },
  { source: "trebinje",  target: "d_dioclea", relation: "hrabstwo" },

  // ── Vanilla: culture → region / heritage ──
  { source: "serbian",      target: "d_rashka",     relation: "region" },
  { source: "serbian",      target: "d_dioclea",    relation: "region" },
  { source: "bosnian",      target: "d_bosnia",     relation: "region" },
  { source: "serbian",      target: "south_slavic", relation: "heritage" },
  { source: "bosnian",      target: "south_slavic", relation: "heritage" },

  // ── Vanilla: dynasty → title ──
  { source: "vlastimirovic", target: "k_serbia", relation: "rządzi (867)" },
  { source: "nemanjic",      target: "k_serbia", relation: "rządzi (1166+)" },
  { source: "vlastimirovic", target: "d_rashka", relation: "rządzi" },
  { source: "nemanjic",      target: "ras",      relation: "stolica" },

  // ── Vanilla: faith ↔ bookmarks ──
  { source: "slavic_pagan", target: "bk_867",  relation: "wiara w" },
  { source: "orthodox",     target: "bk_1066", relation: "wiara w" },
  { source: "orthodox",     target: "bk_1178", relation: "wiara w" },
  { source: "conversion",   target: "slavic_pagan", relation: "z" },
  { source: "conversion",   target: "orthodox",     relation: "na" },

  // ── Vanilla/SSP: Struggle ──
  { source: "struggle_ssp",  target: "slavic_pagan", relation: "system wiary" },
  { source: "struggle_ssp",  target: "bk_867",       relation: "start" },
  { source: "struggle_ssp",  target: "bk_1066",      relation: "aktywny" },

  // ── Vanilla: bookmark → title state ──
  { source: "bk_867",  target: "d_rashka",  relation: "plemienne" },
  { source: "bk_1066", target: "k_serbia",  relation: "župan" },
  { source: "bk_1178", target: "k_serbia",  relation: "zjednoczenie" },

  // ── Vanilla: mechanics ──
  { source: "byz_vassal",       target: "k_serbia",    relation: "dotyczy" },
  { source: "byz_vassal",       target: "e_byzantium", relation: "suweren" },
  { source: "tribal_to_feudal", target: "bk_867",      relation: "start" },
  { source: "tribal_to_feudal", target: "d_rashka",    relation: "dotyczy" },
  { source: "succession",       target: "k_serbia",    relation: "dotyczy" },
  { source: "succession",       target: "nemanjic",    relation: "dynast." },

  // ── Planned: dual orbit system ──
  { source: "mod_dual_orbit",   target: "d_rashka",   relation: "orbita wschodnia" },
  { source: "mod_dual_orbit",   target: "d_dioclea",  relation: "orbita zachodnia" },
  { source: "mod_dual_orbit",   target: "orthodox",   relation: "napięcie" },
  { source: "mod_dual_orbit",   target: "catholic",   relation: "napięcie" },

  // ── Planned: papal crown echo chain ──
  { source: "evt_papal_crown",     target: "catholic",        relation: "kontekst" },
  { source: "evt_papal_crown",     target: "d_dioclea",       relation: "dotyczy Zety" },
  { source: "evt_papal_crown",     target: "mod_dual_orbit",  relation: "wyzwala napięcie" },
  { source: "evt_papal_crown",     target: "skadar",          relation: "lokalizacja" },

  // ── Planned: incorporate Zeta ──
  { source: "dec_incorporate_zeta", target: "d_dioclea",       relation: "inkorporuje" },
  { source: "dec_incorporate_zeta", target: "mod_latin_enclave", relation: "nadaje" },
  { source: "dec_incorporate_zeta", target: "mod_dual_orbit",  relation: "usuwa" },
  { source: "mod_latin_enclave",    target: "catholic",        relation: "presja konwersji" },
  { source: "mod_latin_enclave",    target: "skadar",          relation: "diecezja Baru" },

  // ── Planned: orientation decisions ──
  { source: "dec_orient_east", target: "mod_dual_orbit", relation: "zastępuje" },
  { source: "dec_orient_east", target: "orthodox",       relation: "potwierdza" },
  { source: "dec_orient_east", target: "e_byzantium",    relation: "wzmacnia relację" },
  { source: "dec_orient_west", target: "mod_dual_orbit", relation: "zastępuje" },
  { source: "dec_orient_west", target: "catholic",       relation: "potwierdza" },

  // ── Planned: brother partition (fork HIST/ALT) ──
  { source: "evt_brother_part",  target: "nemanjic",        relation: "dotyczy" },
  { source: "evt_brother_part",  target: "k_serbia",        relation: "dzieli" },
  { source: "evt_brother_part",  target: "dec_zupa_confed",  relation: "opcja ALT" },
  { source: "evt_brother_part",  target: "succession",       relation: "wyzwala kryzys" },

  // ── Planned: dvoeverie hills ──
  { source: "mod_dvoeverie",    target: "slavic_pagan",   relation: "wynika z" },
  { source: "mod_dvoeverie",    target: "d_rashka",       relation: "prowincje górskie" },
  { source: "mod_dvoeverie",    target: "conversion",     relation: "spowalnia" },

  // ── Planned: veliki župan ──
  { source: "mod_veliki_zupan", target: "byz_vassal",     relation: "wynika z" },
  { source: "mod_veliki_zupan", target: "k_serbia",       relation: "legitymizuje" },

  // ── Planned: Ras investiture ──
  { source: "evt_ras_investiture", target: "ras",        relation: "lokalizacja" },
  { source: "evt_ras_investiture", target: "orthodox",   relation: "umacnia" },
  { source: "evt_ras_investiture", target: "mod_veliki_zupan", relation: "nadaje" },

  // ── Planned: Slava cult (ALT) ──
  { source: "evt_slava",          target: "slavic_pagan",    relation: "wzmacnia" },
  { source: "evt_slava",          target: "dec_zupa_confed", relation: "kontekst ALT" },

  // ── Planned: confederation (ALT) ──
  { source: "dec_zupa_confed",    target: "nemanjic",     relation: "dotyczy Nemanji" },
  { source: "dec_zupa_confed",    target: "d_rashka",     relation: "autonomia żup" },
];

export const SERBIA_PATHS: GraphPath[] = [
  // ── Vanilla paths ──
  {
    id: "political",
    label: "Ewolucja polityczna",
    color: "#e6b43c",
    description: "Od plemion do zjednoczenia Nemanjiców — župaństwo pod Bizancjum (vanilla)",
    nodes: ["bk_867", "tribal_to_feudal", "d_rashka", "byz_vassal", "k_serbia", "e_byzantium", "bk_1178"],
  },
  {
    id: "territory",
    label: "Hierarchia terytorialna",
    color: "#78909c",
    description: "Prowincje → księstwa → królestwo → cesarstwo (vanilla)",
    nodes: ["ras", "pristina", "smederevo", "d_rashka", "skadar", "trebinje", "d_dioclea", "d_bosnia", "k_serbia", "e_byzantium"],
  },
  {
    id: "faith_conversion",
    label: "Konwersja i dvoeverie",
    color: "#ce93d8",
    description: "Pogaństwo → prawosławie, z przetrwałym dvoeverie w górach (vanilla + planned)",
    nodes: ["slavic_pagan", "struggle_ssp", "conversion", "orthodox", "mod_dvoeverie", "d_rashka"],
  },

  // ── Planned paths ──
  {
    id: "dual_orbit",
    label: "Dwoistość Raszki i Zety",
    color: "#e63946",
    description: "Strukturalne napięcie między orbitą wschodnią (Bizancjum) a zachodnią (Papiestwo) — rdzeń HIST",
    nodes: ["mod_dual_orbit", "d_rashka", "d_dioclea", "orthodox", "catholic", "evt_papal_crown", "skadar", "dec_orient_east", "dec_orient_west"],
  },
  {
    id: "zeta_arc",
    label: "Inkorporacja Zety",
    color: "#ff8a65",
    description: "Papieska korona → upadek Zety → inkorporacja → łacińska enklawa (planowane)",
    nodes: ["evt_papal_crown", "d_dioclea", "dec_incorporate_zeta", "mod_latin_enclave", "catholic", "skadar"],
  },
  {
    id: "dynasty",
    label: "Dynastia i sukcesja",
    color: "#6ba0d6",
    description: "Vlastimirovici → Nemanjici; podział braci i kryzys sukcesyjny (vanilla + planned)",
    nodes: ["vlastimirovic", "nemanjic", "k_serbia", "evt_brother_part", "succession", "dec_zupa_confed"],
  },
  {
    id: "legitimacy",
    label: "Legitymizacja władzy",
    color: "#4db6ac",
    description: "Veliki Župan — zewnętrzna legitymizacja od Bizancjum i inwestytura w Rasie (planowane)",
    nodes: ["mod_veliki_zupan", "byz_vassal", "evt_ras_investiture", "ras", "orthodox", "e_byzantium"],
  },
];
