import React, { useState } from 'react';
import './SearchBar.styles.css';

const SearchBar = (props) => {

  const [TextToSearch, setTextToSearch] = useState("");

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setTextToSearch(event.target.value)
    props.TextToSearch = TextToSearch;
  }
  return (
    <div className="d-flex justify-content-end h-100 container px-4 px-lg-5">
      <div className="searchbar">
        <input className="search_input" value={TextToSearch} type="text" name="" placeholder="Buscar.." onChange={handleSearchChange} />
        <div className="search_icon">
          <i className="bi bi-search me-1"></i>
        </div>
      </div>
    </div>);

};

export default SearchBar;