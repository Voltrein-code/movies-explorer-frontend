import React, { useState } from "react";
import { useHistory } from "react-router";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Profile from "../Profile/Profile";
import CurrentUserContext from "../../contexts/CurretUserContexts";
import Login from "../Login/Login";
import Register from "../Register/Register";

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState({
    name: "Евгений",
    email: "evgenii@shalnev-web.ru",
  });

  const [isProfilePageOpen, setProfilePageOpen] = useState(false);

  const history = useHistory();
  history.listen((location) => {
    location.pathname === "/profile"
      ? setProfilePageOpen(true)
      : setProfilePageOpen(false);
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/" component={Main} />

          <Route path="/movies" component={Movies} />

          <Route path="/saved-movies" component={SavedMovies} />

          <Route path="/signin" component={Login} />

          <Route path="/signup" component={Register} />

          <Route
            path="/profile"
            render={() => (
              <Profile
                isProfilePageOpen={isProfilePageOpen}
                isOpen={isProfilePageOpen}
              />
            )}
          />

          <Route path="/404" component={NotFoundPage} />

          <Route render={() => <Redirect to="/404" />} />
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}
