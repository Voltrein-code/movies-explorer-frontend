import React, { useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurretUserContexts";
import useFormValidator from "../../hooks/useFormValidator";
import Header from "../Header/Header";

import "./Profile.css";

export default function Profile(props) {
  const {
    values,
    errors,
    // eslint-disable-next-line no-unused-vars
    isElementValid,
    handleElementChange,
    resetFormInputs,
  } = useFormValidator({});

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (currentUser) {
      resetFormInputs(currentUser);
    }
  }, [resetFormInputs, currentUser, props.isOpen]);

  return (
    <>
      <Header />
      <div className="profile">
        <h2 className="profile__hello">Привет, {props.isProfilePageOpen}</h2>
        <form className="profile__form" id="form" action="#">
          <label className="profile__label">
            Имя
            <input
              className={
                errors.name
                  ? "profile__input profile__input_type_error"
                  : "profile__input"
              }
              id="name-input"
              name="name"
              type="text"
              value={values.name || ""}
              onChange={handleElementChange}
              minLength="2"
              required
            />
          </label>
          <span className="profile__error"></span>
          <label className="profile__label">
            Почта
            <input
              className={
                errors.email
                  ? "profile__input profile__input_type_error"
                  : "profile__input"
              }
              id="email-input"
              name="email"
              type="email"
              value={values.email || ""}
              onChange={handleElementChange}
              minLength="3"
              required
            />
          </label>
          <span className="profile__error"></span>
          <button
            className="profile__button profile__button_type_submit"
            type="submit"
          >
            Редактировать
          </button>
          <button
            className="profile__button profile__button_type_signout"
            type="button"
          >
            Выйти из профиля
          </button>
        </form>
      </div>
    </>
  );
}
