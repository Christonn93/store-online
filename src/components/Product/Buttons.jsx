import React from "react";

import { Box, ButtonGroup } from "@mui/material";

import AddToCart from "../../utils/ProductCard/AddToCart";
import AddedToCart from "../../utils/ProductCard/AddedToCart";

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
