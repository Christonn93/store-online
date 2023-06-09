// Importing React
import React from "react";

// Importing MUI
import { Box, Container } from "@mui/material";

// Importing components
import Navbar from "../Navbar/Navbar";

/**
 * 
 * @returns Page header whit navigation
 */
const PageHeader = () => {
 return (
  <Box width={"100%"} >
   <Container>
    <Navbar />
   </Container>
  </Box>
 );
};

export default PageHeader;
