import type { GraphNode, GraphLink, GraphPath } from "./graph-types";

export const HUNGARY_NODES: GraphNode[] = [
  // ═══ ROW 0 — Bookmarks (timeline) ═══
  { id: "bk_867",  label: "867",  type: "bookmark", era: "867",  note: "Madziarzy jeszcze na stepie; Kotlina Panońska pod Wielkimi Morawami; Nitrianie mają liturgię słowiańską od 863",  row: 0, col: 0 },
  { id: "bk_1066", label: "1066", type: "bookmark", era: "1066", note: "Królestwo Węgier pod Arpadami; katolicyzm łaciński; Nitrianie jako enklawy",                                   row: 0, col: 3 },
  { id: "bk_1178", label: "1178", type: "bookmark", era: "1178", note: "Béla III; szczyt potęgi Arpadów; latynizacja zaawansowana",                                                     row: 0, col: 5 },
  { id: "bk_1230", label: "1230", type: "bookmark", era: "1230", note: "Andrzej II; Złota Bulla 1222; erozja władzy centralnej",                                                        row: 0, col: 7 },

  // ═══ ROW 1 — Vanilla mechanics ═══
  { id: "struggle_ssp",     label: "Struggle of Perun",    type: "mechanic", note: "SSP: Walka o wiarę słowiańską; fazy Swarozyc → Perun → zakończenie; Nitrianie: nie poganie vs. chrześcijanie, lecz obrządek słowiański vs. latynizacja", row: 1, col: 0 },
  { id: "tribal_to_feudal", label: "Tribal → Feudal",      type: "mechanic", note: "Przejście ustrojowe — Madziarzy od koczowniczych do feudalnych",                  row: 1, col: 1 },
  { id: "conversion",       label: "Konwersja wiary",      type: "mechanic", note: "Tengri/Pogaństwo → Katolicyzm (~1000, koronacja Stefana I)",                      row: 1, col: 3 },
  { id: "vassalage",        label: "Wasalstwo słowiańskie", type: "mechanic", note: "Nitrianie i Panończycy jako wasale madziarskiego króla",                          row: 1, col: 4 },
  { id: "dejure_drift",     label: "De jure drift",        type: "mechanic", note: "Przesunięcia de jure księstw pod k_hungary",                                      row: 1, col: 5 },
  { id: "succession",       label: "Sukcesja Arpadów",     type: "mechanic", note: "System sukcesji węgierskiej; seniority → primogeniture",                          row: 1, col: 7 },

  // ═══ ROW 2 — Planned events ═══
  { id: "evt_monastery",     label: "Klasztor na Rozdrożu",       type: "event",    planned: true, era: "co 12 lat", note: "sehg_nitrianians.0001 — łaciński biskup żąda latynizacji klasztoru; 3 opcje: opór, akceptacja, patronat madziarski",               row: 2, col: 0 },
  { id: "evt_great_moravia", label: "Pamięć Wielkich Moraw",     type: "event",    planned: true, era: "jednorazowy", note: "sehg_nitrianians.0002 — prestige ≥ 500 + ≥ 3 hrabstwa nitrianians; proklamacja restauracji lub zachowanie w sercu",              row: 2, col: 2 },
  { id: "evt_stefan_latin",  label: "Stefan I narzuca łacinę",  type: "event",    planned: true, era: "~1000",      note: "sehg_event_stefan_enforces_latin — trzy ścieżki: Descent do łaciny / Storm z Węgrami / Harmony — tolerancja obrządku",           row: 2, col: 4 },
  { id: "evt_priest_dispute", label: "Spór kapłanów",            type: "event",    planned: true,                    note: "sehg_event_priestly_jurisdiction_dispute — słowiański kapłan vs. łaciński biskup; wynik: Harmony lub Descent",                    row: 2, col: 5 },
  { id: "evt_lord_tolerates", label: "Madziarski pan przymyka oko", type: "event", planned: true,                    note: "sehg_event_hungarian_lord_looks_away — pragmatyczna koegzystencja; Fervor +2/rok bez konfliktu",                                  row: 2, col: 7 },

  // ═══ ROW 3 — Faith + Dynasty ═══
  { id: "tengri",       label: "Tengri / Pogaństwo",               type: "faith",   note: "Wiara Madziarów w 867 — koczownicze pogaństwo stepowe",                        row: 3, col: 0 },
  { id: "slavic_pagan", label: "Pogaństwo zachodniosłow.",         type: "faith",   note: "Wiara pogańska Słowian; Nitrianie — już chrześcijanie słowiańscy od 863",       row: 3, col: 2 },
  { id: "catholic",     label: "Katolicyzm",                       type: "faith",   note: "Wiara dominująca od ~1000 (koronacja Stefana I)",                               row: 3, col: 4 },
  { id: "arpad",        label: "Arpadowie",                         type: "dynasty", note: "Dynastia założycielska Węgier; Arpad → Stefan I → Béla III → Andrzej II",      row: 3, col: 6 },

  // ═══ ROW 4 — Planned decisions ═══
  { id: "dec_asylum",       label: "Azyl w Klasztorze",            type: "decision", planned: true, note: "sehg_monastery_asylum_decision — wolchwowie ukryci jako mnisi w klasztorze słowiańskim; wymaga Veles's Descent + piety ≥ 200; trwałość 20 lat",  row: 4, col: 1 },
  { id: "dec_restauration",  label: "Restauracja Wielkich Moraw", type: "decision", planned: true, note: "Proklamacja dynastyczna z evt_great_moravia — modifier sehg_great_moravian_claim; -opinion Węgrów",                                               row: 4, col: 4 },

  // ═══ ROW 5 — Titles ═══
  { id: "k_hungary",     label: "k_hungary",      type: "title", note: "Królestwo Węgier — niezależne od 1000 (koronacja Stefana I)",            row: 5, col: 3 },
  { id: "d_pest",        label: "d_pest",          type: "title", note: "Księstwo Pesztu — rdzeń: Pest, Cegled, Szolnok",                         row: 5, col: 1 },
  { id: "d_esztergom",   label: "d_esztergom",     type: "title", note: "Księstwo Esztergom — rdzeń: Esztergom, Komarom, Szekesfehervar",         row: 5, col: 4 },
  { id: "d_transylvania", label: "d_transylvania", type: "title", note: "Księstwo Transylwanii — rdzeń: Feher, Koloszvar, Brasso",                row: 5, col: 6 },

  // ═══ ROW 6 — Planned modifiers ═══
  { id: "mod_cyril_roots",    label: "Cyrylomethodiańskie Korzenie",  type: "modifier", planned: true, note: "sehg_modifier_cyrillomethodian_roots — startowy dla nitrianians; -35% łacińska missionary strength; +5% monthly piety; liturgia słowiańska",  row: 6, col: 0 },
  { id: "mod_pannonian_cross", label: "Panońskie Skrzyżowanie Dróg", type: "modifier", planned: true, note: "sehg_modifier_pannonian_crossroads — startowy dla pannonian_slavs; +15% dochód z handlu; +5% development speed; -10% opór konwersji",        row: 6, col: 2 },
  { id: "mod_hungarian_boot",  label: "Pod Madziarskim Butem",       type: "modifier", planned: true, note: "sehg_modifier_under_hungarian_boot — penalty Fervor; im dłuższe panowanie, tym silniejszy opór kulturowy; counter-intuitive ale historyczne",  row: 6, col: 4 },
  { id: "mod_monks_hidden",    label: "Wolchwowie w habitach",       type: "modifier", planned: true, note: "sehg_slavic_monks_hidden — efekt decyzji Azyl; wolchwowie ukryci jako mnisi; trwałość 20 lat",                                                row: 6, col: 6 },
  { id: "mod_underground",     label: "Enklawy Podziemne",           type: "modifier", planned: true, note: "sehg_modifier_slavic_underground — stare rytuały pod chrześcijańską warstwą; Dziady trwają dłużej; +5 Fervor rocznie",                         row: 6, col: 7 },

  // ═══ ROW 7 — Cultures + heritage ═══
  { id: "nitrianians",      label: "Nitrianians",       type: "culture", note: "Spadkobiercy Wielkich Moraw; liturgia cyrylomethodiańska od 863; ethos_spiritual + Glagolica",   row: 7, col: 1 },
  { id: "pannonian_slavs",  label: "Pannonian Slavs",   type: "culture", note: "Słowianie panońscy (okolice Balatonu); otwarci, handlowi; łatwiejsza asymilacja z Madziarami",   row: 7, col: 3 },
  { id: "hungarian",        label: "Hungarian",          type: "culture", note: "Madziarzy — kultura dominująca; elita rządząca po 895",                                          row: 7, col: 5 },
  { id: "west_slavic",      label: "West Slavic",        type: "culture", note: "Heritage — wspólne dla nitrianians i pannonian_slavs",                                            row: 7, col: 7 },

  // ═══ ROW 8 — Key provinces ═══
  { id: "pest",         label: "Pest",             type: "province", note: "Stolica księstwa Pesztu; rdzeń Kotliny Panońskiej",                       row: 8, col: 0 },
  { id: "esztergom",    label: "Esztergom",        type: "province", note: "Stolica królewska i siedziba prymasowska; koronacja Stefana I",           row: 8, col: 2 },
  { id: "nyitra",       label: "Nyitra",           type: "province", note: "Serce Nitryjczyków; dziedzictwo Wielkich Moraw; centrum liturgii słowiańskiej", row: 8, col: 4 },
  { id: "feher",        label: "Fehér",            type: "province", note: "Stolica Transylwanii; Gyulafehérvár — ośrodek władzy",                    row: 8, col: 5 },
  { id: "szekesfehervar", label: "Székesfehérvár", type: "province", note: "Miejsce koronacji królów Węgier; bazylika królewska",                     row: 8, col: 7 },
];

export const HUNGARY_LINKS: GraphLink[] = [
  // ── Vanilla: timeline flow ──
  { source: "bk_867",  target: "bk_1066", relation: "→" },
  { source: "bk_1066", target: "bk_1178", relation: "→" },
  { source: "bk_1178", target: "bk_1230", relation: "→" },

  // ── Vanilla: title hierarchy ──
  { source: "d_pest",         target: "k_hungary",    relation: "de jure" },
  { source: "d_esztergom",    target: "k_hungary",    relation: "de jure" },
  { source: "d_transylvania", target: "k_hungary",    relation: "de jure" },

  // ── Vanilla: provinces → duchies ──
  { source: "pest",           target: "d_pest",        relation: "stolica" },
  { source: "esztergom",      target: "d_esztergom",   relation: "stolica" },
  { source: "szekesfehervar", target: "d_esztergom",   relation: "hrabstwo" },
  { source: "nyitra",         target: "d_esztergom",   relation: "hrabstwo" },
  { source: "feher",          target: "d_transylvania", relation: "stolica" },

  // ── Vanilla: culture → region / heritage ──
  { source: "nitrianians",     target: "west_slavic",     relation: "heritage" },
  { source: "pannonian_slavs", target: "west_slavic",     relation: "heritage" },
  { source: "nitrianians",     target: "d_esztergom",     relation: "region" },
  { source: "pannonian_slavs", target: "d_pest",          relation: "region" },
  { source: "hungarian",       target: "k_hungary",       relation: "kultura dominująca" },

  // ── Vanilla: dynasty → title ──
  { source: "arpad",    target: "k_hungary",    relation: "rządzi" },
  { source: "arpad",    target: "esztergom",    relation: "stolica" },

  // ── Vanilla: faith ↔ bookmarks ──
  { source: "tengri",       target: "bk_867",   relation: "wiara w" },
  { source: "slavic_pagan", target: "bk_867",   relation: "wiara w (Słowianie)" },
  { source: "catholic",     target: "bk_1066",  relation: "wiara w" },
  { source: "catholic",     target: "bk_1178",  relation: "wiara w" },
  { source: "catholic",     target: "bk_1230",  relation: "wiara w" },
  { source: "conversion",   target: "tengri",   relation: "z" },
  { source: "conversion",   target: "catholic",  relation: "na" },

  // ── Vanilla: SSP Struggle ──
  { source: "struggle_ssp",  target: "slavic_pagan",  relation: "system wiary" },
  { source: "struggle_ssp",  target: "bk_867",        relation: "start" },
  { source: "struggle_ssp",  target: "nitrianians",   relation: "dotyczy (obrządek vs. latynizacja)" },

  // ── Vanilla: bookmark → title state ──
  { source: "bk_867",  target: "k_hungary",   relation: "nie istnieje (Wielkie Morawy)" },
  { source: "bk_1066", target: "k_hungary",   relation: "królestwo" },

  // ── Vanilla: mechanics ──
  { source: "tribal_to_feudal", target: "bk_867",      relation: "start" },
  { source: "tribal_to_feudal", target: "k_hungary",   relation: "dotyczy" },
  { source: "vassalage",        target: "nitrianians",  relation: "dotyczy" },
  { source: "vassalage",        target: "pannonian_slavs", relation: "dotyczy" },
  { source: "vassalage",        target: "k_hungary",    relation: "pod" },
  { source: "dejure_drift",     target: "d_transylvania", relation: "dotyczy" },
  { source: "succession",       target: "arpad",        relation: "dynastia" },
  { source: "succession",       target: "k_hungary",    relation: "dotyczy" },

  // ── Planned: Cyrylomethodiańskie Korzenie (startowy modifier) ──
  { source: "mod_cyril_roots",  target: "nitrianians",  relation: "startowy dla" },
  { source: "mod_cyril_roots",  target: "catholic",     relation: "opór latynizacji" },
  { source: "mod_cyril_roots",  target: "nyitra",       relation: "region" },

  // ── Planned: Panońskie Skrzyżowanie Dróg ──
  { source: "mod_pannonian_cross", target: "pannonian_slavs", relation: "startowy dla" },
  { source: "mod_pannonian_cross", target: "d_pest",          relation: "region" },

  // ── Planned: events → anchors ──
  { source: "evt_monastery",      target: "mod_cyril_roots",   relation: "powiązany z" },
  { source: "evt_monastery",      target: "nitrianians",       relation: "dotyczy" },
  { source: "evt_monastery",      target: "catholic",          relation: "napięcie z łaciną" },
  { source: "evt_great_moravia",  target: "nitrianians",       relation: "dotyczy" },
  { source: "evt_great_moravia",  target: "dec_restauration",  relation: "odblokuje" },
  { source: "evt_stefan_latin",   target: "conversion",        relation: "realizuje" },
  { source: "evt_stefan_latin",   target: "catholic",          relation: "narzuca" },
  { source: "evt_stefan_latin",   target: "nitrianians",       relation: "dotyczy" },
  { source: "evt_priest_dispute", target: "catholic",          relation: "spór z" },
  { source: "evt_priest_dispute", target: "mod_cyril_roots",   relation: "zagrożenie dla" },
  { source: "evt_lord_tolerates", target: "vassalage",         relation: "pragmatyczna koegzystencja" },
  { source: "evt_lord_tolerates", target: "mod_underground",   relation: "umożliwia" },

  // ── Planned: decisions → anchors ──
  { source: "dec_asylum",       target: "mod_monks_hidden",   relation: "nadaje" },
  { source: "dec_asylum",       target: "nitrianians",        relation: "wymaga kultury" },
  { source: "dec_asylum",       target: "struggle_ssp",       relation: "wymaga Veles's Descent" },
  { source: "dec_restauration", target: "arpad",              relation: "-opinion" },
  { source: "dec_restauration", target: "nitrianians",        relation: "dotyczy" },

  // ── Planned: modifiers → anchors ──
  { source: "mod_hungarian_boot",  target: "nitrianians",     relation: "dotyczy" },
  { source: "mod_hungarian_boot",  target: "vassalage",       relation: "wynika z" },
  { source: "mod_hungarian_boot",  target: "hungarian",       relation: "narzucone przez" },
  { source: "mod_monks_hidden",    target: "dec_asylum",      relation: "efekt" },
  { source: "mod_underground",     target: "slavic_pagan",    relation: "przetrwanie wiary" },
  { source: "mod_underground",     target: "nitrianians",     relation: "dotyczy" },
];

export const HUNGARY_PATHS: GraphPath[] = [
  {
    id: "political",
    label: "Ewolucja polityczna",
    color: "#e6b43c",
    description: "Od koczowników do królestwa — Arpadowie, konwersja, feudalizm (vanilla)",
    nodes: ["bk_867", "tribal_to_feudal", "conversion", "k_hungary", "arpad", "succession", "bk_1066", "bk_1230"],
  },
  {
    id: "territory",
    label: "Hierarchia terytorialna",
    color: "#78909c",
    description: "Prowincje → księstwa → królestwo (vanilla)",
    nodes: ["pest", "d_pest", "esztergom", "szekesfehervar", "d_esztergom", "nyitra", "feher", "d_transylvania", "k_hungary"],
  },
  {
    id: "slavic_identity",
    label: "Tożsamość słowiańska",
    color: "#4dd0e1",
    description: "Nitrianie i Panończycy — przetrwanie kultury pod madziarskim panowaniem (vanilla + planowane)",
    nodes: ["nitrianians", "pannonian_slavs", "west_slavic", "vassalage", "mod_cyril_roots", "mod_pannonian_cross", "mod_hungarian_boot"],
  },
  {
    id: "cyrillomethodian",
    label: "Obrządek cyrylomethodiański",
    color: "#ce93d8",
    description: "Liturgia słowiańska vs. latynizacja — unikalna ścieżka Nitryjczyków (planowane)",
    nodes: ["mod_cyril_roots", "evt_monastery", "evt_stefan_latin", "evt_priest_dispute", "catholic", "nitrianians", "nyitra"],
  },
  {
    id: "asylum",
    label: "Azyl w Klasztorze",
    color: "#ff8a65",
    description: "Wolchwowie ukryci jako mnisi — wiara przetrwała w habitach (planowane)",
    nodes: ["struggle_ssp", "slavic_pagan", "dec_asylum", "mod_monks_hidden", "mod_underground", "evt_lord_tolerates"],
  },
  {
    id: "great_moravia",
    label: "Pamięć Wielkich Moraw",
    color: "#e63946",
    description: "Restauracja dziedzictwa Rościsława i Świętopełka (planowane)",
    nodes: ["evt_great_moravia", "dec_restauration", "nitrianians", "arpad", "nyitra"],
  },
];
