import React from "react";

import "./FilterCheckbox.css";

export default function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__switch">
        <input type="checkbox" className="filter-checkbox__input" />
        <span className="filter-checkbox__input-visual"></span>
      </label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
}
