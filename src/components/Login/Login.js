import React from "react";
import PageWithForm from "../PageWithForm/PageWithForm";

import "./Login.css";

export default function Login() {
  return (
    <section className="login">
      <PageWithForm
        title="Рады видеть!"
        submitText="Войти"
        authText="Ещё не зарегистрированы?"
        authRedirectionTo="/signup"
        authRedirectionText="Зарегистрироваться"
      >
        <div className="auth__inputs auth__inputs_type_login">
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
