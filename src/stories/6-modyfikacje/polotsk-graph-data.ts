import type { GraphNode, GraphLink, GraphPath } from "./graph-types";

export const POLOTSK_NODES: GraphNode[] = [
  // ═══ ROW 0 — Bookmarks ═══
  { id: "bk_867",  label: "867",  type: "bookmark", era: "867",  note: "Pogańskie Połock pod Rogwołodem; Krywicze i Połoczanie — plemienne grody nad Dźwiną", row: 0, col: 1 },
  { id: "bk_1066", label: "1066", type: "bookmark", era: "1066", note: "Prawosławie, Rurykowicze (linia Rogwołoda/Wsiesława), Połock wasalem Rusi",          row: 0, col: 4 },
  { id: "bk_1178", label: "1178", type: "bookmark", era: "1178", note: "Rozdrobnienie — księstwa połockie i witebskie rywalizują z Nowogrodem i Smoleńskiem", row: 0, col: 6 },

  // ═══ ROW 1 — Vanilla mechanics ═══
  { id: "struggle_ssp",     label: "Struggle of Perun",  type: "mechanic", note: "SSP: pogaństwo wschodniosłow. aktywne 867–~1050; fazy Swarozyc → Perun → zakończenie",     row: 1, col: 0 },
  { id: "tribal_to_feudal", label: "Tribal → Feudal",    type: "mechanic", note: "Przejście ustrojowe — Połock jako jeden z pierwszych grodów Rusi feudalizuje się",           row: 1, col: 2 },
  { id: "conversion",       label: "Konwersja wiary",    type: "mechanic", note: "Pogaństwo → prawosławie (988–992, chrzest Rusi — Połock opiera się najdłużej)",              row: 1, col: 4 },
  { id: "vassalage",        label: "Wasalstwo Rusi",     type: "mechanic", note: "Połock pod suwerennością Kijowa, walczy o niezależność — 'brama północna' Rusi",             row: 1, col: 5 },
  { id: "succession",       label: "Sukcesja dzielnicowa", type: "mechanic", note: "Rota Rurykowiczów — Połock zachowuje odrębną linię (potomkowie Rogwołoda)",               row: 1, col: 7 },

  // ═══ ROW 2 — Planned events ═══
  { id: "evt_wolf_night",   label: "Nocna Przemiana",       type: "event", planned: true, note: "Wolf_blood + Storm co 12 lat — ikoniczny moment narracyjny Wsiesława",        row: 2, col: 1 },
  { id: "evt_exorcism",     label: "Kościół żąda egzorcyzmu", type: "event", planned: true, note: "Jednorazowy event z 3 ścieżkami — dramatyczny konflikt wiary i wilczej krwi", row: 2, col: 4 },

  // ═══ ROW 3 — Faith + Dynasty ═══
  { id: "slavic_pagan", label: "Pogaństwo wschodniosłow.", type: "faith",   note: "Wiara plemienna Krywiczów i Połoczan — kult Peruna i Wołosa nad Dźwiną",          row: 3, col: 0 },
  { id: "orthodox",     label: "Prawosławie",              type: "faith",   note: "Wiara dominująca od chrztu Rusi 988 — biskupstwo w Połocku",                      row: 3, col: 3 },
  { id: "rurikid",      label: "Rurykowicze (Rogwołod)",   type: "dynasty", note: "Linia Rogwołoda — odrębna gałąź Rurykowiczów, Wsiesław Czarodziej",              row: 3, col: 6 },

  // ═══ ROW 4 — Planned decisions ═══
  { id: "dec_wolf_ritual", label: "Rytuał Krwi",          type: "decision", planned: true, note: "Nadanie i przekazywanie traitu wolf_blood — mechanizm dynastyczny",  row: 4, col: 2 },

  // ═══ ROW 5 — Titles ═══
  { id: "e_russia",    label: "e_russia",    type: "title", note: "Imperium Ruś — suweren k_white_rus",                                               row: 5, col: 7 },
  { id: "k_white_rus", label: "k_white_rus", type: "title", note: "Królestwo Połocka — de jure d_polotsk, d_vitebsk, d_smolensk",                      row: 5, col: 4 },
  { id: "d_polotsk",   label: "d_polotsk",   type: "title", note: "Księstwo połockie — rdzeń: Połock, Drysa, Miory, Łukoml, Wietrzyno, Głębokie",      row: 5, col: 1 },
  { id: "d_vitebsk",   label: "d_vitebsk",   type: "title", note: "Księstwo witebskie — rdzeń: Witebsk, Haradok; pogranicze ze Smoleńskiem",            row: 5, col: 3 },
  { id: "d_smolensk",  label: "d_smolensk",  type: "title", note: "Księstwo smoleńskie — rdzeń: Smoleńsk; klucz do szlaku z Waregów do Greków",        row: 5, col: 5 },

  // ═══ ROW 6 — Planned modifiers + traits ═══
  { id: "trait_wolf_blood",    label: "Krew Wilka",       type: "trait",    planned: true, note: "sept_trait_wolf_blood — ikoniczna mechanika Wsiesława Czarodzieja; event-nadawany", row: 6, col: 1 },
  { id: "mod_rogneda_shadow",  label: "Cień Rognedy",     type: "modifier", planned: true, note: "sept_modifier_rogneda_shadow — pasywny klimat Połocka od pierwszej minuty gry",    row: 6, col: 4 },

  // ═══ ROW 7 — Cultures + heritage ═══
  { id: "krivichian",  label: "Krivichian",   type: "culture", note: "Wschodniosłowiańska, Krywicze — d_smolensk, d_vitebsk; szlak dnieprzański",       row: 7, col: 1 },
  { id: "polotskian",  label: "Polotskian",   type: "culture", note: "Wschodniosłowiańska, Połoczanie — d_polotsk; odrębna tożsamość nad Dźwiną",       row: 7, col: 3 },
  { id: "east_slavic", label: "East Slavic",  type: "culture", note: "Heritage — wspólne dla kultur Rusi: Krywiczów, Połoczan, Drygowiczów",            row: 7, col: 5 },

  // ═══ ROW 8 — Key provinces ═══
  { id: "polotsk",  label: "Połock",   type: "province", note: "Stolica księstwa — gród nad Dźwiną i Połotą, siedziba Rogwołoda",            row: 8, col: 0 },
  { id: "vitebsk",  label: "Witebsk",  type: "province", note: "Stolica księstwa witebskiego — gród nad Dźwiną, szlak handlowy",             row: 8, col: 2 },
  { id: "lukoml",   label: "Łukoml",   type: "province", note: "Gród obronny — ważny punkt obronny księstwa połockiego",                    row: 8, col: 4 },
  { id: "haradok",  label: "Haradok",  type: "province", note: "Gród na pograniczu witebsko-smoleńskim",                                    row: 8, col: 6 },
];

export const POLOTSK_LINKS: GraphLink[] = [
  // ── Vanilla: timeline flow ──
  { source: "bk_867",  target: "bk_1066", relation: "→" },
  { source: "bk_1066", target: "bk_1178", relation: "→" },

  // ── Vanilla: title hierarchy ──
  { source: "d_polotsk",   target: "k_white_rus", relation: "de jure" },
  { source: "d_vitebsk",   target: "k_white_rus", relation: "de jure" },
  { source: "d_smolensk",  target: "k_white_rus", relation: "de jure" },
  { source: "k_white_rus", target: "e_russia",    relation: "de jure" },

  // ── Vanilla: provinces → duchies ──
  { source: "polotsk",  target: "d_polotsk",  relation: "stolica" },
  { source: "lukoml",   target: "d_polotsk",  relation: "hrabstwo" },
  { source: "vitebsk",  target: "d_vitebsk",  relation: "stolica" },
  { source: "haradok",  target: "d_vitebsk",  relation: "hrabstwo" },

  // ── Vanilla: culture → region / heritage ──
  { source: "polotskian", target: "d_polotsk",   relation: "region" },
  { source: "krivichian", target: "d_vitebsk",   relation: "region" },
  { source: "krivichian", target: "d_smolensk",  relation: "region" },
  { source: "polotskian", target: "east_slavic", relation: "heritage" },
  { source: "krivichian", target: "east_slavic", relation: "heritage" },

  // ── Vanilla: dynasty → title ──
  { source: "rurikid", target: "k_white_rus", relation: "rządzi" },
  { source: "rurikid", target: "d_polotsk",   relation: "rządzi" },
  { source: "rurikid", target: "d_vitebsk",   relation: "rządzi" },

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
  { source: "bk_867",  target: "d_polotsk",   relation: "tytularne" },
  { source: "bk_867",  target: "d_vitebsk",   relation: "tytularne" },
  { source: "bk_1066", target: "k_white_rus", relation: "wasal Rusi" },

  // ── Vanilla: mechanics ──
  { source: "vassalage",        target: "k_white_rus", relation: "dotyczy" },
  { source: "vassalage",        target: "e_russia",    relation: "suweren" },
  { source: "tribal_to_feudal", target: "bk_867",      relation: "start" },
  { source: "tribal_to_feudal", target: "d_polotsk",   relation: "dotyczy" },
  { source: "succession",       target: "rurikid",     relation: "dotyczy" },
  { source: "succession",       target: "k_white_rus", relation: "dotyczy" },

  // ── Planned: wolf blood chain ──
  { source: "trait_wolf_blood",   target: "rurikid",         relation: "dynastyczny" },
  { source: "evt_wolf_night",     target: "trait_wolf_blood", relation: "nadaje" },
  { source: "dec_wolf_ritual",    target: "trait_wolf_blood", relation: "przekazuje" },
  { source: "evt_exorcism",       target: "trait_wolf_blood", relation: "zagraża" },
  { source: "evt_exorcism",       target: "orthodox",         relation: "żąda" },

  // ── Planned: Rogneda shadow ──
  { source: "mod_rogneda_shadow", target: "d_polotsk",   relation: "dotyczy" },
  { source: "mod_rogneda_shadow", target: "bk_867",      relation: "aktywny od" },
  { source: "mod_rogneda_shadow", target: "rurikid",     relation: "dynastyczny" },

  // ── Planned: events → bookmarks ──
  { source: "evt_wolf_night",  target: "bk_867",  relation: "era" },
  { source: "evt_exorcism",    target: "bk_1066", relation: "era" },
];

export const POLOTSK_PATHS: GraphPath[] = [
  {
    id: "political",
    label: "Ewolucja polityczna",
    color: "#e6b43c",
    description: "Od plemiennego Połocka do prawosławnych księstw pod suwerennością Rusi (vanilla)",
    nodes: ["bk_867", "tribal_to_feudal", "conversion", "vassalage", "k_white_rus", "e_russia", "succession", "bk_1066", "bk_1178"],
  },
  {
    id: "territory",
    label: "Hierarchia terytorialna",
    color: "#78909c",
    description: "Prowincje → księstwa → królestwo → imperium (vanilla)",
    nodes: ["polotsk", "lukoml", "d_polotsk", "vitebsk", "haradok", "d_vitebsk", "d_smolensk", "k_white_rus", "e_russia"],
  },
  {
    id: "faith",
    label: "Przemiana wiary",
    color: "#ce93d8",
    description: "Pogaństwo wschodniosłow. → chrzest Rusi → prawosławie (vanilla + SSP)",
    nodes: ["slavic_pagan", "struggle_ssp", "bk_867", "conversion", "orthodox", "bk_1066"],
  },
  {
    id: "wolf_blood",
    label: "Krew Wilka (planned)",
    color: "#4caf50",
    description: "Wsiesław Czarodziej — wilcza krew, nocna przemiana, rytuał i egzorcyzm (planned mod)",
    nodes: ["trait_wolf_blood", "evt_wolf_night", "dec_wolf_ritual", "evt_exorcism", "rurikid", "mod_rogneda_shadow"],
  },
  {
    id: "cultures",
    label: "Mozaika kulturowa",
    color: "#4dd0e1",
    description: "Krywicze i Połoczanie — dwa ludy wschodniosłowiańskie Połocka (vanilla)",
    nodes: ["krivichian", "polotskian", "east_slavic", "d_polotsk", "d_vitebsk", "d_smolensk"],
  },
];
