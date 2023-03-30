// Importing React
import React, { useState } from "react";

// Importing MUI
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, Stack, TextField } from "@mui/material";

const ReviewForm = () => {
 const [open, setOpen] = useState(false);

 const handleClickOpen = () => {
  setOpen(true);
 };

 const handleClose = () => {
  setOpen(false);
 };
 return (
  <Box
   sx={{
    float: "right",
   }}
  >
   <Button onClick={handleClickOpen} variant="outlined" color="success">
    Add product review
   </Button>
   <Dialog open={open} onClose={handleClose}>
    <DialogContent>
     <Stack spacing={3}>
      <DialogContentText color="text">Add your review on this product. If you have any issues with the product, please consider contacting us so we can resolve the issues</DialogContentText>
      <TextField id="name" label="Name" type="text" fullWidth variant="outlined" placeholder="Name" />
      <TextField id="review" label="Review" type="text" fullWidth variant="outlined" placeholder="Review" />
     </Stack>
    </DialogContent>
    <DialogActions>
     <Button onClick={handleClose} variant="outlined" color="error">
      Cancel
     </Button>
     <Button onClick={handleClose} variant="outlined" color="success">
      Add review
     </Button>
    </DialogActions>
   </Dialog>
  </Box>
 );
};

export default ReviewForm;
