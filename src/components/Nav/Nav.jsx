import React, { useState } from "react";
import "./Nav.scss";
import FindBeers from "../../containers/Filterslist/FindBeers";
import SearchBox from "../SearchBox/SearchBox";

const Nav = (props) => {
  const {searchTerm, beerArr, handleInput} = props

  return (
    <nav className="navbar">
      <div className="navbar-box" >
        <h2 className="navbar-box__heading">Search</h2>
      </div>
    <SearchBox name={"beer cards"} searchTerm={searchTerm} handleInput={handleInput} />
    <FindBeers beerArr={beerArr} searchTerm={searchTerm} />
    </nav>
  );
};

export default Nav;
