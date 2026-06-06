/* =============================================================
   Rejestr modów — jedno źródło prawdy o widoczności treści wiki.
   ─────────────────────────────────────────────────────────────
   Każdy mod ma `visibility`: "public" (treść wyświetlana na wiki)
   lub "private" (filtrowana przy buildzie).

   `sections` to slugi sekcji wiki WYŁĄCZNIE powiązanych z danym
   modem. Sekcje "mixed" (decyzje, wydarzenia, poradniki, changelog)
   nie są tu wymienione — filtrowane per-artykuł przez frontmatter
   `mod:` (domyślnie → "se").
   ============================================================= */

export type ModVisibility = "public" | "private";

export interface ModEntry {
  id: string;
  name: string;
  prefix: string;
  repo?: string;
  visibility: ModVisibility;
  sections: string[];
}

export const MOD_REGISTRY: ModEntry[] = [
  {
    id: "se",
    name: "Slavic Enlarged",
    prefix: "se_",
    repo: "https://github.com/EntoGames/Slavic-Enlarged",
    visibility: "public",
    sections: ["wprowadzenie", "kultury", "wiara", "historia", "techniczne"],
  },
  {
    id: "ssp",
    name: "Slavic Struggle of Perun",
    prefix: "sessp_",
    visibility: "private",
    sections: ["walka-slowianczyzny", "scenariusze"],
  },
  {
    id: "sml",
    name: "Myths and Legends",
    prefix: "sml_",
    visibility: "private",
    sections: [],
  },
  {
    id: "kingdom-mods",
    name: "Kingdom Mods",
    prefix: "se??_",
    visibility: "private",
    sections: [
      "krolestwa-wschodnie",
      "krolestwa-zachodnie",
      "krolestwa-poludniowe",
    ],
  },
];

const _sectionToMod = new Map<string, ModEntry>();
for (const mod of MOD_REGISTRY) {
  for (const s of mod.sections) _sectionToMod.set(s, mod);
}

export function getModForSection(section: string): ModEntry | undefined {
  return _sectionToMod.get(section);
}

const _modById = new Map(MOD_REGISTRY.map((m) => [m.id, m]));

export function getModById(id: string): ModEntry | undefined {
  return _modById.get(id);
}

export function isModPublic(modId: string): boolean {
  const mod = _modById.get(modId);
  return mod ? mod.visibility === "public" : true;
}

export function isSectionVisible(section: string): boolean {
  const mod = getModForSection(section);
  if (!mod) return true;
  return mod.visibility === "public";
}

export function isArticleVisible(
  section: string | null,
  frontmatterMod?: string | null
): boolean {
  if (frontmatterMod) return isModPublic(frontmatterMod);
  if (section) return isSectionVisible(section);
  return true;
}

export const PUBLIC_MOD_IDS = new Set(
  MOD_REGISTRY.filter((m) => m.visibility === "public").map((m) => m.id)
);

export const VISIBLE_SECTIONS = new Set(
  MOD_REGISTRY.filter((m) => m.visibility === "public").flatMap((m) => m.sections)
);
