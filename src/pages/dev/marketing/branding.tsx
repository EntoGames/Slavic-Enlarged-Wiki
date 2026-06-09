import * as React from "react";
import { type HeadFC } from "gatsby";
import { MarketingLayout } from "../MarketingLayout";

import kolovratSvg from "../../../assets/img/kolovrat.svg";
import wordmarkSvg from "../../../assets/img/wordmark.svg";

/* ─── Data ─── */

const BANNER_SPECS = [
  { name: "Steam Workshop Header", width: 636, height: 358, notes: "Main mod thumbnail. Dark bg, wordmark, subtitle." },
  { name: "Steam Screenshot", width: 1920, height: 1080, notes: "In-game screenshot showing cultures/faith UI." },
  { name: "Discord Embed", width: 1200, height: 630, notes: "OG image for link previews." },
  { name: "Paradox Mods Thumbnail", width: 512, height: 512, notes: "Square crop, kolovrat + wordmark centered." },
];

/* ─── Component ─── */

const MarketingBranding: React.FC = () => {
  return (
    <MarketingLayout activePath="/dev/marketing/branding/" eyebrow="Wspólne" title="Branding">

      {/* ── Logo & Wordmark ── */}
      <section className="mk-section">
        <h2 className="mk-section__title">
          <span className="mk-section__num" aria-hidden="true">I</span>
          Logo &amp; Wordmark
        </h2>

        <div className="mk-card">
          <h3 className="mk-card__title">Branding</h3>
          <div className="mk-brand-row">
            <div className="mk-brand-item">
              <img src={kolovratSvg} alt="Kolovrat — logo" className="mk-brand-item__img" />
              <span className="mk-brand-item__label">Kolovrat (logo)</span>
            </div>
            <div className="mk-brand-item">
              <img src={wordmarkSvg} alt="Slavic Enlarged — wordmark" className="mk-brand-item__img mk-brand-item__img--wide" />
              <span className="mk-brand-item__label">Wordmark</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specyfikacje rozmiarów ── */}
      <section className="mk-section" id="sizes">
        <h2 className="mk-section__title">
          <span className="mk-section__num" aria-hidden="true">II</span>
          Specyfikacje rozmiarów
        </h2>

        <div className="mk-card">
          <table className="mk-table">
            <thead>
              <tr>
                <th>Nazwa</th>
                <th>Rozmiar</th>
                <th>Uwagi</th>
              </tr>
            </thead>
            <tbody>
              {BANNER_SPECS.map((spec, i) => (
                <tr key={i}>
                  <td>{spec.name}</td>
                  <td><code>{spec.width}×{spec.height}</code></td>
                  <td>{spec.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </MarketingLayout>
  );
};

export default MarketingBranding;

export const Head: HeadFC = () => (
  <>
    <title>Branding — Slavic Enlarged (dev)</title>
    <html lang="pl" />
  </>
);
