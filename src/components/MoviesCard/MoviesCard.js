import React from "react";

import "./MoviesCard.css";

export default function MoviesCard(props) {
  return (
    <li className="movie">
      <h2 className="movie__title">{props.title}</h2>
      <p className="movie__duration">{props.duration}</p>
      {props.moviesList === "all" ? (
        <button
          className={`movie__button movie__button_type_save ${
            props.isMovieSaved ? "movie__button_type_saved" : ""
          }`}
          type="button"
        />
      ) : (
        <button
          className="movie__button movie__button_type_delete"
          type="button"
        />
      )}
      <img
        alt="Кадр из фильма"
        className="movie__image"
        src={props.movieImage}
      />
    </li>
  );
}
