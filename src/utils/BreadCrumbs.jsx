// Importing React
import * as React from "react";
import { Link } from "react-router-dom";

// Importing MUI
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

// Importing function
import { updateHead } from "../js/headUpdater";

// TODO
/**
 * 
 * @param {*} props 
 * @returns 
 */
function BasicBreadcrumbs(props) {
 updateHead(props.title, props.description);

 return (
  <Breadcrumbs aria-label="breadcrumb">
   <Link to="/">
    Home
   </Link>
   <Typography color="text.primary">{props.page}</Typography>
  </Breadcrumbs>
 );
}

export default BasicBreadcrumbs;
