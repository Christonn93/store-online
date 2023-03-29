// Importing React
import React from "react";

// Importing MUI
import { Tooltip, Button, Badge } from "@mui/material";

/**
 * AddToCart
 *
 * @param {*} { product }
 * @returns UI if product is not added to cart
 */
const CardButton = ({ product, cart, productAmount, state }) => {
 const add = (
  <Tooltip title="Add to cart">
   <Button
    color="cta"
    onClick={() => {
     cart.addToCart(product.id, product.discountedPrice);
    }}
    variant="contained"
    size="large"
    sx={{
     color: "text.secondary",
    }}
   >
    Add to cart
   </Button>
  </Tooltip>
 );

 const added = (
  <Tooltip title="Added to cart">
   <Badge badgeContent={productAmount} color="secondary">
    <Button
     color="ctaSuccess"
     onClick={() => {
      cart.addToCart(product.id);
     }}
     variant="contained"
     size="large"
     sx={{
      color: "text.main",
     }}
    >
     Added to cart
    </Button>
   </Badge>
  </Tooltip>
 );

 return <>{state === true ? added : add}</>;
};

export default CardButton;
