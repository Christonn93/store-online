// Importing React
import React from "react";

// Importing MUI
import { Box } from "@mui/material";

// Importing Style
import "./Loading.css"

// TODO - jsDocs
const Loading = () => {
 return (
  <Box boxShadow="outline" p="6" rounded="md" bg="white" margin={5}>
   <Box className="loading-box">
    <Box className="loader">
     <Box className="loader-wheel"></Box>
     <Box className="loader-text"></Box>
    </Box>
   </Box>
  </Box>
 );
};

export default Loading;