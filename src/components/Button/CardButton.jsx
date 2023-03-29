// Importing React
import React, { useState } from "react";

// Importing MUI
import { Tooltip, Button, Badge } from "@mui/material";

// Importing components
import ConfirmSnackBar from "../Snackbar/ConfirmSnackBar"

/**
 * AddToCart
 *
 * @param {*} { product }
 * @returns UI if product is not added to cart
 */
const CardButton = ({ product, cart, productAmount, state }) => {
 const [open, setOpen] = useState(false);

 const handleSnackBar = () => {
  setOpen(true);
 };

 const add = (
  <Tooltip title="Add to cart">
   <Button
    color="cta"
    onClick={() => {
     cart.addToCart(product.id, product.discountedPrice);
     handleSnackBar();
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
      handleSnackBar();
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

 return (
  <>
   {state === true ? added : add}
   <ConfirmSnackBar open={open} setOpen={setOpen}/>
  </>
 );
};

export default CardButton;
