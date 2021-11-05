import React from "react";
import { Link } from "react-router-dom";

import "./Logo.css";

import logoImage from "../../images/logo.svg";

export default function Logo() {
  return (
    <Link to="/">
      <img src={logoImage} className="logo link" alt="Логотип сайта" />
    </Link>
  );
}
