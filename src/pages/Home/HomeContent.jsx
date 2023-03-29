// Importing React
import React from "react";

// Importing MUI
import { Box } from "@mui/material";

const HomeContent = () => {
 return (
  <Box
   elevation={0}
   sx={{
    textAlign: "center",
    width: "100%",
    padding: "15px",
   }}
  >
   <h1>Welcome to Store Online</h1>
   <p>
    Welcome to our online store! We're excited to offer you a wide variety of high-quality products at competitive prices. Whether you're looking for the latest electronics, trendy fashion, or unique
    home decor, we have something for everyone.
   </p>
   <p>
    Our user-friendly platform is designed to make your shopping experience as smooth and convenient as possible, with easy navigation and secure checkout. Plus, our knowledgeable and friendly
    customer service team is always ready to assist you with any questions or concerns you may have. So go ahead and browse our extensive selection of products, and treat yourself to something special
    today!
   </p>
  </Box>
 );
};

export default HomeContent;
