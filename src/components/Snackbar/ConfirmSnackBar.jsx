// Importing React
import React from "react";

// Importing MUI
import { Alert, Snackbar } from "@mui/material";

const ConfirmSnackBar = ({ open, setOpen }) => {
 const handleClose = () => {
  setOpen(false);
 };

 return <Snackbar open={open} autoHideDuration={2500} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
    <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%', color: "white" }}>
    Product added to cart
  </Alert>
 </Snackbar>;
};

export default ConfirmSnackBar;
