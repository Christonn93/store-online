// Importing React
import React from "react";

// Importing MUI
import { Grid } from "@mui/material";

/**
 *
 * @param {*} Children Add <Grid Item xs={}>"Your content"</Grid>
 * @returns
 */
const Gridwrapper = ({ children }) => {
 return (
  <Grid container spacing={2} columns={{ xs: 2, md: 12 }} rowSpacing={3} justifyContent={{ xs: "center", md: "start" }} alignItems="center">
   {children}
  </Grid>
 );
};

export default Gridwrapper;
