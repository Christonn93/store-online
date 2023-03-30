// Importing React
import React from "react";

/**
 * 
 * @param {data} data 
 * @returns return price display for product
 */
const Price = (data) => {
 return (
  <>
   {data.price === data.discountedPrice ? (
    <>
     <span>{data.price} NOK</span>
    </>
   ) : (
    <>
     <span>
      {data.discountedPrice} NOK <del>{data.price} NOK</del>
     </span>
    </>
   )}
  </>
 );
};

export default Price;
