import * as React from "react";
import { type HeadFC } from "gatsby";
import { MarketingLayout } from "../MarketingLayout";

import wordmarkSvg from "../../../assets/img/wordmark.svg";

/* ─── Data ─── */

const STEAM_SHORT = `Slavic Enlarged redefines Slavic cultures in CK3 — 35 unique cultures, a reformed pagan faith system with 3 branches, 15 holy sites, and deep historical flavour from the Vistula to the Volga.`;

const STEAM_LONG = `Slavic Enlarged transforms the Slavic world in Crusader Kings III into a rich, historically grounded experience.

**35 unique cultures** — each with distinct traditions, name lists, and cultural mechanics. From the warrior Polabians to the merchant Novgorodians, every culture plays differently.

**A living faith** — Three branches of Slavic paganism (Eastern, Western, Southern) with unique tenets, holy sites, and reformation paths. Will you unite the faith under Perun's banner, or let the old ways fracture?

**15 holy sites** — From Arkona's temple to the sacred groves of the Dnieper. Each site grants unique bonuses and unlocks decisions.

**Historical depth** — Grounded in chronicles, archaeology, and scholarship. Where the mod departs from history, it does so deliberately for gameplay.

Compatible with CK3 1.12+. No DLC required for the base mod.`;

const STEAM_FEATURES = [
  "35 unique Slavic cultures with custom traditions and ethos",
  "3 branches of Slavic paganism — Eastern, Western, Southern",
  "15 holy sites with unique mechanics",
  "Custom name lists and CoA for every culture",
  "Historically grounded with extensive research",
  "Full English and Polish localization",
  "Compatible with most major mods",
];

const TRADITION_LABELS: Record<string, string> = {
  tradition_city_keepers: "City Keepers",
  tradition_agrarian: "Agrarian",
  tradition_forest_folk: "Forest Folk",
  tradition_sacred_groves: "Sacred Groves",
  tradition_hunters: "Hunters",
  tradition_horse_lords: "Horse Lords",
  tradition_druzhina: "Druzhina",
  tradition_astute_diplomats: "Astute Diplomats",
  tradition_xenophilic: "Xenophilic",
  tradition_pastoralists: "Pastoralists",
  tradition_maritime_mercantilism: "Maritime Mercantilism",
  tradition_castle_keepers: "Castle Keepers",
  tradition_mountain_homes: "Mountain Homes",
  tradition_stand_and_fight: "Stand and Fight",
  tradition_parochialism: "Parochialism",
};

interface CultureCard {
  name: string;
  nameEn: string;
  mapKey: string;
  heritage: string;
  heritageEn: string;
  ethos: string;
  language: string;
  traditions: string[];
  region: string;
  description: string;
  accent: string;
}

const CULTURES: CultureCard[] = [
  // ─── East Slavic ───
  { name: "Krivichians", nameEn: "Krivichians", mapKey: "krivichians", heritage: "East Slavic", heritageEn: "East Slavic", ethos: "Communal", language: "East Slavic", traditions: ["tradition_city_keepers", "tradition_agrarian"], region: "Smolensk, Upper Dvina", description: "A people of trade routes between the Baltic and the Dnieper. City keepers along the Dvina, Dnieper, and Volga.", accent: "#7a9e5a" },
  { name: "Vyatichi", nameEn: "Vyatichi", mapKey: "vyatichi", heritage: "East Slavic", heritageEn: "East Slavic", ethos: "Communal", language: "East Slavic", traditions: ["tradition_forest_folk", "tradition_sacred_groves"], region: "Oka River Basin", description: "The last pagans of Rus — forest dwellers along the Oka, guardians of the sacred groves.", accent: "#7a9e5a" },
  { name: "Drevlyans", nameEn: "Drevlyans", mapKey: "drevlyans", heritage: "East Slavic", heritageEn: "East Slavic", ethos: "Stoic", language: "East Slavic", traditions: ["tradition_forest_folk", "tradition_hunters"], region: "Pripyat Forests", description: "Hardy forest hunters of the Pripyat wilderness. Unyielding defenders of ancient ways.", accent: "#7a9e5a" },
  { name: "Dregovichs", nameEn: "Dregovichs", mapKey: "dregovichs", heritage: "East Slavic", heritageEn: "East Slavic", ethos: "Communal", language: "East Slavic", traditions: ["tradition_forest_folk", "tradition_agrarian"], region: "Polesia Marshes", description: "Marsh-dwelling folk of the Pripyat basin — farmers and foresters of the Polesian wetlands.", accent: "#7a9e5a" },
  { name: "Polyans", nameEn: "Polyans", mapKey: "polyans", heritage: "East Slavic", heritageEn: "East Slavic", ethos: "Courtly", language: "East Slavic", traditions: ["tradition_city_keepers", "tradition_astute_diplomats"], region: "Kyiv, Middle Dnieper", description: "A courtly culture on the Dnieper — the heart of future Kievan Rus, skilled diplomats and city builders.", accent: "#7a9e5a" },
  { name: "Ulichs", nameEn: "Ulichs", mapKey: "ulichs", heritage: "East Slavic", heritageEn: "East Slavic", ethos: "Bellicose", language: "East Slavic", traditions: ["tradition_horse_lords", "tradition_druzhina"], region: "Lower Dnieper / Bug", description: "Steppe Slavs on the southern marches of Rus — horse lords with a formidable druzhina.", accent: "#7a9e5a" },
  { name: "Radimichs", nameEn: "Radimichs", mapKey: "radimichs", heritage: "East Slavic", heritageEn: "East Slavic", ethos: "Communal", language: "East Slavic", traditions: ["tradition_sacred_groves", "tradition_agrarian"], region: "Sozh River Basin", description: "A small tribe of sacred groves along the Sozh — farmers and keepers of pagan rites.", accent: "#7a9e5a" },
  { name: "Polochans", nameEn: "Polochans", mapKey: "polochans", heritage: "East Slavic", heritageEn: "East Slavic", ethos: "Courtly", language: "East Slavic", traditions: ["tradition_city_keepers", "tradition_druzhina"], region: "Polotsk Region", description: "Merchants and warriors of the Dvina — a bridge between Rus and the Baltic, with a strong druzhina.", accent: "#7a9e5a" },
  { name: "Tivertsi", nameEn: "Tivertsi", mapKey: "tivertsi", heritage: "East Slavic", heritageEn: "East Slavic", ethos: "Stoic", language: "East Slavic", traditions: ["tradition_agrarian", "tradition_xenophilic"], region: "Dniester / Prut", description: "A borderland tribe on the Dniester — welcoming farmers between Rus and the steppe.", accent: "#7a9e5a" },
  { name: "Ilmenians", nameEn: "Ilmenians", mapKey: "ilmenian", heritage: "East Slavic", heritageEn: "East Slavic", ethos: "Communal", language: "East Slavic", traditions: ["tradition_city_keepers", "tradition_maritime_mercantilism"], region: "Novgorod, Lake Ilmen", description: "The merchant tribe of Novgorod — a gateway between the Baltic and Byzantium.", accent: "#7a9e5a" },
  { name: "Severians", nameEn: "Severians", mapKey: "severian", heritage: "East Slavic", heritageEn: "East Slavic", ethos: "Stoic", language: "East Slavic", traditions: ["tradition_forest_folk", "tradition_agrarian"], region: "Desna River Basin", description: "A resilient tribe of forest farmers on the steppe frontier — stoic defenders of the Desna.", accent: "#7a9e5a" },
  // ─── West Slavic ───
  { name: "Polans", nameEn: "Polans", mapKey: "polans", heritage: "West Slavic", heritageEn: "West Slavic", ethos: "Courtly", language: "Lechitic", traditions: ["tradition_agrarian", "tradition_city_keepers"], region: "Greater Poland", description: "The heart of future Poland — a courtly culture of the Piast dynasty, farmers and stronghold builders.", accent: "#c5a048" },
  { name: "Goplans", nameEn: "Goplans", mapKey: "goplans", heritage: "West Slavic", heritageEn: "West Slavic", ethos: "Communal", language: "Lechitic", traditions: ["tradition_agrarian", "tradition_stand_and_fight"], region: "Lake Goplo", description: "A people of Lake Goplo — the legendary tribe of Popiel, unyielding farmers of Kujawy.", accent: "#c5a048" },
  { name: "Mazovians", nameEn: "Mazovians", mapKey: "mazovians", heritage: "West Slavic", heritageEn: "West Slavic", ethos: "Communal", language: "Lechitic", traditions: ["tradition_forest_folk", "tradition_stand_and_fight"], region: "Mazovia", description: "Forest Lechites of the Vistula and Bug lowlands — unyielding defenders of the Mazovian wilderness.", accent: "#c5a048" },
  { name: "Vistulans", nameEn: "Vistulans", mapKey: "vistulan", heritage: "West Slavic", heritageEn: "West Slavic", ethos: "Stoic", language: "Lechitic", traditions: ["tradition_agrarian", "tradition_castle_keepers"], region: "Lesser Poland", description: "Stoic farmers and castle builders on the upper Vistula — the foundations of future Krakow.", accent: "#c5a048" },
  { name: "Silesians", nameEn: "Silesians", mapKey: "silesian", heritage: "West Slavic", heritageEn: "West Slavic", ethos: "Communal", language: "Lechitic", traditions: ["tradition_agrarian", "tradition_forest_folk"], region: "Silesia", description: "Farmers of the Oder at the foot of the Sudetes — the forest folk of Mount Sleza.", accent: "#c5a048" },
  { name: "Kashubians", nameEn: "Kashubians", mapKey: "kashubians", heritage: "West Slavic", heritageEn: "West Slavic", ethos: "Communal", language: "Lechitic", traditions: ["tradition_maritime_mercantilism", "tradition_agrarian"], region: "Gdansk Pomerania", description: "A Lechitic seafaring folk on the Baltic coast — fishermen, traders, and farmers of Gdansk.", accent: "#c5a048" },
  { name: "Pomeranians", nameEn: "Pomeranians", mapKey: "pommeranian", heritage: "West Slavic", heritageEn: "West Slavic", ethos: "Stoic", language: "Lechitic", traditions: ["tradition_maritime_mercantilism", "tradition_hunters"], region: "Western Pomerania", description: "Stoic fishermen and merchants of the Baltic coast — hunters of the maritime trade routes.", accent: "#c5a048" },
  { name: "Obodrites", nameEn: "Obodrites", mapKey: "obodrites", heritage: "West Slavic", heritageEn: "West Slavic", ethos: "Bellicose", language: "Lechitic", traditions: ["tradition_maritime_mercantilism", "tradition_stand_and_fight"], region: "Mecklenburg", description: "The mightiest Polabian tribe — unyielding traders and warriors on the Saxon frontier.", accent: "#c5a048" },
  { name: "Lutici", nameEn: "Lutici", mapKey: "lutici", heritage: "West Slavic", heritageEn: "West Slavic", ethos: "Bellicose", language: "Lechitic", traditions: ["tradition_sacred_groves", "tradition_stand_and_fight"], region: "Brandenburg", description: "A confederation of warlike tribes — guardians of sacred groves along the Havel and Spree.", accent: "#c5a048" },
  { name: "Rani", nameEn: "Rani", mapKey: "rani", heritage: "West Slavic", heritageEn: "West Slavic", ethos: "Bellicose", language: "Lechitic", traditions: ["tradition_sacred_groves", "tradition_maritime_mercantilism"], region: "Rugia (Arkona)", description: "Guardians of Arkona — a warlike people of the sacred island of Rugia, priests and sea traders.", accent: "#c5a048" },
  { name: "Sorbians", nameEn: "Sorbians", mapKey: "sorbian", heritage: "West Slavic", heritageEn: "West Slavic", ethos: "Communal", language: "Lechitic", traditions: ["tradition_agrarian", "tradition_castle_keepers"], region: "Lusatia", description: "Polabian farmers between the Elbe and the Oder — castle builders on the Imperial frontier.", accent: "#c5a048" },
  { name: "Drevani", nameEn: "Drevani", mapKey: "drevani", heritage: "West Slavic", heritageEn: "West Slavic", ethos: "Stoic", language: "Lechitic", traditions: ["tradition_forest_folk", "tradition_sacred_groves"], region: "Hanoverian Forests", description: "Forest Polabians of the Wendland — the last Slavs beyond the Elbe, keepers of sacred groves.", accent: "#c5a048" },
  { name: "Hevelli", nameEn: "Hevelli", mapKey: "hevelli", heritage: "West Slavic", heritageEn: "West Slavic", ethos: "Courtly", language: "Lechitic", traditions: ["tradition_city_keepers", "tradition_xenophilic"], region: "Brandenburg / Havel", description: "A Polabian people of the Havel — welcoming stronghold builders on the front line of Christian expansion.", accent: "#c5a048" },
  { name: "Wagrians", nameEn: "Wagrians", mapKey: "wagrians", heritage: "West Slavic", heritageEn: "West Slavic", ethos: "Stoic", language: "Lechitic", traditions: ["tradition_maritime_mercantilism", "tradition_hunters"], region: "Wagria (Holstein)", description: "Baltic Polabians on the Danish-Saxon border — hunters and sea merchants.", accent: "#c5a048" },
  { name: "Nitrianians", nameEn: "Nitrianians", mapKey: "nitrianians", heritage: "West Slavic", heritageEn: "West Slavic", ethos: "Bureaucratic", language: "Czech-Slovak", traditions: ["tradition_city_keepers", "tradition_parochialism"], region: "Nitra / Slovakia", description: "A Slavic tribe on the Moravian-Hungarian borderland — city keepers with a strong local tradition.", accent: "#c5a048" },
  { name: "Carantanians", nameEn: "Carantanians", mapKey: "carantanian", heritage: "West Slavic", heritageEn: "West Slavic", ethos: "Communal", language: "Lechitic", traditions: ["tradition_agrarian", "tradition_mountain_homes"], region: "Carinthia / Alps", description: "Alpine Slavs — the oldest Slavic principality in Europe, mountain-dwelling farmers.", accent: "#c5a048" },
  // ─── South Slavic ───
  { name: "Croats", nameEn: "Croats", mapKey: "croatian", heritage: "South Slavic", heritageEn: "South Slavic", ethos: "Communal", language: "South Slavic", traditions: ["tradition_maritime_mercantilism", "tradition_castle_keepers"], region: "Dalmatia, Slavonia", description: "The mightiest culture of the south — from Dalmatia to Slavonia, fortress builders and sea traders.", accent: "#c26a4a" },
  { name: "Serbs", nameEn: "Serbs", mapKey: "serbian", heritage: "South Slavic", heritageEn: "South Slavic", ethos: "Communal", language: "South Slavic", traditions: ["tradition_stand_and_fight", "tradition_castle_keepers"], region: "Rashka", description: "Balkan warriors between Byzantium and Bulgaria — unyielding fortress builders.", accent: "#c26a4a" },
  { name: "Travunians", nameEn: "Travunians", mapKey: "travunians", heritage: "South Slavic", heritageEn: "South Slavic", ethos: "Stoic", language: "South Slavic", traditions: ["tradition_pastoralists", "tradition_maritime_mercantilism"], region: "Trebinje, Borderlands", description: "A coastal tribe between Dubrovnik and Kotor — pastoralists and Adriatic merchants.", accent: "#c26a4a" },
  { name: "Docleani", nameEn: "Docleani", mapKey: "docleani", heritage: "South Slavic", heritageEn: "South Slavic", ethos: "Stoic", language: "South Slavic", traditions: ["tradition_maritime_mercantilism", "tradition_castle_keepers"], region: "Montenegro / Doclea", description: "Fortress builders in the mountains of Montenegro — between the sea and the peaks.", accent: "#c26a4a" },
  { name: "Timocani", nameEn: "Timocani", mapKey: "timocani", heritage: "South Slavic", heritageEn: "South Slavic", ethos: "Stoic", language: "South Slavic", traditions: ["tradition_pastoralists", "tradition_hunters"], region: "Timok Valley", description: "Stoic herders and hunters of the Timok Valley — a people of the Bulgarian-Serbian borderlands.", accent: "#c26a4a" },
  { name: "Branicevci", nameEn: "Branicevci", mapKey: "branicevci", heritage: "South Slavic", heritageEn: "South Slavic", ethos: "Stoic", language: "South Slavic", traditions: ["tradition_druzhina", "tradition_agrarian"], region: "Branicevo", description: "Stoic guardians of the Branicevo fortress on the Danube — druzhina warriors and farmers.", accent: "#c26a4a" },
  { name: "Smolyani", nameEn: "Smolyani", mapKey: "smolyani", heritage: "South Slavic", heritageEn: "South Slavic", ethos: "Stoic", language: "South Slavic", traditions: ["tradition_mountain_homes", "tradition_hunters"], region: "Rhodopes", description: "Mountain Slavs of the Rhodopes — hunters on the Byzantine frontier.", accent: "#c26a4a" },
  { name: "Pannonian Slavs", nameEn: "Pannonian Slavs", mapKey: "pannonian_slavs", heritage: "South Slavic", heritageEn: "South Slavic", ethos: "Bureaucratic", language: "South Slavic", traditions: ["tradition_city_keepers", "tradition_astute_diplomats"], region: "Pannonia", description: "Slavs of the Pannonian plain — astute diplomats between the Franks and the Bulgars.", accent: "#c26a4a" },
  { name: "Draguvites", nameEn: "Draguvites", mapKey: "draguvites", heritage: "South Slavic", heritageEn: "South Slavic", ethos: "Communal", language: "South Slavic", traditions: ["tradition_agrarian", "tradition_forest_folk"], region: "Macedonia / Thrace", description: "An agrarian Macedonian culture between the Strymon and Thrace — forest farmers of the Balkans.", accent: "#c26a4a" },
];

/* ─── Component ─── */

const MarketingSE: React.FC = () => {
  return (
    <MarketingLayout activePath="/dev/marketing/se/" eyebrow="Slavic Enlarged" title="Marketing — SE">

      {/* ── Opisy Steam ── */}
      <section className="mk-section">
        <h2 className="mk-section__title">
          <span className="mk-section__num" aria-hidden="true">I</span>
          Steam Workshop
        </h2>

        <div className="mk-card">
          <h3 className="mk-card__title">Krótki opis</h3>
          <p className="mk-card__meta">Limit: ~300 znaków (Steam short description)</p>
          <div className="mk-copybox">
            <pre className="mk-copybox__text">{STEAM_SHORT}</pre>
          </div>
        </div>

        <div className="mk-card">
          <h3 className="mk-card__title">Pełny opis</h3>
          <p className="mk-card__meta">Steam Workshop / Paradox Mods (markdown)</p>
          <div className="mk-copybox">
            <pre className="mk-copybox__text">{STEAM_LONG}</pre>
          </div>
        </div>

        <div className="mk-card">
          <h3 className="mk-card__title">Feature list</h3>
          <div className="mk-copybox">
            <ul className="mk-feature-list">
              {STEAM_FEATURES.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Okładka Steam ── */}
      <section className="mk-section" id="cover">
        <h2 className="mk-section__title">
          <span className="mk-section__num" aria-hidden="true">II</span>
          Okładka Steam Workshop
        </h2>
        <p className="mk-card__meta" style={{ marginBottom: 24 }}>
          Format 1:1 (512×512). Główna grafika moda na Steam Workshop.
        </p>

        <div className="mk-steam-cover" id="steam-cover">
          <div className="mk-steam-cover__map" />
          <div className="mk-steam-cover__overlay" />
          <div className="mk-steam-cover__content">
            <div className="mk-steam-cover__hero">
              <div className="mk-steam-cover__signet" />
              <h2 className="mk-steam-cover__title">Slavic<br />Enlarged</h2>
            </div>
          </div>
        </div>
      </section>

      {/* ── Karty kultur ── */}
      <section className="mk-section" id="culture-cards">
        <h2 className="mk-section__title">
          <span className="mk-section__num" aria-hidden="true">III</span>
          Karty kultur — Steam &amp; Social Media
        </h2>
        <p className="mk-card__meta" style={{ marginBottom: 24 }}>
          Format 16:9 (1920×1080). Per-culture cards — każda kultura osobno.
        </p>

        {(["East Slavic", "West Slavic", "South Slavic"] as const).map((heritage) => {
          const group = CULTURES.filter((c) => c.heritageEn === heritage);
          const labels: Record<string, { pl: string }> = {
            "East Slavic": { pl: "Wschodnie" },
            "West Slavic": { pl: "Zachodnie" },
            "South Slavic": { pl: "Południowe" },
          };
          return (
            <div key={heritage} className="mk-heritage-card" style={{ "--heritage-accent": group[0]?.accent } as React.CSSProperties}>
              <div className="mk-heritage-card__header">
                <h3 className="mk-heritage-card__title">{labels[heritage].pl}</h3>
                <span className="mk-heritage-card__count">{group.length} kultur</span>
              </div>
              <div className="mk-heritage-card__list">
                {group.map((c) => (
                  <div key={c.nameEn} className="mk-heritage-card__row">
                    <span className="mk-heritage-card__name">{c.name}</span>
                    <span className="mk-heritage-card__ethos">{c.ethos}</span>
                    <span className="mk-heritage-card__region">{c.region}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ── Release notes ── */}
      <section className="mk-section" id="release-notes">
        <h2 className="mk-section__title">
          <span className="mk-section__num" aria-hidden="true">IV</span>
          Release Notes (template)
        </h2>

        <div className="mk-card">
          <h3 className="mk-card__title">Format changelog publicznego</h3>
          <p className="mk-card__meta">Kopiuj do Steam Workshop update notes</p>
          <div className="mk-copybox">
            <pre className="mk-copybox__text">{`## Slavic Enlarged v1.x.y — [Tytuł]

### Nowe
- [Feature 1]
- [Feature 2]

### Poprawki
- [Fix 1]

### Zmiany
- [Change 1]

---
🐛 Zgłoś błąd: Discord / GitHub
📖 Wiki: [link]`}</pre>
          </div>
        </div>
      </section>

    </MarketingLayout>
  );
};

export default MarketingSE;

export const Head: HeadFC = () => (
  <>
    <title>Marketing SE — Slavic Enlarged (dev)</title>
    <html lang="pl" />
  </>
);
