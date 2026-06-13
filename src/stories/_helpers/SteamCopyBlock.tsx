import * as React from "react";
import { useState, useCallback } from "react";

type Lang = "en" | "pl";

interface SteamCopyBlockProps {
  en: string;
  pl: string;
}

const tabStyle = (active: boolean): React.CSSProperties => ({
  padding: "4px 14px",
  fontFamily: "var(--font-body)",
  fontSize: 12,
  letterSpacing: "0.04em",
  color: active ? "rgb(226,195,121)" : "rgba(255,255,255,0.4)",
  background: active ? "rgba(197,160,72,0.12)" : "transparent",
  border: "1px solid",
  borderColor: active ? "rgba(197,160,72,0.28)" : "rgba(255,255,255,0.1)",
  borderRadius: 4,
  cursor: "pointer",
  transition: "all 150ms",
});

export function SteamCopyBlock({ en, pl }: SteamCopyBlockProps) {
  const [lang, setLang] = useState<Lang>("en");
  const [copied, setCopied] = useState(false);
  const bbcode = lang === "en" ? en : pl;

  const handleCopy = useCallback(() => {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(bbcode).then(done).catch(() => {
        const ta = document.createElement("textarea");
        ta.value = bbcode;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        done();
      });
    } else {
      const ta = document.createElement("textarea");
      ta.value = bbcode;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      done();
    }
  }, [bbcode]);

  return (
    <div style={{ position: "relative", marginTop: 16 }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: "var(--fg-meta)",
            letterSpacing: "0.04em",
            marginRight: 8,
          }}>
            Steam Workshop
          </span>
          <button onClick={() => { setLang("en"); setCopied(false); }} style={tabStyle(lang === "en")}>EN</button>
          <button onClick={() => { setLang("pl"); setCopied(false); }} style={tabStyle(lang === "pl")}>PL</button>
        </div>
        <button
          onClick={handleCopy}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 12px",
            fontFamily: "var(--font-mono, ui-monospace, monospace)",
            fontSize: 11,
            color: copied ? "rgb(131,200,77)" : "rgb(226,195,121)",
            background: copied ? "rgba(131,200,77,0.12)" : "rgba(197,160,72,0.10)",
            border: `1px solid ${copied ? "rgba(131,200,77,0.3)" : "rgba(197,160,72,0.28)"}`,
            borderRadius: 4,
            cursor: "pointer",
            transition: "background 150ms, color 150ms, border-color 150ms",
          }}
        >
          {copied ? "Skopiowano!" : "Kopiuj BBCode"}
        </button>
      </div>
      <pre style={{
        fontFamily: "var(--font-mono, ui-monospace, 'SF Mono', monospace)",
        fontSize: 11,
        lineHeight: 1.5,
        color: "var(--fg-on-dark-soft, rgba(255,255,255,0.65))",
        background: "rgba(0,0,0,0.3)",
        border: "1px solid rgba(197,160,72,0.12)",
        borderRadius: 6,
        padding: "12px 16px",
        margin: 0,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        maxHeight: 400,
        overflowY: "auto",
      }}>
        {bbcode}
      </pre>
    </div>
  );
}
