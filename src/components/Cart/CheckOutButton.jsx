// Importing React
import React from "react";

// Importing MUI
import { Box, Button } from "@mui/material";

/**
 *
 * @param {{ cart, state }}
 * @returns
 */
const CheckOutButton = ({ cart, state }) => {
 return (
  <Box my={2}>
   {state === false ? (
    <Box my={2}>
     <Button variant="contained" color="success" disabled>
      Check out
     </Button>
    </Box>
   ) : (
    <a href="/checkout">
     <Button variant="contained" color="success" onClick={() => cart.clearCart()}>
      Check out
     </Button>
    </a>
   )}
  </Box>
 );
};

export default CheckOutButton;
