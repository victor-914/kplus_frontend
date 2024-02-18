import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import styled from "styled-components";
const RealEstateSearchBox = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    // You can perform validation here before executing the search
    onSearch({ location, minPrice, maxPrice });
  };

  return (
    <StyledSearch>
      {/* <header>Search</header> */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}>
          <TextField
            label="Location"
            variant="outlined"
            helperText="search by location"
            placeholder="search by location"
            fullWidth
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Min Price"
            variant="outlined"
            fullWidth
            helperText={"specify minimum price range"}
            type="number"
            placeholder=""
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Max Price"
            variant="outlined"
            helperText={"specify maximum price range"}
            fullWidth
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" 
           sx={{
            backgroundColor:"#000 !important"
           }}
          onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>
    </StyledSearch>
  );
};

export default RealEstateSearchBox;

const StyledSearch = styled.section`
  width: 60%;
  height: 100vh;
  margin: auto;
  padding-top: 50px;
`;
