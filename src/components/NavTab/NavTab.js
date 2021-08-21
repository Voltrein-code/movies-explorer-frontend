import React from "react";
import { Link } from "react-scroll";

import "./NavTab.css";

export default function NavTab() {
  return (
    <ul className="navtab">
      <li className="navtab__element">
        <Link
          className="link navtab__anchor"
          to="about-project"
          smooth={true}
          duration={500}
        >
          О проекте
        </Link>
      </li>
      <li className="navtab__element">
        <Link
          className="link navtab__anchor"
          to="techs"
          smooth={true}
          duration={500}
        >
          Технологии
        </Link>
      </li>
      <li className="navtab__element">
        <Link
          className="link navtab__anchor"
          to="about-me"
          smooth={true}
          duration={500}
        >
          Студент
        </Link>
      </li>
    </ul>
  );
}
