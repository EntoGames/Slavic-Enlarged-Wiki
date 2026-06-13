export type { NodeType, GraphNode, GraphLink, GraphPath, KingdomGraphData } from "./graph-types";
export { NODE_TYPE_CONFIG, GRID_ROWS, GRID_COLS } from "./graph-types";
import type { GraphNode, GraphLink, GraphPath } from "./graph-types";

export const CARINTHIA_NODES: GraphNode[] = [
  // ═══ ROW 0 — Bookmarks (timeline) ═══
  { id: "bk_867",  label: "867",  type: "bookmark", era: "867",  note: "Karantania pod zwierzchnictwem Franków, katolicyzm od ~748", row: 0, col: 0 },
  { id: "bk_1066", label: "1066", type: "bookmark", era: "1066", note: "Księstwo Karyntii w HRE, Eppensteini", row: 0, col: 3 },
  { id: "bk_1178", label: "1178", type: "bookmark", era: "1178", note: "Styria odłączona, Sponheimowie rządzą", row: 0, col: 5 },
  { id: "bk_1230", label: "1230", type: "bookmark", era: "1230", note: "Bernhard von Sponheim, ceremonia Knežji Kamen wciąż żywa", row: 0, col: 7 },

  // ═══ ROW 1 — Vanilla mechanics ═══
  { id: "tribal_to_feudal", label: "Tribal → Feudal",   type: "mechanic", note: "Karantania feudalna już w 867 (wczesna chrystianizacja ~748)", row: 1, col: 0 },
  { id: "conversion",       label: "Konwersja wiary",   type: "mechanic", note: "Karantańczycy przyjęli chrzest ~743–748 (najwcześniej wśród Słowian)", row: 1, col: 1 },
  { id: "hre_vassal",       label: "Wasalstwo HRE",     type: "mechanic", note: "Karyntia wasal cesarstwa od IX w.", row: 1, col: 3 },
  { id: "dejure_drift",     label: "De jure drift",     type: "mechanic", note: "d_styria odłączone od k_carinthia (1180 — osobne księstwo)", row: 1, col: 5 },
  { id: "succession",       label: "Sukcesja feudalna", type: "mechanic", note: "Ceremonia intronizacji przy Knežji Kamen trwa do XIV w.", row: 1, col: 7 },

  // ═══ ROW 2 — Planned events ═══
  { id: "evt_knezji_kamen", label: "Knežji Kamen czeka",       type: "event", planned: true, era: "per sukcesja", note: "seca_carantanian.0001 — 3 opcje: ceremonia słowiańska / łacińska / obie (historycznie prawdziwy kompromis)", row: 2, col: 0 },
  { id: "evt_bishop_protest", label: "Frankijski Biskup Protestuje", type: "event", planned: true, note: "Po ceremonii słowiańskiej — biskup protestuje: poddaj się / broń rytuał / ignoruj", row: 2, col: 3 },
  { id: "evt_habsburg",     label: "Habsburg Żąda Podatku",     type: "event", planned: true, era: "XIII w.", note: "Habsburgowie jako nowe zagrożenie: płać / opór / symboliczny hołd", row: 2, col: 6 },

  // ═══ ROW 3 — Faith + Dynasty ═══
  { id: "slavic_pagan", label: "Pogaństwo zachodniosłow.", type: "faith",   note: "Oficjalnie zanikło ~748 ale rytuały przetrwały do XIV w. w ceremonii intronizacji", row: 3, col: 0 },
  { id: "catholic",     label: "Katolicyzm",             type: "faith",   note: "Wiara dominująca od ~748 — najwcześniejsza konwersja wśród Słowian", row: 3, col: 3 },
  { id: "eppenstein",   label: "Eppensteini",             type: "dynasty", note: "Dynastia rządząca Karyntią w XI w.", row: 3, col: 5 },
  { id: "sponheim",     label: "Sponheimowie",            type: "dynasty", note: "Dynastia rządząca Karyntią od 1122 do 1269", row: 3, col: 7 },

  // ═══ ROW 4 — Planned decisions ═══
  { id: "dec_peasant_robe",  label: "Strój Chłopa",        type: "decision", planned: true, note: "seca_peasant_robe_decision — historyczna ceremonia: władca w chłopskim stroju = zrównanie stanów; +15 opinion carantanian wasali, catalyst Lada's Harmony (SSP)", row: 4, col: 0 },
  { id: "dec_model",         label: "Ogłoś Model Karantański", type: "decision", planned: true, note: "Dostępna po Endingu — inne królestwa mogą adoptować model prawny Karantanii", row: 4, col: 4 },

  // ═══ ROW 5 — Titles ═══
  { id: "e_hre",         label: "e_hre",          type: "title", note: "Święte Cesarstwo Rzymskie — suweren Karyntii",      row: 5, col: 7 },
  { id: "k_carinthia",   label: "k_carinthia",    type: "title", note: "Królestwo Karyntii — de jure 3 księstwa",           row: 5, col: 4 },
  { id: "d_carinthia",   label: "d_carinthia",    type: "title", note: "Księstwo Karyntii — rdzeń: Villach, Klagenfurt",    row: 5, col: 1 },
  { id: "d_styria",      label: "d_styria",       type: "title", note: "Księstwo Styrii — odłączone 1180 jako osobne księstwo", row: 5, col: 5 },
  { id: "d_krain",       label: "d_krain",        type: "title", note: "Księstwo Krainy (Carniola) — Lublana, słoweński rdzeń", row: 5, col: 3 },

  // ═══ ROW 6 — Planned modifiers ═══
  { id: "mod_knezji_kamen",   label: "Knežji Kamen",           type: "modifier", planned: true, note: "seca_modifier_knezji_kamen — trwały na prowincję: +5 Fervor, +5% prestiż za intronizację, -20% missionary efficiency", row: 6, col: 0 },
  { id: "mod_alpine_memory",  label: "Góralska Pamięć",        type: "modifier", planned: true, note: "seca_modifier_alpine_memory — prowincje górskie: terrain mountain + isolation, wiara zmienia formę nie zanika", row: 6, col: 2 },
  { id: "mod_peasant_unity",  label: "Jedność Chłopska",       type: "modifier", planned: true, note: "seca_peasant_unity — 10 lat po Stroju Chłopa: +opinion, +harmonia", row: 6, col: 4 },
  { id: "mod_ceremony_done",  label: "Ceremonia odprawiona",   type: "modifier", planned: true, note: "seca_modifier_knezji_ceremony_done — 5 lat: +5 opinion u carantanian wasali", row: 6, col: 6 },
  { id: "ending_synthesis",   label: "Karantańska Synteza",    type: "modifier", planned: true, note: "seca_carinthian_synthesis — Ending C: ≥5 ceremonii + 150 lat dynastii = lokalne Dwuwierstwo; modifier dynastyczny", row: 6, col: 7 },

  // ═══ ROW 7 — Cultures + heritage ═══
  { id: "carantanian",   label: "Carantanian",    type: "culture", note: "Kultura karantańska — zachodniosłowiańska, etos egalitarny, tradycja kamnez_kamen", row: 7, col: 1 },
  { id: "west_slavic",   label: "West Slavic",    type: "culture", note: "Heritage — wspólne dla Karantanów, Czech, Polski",      row: 7, col: 4 },
  { id: "bavarian",      label: "Bavarian",       type: "culture", note: "Kultura bawarska — sąsiedzi i suwereni Karantanii",     row: 7, col: 6 },

  // ═══ ROW 8 — Key provinces ═══
  { id: "klagenfurt",    label: "Klagenfurt",     type: "province", note: "Stolica Karyntii — lokalizacja Knežji Kamen",         row: 8, col: 0 },
  { id: "villach",       label: "Villach",         type: "province", note: "Zachodnia Karyntia — przejście alpejskie",            row: 8, col: 2 },
  { id: "graz",          label: "Graz",            type: "province", note: "Stolica Styrii — kluczowe hrabstwo wschodnie",        row: 8, col: 4 },
  { id: "laibach",       label: "Laibach",         type: "province", note: "Lublana — rdzeń Krainy (Carniola), centrum słoweńskie", row: 8, col: 6 },
];

export const CARINTHIA_LINKS: GraphLink[] = [
  // ── Vanilla: timeline flow ──
  { source: "bk_867",  target: "bk_1066", relation: "→" },
  { source: "bk_1066", target: "bk_1178", relation: "→" },
  { source: "bk_1178", target: "bk_1230", relation: "→" },

  // ── Vanilla: title hierarchy ──
  { source: "d_carinthia", target: "k_carinthia", relation: "de jure" },
  { source: "d_styria",    target: "k_carinthia", relation: "de jure" },
  { source: "d_krain",     target: "k_carinthia", relation: "de jure" },
  { source: "k_carinthia", target: "e_hre",       relation: "wasal" },

  // ── Vanilla: provinces → duchies ──
  { source: "klagenfurt", target: "d_carinthia", relation: "stolica" },
  { source: "villach",    target: "d_carinthia", relation: "hrabstwo" },
  { source: "graz",       target: "d_styria",    relation: "stolica" },
  { source: "laibach",    target: "d_krain",     relation: "stolica" },

  // ── Vanilla: culture → region / heritage ──
  { source: "carantanian", target: "d_carinthia", relation: "region" },
  { source: "carantanian", target: "d_krain",     relation: "region" },
  { source: "carantanian", target: "west_slavic", relation: "heritage" },

  // ── Vanilla: dynasty → title ──
  { source: "eppenstein", target: "k_carinthia", relation: "rządzi (1077)" },
  { source: "sponheim",   target: "k_carinthia", relation: "rządzi (1122+)" },

  // ── Vanilla: faith ↔ bookmarks ──
  { source: "catholic",     target: "bk_867",  relation: "wiara w" },
  { source: "catholic",     target: "bk_1066", relation: "wiara w" },
  { source: "catholic",     target: "bk_1178", relation: "wiara w" },
  { source: "catholic",     target: "bk_1230", relation: "wiara w" },
  { source: "conversion",   target: "slavic_pagan", relation: "z" },
  { source: "conversion",   target: "catholic",     relation: "na" },

  // ── Vanilla: mechanics ──
  { source: "hre_vassal",       target: "k_carinthia", relation: "dotyczy" },
  { source: "hre_vassal",       target: "e_hre",       relation: "suweren" },
  { source: "dejure_drift",     target: "d_styria",    relation: "dotyczy" },
  { source: "dejure_drift",     target: "bk_1178",     relation: "era" },
  { source: "tribal_to_feudal", target: "bk_867",      relation: "kontekst" },
  { source: "succession",       target: "bk_1230",     relation: "aktywne w" },

  // ── Vanilla: bookmark → title state ──
  { source: "bk_867",  target: "d_carinthia", relation: "tytularne" },
  { source: "bk_1066", target: "k_carinthia", relation: "wasal HRE" },
  { source: "bk_1230", target: "k_carinthia", relation: "księstwo" },

  // ── Planned: Knežji Kamen event chain ──
  { source: "evt_knezji_kamen",  target: "mod_ceremony_done",  relation: "nadaje (opcja A/C)" },
  { source: "evt_knezji_kamen",  target: "mod_knezji_kamen",   relation: "wymaga" },
  { source: "evt_knezji_kamen",  target: "klagenfurt",         relation: "lokalizacja" },
  { source: "evt_knezji_kamen",  target: "slavic_pagan",       relation: "rytuał pogański" },
  { source: "evt_knezji_kamen",  target: "catholic",           relation: "napięcie z" },
  { source: "evt_knezji_kamen",  target: "succession",         relation: "per sukcesja" },
  { source: "evt_knezji_kamen",  target: "evt_bishop_protest",  relation: "wyzwala" },
  { source: "evt_bishop_protest", target: "catholic",           relation: "wynika z" },

  // ── Planned: Strój Chłopa decision ──
  { source: "dec_peasant_robe",  target: "evt_knezji_kamen",   relation: "wymaga ceremonii A/C" },
  { source: "dec_peasant_robe",  target: "mod_peasant_unity",  relation: "nadaje" },
  { source: "dec_peasant_robe",  target: "carantanian",        relation: "dotyczy kultury" },

  // ── Planned: modifiers → vanilla anchors ──
  { source: "mod_knezji_kamen",  target: "klagenfurt",         relation: "lokalizacja" },
  { source: "mod_knezji_kamen",  target: "slavic_pagan",       relation: "opór wiary" },
  { source: "mod_alpine_memory", target: "d_carinthia",        relation: "prowincje górskie" },
  { source: "mod_alpine_memory", target: "d_krain",            relation: "prowincje górskie" },

  // ── Planned: Ending — Karantańska Synteza ──
  { source: "ending_synthesis",  target: "evt_knezji_kamen",   relation: "wymaga ≥5 ceremonii" },
  { source: "ending_synthesis",  target: "sponheim",           relation: "wymaga dynastii 150 lat" },
  { source: "ending_synthesis",  target: "dec_model",          relation: "odblokuje" },
  { source: "dec_model",         target: "k_carinthia",        relation: "wymaga" },

  // ── Planned: Habsburg event ──
  { source: "evt_habsburg",     target: "bk_1230",            relation: "era" },
  { source: "evt_habsburg",     target: "k_carinthia",        relation: "dotyczy" },

  // ── Culture ↔ dynasty ──
  { source: "sponheim",    target: "klagenfurt",  relation: "stolica" },
  { source: "bavarian",    target: "d_styria",    relation: "region (częściowo)" },
];

export const CARINTHIA_PATHS: GraphPath[] = [
  {
    id: "political",
    label: "Ewolucja polityczna",
    color: "#e6b43c",
    description: "Od wczesnej chrystianizacji do wasalstwa HRE — vanilla mechaniki (vanilla)",
    nodes: ["bk_867", "tribal_to_feudal", "conversion", "d_carinthia", "hre_vassal", "k_carinthia", "e_hre", "dejure_drift", "bk_1230"],
  },
  {
    id: "territory",
    label: "Hierarchia terytorialna",
    color: "#78909c",
    description: "Prowincje → księstwa → królestwo → cesarstwo (vanilla)",
    nodes: ["klagenfurt", "villach", "d_carinthia", "laibach", "d_krain", "graz", "d_styria", "k_carinthia", "e_hre"],
  },
  {
    id: "knezji_kamen",
    label: "Ceremonia Knežji Kamen",
    color: "#ce93d8",
    description: "Pogański rytuał intronizacji trwający do XIV w. — rdzeń submodu (planowane)",
    nodes: ["slavic_pagan", "evt_knezji_kamen", "mod_knezji_kamen", "mod_ceremony_done", "evt_bishop_protest", "catholic", "succession", "klagenfurt"],
  },
  {
    id: "peasant_robe",
    label: "Strój Chłopa i jedność",
    color: "#4db6ac",
    description: "Historyczna ceremonia zrównania stanów — decyzja + modifier (planowane)",
    nodes: ["evt_knezji_kamen", "dec_peasant_robe", "mod_peasant_unity", "carantanian"],
  },
  {
    id: "synthesis",
    label: "Karantańska Synteza",
    color: "#e63946",
    description: "Ending C — 150 lat dynastii + 5 ceremonii = lokalne Dwuwierstwo (planowane)",
    nodes: ["evt_knezji_kamen", "ending_synthesis", "sponheim", "dec_model", "k_carinthia"],
  },
  {
    id: "alpine_faith",
    label: "Góralska pamięć wiary",
    color: "#ff8a65",
    description: "Pogaństwo przetrwało w alpejskiej izolacji — modifier góralski (planowane)",
    nodes: ["slavic_pagan", "conversion", "mod_alpine_memory", "d_carinthia", "d_krain", "catholic"],
  },
];
