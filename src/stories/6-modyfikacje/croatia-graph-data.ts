import type { GraphNode, GraphLink, GraphPath } from "./graph-types";

export const CROATIA_NODES: GraphNode[] = [
  // ═══ ROW 0 — Bookmarks (timeline) ═══
  { id: "bk_867",  label: "867",  type: "bookmark", era: "867",  note: "Chorwacja plemienna, katolicyzm wczesny, Trpimirovići", row: 0, col: 0 },
  { id: "bk_1066", label: "1066", type: "bookmark", era: "1066", note: "Petar Krešimir IV, katolicyzm, królestwo niezależne",    row: 0, col: 3 },
  { id: "bk_1102", label: "1102", type: "bookmark", era: "1102", note: "Pacta Conventa — unia personalna z Węgrami",             row: 0, col: 5 },

  // ═══ ROW 1 — Vanilla mechanics ═══
  { id: "tribal_to_feudal", label: "Tribal → Feudal",       type: "mechanic", note: "Przejście ustrojowe Chorwacji (867 → późniejsze daty)",                  row: 1, col: 0 },
  { id: "conversion",       label: "Konwersja wiary",       type: "mechanic", note: "Wczesny katolicyzm, papieskie uznanie 879 (Branimir)",                   row: 1, col: 1 },
  { id: "hungary_vassal",   label: "Wasalstwo Węgier",      type: "mechanic", note: "k_croatia wasal k_hungary od 1102 (Pacta Conventa)",                     row: 1, col: 3 },
  { id: "succession",       label: "Sukcesja",              type: "mechanic", note: "Trpimirovići — elektywna sukcesja, kryzys dynastyczny po 1091",          row: 1, col: 5 },
  { id: "dejure_drift",     label: "De jure drift",         type: "mechanic", note: "d_dalmatia: napięcie między k_croatia a Bizancjum/Wenecją",              row: 1, col: 7 },

  // ═══ ROW 2 — Planned events ═══
  { id: "evt_branimir",     label: "Uznanie Branimira",       type: "event", planned: true, era: "879",  note: "Papież Jan VIII uznaje Branimira; trzy ścieżki: glagolica / łacina / Bizancjum", row: 2, col: 0 },
  { id: "evt_split_council", label: "Sobór w Splicie 1060",  type: "event", planned: true, era: "1060", note: "Kościół zakazuje glagolity; obroń / poddaj się / zignoruj",                      row: 2, col: 2 },
  { id: "evt_vlastela",     label: "Uczta Plemienna Włastelii", type: "event", planned: true, era: "co 15 lat", note: "Jeden z 12 rodów zachowuje rytuały; uczestniczyć (+Fervor) lub zakazać (+relacje z kościołem)", row: 2, col: 5 },

  // ═══ ROW 3 — Faith + Dynasty ═══
  { id: "catholic",     label: "Katolicyzm",       type: "faith",   note: "Wiara dominująca od początku — papieskie uznanie 879",         row: 3, col: 1 },
  { id: "trpimirovic",  label: "Trpimirovići",     type: "dynasty", note: "Dynastia chorwacka IX–XI w.; Tomislav (925) — pierwszy król",  row: 3, col: 4 },

  // ═══ ROW 4 — Planned decisions ═══
  { id: "dec_glagolitic",   label: "Liturgia Glagolicka",        type: "decision", planned: true, note: "Formalne deklarowanie glagolity jako języka kościelnego; -50% łacińska missionary strength; unikalne dla k_croatia", row: 4, col: 1 },
  { id: "dec_volkhvi_glag", label: "Wolchwowie Piszą Glagolicą", type: "decision", planned: true, note: "Glagolica jako medium zapisu tradycji słowiańskiej; Ending D-path zachód",                                         row: 4, col: 4 },

  // ═══ ROW 5 — Titles ═══
  { id: "k_hungary",   label: "k_hungary",   type: "title", note: "Królestwo Węgier — suweren Chorwacji od 1102",                           row: 5, col: 7 },
  { id: "k_croatia",   label: "k_croatia",   type: "title", note: "Królestwo Chorwacji — niezależne do 1102, potem unia z Węgrami",         row: 5, col: 4 },
  { id: "d_croatia",   label: "d_croatia",   type: "title", note: "Księstwo Chorwacji — rdzeń: Knin, Zadar, Senj",                          row: 5, col: 1 },
  { id: "d_slavonia",  label: "d_slavonia",  type: "title", note: "Księstwo Slawonii — Zagreb, Sisak, Križevci",                             row: 5, col: 3 },
  { id: "d_dalmatia",  label: "d_dalmatia",  type: "title", note: "Księstwo Dalmacji — Split, Ragusa, Hvar; napięcie z Wenecją/Bizancjum",  row: 5, col: 6 },

  // ═══ ROW 6 — Planned modifiers ═══
  { id: "mod_dalmatian_duality", label: "Dalmatyńskie Dwoiście",   type: "modifier", planned: true, note: "Wybrzeże niski Fervor (Romans, handel), góry wysoki Fervor + glagolica",         row: 6, col: 0 },
  { id: "mod_plemenita",        label: "Plemenita Vlastela",       type: "modifier", planned: true, note: "12 rodów chorwackich; -30% missionary efficiency; opór rodowy, nie religijny",   row: 6, col: 2 },
  { id: "mod_dinaric",          label: "Dinarskie Schronienie",    type: "modifier", planned: true, note: "Góry Dynaru; terrain mountain; -missionary efficiency; analogia deep_forest",    row: 6, col: 5 },

  // ═══ ROW 7 — Cultures + heritage ═══
  { id: "croatian",      label: "Croatian",       type: "culture", note: "Południowosłowiańska, heritage south_slavic",                            row: 7, col: 1 },
  { id: "dalmatian",     label: "Dalmatian",       type: "culture", note: "Romańska kultura wybrzeża dalmatyńskiego; napięcie z chorwacką",         row: 7, col: 4 },
  { id: "south_slavic",  label: "South Slavic",    type: "culture", note: "Heritage — wspólne dla Chorwatów, Serbów, Bułgarów, Bośniaków",        row: 7, col: 6 },

  // ═══ ROW 8 — Key provinces ═══
  { id: "knin",    label: "Knin",    type: "province", note: "Stolica królewska Chorwacji — siedziba Trpimirovićów",              row: 8, col: 0 },
  { id: "split",   label: "Split",   type: "province", note: "Główne miasto Dalmacji — Sobór w Splicie 1060",                    row: 8, col: 2 },
  { id: "zagreb",  label: "Zagreb",  type: "province", note: "Stolica Slawonii — przyszłe centrum chorwackiego państwa",          row: 8, col: 4 },
  { id: "ragusa",  label: "Ragusa",  type: "province", note: "Dubrownik — bogata republika kupiecka, wpływ romański",            row: 8, col: 6 },
  { id: "zadar",   label: "Zadar",   type: "province", note: "Port dalmatyński — rywalizacja Wenecji i Chorwacji",               row: 8, col: 7 },
];

export const CROATIA_LINKS: GraphLink[] = [
  // ── Vanilla: timeline flow ──
  { source: "bk_867",  target: "bk_1066", relation: "→" },
  { source: "bk_1066", target: "bk_1102", relation: "→" },

  // ── Vanilla: title hierarchy ──
  { source: "d_croatia",   target: "k_croatia",   relation: "de jure" },
  { source: "d_slavonia",  target: "k_croatia",   relation: "de jure" },
  { source: "d_dalmatia",  target: "k_croatia",   relation: "de jure" },
  { source: "k_croatia",   target: "k_hungary",   relation: "wasal (1102+)" },

  // ── Vanilla: provinces → duchies ──
  { source: "knin",    target: "d_croatia",   relation: "stolica" },
  { source: "zadar",   target: "d_croatia",   relation: "hrabstwo" },
  { source: "split",   target: "d_dalmatia",  relation: "stolica" },
  { source: "ragusa",  target: "d_dalmatia",  relation: "hrabstwo" },
  { source: "zagreb",  target: "d_slavonia",  relation: "stolica" },

  // ── Vanilla: culture → region / heritage ──
  { source: "croatian",    target: "d_croatia",    relation: "region" },
  { source: "croatian",    target: "d_slavonia",   relation: "region" },
  { source: "dalmatian",   target: "d_dalmatia",   relation: "region" },
  { source: "croatian",    target: "south_slavic", relation: "heritage" },

  // ── Vanilla: dynasty → title ──
  { source: "trpimirovic", target: "k_croatia",  relation: "rządzi" },
  { source: "trpimirovic", target: "d_croatia",  relation: "rządzi" },
  { source: "trpimirovic", target: "knin",       relation: "stolica" },

  // ── Vanilla: faith ↔ bookmarks ──
  { source: "catholic", target: "bk_867",  relation: "wiara w" },
  { source: "catholic", target: "bk_1066", relation: "wiara w" },
  { source: "catholic", target: "bk_1102", relation: "wiara w" },

  // ── Vanilla: bookmark → title state ──
  { source: "bk_867",  target: "d_croatia",  relation: "tytularne" },
  { source: "bk_1066", target: "k_croatia",  relation: "królestwo" },
  { source: "bk_1102", target: "k_croatia",  relation: "unia z Węgrami" },
  { source: "bk_1102", target: "k_hungary",  relation: "suweren" },

  // ── Vanilla: mechanics ──
  { source: "hungary_vassal",   target: "k_croatia",  relation: "dotyczy" },
  { source: "hungary_vassal",   target: "k_hungary",  relation: "suweren" },
  { source: "hungary_vassal",   target: "bk_1102",    relation: "od" },
  { source: "dejure_drift",     target: "d_dalmatia",  relation: "dotyczy" },
  { source: "succession",       target: "k_croatia",   relation: "dotyczy" },
  { source: "succession",       target: "trpimirovic", relation: "dynastia" },
  { source: "tribal_to_feudal", target: "bk_867",      relation: "start" },
  { source: "tribal_to_feudal", target: "d_croatia",   relation: "dotyczy" },
  { source: "conversion",       target: "catholic",    relation: "umacnia" },
  { source: "conversion",       target: "bk_867",      relation: "era" },

  // ── Planned: events → vanilla anchors ──
  { source: "evt_branimir",      target: "catholic",    relation: "papieskie uznanie" },
  { source: "evt_branimir",      target: "conversion",  relation: "realizuje" },
  { source: "evt_branimir",      target: "bk_867",      relation: "era" },
  { source: "evt_branimir",      target: "dec_glagolitic", relation: "odblokuje" },
  { source: "evt_split_council", target: "catholic",    relation: "napięcie z" },
  { source: "evt_split_council", target: "split",       relation: "lokalizacja" },
  { source: "evt_split_council", target: "dec_glagolitic", relation: "dotyczy" },
  { source: "evt_split_council", target: "bk_1066",     relation: "era" },
  { source: "evt_vlastela",      target: "mod_plemenita", relation: "powiązany z" },
  { source: "evt_vlastela",      target: "trpimirovic",   relation: "dotyczy rodów" },

  // ── Planned: decisions → vanilla/planned anchors ──
  { source: "dec_glagolitic",    target: "k_croatia",   relation: "unikalne dla" },
  { source: "dec_glagolitic",    target: "catholic",    relation: "modyfikuje" },
  { source: "dec_glagolitic",    target: "mod_dalmatian_duality", relation: "wzmacnia" },
  { source: "dec_volkhvi_glag",  target: "dec_glagolitic", relation: "wymaga" },
  { source: "dec_volkhvi_glag",  target: "croatian",    relation: "dotyczy" },

  // ── Planned: modifiers → vanilla anchors ──
  { source: "mod_dalmatian_duality", target: "d_dalmatia", relation: "wybrzeże" },
  { source: "mod_dalmatian_duality", target: "d_croatia",  relation: "góry" },
  { source: "mod_dalmatian_duality", target: "dalmatian",  relation: "wpływ romański" },
  { source: "mod_plemenita",        target: "d_croatia",   relation: "dotyczy" },
  { source: "mod_plemenita",        target: "trpimirovic", relation: "rody chorwackie" },
  { source: "mod_dinaric",          target: "knin",        relation: "region górski" },
  { source: "mod_dinaric",          target: "d_croatia",   relation: "dotyczy" },
];

export const CROATIA_PATHS: GraphPath[] = [
  // ── Vanilla paths ──
  {
    id: "political",
    label: "Ewolucja polityczna",
    color: "#e6b43c",
    description: "Od plemion do królestwa, unia z Węgrami (vanilla)",
    nodes: ["bk_867", "tribal_to_feudal", "d_croatia", "k_croatia", "hungary_vassal", "k_hungary", "bk_1102"],
  },
  {
    id: "territory",
    label: "Hierarchia terytorialna",
    color: "#78909c",
    description: "Prowincje → księstwa → królestwo (vanilla)",
    nodes: ["knin", "zadar", "d_croatia", "split", "ragusa", "d_dalmatia", "zagreb", "d_slavonia", "k_croatia"],
  },
  {
    id: "dynasty",
    label: "Dynastia Trpimirovićów",
    color: "#e63946",
    description: "Trpimirovići — od księstwa do korony chorwackiej (vanilla + planowane)",
    nodes: ["trpimirovic", "knin", "d_croatia", "k_croatia", "succession", "evt_vlastela", "mod_plemenita"],
  },

  // ── Planned paths ──
  {
    id: "glagolitic",
    label: "Obrona glagolicy",
    color: "#ce93d8",
    description: "Liturgia glagolicka jako tarcza tożsamości — od uznania Branimira do Soboru w Splicie (planowane)",
    nodes: ["evt_branimir", "conversion", "dec_glagolitic", "evt_split_council", "split", "dec_volkhvi_glag"],
  },
  {
    id: "duality",
    label: "Wybrzeże vs. góry",
    color: "#4db6ac",
    description: "Dalmatyńskie Dwoiście — napięcie między wybrzeżem romańskim a górami dinarskimi (planowane)",
    nodes: ["mod_dalmatian_duality", "d_dalmatia", "dalmatian", "d_croatia", "mod_dinaric", "knin", "croatian"],
  },
  {
    id: "faith",
    label: "Wiara i Kościół",
    color: "#ff8a65",
    description: "Katolicyzm chorwacki — papieskie uznanie, sobory, opór rodowy (vanilla + planowane)",
    nodes: ["catholic", "bk_867", "evt_branimir", "evt_split_council", "mod_plemenita", "bk_1066"],
  },
];
