import React from "react";
import "./BeerList.scss";
import Beer from "../Beer/Beer";

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
        ph={beer.ph}
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
