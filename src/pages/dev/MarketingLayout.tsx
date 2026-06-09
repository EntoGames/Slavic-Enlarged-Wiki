import * as React from "react";
import { Link } from "gatsby";

import { MegaMenu } from "../../templates/components/MegaMenu";
import { WikiLinkProvider } from "../../templates/components/WikiLink";

import kolovratSvg from "../../assets/img/kolovrat.svg";

import "../../templates/wiki-article.module.css";
import "../../templates/mega-menu.module.css";
import "../../styles/home.css";
import "./marketing.module.css";
import "./marketing-layout.module.css";

/* ─── Sidebar nav structure ─── */

const NAV = [
  {
    group: "Slavic Enlarged",
    items: [
      { label: "Opisy Steam", path: "/dev/marketing/se/" },
      { label: "Okładka Steam", path: "/dev/marketing/se/", hash: "#cover" },
      { label: "Karty kultur", path: "/dev/marketing/se/", hash: "#culture-cards" },
      { label: "Release notes", path: "/dev/marketing/se/", hash: "#release-notes" },
    ],
  },
  {
    group: "Slavic Struggle of Perun",
    items: [
      { label: "Opisy Steam", path: "/dev/marketing/ssp/" },
      { label: "Social Media", path: "/dev/marketing/ssp/", hash: "#social" },
    ],
  },
  {
    group: "Branding",
    items: [
      { label: "Logo & Wordmark", path: "/dev/marketing/branding/" },
      { label: "Rozmiary grafik", path: "/dev/marketing/branding/", hash: "#sizes" },
    ],
  },
];

interface MarketingLayoutProps {
  activePath: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

export const MarketingLayout: React.FC<MarketingLayoutProps> = ({ activePath, eyebrow, title, children }) => {
  return (
    <WikiLinkProvider>
      <main id="main" className="wf" style={{ background: "var(--bg-page-dark)", minHeight: "100vh" }}>

        <MegaMenu activeUrlPath="/dev/marketing" />

        <div className="ml-wrap">

          {/* ── Left sidebar ── */}
          <nav className="ml-sidebar" aria-label="Marketing navigation">
            <Link to="/dev/" className="ml-sidebar__back">← Dev Hub</Link>

            {NAV.map((group) => (
              <div key={group.group} className="ml-sidebar__group">
                <div className="ml-sidebar__group-label">{group.group}</div>
                {group.items.map((item) => {
                  const isActive = activePath === item.path && !item.hash;
                  return (
                    <Link
                      key={item.label}
                      to={`${item.path}${item.hash ?? ""}`}
                      className={`ml-sidebar__link${isActive ? " ml-sidebar__link--active" : ""}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            ))}
          </nav>

          {/* ── Content ── */}
          <div className="ml-content">
            <div className="ml-content__header">
              <span className="ml-content__eyebrow">{eyebrow}</span>
              <h1 className="ml-content__title">{title}</h1>
            </div>
            {children}
          </div>

        </div>

        <footer className="kb-footer">
          <img src={kolovratSvg} alt="" style={{ width: 20, opacity: 0.25 }} />
          <span>Dev-only — nie buduje się na produkcji</span>
        </footer>

      </main>
    </WikiLinkProvider>
  );
};
