import React from "react";
import "./CardList.scss";
import Beer from "../Card/Card";

const BeerList = (props) => {
  const { beerArr } = props;

  const beerList = beerArr.map((beer) => {
    return (
      <Beer
        key={beer.id}
        imgURL={beer.image_url}
        name={beer.name}
        brewDate={beer.first_brewed}
        beerStrength={beer.abv}
        //pairWith={beer.food_pairing}
        //description={beer.description}
        //tagline={beer.tagline}
        className="beer"
      />
    );
  });
  return (
    <div>
      <div className="beers">{beerList}</div>
    </div>
  );
};

export default BeerList;
