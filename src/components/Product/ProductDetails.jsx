// Importing React
import React from "react";

// Importing MUI
import { Box, Grid, Paper } from "@mui/material";

// Importing utils
import ErrorFeedback from "../Feedback/ErrorFeedback";

// Importing components
import Review from "./Review";
import Description from "./Description";
import Price from "./Price";
import Image from "./Image";
import Buttons from "./Buttons";
import ReviewForm from "../Form/ReviewForm";

// Importing style
import { Line } from "../../layout/CustomStyling";

/**
 *
 * @param {*} data data about product
 * @param {*} isError Error handling if request for data fails
 * @param {*} productAmount
 * @param {*} cart cartContext
 * @returns Details about the product to be displayed on the product page
 */
const ProductDetails = ({ data, isError, productAmount, cart }) => {
 const { title, tags, description, price, discountedPrice, imageUrl, reviews } = data;

 return (
  <>
   {isError ? (
    <ErrorFeedback variant="outlined" title="Oh NO!" body="Obs. We could not load your data. Please try again later" />
   ) : (
    <Box sx={{ flexGrow: 1 }} id="productBox">
     <Paper elevation={0} square={false}>
      <Box p={2}>
       <Grid container spacing={2} columns={{ xs: 1, md: 10, lg: 12 }} order={{ xs: 1, sm: 2 }} justifyContent={"center"}>
        <Grid item xs={12} order={{ xs: 1, md: 1, lg: 1 }}>
         <h1>{title}</h1>
         <Line />
         <p>Category: {tags && tags.join(", ")}</p>
        </Grid>
        <Grid item xs={6} order={{ xs: 3, md: 3, lg: 2 }}>
         <Grid container direction="column" spacing={2}>
          <Grid item marginBottom={3}>
           <h4>Product description:</h4>
           <Line />
           <Description data={description} />
          </Grid>
          <Grid container alignItems="center" justifyContent={"space-between"} spacing={1} marginBottom={2} p={2} border>
           <Grid item>
            <Price price={price} discountedPrice={discountedPrice} />
           </Grid>
           <Grid item>
            <Buttons productAmount={productAmount} data={data} cart={cart} />
           </Grid>
          </Grid>
         </Grid>
        </Grid>

        <Grid item xs={6} order={{ xs: 2, md: 2 }}>
         <Grid container direction="column" spacing={2} alignContent="center">
          <Grid item>
           <Image data={imageUrl} />
          </Grid>
         </Grid>
        </Grid>
        <Grid item xs={12} order={{ xs: 4, md: 4 }}>
         <Line />
         <Grid item xs={12}>
          <h3>Reviews</h3>
         </Grid>
         <Grid item xs={12}>
          <ReviewForm />
          <Grid container direction="column" spacing={2} rowSpacing={2}>
           {reviews &&
            reviews.map((review) => {
             return (
              <Grid item xs={12} key={review.id}>
               <Review data={review} />
              </Grid>
             );
            })}
          </Grid>
         </Grid>
        </Grid>
       </Grid>
      </Box>
     </Paper>
    </Box>
   )}
  </>
 );
};

export default ProductDetails;
