// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing assets
import LogoDark from "../../assets/images/white-noBG.png";
import Logo from "../../assets/images/color-noBG.png";

// Importing style
import { CompanyLogo } from "../../layout/CustomStyling";

const LogoDisplay = ({ themeData }) => {
 return (
  <>
   <Link to="/">{themeData.palette.mode === "dark" ? <CompanyLogo src={LogoDark} alt="Logo" loading="lazy" /> : <CompanyLogo src={Logo} alt="Logo" loading="lazy" />}</Link>
  </>
 );
};

export default LogoDisplay;
