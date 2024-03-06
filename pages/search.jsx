import React, { useEffect, useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import api from "../utils/api";
import styled from "styled-components";
import { toast } from "react-toastify";
import search from "../assets/searchfailed.png";
import Image from "next/image";
import SearchCard from "../components/searchCard/searchCard";
const RealEstateSearchBox = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    setLocation("");
    setData("");
    return () => {
      setLocation(null);
      setData(null);
    };
  }, []);

  const handleSearch = async () => {
    if (!location || location === "") {
      toast.error("fill input");
    } else {
      try {
        const res = await api.get(
          `https://jeffybackend.jeff-realty.com/api/search?keyword=${location}`
        );
        setData(res.data);
      } catch (error) {}
    }
  };

  return (
    <StyledSearch>
      <Typography variant="h4">Search</Typography>

      <TextField
        label="Location"
        variant="outlined"
        fullWidth
        helperText={"Type location"}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>

      <main className="container">
        {data?.house?.length === 0 && data?.land?.length === 0 && (
          <>
            <div className="empty">
              <Image src={search} />
            </div>
          </>
        )}

        <main>
          {data?.land?.map((item) => (
            <SearchCard data={item} />
          ))}
        </main>
        <main>
          {data?.house?.map((item) => (
            <SearchCard data={item} />
          ))}
        </main>
      </main>
    </StyledSearch>
  );
};

export default RealEstateSearchBox;

const StyledSearch = styled.section`
  width: 60%;
  height: auto;
  margin: auto;
  padding-top: 50px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30vh;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 95%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;
