import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

export default function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
        </Route>

        <Route path="/movies">
          <Header />
          <Movies />
        </Route>

        <Route path="/saved-movies">
          <Header />
          <SavedMovies />
        </Route>
      </Switch>
    </div>
  );
}
