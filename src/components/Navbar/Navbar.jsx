// Importing React
import React, { useContext } from "react";

// Importing MUI
import { Toolbar, CssBaseline, useMediaQuery, useTheme, Box, Grid, Stack } from "@mui/material";

// Importing components
import ThemeToggler from "../Button/ThemeToggler";
import NavigationLink from "./NavigationLink";
import LogoDisplay from "../CompanyLogo/LogoDisplay";

// Importing context
import { CartContext } from "../../context/cartContext";

// Importing style
import { ColorModeContext } from "../../layout/Theme";

/**
 * The main navigation for the site
 *
 * @returns page navigation
 */
const Navbar = () => {
 const theme = useTheme();
 const colorMode = useContext(ColorModeContext);
 const cart = useContext(CartContext);
 const device = useTheme();
 const isMobile = useMediaQuery(device.breakpoints.down("md"));

 // Adding a new function to the CartContext
 const cartTotal = cart.items.reduce((sum, product) => sum + product.quantity, 0);

 return (
  <Box width={"100%"}>
   <CssBaseline />
   <Toolbar>
    <Grid container justifyContent={"space-between"} alignItems={"center"}>
     <Grid item>
      <LogoDisplay themeData={theme} />
     </Grid>
     <Grid item>
      {isMobile ? (
       <></>
      ) : (
       <>
        <Stack direction={"row"} spacing={3}>
         <NavigationLink target="/" title="Home" />
         <NavigationLink target="/contact" title="Contact" />
         <NavigationLink target="/cart" title="Cart" state={true} cartTotal={cartTotal} />
         <ThemeToggler theme={theme} colorMode={colorMode} />
        </Stack>
       </>
      )}
     </Grid>
    </Grid>
   </Toolbar>
  </Box>
 );
};

export default Navbar;
