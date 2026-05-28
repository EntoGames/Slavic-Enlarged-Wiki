/* =============================================================
   Stałe konfiguracyjne wiki — etykiety sekcji, ikony, kolory.
   ─────────────────────────────────────────────────────────────
   Klucz to slug folderu first-level (po stripie NN-).
   Jeśli sekcja nie jest tu zarejestrowana, szablon nadal działa —
   tylko etykieta w mega-menu i breadcrumbs będzie tytuł-case'owana
   z slugu (np. "Wprowadzenie", "Kultury").
   ============================================================= */

export interface SectionMeta {
  /** Numer wyświetlany w UI ("01", "02", …). Sortowanie. */
  order: number;
  /** Etykieta w mega-menu i breadcrumbs. */
  label: string;
  /** Krótki opis sekcji (w mega-menu intro panel). */
  blurb: string;
}

export const SECTIONS: Record<string, SectionMeta> = {
  wprowadzenie: {
    order: 1,
    label: "Wprowadzenie",
    blurb:
      "Czym są oba mody, jak je zainstalować i od czego zacząć grę.",
  },
  "krolestwa-wschodnie": {
    order: 2,
    label: "Królestwa Wschodnie",
    blurb:
      "Ruś, Biała Ruś, Mołdawia i Połock — kultury od Kijowa po Dźwinę.",
  },
  "krolestwa-zachodnie": {
    order: 3,
    label: "Królestwa Zachodnie",
    blurb:
      "Polska, Pomorze, Serbołużyce, Węgry i Karyntia — od Gniezna po Alpy.",
  },
  "krolestwa-poludniowe": {
    order: 4,
    label: "Królestwa Południowe",
    blurb:
      "Chorwacja, Serbia i Bułgaria — Bałkany od Adriatyku po Trację.",
  },
  wiara: {
    order: 5,
    label: "Wiara",
    blurb:
      "Jeden panteon, trzy odłamy, piętnaście miejsc świętych i szansa na zjednoczenie.",
  },
  "walka-slowianczyzny": {
    order: 6,
    label: "Walka Słowiańszczyzny",
    blurb:
      "Pięć faz, trzy zakończenia, jedno pytanie: czy Perun powstanie z Dniepru.",
  },
  decyzje: {
    order: 7,
    label: "Decyzje",
    blurb:
      "Wszystkie narzędzia dostępne graczowi — od reformy wiary po chrzest polityczny.",
  },
  wydarzenia: {
    order: 8,
    label: "Wydarzenia",
    blurb:
      "Siedemnaście narracyjnych eventów — od Nocy Kupały po Ostatniego Wołchwa.",
  },
  scenariusze: {
    order: 9,
    label: "Scenariusze",
    blurb:
      "Siedmiu grywalnych władców w startowej dacie 867 r. Każdy z innym horyzontem.",
  },
  poradniki: {
    order: 10,
    label: "Poradniki",
    blurb:
      "Praktyczne przewodniki po najambitniejszych celach moda.",
  },
  historia: {
    order: 11,
    label: "Historia",
    blurb:
      "Tło źródłowe, na którym stoi cały mod.",
  },
  techniczne: {
    order: 12,
    label: "Techniczne",
    blurb:
      "Kompatybilność z innymi modami, znane problemy, changelog.",
  },
};

/** Mapa slug → label (do breadcrumbs). */
export const SECTION_LABELS: Record<string, string> = Object.fromEntries(
  Object.entries(SECTIONS).map(([k, v]) => [k, v.label])
);

/**
 * Etykiety podfolderów — poprawne polskie nazwy zamiast auto-humanizacji slugów.
 * Klucz to ścieżka podfolderu (segments[1:n-1].join("/")).
 */
export const SUBFOLDER_LABELS: Record<string, string> = {
  /* Królestwa wschodnie */
  rus: "Ruś (k_ruthenia)",
  "biala-rus": "Biała Ruś (k_white_rus)",
  moldawia: "Mołdawia (k_moldavia)",
  polock: "Połock (d_polotsk)",
  /* Królestwa zachodnie */
  polska: "Polska (k_poland)",
  pomorze: "Pomorze (k_pomerania)",
  serboluzyce: "Serbołużyce (k_sorbia)",
  wegry: "Węgry — enklawy (k_hungary)",
  karyntia: "Karyntia (k_carinthia)",
  /* Królestwa południowe */
  chorwacja: "Chorwacja (k_croatia)",
  serbia: "Serbia (k_rascia)",
  bulgaria: "Bułgaria (k_bulgaria)",
  /* Walka Słowiańszczyzny */
  fazy: "Fazy Walki",
};

/**
 * Slugi plików, które są szablonami redakcyjnymi (nie artykułami publicznymi).
 * Filtrowane z mega-menu i landing-page'y sekcji.
 */
export const TEMPLATE_SLUGS = new Set([
  "szablon-kultury",
  "szablon-wiary",
  "szablon-miejsca-swietego",
  "szablon-decyzji",
  "szablon-wydarzenia",
  "szablon-postaci",
  "szablon-poradnika",
  "szablon-artykulu-historycznego",
  "szablon-artykulu-technicznego",
  "szablon-fazy",
  "szablon-mechaniki-dwojwierstwa",
  "szablon-zakonczenia",
]);
