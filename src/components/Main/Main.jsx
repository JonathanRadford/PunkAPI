import React from "react";
import BeerList from "../BeerList/BeerList";
import "./Main.scss";

const Main = (props) => {
  const { beerArr } = props;
  return (
    <div className="main">
      <BeerList title={"Results"} beerArr={beerArr} />
    </div>
  );
};

export default Main;
