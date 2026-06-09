import * as React from "react";

export const Link = React.forwardRef<
  HTMLAnchorElement,
  { to: string; children?: React.ReactNode; [k: string]: any }
>(({ to, children, activeClassName, activeStyle, partiallyActive, ...rest }, ref) => (
  <a ref={ref} href={to} onClick={(e) => e.preventDefault()} {...rest}>
    {children}
  </a>
));
Link.displayName = "GatsbyLink";

export function navigate(to: string) {
  console.log("[Ladle mock] navigate →", to);
}

export function useStaticQuery() {
  return { allMarkdownRemark: { nodes: [] } };
}

export function graphql(strings: TemplateStringsArray) {
  return strings.join("");
}
