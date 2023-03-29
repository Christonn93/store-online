// Importing React
import React from "react";

// Importing MUI

import { Stack } from "@mui/material";

// Importing components
import SuccessFeedback from "../../components/Feedback/SuccessFeedback";

const Print = {
 color: "Orange",
 textDecoration: "underline",
 cursor: "pointer",
};

// TODO -jsDocs
/**
 *
 */
const Checkout = () => {
 return (
  <SuccessFeedback
   title="Checkout success"
   body={
    <Stack spacing={1}>
     <p>Your items is on the way!</p>
     <p>We hope that you will be happy with you order</p>
     <p>
      {" "}
      Download your receipt{" "}
      <span
       style={Print}
       onClick={() => {
        alert("Sorry. There is currently a bug in the system. Contact us for your receipt");
       }}
      >
       {" "}
       HERE{" "}
      </span>
     </p>
    </Stack>
   }
   link="/"
   variant="outlined"
   option={null}
   elevation={3}
  />
 );
};

export default Checkout;
