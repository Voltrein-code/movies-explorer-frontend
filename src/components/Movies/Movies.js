import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

export default function Movies() {
  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm />
        <MoviesCardList moviesList="all"></MoviesCardList>
      </main>
      <Footer />
    </>
  );
}
