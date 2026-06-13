export type { NodeType, GraphNode, GraphLink, GraphPath, KingdomGraphData } from "./graph-types";
export { NODE_TYPE_CONFIG, GRID_ROWS, GRID_COLS } from "./graph-types";
import type { GraphNode, GraphLink, GraphPath } from "./graph-types";

export const BOHEMIA_NODES: GraphNode[] = [
  // ═══ ROW 0 — Bookmarks (timeline) ═══
  { id: "bk_867",       label: "867",            type: "bookmark", era: "867",  note: "Neklan (168351, slavic_pagan). Wasale: Vitislav Slavníkovec (c_hradec), Slavibor Pšovci (c_litomerice), Bořivoj (c_zatec). Slavomir Mojmírovci rządzi d_moravia",       row: 0, col: 0 },
  { id: "bk_1066",      label: "1066",           type: "bookmark", era: "1066", note: "Vratislav II (522, edu_stewardship_5!), wasal HRE. Wasale: Čáslav Vršovec (c_zatec), Ota Sličný (c_olomouc), Konrád (c_brno+znojmo). Rivalry: Vratislav vs brat Jaromír (biskup)", row: 0, col: 3 },
  { id: "bk_1178",      label: "1178",           type: "bookmark", era: "1178", note: "Bedřich (212850), wasal HRE. Rivalry: Soběslav II vs Bedřich (set_relation_rival w vanilla!). Morawy: Konrád Ota (c_brno, c_znojmo)",        row: 0, col: 5 },
  { id: "bk_1230",      label: "1230",           type: "bookmark", era: "1230", note: "Václav I (96000), pierwszy król w tym bookmarku. Přemysl margrabia Moraw (96044). Late-game: Záviš z Falkenštejna (Vítkovci), Mikuláš Opavský (bastard)", row: 0, col: 7 },

  // ═══ ROW 1 — Vanilla mechanics ═══
  { id: "struggle_ssp",     label: "Struggle of Perun",  type: "mechanic", note: "SSP (opcjonalny addon): pogaństwo zachodniosłow. aktywne 867–~1250; fazy Swarozyc → Perun → zakończenie. Soft dependency — kingdom działa bez SSP", row: 1, col: 0 },
  { id: "tribal_to_feudal", label: "Tribal → Feudal",    type: "mechanic", note: "Przejście ustrojowe Czech (867 → późniejsze daty)", row: 1, col: 1 },
  { id: "appanage",         label: "Apanaże morawskie",  type: "mechanic", planned: true, note: "System dzielnicowy: Olomouc, Brno, Znojmo. Vanilla: separate holders od ~1061 (Ota Sličný, Konrád, etc.). Mod: mechanika apanaży z modifierami", row: 1, col: 2 },
  { id: "conversion",       label: "Konwersja wiary",    type: "mechanic", note: "Pogaństwo → katolicyzm (~883, chrzest Bořivoja)",   row: 1, col: 3 },
  { id: "ostsiedlung",      label: "Ostsiedlung",        type: "mechanic", note: "Kolonizacja niemiecka od XII w. — osadnicy w pogranicznych prowincjach Czech", row: 1, col: 4 },
  { id: "hre_vassal",       label: "Wasalstwo HRE",      type: "mechanic", note: "k_bohemia wasal cesarstwa od 898",                  row: 1, col: 5 },
  { id: "dejure_drift",     label: "De jure drift",      type: "mechanic", note: "d_moravia: k_moravia → k_bohemia (1019)",           row: 1, col: 6 },
  { id: "elective",         label: "Sukcesja elekcyjna", type: "mechanic", note: "Złota Bulla Sycylijska 1212 — elektor cesarski",    row: 1, col: 7 },

  // ═══ ROW 2 — Planned: event chain (chrystianizacja + opór pogański) ═══
  { id: "evt_baptism",       label: "Chrzest Bořivoja",      type: "event", planned: true, era: "~883",     note: "Chrzest przez Metodego w Welehradzie",                      row: 2, col: 0 },
  { id: "evt_pagan_resist",  label: "Opór pogański",         type: "event", planned: true, era: "883–1100", note: "Pogańscy poddani sprzeciwiają się konwersji; ryzyko rewolty", row: 2, col: 1 },
  { id: "evt_wenceslas",     label: "Śmierć św. Wacława",   type: "event", planned: true, era: "935",      note: "Zamordowany przez Bolesława I Srogiego",                    row: 2, col: 2 },
  { id: "evt_libice",         label: "Masakra w Libicach",    type: "event", planned: true, era: "995",      note: "Přemyslidzi mordują Slavníkovców — eliminacja rywalskiej dynastii lub sojusz (fork)", row: 2, col: 3 },
  { id: "evt_cult",          label: "Kult św. Wacława",     type: "event", planned: true, era: "~970",     note: "Legenda Christiani, patron Czech",                          row: 2, col: 4 },
  { id: "evt_bishopric",     label: "Biskupstwo praskie",    type: "event", planned: true, era: "973",      note: "Biskup Dětmar, potem Wojciech",                             row: 2, col: 5 },
  { id: "evt_arkona_echo",   label: "Echo upadku Arkony",   type: "event", planned: true, era: "1168",     note: "Upadek ostatniej twierdzy pogańskiej — wpływ na Czechy",    row: 2, col: 6 },
  { id: "evt_cyril",         label: "Misja Cyryla i Metodego", type: "event", planned: true, era: "863",   note: "Liturgia słowiańska, głagolica",                            row: 2, col: 7 },

  // ═══ ROW 3 — Faith + Dynasty ═══
  { id: "slavic_pagan", label: "Pogaństwo zachodniosłow.", type: "faith",   note: "Zachodnia Słowiańszczyzna pogańska do ~1250 (Połabianie, Ranowie, Arkona 1168); w Czechach oficjalnie do ~883, ale nurt ludowy trwa", row: 3, col: 0 },
  { id: "holy_praha",   label: "Św. miejsce: Praha",     type: "mechanic", note: "Praha — jedno z 5 świętych miejsc zachodniosłow. pogaństwa (SSP); napięcie z katolickim dworem", row: 3, col: 1 },
  { id: "catholic",     label: "Katolicyzm",             type: "faith",   note: "Wiara dominująca od ~883 (chrzest Bořivoja)",     row: 3, col: 2 },
  { id: "slavnikovci",  label: "Slavníkovci",            type: "dynasty", note: "Dynasty 9588, 10 postaci vanilla. Holderzy c_hradec 867–1004. Spokrewnieni z Přemyslidami (Střezislava). Masakra 995.9.27 — 4 synów Slavníka ginie jednego dnia. Vojtěch/Adalbert: święty, biskup Pragi", row: 3, col: 3 },
  { id: "premyslid",    label: "Přemyslidzi",            type: "dynasty", note: "Dynasty 506, najdłuższa czeska dynastia (IX–XIV w.). Hlavní linie: Neklan→Bořivoj→Boleslav→Břetislav→Vratislav II→Otakar I→Václav III (†1306, wygaśnięcie). Gałęzie: Děpoltici, Mikuláš Opavský (bastard, dyn. 10110)", row: 3, col: 4 },
  { id: "depoltici",    label: "Děpoltici",              type: "dynasty", planned: true, note: "Cadet branch Přemyslidów (212863→212866→96027-96030). W vanilla BEZ tytułów — luka do wypełnienia. 96028 ginie pod Legnicą 1241. Planowane: nadać tytuły + event chain sukcesji", row: 3, col: 5 },
  { id: "vrsovci",      label: "Vršovci",                type: "dynasty", note: "Dynasty 10107, 23 postaci vanilla! Holder c_zatec: Čáslav (1066), Mutina (1092). Masakra 1108.10.27–29: 8+ postaci death_murder. Ocalały: Jan (273044). Gałąź morawska: Hruta (kaszelan Bitova)", row: 3, col: 6 },
  { id: "hroznatici",   label: "Hroznatici",             type: "dynasty", planned: true, note: "Ród szlachecki — fundator klasztoru w Teplej; wpływ w zachodniej Bohemii", row: 3, col: 7 },

  // ═══ ROW 4 — Planned: decisions + blokada ═══
  { id: "blocked_pagan",      label: "Blokada: decyzje SSP",       type: "mechanic", planned: true,                   note: "Po konwersji: pogańskie decyzje SSP (Obrona Arkony, Wiec, Odrodzenie) niedostępne; odblokowane przy powrocie do pogaństwa", row: 4, col: 0 },
  { id: "evt_vrsovci",        label: "Rzeź Vršovców (1108)",       type: "event",    planned: true, era: "1108",      note: "Svatopluk wymordował cały ród Vršovców — dramatyczny event z gameplay impact (stability, tyrania)", row: 4, col: 1 },
  { id: "dec_coronation",     label: "Koronacja w Pradze",         type: "decision", planned: true, era: "1085+",    note: "Wymaga katedry w Pradze; WYMAGA konwersji — zablokowana dla pogan", row: 4, col: 2 },
  { id: "dec_slavnikovci",    label: "Sojusz lub eliminacja",      type: "decision", planned: true, era: "~980–995", note: "Fork: sojusz z Slavníkovcami (+ally) lub eliminacja (+tyrania, monopol władzy)", row: 4, col: 3 },
  { id: "dec_pilgrimage",     label: "Pielgrzymka do św. Wacława", type: "decision", planned: true, era: "935+",     note: "Powtarzalna, cooldown 5 lat; WYMAGA katolicyzmu",           row: 4, col: 4 },
  { id: "mod_appanage",       label: "System apanaży",             type: "modifier", planned: true,                   note: "Kadeci Přemyslidów rządzą dzielnicami: -autonomia, +lojalność dynastii", row: 4, col: 5 },
  { id: "dec_velehrad",       label: "Dziedzic Welehradu",         type: "decision", planned: true, era: "906–1066", note: "Reintegracja Moraw (500 prestiżu)",     row: 4, col: 6 },
  { id: "dec_margraviate",    label: "Zjednocz Morawy",            type: "decision", planned: true, era: "1019+",    note: "Progresja: 3 apanaże → margrabistwo Moraw. Inspiracja: Margraviate of Moravia mod", row: 4, col: 7 },

  // ═══ ROW 5 — Titles ═══
  { id: "e_hre",        label: "e_hre",          type: "title", note: "Święte Cesarstwo Rzymskie — suweren Czech od 898",             row: 5, col: 7 },
  { id: "k_bohemia",    label: "k_bohemia",      type: "title", note: "Królestwo Czech — tytularne do 1198, elektorskie od 1212",     row: 5, col: 4 },
  { id: "d_bohemia",    label: "d_bohemia",      type: "title", note: "Księstwo Czech — rdzeń: Praha, Plzeň, Litoměřice, Žatec",     row: 5, col: 1 },
  { id: "d_moravia",    label: "d_moravia",       type: "title", note: "Księstwo Moraw — de jure k_moravia do 1019, potem k_bohemia", row: 5, col: 6 },

  // ═══ ROW 6 — Planned: modifiers + trait + court + tenet ═══
  { id: "trait_christian",      label: "Nowy chrześcijanin",     type: "trait",    planned: true, note: "Marker Bořivoja po chrzcie",                                      row: 6, col: 0 },
  { id: "mod_pagan_undercurrent", label: "Pogański nurt",        type: "modifier", planned: true, note: "Pogańscy poddani w chrześcijańskim królestwie: -pobożność, +ryzyko rewolty, ale +populacja", row: 6, col: 1 },
  { id: "mod_crowned",         label: "Koronowany w Pradze",    type: "modifier", planned: true, note: "+prestiż, +pobożność",                                            row: 6, col: 2 },
  { id: "mod_wenceslas",        label: "Weneracja św. Wacława", type: "modifier", planned: true, note: "+prestiż dynastii, +pobożność",                                   row: 6, col: 4 },
  { id: "mod_dual_control",     label: "Kontrola Czech i Moraw", type: "modifier", planned: true, note: "+10% wzrost rozwoju, +5 prestiżu",                               row: 6, col: 5 },
  { id: "mod_german_settlers", label: "Niemieccy osadnicy",     type: "modifier", planned: true, note: "+rozwój prowincji, -akceptacja kulturowa czeskiej; ryzyko germanizacji", row: 6, col: 3 },
  { id: "court_chaplain",      label: "Kapelan praski",         type: "court",    planned: true, era: "973+", note: "Pozycja dworska po biskupstwie",                      row: 6, col: 6 },
  { id: "tenet_liturgy",       label: "Liturgia słowiańska",    type: "tenet",    planned: true, note: "Wspólna z Słowacją (sesk_)",                                       row: 6, col: 7 },

  // ═══ ROW 7 — Cultures ═══
  { id: "czech",        label: "Czech",          type: "culture", note: "Zachodnioslowiańska, heritage west_slavic, język czech_slovak", row: 7, col: 1 },
  { id: "west_slavic",  label: "West Slavic",    type: "culture", note: "Heritage — wspólne dla Czech, Moraw, Polski, Łużyc",          row: 7, col: 3 },
  { id: "german",       label: "German",         type: "culture", note: "Osadnicy niemieccy w pogranicznych prowincjach od XII w. (Ostsiedlung)", row: 7, col: 5 },
  { id: "moravian",     label: "Moravian",       type: "culture", note: "Zachodnioslowiańska, heritage west_slavic, język czech_slovak", row: 7, col: 6 },

  // ═══ ROW 8 — Provinces + planned buildings ═══
  { id: "praha",           label: "Praha",              type: "province", note: "Stolica — 2 baronie: Praha, Vyšehrad",           row: 8, col: 0 },
  { id: "bld_vysehrad",    label: "Vyšehrad",           type: "building", planned: true, note: "Mityczna siedziba Přemyslidów (Libuše); holy site ALBO legendarny modifier — żaden mod tego nie ma", row: 8, col: 1 },
  { id: "plzen",           label: "Plzeň",              type: "province", note: "Zachodnie Czechy",                                row: 8, col: 2 },
  { id: "znojmo",          label: "Znojmo",             type: "province", note: "Trzecie księstwo morawskie — apanaż kadeckich Přemyslidów; planowane: Rotunda św. Katarzyny (+piety +prestige)", row: 8, col: 3 },
  { id: "mod_silver",      label: "Srebro Kutnej Hory", type: "modifier", planned: true, era: "1178+", note: "+50% podatków (prow. 470)", row: 8, col: 4 },
  { id: "olomouc",         label: "Olomouc",            type: "province", note: "Kluczowe hrabstwo Moraw — apanaż starszego kadeta; planowane: Zamek ołomuniecki (+learning +piety)", row: 8, col: 5 },
  { id: "bld_sazava",      label: "Klasztor w Sázavie", type: "building", planned: true, era: "1032–1096", note: "Ostatnia twierdza liturgii słowiańskiej", row: 8, col: 6 },
  { id: "brno",            label: "Brno",               type: "province", note: "Hrabstwo morawskie, od 1066 pod d_bohemia; planowane: Špilberk (+fortification +control)", row: 8, col: 7 },
];

export const BOHEMIA_LINKS: GraphLink[] = [
  // ── Vanilla: timeline flow ──
  { source: "bk_867",  target: "bk_1066", relation: "→" },
  { source: "bk_1066", target: "bk_1178", relation: "→" },
  { source: "bk_1178", target: "bk_1230", relation: "→" },

  // ── Vanilla: title hierarchy ──
  { source: "d_bohemia",   target: "k_bohemia",    relation: "de jure" },
  { source: "d_moravia",   target: "k_bohemia",    relation: "de jure (1019+)" },
  { source: "k_bohemia",   target: "e_hre",        relation: "wasal (898+)" },

  // ── Vanilla: provinces → duchies ──
  { source: "praha",       target: "d_bohemia",    relation: "stolica" },
  { source: "plzen",       target: "d_bohemia",    relation: "hrabstwo" },
  { source: "olomouc",     target: "d_moravia",    relation: "hrabstwo" },
  { source: "brno",        target: "d_moravia",    relation: "hrabstwo" },

  // ── Vanilla: culture → region / heritage ──
  { source: "czech",       target: "d_bohemia",    relation: "region" },
  { source: "moravian",    target: "d_moravia",    relation: "region" },
  { source: "czech",       target: "west_slavic",  relation: "heritage" },
  { source: "moravian",    target: "west_slavic",  relation: "heritage" },

  // ── Vanilla: dynasty → title ──
  { source: "premyslid",   target: "k_bohemia",    relation: "rządzi" },
  { source: "premyslid",   target: "d_bohemia",    relation: "rządzi" },
  { source: "premyslid",   target: "praha",        relation: "stolica" },

  // ── Vanilla: faith ↔ bookmarks ──
  { source: "slavic_pagan", target: "bk_867",       relation: "wiara w" },
  { source: "catholic",     target: "bk_1066",      relation: "wiara w" },
  { source: "catholic",     target: "bk_1178",      relation: "wiara w" },
  { source: "catholic",     target: "bk_1230",      relation: "wiara w" },
  { source: "conversion",   target: "slavic_pagan", relation: "z" },
  { source: "conversion",   target: "catholic",     relation: "na" },

  // ── Vanilla/SSP: pogaństwo zachodniosłowiańskie trwa ──
  { source: "struggle_ssp",  target: "slavic_pagan", relation: "system wiary" },
  { source: "struggle_ssp",  target: "bk_867",       relation: "start" },
  { source: "struggle_ssp",  target: "bk_1066",      relation: "aktywny" },
  { source: "struggle_ssp",  target: "bk_1178",      relation: "aktywny" },
  { source: "holy_praha",    target: "praha",         relation: "lokalizacja" },
  { source: "holy_praha",    target: "slavic_pagan",  relation: "święte miejsce" },
  { source: "holy_praha",    target: "catholic",      relation: "napięcie z" },

  // ── Vanilla: bookmark → title state ──
  { source: "bk_867",       target: "d_bohemia",    relation: "tytularne" },
  { source: "bk_1066",      target: "k_bohemia",    relation: "wasal HRE" },
  { source: "bk_1230",      target: "k_bohemia",    relation: "królestwo" },

  // ── Vanilla: mechanics ──
  { source: "dejure_drift",     target: "d_moravia",    relation: "dotyczy" },
  { source: "hre_vassal",       target: "k_bohemia",    relation: "dotyczy" },
  { source: "hre_vassal",       target: "e_hre",        relation: "suweren" },
  { source: "elective",         target: "k_bohemia",    relation: "od 1212" },
  { source: "elective",         target: "bk_1230",      relation: "aktywne w" },
  { source: "tribal_to_feudal", target: "bk_867",       relation: "start" },
  { source: "tribal_to_feudal", target: "d_bohemia",    relation: "dotyczy" },

  // ── Planned: chrystianizacja event chain ──
  { source: "evt_baptism",    target: "evt_wenceslas",   relation: "odblokuje" },
  { source: "evt_wenceslas",  target: "evt_cult",        relation: "wyzwala" },
  { source: "evt_cult",       target: "evt_bishopric",   relation: "następuje" },
  { source: "evt_baptism",    target: "trait_christian",  relation: "nadaje" },
  { source: "evt_cult",       target: "mod_wenceslas",   relation: "nadaje" },
  { source: "evt_bishopric",  target: "court_chaplain",  relation: "odblokuje" },

  // ── Planned: pogański opór i blokada ──
  { source: "evt_baptism",       target: "evt_pagan_resist",      relation: "wyzwala" },
  { source: "evt_pagan_resist",  target: "mod_pagan_undercurrent", relation: "nadaje" },
  { source: "evt_pagan_resist",  target: "slavic_pagan",          relation: "wynika z" },
  { source: "evt_pagan_resist",  target: "struggle_ssp",          relation: "powiązany z" },
  { source: "evt_arkona_echo",   target: "slavic_pagan",          relation: "kres pogaństwa" },
  { source: "evt_arkona_echo",   target: "bld_sazava",            relation: "kontekst" },
  { source: "evt_arkona_echo",   target: "bk_1178",               relation: "era" },
  { source: "mod_pagan_undercurrent", target: "d_bohemia",        relation: "dotyczy" },
  { source: "blocked_pagan",     target: "struggle_ssp",          relation: "wynika z" },
  { source: "blocked_pagan",     target: "conversion",            relation: "blokuje po" },
  { source: "blocked_pagan",     target: "dec_coronation",        relation: "odblokuje" },

  // ── Planned: events → vanilla anchors ──
  { source: "evt_baptism",    target: "slavic_pagan",    relation: "kontekst" },
  { source: "evt_baptism",    target: "conversion",      relation: "realizuje" },
  { source: "evt_cyril",      target: "tenet_liturgy",   relation: "tworzy" },
  { source: "evt_cyril",      target: "evt_baptism",     relation: "kontekst" },
  { source: "evt_bishopric",  target: "catholic",        relation: "umacnia" },

  // ── Planned: decisions → vanilla/planned anchors ──
  { source: "dec_coronation", target: "praha",           relation: "wymaga" },
  { source: "dec_coronation", target: "mod_crowned",     relation: "nadaje" },
  { source: "dec_coronation", target: "k_bohemia",       relation: "wymaga" },
  { source: "dec_pilgrimage", target: "praha",           relation: "cel" },
  { source: "dec_pilgrimage", target: "mod_wenceslas",   relation: "wymaga" },
  { source: "dec_velehrad",   target: "d_moravia",       relation: "wymaga" },
  { source: "dec_velehrad",   target: "k_bohemia",       relation: "wzmacnia" },

  // ── Planned: Slavníkovci — rywalizacja dynastyczna ──
  { source: "slavnikovci",    target: "d_bohemia",       relation: "rywalizuje o" },
  { source: "slavnikovci",    target: "premyslid",       relation: "rywale" },
  { source: "evt_libice",     target: "slavnikovci",     relation: "eliminacja" },
  { source: "evt_libice",     target: "premyslid",       relation: "umacnia" },
  { source: "evt_libice",     target: "evt_cult",        relation: "kontekst — Wojciech Slavníkovec" },
  { source: "dec_slavnikovci", target: "slavnikovci",    relation: "dotyczy" },
  { source: "dec_slavnikovci", target: "premyslid",      relation: "wpływa na" },
  { source: "dec_slavnikovci", target: "evt_libice",     relation: "decyduje o" },

  // ── Planned: Ostsiedlung — kolonizacja niemiecka ──
  { source: "ostsiedlung",       target: "bk_1178",          relation: "era" },
  { source: "ostsiedlung",       target: "bk_1230",          relation: "aktywne w" },
  { source: "ostsiedlung",       target: "d_bohemia",        relation: "dotyczy" },
  { source: "ostsiedlung",       target: "hre_vassal",       relation: "ułatwione przez" },
  { source: "german",            target: "czech",            relation: "napięcie z" },
  { source: "german",            target: "ostsiedlung",      relation: "wynika z" },
  { source: "mod_german_settlers", target: "ostsiedlung",    relation: "efekt" },
  { source: "mod_german_settlers", target: "d_bohemia",      relation: "dotyczy" },

  // ── Planned: Apanaże morawskie ──
  { source: "appanage",      target: "d_moravia",       relation: "dotyczy" },
  { source: "appanage",      target: "premyslid",       relation: "system dynastyczny" },
  { source: "appanage",      target: "olomouc",         relation: "apanaż" },
  { source: "appanage",      target: "brno",            relation: "apanaż" },
  { source: "appanage",      target: "znojmo",          relation: "apanaż" },
  { source: "mod_appanage",  target: "appanage",        relation: "efekt" },
  { source: "znojmo",        target: "d_moravia",       relation: "hrabstwo" },

  // ── Planned: modifiers → vanilla anchors ──
  { source: "mod_dual_control", target: "d_bohemia",     relation: "wymaga" },
  { source: "mod_dual_control", target: "d_moravia",     relation: "wymaga" },
  { source: "mod_silver",       target: "plzen",         relation: "region" },
  { source: "tenet_liturgy",    target: "bld_sazava",    relation: "miejsce" },
  { source: "bld_sazava",       target: "d_bohemia",     relation: "lokalizacja" },

  // ── Planned: szlachta czeska (Děpoltici, Vršovci, Hroznatici) ──
  { source: "depoltici",       target: "premyslid",      relation: "cadet branch" },
  { source: "depoltici",       target: "k_bohemia",      relation: "pretendenci" },
  { source: "vrsovci",         target: "d_bohemia",      relation: "wpływ w" },
  { source: "vrsovci",         target: "evt_vrsovci",    relation: "ofiary" },
  { source: "evt_vrsovci",     target: "premyslid",      relation: "umacnia" },
  { source: "evt_vrsovci",     target: "bk_1178",        relation: "era (1108)" },
  { source: "hroznatici",      target: "plzen",          relation: "wpływ w" },
  { source: "hroznatici",      target: "d_bohemia",      relation: "szlachta" },

  // ── Vanilla: Slavníkovci terytorialnie ──
  { source: "slavnikovci",    target: "bk_867",         relation: "holder c_hradec (867–1004)" },
  { source: "slavnikovci",    target: "evt_bishopric",  relation: "Vojtěch/Adalbert — biskup Pragi" },

  // ── Vanilla: Vršovci terytorialnie ──
  { source: "vrsovci",         target: "bk_1066",        relation: "holder c_zatec (1066)" },

  // ── Planned: margrabistwo Moraw (progresja) ──
  { source: "dec_margraviate", target: "appanage",       relation: "progresja z" },
  { source: "dec_margraviate", target: "d_moravia",      relation: "tworzy tytuł" },
  { source: "dec_margraviate", target: "dec_velehrad",   relation: "wymaga" },

  // ── Planned: Vyšehrad ──
  { source: "bld_vysehrad",    target: "praha",          relation: "lokalizacja" },
  { source: "bld_vysehrad",    target: "premyslid",      relation: "mit założycielski" },
  { source: "bld_vysehrad",    target: "slavic_pagan",   relation: "holy site?" },
];

export const BOHEMIA_PATHS: GraphPath[] = [
  // ── Vanilla paths ──
  {
    id: "political",
    label: "Ewolucja polityczna",
    color: "#e6b43c",
    description: "Od plemion do królestwa elektorskiego HRE (vanilla)",
    nodes: ["bk_867", "tribal_to_feudal", "d_bohemia", "hre_vassal", "k_bohemia", "e_hre", "elective", "bk_1230"],
  },
  {
    id: "territory",
    label: "Hierarchia terytorialna",
    color: "#78909c",
    description: "Prowincje → księstwa → królestwo → cesarstwo (vanilla)",
    nodes: ["praha", "plzen", "d_bohemia", "olomouc", "brno", "d_moravia", "k_bohemia", "e_hre"],
  },
  {
    id: "moravia",
    label: "Integracja Moraw",
    color: "#6ba0d6",
    description: "De jure drift Moraw z k_moravia do k_bohemia (vanilla + planned)",
    nodes: ["d_moravia", "olomouc", "brno", "dejure_drift", "k_bohemia", "moravian", "dec_velehrad", "mod_dual_control"],
  },

  // ── Planned paths ──
  {
    id: "christening",
    label: "Chrystianizacja",
    color: "#ce93d8",
    description: "Chrzest → Wacław → Kult → Biskupstwo (planowane eventy)",
    nodes: ["slavic_pagan", "evt_baptism", "conversion", "trait_christian", "evt_wenceslas", "evt_cult", "mod_wenceslas", "evt_bishopric", "court_chaplain", "catholic"],
  },
  {
    id: "dynasty",
    label: "Dynastia Přemyslidów",
    color: "#e63946",
    description: "Přemyslidzi — od księstwa do korony (vanilla + koronacja)",
    nodes: ["premyslid", "praha", "d_bohemia", "k_bohemia", "dec_coronation", "mod_crowned", "czech"],
  },
  {
    id: "liturgy",
    label: "Liturgia słowiańska",
    color: "#ff8a65",
    description: "Misja Cyryla i Metodego → tenet → Klasztor w Sázavie (planowane)",
    nodes: ["evt_cyril", "evt_baptism", "tenet_liturgy", "bld_sazava", "d_bohemia"],
  },
  {
    id: "pilgrim",
    label: "Pielgrzymka",
    color: "#83c84d",
    description: "Kult Wacława → decyzja pielgrzymki → Praga (planowane)",
    nodes: ["evt_cult", "mod_wenceslas", "dec_pilgrimage", "praha"],
  },
  {
    id: "pagan_tension",
    label: "Pogańskie napięcia",
    color: "#e57373",
    description: "Pogaństwo zachodniosłow. trwa do ~1250 — opór, blokady, święte miejsce Praha (SSP + planowane)",
    nodes: ["slavic_pagan", "struggle_ssp", "holy_praha", "evt_baptism", "evt_pagan_resist", "mod_pagan_undercurrent", "blocked_pagan", "evt_arkona_echo", "bld_sazava"],
  },
  {
    id: "slavnikovci",
    label: "Rywalizacja dynastyczna",
    color: "#ab47bc",
    description: "Slavníkovci (vanilla dyn. 9588) vs Přemyslidzi — holderzy c_hradec 867–1004, Vojtěch/Adalbert biskup Pragi. Fork: sojusz lub masakra 995 (planowane)",
    nodes: ["slavnikovci", "premyslid", "dec_slavnikovci", "evt_libice", "d_bohemia", "evt_cult", "evt_bishopric", "bk_867"],
  },
  {
    id: "ostsiedlung_path",
    label: "Kolonizacja niemiecka",
    color: "#4db6ac",
    description: "Ostsiedlung od XII w. — niemieccy osadnicy, +rozwój, ryzyko germanizacji (planowane)",
    nodes: ["ostsiedlung", "german", "czech", "mod_german_settlers", "d_bohemia", "hre_vassal", "bk_1178", "bk_1230"],
  },
  {
    id: "appanage_path",
    label: "Apanaże morawskie",
    color: "#7986cb",
    description: "System dzielnicowy Moraw — Olomouc, Brno, Znojmo jako apanaże Přemyslidów → progresja do margrabistwa (planowane)",
    nodes: ["appanage", "premyslid", "d_moravia", "olomouc", "brno", "znojmo", "mod_appanage", "dec_margraviate"],
  },
  {
    id: "czech_nobility",
    label: "Szlachta czeska",
    color: "#ffb74d",
    description: "Vršovci (vanilla dyn. 10107, 23 postacie! masakra 1108), Hroznatici, Děpoltici (vanilla bez tytułów). Planowane: event chains + landed Děpoltici",
    nodes: ["vrsovci", "evt_vrsovci", "hroznatici", "depoltici", "premyslid", "d_bohemia", "plzen", "bk_1066"],
  },
  {
    id: "vysehrad_path",
    label: "Vyšehrad — mit Přemyslidów",
    color: "#ba68c8",
    description: "Legendarny Vyšehrad Libuše → siedziba dynastyczna → holy site? (planowane)",
    nodes: ["bld_vysehrad", "praha", "premyslid", "slavic_pagan", "d_bohemia"],
  },
];
