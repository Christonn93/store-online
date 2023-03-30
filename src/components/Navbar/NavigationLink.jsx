// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Button, Tooltip, Badge } from "@mui/material";

// Importing assets
import CartIcon from "../../assets/CartIcon";

const NavigationLink = ({ target, title, state, cartTotal }) => {
 return (
  <>
   {state === true ? (
    <Link to="/cart">
     <Tooltip title="Your cart">
      <Badge badgeContent={cartTotal} color="secondary">
       <CartIcon />
      </Badge>
     </Tooltip>
    </Link>
   ) : (
    <Link to={target}>
     <Tooltip title={title}>
      <Button variant="text" color="navText">
       {title}
      </Button>
     </Tooltip>
    </Link>
   )}
  </>
 );
};

export default NavigationLink;
