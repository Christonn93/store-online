// Importing React
import React, { useContext } from "react";
import { useParams } from "react-router-dom";

// Importing MUI
import { Box, Container } from "@mui/material";

// Importing components
import ProductDetails from "../../components/Product/ProductDetails";
import Loading from "../../components/Loading/Loading";

// Importing utils
import BasicBreadcrumbs from "../../components/Breadcrumbs/BreadCrumb";

// Importing functions
import ApiHook from "../../api/ApiHooks";

// Importing cart context
import { CartContext } from "../../context/cartContext";

// TODO
/**
 * 
 * @returns 
 */
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
   {isLoading ? <Loading /> : <ProductDetails data={data} isError={isError} productAmount={productAmount} cart={cart} />}
  </Box>
 );
};

export default Product;
