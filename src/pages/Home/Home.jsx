// Importing React
import React, { useState } from "react";

// Importing MUI
import { Container, Stack, Divider, Grid, Box } from "@mui/material";

// Importing components
import ProductCard from "../../components/Card/ProductCard";
import SearchBar from "../../components/Search/Search";
import Loading from "../../components/Loading/Loading";
import ErrorFeedback from "../../components/Feedback/ErrorFeedback";

// Importing page content
import HomeContent from "./HomeContent";

// Importing function
import ApiHook from "../../api/ApiHooks";
import { updateHead } from "../../js/headUpdater";

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

 return (
  <Container
   align="center"
   sx={{
    margin: "20px auto",
    maxWidth: "100%",
   }}
  >
   <Stack spacing={{ xs: 3, sm: 2, md: 4 }}>
    <HomeContent />
    <Divider />
    <h2>Our products</h2>
    <SearchBar searchInput={search} setSearchInput={setSearch} data={data} />
    <Box sx={{ flexGrow: 1 }}>
     {isLoading ? (
      <Loading />
     ) : isError ? (
      <ErrorFeedback title="Obs, there is a bug in the system" body="We could not load your data. Please try again later" variant="outlined" />
     ) : (
      <Grid container spacing={2} columns={{ xs: 2, md: 12 }} rowSpacing={3} justifyContent={{ xs: "center", md: "start" }} alignItems="center">
       {data
        .filter((product) => {
         return search.toLowerCase() === product.title.toLowerCase() ? product : product.title.toLowerCase().includes(search);
        })
        .map((product) => (
         <Grid item xs={2} sm={4} md={4} key={product.id}>
          <ProductCard product={product} />
         </Grid>
        ))}
      </Grid>
     )}
    </Box>
   </Stack>
  </Container>
 );
};

export default Home;
