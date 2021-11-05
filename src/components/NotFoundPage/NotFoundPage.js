import React from "react";
import { useHistory } from "react-router-dom";

import "./NotFoundPage.css";

export default function NotFoundPage() {
  const history = useHistory();

  function returnToPreviousPage() {
    history.goBack();
  }

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button
        onClick={returnToPreviousPage}
        className="not-found__back-btn button"
      >
        Назад
      </button>
    </section>
  );
}
