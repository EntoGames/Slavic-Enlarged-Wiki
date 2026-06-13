export type { NodeType, GraphNode, GraphLink, GraphPath, KingdomGraphData } from "./graph-types";
export { NODE_TYPE_CONFIG, GRID_ROWS, GRID_COLS } from "./graph-types";
import type { GraphNode, GraphLink, GraphPath } from "./graph-types";

export const SORBIA_NODES: GraphNode[] = [
  // ═══ ROW 0 — Bookmarks (timeline) ═══
  { id: "bk_867",  label: "867",  type: "bookmark", era: "867",  note: "Poganie, plemienne, Łużyczanie i Obodryci pod presją frankijską",  row: 0, col: 0 },
  { id: "bk_1066", label: "1066", type: "bookmark", era: "1066", note: "Germanizacja zaawansowana, Sorbia w HRE, chrześcijaństwo dominuje", row: 0, col: 3 },
  { id: "bk_1178", label: "1178", type: "bookmark", era: "1178", note: "Albrecht Niedźwiedź podbił Brandenburgia; Łużyce pod margrabstwem",  row: 0, col: 5 },
  { id: "bk_1230", label: "1230", type: "bookmark", era: "1230", note: "Ostsiedlung w pełni; kultura łużycka przetrwała tylko w enklawach",  row: 0, col: 7 },

  // ═══ ROW 1 — Vanilla mechanics ═══
  { id: "struggle_ssp",     label: "Struggle of Perun",  type: "mechanic", note: "SSP: pogaństwo zachodniosłow. aktywne 867–~1250; Sorbia w zasięgu", row: 1, col: 0 },
  { id: "tribal_to_feudal", label: "Tribal → Feudal",    type: "mechanic", note: "Przejście ustrojowe plemion połabskich",                            row: 1, col: 1 },
  { id: "conversion",       label: "Konwersja wiary",    type: "mechanic", note: "Pogaństwo → katolicyzm (chrystianizacja Połabian od X w.)",         row: 1, col: 3 },
  { id: "ostsiedlung",      label: "Ostsiedlung",        type: "mechanic", note: "Kolonizacja niemiecka od XII w. — osadnicy w prowincjach Sorbi",   row: 1, col: 4 },
  { id: "hre_vassal",       label: "Wasalstwo HRE",      type: "mechanic", note: "Plemiona sorbijskie pod zwierzchnictwem cesarskim od X w.",         row: 1, col: 5 },
  { id: "succession",       label: "Sukcesja plemienna", type: "mechanic", note: "Konfederacyjna sukcesja plemion połabskich",                        row: 1, col: 7 },

  // ═══ ROW 2 — Planned events ═══
  { id: "evt_missionary",    label: "Misjonarz po łużycku",       type: "event", planned: true, era: "X–XII w.", note: "Paradoks: chrystianizacja przez język łużycki zachowuje kulturę (sesb_sorbian.0002)", row: 2, col: 0 },
  { id: "evt_peasants",      label: "Wieśniacy mówią łużyckim",  type: "event", planned: true, era: "cykliczny", note: "Co 15 lat — pan feudalny odkrywa, że chłopi nadal mówią po łużycku (sesb_sorbian.0001)", row: 2, col: 2 },
  { id: "evt_drevani",       label: "Drevani Fading Voice",       type: "event", planned: false, note: "Istniejący event sesb_levelb.0035 — mechanika zanikania kultury drzewińskiej", row: 2, col: 4 },
  { id: "evt_polabian_schism", label: "Schizma Połabska",         type: "event", planned: true, note: "Rodzimowiercy (Arkona/Świętowit) vs. Welesowi (Radogoszcz/Swarożyc) — gracz mediuje (ALT)", row: 2, col: 6 },

  // ═══ ROW 3 — Faith + Dynasty ═══
  { id: "slavic_pagan", label: "Pogaństwo zachodniosłow.", type: "faith",   note: "Zachodnia Słowiańszczyzna pogańska; Radogoszcz i Arkona jako centra kultu", row: 3, col: 0 },
  { id: "catholic",     label: "Katolicyzm",              type: "faith",   note: "Wiara dominująca po chrystianizacji Połabian (X–XII w.)",                    row: 3, col: 3 },
  { id: "nakonid",      label: "Nakonidzi",               type: "dynasty", note: "Dynastia obodrycka — Niklot, Pribisław; rządzą d_mecklenburg / Obodryci",   row: 3, col: 5 },
  { id: "radogoszcz",   label: "Radogoszcz (Rethra)",     type: "mechanic", note: "Centrum religijne Luciców — Swarożyc/Radegast; rywalizacja z Arkoną",      row: 3, col: 7 },

  // ═══ ROW 4 — Planned decisions ═══
  { id: "dec_archive",       label: "Archiwum Wołchwów",         type: "decision", planned: true, note: "Wołchwowie ukrywają teksty rytualne; kultura NIGDY nie zanika z tej prowincji (sesb_volkhv_archive_decision)", row: 4, col: 0 },
  { id: "dec_volkhv_asylum", label: "Azyl Wołchwów z Zachodu",   type: "decision", planned: true, era: "1168+", note: "Po upadku Arkony: Sorbia przyjmuje uciekinierów; +wolchwowie, +Fervor (ALT, sesb_decision_volkhv_asylum)", row: 4, col: 2 },
  { id: "dec_radogoszcz",    label: "Traktat Radogoski",         type: "decision", planned: true, note: "Wolchw proponuje wspólne prawo; ≥3 tytuły + Fervor > 55 → Konfederacja Połabska Środkowa (ALT, sesb_decision_radogoszcz_treaty)", row: 4, col: 5 },

  // ═══ ROW 5 — Titles ═══
  { id: "e_hre",      label: "e_hre",      type: "title", note: "Święte Cesarstwo Rzymskie — suweren Sorbi od X w.",         row: 5, col: 7 },
  { id: "k_sorbia",   label: "k_sorbia",   type: "title", note: "Królestwo Sorbi — tytuł de jure; d_sorbia + d_meissen + d_lausitz", row: 5, col: 4 },
  { id: "d_sorbia",   label: "d_sorbia",   type: "title", note: "Księstwo Sorbi — rdzeń: Wittenberg, Belizi, Torgau",        row: 5, col: 1 },
  { id: "d_meissen",  label: "d_meissen",  type: "title", note: "Księstwo Miśni — Meissen, Dresden, Freiberg",               row: 5, col: 3 },
  { id: "d_lausitz",  label: "d_lausitz",  type: "title", note: "Księstwo Łużyc — Cottbus, Bautzen, Görlitz, Spreewald",     row: 5, col: 5 },

  // ═══ ROW 6 — Planned modifiers + trait ═══
  { id: "mod_refugium",      label: "Łużyckie Refugium",        type: "modifier", planned: true, note: "+50% opór kolonizacji, -20% development speed; teren (lasy/bagna) chroni kulturę (sesb_modifier_sorbian_refugium)", row: 6, col: 0 },
  { id: "mod_customary_law", label: "Prawo Zwyczajowe Wieleckie", type: "modifier", planned: true, note: "-30% missionary efficiency; kodeks wolchwów chroni tożsamość kulturową (ALT, sesb_modifier_customary_law)", row: 6, col: 2 },
  { id: "mod_buffer",        label: "Bufor Połabski",            type: "modifier", planned: true, note: "-50% szansa na casus belli z obu stron (Polska + Cesarstwo); geopolityczna ochrona (ALT, sesb_modifier_polabian_buffer)", row: 6, col: 4 },
  { id: "trait_keeper",      label: "Ostatni Strażnik",          type: "trait",    planned: true, note: "Dynasty trait gdy ≥1 prowincja sorbian culture; +piety, +learning (sesb_trait_last_keeper)", row: 6, col: 6 },

  // ═══ ROW 7 — Cultures + heritage ═══
  { id: "sorbian",     label: "Sorbian",      type: "culture", note: "Łużyczanie — jedyni Połabianie, którzy przetrwali do dziś; heritage west_slavic", row: 7, col: 1 },
  { id: "obodrite",    label: "Obodrite",     type: "culture", note: "Obodryci — konfederacja plemion; zanikająca kultura pod presją germanizacji",     row: 7, col: 3 },
  { id: "west_slavic", label: "West Slavic",  type: "culture", note: "Heritage — wspólne dla Połabian, Czech, Polski, Łużyc",                          row: 7, col: 5 },
  { id: "german",      label: "German",       type: "culture", note: "Osadnicy niemieccy — kolonizacja Ostsiedlung od XII w.",                         row: 7, col: 7 },

  // ═══ ROW 8 — Key provinces ═══
  { id: "meissen",     label: "Meissen",     type: "province", note: "Stolica margrabstwa Miśni — strategiczny punkt nad Łabą",            row: 8, col: 0 },
  { id: "bautzen",     label: "Bautzen",     type: "province", note: "Centrum Górnych Łużyc — historyczna stolica łużycka",                row: 8, col: 2 },
  { id: "cottbus",     label: "Cottbus",     type: "province", note: "Centrum Dolnych Łużyc — pogranicze sorbijsko-brandenburskie",        row: 8, col: 4 },
  { id: "wittenberg", label: "Wittenberg",  type: "province", note: "Ważne hrabstwo d_sorbia — później siedziba elektorów saskich",       row: 8, col: 6 },
  { id: "dresden",     label: "Dresden",     type: "province", note: "Kluczowe hrabstwo d_meissen — nad Łabą, skrzyżowanie szlaków",      row: 8, col: 7 },
];

export const SORBIA_LINKS: GraphLink[] = [
  // ── Vanilla: timeline flow ──
  { source: "bk_867",  target: "bk_1066", relation: "→" },
  { source: "bk_1066", target: "bk_1178", relation: "→" },
  { source: "bk_1178", target: "bk_1230", relation: "→" },

  // ── Vanilla: title hierarchy ──
  { source: "d_sorbia",  target: "k_sorbia", relation: "de jure" },
  { source: "d_meissen", target: "k_sorbia", relation: "de jure" },
  { source: "d_lausitz", target: "k_sorbia", relation: "de jure" },
  { source: "k_sorbia",  target: "e_hre",    relation: "wasal (X w.+)" },

  // ── Vanilla: provinces → duchies ──
  { source: "meissen",    target: "d_meissen", relation: "stolica" },
  { source: "dresden",    target: "d_meissen", relation: "hrabstwo" },
  { source: "bautzen",    target: "d_lausitz", relation: "hrabstwo" },
  { source: "cottbus",    target: "d_lausitz", relation: "hrabstwo" },
  { source: "wittenberg", target: "d_sorbia",  relation: "hrabstwo" },

  // ── Vanilla: culture → region / heritage ──
  { source: "sorbian",  target: "d_lausitz",   relation: "region" },
  { source: "sorbian",  target: "d_sorbia",    relation: "region" },
  { source: "obodrite",  target: "west_slavic", relation: "heritage" },
  { source: "sorbian",  target: "west_slavic", relation: "heritage" },

  // ── Vanilla: dynasty → title ──
  { source: "nakonid",  target: "k_sorbia", relation: "rządzi (867)" },

  // ── Vanilla: faith ↔ bookmarks ──
  { source: "slavic_pagan", target: "bk_867",  relation: "wiara w" },
  { source: "catholic",     target: "bk_1066", relation: "wiara w" },
  { source: "catholic",     target: "bk_1178", relation: "wiara w" },
  { source: "catholic",     target: "bk_1230", relation: "wiara w" },
  { source: "conversion",   target: "slavic_pagan", relation: "z" },
  { source: "conversion",   target: "catholic",     relation: "na" },

  // ── Vanilla/SSP: pogaństwo zachodniosłowiańskie ──
  { source: "struggle_ssp",  target: "slavic_pagan", relation: "system wiary" },
  { source: "struggle_ssp",  target: "bk_867",       relation: "start" },
  { source: "radogoszcz",    target: "slavic_pagan", relation: "centrum kultu" },

  // ── Vanilla: bookmark → title state ──
  { source: "bk_867",  target: "d_sorbia",  relation: "plemienne" },
  { source: "bk_1066", target: "k_sorbia",  relation: "wasal HRE" },

  // ── Vanilla: mechanics ──
  { source: "hre_vassal",       target: "k_sorbia", relation: "dotyczy" },
  { source: "hre_vassal",       target: "e_hre",    relation: "suweren" },
  { source: "tribal_to_feudal", target: "bk_867",   relation: "start" },
  { source: "tribal_to_feudal", target: "d_sorbia", relation: "dotyczy" },
  { source: "ostsiedlung",      target: "bk_1178",  relation: "era" },
  { source: "ostsiedlung",      target: "bk_1230",  relation: "aktywne w" },
  { source: "ostsiedlung",      target: "german",   relation: "przynosi" },
  { source: "german",           target: "sorbian",  relation: "napięcie z" },

  // ── Planned: events → vanilla anchors ──
  { source: "evt_missionary",    target: "conversion",    relation: "realizuje" },
  { source: "evt_missionary",    target: "slavic_pagan",  relation: "kontekst" },
  { source: "evt_missionary",    target: "sorbian",       relation: "chroni kulturę" },
  { source: "evt_peasants",      target: "sorbian",       relation: "dotyczy" },
  { source: "evt_peasants",      target: "ostsiedlung",   relation: "kontekst" },
  { source: "evt_drevani",       target: "obodrite",      relation: "zanik kultury" },
  { source: "evt_drevani",       target: "bk_1066",       relation: "era" },
  { source: "evt_polabian_schism", target: "slavic_pagan", relation: "rozłam wewnętrzny" },
  { source: "evt_polabian_schism", target: "radogoszcz",   relation: "dotyczy" },

  // ── Planned: decisions → vanilla/planned anchors ──
  { source: "dec_archive",       target: "sorbian",       relation: "chroni" },
  { source: "dec_archive",       target: "slavic_pagan",  relation: "wymaga" },
  { source: "dec_archive",       target: "mod_refugium",  relation: "wzmacnia" },
  { source: "dec_volkhv_asylum", target: "radogoszcz",    relation: "kontekst" },
  { source: "dec_volkhv_asylum", target: "slavic_pagan",  relation: "wzmacnia" },
  { source: "dec_radogoszcz",    target: "radogoszcz",    relation: "wymaga" },
  { source: "dec_radogoszcz",    target: "k_sorbia",      relation: "wzmacnia" },

  // ── Planned: modifiers → vanilla anchors ──
  { source: "mod_refugium",      target: "d_lausitz",     relation: "dotyczy" },
  { source: "mod_refugium",      target: "sorbian",       relation: "chroni" },
  { source: "mod_refugium",      target: "bautzen",       relation: "lokalizacja" },
  { source: "mod_customary_law", target: "conversion",    relation: "spowalnia" },
  { source: "mod_customary_law", target: "slavic_pagan",  relation: "chroni" },
  { source: "mod_buffer",        target: "k_sorbia",      relation: "dotyczy" },
  { source: "mod_buffer",        target: "hre_vassal",    relation: "kontekst" },
  { source: "trait_keeper",      target: "sorbian",       relation: "wymaga" },
  { source: "trait_keeper",      target: "nakonid",       relation: "dotyczy" },

  // ── Planned: contrast zanik vs. przetrwanie ──
  { source: "evt_drevani",  target: "evt_peasants",  relation: "kontrast" },
  { source: "evt_peasants", target: "mod_refugium",  relation: "kontekst" },
  { source: "trait_keeper", target: "dec_archive",   relation: "powiązany z" },
];

export const SORBIA_PATHS: GraphPath[] = [
  // ── Vanilla paths ──
  {
    id: "political",
    label: "Ewolucja polityczna",
    color: "#e6b43c",
    description: "Od plemion pogańskich do wasalstwa HRE — chrystianizacja i germanizacja (vanilla)",
    nodes: ["bk_867", "tribal_to_feudal", "d_sorbia", "conversion", "hre_vassal", "k_sorbia", "e_hre", "bk_1066", "bk_1230"],
  },
  {
    id: "territory",
    label: "Hierarchia terytorialna",
    color: "#78909c",
    description: "Prowincje → księstwa → królestwo → cesarstwo (vanilla)",
    nodes: ["meissen", "dresden", "d_meissen", "bautzen", "cottbus", "d_lausitz", "wittenberg", "d_sorbia", "k_sorbia", "e_hre"],
  },
  {
    id: "cultural_survival",
    label: "Przetrwanie kultury łużyckiej",
    color: "#4dd0e1",
    description: "Sorbian jako jedyna kultura połabska, która przetrwała — Refugium, Archiwum, Strażnik (planowane)",
    nodes: ["sorbian", "mod_refugium", "bautzen", "dec_archive", "evt_peasants", "trait_keeper", "evt_missionary"],
  },
  {
    id: "pagan_tension",
    label: "Pogańskie napięcia",
    color: "#ce93d8",
    description: "Pogaństwo zachodniosłow. — SSP, Radogoszcz, konwersja, opór kulturowy (SSP + planowane)",
    nodes: ["slavic_pagan", "struggle_ssp", "radogoszcz", "conversion", "catholic", "mod_customary_law", "evt_missionary"],
  },
  {
    id: "zanik_vs_feniks",
    label: "Zanik vs. Feniks",
    color: "#e63946",
    description: "Kontrast: Drzewanie zanikają (Fading Voice) vs. Łużyczanie przetrwają (planowane)",
    nodes: ["evt_drevani", "obodrite", "evt_peasants", "sorbian", "mod_refugium", "trait_keeper", "dec_archive"],
  },
  {
    id: "ostsiedlung_path",
    label: "Kolonizacja niemiecka",
    color: "#4db6ac",
    description: "Ostsiedlung od XII w. — niemieccy osadnicy, presja germanizacyjna, napięcie z kulturą sorbijską (vanilla + planowane)",
    nodes: ["ostsiedlung", "german", "sorbian", "bk_1178", "bk_1230", "mod_buffer", "hre_vassal"],
  },
  {
    id: "alt_radogoszcz",
    label: "Radogoszcz — ścieżka ALT",
    color: "#ff8a65",
    description: "ALT 929: trwałe państwo pogańskie, Traktat Radogoski, Azyl Wołchwów, Schizma Połabska (planowane)",
    nodes: ["radogoszcz", "dec_radogoszcz", "dec_volkhv_asylum", "evt_polabian_schism", "slavic_pagan", "mod_customary_law", "mod_buffer"],
  },
];
