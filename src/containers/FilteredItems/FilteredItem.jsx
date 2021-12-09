import React from "react";
import "./FilteredItem.scss";

const FilteredBeers = (props) => {
  const { handleSubmitABV, handleSubmitBrewDate } = props;

  return (
    <>
      <div className="filtered-item">
        <div className="filtered-item__input">
          <input
            className="filtered-item__input-field"
            type="checkbox"
            onClick={handleSubmitABV}
          />
          <p className="filtered-item__input-text">Click for ABV above 6</p>
        </div>
        <div className="filtered-item__input">
          <input
            className="filtered-item__input-field"
            type="checkbox"
            onClick={handleSubmitBrewDate}
          />
          <p className="filtered-item__input-text">Click for Beers created before 2010</p>
        </div>
      </div>
    </>
  );
};

export default FilteredBeers;
