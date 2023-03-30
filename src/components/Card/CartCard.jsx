// Importing react
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Card, Box, IconButton, Typography } from "@mui/material";

// Importing MUI Icons
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// Importing function
import ApiHook from "../../api/ApiHooks";

// Importing context
import { CartContext } from "../../context/cartContext";

// TODO - jsdoc's need to be filled out
/**
 *
 * @param {*} param0
 * @returns
 */
const CartCard = ({ id }) => {
 const { data } = ApiHook(`https://api.noroff.dev/api/v1/online-shop/${id}`);
 const cart = useContext(CartContext);
 const productAmount = cart.getProductAmount(id);

 return (
  <>
   <Card>
    <Box sx={{ display: "flex", flexDirection: "column", flex: "1 1 auto", padding: "25px" }}>
     <Box sx={{ display: "flex", flexDirection: "row", flex: "1 1 auto", justifyContent: "space-between", alignItems: "center" }}>
      <Box>
       <Link to={`/product/${data.id}`}>
        <Typography variant="h3" color="white">
         {data.title}
        </Typography>
       </Link>
      </Box>
      <Box>
       <IconButton variant="contained" color="error" onClick={() => cart.deleteFromCart(data.id)}>
        <DeleteForeverIcon fontSize="small" />
       </IconButton>
      </Box>
     </Box>
     <Box sx={{ display: "flex", flexDirection: "row", flex: "1 1 auto", justifyContent: "space-between", alignItems: "center", marginTop: "15px" }}>
      <Box>
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
      </Box>

      <Box>
       <IconButton variant="contained" color="warning" onClick={() => cart.removeFromCart(data.id)}>
        <RemoveIcon fontSize="small" />
       </IconButton>
       {productAmount}
       <IconButton variant="contained" color="success" onClick={() => cart.addToCart(data.id)}>
        <AddIcon fontSize="small" />
       </IconButton>
      </Box>
     </Box>
    </Box>
   </Card>
  </>
 );
};

export default CartCard;
