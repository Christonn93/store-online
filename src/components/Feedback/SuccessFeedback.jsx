// Importing React
import React from "react";

// Importing MUI
import { Alert, AlertTitle, Container, Box, Typography } from "@mui/material";

// Importing component
import ButtonComponent from "../Button/ButtonComponent";

/**
 *
 * @param { title, body, option, elevation, variant }
 * @returns Success feedback to user.
 */
const SuccessFeedback = ({ title, body, option, elevation, variant }) => {
 return (
  <Alert severity="success" elevation={elevation} variant={variant}>
   <AlertTitle>{title}</AlertTitle>
   <Container>
    <Typography variant="body1">{body}</Typography>
    <Box sx={{ mt: 5 }}>
     <ButtonComponent variant="outlined" buttonText="Back to home" link="/" color="success" />
    </Box>
    {option}
   </Container>
  </Alert>
 );
};

export default SuccessFeedback;
