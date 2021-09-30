import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/" component={Main} />

        <Route path="/movies" component={Movies} />

        <Route path="/saved-movies" component={SavedMovies} />

        <Route path="/404" component={NotFoundPage} />

        <Route path="*" render={() => <Redirect to="/404" />} />
      </Switch>
    </div>
  );
}
