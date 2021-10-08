import React from "react";

import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";

import testMovieImage from "../../images/test-movie-image.png";

export default function MoviesCardList(props) {
  return (
    <section className="movies-container">
      <ul className="movies-container__list">
        <MoviesCard
          title="33 слова о дизайне"
          duration="1ч 47м"
          isMovieSaved={true}
          movieImage={testMovieImage}
          moviesList={props.moviesList}
        />
        <MoviesCard
          title="33 слова о дизайне"
          duration="1ч 47м"
          isMovieSaved={true}
          movieImage={testMovieImage}
          moviesList={props.moviesList}
        />
        <MoviesCard
          title="33 слова о дизайне"
          duration="1ч 47м"
          isMovieSaved={true}
          movieImage={testMovieImage}
          moviesList={props.moviesList}
        />
        <MoviesCard
          title="33 слова о дизайне"
          duration="1ч 47м"
          isMovieSaved={false}
          movieImage={testMovieImage}
          moviesList={props.moviesList}
        />
        <MoviesCard
          title="33 слова о дизайне"
          duration="1ч 47м"
          isMovieSaved={false}
          movieImage={testMovieImage}
          moviesList={props.moviesList}
        />
        <MoviesCard
          title="33 слова о дизайне"
          duration="1ч 47м"
          isMovieSaved={false}
          movieImage={testMovieImage}
          moviesList={props.moviesList}
        />
        <MoviesCard
          title="33 слова о дизайне"
          duration="1ч 47м"
          isMovieSaved={false}
          movieImage={testMovieImage}
          moviesList={props.moviesList}
        />
        <MoviesCard
          title="33 слова о дизайне"
          duration="1ч 47м"
          isMovieSaved={false}
          movieImage={testMovieImage}
          moviesList={props.moviesList}
        />
        <MoviesCard
          title="33 слова о дизайне"
          duration="1ч 47м"
          isMovieSaved={false}
          movieImage={testMovieImage}
          moviesList={props.moviesList}
        />
        <MoviesCard
          title="33 слова о дизайне"
          duration="1ч 47м"
          isMovieSaved={false}
          movieImage={testMovieImage}
          moviesList={props.moviesList}
        />
        <MoviesCard
          title="33 слова о дизайне"
          duration="1ч 47м"
          isMovieSaved={false}
          movieImage={testMovieImage}
          moviesList={props.moviesList}
        />
        <MoviesCard
          title="33 слова о дизайне"
          duration="1ч 47м"
          isMovieSaved={false}
          movieImage={testMovieImage}
          moviesList={props.moviesList}
        />
      </ul>
      <button className="movies-container__more">Ещё</button>
    </section>
  );
}
