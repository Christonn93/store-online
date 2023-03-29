// Importing React
import React from "react";

// TODO
/**
 * 
 * @param {*} data 
 * @returns 
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
