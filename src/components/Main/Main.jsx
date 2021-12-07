import React from "react";
import BeerList from "../Cardlist/CardList";
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