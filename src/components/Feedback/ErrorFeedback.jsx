// Importing React
import * as React from "react";

// Importing MUI
import { Alert, AlertTitle, Typography } from "@mui/material";

/**
 *
 * @param {title, body, variant}
 * @returns Error feedback to user if error have appeared.
 */
const ErrorFeedback = ({ title, body, variant }) => {
 return (
  <Alert variant={variant} severity="error">
   <AlertTitle
    variant="h3"
    sx={{
     textAlign: "start",
    }}
   >
    {title}
   </AlertTitle>
   <Typography variant="body1">{body}</Typography>
  </Alert>
 );
};

export default ErrorFeedback;
