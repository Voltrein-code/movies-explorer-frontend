import React from "react";

import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="link portfolio__links-item">
          <a href="/" className="portfolio__link">
            Статичный сайт
          </a>
        </li>
        <li className="link portfolio__links-item">
          <a href="/" className="portfolio__link">
            Адаптивный сайт
          </a>
        </li>
        <li className="link portfolio__links-item">
          <a href="/" className="portfolio__link">
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}
