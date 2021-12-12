import React from "react";
import FilteredBeers from "../FilteredItems/FilteredItem";

const FindBeers = (props) => {
  const { handleSubmitABV, handleSubmitBrewDate, handleSubmitPH } = props;

  return (
    <>
      <div>
        <FilteredBeers
          handleSubmitABV={handleSubmitABV}
          handleSubmitBrewDate={handleSubmitBrewDate}
          handleSubmitPH={handleSubmitPH}
        />
      </div>
    </>
  );
};

export default FindBeers;
