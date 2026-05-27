import * as React from "react";
import { Link, type HeadFC } from "gatsby";

import kolovratSvg from "../assets/img/kolovrat.svg";
import "../styles/home.css";
import "../templates/wiki-article.module.css";

const NotFoundPage: React.FC = () => (
  <div className="wf wf-404">
    <div className="wf-404__inner">
      <img src={kolovratSvg} alt="" className="wf-404__mark" />
      <div className="wf-404__num">404</div>
      <h1 className="wf-404__title">Ta karta jeszcze nie została zapisana</h1>
      <p className="wf-404__lede">
        Wołchwowie nie znaleźli tej strony. Wróć do{" "}
        <Link to="/">strony głównej</Link> albo otwórz{" "}
        <Link to="/wiki/wprowadzenie/o-modach">Wprowadzenie</Link>.
      </p>
    </div>
  </div>
);

export default NotFoundPage;

export const Head: HeadFC = () => (
  <>
    <title>404 — Slavic Enlarged Wiki</title>
    <html lang="pl" />
  </>
);
