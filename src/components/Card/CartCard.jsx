// Importing react
import React, { useContext } from "react";

// Importing MUI
import { Card, CardMedia, Box, CardContent, IconButton } from "@mui/material";

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
  <Card
   sx={{
    display: "flex",
    height: "150",
   }}
  >
   <CardMedia component="img" image={data.imageUrl} alt={data.title} sx={{ width: 200 }} style={null}/>
   <Box sx={{ display: "flex", flexDirection: "column", flex: "1 1 auto", padding: "10px" }}>
    <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
     <h3>{data.title}</h3>
     <IconButton variant="contained" color="error" onClick={() => cart.deleteFromCart(data.id)}>
      <DeleteForeverIcon fontSize="small" />
     </IconButton>
    </CardContent>
    <CardContent sx={{ display: "flex", flex: "1 1 auto" }}>
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
    </CardContent>
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "5px" }}>
     <IconButton variant="contained" color="warning" onClick={() => cart.removeFromCart(data.id)}>
      <RemoveIcon fontSize="small" />
     </IconButton>
     {productAmount}
     <IconButton variant="contained" color="success" onClick={() => cart.addToCart(data.id)}>
      <AddIcon fontSize="small" />
     </IconButton>
    </Box>
   </Box>
  </Card>
 );
};

export default CartCard;
