// Importing React
import * as React from "react";

// Importing MUI
import { Badge, IconButton } from "@mui/material";

// Importing MUI Icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

/**
 *
 * @param {amount}
 * @returns Cart icon for the navigation
 */
const CartIcon = ({ amount }) => {
 return (
  <IconButton aria-label="cart">
   <Badge badgeContent={amount} color="secondary">
    <ShoppingCartIcon color="navText" value={amount} />
   </Badge>
  </IconButton>
 );
};

export default CartIcon;
