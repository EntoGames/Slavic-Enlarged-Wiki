/* =============================================================
   Deklaracje typów dla importowanych assetów.
   Gatsby + Webpack zamieniają je na URL-stringi.
   ============================================================= */

declare module "*.svg" {
  const url: string;
  export default url;
}

declare module "*.png" {
  const url: string;
  export default url;
}

declare module "*.jpg" {
  const url: string;
  export default url;
}

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
