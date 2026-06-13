import * as React from "react";
import type { GlobalProvider } from "@ladle/react";
import "./ladle-overrides.css";
import "../src/styles/tokens.css";
import "../src/styles/fonts.css";
import "../src/templates/wiki-article.module.css";
import "../src/templates/mega-menu.module.css";
import "../src/templates/scenario-map.module.css";

function StoryIdBadge() {
  const [storyId, setStoryId] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const update = () => {
      const params = new URLSearchParams(window.location.search);
      setStoryId(params.get("story") || "");
    };
    update();
    window.addEventListener("popstate", update);
    const interval = setInterval(update, 800);
    return () => {
      window.removeEventListener("popstate", update);
      clearInterval(interval);
    };
  }, []);

  if (!storyId) return null;

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(storyId).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        });
      }}
      title="Kopiuj ID strony"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "2px 8px",
        marginBottom: 12,
        fontSize: 10,
        fontFamily: "var(--font-mono, monospace)",
        fontWeight: 600,
        color: copied ? "#83c84d" : "rgba(255,255,255,0.3)",
        background: copied ? "rgba(131,200,77,0.1)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${copied ? "rgba(131,200,77,0.25)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: 3,
        cursor: "pointer",
        transition: "all 0.15s",
        letterSpacing: "0.02em",
      }}
    >
      {copied ? "✓ Skopiowano" : `📋 ${storyId}`}
    </button>
  );
}

export const Provider: GlobalProvider = ({ children }) => (
  <div style={{ background: "var(--bog-deep)", minHeight: "100vh", padding: 24 }}>
    <StoryIdBadge />
    {children}
  </div>
);
