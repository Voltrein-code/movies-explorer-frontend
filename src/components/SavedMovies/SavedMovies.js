import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

export default function SavedMovies() {
  return (
    <>
      <Header />
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList moviesList="saved" />
      </main>
      <Footer />
    </>
  );
}
