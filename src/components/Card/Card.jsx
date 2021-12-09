import React from "react";
import "./Card.scss";

const Beer = (props) => {
  const {
    name,
    imgURL,
    brewDate,
    beerStrength,
  } = props;

  // description,
    //pairWith,
    //tagline,
  //<h4 className="beer__pair">Pair With: {pairWith}</h4>
      //<h4 className="beer__desc">Description: {description}</h4>
      //<h4 className="beer__tag">Tagline: {tagline}</h4>

  return (
    <div className="beer">
      <h2 className="beer__name">{name}</h2>
      <div className="beer__img">
      <img src={imgURL} alt={name} className="beer__img-position" /></div>
      <div className="beer__collection">
      <h4 className="beer__info" >Brew Date: </h4>
      <p className="beer__data">{brewDate}</p>
      <h4 className="beer__info">Alcohol Strength: </h4>
      <p className="beer__data">{beerStrength}</p>
      </div>
    </div>
  );
};

export default Beer;
