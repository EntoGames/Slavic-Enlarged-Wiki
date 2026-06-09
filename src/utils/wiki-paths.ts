/* =============================================================
   Pure utility — derywacja slug / urlPath / section z systemu plików.
   ─────────────────────────────────────────────────────────────
   Założenia o strukturze repo:

     wiki/
     ├── index.md                         → urlPath '/'
     ├── 01-wprowadzenie/
     │   └── o-modach.md                  → '/wiki/wprowadzenie/o-modach'
     ├── 02-kultury/
     │   ├── przeglad-kultur.md           → '/wiki/kultury/przeglad-kultur'
     │   └── wschodnioslowianskie/
     │       └── README.md                → '/wiki/kultury/wschodnioslowianskie'
     │       └── krywicze.md              → '/wiki/kultury/wschodnioslowianskie/krywicze'
     └── 04-walka-slowianczyzny/
         └── fazy/
             └── burza-peruna.md          → '/wiki/walka-slowianczyzny/fazy/burza-peruna'

   Reguły:
   - Numeryczny prefix `NN-` jest stripowany ze wszystkich segmentów,
     żeby URL-e były czyste, ale kolejność w nawigacji nadal pochodzi
     z numeracji folderów.
   - `README.md` w folderze działa jak landing-page kategorii: jego
     urlPath kończy się na folderze.
   - `ARCHITECTURE.md` i każdy plik UPPERCASE.md w korzeniu są wyłączone
     z generowania stron (to dokumentacja repo, nie content).
   ============================================================= */

export interface DerivedFields {
  /** Końcowy URL: '/wiki/...' lub '/' dla index. Bez końcowego slasha. */
  urlPath: string;
  /** Sam ostatni segment, używany jako stabilny identyfikator. */
  slug: string;
  /** Pierwszy segment URL (bez NN-). Klucz nawigacji w mega-menu. */
  section: string | null;
  /** Liczba z prefiksu NN- folderu first-level (do sortowania). 0 jeśli brak. */
  sectionOrder: number;
  /** Czy plik to landing-page kategorii (README.md w podfolderze). */
  isCategoryIndex: boolean;
  /** Pełna ścieżka segmentów po stripie NN- (bez `wiki/`, bez `.md`). */
  segments: string[];
  /** Czy plik jest w ogóle treścią wiki (false dla ARCHITECTURE.md itp). */
  isContent: boolean;
}

/** Strip `NN-` prefix and `.md` suffix. */
function cleanSegment(s: string): string {
  return s.replace(/^\d+-/, "").replace(/\.md$/i, "");
}

/** Wyciągnij liczbę z prefixu NN- albo zwróć 0. */
function segmentOrder(s: string): number {
  const m = s.match(/^(\d+)-/);
  return m ? parseInt(m[1], 10) : 0;
}

/** Plik dokumentacji repo (ARCHITECTURE.md, CHANGELOG.md, README.md w root). */
function isRepoDoc(segments: string[], filename: string): boolean {
  if (segments.length > 0) return false; // pliki w podfolderach są treścią
  return /^[A-Z][A-Z0-9_-]*\.md$/.test(filename);
}

/**
 * Derywuj wszystkie pola z relatywnej ścieżki względem korzenia `wiki/`.
 * @param relPath Np. `04-walka-slowianczyzny/fazy/burza-peruna.md`.
 */
export function deriveFromPath(relPath: string): DerivedFields {
  // Normalize separators + strip leading slash
  const parts = relPath.replace(/^[/\\]+/, "").split(/[/\\]/);
  const filename = parts[parts.length - 1];
  const folderParts = parts.slice(0, -1);

  // index.md w korzeniu → '/'
  if (folderParts.length === 0 && filename.toLowerCase() === "index.md") {
    return {
      urlPath: "/",
      slug: "index",
      section: null,
      sectionOrder: 0,
      isCategoryIndex: true,
      segments: [],
      isContent: true,
    };
  }

  // Repo-doc (UPPERCASE.md w korzeniu)
  if (isRepoDoc(folderParts, filename)) {
    return {
      urlPath: "",
      slug: cleanSegment(filename),
      section: null,
      sectionOrder: 0,
      isCategoryIndex: false,
      segments: [],
      isContent: false,
    };
  }

  // README.md w podfolderze → landing-page kategorii
  const isCategoryIndex = filename.toLowerCase() === "readme.md";

  // Segmenty docelowe (po stripie NN-)
  const cleanedFolders = folderParts.map(cleanSegment);
  const cleanedFile = cleanSegment(filename);

  const segments = isCategoryIndex
    ? cleanedFolders
    : [...cleanedFolders, cleanedFile];

  const section = cleanedFolders[0] ?? null;
  const sectionOrder = folderParts[0] ? segmentOrder(folderParts[0]) : 0;

  const slug = segments[segments.length - 1] ?? "index";
  const urlPath = "/wiki/" + segments.join("/");

  return {
    urlPath,
    slug,
    section,
    sectionOrder,
    isCategoryIndex,
    segments,
    isContent: true,
  };
}

/**
 * Buduje breadcrumbs jako tablicę krotek [label, href]. Etykiety pochodzą
 * z mapy `SECTION_LABELS` (sekcja) i `subfolderLabels` (podfoldery);
 * nieznane segmenty są tytuł-case'owane z slugu.
 */
export function buildBreadcrumbs(
  segments: string[],
  sectionLabels: Record<string, string>,
  subfolderLabels?: Record<string, string>
): { label: string; href: string }[] {
  if (segments.length === 0) return [];
  const out: { label: string; href: string }[] = [];
  let acc = "/wiki";
  for (let i = 0; i < segments.length; i++) {
    acc += "/" + segments[i];
    const seg = segments[i];
    const label =
      (i === 0 && sectionLabels[seg]) ||
      subfolderLabels?.[seg] ||
      humanizeSlug(seg);
    out.push({ label, href: acc });
  }
  return out;
}

/** "burza-peruna" → "Burza Peruna" (best-effort). */
export function humanizeSlug(slug: string): string {
  return slug
    .split("-")
    .map((w) => (w.length > 0 ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

/* =============================================================
   Wykrywanie wiki-linków w markdown.
   ─────────────────────────────────────────────────────────────
   Autor pisze:
     [Krywicze](02-kultury/wschodnioslowianskie/krywicze.md)
     [Wiara wschodnia](../wiara/przeglad-wiary.md)
     [Wiara](wiara/)
   Wszystkie te formy traktujemy jako wewnętrzne i normalizujemy do
   `/wiki/<segments>`. Linki absolutne (http://, https://, mailto:, #)
   zostawiamy w spokoju.
   ============================================================= */

/** Czy `href` to link wewnątrz wiki? */
export function isWikiHref(href: string): boolean {
  if (!href) return false;
  if (/^[a-z]+:/i.test(href)) return false; // http:, https:, mailto:, wiki:
  if (href.startsWith("#")) return false;
  if (href.startsWith("/")) return href.startsWith("/wiki");
  return true; // relatywne
}

/**
 * Normalizuj href markdown-linku do `/wiki/<segments>` formatu.
 * `currentSegments` to segmenty bieżącego artykułu (bez `.md`), używane
 * do rozwiązywania `..` i ścieżek relatywnych.
 */
export function normalizeWikiHref(
  href: string,
  currentSegments: string[]
): string {
  // Strip anchor / query — zachowamy je z powrotem
  const [pathPart, ...rest] = href.split(/(?=[#?])/);
  let path = pathPart;

  // Absolutny `/wiki/...` → już znormalizowany
  if (path.startsWith("/wiki/")) {
    return path.replace(/\/+$/, "") + rest.join("");
  }

  // Strip `.md` i końcowy slash
  path = path.replace(/\.md$/i, "").replace(/\/+$/, "");

  // Relatywny — rozwiąż względem aktualnej ścieżki
  // Bazą jest folder bieżącego artykułu = wszystkie segmenty oprócz ostatniego
  const baseDir = currentSegments.slice(0, -1);
  const linkParts = path.split("/");
  const resolved: string[] = [...baseDir];

  for (const part of linkParts) {
    if (part === "" || part === ".") continue;
    if (part === "..") {
      resolved.pop();
      continue;
    }
    // Strip NN- prefix gdyby autor go wpisał
    resolved.push(part.replace(/^\d+-/, ""));
  }

  return "/wiki/" + resolved.join("/") + rest.join("");
}
