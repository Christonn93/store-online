// Importing React
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { CardActions, Card, CardContent, Typography } from "@mui/material";

// Importing context
import { CartContext } from "../../context/cartContext";

// Importing components
import CardButton from "../Button/CardButton";
import CardImage from "../Image/CardImage";
import CardPrice from "../Price/CardPrice";

// Adding some custom style to elements
const linkStyle = {
 textDecoration: "none",
 color: "black",
};

/**
 * ProductCard
 *
 * @param {*} { product }
 * @returns UI for product card
 */
const ProductCard = ({ product }) => {
 // Setting up the cart function's
 const cart = useContext(CartContext);
 const productAmount = cart.getProductAmount(product.id);
 return (
  <Card
   sx={{
    maxWidth: 300,
    overflow: "visible",
    textAlign: "start",
    backgroundColor: "whitesmoke",
   }}
   key={product.id}
  >
   <Link to={`/product/${product.id}`} style={linkStyle}>
    {product.discountedPrice < product.price ? <CardImage product={product} state={true} /> : <CardImage product={product} state={false} />}
    <CardContent>
     <Typography gutterBottom variant="h4" component="div">
      {product.title}
     </Typography>
     {product.discountedPrice < product.price ? <CardPrice product={product} state={true} /> : <CardPrice product={product} state={false} />}
    </CardContent>
   </Link>
   <CardActions>
    {productAmount > 0 ? (
     <CardButton product={product} productAmount={productAmount} cart={cart} state={true} />
    ) : (
     <CardButton product={product} productAmount={productAmount} cart={cart} state={false} />
    )}
   </CardActions>
  </Card>
 );
};

export default ProductCard;
