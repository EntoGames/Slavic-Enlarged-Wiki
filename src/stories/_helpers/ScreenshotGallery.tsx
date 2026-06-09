import * as React from "react";

/* ───── Screenshot gallery for Marketing stories ───── */

interface ScreenshotItem {
  src: string;
  alt: string;
}

interface ScreenshotGalleryProps {
  modName: string;
  folder: string;
  screenshots: ScreenshotItem[];
  spec: { width: number; height: number; format: string };
}

const emptyStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 16,
  padding: "48px 32px",
  borderRadius: "var(--radius-sm)",
  border: "2px dashed rgba(var(--gold-border-rgb), 0.2)",
  background: "rgba(var(--gold-border-rgb), 0.03)",
  maxWidth: 800,
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "var(--radius-sm)",
  border: "1px solid rgba(var(--gold-border-rgb), 0.2)",
  boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
  gap: 16,
  maxWidth: 1200,
};

const specRowStyle: React.CSSProperties = {
  padding: "4px 16px 4px 0",
  color: "var(--fg-meta)",
};

export function ScreenshotGallery({ modName, folder, screenshots, spec }: ScreenshotGalleryProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 12px",
          borderRadius: "var(--radius-pill)",
          background: "rgba(var(--gold-border-rgb), 0.1)",
          border: "1px solid rgba(var(--gold-border-rgb), 0.25)",
          fontFamily: "var(--font-body)",
          fontSize: 12,
          color: "var(--gold-light)",
        }}>
          {modName}
        </span>
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--fg-meta)",
          padding: "4px 10px",
          borderRadius: "var(--radius-pill)",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}>
          static/marketing/screenshots/{folder}/
        </span>
      </div>

      {screenshots.length === 0 ? (
        <div style={emptyStyle}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(var(--gold-border-rgb), 0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: 18,
            color: "var(--gold)",
            textShadow: "var(--shadow-carved)",
          }}>
            Brak screenshotow
          </span>
          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: "var(--fg-meta)",
            textAlign: "center",
            maxWidth: 400,
            lineHeight: 1.5,
          }}>
            Dodaj pliki PNG/JPG do folderu{" "}
            <code style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              padding: "2px 6px",
              borderRadius: 4,
              background: "rgba(255,255,255,0.06)",
            }}>
              static/marketing/screenshots/{folder}/
            </code>{" "}
            i zaktualizuj tablice screenshots w pliku story.
          </span>
        </div>
      ) : (
        <div style={gridStyle}>
          {screenshots.map((s, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <img src={s.src} alt={s.alt} style={imgStyle} loading="lazy" />
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--fg-meta)" }}>
                {s.alt}
              </span>
            </div>
          ))}
        </div>
      )}

      <table style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--fg-on-dark-soft)", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={specRowStyle}>Format Workshop</td>
            <td style={{ padding: "4px 0" }}>{spec.format}</td>
          </tr>
          <tr>
            <td style={specRowStyle}>Rozdzielczosc</td>
            <td style={{ padding: "4px 0" }}>{spec.width} &times; {spec.height}</td>
          </tr>
          <tr>
            <td style={specRowStyle}>Folder</td>
            <td style={{ padding: "4px 0", fontFamily: "var(--font-mono)", fontSize: 11 }}>
              static/marketing/screenshots/{folder}/
            </td>
          </tr>
          <tr>
            <td style={specRowStyle}>Ilosc</td>
            <td style={{ padding: "4px 0" }}>
              {screenshots.length === 0 ? (
                <span style={{ color: "var(--accent-warning)" }}>0 — brak</span>
              ) : (
                <span>{screenshots.length} {screenshots.length === 1 ? "screenshot" : "screenshotow"}</span>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
