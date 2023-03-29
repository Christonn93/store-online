// Importing React
import React from "react";

// Importing mui items
import { Alert, AlertTitle } from "@mui/material";
import { Box } from "@mui/system";

// TODO
/**
 * 
 * @param {*} props 
 * @returns 
 */
const ErrorResponse = (props) => {
 return (
  <Box>
   <Alert severity={props.severity}>
    <AlertTitle>{props.title}</AlertTitle>
    <p>{props.content}</p>
   </Alert>
  </Box>
 );
};

export default ErrorResponse;
