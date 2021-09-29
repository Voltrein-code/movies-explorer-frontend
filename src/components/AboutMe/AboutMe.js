import React from "react";

import studentPhoto from "../../images/student-photo.jpg";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="student">
        <article className="student__text">
          <p className="student__name">Евгений</p>
          <p className="student__description">Фронтенд разработчик, 23 года</p>
          <p className="student__about">
            Я родился и живу в городе Липецк. Учусь на 3 курсе ВИВТ на
            факультете Информационные системы. Люблю слушать музыку, смотреть
            сериалы и аниме. Недавно начал кодить. С 2019 года работал в
            компании СПССПК "Экоптица". Начинаю свой путь в веб-разработке.
          </p>
          <ul className="student__links">
            <li className="student__links-element">
              <a href="/" className="link student__link">
                Telegram
              </a>
            </li>
            <li className="student__links-element">
              <a href="/" className="link student__link">
                GitHub
              </a>
            </li>
          </ul>
        </article>
        <img
          src={studentPhoto}
          className="student__photo"
          alt="Фотография студента"
        />
      </div>
    </section>
  );
}
