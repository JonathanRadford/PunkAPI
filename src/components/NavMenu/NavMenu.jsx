import React from "react";
import Button from "../Button/Button";
import "./NavMenu.scss";

const NavMenu = props => {

  const {  handleSubmit } = props;
  return (
    <div className="nav-menu">
      <div className="nav-menu__content">
      <form className="settings-menu__form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">Find Beer: </label>
          <input type="text" name="firstName" className="settings-menu__input" />
          <Button isSecondary={true} buttonText={"Search"} />
        </form>
      </div>
    </div>
  );
};

export default NavMenu;
