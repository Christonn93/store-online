// Importing React
import React from "react";
import styled from "styled-components";

// Importing MUI
import { Chip } from "@mui/material";
import { priceDiscount } from "../../js/discountCalculation";

// Adding style
const ItemImage = styled.div`
 height: 200px;
 border-radius: 0;
 position: relative;
 margin-bottom: 15px;

 img {
  width: 100%;
  height: 200px;
  object-fit: cover;
 }
`;

const Sale = styled.span`
 position: absolute;
 background-color: red;
 top: -0.5rem;
 left: -0.5rem;
 filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.2));
 font-size: 18px;
 text-align: center;
 border-radius: 5px;
`;

const CardImage = ({ product, state }) => {
 const priceOff = priceDiscount(product);

 const sale = (
  <ItemImage>
   <Sale>
    <Chip
     label={"SALE " + priceOff + "% off"}
     size="small"
     sx={{
      color: "white",
      fontSize: "18px",
      filter: "drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.2))",
     }}
    />
   </Sale>
   <img src={product.imageUrl} alt={product.title} loading={"lazy"} />
  </ItemImage>
 );

 const regular = (
  <ItemImage>
   <img src={product.imageUrl} alt={product.title} loading={"lazy"} />
  </ItemImage>
 );

 return <>{state === true ? sale : regular}</>;
};

export default CardImage;
