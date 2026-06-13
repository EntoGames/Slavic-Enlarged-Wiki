import * as React from "react";
import * as ReactDOM from "react-dom";
import { MODS, BRANCH_CONFIG, modSlug, type Mod } from "./mods-data";

const modId = (m: Mod) => `mod-${modSlug(m)}`;

const modStoryUrl = (m: Mod) => {
  const name = m.shortName.toLowerCase().replace(/[\s-]+/g, "-");
  return `/?story=modyfikacje--mody--${name}`;
};

export function ModNavPanel({ onNav, mode }: { onNav: (id: string) => void; mode: "scroll" | "navigate" }) {
  const [search, setSearch] = React.useState("");
  const [container] = React.useState(() => {
    const el = document.createElement("div");
    el.id = "mod-nav-portal";
    return el;
  });

  React.useEffect(() => {
    const aside = document.querySelector(".ladle-aside");
    if (aside && aside.parentElement) {
      aside.parentElement.insertBefore(container, aside);
    }
    return () => { container.remove(); };
  }, [container]);

  const base = MODS.filter((m) => m.type === "base");
  const addons = MODS.filter((m) => m.type === "addon");
  const kingdoms = MODS.filter((m) => m.type === "kingdom");

  const q = search.toLowerCase();
  const filterMods = (list: Mod[]) =>
    q ? list.filter((m) => m.name.toLowerCase().includes(q) || m.shortName.toLowerCase().includes(q) || m.prefix.includes(q) || (m.cultures || []).some((c) => c.includes(q))) : list;

  return ReactDOM.createPortal(
    <nav
      className="ladle-aside"
      style={{
        width: 190,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        borderLeft: "none",
        padding: 0,
      }}
    >
      <div style={{ padding: "48px 8px 6px" }}>
        <input
          type="text"
          placeholder="Szukaj moda..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="mod-nav-scroll" style={{ flex: 1, overflowY: "auto", padding: "4px 0 12px" }}>
        <NavGroup label="Mod bazowy" color="#c5a048" mods={filterMods(base)} onNav={onNav} mode={mode} />
        <NavGroup label="Addony" color="#e63946" mods={filterMods(addons)} onNav={onNav} mode={mode} />
        <NavGroup label="Wschodnie" color={BRANCH_CONFIG.eastern.color} mods={filterMods(kingdoms.filter((m) => m.branch === "eastern"))} onNav={onNav} mode={mode} />
        <NavGroup label="Zachodnie" color={BRANCH_CONFIG.western.color} mods={filterMods(kingdoms.filter((m) => m.branch === "western"))} onNav={onNav} mode={mode} />
        <NavGroup label="Poludniowe" color={BRANCH_CONFIG.southern.color} mods={filterMods(kingdoms.filter((m) => m.branch === "southern"))} onNav={onNav} mode={mode} />
      </div>

      <div style={{ padding: "8px 12px", borderTop: "1px solid rgba(197,160,72,0.1)", fontSize: 10, color: "rgba(255,255,255,0.25)", textAlign: "center" }}>
        {filterMods(MODS).length} / {MODS.length} modow
      </div>
    </nav>,
    container,
  );
}

function NavGroup({ label, color, mods, onNav, mode }: { label: string; color: string; mods: Mod[]; onNav: (id: string) => void; mode: "scroll" | "navigate" }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color,
          padding: "2px 6px 2px 14px",
          marginBottom: 2,
        }}
      >
        {label}
      </div>
      {mods.map((m) => (
        <button
          key={m.prefix}
          onClick={() => {
            if (mode === "navigate") {
              window.location.href = modStoryUrl(m);
            } else {
              onNav(modId(m));
            }
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            width: "100%",
            padding: "3px 6px 3px 12px",
            fontSize: 11,
            color: "rgba(255,255,255,0.6)",
            background: "transparent",
            border: "none",
            borderLeft: "2px solid transparent",
            cursor: "pointer",
            textAlign: "left",
            lineHeight: 1.4,
            transition: "color 0.15s, border-color 0.15s, background 0.15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#e2c379";
            e.currentTarget.style.borderLeftColor = color;
            e.currentTarget.style.background = "rgba(197,160,72,0.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(255,255,255,0.6)";
            e.currentTarget.style.borderLeftColor = "transparent";
            e.currentTarget.style.background = "transparent";
          }}
        >
          <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 9, color: "rgba(255,255,255,0.25)", flexShrink: 0 }}>
            {m.prefix.replace(/_$/, "")}
          </span>
          <span>{m.shortName}</span>
        </button>
      ))}
    </div>
  );
}

export { modId };
