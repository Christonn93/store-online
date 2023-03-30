// Importing React
import React from "react";

// Importing MUI
import { Alert, Snackbar, useMediaQuery, useTheme } from "@mui/material";

const ConfirmSnackBar = ({ open, setOpen }) => {
 const device = useTheme();
 const isMobile = useMediaQuery(device.breakpoints.down("md"));

 const handleClose = () => {
  setOpen(false);
 };

 const display = (
  <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: "100%", color: "white" }}>
   Product added to cart
  </Alert>
 );

 return (
  <>
   {isMobile ? (
    <Snackbar open={open} autoHideDuration={2500} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
     {display}
    </Snackbar>
   ) : (
    <Snackbar open={open} autoHideDuration={2500} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
     {display}
    </Snackbar>
   )}
  </>
 );
};

export default ConfirmSnackBar;
