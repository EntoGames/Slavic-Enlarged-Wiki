import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
      gatsby: path.resolve(__dirname, "mocks/gatsby.tsx"),
      "../../data/use-wiki-index": path.resolve(__dirname, "mocks/use-wiki-index.ts"),
    },
  },
};
