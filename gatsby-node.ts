import type { GatsbyNode } from "gatsby";
import * as path from "path";
import { deriveFromPath } from "./src/utils/wiki-paths";

/* =============================================================
   gatsby-node.ts
   ─────────────────────────────────────────────────────────────
   Robi DWIE rzeczy:

   1. onCreateNode — dla każdego węzła `MarkdownRemark`, którego źródło
      jest w `content/wiki/`, derywuje pola: `urlPath`, `slug`, `section`,
      `segments`, `isCategoryIndex`, `excerpt`. To pozwala szablonowi i
      mega-menu pracować bez wymagania frontmattera w plikach treści.

   2. createPages — buduje stronę dla każdego węzła wiki pod jego urlPath.
      Plik `ARCHITECTURE.md` i inne UPPERCASE.md w korzeniu są pomijane.

   Konfiguracja gatsby-config.ts musi mieć:
     - gatsby-source-filesystem wskazujący `content/wiki/` (nazwa: "wiki")
     - gatsby-transformer-remark
   ============================================================= */

/* ----- Helpery ----- */

interface MarkdownNode {
  id: string;
  internal: { type: string };
  parent: string;
  rawMarkdownBody?: string;
  excerpt?: string;
  htmlAst?: unknown;
  frontmatter?: Record<string, unknown>;
}

interface FileNode {
  id: string;
  internal: { type: string };
  sourceInstanceName?: string;
  relativePath?: string;
  absolutePath?: string;
}

/* ============================================================
   1. onCreateNode — auto-derywacja pól
   ============================================================ */

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type !== "MarkdownRemark") return;

  const md = node as unknown as MarkdownNode;
  const parent = getNode(md.parent) as unknown as FileNode | undefined;
  if (!parent || parent.internal.type !== "File") return;
  if (parent.sourceInstanceName !== "wiki") return;

  const relPath = parent.relativePath ?? "";
  const derived = deriveFromPath(relPath);

  // Pola — zapisz każde osobno, żeby GraphQL miał czysty schemat
  createNodeField({ node, name: "urlPath", value: derived.urlPath });
  createNodeField({ node, name: "slug", value: derived.slug });
  createNodeField({ node, name: "section", value: derived.section ?? "" });
  createNodeField({ node, name: "sectionOrder", value: derived.sectionOrder });
  createNodeField({
    node,
    name: "isCategoryIndex",
    value: derived.isCategoryIndex,
  });
  createNodeField({ node, name: "isContent", value: derived.isContent });
  createNodeField({ node, name: "segments", value: derived.segments });
  createNodeField({ node, name: "relativePath", value: relPath });

  // Wyciągnij H1 jako tytuł, jeśli frontmatter nie ma `title`
  const rawTitle =
    (md.frontmatter?.title as string | undefined) || extractH1(md.rawMarkdownBody ?? "");
  createNodeField({ node, name: "title", value: rawTitle || derived.slug });
};

/** Wyciągnij pierwszy `# Heading` z markdown body. */
function extractH1(md: string): string | undefined {
  const m = md.match(/^\s*#\s+(.+?)\s*$/m);
  return m ? m[1].trim() : undefined;
}

/* ============================================================
   2. createPages — generowanie stron
   ============================================================ */

interface ArticleQueryResult {
  allMarkdownRemark: {
    nodes: Array<{
      id: string;
      fields: {
        urlPath: string;
        slug: string;
        isContent: boolean;
      };
    }>;
  };
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;
  const template = path.resolve("./src/templates/wiki-article.tsx");

  const result = await graphql<ArticleQueryResult>(`
    query AllWikiArticles {
      allMarkdownRemark {
        nodes {
          id
          fields {
            urlPath
            slug
            isContent
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Błąd pobierania artykułów wiki", result.errors);
    return;
  }

  const nodes = (result.data?.allMarkdownRemark.nodes ?? []).filter(
    (n) => n.fields.isContent && n.fields.urlPath
  );

  reporter.info(`[wiki] generuję ${nodes.length} stron`);

  for (const node of nodes) {
    createPage({
      path: node.fields.urlPath,
      component: template,
      context: {
        id: node.id,
        urlPath: node.fields.urlPath,
        slug: node.fields.slug,
      },
    });
  }
};

/* ============================================================
   3. createSchemaCustomization — gwarantuje schemat pól nawet
      kiedy żaden plik markdown nie ma jeszcze danego pola.
   ============================================================ */

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({
  actions,
}) => {
  const { createTypes } = actions;
  createTypes(`
    type MarkdownRemarkFields {
      urlPath: String
      slug: String
      section: String
      sectionOrder: Int
      isCategoryIndex: Boolean
      isContent: Boolean
      segments: [String!]
      relativePath: String
      title: String
    }
    type MarginaliaItem {
      type: String
      kicker: String
      body: String
      icon: String
      title: String
      caption: String
    }
    type Frontmatter {
      subtitle: String
      kicker: String
      blurb: String
      lede: String
      edited: String
      author: String
      status: String
      version: String
      reads: String
      tags: [String!]
      relatedSlugs: [String!]
      marginalia: [MarginaliaItem]
    }
    type MarkdownRemark implements Node {
      fields: MarkdownRemarkFields
      frontmatter: Frontmatter
    }
  `);
};
