import * as React from "react";
import { Link, type HeadFC } from "gatsby";

import { MegaMenu } from "../../templates/components/MegaMenu";
import { WikiLinkProvider } from "../../templates/components/WikiLink";

import kolovratSvg from "../../assets/img/kolovrat.svg";

import "../../templates/wiki-article.module.css";
import "../../templates/mega-menu.module.css";
import "../../styles/home.css";
import "./dev-hub.module.css";

/* ─── Data ─── */

const DEV_PAGES = [
  {
    title: "Marketing — SE",
    description: "Opisy Steam, cover, branding, karty kultur, release notes",
    path: "/dev/marketing/se/",
    mod: "Slavic Enlarged",
    accent: "#7a9e5a",
  },
  {
    title: "Marketing — SSP",
    description: "Opisy Steam, feature list, ogłoszenia",
    path: "/dev/marketing/ssp/",
    mod: "Slavic Struggle of Perun",
    accent: "#c5a048",
  },
  {
    title: "Marketing — Branding",
    description: "Logo, wordmark, kolory, specyfikacje rozmiarów",
    path: "/dev/marketing/branding/",
    mod: "Wspólne",
    accent: "#c5a048",
  },
  {
    title: "Design System",
    description: "Tokeny, komponenty, typografia, kolory",
    path: "/dev/design-system/",
    mod: "Wiki",
    accent: "#8a9eb5",
  },
];

/* ─── Component ─── */

const DevHub: React.FC = () => {
  return (
    <WikiLinkProvider>
      <main id="main" className="wf" style={{ background: "var(--bg-page-dark)", minHeight: "100vh" }}>

        <MegaMenu activeUrlPath="/dev" />

        <div className="dh-header">
          <span className="dh-header__eyebrow">Dev-only</span>
          <h1 className="dh-header__title">Panel deweloperski</h1>
          <p className="dh-header__sub">
            Materiały promocyjne, design system, narzędzia wewnętrzne.
          </p>
        </div>

        <div className="dh-grid">
          {DEV_PAGES.map((page) => (
            <Link key={page.path} to={page.path} className="dh-card" style={{ "--card-accent": page.accent } as React.CSSProperties}>
              <div className="dh-card__accent" />
              <span className="dh-card__mod">{page.mod}</span>
              <h2 className="dh-card__title">{page.title}</h2>
              <p className="dh-card__desc">{page.description}</p>
            </Link>
          ))}
        </div>

        <footer className="kb-footer">
          <img src={kolovratSvg} alt="" style={{ width: 20, opacity: 0.25 }} />
          <span>Dev-only — nie buduje się na produkcji</span>
        </footer>

      </main>
    </WikiLinkProvider>
  );
};

export default DevHub;

export const Head: HeadFC = () => (
  <>
    <title>Dev — Slavic Enlarged</title>
    <html lang="pl" />
  </>
);
