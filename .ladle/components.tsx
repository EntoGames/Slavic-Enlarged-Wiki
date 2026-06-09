import type { GlobalProvider } from "@ladle/react";
import "./ladle-overrides.css";
import "../src/styles/tokens.css";
import "../src/styles/fonts.css";
import "../src/templates/wiki-article.module.css";
import "../src/templates/mega-menu.module.css";
import "../src/templates/scenario-map.module.css";

export const Provider: GlobalProvider = ({ children }) => (
  <div style={{ background: "var(--bog-deep)", minHeight: "100vh", padding: 24 }}>
    {children}
  </div>
);
