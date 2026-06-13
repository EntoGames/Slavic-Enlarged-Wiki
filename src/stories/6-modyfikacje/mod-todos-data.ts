export type TodoPriority = "P0" | "P1" | "P2";
export type TodoTag = "trigger" | "content" | "balans" | "infra" | "bug" | "lokalizacja" | "gfx" | "kultura" | "wiara" | "tradycja" | "MaA" | "budynek" | "kompatybilnosc";

export interface ModTodo {
  id: string;
  title: string;
  priority: TodoPriority;
  tag: TodoTag;
  iter?: string;
}

export const PRIORITY_CONFIG: Record<TodoPriority, { label: string; color: string }> = {
  P0: { label: "P0", color: "#e63946" },
  P1: { label: "P1", color: "#e6b43c" },
  P2: { label: "P2", color: "#6ba0d6" },
};

export const TAG_CONFIG: Record<TodoTag, { label: string; color: string }> = {
  trigger:        { label: "Trigger",        color: "#b39ddb" },
  content:        { label: "Content",        color: "#83c84d" },
  balans:         { label: "Balans",         color: "#e6b43c" },
  infra:          { label: "Infra",          color: "#6ba0d6" },
  bug:            { label: "Bug",            color: "#e63946" },
  lokalizacja:    { label: "Lokalizacja",    color: "#78909c" },
  gfx:            { label: "GFX",            color: "#ff8a65" },
  kultura:        { label: "Kultura",        color: "#4dd0e1" },
  wiara:          { label: "Wiara",          color: "#ce93d8" },
  tradycja:       { label: "Tradycja",       color: "#aed581" },
  MaA:            { label: "MaA",            color: "#e57373" },
  budynek:        { label: "Budynek",        color: "#ffb74d" },
  kompatybilnosc: { label: "Kompatybilnosc", color: "#90a4ae" },
};

export const MOD_TODOS: Record<string, ModTodo[]> = {
  "se_": [
    { id: "SE-01", title: "SE + Cultural Expanded: decyzja \"Form Lechitia\" znika (Turkoman, Steam)", priority: "P1", tag: "kompatybilnosc" },
    { id: "SE-02", title: "Tradycja se_tradition_veche_rule (wschodnia, rada)", priority: "P1", tag: "tradycja", iter: "4" },
    { id: "SE-03", title: "Tradycja se_tradition_temple_guardians (zachodnia, HS+MaA)", priority: "P1", tag: "tradycja", iter: "4" },
    { id: "SE-04", title: "Tradycja se_tradition_zupan_council (poludniowa, wasal+dev)", priority: "P1", tag: "tradycja", iter: "4" },
    { id: "SE-05", title: "MaA Druzyna Kniazia (ciezka jazda wschodnia)", priority: "P1", tag: "MaA", iter: "2" },
    { id: "SE-06", title: "MaA Wojownicy Arkony (ciezka piechota zachodnia)", priority: "P1", tag: "MaA", iter: "2" },
    { id: "SE-07", title: "MaA Lucznicy Lesni (lekcy lucznicy wschodni)", priority: "P1", tag: "MaA", iter: "2" },
    { id: "SE-08", title: "Budynek se_shrine_arkona (Swiatynia Swietowita, 2 poziomy)", priority: "P1", tag: "budynek", iter: "2" },
    { id: "SE-09", title: "Budynek se_shrine_kyiv (Wzgorze Peruna, 2 poziomy)", priority: "P1", tag: "budynek", iter: "2" },
    { id: "SE-10", title: "3-etapowa reformacja (Wiec → Spory → Konsekracja)", priority: "P1", tag: "content", iter: "3" },
    { id: "SE-11", title: "MaA Straz Graniczna (piechota gorska, poludniowa)", priority: "P2", tag: "MaA", iter: "2" },
    { id: "SE-12", title: "Innowacja se_innovation_grod_network", priority: "P2", tag: "infra", iter: "4" },
  ],
  "sessp_": [
    { id: "SSP-01", title: "tradition_last_bastion (Rani — +15% obrona HS)", priority: "P1", tag: "tradycja" },
    { id: "SSP-02", title: "tradition_political_conversion (Polanie — -10 opinion)", priority: "P1", tag: "tradycja" },
    { id: "SSP-03", title: "tradition_pagan_reconquista (Obodryci — +20% raid)", priority: "P1", tag: "tradycja" },
    { id: "SSP-04", title: "tradition_crossroads_culture (Krywiczanie — +15% trade)", priority: "P1", tag: "tradycja" },
    { id: "SSP-05", title: "tradition_veche_democracy (Ilmenianie — +15 vassal opinion)", priority: "P1", tag: "tradycja" },
  ],
  "sml_": [
    { id: "SML-01", title: "Koncept systemu Legend dla Slowian", priority: "P1", tag: "content" },
    { id: "SML-02", title: "Artefakty slowianskie", priority: "P2", tag: "content" },
    { id: "SML-03", title: "Legendy mitologiczne (Perun, Weles, Marzanna)", priority: "P2", tag: "content" },
  ],
  "sepm_": [
    { id: "PM-01", title: "Budynek Swiatynia Trzygława w Szczecinie", priority: "P1", tag: "budynek" },
    { id: "PM-02", title: "Event chain: Najazd na Arkone", priority: "P1", tag: "content" },
  ],
  "senv_": [
    { id: "NV-01", title: "Event: Zwolanie Wiecu", priority: "P1", tag: "content" },
    { id: "NV-02", title: "Mechanika republiki Nowogrodzkiej", priority: "P2", tag: "content" },
  ],
  "sept_": [
    { id: "PT-01", title: "Trait sept_trait_wolf_blood (Krew Wilka)", priority: "P1", tag: "content" },
    { id: "PT-02", title: "Event Nocna Przemiana", priority: "P1", tag: "content" },
    { id: "PT-03", title: "Decision Blood Ritual", priority: "P1", tag: "content" },
    { id: "PT-04", title: "Modifier Cien Rognedy", priority: "P2", tag: "content" },
  ],
  "sewr_": [
    { id: "WR-01", title: "Region se_region_polesia (Polesie + lasy)", priority: "P1", tag: "infra", iter: "7" },
  ],
};
