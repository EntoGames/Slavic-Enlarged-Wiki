export type { NodeType, GraphNode, GraphLink, GraphPath, KingdomGraphData } from "./graph-types";
export { NODE_TYPE_CONFIG, GRID_ROWS, GRID_COLS } from "./graph-types";
import type { GraphNode, GraphLink, GraphPath } from "./graph-types";

export const POMERANIA_NODES: GraphNode[] = [
  // ═══ ROW 0 — Bookmarks (timeline) ═══
  { id: "bk_867",  label: "867",  type: "bookmark", era: "867",  note: "Plemienne, poganie; Pomorzanie i Ranowie niezalezni",              row: 0, col: 0 },
  { id: "bk_1066", label: "1066", type: "bookmark", era: "1066", note: "Drugie powstanie polabskie; Gotszalk zabity; Arkona centrum kultowe", row: 0, col: 3 },
  { id: "bk_1178", label: "1178", type: "bookmark", era: "1178", note: "Arkona upadla 1168; chrystianizacja Pomorza; Gryfici wasale HRE",   row: 0, col: 5 },
  { id: "bk_1230", label: "1230", type: "bookmark", era: "1230", note: "Pomorze pod wplywem Brandenburgii i Danii; Gryfici lenna",          row: 0, col: 7 },

  // ═══ ROW 1 — Vanilla mechanics ═══
  { id: "struggle_ssp",     label: "Struggle of Perun",    type: "mechanic", note: "SSP: poganstwo zachodnioslow. aktywne 867-~1250; fazy Swarozyc -> Perun -> zakonczenie", row: 1, col: 0 },
  { id: "tribal_to_feudal", label: "Tribal -> Feudal",     type: "mechanic", note: "Przejscie ustrojowe Pomorzan (867 -> XII w.)",                   row: 1, col: 1 },
  { id: "conversion",       label: "Konwersja wiary",      type: "mechanic", note: "Poganstwo -> katolicyzm (Szczecin 1124, Arkona 1168)",           row: 1, col: 3 },
  { id: "hre_vassal",       label: "Wasalstwo HRE",        type: "mechanic", note: "Gryfici wasale cesarstwa od polowy XII w.",                      row: 1, col: 5 },
  { id: "danish_threat",    label: "Najazdy dunskie",      type: "mechanic", note: "Waldemar I oblega Arkone 1168; Dania jako glowne zagrozenie",    row: 1, col: 6 },
  { id: "succession",       label: "Sukcesja plemienna",   type: "mechanic", note: "Podzial wladzy miedzy synow — fragmentacja ksiestw",            row: 1, col: 7 },

  // ═══ ROW 2 — Planned events ═══
  { id: "evt_triglav",        label: "Trzyglaw przemawia",        type: "event",  planned: true, era: "867+",  note: "sepm_triglav.0001: Objawienie Trzygława wladcy Szczecina; 3 opcje (wojenna/handlowa/odmowa)", row: 2, col: 0 },
  { id: "evt_otto_bamberg",   label: "Misja Ottona z Bambergu",   type: "event",  planned: true, era: "1124",  note: "sepm_otto_bamberg: Event chain 1124; 3 sciezki: negocjuj/bron/daj azyl kaplanom",             row: 2, col: 2 },
  { id: "evt_arkona_council", label: "Rada w Arkonie",            type: "event",  planned: true, era: "co 25 lat", note: "sepm_event_arkona_council: Kaplani arbitruja spory federacji; Learning check",            row: 2, col: 4 },
  { id: "evt_otto_sea",       label: "Otto na Morzu (ALT)",       type: "event",  planned: true, era: "1124",  note: "sepm_event_otto_at_sea: ALT — misjonarz blokowany przez flote; 3 sciezki",                  row: 2, col: 5 },
  { id: "evt_waldemar",       label: "Waldemar oblega Arkone",    type: "event",  planned: true, era: "1168",  note: "sepm: ALT — dluga kampania; gracz moze wyslac odsiecz morska",                              row: 2, col: 7 },

  // ═══ ROW 3 — Faith + Dynasty ═══
  { id: "slavic_pagan", label: "Poganstwo zachodnioslow.", type: "faith",   note: "Zachodnioslow. poganstwo: Swietowit, Trzyglaw, Swarozyc; Arkona jako centrum do 1168", row: 3, col: 0 },
  { id: "holy_arkona",  label: "Sw. miejsce: Arkona",     type: "mechanic", note: "Arkona na Rugii — najwazniejsze swiete miejsce SSP; centrum kultu Swietowita",        row: 3, col: 2 },
  { id: "catholic",     label: "Katolicyzm",              type: "faith",   note: "Wiara dominujaca od 1124/1168 (chrystianizacja Szczecina i Rugii)",                    row: 3, col: 4 },
  { id: "gryfici",      label: "Gryfici",                 type: "dynasty", note: "Dynastia ksiazat pomorskich — Wartislaw I (1124+), przetrwala do 1637",                row: 3, col: 6 },

  // ═══ ROW 4 — Planned decisions ═══
  { id: "dec_temples",       label: "Odbuduj Trzy Swiatynie",   type: "decision", planned: true, note: "sepm_triglav_temples_decision: 300 gold + 200 piety; wymaga Obodrzyta/Pomorzanina + c_stettin + Fervor>50", row: 4, col: 0 },
  { id: "dec_arkona_defense", label: "Obrona Arkony",           type: "decision", planned: true, note: "sepm_arkona_defense_decision: major decision — fortyfikacja i obrona swiatyni Swietowita",                 row: 4, col: 2 },
  { id: "dec_federation",    label: "Federacja Polabska",       type: "decision", planned: true, note: "sepm_decision_polabian_federation: ALT — zjednocz >=3 tytuly polabskie; Fervor>60 + brak wojen",           row: 4, col: 4 },
  { id: "dec_baltic_arc",    label: "Baltycki Luk Poganski",    type: "decision", planned: true, note: "sepm_decision_baltic_arc: ALT — sojusz z poganska Litwa; -20% missionary efficiency",                     row: 4, col: 6 },

  // ═══ ROW 5 — Titles ═══
  { id: "e_hre",         label: "e_hre",         type: "title", note: "Swiete Cesarstwo Rzymskie — suweren Pomorza od XII w.",           row: 5, col: 7 },
  { id: "k_pomerania",   label: "k_pomerania",   type: "title", note: "Krolestwo Pomorza — de jure dla d_pomerania, d_mecklemburg, d_rugia", row: 5, col: 4 },
  { id: "d_pomerania",   label: "d_pomerania",   type: "title", note: "Ksiestwo Pomorza — rdzen: Szczecin, Kolobrzeg, Cammin",          row: 5, col: 1 },
  { id: "d_mecklemburg", label: "d_mecklemburg",  type: "title", note: "Ksiestwo Meklemburgii — Obodryci: Schwerin, Rostock",           row: 5, col: 3 },
  { id: "d_rugia",       label: "d_rugia",        type: "title", note: "Ksiestwo Rugii — Ranowie: Rugen, Stralsund, Wolgast",           row: 5, col: 5 },

  // ═══ ROW 6 — Planned modifiers + trait ═══
  { id: "mod_triglav_cult",   label: "Kult Trzygława",           type: "modifier", planned: true, note: "sepm_triglav_cult_active: +25% opor konwersji, +10 opinion pogan, -5 opinion chrzescijan na c_stettin",   row: 6, col: 0 },
  { id: "mod_triglav_restored", label: "Swiatynie odbudowane",   type: "modifier", planned: true, note: "sepm_triglav_restored: +opor konwersji, +bonus rekrutacji zbrojnych w Szczecinie",                        row: 6, col: 1 },
  { id: "mod_dual_cult",      label: "Os Kultu (Arkona+Trzyglaw)", type: "modifier", planned: true, note: "sepm_modifier_dual_cult_axis: synergia obu osrodkow kultowych; +cohesion federacji",                   row: 6, col: 2 },
  { id: "mod_baltic_fleet",   label: "Flota Baltycka",           type: "modifier", planned: true, note: "sepm_modifier_baltic_fleet: ALT — -30% invasion efficiency z zachodu; +15% trade income z portow",       row: 6, col: 4 },
  { id: "mod_federation",     label: "Federacja aktywna",        type: "modifier", planned: true, note: "sepm_modifier_federation_active: ALT — wspolny modifier dla czlonkow federacji",                         row: 6, col: 5 },
  { id: "trait_triglav",      label: "Naznaczony przez Trzygława", type: "trait",  planned: true, note: "Trait kaplanski: +2 learning, dostep do opcji proroctwa",                                               row: 6, col: 7 },

  // ═══ ROW 7 — Cultures + heritage ═══
  { id: "pomeranian",  label: "Pomeranian",  type: "culture", note: "Zachodnislowianska; Pomorzanie szczecinscy, dorzecze Odry",    row: 7, col: 1 },
  { id: "rani",        label: "Rani",        type: "culture", note: "Zachodnislowianska; Ranowie z Rugii, straze Arkony",           row: 7, col: 3 },
  { id: "west_slavic", label: "West Slavic", type: "culture", note: "Heritage — wspolne dla Pomorzan, Ranow, Obodrytow, Lutyków", row: 7, col: 5 },

  // ═══ ROW 8 — Key provinces + planned building ═══
  { id: "szczecin",  label: "Szczecin",   type: "province", note: "Stolica Pomorza; centrum kultu Trzygława (3 swiatynie)",       row: 8, col: 0 },
  { id: "rugen",     label: "Rugen",      type: "province", note: "Wyspa Rugia; Arkona — najwazniejszy osrodek kultowy Slowian",  row: 8, col: 2 },
  { id: "schwerin",  label: "Schwerin",   type: "province", note: "Siedziba Obodrytow; kluczowe hrabstwo Meklemburgii",           row: 8, col: 4 },
  { id: "kolobrzeg", label: "Kolobrzeg",  type: "province", note: "Port Pomorza; handlowe centrum nadmorskie",                    row: 8, col: 5 },
  { id: "gdansk",    label: "Gdansk",     type: "province", note: "Gdansk — strategiczny port, przyszla Hanza",                   row: 8, col: 7 },
];

export const POMERANIA_LINKS: GraphLink[] = [
  // ── Vanilla: timeline flow ──
  { source: "bk_867",  target: "bk_1066", relation: "→" },
  { source: "bk_1066", target: "bk_1178", relation: "→" },
  { source: "bk_1178", target: "bk_1230", relation: "→" },

  // ── Vanilla: title hierarchy ──
  { source: "d_pomerania",   target: "k_pomerania",   relation: "de jure" },
  { source: "d_mecklemburg", target: "k_pomerania",   relation: "de jure" },
  { source: "d_rugia",       target: "k_pomerania",   relation: "de jure" },
  { source: "k_pomerania",   target: "e_hre",         relation: "wasal (XII w.+)" },

  // ── Vanilla: provinces → duchies ──
  { source: "szczecin",  target: "d_pomerania",   relation: "stolica" },
  { source: "kolobrzeg", target: "d_pomerania",   relation: "hrabstwo" },
  { source: "schwerin",  target: "d_mecklemburg", relation: "hrabstwo" },
  { source: "rugen",     target: "d_rugia",       relation: "stolica" },
  { source: "gdansk",    target: "d_pomerania",   relation: "hrabstwo" },

  // ── Vanilla: culture → region / heritage ──
  { source: "pomeranian", target: "d_pomerania",   relation: "region" },
  { source: "rani",       target: "d_rugia",       relation: "region" },
  { source: "pomeranian", target: "west_slavic",   relation: "heritage" },
  { source: "rani",       target: "west_slavic",   relation: "heritage" },

  // ── Vanilla: dynasty → title ──
  { source: "gryfici",    target: "k_pomerania",   relation: "rzadzi" },
  { source: "gryfici",    target: "d_pomerania",   relation: "rzadzi" },
  { source: "gryfici",    target: "szczecin",      relation: "stolica" },

  // ── Vanilla: faith ↔ bookmarks ──
  { source: "slavic_pagan", target: "bk_867",       relation: "wiara w" },
  { source: "slavic_pagan", target: "bk_1066",      relation: "wiara w" },
  { source: "catholic",     target: "bk_1178",      relation: "wiara w" },
  { source: "catholic",     target: "bk_1230",      relation: "wiara w" },
  { source: "conversion",   target: "slavic_pagan", relation: "z" },
  { source: "conversion",   target: "catholic",     relation: "na" },

  // ── Vanilla/SSP: poganstwo zachodnioslowianskie ──
  { source: "struggle_ssp",  target: "slavic_pagan", relation: "system wiary" },
  { source: "struggle_ssp",  target: "bk_867",       relation: "start" },
  { source: "struggle_ssp",  target: "bk_1066",      relation: "aktywny" },
  { source: "holy_arkona",   target: "rugen",         relation: "lokalizacja" },
  { source: "holy_arkona",   target: "slavic_pagan",  relation: "swiete miejsce" },

  // ── Vanilla: bookmark → title state ──
  { source: "bk_867",       target: "d_pomerania",   relation: "tytularne" },
  { source: "bk_1066",      target: "d_pomerania",   relation: "tytularne" },
  { source: "bk_1178",      target: "k_pomerania",   relation: "wasal HRE" },

  // ── Vanilla: mechanics ──
  { source: "tribal_to_feudal", target: "bk_867",       relation: "start" },
  { source: "tribal_to_feudal", target: "d_pomerania",   relation: "dotyczy" },
  { source: "hre_vassal",       target: "k_pomerania",   relation: "dotyczy" },
  { source: "hre_vassal",       target: "e_hre",         relation: "suweren" },
  { source: "danish_threat",    target: "d_rugia",       relation: "dotyczy" },
  { source: "danish_threat",    target: "bk_1178",       relation: "era" },
  { source: "succession",       target: "gryfici",       relation: "dotyczy" },

  // ── Planned: Trzyglaw event chain ──
  { source: "evt_triglav",       target: "szczecin",          relation: "lokalizacja" },
  { source: "evt_triglav",       target: "slavic_pagan",      relation: "kontekst" },
  { source: "evt_triglav",       target: "mod_triglav_cult",  relation: "aktywuje" },
  { source: "evt_triglav",       target: "trait_triglav",     relation: "moze nadac" },

  // ── Planned: Odbudowa swiatyn ──
  { source: "dec_temples",       target: "szczecin",              relation: "wymaga" },
  { source: "dec_temples",       target: "mod_triglav_restored",  relation: "nadaje" },
  { source: "dec_temples",       target: "mod_triglav_cult",      relation: "wymaga" },

  // ── Planned: Otto z Bambergu ──
  { source: "evt_otto_bamberg",  target: "szczecin",          relation: "lokalizacja" },
  { source: "evt_otto_bamberg",  target: "conversion",        relation: "realizuje" },
  { source: "evt_otto_bamberg",  target: "mod_triglav_cult",  relation: "zagrozenie dla" },
  { source: "evt_otto_bamberg",  target: "bk_1178",           relation: "era" },

  // ── Planned: Os Kultu — synergia Arkona + Trzyglaw ──
  { source: "mod_dual_cult",     target: "mod_triglav_cult",  relation: "wymaga" },
  { source: "mod_dual_cult",     target: "holy_arkona",       relation: "wymaga" },
  { source: "mod_dual_cult",     target: "dec_federation",    relation: "wspiera" },

  // ── Planned: Obrona Arkony ──
  { source: "dec_arkona_defense", target: "rugen",            relation: "lokalizacja" },
  { source: "dec_arkona_defense", target: "holy_arkona",      relation: "broni" },
  { source: "dec_arkona_defense", target: "rani",             relation: "wymaga kultury" },

  // ── Planned: ALT — Federacja Polabska ──
  { source: "dec_federation",    target: "mod_federation",    relation: "tworzy" },
  { source: "dec_federation",    target: "k_pomerania",       relation: "dotyczy" },
  { source: "mod_federation",    target: "d_pomerania",       relation: "dotyczy" },
  { source: "mod_federation",    target: "d_mecklemburg",     relation: "dotyczy" },
  { source: "mod_federation",    target: "d_rugia",           relation: "dotyczy" },

  // ── Planned: ALT — Rada w Arkonie ──
  { source: "evt_arkona_council", target: "holy_arkona",      relation: "lokalizacja" },
  { source: "evt_arkona_council", target: "mod_federation",   relation: "utrzymuje" },

  // ── Planned: ALT — Flota Baltycka ──
  { source: "mod_baltic_fleet",  target: "d_rugia",           relation: "dotyczy" },
  { source: "mod_baltic_fleet",  target: "d_pomerania",       relation: "dotyczy" },
  { source: "mod_baltic_fleet",  target: "danish_threat",     relation: "przeciwdziala" },

  // ── Planned: ALT — Otto na Morzu ──
  { source: "evt_otto_sea",      target: "mod_baltic_fleet",  relation: "wymaga" },
  { source: "evt_otto_sea",      target: "evt_otto_bamberg",  relation: "ALT wersja" },
  { source: "evt_otto_sea",      target: "conversion",        relation: "blokuje" },

  // ── Planned: ALT — Baltycki Luk Poganski ──
  { source: "dec_baltic_arc",    target: "dec_federation",    relation: "rozszerza" },
  { source: "dec_baltic_arc",    target: "slavic_pagan",      relation: "wzmacnia" },

  // ── Planned: ALT — Waldemar oblega Arkone ──
  { source: "evt_waldemar",      target: "rugen",             relation: "lokalizacja" },
  { source: "evt_waldemar",      target: "danish_threat",     relation: "realizuje" },
  { source: "evt_waldemar",      target: "holy_arkona",       relation: "zagrozenie dla" },
  { source: "evt_waldemar",      target: "mod_baltic_fleet",  relation: "odpowiada na" },
];

export const POMERANIA_PATHS: GraphPath[] = [
  // ── Vanilla paths ──
  {
    id: "political",
    label: "Ewolucja polityczna",
    color: "#e6b43c",
    description: "Od plemion do wasalstwa HRE — Gryfici i chrystianizacja Pomorza (vanilla)",
    nodes: ["bk_867", "tribal_to_feudal", "d_pomerania", "gryfici", "conversion", "hre_vassal", "k_pomerania", "e_hre", "bk_1230"],
  },
  {
    id: "territory",
    label: "Hierarchia terytorialna",
    color: "#78909c",
    description: "Prowincje -> ksiestwa -> krolestwo -> cesarstwo (vanilla)",
    nodes: ["szczecin", "kolobrzeg", "gdansk", "d_pomerania", "schwerin", "d_mecklemburg", "rugen", "d_rugia", "k_pomerania", "e_hre"],
  },
  {
    id: "faith_struggle",
    label: "Walka o wiare",
    color: "#ce93d8",
    description: "Poganstwo zachodnioslow. -> chrystianizacja Pomorza i Rugii (vanilla + SSP)",
    nodes: ["slavic_pagan", "struggle_ssp", "holy_arkona", "bk_867", "bk_1066", "conversion", "catholic", "bk_1178"],
  },

  // ── Planned paths ──
  {
    id: "triglav_cult",
    label: "Kult Trzygława",
    color: "#e63946",
    description: "Trzyglaw ze Szczecina — event, swiatynie, modifier kultowy, misja Ottona (planowane HIST)",
    nodes: ["szczecin", "evt_triglav", "mod_triglav_cult", "dec_temples", "mod_triglav_restored", "evt_otto_bamberg", "trait_triglav"],
  },
  {
    id: "dual_cult",
    label: "Os Kultu Arkona-Trzyglaw",
    color: "#ff8a65",
    description: "Synergia dwoch osrodkow kultowych: Arkona (Swietowit) + Szczecin (Trzyglaw) (planowane)",
    nodes: ["holy_arkona", "rugen", "mod_triglav_cult", "szczecin", "mod_dual_cult", "dec_federation"],
  },
  {
    id: "federation_alt",
    label: "Federacja Polabska (ALT)",
    color: "#4db6ac",
    description: "Alternatywna historia: Federacja Polabska trwa 150 lat (planowane ALT)",
    nodes: ["dec_federation", "mod_federation", "evt_arkona_council", "mod_baltic_fleet", "evt_otto_sea", "dec_baltic_arc", "evt_waldemar"],
  },
  {
    id: "arkona_defense",
    label: "Obrona Arkony",
    color: "#7986cb",
    description: "Ranowie bronia swiatyni Swietowita — major decision + najazd Waldemara (planowane)",
    nodes: ["rani", "rugen", "holy_arkona", "dec_arkona_defense", "danish_threat", "evt_waldemar", "slavic_pagan"],
  },
];
