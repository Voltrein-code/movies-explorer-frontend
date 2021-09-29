import React from "react";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

export default function SavedMovies() {
  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList moviesList="saved" />
    </main>
  );
}
