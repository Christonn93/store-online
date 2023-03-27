// Importing react
import React, { useState } from "react";

// Importing mui items
import { Container, Stack, Divider, Grid, Box } from "@mui/material";

// Importing components
import ProductCard from "../../components/Card/ProductCard";
import SearchBar from "../../components/Search/Search";
import { updateHead } from "../../js/headUpdater";

// Importing api call to get products
import ApiHook from "../../api/ApiHooks";
import Loading from "../../components/Loading/Loading";
import ErrorResponse from "../../utils/ErrorResponse";

const pageHeader = {
 margin: "0",
 padding: "0",
};




/**
 * Home.
 * This function is rendering content that will display in the home page of the site.
 *
 * @returns Content on the home page
 */
const Home = () => {
 const [search, setSearch] = useState("");
 const { data, isLoading, isError } = ApiHook("https://api.noroff.dev/api/v1/online-shop");

 updateHead("Home", "Store Online home page. We offer a range of items that will suite your needs");

 if (isError) {
  return <ErrorResponse severity="error" title="Oh NO!" content="Obs. We could not load your data. Please try again later" />;
 }

 return (
  <>
  <Container
   align="center"
   sx={{
    margin: "20px auto",
    maxWidth: "100%"
   }}
  >
   <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
    <Box
     elevation={0}
     sx={{
      textAlign: "center",
      width: "100%",
      padding: "15px",
     }}
    >
     <h1 style={pageHeader}>Welcome to Store Online</h1>
     <p>
      Welcome to our online store! We're excited to offer you a wide variety of high-quality products at competitive prices. Whether you're looking for the latest electronics, trendy fashion, or
      unique home decor, we have something for everyone.
     </p>
     <p>
      Our user-friendly platform is designed to make your shopping experience as smooth and convenient as possible, with easy navigation and secure checkout. Plus, our knowledgeable and friendly
      customer service team is always ready to assist you with any questions or concerns you may have. So go ahead and browse our extensive selection of products, and treat yourself to something
      special today!
     </p>
    </Box>
    <Divider />
    <h2 style={pageHeader}>Our products</h2>
    <SearchBar searchInput={search} setSearchInput={setSearch} data={data} />
    <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={2} columns={{ xs: 2, md: 12 }} rowSpacing={3} justifyContent={{ xs: "center", md: "start" }} alignItems="center">
      {data
       .filter((product) => {
        return search.toLowerCase() === product.title.toLowerCase() ? product : product.title.toLowerCase().includes(search);
       })
       .map((product) => (
        <Grid item xs={2} sm={4} md={4} key={product.id}>
         {isLoading ? <Loading /> : <ProductCard product={product} />}
        </Grid>
       ))}
     </Grid>
    </Box>
   </Stack>
  </Container>
  </>

 );
};

export default Home;
