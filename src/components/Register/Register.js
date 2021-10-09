import React from "react";
import PageWithForm from "../PageWithForm/PageWithForm";

import "./Register.css";

export default function Register() {
  return (
    <section className="register">
      <PageWithForm
        title="Добро пожаловать!"
        submitText="Зарегистрироваться"
        authText="Уже зарегистрированы?"
        authRedirectionTo="/signin"
        authRedirectionText="Войти"
      >
        <div className="auth__inputs auth__inputs_type_register">
          <label className="auth__label">
            Имя
            <input className="auth__input" />
            <span className="auth__error"></span>
          </label>
          <label className="auth__label">
            E-mail
            <input className="auth__input" />
            <span className="auth__error"></span>
          </label>
          <label className="auth__label">
            Пароль
            <input className="auth__input" />
            <span className="auth__error"></span>
          </label>
        </div>
      </PageWithForm>
    </section>
  );
}
