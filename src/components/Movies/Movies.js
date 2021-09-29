import React from "react";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

export default function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList moviesList="all"></MoviesCardList>
    </main>
  );
}
