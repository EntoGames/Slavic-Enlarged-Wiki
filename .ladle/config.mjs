/** @type {import('@ladle/react').UserConfig} */
export default {
  stories: "src/**/*.stories.{ts,tsx}",
  viteConfig: ".ladle/vite.config.mjs",
  port: 62003,
  storyOrder: (stories) => {
    const dsOrder = [
      "design-system--fundamenty",
      "design-system--elementy",
      "design-system--komponenty",
    ];
    const mkOrder = [
      "marketing--slavic-enlarged",
      "marketing--slavic-struggle-of-perun",
      "marketing--myths-and-legends",
    ];
    const ds = dsOrder.flatMap((p) => stories.filter((s) => s.startsWith(p)));
    const mk = mkOrder.flatMap((p) => stories.filter((s) => s.startsWith(p)));
    const known = ["design-system", "marketing"];
    const rest = stories.filter((s) => !known.some((k) => s.startsWith(k)));
    return [...ds, ...mk, ...rest];
  },
};
