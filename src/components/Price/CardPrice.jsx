// Importing React
import React from "react";

// Importing MUI
import { Box } from "@mui/material";

const CardPrice = ({ product, state }) => {
 const regular = (
  <>
   <Box>
    <strong>{product.price} NOK</strong>
   </Box>
   <Box>
    <small>
     <i>(Additional tax may apply on checkout)</i>
    </small>
   </Box>
  </>
 );

 const discounted = (
  <>
   <Box>
    <strong>{product.discountedPrice} NOK</strong> <del>{product.price} NOK</del>
   </Box>
   <Box>
    <small>
     <i>(Additional tax may apply on checkout)</i>
    </small>
   </Box>
  </>
 );

 return <>{state === true ? discounted : regular}</>;
};

export default CardPrice;
