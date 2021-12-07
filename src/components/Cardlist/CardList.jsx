import React, { useState, useEffect } from "react";
import "./CardList.scss";
import Beer from "../Card/Card";

const BeerList = () => {
  const [beerArray, setBeerArray] = useState ([]);

  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers`;
    fetch(URL)
    .then(response => {
      return response.json();
    })
    .then(ipaObject => {
      setBeerArray(ipaObject);
    })
  }, [])

  const beer = beerArray.map((beer) => {
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
      <div className="beers">{beer}</div>
    </div>
  );
};

export default BeerList;
