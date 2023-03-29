// Importing React
import React from "react";

// Importing MUI
import { Container } from "@mui/material";

// Importing components
import SuccessFeedback from "../../components/Feedback/SuccessFeedback";

/**
 *
 * @returns feedback to the user when landing on the page
 */
const Checkout = () => {
 return (
  <Container maxWidth="md" sx={{ marginTop: "15%" }}>
   <SuccessFeedback title="Checkout success" body={"Your items is on the way!"} body2={"We hope that you will be happy with you order"} link="/" variant="outlined" option={null} elevation={3} />
  </Container>
 );
};

export default Checkout;
