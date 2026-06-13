export interface SteamSnapshot {
  date: string;
  label?: string;
  subscribers: number;
  visitors: number;
  favorites: number;
  ratings: number;
  comments: number;
}

/**
 * Combined from:
 *   design-docs/[docs] Slavic-Enlarged/community/SESteamStat.md
 *   Slavic-Enlarged/SESteamStat.md
 */
export const SE_STEAM_STATS: SteamSnapshot[] = [
  { date: "2026-06-08", label: "8 cze", subscribers: 6, visitors: 62, favorites: 2, ratings: 2, comments: 1 },
  { date: "2026-06-08T18:00", label: "8 cze pm", subscribers: 7, visitors: 66, favorites: 3, ratings: 3, comments: 1 },
  { date: "2026-06-09", label: "9 cze", subscribers: 33, visitors: 454, favorites: 9, ratings: 6, comments: 2 },
  { date: "2026-06-10", label: "10 cze", subscribers: 131, visitors: 1571, favorites: 43, ratings: 16, comments: 7 },
  { date: "2026-06-11", label: "11 cze", subscribers: 295, visitors: 3347, favorites: 92, ratings: 29, comments: 20 },
];

export interface MetricConfig {
  key: keyof Omit<SteamSnapshot, "date" | "label">;
  label: string;
  color: string;
}

export const METRICS: MetricConfig[] = [
  { key: "visitors", label: "Odwiedzający", color: "#6ba0d6" },
  { key: "subscribers", label: "Subskrybenci", color: "#c5a048" },
  { key: "favorites", label: "Ulubione", color: "#e63946" },
  { key: "ratings", label: "Oceny", color: "#83c84d" },
  { key: "comments", label: "Komentarze", color: "#b39ddb" },
];
