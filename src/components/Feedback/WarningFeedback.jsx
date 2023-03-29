// Importing React
import * as React from "react";

// Importing MUI
import { Alert, Typography } from "@mui/material";

/**
 *
 * @param {title, body, variant}
 * @returns Warning feedback to user.
 */
const WarningFeedback = ({ title, body, variant }) => {
 return (
  <Alert variant={variant} severity="warning" onClose={() => {}}>
   <Typography variant="h3">{title}</Typography>
   <Typography variant="body1">{body}</Typography>
  </Alert>
 );
};

export default WarningFeedback;
