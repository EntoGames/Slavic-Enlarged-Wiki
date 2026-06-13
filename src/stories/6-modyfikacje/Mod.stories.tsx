import * as React from "react";
import type { Story } from "@ladle/react";
import {
  MODS,
  TYPE_CONFIG,
  STATUS_CONFIG,
  BRANCH_CONFIG,
  modSlug,
  type Mod,
  type Branch,
} from "./mods-data";
import { ModNavPanel } from "./ModNavPanel";
import { SE_STEAM_STATS, METRICS, type MetricConfig, type SteamSnapshot } from "./steam-stats-data";
import { MOD_TODOS, PRIORITY_CONFIG, TAG_CONFIG, type ModTodo } from "./mod-todos-data";
import {
  NODE_TYPE_CONFIG,
  GRID_ROWS,
  GRID_COLS,
  type GraphNode,
  type GraphLink,
  type GraphPath,
  type NodeType,
} from "./graph-types";
import { KINGDOM_GRAPHS } from "./kingdom-graph-registry";
import {
  KINGDOM_ROADMAPS,
  PHASE_CONFIG,
  STATUS_ICON,
  type KingdomRoadmap,
  type RoadmapVersion,
  type RoadmapDecision,
  type VersionStatus,
  type PhaseType,
} from "./roadmap-data";

/* ───── Shared styles ───── */

const pill = (color: string): React.CSSProperties => ({
  display: "inline-block",
  padding: "2px 10px",
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.04em",
  borderRadius: 4,
  background: `${color}22`,
  border: `1px solid ${color}55`,
  color,
});

const metaRow: React.CSSProperties = {
  display: "flex",
  gap: 24,
  flexWrap: "wrap",
  fontSize: 12,
  color: "rgba(255,255,255,0.5)",
  lineHeight: 1.8,
};

const metaLabel: React.CSSProperties = {
  color: "rgba(255,255,255,0.3)",
  fontSize: 10,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontWeight: 700,
  marginBottom: 2,
};

const metaValue: React.CSSProperties = {
  color: "rgba(255,255,255,0.8)",
  fontFamily: "var(--font-mono, monospace)",
  fontSize: 13,
};

const sectionTitle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  color: "rgba(255,255,255,0.4)",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  margin: "28px 0 12px",
  paddingBottom: 6,
  borderBottom: "1px solid rgba(197,160,72,0.12)",
};

const statBox = (color: string, value: number): React.CSSProperties => ({
  background: value > 0 ? `${color}15` : "rgba(255,255,255,0.02)",
  border: `1px solid ${value > 0 ? color + "44" : "rgba(255,255,255,0.06)"}`,
  borderRadius: 8,
  padding: "12px 16px",
  textAlign: "center",
  flex: 1,
  minWidth: 80,
});

const cultureChip: React.CSSProperties = {
  padding: "3px 10px",
  fontSize: 11,
  borderRadius: 4,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "rgba(255,255,255,0.6)",
};

/* ───── Steam Trend Chart ───── */

const CHART_W = 720;
const CHART_H = 280;
const CPAD = { top: 16, right: 20, bottom: 36, left: 56 };
const INNER_W = CHART_W - CPAD.left - CPAD.right;
const INNER_H = CHART_H - CPAD.top - CPAD.bottom;

function chartY(val: number, max: number) {
  return INNER_H - (val / max) * INNER_H;
}

function TrendChart({ data, metrics }: { data: SteamSnapshot[]; metrics: MetricConfig[] }) {
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);
  const xStep = INNER_W / Math.max(data.length - 1, 1);

  return (
    <svg viewBox={`0 0 ${CHART_W} ${CHART_H}`} style={{ width: "100%", maxWidth: CHART_W, display: "block" }}>
      {metrics.map((m) => {
        const vals = data.map((d) => d[m.key] as number);
        const max = Math.max(...vals) * 1.15 || 1;
        const points = vals.map((v, i) => `${CPAD.left + i * xStep},${CPAD.top + chartY(v, max)}`).join(" ");
        return (
          <g key={m.key}>
            <polyline points={points} fill="none" stroke={m.color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
            {vals.map((v, i) => (
              <circle key={i} cx={CPAD.left + i * xStep} cy={CPAD.top + chartY(v, max)} r={hoveredIdx === i ? 5 : 3.5} fill={m.color} stroke="rgba(0,0,0,0.5)" strokeWidth={1} />
            ))}
          </g>
        );
      })}
      {data.map((d, i) => (
        <text key={i} x={CPAD.left + i * xStep} y={CHART_H - 6} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize={10} fontFamily="var(--font-body, 'Lato', sans-serif)">
          {d.label || d.date}
        </text>
      ))}
      {data.map((_, i) => (
        <rect key={i} x={CPAD.left + i * xStep - xStep / 2} y={CPAD.top} width={xStep} height={INNER_H} fill="transparent" onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)} />
      ))}
      {hoveredIdx !== null && (
        <line x1={CPAD.left + hoveredIdx * xStep} y1={CPAD.top} x2={CPAD.left + hoveredIdx * xStep} y2={CPAD.top + INNER_H} stroke="rgba(255,255,255,0.12)" strokeWidth={1} strokeDasharray="4 3" pointerEvents="none" />
      )}
    </svg>
  );
}

function SteamTrendSection({ data }: { data: SteamSnapshot[] }) {
  const [activeTab, setActiveTab] = React.useState<"all" | string>("all");
  const latest = data[data.length - 1];
  const prev = data[data.length - 2];

  const activeMetric = METRICS.find((m) => m.key === activeTab);
  const chartMetrics = activeMetric ? [activeMetric] : METRICS;

  return (
    <>
      <div style={sectionTitle}>Steam Workshop — Trend</div>
      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", margin: "-8px 0 12px" }}>
        od {data[0].label} do {latest.label} · {data.length} punktow
      </p>

      {/* Tabs: All + per metric (double as summary cards) */}
      <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
        <button
          onClick={() => setActiveTab("all")}
          style={{
            padding: "6px 14px",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: activeTab === "all" ? "#e2c379" : "rgba(255,255,255,0.4)",
            background: activeTab === "all" ? "rgba(197,160,72,0.15)" : "rgba(255,255,255,0.03)",
            border: `1px solid ${activeTab === "all" ? "rgba(197,160,72,0.4)" : "rgba(255,255,255,0.08)"}`,
            borderRadius: 6,
            cursor: "pointer",
            transition: "all 0.15s",
          }}
        >
          Wszystkie
        </button>
        {METRICS.map((m) => {
          const val = latest[m.key] as number;
          const pv = prev[m.key] as number;
          const delta = val - pv;
          const pct = pv > 0 ? Math.round((delta / pv) * 100) : 0;
          const isActive = activeTab === m.key;
          return (
            <button
              key={m.key}
              onClick={() => setActiveTab(m.key)}
              style={{
                padding: "6px 10px",
                fontSize: 10,
                fontWeight: 600,
                color: isActive ? m.color : "rgba(255,255,255,0.5)",
                background: isActive ? `${m.color}18` : "rgba(255,255,255,0.03)",
                border: `1px solid ${isActive ? m.color + "55" : "rgba(255,255,255,0.08)"}`,
                borderRadius: 6,
                cursor: "pointer",
                transition: "all 0.15s",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span>{m.label}</span>
              <span style={{ fontWeight: 700, fontSize: 12 }}>{val.toLocaleString("pl-PL")}</span>
              <span style={{ fontSize: 9, color: delta >= 0 ? "#83c84d" : "#e63946" }}>
                +{pct}%
              </span>
            </button>
          );
        })}
      </div>

      {/* Active metric header (when single metric selected) */}
      {activeMetric && (
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: activeMetric.color }}>{activeMetric.label}</span>
          <span style={{ fontSize: 22, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>
            {(latest[activeMetric.key] as number).toLocaleString("pl-PL")}
          </span>
          {(() => {
            const delta = (latest[activeMetric.key] as number) - (prev[activeMetric.key] as number);
            const pct = (prev[activeMetric.key] as number) > 0 ? Math.round((delta / (prev[activeMetric.key] as number)) * 100) : 0;
            return (
              <>
                <span style={{ fontSize: 12, fontWeight: 600, color: delta >= 0 ? "#83c84d" : "#e63946" }}>
                  {delta >= 0 ? "+" : ""}{delta.toLocaleString("pl-PL")} ({pct}%)
                </span>
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.25)" }}>vs {prev.label}</span>
              </>
            );
          })()}
        </div>
      )}

      {/* Chart */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(197,160,72,0.12)", borderRadius: 8, padding: "12px 12px 4px", marginBottom: 16 }}>
        <TrendChart data={data} metrics={chartMetrics} />
        {activeTab === "all" && (
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 6, flexWrap: "wrap" }}>
            {METRICS.map((m) => (
              <span
                key={m.key}
                onClick={() => setActiveTab(m.key)}
                style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, color: "rgba(255,255,255,0.45)", cursor: "pointer" }}
              >
                <span style={{ width: 8, height: 3, borderRadius: 2, background: m.color, display: "inline-block" }} />
                {m.label}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Data table */}
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11, color: "rgba(255,255,255,0.7)" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid rgba(197,160,72,0.2)", color: "rgba(255,255,255,0.35)", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            <th style={{ padding: "5px 6px", textAlign: "left", fontWeight: 600 }}>Data</th>
            {(activeMetric ? [activeMetric] : METRICS).map((m) => (
              <th key={m.key} style={{ padding: "5px 6px", textAlign: "right", fontWeight: 600, color: m.color }}>{m.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={row.date} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)" }}>
              <td style={{ padding: "5px 6px", fontWeight: 600 }}>{row.label || row.date}</td>
              {(activeMetric ? [activeMetric] : METRICS).map((m) => {
                const v = row[m.key] as number;
                const p = i > 0 ? (data[i - 1][m.key] as number) : 0;
                const d = i > 0 ? v - p : 0;
                return (
                  <td key={m.key} style={{ padding: "5px 6px", textAlign: "right" }}>
                    {v.toLocaleString("pl-PL")}
                    {i > 0 && d > 0 && <span style={{ fontSize: 8, color: "#83c84d", marginLeft: 3 }}>+{d}</span>}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

/* ───── Todo / Planned section ───── */

function CopyId({ id }: { id: string }) {
  const [copied, setCopied] = React.useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(id).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        });
      }}
      title={`Kopiuj ${id}`}
      style={{
        padding: "1px 6px",
        fontSize: 9,
        fontFamily: "var(--font-mono, monospace)",
        fontWeight: 700,
        color: copied ? "#83c84d" : "rgba(255,255,255,0.35)",
        background: copied ? "rgba(131,200,77,0.12)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${copied ? "rgba(131,200,77,0.3)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: 3,
        cursor: "pointer",
        transition: "all 0.15s",
        whiteSpace: "nowrap",
        minWidth: 44,
        textAlign: "center",
      }}
    >
      {copied ? "OK" : id}
    </button>
  );
}

function TodoSection({ todos }: { todos: ModTodo[] }) {
  const [filterPriority, setFilterPriority] = React.useState<string | null>(null);
  const filtered = filterPriority ? todos.filter((t) => t.priority === filterPriority) : todos;
  const counts = { P0: 0, P1: 0, P2: 0 };
  todos.forEach((t) => counts[t.priority]++);

  return (
    <>
      <div style={sectionTitle}>Zaplanowane ({todos.length})</div>
      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        {(["P0", "P1", "P2"] as const).map((p) => {
          if (counts[p] === 0) return null;
          const cfg = PRIORITY_CONFIG[p];
          const active = filterPriority === p;
          return (
            <button
              key={p}
              onClick={() => setFilterPriority(active ? null : p)}
              style={{
                padding: "3px 10px",
                fontSize: 10,
                fontWeight: 700,
                color: active ? cfg.color : "rgba(255,255,255,0.4)",
                background: active ? `${cfg.color}18` : "rgba(255,255,255,0.03)",
                border: `1px solid ${active ? cfg.color + "55" : "rgba(255,255,255,0.08)"}`,
                borderRadius: 5,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {cfg.label} ({counts[p]})
            </button>
          );
        })}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {filtered.map((todo, i) => {
          const pCfg = PRIORITY_CONFIG[todo.priority];
          const tCfg = TAG_CONFIG[todo.tag];
          return (
            <div
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 12px",
                background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                borderRadius: 5,
                borderLeft: `3px solid ${pCfg.color}55`,
              }}
            >
              <CopyId id={todo.id} />
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  color: pCfg.color,
                  minWidth: 22,
                  textAlign: "center",
                }}
              >
                {pCfg.label}
              </span>
              <span
                style={{
                  padding: "1px 6px",
                  fontSize: 9,
                  borderRadius: 3,
                  background: `${tCfg.color}15`,
                  border: `1px solid ${tCfg.color}33`,
                  color: tCfg.color,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                {tCfg.label}
              </span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", flex: 1 }}>
                {todo.title}
              </span>
              {todo.iter && (
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", whiteSpace: "nowrap" }}>
                  iter {todo.iter}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

/* ───── Knowledge Graph (Bohemia) ───── */

const GRAPH_W = 820;
const GRAPH_H = 700;
const G_PAD = { x: 60, y: 40 };

function nodePos(n: GraphNode): { x: number; y: number } {
  const cellW = (GRAPH_W - G_PAD.x * 2) / (GRID_COLS - 1);
  const cellH = (GRAPH_H - G_PAD.y * 2) / (GRID_ROWS - 1);
  return { x: G_PAD.x + n.col * cellW, y: G_PAD.y + n.row * cellH };
}

function KnowledgeGraph({
  nodes,
  links,
  paths,
}: {
  nodes: GraphNode[];
  links: GraphLink[];
  paths: GraphPath[];
}) {
  const [hovered, setHovered] = React.useState<string | null>(null);
  const [activePath, setActivePath] = React.useState<string | null>(null);

  const posMap = new Map(nodes.map((n) => [n.id, { ...n, ...nodePos(n) }]));
  const hoveredNode = hovered ? posMap.get(hovered) : null;

  const currentPath = paths.find((p) => p.id === activePath);
  const pathNodeIds = currentPath ? new Set(currentPath.nodes) : null;

  const pathLinkSet = new Set<string>();
  if (pathNodeIds) {
    for (const l of links) {
      if (pathNodeIds.has(l.source) && pathNodeIds.has(l.target)) {
        pathLinkSet.add(`${l.source}→${l.target}`);
      }
    }
  }

  const connectedIds = new Set<string>();
  const hoveredLinks: GraphLink[] = [];
  if (hovered) {
    connectedIds.add(hovered);
    for (const l of links) {
      if (l.source === hovered || l.target === hovered) {
        connectedIds.add(l.source);
        connectedIds.add(l.target);
        hoveredLinks.push(l);
      }
    }
  }

  const isActive = (id: string) => {
    if (hovered) return connectedIds.has(id);
    if (pathNodeIds) return pathNodeIds.has(id);
    return true;
  };

  const isLinkActive = (l: GraphLink) => {
    if (hovered) return l.source === hovered || l.target === hovered;
    if (pathNodeIds) return pathLinkSet.has(`${l.source}→${l.target}`);
    return true;
  };

  const hasDimming = !!(hovered || pathNodeIds);

  const ROW_LABELS = [
    "Bookmarki", "Mechaniki", "Eventy ✦", "Wiara / Dynastia",
    "Decyzje ✦", "Tytuły", "Modifiers ✦", "Kultury", "Prowincje",
  ];

  return (
    <>
      <div style={sectionTitle}>Graf wiedzy — vanilla CK3</div>

      {/* Path selector */}
      <div style={{ display: "flex", gap: 5, marginBottom: 12, flexWrap: "wrap" }}>
        <button
          onClick={() => setActivePath(null)}
          style={{
            padding: "4px 12px", fontSize: 10, fontWeight: 700,
            color: !activePath ? "#e2c379" : "rgba(255,255,255,0.4)",
            background: !activePath ? "rgba(197,160,72,0.15)" : "rgba(255,255,255,0.03)",
            border: `1px solid ${!activePath ? "rgba(197,160,72,0.4)" : "rgba(255,255,255,0.08)"}`,
            borderRadius: 5, cursor: "pointer", transition: "all 0.15s",
          }}
        >
          Cały graf
        </button>
        {paths.map((p) => {
          const active = activePath === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setActivePath(active ? null : p.id)}
              title={p.description}
              style={{
                padding: "4px 12px", fontSize: 10, fontWeight: 600,
                color: active ? p.color : "rgba(255,255,255,0.45)",
                background: active ? `${p.color}18` : "rgba(255,255,255,0.03)",
                border: `1px solid ${active ? p.color + "55" : "rgba(255,255,255,0.08)"}`,
                borderRadius: 5, cursor: "pointer", transition: "all 0.15s",
              }}
            >
              {p.label}
            </button>
          );
        })}
      </div>

      {/* Path description */}
      {currentPath && (
        <p style={{ fontSize: 11, color: currentPath.color, margin: "-4px 0 10px", fontStyle: "italic", opacity: 0.7 }}>
          {currentPath.description}
        </p>
      )}

      {/* SVG graph */}
      <div style={{
        background: "rgba(0,0,0,0.25)",
        border: "1px solid rgba(197,160,72,0.12)",
        borderRadius: 8,
        padding: 4,
        marginBottom: 12,
        overflow: "hidden",
      }}>
        <svg
          viewBox={`0 0 ${GRAPH_W} ${GRAPH_H}`}
          style={{ width: "100%", display: "block" }}
        >
          <defs>
            <marker id="arrow" viewBox="0 0 10 6" refX="10" refY="3" markerWidth="8" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,3 L0,6 Z" fill="rgba(255,255,255,0.2)" />
            </marker>
            <marker id="arrow-path" viewBox="0 0 10 6" refX="10" refY="3" markerWidth="8" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,3 L0,6 Z" fill={currentPath?.color || "#e2c379"} />
            </marker>
            <marker id="arrow-hover" viewBox="0 0 10 6" refX="10" refY="3" markerWidth="8" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,3 L0,6 Z" fill="rgba(226,195,121,0.6)" />
            </marker>
          </defs>

          {/* Row labels */}
          {ROW_LABELS.map((label, i) => {
            const cellH = (GRAPH_H - G_PAD.y * 2) / (GRID_ROWS - 1);
            const isPlanned = label.includes("✦");
            return (
              <text
                key={i}
                x={8} y={G_PAD.y + i * cellH + 3}
                fill={isPlanned ? "rgba(226,195,121,0.15)" : "rgba(255,255,255,0.12)"}
                fontSize={7}
                fontFamily="var(--font-body, 'Lato', sans-serif)"
                fontWeight={600}
                fontStyle={isPlanned ? "italic" : undefined}
                textAnchor="start"
                dominantBaseline="central"
              >
                {label}
              </text>
            );
          })}

          {/* Links */}
          {links.map((l, i) => {
            const s = posMap.get(l.source);
            const t = posMap.get(l.target);
            if (!s || !t) return null;
            const active = isLinkActive(l);
            const isHoverLink = hovered && (l.source === hovered || l.target === hovered);
            const isPathLink = !hovered && pathNodeIds && pathLinkSet.has(`${l.source}→${l.target}`);

            const dx = t.x - s.x;
            const dy = t.y - s.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const nr = 15;
            const x1 = s.x + (dx / dist) * nr;
            const y1 = s.y + (dy / dist) * nr;
            const x2 = t.x - (dx / dist) * nr;
            const y2 = t.y - (dy / dist) * nr;

            let stroke = "rgba(255,255,255,0.06)";
            let width = 0.7;
            let marker: string | undefined = undefined;

            if (isHoverLink) {
              stroke = "rgba(226,195,121,0.5)";
              width = 2;
              marker = "url(#arrow-hover)";
            } else if (isPathLink) {
              stroke = `${currentPath!.color}88`;
              width = 2.2;
              marker = "url(#arrow-path)";
            } else if (active && !hasDimming) {
              marker = "url(#arrow)";
              width = 0.8;
              stroke = "rgba(255,255,255,0.1)";
            }

            return (
              <g key={i} opacity={hasDimming && !active ? 0.08 : 1}>
                <line
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke={stroke}
                  strokeWidth={width}
                  markerEnd={marker}
                />
                {(isHoverLink || isPathLink) && l.relation !== "→" && (
                  <text
                    x={(s.x + t.x) / 2}
                    y={(s.y + t.y) / 2 - 6}
                    textAnchor="middle"
                    fill={isHoverLink ? "rgba(226,195,121,0.7)" : `${currentPath!.color}99`}
                    fontSize={7}
                    fontFamily="var(--font-body, 'Lato', sans-serif)"
                    fontWeight={600}
                    pointerEvents="none"
                  >
                    {l.relation}
                  </text>
                )}
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((n) => {
            const cfg = NODE_TYPE_CONFIG[n.type];
            const pos = posMap.get(n.id)!;
            const isHov = n.id === hovered;
            const active = isActive(n.id);
            const onPath = pathNodeIds?.has(n.id);
            const r = isHov ? 17 : 13;

            let strokeColor = `${cfg.color}66`;
            let strokeW = 1.2;
            if (isHov) { strokeColor = cfg.color; strokeW = 2.5; }
            else if (onPath && !hovered) { strokeColor = currentPath!.color; strokeW = 2; }

            return (
              <g
                key={n.id}
                onMouseEnter={() => setHovered(n.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "pointer" }}
                opacity={hasDimming && !active ? 0.12 : 1}
              >
                <circle
                  cx={pos.x} cy={pos.y} r={r}
                  fill={`${cfg.color}${n.planned ? "15" : "25"}`}
                  stroke={strokeColor}
                  strokeWidth={strokeW}
                  strokeDasharray={n.planned && !isHov && !onPath ? "3 2" : undefined}
                />
                <text
                  x={pos.x} y={pos.y + 1}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={cfg.color}
                  fontSize={10}
                  fontWeight={700}
                  fontFamily="var(--font-mono, monospace)"
                  pointerEvents="none"
                >
                  {cfg.icon}
                </text>
                <text
                  x={pos.x} y={pos.y + r + 11}
                  textAnchor="middle"
                  fill={isHov || (onPath && !hovered) ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.45)"}
                  fontSize={isHov ? 9 : 8}
                  fontWeight={isHov || onPath ? 700 : 400}
                  fontFamily="var(--font-body, 'Lato', sans-serif)"
                  pointerEvents="none"
                >
                  {n.label.length > 22 ? n.label.slice(0, 20) + "…" : n.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Hover detail card */}
      {hoveredNode && (
        <div style={{
          padding: "10px 14px",
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${NODE_TYPE_CONFIG[hoveredNode.type].color}44`,
          borderRadius: 6,
          marginBottom: 12,
          display: "flex",
          gap: 12,
          alignItems: "flex-start",
        }}>
          <span style={{
            ...pill(NODE_TYPE_CONFIG[hoveredNode.type].color),
            fontSize: 9,
            flexShrink: 0,
          }}>
            {NODE_TYPE_CONFIG[hoveredNode.type].label}
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.85)", marginBottom: 3 }}>
              {hoveredNode.label}
            </div>
            {hoveredNode.note && (
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{hoveredNode.note}</div>
            )}
            {hoveredNode.era && (
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 3 }}>
                Era: {hoveredNode.era}
              </div>
            )}
            {hoveredLinks.length > 0 && (
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>
                {hoveredLinks.filter((l) => l.relation !== "→").map((l, i, arr) => {
                  const other = l.source === hovered ? l.target : l.source;
                  const otherNode = nodes.find((nd) => nd.id === other);
                  return (
                    <span key={i}>
                      {l.relation} → {otherNode?.label || other}
                      {i < arr.length - 1 ? " · " : ""}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Legend */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        {([...new Set(nodes.filter((n) => !n.planned).map((n) => n.type))] as NodeType[]).map((t) => {
          const cfg = NODE_TYPE_CONFIG[t];
          return (
            <span key={t} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10, color: "rgba(255,255,255,0.4)" }}>
              <span style={{
                width: 10, height: 10, borderRadius: "50%",
                background: `${cfg.color}25`, border: `1px solid ${cfg.color}66`,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 6, color: cfg.color, fontWeight: 700,
              }}>
                {cfg.icon}
              </span>
              {cfg.label}
            </span>
          );
        })}
        <span style={{ width: 1, height: 12, background: "rgba(255,255,255,0.1)", margin: "0 2px" }} />
        <span style={{ fontSize: 9, color: "rgba(226,195,121,0.4)", fontStyle: "italic" }}>
          ✦ przerywana obwódka = planowane mechaniki moda
        </span>
      </div>
    </>
  );
}

/* ───── Roadmap section ───── */

function RoadmapSection({ roadmap }: { roadmap: KingdomRoadmap }) {
  const [filterPhase, setFilterPhase] = React.useState<PhaseType | null>(null);
  const [showDecisions, setShowDecisions] = React.useState(false);

  const phases = [...new Set(roadmap.versions.map((v) => v.phase))];
  const filtered = filterPhase ? roadmap.versions.filter((v) => v.phase === filterPhase) : roadmap.versions;

  const statusColor = (s: VersionStatus) => {
    switch (s) {
      case "done": return "#83c84d";
      case "current": return "#e6b43c";
      case "planned": return "#6ba0d6";
      case "post": return "#b39ddb";
    }
  };

  const rs = roadmap.releaseStats;

  return (
    <>
      <div style={sectionTitle}>Roadmapa</div>

      {/* Summary bar */}
      <div style={{ display: "flex", gap: 12, marginBottom: 14, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 6 }}>
          {[
            { label: "Pre-release", value: roadmap.preReleaseCount, color: "#6ba0d6" },
            { label: "Post-release", value: roadmap.postReleaseCount, color: "#b39ddb" },
          ].map((s) => (
            <span key={s.label} style={{
              padding: "4px 10px", fontSize: 10, fontWeight: 700,
              color: s.color, background: `${s.color}15`, border: `1px solid ${s.color}33`,
              borderRadius: 5,
            }}>
              {s.value} {s.label}
            </span>
          ))}
        </div>
        <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.1)" }} />
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>
          Release: {rs.events} evt · {rs.decisions} dec · {rs.buildings} bld · {rs.modifiers} mod
        </span>
      </div>

      {/* Phase filter tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 14, flexWrap: "wrap" }}>
        <button
          onClick={() => setFilterPhase(null)}
          style={{
            padding: "3px 10px", fontSize: 10, fontWeight: 700,
            color: !filterPhase ? "#e2c379" : "rgba(255,255,255,0.4)",
            background: !filterPhase ? "rgba(197,160,72,0.15)" : "rgba(255,255,255,0.03)",
            border: `1px solid ${!filterPhase ? "rgba(197,160,72,0.4)" : "rgba(255,255,255,0.08)"}`,
            borderRadius: 5, cursor: "pointer", transition: "all 0.15s",
          }}
        >
          Wszystkie ({roadmap.versions.length})
        </button>
        {phases.map((p) => {
          const cfg = PHASE_CONFIG[p];
          const count = roadmap.versions.filter((v) => v.phase === p).length;
          const active = filterPhase === p;
          return (
            <button
              key={p}
              onClick={() => setFilterPhase(active ? null : p)}
              style={{
                padding: "3px 10px", fontSize: 10, fontWeight: 600,
                color: active ? cfg.color : "rgba(255,255,255,0.4)",
                background: active ? `${cfg.color}18` : "rgba(255,255,255,0.03)",
                border: `1px solid ${active ? cfg.color + "55" : "rgba(255,255,255,0.08)"}`,
                borderRadius: 5, cursor: "pointer", transition: "all 0.15s",
              }}
            >
              {cfg.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Version list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {filtered.map((v, i) => {
          const pCfg = PHASE_CONFIG[v.phase];
          const sColor = statusColor(v.status);
          return (
            <div
              key={v.version}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
                padding: "8px 12px",
                background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                borderRadius: 5,
                borderLeft: `3px solid ${pCfg.color}55`,
              }}
            >
              {/* Status icon */}
              <span style={{
                fontSize: 11, fontWeight: 700, color: sColor,
                minWidth: 14, textAlign: "center", marginTop: 1,
              }}>
                {STATUS_ICON[v.status]}
              </span>
              {/* Version number */}
              <span style={{
                fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)",
                fontFamily: "var(--font-mono, monospace)",
                minWidth: 52,
              }}>
                {v.version}
              </span>
              {/* Phase pill */}
              <span style={{
                padding: "1px 6px", fontSize: 9, borderRadius: 3,
                background: `${pCfg.color}15`, border: `1px solid ${pCfg.color}33`,
                color: pCfg.color, fontWeight: 600, whiteSpace: "nowrap",
              }}>
                {pCfg.label}
              </span>
              {/* Title + items */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>
                  {v.title}
                </div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>
                  {v.items.join(" · ")}
                </div>
                {v.decision && (
                  <div style={{
                    fontSize: 9, color: "#e6b43c", marginTop: 3,
                    padding: "2px 6px", background: "rgba(230,180,60,0.08)",
                    border: "1px solid rgba(230,180,60,0.15)", borderRadius: 3,
                    display: "inline-block",
                  }}>
                    DECYZJA: {v.decision}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Decisions toggle */}
      {roadmap.decisions.length > 0 && (
        <>
          <button
            onClick={() => setShowDecisions(!showDecisions)}
            style={{
              marginTop: 16, padding: "6px 14px", fontSize: 11, fontWeight: 700,
              color: showDecisions ? "#e6b43c" : "rgba(255,255,255,0.5)",
              background: showDecisions ? "rgba(230,180,60,0.12)" : "rgba(255,255,255,0.03)",
              border: `1px solid ${showDecisions ? "rgba(230,180,60,0.3)" : "rgba(255,255,255,0.08)"}`,
              borderRadius: 6, cursor: "pointer", transition: "all 0.15s",
            }}
          >
            {showDecisions ? "Ukryj" : "Pokaz"} decyzje projektowe ({roadmap.decisions.length})
          </button>

          {showDecisions && (
            <table style={{
              width: "100%", borderCollapse: "collapse", fontSize: 11,
              color: "rgba(255,255,255,0.7)", marginTop: 10,
            }}>
              <thead>
                <tr style={{
                  borderBottom: "1px solid rgba(197,160,72,0.2)",
                  color: "rgba(255,255,255,0.35)", fontSize: 9,
                  textTransform: "uppercase", letterSpacing: "0.08em",
                }}>
                  <th style={{ padding: "5px 8px", textAlign: "left", fontWeight: 600 }}>Temat</th>
                  <th style={{ padding: "5px 8px", textAlign: "left", fontWeight: 600 }}>Decyzja</th>
                  <th style={{ padding: "5px 8px", textAlign: "left", fontWeight: 600 }}>Uzasadnienie</th>
                </tr>
              </thead>
              <tbody>
                {roadmap.decisions.map((d, i) => (
                  <tr key={d.topic} style={{
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                  }}>
                    <td style={{ padding: "5px 8px", fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>{d.topic}</td>
                    <td style={{ padding: "5px 8px", color: "#e6b43c", fontWeight: 600 }}>{d.decision}</td>
                    <td style={{ padding: "5px 8px", color: "rgba(255,255,255,0.4)" }}>{d.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </>
  );
}

/* ───── Mod page template ───── */

function ModPage({ mod }: { mod: Mod }) {
  const typeCfg = TYPE_CONFIG[mod.type];
  const statusCfg = STATUS_CONFIG[mod.status];
  const branchCfg = mod.branch ? BRANCH_CONFIG[mod.branch] : null;

  const deps: string[] = ["Slavic Enlarged (mod bazowy)"];
  if (mod.type === "kingdom") deps.push("Slavic Struggle of Perun (opcjonalny)");
  if (mod.dlc) deps.push(`DLC: ${mod.dlc}`);

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: 32,
        fontFamily: "var(--font-body, 'Lato', sans-serif)",
      }}
    >
      {/* Hero */}
      <div style={{ display: "flex", gap: 20, alignItems: "flex-start", marginBottom: 24 }}>
        {mod.cover ? (
          <img
            src={mod.cover}
            alt={mod.name}
            style={{
              width: 96,
              height: 96,
              borderRadius: 8,
              objectFit: "cover",
              border: "1px solid rgba(197,160,72,0.2)",
              flexShrink: 0,
            }}
          />
        ) : (
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(197,160,72,0.15)",
              fontSize: 36,
              flexShrink: 0,
            }}
          >
            {typeCfg.icon}
          </div>
        )}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontFamily: "var(--font-display, 'Paradox King Script', serif)",
              fontSize: 26,
              color: "#e2c379",
              letterSpacing: "0.04em",
              margin: "0 0 8px",
              lineHeight: 1.2,
            }}
          >
            {mod.name}
          </h1>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
            <span style={pill(typeCfg.color)}>{typeCfg.label}</span>
            <span style={pill(statusCfg.color)}>{statusCfg.label}</span>
            {branchCfg && <span style={pill(branchCfg.color)}>{branchCfg.label}</span>}
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.5 }}>
            {mod.description}
          </p>
        </div>
      </div>

      {/* Metadata grid */}
      <div style={sectionTitle}>Metadane</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: 16,
        }}
      >
        <MetaCell label="Prefiks" value={mod.prefix} color="#c5a048" />
        <MetaCell label="Wersja" value={mod.version} />
        <MetaCell label="Folder" value={mod.folder} small />
        {mod.ck3Title && <MetaCell label="CK3 Title" value={mod.ck3Title} color="rgba(255,255,255,0.5)" />}
      </div>

      {/* Stats */}
      {(mod.events !== undefined || mod.decisions !== undefined || mod.modifiers !== undefined) && (
        <>
          <div style={sectionTitle}>Statystyki contentu</div>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={statBox("#e6b43c", mod.events || 0)}>
              <div style={{ fontSize: 28, fontWeight: 700, color: (mod.events || 0) > 0 ? "#e6b43c" : "rgba(255,255,255,0.15)", lineHeight: 1.1 }}>
                {mod.events ?? 0}
              </div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>Eventy</div>
            </div>
            <div style={statBox("#6ba0d6", mod.decisions || 0)}>
              <div style={{ fontSize: 28, fontWeight: 700, color: (mod.decisions || 0) > 0 ? "#6ba0d6" : "rgba(255,255,255,0.15)", lineHeight: 1.1 }}>
                {mod.decisions ?? 0}
              </div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>Decyzje</div>
            </div>
            <div style={statBox("#e63946", mod.modifiers || 0)}>
              <div style={{ fontSize: 28, fontWeight: 700, color: (mod.modifiers || 0) > 0 ? "#e63946" : "rgba(255,255,255,0.15)", lineHeight: 1.1 }}>
                {mod.modifiers ?? 0}
              </div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>Modifiers</div>
            </div>
          </div>
        </>
      )}

      {/* Cultures */}
      {mod.cultures && mod.cultures.length > 0 && (
        <>
          <div style={sectionTitle}>Kultury ({mod.cultures.length})</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {mod.cultures.map((c) => (
              <span key={c} style={cultureChip}>{c}</span>
            ))}
          </div>
        </>
      )}

      {/* Dependencies */}
      {mod.type !== "base" && (
        <>
          <div style={sectionTitle}>Zaleznosci</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {deps.map((d) => (
              <div
                key={d}
                style={{
                  padding: "6px 12px",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.6)",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 6,
                }}
              >
                {d}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Links */}
      {(mod.steamUrl || mod.repoUrl) && (
        <>
          <div style={sectionTitle}>Linki</div>
          <div style={{ display: "flex", gap: 10 }}>
            {mod.steamUrl && (
              <a
                href={mod.steamUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "8px 16px",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#fff",
                  background: "rgba(102,192,244,0.15)",
                  border: "1px solid rgba(102,192,244,0.3)",
                  borderRadius: 6,
                  textDecoration: "none",
                }}
              >
                Steam Workshop
              </a>
            )}
            {mod.repoUrl && (
              <a
                href={mod.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "8px 16px",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#fff",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 6,
                  textDecoration: "none",
                }}
              >
                GitHub
              </a>
            )}
          </div>
        </>
      )}

      {/* Graf wiedzy — all kingdoms with graph data */}
      {KINGDOM_GRAPHS[mod.prefix] && (
        <KnowledgeGraph
          nodes={KINGDOM_GRAPHS[mod.prefix].nodes}
          links={KINGDOM_GRAPHS[mod.prefix].links}
          paths={KINGDOM_GRAPHS[mod.prefix].paths}
        />
      )}

      {/* Roadmapa */}
      {KINGDOM_ROADMAPS[mod.prefix] && (
        <RoadmapSection roadmap={KINGDOM_ROADMAPS[mod.prefix]} />
      )}

      {/* Zaplanowane */}
      {MOD_TODOS[mod.prefix] && MOD_TODOS[mod.prefix].length > 0 && (
        <TodoSection todos={MOD_TODOS[mod.prefix]} />
      )}

      {/* Steam Trend — only for SE */}
      {mod.steamUrl && mod.prefix === "se_" && SE_STEAM_STATS.length > 1 && (
        <SteamTrendSection data={SE_STEAM_STATS} />
      )}
    </div>
  );
}

function MetaCell({ label, value, color, small }: { label: string; value: string; color?: string; small?: boolean }) {
  return (
    <div>
      <div style={metaLabel}>{label}</div>
      <div style={{ ...metaValue, color: color || metaValue.color, fontSize: small ? 11 : 13 }}>{value}</div>
    </div>
  );
}

/* ───── Story factory ───── */

function createModStory(mod: Mod): Story {
  const S: Story = () => (
    <>
      <ModNavPanel onNav={() => {}} mode="navigate" />
      <ModPage mod={mod} />
    </>
  );
  S.storyName = mod.shortName;
  return S;
}

/* ───── Exports ───── */

export const SE = createModStory(MODS[0]);
export const SSP = createModStory(MODS[1]);
export const SML = createModStory(MODS[2]);
export const Ruthenia = createModStory(MODS[3]);
export const WhiteRuthenia = createModStory(MODS[4]);
export const Novgorod = createModStory(MODS[5]);
export const GaliciaVolhynia = createModStory(MODS[6]);
export const Moldavia = createModStory(MODS[7]);
export const Polotsk = createModStory(MODS[8]);
export const Opolye = createModStory(MODS[9]);
export const Poland = createModStory(MODS[10]);
export const Pomerania = createModStory(MODS[11]);
export const Sorbia = createModStory(MODS[12]);
export const Bohemia = createModStory(MODS[13]);
export const Slovakia = createModStory(MODS[14]);
export const Hungary = createModStory(MODS[15]);
export const Carinthia = createModStory(MODS[16]);
export const Croatia = createModStory(MODS[17]);
export const Serbia = createModStory(MODS[18]);
export const Bulgaria = createModStory(MODS[19]);
export default {
  title: "Modyfikacje/Mody",
};
