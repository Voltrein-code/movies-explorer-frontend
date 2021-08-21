import React from "react";

import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="project">
        <article className="project-article">
          <h3 className="project-article__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project-article__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article className="project-article">
          <h3 className="project-article__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project-article__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className="project-deadlines">
        <div className="project-deadlines__period_backend">
          <p className="project-deadlines__weeks">1 неделя</p>
          <p className="project-deadlines__title">Back-end</p>
        </div>
        <div className="project-deadlines__period_frontend">
          <p className="project-deadlines__weeks project-deadlines__weeks_grey">
            4 недели
          </p>
          <p className="project-deadlines__title">Front-end</p>
        </div>
      </div>
    </section>
  );
}
