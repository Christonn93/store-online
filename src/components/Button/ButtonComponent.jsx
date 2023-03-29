// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Button } from "@mui/material";

/**
 *
 * @param {*} props variant, buttonText, link, color, onClick, disabledState
 * @returns MUI button with props to control the button
 * 
 * @example 
 * <Button component={Link} to={link} variant={variant} color={color} onClick={onClick} disabled={disabledState}>
   {buttonText}
  </Button>
 */
const ButtonComponent = (props) => {
 const variant = props.variant;
 const buttonText = props.buttonText;
 const link = props.link;
 const color = props.color;
 const onClick = props.onClick;
 const disabledState = props.disabledState;

 return (
  <Button component={Link} to={link} variant={variant} color={color} onClick={onClick} disabled={disabledState}>
   {buttonText}
  </Button>
 );
};

export default ButtonComponent;
