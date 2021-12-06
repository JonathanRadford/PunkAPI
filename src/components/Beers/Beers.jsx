import React from "react";
import "./Beers.scss"

const BeerList = (props) => {
  const { beerArr } = props;
  const beer = beerArr.map((beer, index) => {
    return (
      <div key={"Beer" + (index + 1)} className="beer">
        <h2>Name: </h2>
        <img src={beer.image_url} alt="" className="beer-img"/>
        <p> {beer.name}</p>
        <h2>Tagline: </h2>
        <p> {beer.tagline}</p>
        <h2>Created on: </h2>
        <p> {beer.first_brewed}</p>
        <h2>Description: </h2>
        <p> {beer.description}</p>
        <h2>Pair With: </h2>
        <p> {beer.food_pairing}</p>
        <h2>Beer ABV:</h2>
        <p> {beer.abv}</p>
        <p></p>
      </div>
    );
  });
  return (
    <div>
      <div className="beers">{beer}</div>
    </div>
  );
};

export default BeerList