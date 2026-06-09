import * as React from "react";
import { navigate, type HeadFC } from "gatsby";

/* Redirect /dev/marketing/ → /dev/marketing/se/ */
const MarketingRedirect: React.FC = () => {
  React.useEffect(() => {
    navigate("/dev/marketing/se/", { replace: true });
  }, []);
  return null;
};

export default MarketingRedirect;

export const Head: HeadFC = () => (
  <>
    <title>Marketing — Slavic Enlarged (dev)</title>
    <html lang="pl" />
  </>
);
