import React, { useState } from "react";
import "./Nav.scss";
import NavMenu from "../NavMenu/NavMenu";

import Button from "../Button/Button";

const Nav = props => {
  const { handleSubmit } = props;
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <nav className="navbar">
      <div className="navbar-box" handleSubmit={handleSubmit} onClick={toggleSettings}><Button isSecondary={true} buttonText={"Search"} className="navbar-box__heading" /></div>
    {showSettings && <NavMenu toggleSettings={toggleSettings} handleSubmit={handleSubmit}/>}
    </nav>
  );
};

export default Nav;
