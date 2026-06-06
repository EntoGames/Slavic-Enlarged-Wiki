#!/usr/bin/env node
/* =============================================================
   sync-se-data.js — introspekja plików moda Slavic-Enlarged.
   ─────────────────────────────────────────────────────────────
   Parsuje pliki CK3 moda SE i generuje `src/data/se-mod-data.json`.
   Uruchamiany jako pre-build / pre-start hook.

   Użycie:
     node scripts/sync-se-data.js
   ============================================================= */

const fs = require("fs");
const path = require("path");

const SE_ROOT = path.resolve(__dirname, "../../Slavic-Enlarged");
const OUTPUT = path.resolve(__dirname, "../src/data/se-mod-data.json");

/* ─── Helpers ─── */

function readFile(relPath) {
  const full = path.join(SE_ROOT, relPath);
  if (!fs.existsSync(full)) {
    console.warn(`[sync-se] brak pliku: ${relPath}`);
    return "";
  }
  return fs.readFileSync(full, "utf-8");
}

function stripComments(text) {
  return text.replace(/#[^\n]*/g, "");
}

/* ─── CK3 culture parser ─── */

function parseCultures(text) {
  const clean = stripComments(text);
  const cultures = [];
  const cultureRe = /^(\w+)\s*=\s*\{/gm;
  let match;

  while ((match = cultureRe.exec(clean)) !== null) {
    const id = match[1];
    const startIdx = match.index + match[0].length;
    const block = extractBlock(clean, startIdx);
    if (!block) continue;

    const ethos = extractValue(block, "ethos");
    const heritage = extractValue(block, "heritage");
    const language = extractValue(block, "language");

    const tradBlock = extractBlockContent(block, "traditions");
    const traditions = tradBlock
      ? tradBlock.match(/\w+/g)?.filter((t) => t !== "traditions") ?? []
      : [];

    cultures.push({
      id,
      ethos: ethos?.replace("ethos_", "") ?? null,
      heritage: heritage?.replace("heritage_", "") ?? null,
      language: language?.replace("language_", "") ?? null,
      traditions,
    });
  }

  return cultures;
}

/* ─── CK3 faith parser ─── */

function parseFaiths(text) {
  const clean = stripComments(text);
  const faiths = [];

  // Find the `faiths = {` block inside the religion
  const faithsBlockMatch = clean.match(/\bfaiths\s*=\s*\{/);
  if (!faithsBlockMatch) return faiths;

  const faithsBlock = extractBlock(clean, faithsBlockMatch.index + faithsBlockMatch[0].length);
  if (!faithsBlock) return faiths;

  // Each faith inside: `se_slavic_base = { ... }`
  const faithRe = /\b(se_\w+)\s*=\s*\{/g;
  let match;
  while ((match = faithRe.exec(faithsBlock)) !== null) {
    const id = match[1];
    const startIdx = match.index + match[0].length;
    const block = extractBlock(faithsBlock, startIdx);
    if (!block) continue;

    const doctrines = [];
    const docRe = /doctrine\s*=\s*(\w+)/g;
    let dm;
    while ((dm = docRe.exec(block)) !== null) {
      doctrines.push(dm[1]);
    }

    const holySiteIds = [];
    const hsRe = /holy_site\s*=\s*(\w+)/g;
    let hsm;
    while ((hsm = hsRe.exec(block)) !== null) {
      holySiteIds.push(hsm[1]);
    }

    const tenets = doctrines.filter((d) => d.startsWith("tenet_"));

    faiths.push({ id, tenets, doctrines, holySiteIds });
  }

  return faiths;
}

/* ─── Holy sites parser ─── */

function parseHolySites(text) {
  const clean = stripComments(text);
  const sites = [];
  const siteRe = /^(se_site_\w+)\s*=\s*\{/gm;
  let match;

  while ((match = siteRe.exec(clean)) !== null) {
    const id = match[1];
    const block = extractBlock(clean, match.index + match[0].length);
    if (!block) continue;

    const county = extractValue(block, "county");
    sites.push({ id, county: county ?? null });
  }

  return sites;
}

/* ─── Localization parser ─── */

function parseLocalization(text) {
  const map = {};
  const re = /^\s+(\S+):0\s+"([^"]*)"/gm;
  let match;
  while ((match = re.exec(text)) !== null) {
    map[match[1]] = match[2];
  }
  return map;
}

/* ─── Decisions parser ─── */

function parseDecisions(text) {
  const clean = stripComments(text);
  const decisions = [];

  // Decisions are top-level blocks: `se_xxx = { ... }`
  const decRe = /^(se_\w+)\s*=\s*\{/gm;
  let match;
  while ((match = decRe.exec(clean)) !== null) {
    const id = match[1];
    const block = extractBlock(clean, match.index + match[0].length);
    if (!block) continue;

    const desc = extractValue(block, "desc");
    decisions.push({ id, desc: desc ?? null });
  }

  return decisions;
}

/* ─── descriptor.mod parser ─── */

function parseDescriptor(text) {
  const version = text.match(/version="([^"]+)"/)?.[1] ?? "unknown";
  const name = text.match(/name="([^"]+)"/)?.[1] ?? "unknown";
  const supported = text.match(/supported_version="([^"]+)"/)?.[1] ?? "unknown";
  return { name, version, supportedVersion: supported };
}

/* ─── Block extraction helpers ─── */

function extractBlock(text, startAfterBrace) {
  let depth = 1;
  let i = startAfterBrace;
  while (i < text.length && depth > 0) {
    if (text[i] === "{") depth++;
    else if (text[i] === "}") depth--;
    i++;
  }
  return depth === 0 ? text.slice(startAfterBrace, i - 1) : null;
}

function extractBlockContent(text, key) {
  const re = new RegExp(`${key}\\s*=\\s*\\{`);
  const m = re.exec(text);
  if (!m) return null;
  return extractBlock(text, m.index + m[0].length);
}

function extractValue(text, key) {
  const re = new RegExp(`${key}\\s*=\\s*(\\w+)`);
  const m = re.exec(text);
  return m ? m[1] : null;
}

/* ─── Main ─── */

function main() {
  console.log("[sync-se] Skanowanie plików Slavic-Enlarged...");

  if (!fs.existsSync(SE_ROOT)) {
    console.error(`[sync-se] Folder moda nie istnieje: ${SE_ROOT}`);
    process.exit(1);
  }

  // Cultures
  const culturesRaw = readFile("common/culture/cultures/se_slavic_new.txt");
  const cultures = parseCultures(culturesRaw);

  // Faiths
  const faithsRaw = readFile("common/religion/religion_types/se_slavic_faiths.txt");
  const faiths = parseFaiths(faithsRaw);

  // Holy sites
  const sitesRaw = readFile("common/religion/holy_site_types/se_holy_sites.txt");
  const holySites = parseHolySites(sitesRaw);

  // Decisions
  const decisionsRaw = readFile("common/decisions/se_religious_decisions.txt");
  const decisions = parseDecisions(decisionsRaw);

  // Localization
  const locCultures = parseLocalization(readFile("localization/english/se_cultures_l_english.yml"));
  const locFaiths = parseLocalization(readFile("localization/english/se_faiths_l_english.yml"));
  const locSites = parseLocalization(readFile("localization/english/se_holy_sites_l_english.yml"));
  const locDecisions = parseLocalization(readFile("localization/english/se_decisions_l_english.yml"));

  // Enrich cultures with display names
  for (const c of cultures) {
    c.name = locCultures[c.id] ?? c.id;
    c.collectiveNoun = locCultures[`${c.id}_collective_noun`] ?? null;
  }

  // Enrich faiths with display names
  for (const f of faiths) {
    f.name = locFaiths[f.id] ?? f.id;
    f.description = locFaiths[`${f.id}_desc`] ?? null;
  }

  // Enrich holy sites with display names
  for (const s of holySites) {
    s.name = locSites[`holy_site_${s.id}_name`] ?? s.id;
  }

  // Descriptor
  const descriptorRaw = readFile("descriptor.mod");
  const descriptor = parseDescriptor(descriptorRaw);

  // Events
  const eventsDir = path.join(SE_ROOT, "events");
  const eventFiles = fs.existsSync(eventsDir)
    ? fs.readdirSync(eventsDir).filter((f) => f.endsWith(".txt"))
    : [];

  const output = {
    mod: descriptor,
    cultures,
    faiths,
    holySites,
    decisions,
    eventFiles,
    localization: {
      cultures: locCultures,
      faiths: locFaiths,
      holySites: locSites,
      decisions: locDecisions,
    },
    meta: {
      generatedAt: new Date().toISOString(),
      sourceDir: "Slavic-Enlarged/",
    },
  };

  fs.writeFileSync(OUTPUT, JSON.stringify(output, null, 2), "utf-8");
  console.log(`[sync-se] Zapisano ${OUTPUT}`);
  console.log(`[sync-se]   ${cultures.length} kultur, ${faiths.length} wiar, ${holySites.length} holy sites, ${decisions.length} decyzji`);
}

main();
