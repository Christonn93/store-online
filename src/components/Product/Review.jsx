import React from "react";

// Importing mui items
import { Card, Typography, CardContent, Rating } from "@mui/material";

const Review = ({ data }) => {
 return (
  <>
   {data === [] ? (
    <>There is no review data for this product</>
   ) : (
    <Card key={data.id}>
     <CardContent>
      <Rating name="read-only" value={data.rating} readOnly />
      <Typography gutterBottom variant="h5" component="div">
       {data.username}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {data.description}
      </Typography>
     </CardContent>
    </Card>
   )}
  </>
 );
};

export default Review;
