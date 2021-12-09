import React from "react";
const FilteredBeers = (props) => {
  const { handleSubmitABV, handleSubmitBrewDate } = props;

  return (
    <>
      <div className="input">
        <input className="input-box" type="checkbox" onClick={handleSubmitABV}></input>
        <input className="input-box" type="checkbox" onClick={handleSubmitBrewDate}></input>
      </div>
    </>
  );
};

export default FilteredBeers;
