import * as React from "react";
import type { Story } from "@ladle/react";
import {
  MODS,
  TYPE_CONFIG,
  STATUS_CONFIG,
  BRANCH_CONFIG,
  modSlug,
  type Mod,
  type ModType,
  type ModStatus,
  type Branch,
} from "./mods-data";
import { ModNavPanel, modId } from "./ModNavPanel";

/* ───── Style ───── */

const pillStyle = (color: string): React.CSSProperties => ({
  display: "inline-block",
  padding: "1px 8px",
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "0.04em",
  borderRadius: 3,
  background: `${color}22`,
  border: `1px solid ${color}55`,
  color,
});

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(197,160,72,0.15)",
  borderRadius: 8,
  padding: "16px 20px",
  display: "flex",
  gap: 16,
  alignItems: "flex-start",
};

const coverThumbStyle: React.CSSProperties = {
  width: 64,
  height: 64,
  borderRadius: 6,
  objectFit: "cover",
  border: "1px solid rgba(197,160,72,0.2)",
  flexShrink: 0,
};

const noThumbStyle: React.CSSProperties = {
  ...coverThumbStyle,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255,255,255,0.04)",
  fontSize: 24,
};

/* ───── Lista modow ───── */

const Lista: Story = () => {
  const base = MODS.filter((m) => m.type === "base");
  const addons = MODS.filter((m) => m.type === "addon");
  const kingdoms = MODS.filter((m) => m.type === "kingdom");

  const activeK = kingdoms.filter((m) => m.status === "active");
  const scaffoldK = kingdoms.filter((m) => m.status === "scaffold");

  const totalEvents = MODS.reduce((s, m) => s + (m.events || 0), 0);
  const totalDecisions = MODS.reduce((s, m) => s + (m.decisions || 0), 0);
  const totalModifiers = MODS.reduce((s, m) => s + (m.modifiers || 0), 0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div style={{ fontFamily: "var(--font-body, 'Lato', sans-serif)" }}>
      <ModNavPanel onNav={scrollTo} mode="navigate" />
      <div style={{ maxWidth: 920, margin: "0 auto", padding: 24 }}>
        <h1
          style={{
            fontFamily: "var(--font-display, 'Paradox King Script', serif)",
            fontSize: 28,
            color: "#e2c379",
            letterSpacing: "0.06em",
            margin: "0 0 8px",
          }}
        >
          Modyfikacje
        </h1>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", margin: "0 0 24px" }}>
          Wszystkie mody z rodziny Slavic Enlarged — 1 mod bazowy, 2 addony, 18 sub-modow krolewskich.
        </p>

        {/* Summary */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10, marginBottom: 28 }}>
          {[
            { label: "Mody", value: MODS.length, color: "#c5a048" },
            { label: "Aktywne", value: MODS.filter((m) => m.status === "active").length, color: "#83c84d" },
            { label: "Eventy", value: totalEvents, color: "#e6b43c" },
            { label: "Decyzje", value: totalDecisions, color: "#6ba0d6" },
            { label: "Modifiers", value: totalModifiers, color: "#e63946" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: `${s.color}11`,
                border: `1px solid ${s.color}33`,
                borderRadius: 8,
                padding: "10px 12px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 700, color: s.color, lineHeight: 1.1 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: s.color, opacity: 0.8, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Mod bazowy */}
        <SectionHeader title="Mod bazowy" id="sec-base" />
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
          {base.map((m) => (
            <ModCard key={m.prefix} mod={m} />
          ))}
        </div>

        {/* Addony */}
        <SectionHeader title="Addony" id="sec-addons" />
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
          {addons.map((m) => (
            <ModCard key={m.prefix} mod={m} />
          ))}
        </div>

        {/* Krolestwa aktywne */}
        <SectionHeader title={`Krolestwa — aktywny rozwoj (${activeK.length})`} id="sec-kingdoms-active" />
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
          {activeK.map((m) => (
            <ModCard key={m.prefix} mod={m} />
          ))}
        </div>

        {/* Krolestwa scaffold */}
        <SectionHeader title={`Krolestwa — scaffold (${scaffoldK.length})`} id="sec-kingdoms-scaffold" />
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
          {scaffoldK.map((m) => (
            <ModCard key={m.prefix} mod={m} />
          ))}
        </div>
      </div>

    </div>
  );
};
Lista.storyName = "Lista modow";

/* ───── Stat matrix ───── */

const Statystyki: Story = () => {
  const kingdoms = MODS.filter((m) => m.type === "kingdom");
  const branches: Branch[] = ["eastern", "western", "southern"];

  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: 24, fontFamily: "var(--font-body, 'Lato', sans-serif)" }}>
      <h1
        style={{
          fontFamily: "var(--font-display, 'Paradox King Script', serif)",
          fontSize: 28,
          color: "#e2c379",
          letterSpacing: "0.06em",
          margin: "0 0 24px",
        }}
      >
        Statystyki krolewstw
      </h1>

      {branches.map((branch) => {
        const branchMods = kingdoms.filter((m) => m.branch === branch);
        const cfg = BRANCH_CONFIG[branch];
        return (
          <div key={branch} style={{ marginBottom: 32 }}>
            <h2
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: cfg.color,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                margin: "0 0 12px",
                paddingBottom: 6,
                borderBottom: `1px solid ${cfg.color}33`,
              }}
            >
              {cfg.label} ({branchMods.length})
            </h2>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
              <thead>
                <tr
                  style={{
                    borderBottom: "1px solid rgba(197,160,72,0.2)",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  <th style={{ padding: "6px 8px", textAlign: "left", fontWeight: 600 }}>Krolestwo</th>
                  <th style={{ padding: "6px 8px", textAlign: "left", fontWeight: 600 }}>Prefiks</th>
                  <th style={{ padding: "6px 8px", textAlign: "left", fontWeight: 600 }}>CK3</th>
                  <th style={{ padding: "6px 8px", textAlign: "center", fontWeight: 600 }}>Status</th>
                  <th style={{ padding: "6px 8px", textAlign: "center", fontWeight: 600 }}>Eventy</th>
                  <th style={{ padding: "6px 8px", textAlign: "center", fontWeight: 600 }}>Decyzje</th>
                  <th style={{ padding: "6px 8px", textAlign: "center", fontWeight: 600 }}>Modifiers</th>
                  <th style={{ padding: "6px 8px", textAlign: "left", fontWeight: 600 }}>Kultury</th>
                </tr>
              </thead>
              <tbody>
                {branchMods.map((m, i) => {
                  const st = STATUS_CONFIG[m.status];
                  return (
                    <tr
                      key={m.prefix}
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                        background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                      }}
                    >
                      <td style={{ padding: "6px 8px", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{m.shortName}</td>
                      <td style={{ padding: "6px 8px", fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "#c5a048" }}>
                        {m.prefix}
                      </td>
                      <td style={{ padding: "6px 8px", fontFamily: "var(--font-mono, monospace)", fontSize: 10, color: "rgba(255,255,255,0.4)" }}>
                        {m.ck3Title}
                      </td>
                      <td style={{ padding: "6px 8px", textAlign: "center" }}>
                        <span style={pillStyle(st.color)}>{st.label}</span>
                      </td>
                      <td style={{ padding: "6px 8px", textAlign: "center", color: (m.events || 0) > 0 ? "#e2c379" : "rgba(255,255,255,0.2)" }}>
                        {m.events ?? "—"}
                      </td>
                      <td style={{ padding: "6px 8px", textAlign: "center", color: (m.decisions || 0) > 0 ? "#e2c379" : "rgba(255,255,255,0.2)" }}>
                        {m.decisions ?? "—"}
                      </td>
                      <td style={{ padding: "6px 8px", textAlign: "center", color: (m.modifiers || 0) > 0 ? "#e2c379" : "rgba(255,255,255,0.2)" }}>
                        {m.modifiers ?? "—"}
                      </td>
                      <td style={{ padding: "6px 8px", fontSize: 10, color: "rgba(255,255,255,0.45)" }}>
                        {m.cultures?.join(", ") ?? "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};
Statystyki.storyName = "Statystyki";

/* ───── Helpers ───── */

function SectionHeader({ title, id }: { title: string; id?: string }) {
  return (
    <h2
      id={id}
      style={{
        fontFamily: "var(--font-display, 'Paradox King Script', serif)",
        fontSize: 18,
        color: "#e2c379",
        letterSpacing: "0.04em",
        margin: "0 0 12px",
        paddingBottom: 6,
        borderBottom: "1px solid rgba(197,160,72,0.15)",
      }}
    >
      {title}
    </h2>
  );
}

function ModCard({ mod }: { mod: Mod }) {
  const typeCfg = TYPE_CONFIG[mod.type];
  const statusCfg = STATUS_CONFIG[mod.status];
  const branchCfg = mod.branch ? BRANCH_CONFIG[mod.branch] : null;

  return (
    <div id={modId(mod)} style={cardStyle}>
      {mod.cover ? (
        <img src={mod.cover} alt={mod.name} style={coverThumbStyle} />
      ) : (
        <div style={noThumbStyle}>
          <span>{typeCfg.icon}</span>
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
          <span
            style={{
              fontFamily: "var(--font-display, 'Paradox King Script', serif)",
              fontSize: 16,
              color: "#e2c379",
              letterSpacing: "0.02em",
            }}
          >
            {mod.name}
          </span>
          <span style={pillStyle(typeCfg.color)}>{typeCfg.label}</span>
          <span style={pillStyle(statusCfg.color)}>{statusCfg.label}</span>
          {branchCfg && <span style={pillStyle(branchCfg.color)}>{branchCfg.label}</span>}
        </div>

        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", margin: "0 0 6px", lineHeight: 1.4 }}>
          {mod.description}
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
          <span>
            Prefiks: <code style={{ color: "#c5a048" }}>{mod.prefix}</code>
          </span>
          <span>
            Wersja: <code style={{ color: "rgba(255,255,255,0.55)" }}>{mod.version}</code>
          </span>
          {mod.dlc && (
            <span>
              DLC: <code style={{ color: "#e63946" }}>{mod.dlc}</code>
            </span>
          )}
          {mod.ck3Title && (
            <span>
              CK3: <code style={{ color: "rgba(255,255,255,0.45)" }}>{mod.ck3Title}</code>
            </span>
          )}
          {(mod.events || mod.decisions || mod.modifiers) && (
            <span style={{ color: "rgba(255,255,255,0.5)" }}>
              {mod.events || 0}E / {mod.decisions || 0}D / {mod.modifiers || 0}M
            </span>
          )}
        </div>

        {mod.cultures && (
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 6 }}>
            {mod.cultures.map((c) => (
              <span
                key={c}
                style={{
                  padding: "0 6px",
                  fontSize: 9,
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export { Lista, Statystyki };
export default {
  title: "Modyfikacje",
};
