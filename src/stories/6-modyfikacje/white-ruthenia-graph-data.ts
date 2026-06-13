import type { GraphNode, GraphLink, GraphPath } from "./graph-types";

export const WHITE_RUTHENIA_NODES: GraphNode[] = [
  // ═══ ROW 0 — Bookmarks ═══
  { id: "bk_867",  label: "867",  type: "bookmark", era: "867",  note: "Poganie, plemienne, brak jednolitego władcy; Drygowicze i Radymicze pod trybutem Rusi", row: 0, col: 1 },
  { id: "bk_1066", label: "1066", type: "bookmark", era: "1066", note: "Prawosławie, Rurykowicze, księstwa mińskie i turowskie pod e_russia",                  row: 0, col: 4 },
  { id: "bk_1178", label: "1178", type: "bookmark", era: "1178", note: "Rozdrobnienie dzielnicowe, rywalizacja książąt mińskich i turowskich",                  row: 0, col: 6 },

  // ═══ ROW 1 — Vanilla mechanics ═══
  { id: "struggle_ssp",     label: "Struggle of Perun",  type: "mechanic", note: "SSP: pogaństwo wschodniosłow. aktywne 867–~1050; fazy Swarozyc → Perun → zakończenie",     row: 1, col: 0 },
  { id: "tribal_to_feudal", label: "Tribal → Feudal",    type: "mechanic", note: "Przejście ustrojowe — lasy i bagna spowalniają feudalizację",                                row: 1, col: 2 },
  { id: "conversion",       label: "Konwersja wiary",    type: "mechanic", note: "Pogaństwo → prawosławie (988, chrzest Rusi przez Włodzimierza)",                              row: 1, col: 4 },
  { id: "vassalage",        label: "Wasalstwo Rusi",     type: "mechanic", note: "Księstwa białoruskie pod suwerennością Kijowa, potem rozbite na apanaże",                     row: 1, col: 5 },
  { id: "succession",       label: "Sukcesja dzielnicowa", type: "mechanic", note: "Rota — system senioratu Rurykowiczów, dzielenie ziem między synów",                        row: 1, col: 7 },

  // ═══ ROW 2 — Planned events (brak — scaffold) ═══

  // ═══ ROW 3 — Faith + Dynasty ═══
  { id: "slavic_pagan", label: "Pogaństwo wschodniosłow.", type: "faith",   note: "Wiara plemienna Drygowiczów i Radymiczów do 988",                           row: 3, col: 0 },
  { id: "orthodox",     label: "Prawosławie",              type: "faith",   note: "Wiara dominująca od chrztu Rusi 988 — biskupstwa w Turowie i Połocku",       row: 3, col: 3 },
  { id: "rurikid",      label: "Rurykowicze",              type: "dynasty", note: "Dynastia panująca — gałąź mińsko-połocka i turowska",                       row: 3, col: 5 },

  // ═══ ROW 4 — Planned decisions (brak — scaffold) ═══

  // ═══ ROW 5 — Titles ═══
  { id: "e_russia",   label: "e_russia",   type: "title", note: "Imperium Ruś — suweren k_white_rus",                                          row: 5, col: 7 },
  { id: "k_white_rus", label: "k_white_rus", type: "title", note: "Królestwo Białej Rusi — de jure d_minsk, d_pinsk, d_turov",                  row: 5, col: 4 },
  { id: "d_minsk",    label: "d_minsk",    type: "title", note: "Księstwo mińskie — rdzeń: Mińsk, Barysaw, Łahojsk, Zasławie",                  row: 5, col: 1 },
  { id: "d_pinsk",    label: "d_pinsk",    type: "title", note: "Księstwo pińskie — rdzeń: Pińsk, Łahiszyn, Łuniniec; bagna Polesia",           row: 5, col: 3 },
  { id: "d_turov",    label: "d_turov",    type: "title", note: "Księstwo turowskie — rdzeń: Słuck, Kleck, Żytkowicze; najstarszy ośrodek",     row: 5, col: 5 },

  // ═══ ROW 6 — Planned modifiers (brak — scaffold) ═══

  // ═══ ROW 7 — Cultures + heritage ═══
  { id: "dregovichian", label: "Dregovichian",  type: "culture", note: "Wschodniosłowiańska, Poleskie bagna — d_pinsk, d_turov",               row: 7, col: 1 },
  { id: "radimichian",  label: "Radimichian",   type: "culture", note: "Wschodniosłowiańska, dorzecze Soży — d_minsk, pogranicze smoleńskie",  row: 7, col: 3 },
  { id: "east_slavic",  label: "East Slavic",   type: "culture", note: "Heritage — wspólne dla kultur Rusi: Drygowiczów, Radymiczów, Krywiczów", row: 7, col: 5 },

  // ═══ ROW 8 — Key provinces ═══
  { id: "minsk",    label: "Mińsk",    type: "province", note: "Stolica księstwa mińskiego — gród nad Świsłoczą",             row: 8, col: 0 },
  { id: "pinsk",    label: "Pińsk",    type: "province", note: "Stolica księstwa pińskiego — bagna Polesia, Prypeć",          row: 8, col: 2 },
  { id: "slutsk",   label: "Słuck",    type: "province", note: "Kluczowy gród księstwa turowskiego",                          row: 8, col: 4 },
  { id: "barysaw",  label: "Barysaw",  type: "province", note: "Gród obronny na Berezynie — pogranicze mińsko-połockie",      row: 8, col: 6 },
];

export const WHITE_RUTHENIA_LINKS: GraphLink[] = [
  // ── Vanilla: timeline flow ──
  { source: "bk_867",  target: "bk_1066", relation: "→" },
  { source: "bk_1066", target: "bk_1178", relation: "→" },

  // ── Vanilla: title hierarchy ──
  { source: "d_minsk",     target: "k_white_rus", relation: "de jure" },
  { source: "d_pinsk",     target: "k_white_rus", relation: "de jure" },
  { source: "d_turov",     target: "k_white_rus", relation: "de jure" },
  { source: "k_white_rus", target: "e_russia",    relation: "de jure" },

  // ── Vanilla: provinces → duchies ──
  { source: "minsk",   target: "d_minsk",  relation: "stolica" },
  { source: "barysaw", target: "d_minsk",  relation: "hrabstwo" },
  { source: "pinsk",   target: "d_pinsk",  relation: "stolica" },
  { source: "slutsk",  target: "d_turov",  relation: "hrabstwo" },

  // ── Vanilla: culture → region / heritage ──
  { source: "dregovichian", target: "d_pinsk",     relation: "region" },
  { source: "dregovichian", target: "d_turov",     relation: "region" },
  { source: "radimichian",  target: "d_minsk",     relation: "region" },
  { source: "dregovichian", target: "east_slavic", relation: "heritage" },
  { source: "radimichian",  target: "east_slavic", relation: "heritage" },

  // ── Vanilla: dynasty → title ──
  { source: "rurikid", target: "k_white_rus", relation: "rządzi" },
  { source: "rurikid", target: "d_minsk",     relation: "rządzi" },
  { source: "rurikid", target: "d_turov",     relation: "rządzi" },

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
  { source: "bk_867",  target: "d_minsk",     relation: "tytularne" },
  { source: "bk_867",  target: "d_turov",     relation: "tytularne" },
  { source: "bk_1066", target: "k_white_rus", relation: "wasal Rusi" },

  // ── Vanilla: mechanics ──
  { source: "vassalage",        target: "k_white_rus", relation: "dotyczy" },
  { source: "vassalage",        target: "e_russia",    relation: "suweren" },
  { source: "tribal_to_feudal", target: "bk_867",      relation: "start" },
  { source: "tribal_to_feudal", target: "d_minsk",     relation: "dotyczy" },
  { source: "succession",       target: "rurikid",     relation: "dotyczy" },
  { source: "succession",       target: "k_white_rus", relation: "dotyczy" },
];

export const WHITE_RUTHENIA_PATHS: GraphPath[] = [
  {
    id: "political",
    label: "Ewolucja polityczna",
    color: "#e6b43c",
    description: "Od plemion pogańskich do prawosławnych księstw pod suwerennością Rusi (vanilla)",
    nodes: ["bk_867", "tribal_to_feudal", "conversion", "vassalage", "k_white_rus", "e_russia", "succession", "bk_1066", "bk_1178"],
  },
  {
    id: "territory",
    label: "Hierarchia terytorialna",
    color: "#78909c",
    description: "Prowincje → księstwa → królestwo → imperium (vanilla)",
    nodes: ["minsk", "barysaw", "d_minsk", "pinsk", "d_pinsk", "slutsk", "d_turov", "k_white_rus", "e_russia"],
  },
  {
    id: "faith",
    label: "Przemiana wiary",
    color: "#ce93d8",
    description: "Pogaństwo wschodniosłow. → chrzest Rusi → prawosławie (vanilla + SSP)",
    nodes: ["slavic_pagan", "struggle_ssp", "bk_867", "conversion", "orthodox", "bk_1066"],
  },
  {
    id: "dynasty",
    label: "Dynastia Rurykowiczów",
    color: "#e63946",
    description: "Rurykowicze — od trybutu do apanaży dzielnicowych (vanilla)",
    nodes: ["rurikid", "d_minsk", "d_turov", "k_white_rus", "succession", "bk_1178"],
  },
  {
    id: "cultures",
    label: "Mozaika kulturowa",
    color: "#4dd0e1",
    description: "Drygowicze i Radymicze — dwa ludy wschodniosłowiańskie Białej Rusi (vanilla)",
    nodes: ["dregovichian", "radimichian", "east_slavic", "d_pinsk", "d_turov", "d_minsk"],
  },
];
