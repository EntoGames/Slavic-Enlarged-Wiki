import * as React from "react";
import { type HeadFC } from "gatsby";
import { MarketingLayout } from "../MarketingLayout";

/* ─── Data ─── */

const SSP_SHORT = `Slavic Struggle of Perun — a Struggle system addon for Slavic Enlarged. Five phases, three endings, one question: will Perun rise from the Dnieper?`;

const SSP_FEATURES = [
  "Full Struggle system with 5 phases",
  "3 unique endings shaping the Slavic world",
  "Dynamic AI behavior based on Struggle phase",
  "Unique decisions tied to Struggle progress",
  "Requires: Slavic Enlarged + Fate of Iberia DLC",
];

const SOCIAL_POSTS = [
  {
    platform: "Discord / Reddit",
    context: "Ogłoszenie wydania SE",
    text: `🎉 **Slavic Enlarged v1.x.y is live!**

35 cultures. 3 faith branches. 15 holy sites. The Slavic world in CK3 just got a whole lot deeper.

📥 Download: [Steam Workshop link]
📖 Wiki: [wiki link]
💬 Feedback: [Discord link]`,
  },
  {
    platform: "Discord / Reddit",
    context: "Ogłoszenie SSP",
    text: `⚔️ **Slavic Struggle of Perun** — the Struggle addon is here.

Five phases. Three endings. One question: will you unite the Slavic world under Perun's banner, or watch it fracture?

Requires Slavic Enlarged + Fate of Iberia DLC.`,
  },
  {
    platform: "Steam Workshop",
    context: "Update changelog (template)",
    text: `## v1.x.y — [Title]

**New:**
- [feature 1]
- [feature 2]

**Fixed:**
- [fix 1]

**Changed:**
- [change 1]

Thanks for playing! Report bugs on Discord or GitHub.`,
  },
];

/* ─── Component ─── */

const MarketingSSP: React.FC = () => {
  return (
    <MarketingLayout activePath="/dev/marketing/ssp/" eyebrow="Slavic Struggle of Perun" title="Marketing — SSP">

      {/* ── Opisy Steam ── */}
      <section className="mk-section">
        <h2 className="mk-section__title">
          <span className="mk-section__num" aria-hidden="true">I</span>
          Steam Workshop
        </h2>

        <div className="mk-card">
          <h3 className="mk-card__title">Krótki opis</h3>
          <p className="mk-card__meta">Steam short description</p>
          <div className="mk-copybox">
            <pre className="mk-copybox__text">{SSP_SHORT}</pre>
          </div>
        </div>

        <div className="mk-card">
          <h3 className="mk-card__title">Feature list</h3>
          <div className="mk-copybox">
            <ul className="mk-feature-list">
              {SSP_FEATURES.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Social Media ── */}
      <section className="mk-section" id="social">
        <h2 className="mk-section__title">
          <span className="mk-section__num" aria-hidden="true">II</span>
          Social Media
        </h2>

        {SOCIAL_POSTS.map((post, i) => (
          <div className="mk-card" key={i}>
            <h3 className="mk-card__title">{post.context}</h3>
            <p className="mk-card__meta">{post.platform}</p>
            <div className="mk-copybox">
              <pre className="mk-copybox__text">{post.text}</pre>
            </div>
          </div>
        ))}
      </section>

    </MarketingLayout>
  );
};

export default MarketingSSP;

export const Head: HeadFC = () => (
  <>
    <title>Marketing SSP — Slavic Enlarged (dev)</title>
    <html lang="pl" />
  </>
);
