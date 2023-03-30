// Import react
import React from "react";

// Importing MUI
import { IconButton } from "@mui/material";

// Importing MUI Icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const ThemeToggler = ({ theme, colorMode }) => {
 return <IconButton onClick={colorMode.toggleColorMode}>{theme.palette.mode === "dark" ? <DarkModeOutlinedIcon color="navText"/> : <LightModeOutlinedIcon color="navText"/>}</IconButton>;
};

export default ThemeToggler;
