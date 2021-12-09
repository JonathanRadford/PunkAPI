import React from "react";
import FilteredBeers from "../FilteredItems/FitleredItem";

const FindBeers = props => {
 const {handleSubmitABV, handleSubmitBrewDate} = props;

  return (
    <>
    <div  >
   <FilteredBeers handleSubmitABV={handleSubmitABV} handleSubmitBrewDate={handleSubmitBrewDate} />
      </div>
      </>
  );
};

export default FindBeers;
