// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Button, useTheme } from "@mui/material";

// Importing MUI Icons
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// Importing style
import { linkStyle, p, List } from "../../layout/CustomStyling";

/**
 *
 * @param {Props, option}
 * @returns return list item in autocomplete search bar
 */
const SearchListItem = ({ props, option }) => {
 const theme = useTheme();
 return (
  <li {...props} key={option.id} style={List}>
   <p style={p}>{option.label}</p>
   <Link to={`/product/${option.id}`} style={linkStyle}>
    <Button variant="outlined" color={theme.palette.mode === "dark" ? "secondary" : "primary"}>
     View <ArrowRightIcon fontSize="small" />
    </Button>
   </Link>
  </li>
 );
};

export default SearchListItem;
