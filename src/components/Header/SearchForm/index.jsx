// Search Form
import React, { useContext, useEffect } from "react";
import PropTypes from 'prop-types';
import { FilterContext, FilterDispath } from "../../Context/ContextFilter";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchForm.css';

export default function SearchForm(props) {
  const { active } = props;
  const { state } = useContext(FilterContext);
  const { dispath } = useContext(FilterDispath);

  const location = useLocation();
  const { pathname } = location;
  // change The route search input is empty
  useEffect(() => {
    dispath({ type: "SEARCH_KEYWORD", payload: "" });
  }, [pathname]);

  const searchKeywordHandler = (e) => {
    dispath({ type: "SEARCH_KEYWORD", payload: e.target.value });
  };
  return (
    <>
      <form action="" className={`search-form ${active ? 'active' : ''}`}>
        <label htmlFor="search-box">
        <input
          onChange={(e) => searchKeywordHandler(e)}
          type="search"
          placeholder="يبحث..."
          value={state.searchKey}
          id="search-box"
        />

          <FontAwesomeIcon className="search-icon" icon={faSearch} />
        </label>
      </form>
    </>
  );
}
SearchForm.propTypes = {
  active: PropTypes.bool,
}.isRequired;
