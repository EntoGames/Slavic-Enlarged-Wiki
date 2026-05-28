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
  historia: {
    order: 7,
    label: "Historia",
    blurb:
      "Tło źródłowe, na którym stoi cały mod.",
  },
  techniczne: {
    order: 8,
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
  rus: "Ruś",
  "biala-rus": "Biała Ruś",
  moldawia: "Mołdawia",
  polock: "Połock",
  /* Królestwa zachodnie */
  polska: "Polska",
  pomorze: "Pomorze",
  serboluzyce: "Serbołużyce",
  wegry: "Węgry — enklawy",
  karyntia: "Karyntia",
  /* Królestwa południowe */
  chorwacja: "Chorwacja",
  serbia: "Serbia",
  bulgaria: "Bułgaria",
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
