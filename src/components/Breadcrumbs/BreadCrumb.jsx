// Importing React
import * as React from "react";
import { Link } from "react-router-dom";

// Importing MUI
import {Typography, Breadcrumbs, useTheme } from "@mui/material";

// Importing function
import { updateHead } from "../../js/headUpdater";

/**
 * 
 * @param {props} {props.page}
 * @returns Breadcrumbs for pages
 */
function BasicBreadcrumbs(props) {
    const theme = useTheme()
 updateHead(props.title, props.description);

 return (
  <Breadcrumbs aria-label="breadcrumb" color="text.primary">
   <Link to="/" className={theme.palette.mode === "dark" ? "breadcrumbs-nav " : "breadcrumbs-nav-light"}>
    Home
   </Link>
   <Typography color="text.primary">{props.page}</Typography>
  </Breadcrumbs>
 );
}

export default BasicBreadcrumbs;
