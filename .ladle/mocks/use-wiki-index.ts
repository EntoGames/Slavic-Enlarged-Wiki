import { useMemo } from "react";

export interface WikiEntry {
  urlPath: string;
  slug: string;
  title: string;
  subtitle?: string;
  kicker: string;
  blurb: string;
  section: string | null;
  segments: string[];
  isCategoryIndex: boolean;
  badge?: string;
}

export interface WikiSection {
  id: string;
  label: string;
  navLabel: string;
  entries: WikiEntry[];
}

export interface WikiIndex {
  byUrlPath: Record<string, WikiEntry>;
  bySection: WikiSection[];
  visibleSections: WikiSection[];
  all: WikiEntry[];
}

const MOCK_ENTRIES: WikiEntry[] = [
  {
    urlPath: "/wiki/wprowadzenie/o-modach",
    slug: "o-modach",
    title: "O modach",
    kicker: "Wprowadzenie",
    blurb: "Instalacja i wymagania techniczne modu Slavic Enlarged.",
    section: "wprowadzenie",
    segments: ["wprowadzenie", "o-modach"],
    isCategoryIndex: false,
  },
  {
    urlPath: "/wiki/kultury/przeglad-kultur",
    slug: "przeglad-kultur",
    title: "Przegląd kultur",
    kicker: "Kultury",
    blurb: "35 kultur słowiańskich w modzie Slavic Enlarged.",
    section: "kultury",
    segments: ["kultury", "przeglad-kultur"],
    isCategoryIndex: false,
  },
  {
    urlPath: "/wiki/kultury/wschodnioslowianskie/krywicze",
    slug: "krywicze",
    title: "Krywicze",
    subtitle: "Ród Dzwiny",
    kicker: "Kultury · Wschodniosłowiańskie",
    blurb: "Krywicze osiedlili się w dorzeczu Dźwiny, budując swoją potęgę na handlu.",
    section: "kultury",
    segments: ["kultury", "wschodnioslowianskie", "krywicze"],
    isCategoryIndex: false,
    badge: "NOWE",
  },
  {
    urlPath: "/wiki/kultury/wschodnioslowianskie/polanie-kijowscy",
    slug: "polanie-kijowscy",
    title: "Polanie kijowscy",
    kicker: "Kultury · Wschodniosłowiańskie",
    blurb: "Polanie kijowscy — lud Kijowa, strażnicy najświętszego miejsca wschodniej Słowiańszczyzny.",
    section: "kultury",
    segments: ["kultury", "wschodnioslowianskie", "polanie-kijowscy"],
    isCategoryIndex: false,
  },
  {
    urlPath: "/wiki/wiara/przeglad-wiary",
    slug: "przeglad-wiary",
    title: "Przegląd wiary",
    kicker: "Wiara",
    blurb: "Jeden panteon, trzy odłamy, piętnaście miejsc świętych.",
    section: "wiara",
    segments: ["wiara", "przeglad-wiary"],
    isCategoryIndex: false,
  },
  {
    urlPath: "/wiki/wiara/bogowie/perun",
    slug: "perun",
    title: "Perun",
    subtitle: "Bóg piorunów i sprawiedliwości",
    kicker: "Wiara · Bogowie",
    blurb: "Perun — naczelny bóg Słowian, władca burz i gromów.",
    section: "wiara",
    segments: ["wiara", "bogowie", "perun"],
    isCategoryIndex: false,
  },
];

const MOCK_SECTIONS: WikiSection[] = [
  {
    id: "wprowadzenie",
    label: "Wprowadzenie",
    navLabel: "Start",
    entries: MOCK_ENTRIES.filter((e) => e.section === "wprowadzenie"),
  },
  {
    id: "kultury",
    label: "Kultury",
    navLabel: "Kultury",
    entries: MOCK_ENTRIES.filter((e) => e.section === "kultury"),
  },
  {
    id: "wiara",
    label: "Wiara",
    navLabel: "Wiara",
    entries: MOCK_ENTRIES.filter((e) => e.section === "wiara"),
  },
];

const MOCK_INDEX: WikiIndex = {
  all: MOCK_ENTRIES,
  byUrlPath: Object.fromEntries(MOCK_ENTRIES.map((e) => [e.urlPath, e])),
  bySection: MOCK_SECTIONS,
  visibleSections: MOCK_SECTIONS,
};

export function useWikiIndex(): WikiIndex {
  return useMemo(() => MOCK_INDEX, []);
}
