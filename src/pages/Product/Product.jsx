// Importing react
import React, { useContext } from "react";
import { useParams } from "react-router-dom";

// Importing MUI
import { Box, Container } from "@mui/material";

// Importing utils// Importing utils
import BasicBreadcrumbs from "../../utils/BreadCrumbs";
import LoadingAnimation from "../../utils/LoadingAnimation";

// Importing hook
import ApiHook from "../../api/ApiHooks";

// Importing cart context
import { CartContext } from "../../context/cartContext";
import ProductDetails from "../../components/Product/ProductDetails";

const Product = () => {
 let { id } = useParams();
 const { data, isLoading, isError } = ApiHook(`https://api.noroff.dev/api/v1/online-shop/${id}`);

 // Setting up the cart function's
 const cart = useContext(CartContext);
 const productAmount = cart.getProductAmount(data.id);

 return (
  <Box>
   <Container sx={{ mb: 3 }}>
    <BasicBreadcrumbs title={data.title} page={data.title} description={data.description} />
   </Container>
   {isLoading ? <LoadingAnimation /> : <ProductDetails data={data} isError={isError} productAmount={productAmount} cart={cart} />}
  </Box>
 );
};

export default Product;
