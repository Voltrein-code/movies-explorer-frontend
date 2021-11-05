import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

import "./PageWithForm.css";

export default function PageWithForm(props) {
  return (
    <div className="auth">
      <Logo />
      <h2 className="auth__title">{props.title}</h2>
      {props.children}
      <button className="auth__submit button">{props.submitText}</button>
      <p className="auth__text">
        {props.authText}
        <Link className="auth__redirection link" to={props.authRedirectionTo}>
          {props.authRedirectionText}
        </Link>
      </p>
    </div>
  );
}
