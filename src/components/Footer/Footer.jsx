// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Box, Container, Grid, Stack, useTheme } from "@mui/material";

// Importing MUI Icons
import CopyrightIcon from "@mui/icons-material/Copyright";

// Importing components
import LogoDisplay from "../CompanyLogo/LogoDisplay";

// Importing style
import { StyledLinkBlack, StyledLinkWhite, Inline } from "../../layout/CustomStyling";

/**
 *
 * @returns
 */
const Footer = () => {
 const theme = useTheme();
 const date = new Date();
 const year = date.getFullYear();

 return (
  <Box sx={{
    width: "100%",
    marginTop: 3,
    padding: 2
  }}>
   <Container>
    <Grid container spacing={2} columns={{ xs: 2, md: 12 }} rowSpacing={3} alignItems="center">
     <Grid item xs alignItems="center" align="center" order={{ xs: 1, md: 1, lg: 1 }}>
      <LogoDisplay themeData={theme} />
     </Grid>
     <Grid item xs={6} alignItems="center" align="center" order={{ xs: 3, md: 3, lg: 2 }}>
      <p style={Inline}>
       <CopyrightIcon /> Store Online, {year}
      </p>
     </Grid>
     <Grid item xs alignItems="center" align="center" order={{ xs: 2, md: 2, lg: 3 }}>
      <Stack spacing={2}>
       {theme.palette.mode === "dark" ? (
        <Link to={"/contact"} style={StyledLinkWhite}>
         Contact
        </Link>
       ) : (
        <Link to={"/contact"} style={StyledLinkBlack}>
         Contact
        </Link>
       )}

       {theme.palette.mode === "dark" ? (
        <Link to={"/privacy"} style={StyledLinkWhite}>
         Privacy Policy
        </Link>
       ) : (
        <Link to={"/privacy"} style={StyledLinkBlack}>
         Privacy Policy
        </Link>
       )}
      </Stack>
     </Grid>
    </Grid>
   </Container>
  </Box>
 );
};

export default Footer;
