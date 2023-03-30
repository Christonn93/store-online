// Importing React
import React from "react";

// Importing MUI
import { Rating } from "@mui/material";

const StarRating = (data) => {
 return <Rating name="read-only" value={data.rating} readOnly />;
};

export default StarRating;
