import React from "react";
import BeerList from "../Beers/Beers";
import "./Main.scss"
import beers from "../../data/beers";

const Main = () => {
    return (
      <div>
        <BeerList beerArr={beers}/>
        </div>
    );
  };

export default Main