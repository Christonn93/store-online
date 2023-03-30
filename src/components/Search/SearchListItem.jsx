// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Button } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// Importing style
import { linkStyle, p, List } from "../../layout/CustomStyling";

// TODO - jsDocs
const SearchListItem = ({ props, option }) => {
 return (
  <li {...props} key={option.id} style={List}>
   <p style={p}>{option.label}</p>
   <Link to={`/product/${option.id}`} style={linkStyle}>
    <Button variant="outlined" color="secondary">
     View <ArrowRightIcon fontSize="small" />
    </Button>
   </Link>
  </li>
 );
};

export default SearchListItem;
