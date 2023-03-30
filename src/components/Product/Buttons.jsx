// Importing React
import React from "react";

// Importing MUI
import { Box, ButtonGroup } from "@mui/material";

// Importing utils
import AddToCart from "../../utils/ProductCard/AddToCart";
import AddedToCart from "../../utils/ProductCard/AddedToCart";

/**
 * 
 * @param {productAmount, data, cart}  
 * @returns Button to use for cart
 */
const Buttons = ({ productAmount, data, cart }) => {
 return (
  <Box>
   <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
    {productAmount > 0 ? <AddedToCart product={data} productAmount={productAmount} cart={cart} /> : <AddToCart product={data} cart={cart} />}
   </ButtonGroup>
  </Box>
 );
};

export default Buttons;
