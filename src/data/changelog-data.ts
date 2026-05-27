/* =============================================================
   Changelog (Kronika Zmian) — dane wersji moda.
   ─────────────────────────────────────────────────────────────
   Pojedyncze źródło prawdy dla strony `/wiki/techniczne/changelog/`.
   Format luźno bazuje na keep-a-changelog (added / changed / fixed /
   removed) plus kategoria `wip` dla wersji jeszcze niewydanych
   (BRAINSTORMING).

   Edycja: dopisz nową wersję na początku tablicy `VERSIONS`. Jeśli
   `phase === "brainstorming"`, wersja renderuje się w trybie WIP
   (zmatowiona) i jej grupy trafiają do kategorii `wip`.
   ============================================================= */

export type ChangePhase = "alpha" | "beta" | "rc" | "brainstorming";

export type ChangeCategory =
  | "added"
  | "changed"
  | "fixed"
  | "removed"
  | "wip";

/** Pojedynczy bullet zmiany. */
export interface ChangeItem {
  /** Tekst wpisu. Dopuszczalne lekkie tagi `<strong>` / `<em>` / `<a class="wf-link" data-preview="…">…</a>`
      — renderujemy przez `dangerouslySetInnerHTML`. */
  text: string;
}

/** Grupa wpisów jednej kategorii w obrębie wersji. */
export interface ChangeGroup {
  category: ChangeCategory;
  items: ChangeItem[];
}

/** Pojedyncza wersja moda. */
export interface ChangelogVersion {
  /** "0.4", "0.5". Bez przedrostka "v". */
  version: string;
  /** Tytuł kodowy wersji ("Burza nad Dębem"). */
  name: string;
  /** Faza — wpływa na kolor tagu w TOC i na rail. */
  phase: ChangePhase;
  /** Data wydania w formacie ISO ("2026-05-14") lub etykieta dla WIP. */
  releaseDate: string;
  /** Sformatowana data po polsku ("14 maja 2026"). */
  releaseDateLabel: string;
  /** Krótka data do TOC ("14 maja 2026" / "III kw. 2026"). */
  tocDateLabel: string;
  /** Etykieta "anno domini" (kursywa nad tytułem). */
  annal: string;
  /** ~2-3 zdania streszczenia wersji. */
  summary: string;
  /** Grupy zmian w danej wersji. */
  groups: ChangeGroup[];
}

/* =============================================================
   Wpisy
   ─────────────────────────────────────────────────────────────
   Dopisuj NOWE wersje na początku (chronologicznie odwrócone).
   Używamy backticków dla tekstów, żeby cytaty „…" nie kolidowały
   z ogranicznikami stringa.
   ============================================================= */

export const VERSIONS: ChangelogVersion[] = [
  {
    version: "0.5",
    name: "Wiec Trzech Odłamów",
    phase: "brainstorming",
    releaseDate: "2026-Q3",
    releaseDateLabel: "spodziewane: III kwartał 2026",
    tocDateLabel: "III kw. 2026",
    annal: "Anno Domini MMXXVI — jeszcze nie spisane.",
    summary:
      "Następna wielka aktualizacja. Skupia się na zamknięciu mechaniki Slavic Struggle of Perun: dodaniu fazy końcowej, w której gracz albo reformuje jedną z trzech wiar słowiańskich, albo zjednoczy wszystkie trzy odłamy pod jednym dębem.",
    groups: [
      {
        category: "wip",
        items: [
          {
            text: `Faza końcowa Struggle: 3 ścieżki reformy + 1 ścieżka zjednoczenia <a class="wf-link" data-preview="struggle">Slavic Struggle of Perun</a>`,
          },
          { text: `Decyzja „Zerwij ze Stolicą Apostolską" — casus belli na sąsiadów-katolików` },
          { text: `Holy Sites dla wiary południowej — Velbazhd, Triglav, Rilski Manastir` },
          {
            text: `Cykl eventów o pojedynku <a class="wf-link" data-preview="perun">Peruna</a> z Velesem — coroczny modyfikator urodzaju`,
          },
          { text: `Drużynnik jako nowy typ courtierów (między marshalem a kanclerzem)` },
        ],
      },
    ],
  },
  {
    version: "0.4",
    name: "Burza nad Dębem",
    phase: "alpha",
    releaseDate: "2026-05-14",
    releaseDateLabel: "wydane: 14 maja 2026",
    tocDateLabel: "14 maja 2026",
    annal: "Roku Pańskiego 2026, miesiąca maja dnia czternastego.",
    summary:
      "Najobszerniejsza aktualizacja od początku moda. Wprowadza szkielet mechaniki Slavic Struggle of Perun, dzieli wiarę słowiańską na trzy odłamy i przepisuje tradycje wszystkich kultur lechickich.",
    groups: [
      {
        category: "added",
        items: [
          {
            text: `Mechanika <a class="wf-link" data-preview="struggle">Slavic Struggle of Perun</a> (faza wczesna i środkowa, bez fazy końcowej)`,
          },
          {
            text: `Podział wiary słowiańskiej na trzy odłamy: <a class="wf-link" data-preview="wschsl">wschodni</a>, zachodni, południowy`,
          },
          { text: `Tenety wiary wschodniej: Przysięga Drużynna, Prawo Gościnności, Sąd Pioruna` },
          {
            text: `Tenety wiary zachodniej: Kult Świętowita, Cztery Twarze, Ofiara Mieczowa <a class="wf-link" data-preview="zachsl">West Slavic Pagan</a>`,
          },
          {
            text: `Tenety wiary południowej: Pan Gór, Wąż Domowy, Pieśń Gęślarska <a class="wf-link" data-preview="poludsl">South Slavic Pagan</a>`,
          },
          {
            text: `Holy Sites dla wiary zachodniej — <a class="wf-link" data-preview="arkona">Arkona</a>, Wolin, Retra, Brennabor`,
          },
          { text: `Automated Council Edicts: 5 dekretów dla rady, w tym „Spisz Annalistę"` },
          { text: `Trait „Ukochany Perunowi" — losowany dla pogan-wojowników po wygranej bitwie` },
        ],
      },
      {
        category: "changed",
        items: [
          {
            text: `Kultury lechickie (Wiślanie, Polanie, Ślężanie) dostały pełne, przepisane tradycje <a class="wf-link" data-preview="vistulans">Wiślanie</a>`,
          },
          {
            text: `<em>Konni Raids</em> — efekt podniesiony z +10% do +15% szybkości wojska`,
          },
          {
            text: `Wiec — koszt prestiżu obniżony z 200 do 150 <a class="wf-link" data-preview="wiec">Wiec</a>`,
          },
          { text: `Opisy postaci historycznych (Mieszko, Włodzimierz, Borys) przepisane na klimatyczne` },
        ],
      },
      {
        category: "fixed",
        items: [
          { text: `Crash przy próbie reformacji wiary z mniej niż 3 Holy Sites` },
          { text: `Powtarzający się event „Sen Peruna" zacinał się przy braku małżonki` },
          {
            text: `Brakujące lokalizacje w wersji angielskiej dla 27 traitów (<em>LD_VANILLA_FALLBACK</em>)`,
          },
        ],
      },
      {
        category: "removed",
        items: [
          { text: `Stara, monolityczna wiara „Slavic Pagan" — zastąpiona przez trzy odłamy` },
          { text: `Eksperymentalny tenet „Ofiara Niewolnika" — niezgodny z polityką Paradoxu` },
        ],
      },
    ],
  },
  {
    version: "0.3",
    name: "Wiary i Kultury",
    phase: "alpha",
    releaseDate: "2026-02-02",
    releaseDateLabel: "wydane: 02 lutego 2026",
    tocDateLabel: "02 lutego 2026",
    annal: "Roku Pańskiego 2026, miesiąca lutego dnia drugiego.",
    summary: `Pierwsza próba rozbicia monolitycznej wiary słowiańskiej. Wprowadza ekran „Faiths and Cultures" i osadza go w UI gry.`,
    groups: [
      {
        category: "added",
        items: [
          { text: `Ekran wyboru wiary i kultury w kreatorze postaci` },
          { text: `Cztery nowe Holy Sites dla wiary wschodniej — Kijów, Peryń, Płock, Bârlad` },
          { text: `Tradycja „Góralskie Zwyczaje" dla kultur karpackich` },
          { text: `Dekoracja „Idoł Włodzimierza" w stolicach pogańskich` },
        ],
      },
      {
        category: "changed",
        items: [
          { text: `Wiara słowiańska podzielona wstępnie na 2 odłamy (wschód/zachód) — pełne 3 dopiero w 0.4` },
          { text: `Kolovrat jako ikona wiary zamiast generycznego symbolu pogańskiego` },
        ],
      },
      {
        category: "fixed",
        items: [
          { text: `Niewłaściwe przeliczanie morale wojska pogańskiego po przejęciu prowincji katolickiej` },
          { text: `Nazwa kultury „Vistulans" wyświetlała się jako „POLSKI_KULTURA_01" w 3 miejscach UI` },
        ],
      },
    ],
  },
  {
    version: "0.2",
    name: "Trzy Plemiona",
    phase: "alpha",
    releaseDate: "2025-11-17",
    releaseDateLabel: "wydane: 17 listopada 2025",
    tocDateLabel: "17 listopada 2025",
    annal: "Roku Pańskiego 2025, miesiąca listopada dnia siedemnastego.",
    summary:
      "Wprowadza trzy fundamentalne kultury lechickie i odróżnia je tradycjami oraz men-at-arms.",
    groups: [
      {
        category: "added",
        items: [
          { text: `Kultura: <a class="wf-link" data-preview="vistulans">Wiślanie</a>` },
          { text: `Kultura: <a class="wf-link" data-preview="polans">Polanie</a>` },
          { text: `Kultura: <a class="wf-link" data-preview="silesians">Ślężanie</a>` },
          { text: `Men-at-arms: <em>Konni Raids</em> — lekka kawaleria dostępna kulturom lechickim` },
          { text: `20 traitów dziedzicznych związanych z mitologią słowiańską` },
        ],
      },
      {
        category: "changed",
        items: [
          { text: `Mapa: 41 prowincji w środkowej Europie przemianowanych na nazwy słowiańskie` },
        ],
      },
      {
        category: "fixed",
        items: [{ text: `Brak portretów dla dynastii Piastów przed 960 rokiem` }],
      },
    ],
  },
  {
    version: "0.1",
    name: "Pierwszy Grzmot",
    phase: "alpha",
    releaseDate: "2025-08-22",
    releaseDateLabel: "wydane: 22 sierpnia 2025",
    tocDateLabel: "22 sierpnia 2025",
    annal: "Roku Pańskiego 2025, miesiąca sierpnia dnia dwudziestego drugiego.",
    summary: `Pierwsze publiczne wydanie. Mod zaczyna się od jednej rzeczy: móc nazwać siebie Słowianinem w Crusader Kings III i nie być ogólną kulturą „Pogan".`,
    groups: [
      {
        category: "added",
        items: [
          { text: `Grupa kulturowa „Slavic" jako odrębna od „Pagan" w kreatorze postaci` },
          { text: `Słowniki imion męskich i żeńskich (487 + 312 imion) z polskimi diakrytykami` },
          { text: `Bazowa wiara „Slavic Pagan" (jeszcze monolit) z 3 tenetami` },
          { text: `Mission statement w pliku README oraz pierwsze plakaty promo` },
          {
            text: `Kompatybilność z <a class="wf-link" data-preview="ckIII">Crusader Kings III</a> patch 1.12.x`,
          },
        ],
      },
    ],
  },
];

/* =============================================================
   Popovery dla linków `data-preview` w treści wpisów.
   Klucz odpowiada wartości atrybutu `data-preview`.
   ============================================================= */

export interface ChangelogPreview {
  kicker: string;
  title: string;
  sub?: string;
  blurb: string;
  /** True ⇒ etykieta "Zewnętrzne" zamiast "Artykuł wiki". */
  external?: boolean;
}

export const PREVIEWS: Record<string, ChangelogPreview> = {
  struggle: {
    kicker: "Mechaniki · w przygotowaniu",
    title: "Slavic Struggle of Perun",
    sub: "Zmagania o Wiarę",
    blurb:
      "Sklonowana z 1.6 mechanika Struggle, osadzona w ziemiach Słowiańszczyzny. Gracz wybiera, czy reformuje jeden z trzech odłamów wiary, czy zjednoczy je.",
  },
  perun: {
    kicker: "Bogowie · Wschodniosłowiańscy",
    title: "Perun",
    sub: "Władca Burz",
    blurb:
      "Głowa panteonu wiary wschodniej. W modzie oś mechaniki Struggle i patron tenetu Sądu Pioruna.",
  },
  vistulans: {
    kicker: "Kultury · Lechickie",
    title: "Wiślanie",
    sub: "Kultura małopolska",
    blurb:
      "Wczesna kultura nadwiślańska, fundament późniejszego państwa Piastów. W modzie z własnym zestawem tradycji i mecenas Krakowa.",
  },
  polans: {
    kicker: "Kultury · Lechickie",
    title: "Polanie",
    sub: "Kultura wielkopolska",
    blurb:
      "Plemię, z którego wyrasta państwo Mieszka. Tradycje akcentują wiec i wspólne decyzje wojenne.",
  },
  silesians: {
    kicker: "Kultury · Lechickie",
    title: "Ślężanie",
    sub: "Kultura śląska",
    blurb: "Plemię nad górną Odrą; w modzie z mocnym akcentem górniczym i targowym.",
  },
  wschsl: {
    kicker: "Wiary · podział",
    title: "East Slavic Pagan",
    sub: "Wiara Wschodniosłowiańska",
    blurb: "Odłam skupiony wokół Peruna; tenety: Przysięga, Drużyna, Prawo Gościnności.",
  },
  zachsl: {
    kicker: "Wiary · podział",
    title: "West Slavic Pagan",
    sub: "Wiara Połabsko-Pomorska",
    blurb: "Wiara plemion za Łabą; Świętowit, Trygław, Radogost.",
  },
  poludsl: {
    kicker: "Wiary · podział",
    title: "South Slavic Pagan",
    sub: "Wiara Południowa",
    blurb: "Tradycje bałkańskie; Perun jako Pan Gór.",
  },
  arkona: {
    kicker: "Święte miejsca · Rugia",
    title: "Arkona",
    sub: "Twierdza Świętowita",
    blurb: "Przylądkowa świątynia na wyspie Rugii — ostatnia wielka pogańska warownia.",
  },
  wiec: {
    kicker: "Instytucje",
    title: "Wiec",
    sub: "Zgromadzenie plemienne",
    blurb: "Demokratyczne zgromadzenie wolnych mężów. Decyzje o wojnie, sądach i pokoju.",
  },
  ckIII: {
    kicker: "Gra-baza",
    title: "Crusader Kings III",
    sub: "Paradox Interactive",
    blurb:
      "Wersja-baza moda Slavic Enlarged. Mod nadąża za patchami z 6-8 tyg. opóźnieniem.",
    external: true,
  },
};

/* =============================================================
   Helpers
   ============================================================= */

export const CATEGORY_META: Record<
  ChangeCategory,
  { label: string; glyph: string; tone: "pos" | "gold" | "info" | "neg" | "neu" }
> = {
  added: { label: "Dodano", glyph: "+", tone: "pos" },
  changed: { label: "Zmieniono", glyph: "~", tone: "gold" },
  fixed: { label: "Naprawiono", glyph: "✓", tone: "info" },
  removed: { label: "Wycofano", glyph: "−", tone: "neg" },
  wip: { label: "W przygotowaniu", glyph: "◊", tone: "neu" },
};

export const PHASE_TAG_LABEL: Record<ChangePhase, string> = {
  alpha: "ALPHA",
  beta: "BETA",
  rc: "RC",
  brainstorming: "BRAINSTORMING",
};

/** Zlicz wpisy każdej kategorii w całej kronice — do chipów filtrów i statystyk. */
export function countByCategory(
  versions: ChangelogVersion[]
): Record<ChangeCategory, number> {
  const out: Record<ChangeCategory, number> = {
    added: 0,
    changed: 0,
    fixed: 0,
    removed: 0,
    wip: 0,
  };
  for (const v of versions) {
    for (const g of v.groups) out[g.category] += g.items.length;
  }
  return out;
}

/** Polish plural for "wpis". */
export function pluralizeWpisy(n: number): string {
  if (n === 1) return "wpis";
  const last = n % 10;
  const lastTwo = n % 100;
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return "wpisy";
  return "wpisów";
}
