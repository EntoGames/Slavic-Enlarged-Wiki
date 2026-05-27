import type { GatsbyConfig } from "gatsby";
import * as path from "path";

/* =============================================================
   gatsby-config.ts
   ─────────────────────────────────────────────────────────────
   Wpiąca:
     • gatsby-source-filesystem → folder `wiki/` (treść markdown,
       którą obsługuje gatsby-node.ts; nazwa "wiki" jest filtrem)
     • gatsby-source-filesystem → folder `src/assets/img` (obrazy
       w SVG/PNG potrzebne w sharp/manifest)
     • gatsby-transformer-remark → parser .md → MarkdownRemark
     • gatsby-plugin-sharp / -image / -transformer-sharp → obrazy
     • gatsby-plugin-sitemap → /sitemap-index.xml (Netlify-friendly)
     • gatsby-plugin-manifest → PWA-style manifest dla brand-favicon
   ============================================================= */

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Slavic Enlarged Wiki",
    description:
      "Przewodnik po świecie słowiańskiego pogaństwa w Crusader Kings III — mod Slavic Enlarged & Slavic Struggle of Perun.",
    siteUrl: process.env.SITE_URL ?? "https://slavic-enlarged-wiki.netlify.app",
    author: "Pseuobalbinus",
    lang: "pl",
  },

  graphqlTypegen: true,

  plugins: [
    /* Treść artykułów wiki — KLUCZ: name MUSI być "wiki" */
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "wiki",
        path: path.resolve(__dirname, "wiki"),
        ignore: ["**/ARCHITECTURE.md", "**/.*"],
      },
    },

    /* Assety obrazowe (kolovrat, wordmark, ikony) */
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.resolve(__dirname, "src/assets/img"),
      },
    },

    /* Parsuj .md → MarkdownRemark */
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          /* Zachowaj `id` na `<h2>` itd. — używamy ich w TOC */
          {
            resolve: "gatsby-remark-autolink-headers",
            options: { className: "wf-h-anchor", isIconAfterHeader: true },
          },
        ],
        excerpt_separator: "<!-- more -->",
      },
    },

    /* Obrazy */
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    /* SEO */
    "gatsby-plugin-sitemap",

    /* Brand manifest (PWA-ready) */
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Slavic Enlarged Wiki",
        short_name: "SE Wiki",
        start_url: "/",
        background_color: "#0B1004",
        theme_color: "#B3994D",
        display: "standalone",
        icon: "src/assets/img/kolovrat.svg",
      },
    },
  ],
};

export default config;
