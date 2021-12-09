import React, { useState } from "react";
import "./Nav.scss";
import Button from "../Button/Button";
import FindBeers from "../../containers/Filterslist/FindBeers";
import SearchBox from "../SearchBox/SearchBox";

const Nav = (props) => {
  const {searchTerm, beerArr, handleInput} = props
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <nav className="navbar">
      <div className="navbar-box" onClick={toggleSettings}><Button isSecondary={true} buttonText={"Search"} className="navbar-box__heading" /></div>
    {showSettings && <FindBeers beerArr={beerArr} searchTerm={searchTerm} />}
    {showSettings && <SearchBox name={"beer cards"} searchTerm={searchTerm} handleInput={handleInput} />}
    </nav>
  );
};

export default Nav;
