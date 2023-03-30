// Importing React
import React, { useContext } from "react";

// Importing MUI
import { Grid } from "@mui/material";

// Importing function
import ApiHook from "../../api/ApiHooks";

// Importing context
import { CartContext } from "../../context/cartContext";

/**
 * 
 * @param {num1, num2}   
 * @returns values to use in the itemPrice function
 */
const calculation = (num1, num2) => {
 return num1 * num2;
};

/**
 * 
 * @param {*} data 
 * @param {*} productAmount 
 * @returns itemPrice calculated
 */
export const itemPrice = (data, productAmount) => {
 return calculation(data.discountedPrice, productAmount).toFixed(2);
};

/**
 * 
 * @param {*} id Requiring product id  
 * @returns ItemListing
 */
const ItemListing = ({ id }) => {
 const { data } = ApiHook(`https://api.noroff.dev/api/v1/online-shop/${id}`);
 const cart = useContext(CartContext);
 const productAmount = cart.getProductAmount(id);

 const price = itemPrice(data, productAmount);

 return (
  <>
   <Grid container spacing={4} justifyContent="space-between">
    <Grid item xs={5}>
     {data.title}
    </Grid>
    <Grid item xs={3} textAlign="center">
     {productAmount}
    </Grid>
    <Grid item xs={4} textAlign="end">
     {price} ,-
    </Grid>
   </Grid>
  </>
 );
};

export default ItemListing;
