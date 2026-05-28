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
  kultury: {
    order: 2,
    label: "Kultury",
    blurb:
      "Trzydzieści cztery historyczne plemiona słowiańskie — od Krywiczów nad Dźwiną po Duklian nad Adriatykiem.",
  },
  wiara: {
    order: 3,
    label: "Wiara",
    blurb:
      "Jeden panteon, trzy odłamy, piętnaście miejsc świętych i szansa na zjednoczenie.",
  },
  "walka-slowianczyzny": {
    order: 4,
    label: "Walka Słowiańszczyzny",
    blurb:
      "Pięć faz, trzy zakończenia, jedno pytanie: czy Perun powstanie z Dniepru.",
  },
  decyzje: {
    order: 5,
    label: "Decyzje",
    blurb:
      "Wszystkie narzędzia dostępne graczowi — od reformy wiary po chrzest polityczny.",
  },
  wydarzenia: {
    order: 6,
    label: "Wydarzenia",
    blurb:
      "Siedemnaście narracyjnych eventów — od Nocy Kupały po Ostatniego Wołchwa.",
  },
  scenariusze: {
    order: 7,
    label: "Scenariusze",
    blurb:
      "Siedmiu grywalnych władców w startowej dacie 867 r. Każdy z innym horyzontem.",
  },
  poradniki: {
    order: 8,
    label: "Poradniki",
    blurb:
      "Praktyczne przewodniki po najambitniejszych celach moda.",
  },
  historia: {
    order: 9,
    label: "Historia",
    blurb:
      "Tło źródłowe, na którym stoi cały mod.",
  },
  techniczne: {
    order: 10,
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
  /* Kultury — regiony */
  poludniowoslowianskie: "Południowosłowiańskie",
  wschodnioslowianskie: "Wschodniosłowiańskie",
  zachodnioslowianskie: "Zachodniosłowiańskie",
  /* Kultury — królestwa wschodnie */
  "wschodnioslowianskie/rus": "Ruś (k_ruthenia)",
  "wschodnioslowianskie/biala-rus": "Biała Ruś (k_white_rus)",
  "wschodnioslowianskie/moldawia": "Mołdawia (k_moldavia)",
  "wschodnioslowianskie/polock": "Połock (d_polotsk)",
  /* Kultury — królestwa zachodnie */
  "zachodnioslowianskie/polska": "Polska (k_poland)",
  "zachodnioslowianskie/pomorze": "Pomorze (k_pomerania)",
  "zachodnioslowianskie/serboluzyce": "Serbołużyce (k_sorbia)",
  "zachodnioslowianskie/wegry": "Węgry — enklawy (k_hungary)",
  "zachodnioslowianskie/karyntia": "Karyntia (k_carinthia)",
  /* Kultury — królestwa południowe */
  "poludniowoslowianskie/chorwacja": "Chorwacja (k_croatia)",
  "poludniowoslowianskie/serbia": "Serbia (k_rascia)",
  "poludniowoslowianskie/bulgaria": "Bułgaria (k_bulgaria)",
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
