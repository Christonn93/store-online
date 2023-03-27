import React from "react";

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
