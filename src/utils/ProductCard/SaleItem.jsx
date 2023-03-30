// Importing React
import React from "react";

// Importing MUI
import { Chip } from "@mui/material";
import { priceDiscount } from "../../js/discountCalculation";

// Importing style
import { ItemImage, Sale } from "../../layout/CustomStyling";

/**
 * SaleItem
 *
 * @param {*} { product }
 * @returns UI if product is on sale
 */
const SaleItem = ({ product }) => {
 const priceOff = priceDiscount(product);
 return (
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
};

export default SaleItem;
