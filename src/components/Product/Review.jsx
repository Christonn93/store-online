// Importing React
import React from "react";

// Importing MUI
import { Card, Typography, CardContent, Rating, useTheme } from "@mui/material";

/**
 *
 * @param {{data}} data Needs data prop
 * @returns Display for review content for product
 */
const Review = ({ data }) => {
 const theme = useTheme();
 return (
  <>
   {data ? (
    <Card key={data.id}>
     <CardContent>
      <Rating name="read-only" value={data.rating} readOnly />
      <Typography gutterBottom variant="h5" component="div">
       {data.username}
      </Typography>
      <Typography
       variant="body2"
       sx={{
        color: theme.palette.mode === "dark" ? "white" : "black",
       }}
      >
       {data.description}
      </Typography>
     </CardContent>
    </Card>
   ) : (
    <p>There is no review data for this product</p>
   )}
  </>
 );
};

export default Review;
