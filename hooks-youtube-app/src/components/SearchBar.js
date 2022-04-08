import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("Search For Something");
  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const clickToEmpty = (event) => {
    setTerm("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            onClick={clickToEmpty}
            onChange={onInputChange}
            type="text"
            value={term}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
