import React from "react";

import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__form-field">
          <img src={searchIcon} alt="Иконка поиска" className="search__icon" />
          <input
            type="text"
            placeholder="Фильм"
            className="search__form-input"
          />
          <button className="search__button" type="submit">
            Найти
          </button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}
