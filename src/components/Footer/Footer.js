import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__bar">
        <p className="footer__copyright">© 2021</p>
        <nav className="footer__nav">
          <a className="footer__link link" href="/">
            Яндекс.Практикум
          </a>
          <a className="footer__link link" href="/">
            Github
          </a>
          <a className="footer__link link" href="/">
            Telegram
          </a>
        </nav>
      </div>
    </footer>
  );
}
