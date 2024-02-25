import React, { useEffect, useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import api from "../utils/api";
import styled from "styled-components";
import { toast } from "react-toastify";
import search from "../assets/searchfailed.png";
import Image from "next/image";
import Card from "../components/card/Card";
import HouseModel from "../components/perModel/houseModel";
const RealEstateSearchBox = () => {
  const [location, setLocation] = useState("");
  const [propType, setPropType] = useState("houses");
  const [data, setData] = useState("");
  console.log("🚀 ~ RealEstateSearchBox ~ data:", data);

  useEffect(() => {
    setLocation("");
    setPropType("houses");
    setData("");
    return () => {
      setLocation(null);
      setPropType(null);
      setData(null);
    };
  }, []);

  const handleSearch = async () => {
    if (!location || location === "") {
      toast.error("fill input");
    } else {
      try {
        const res = await api.get(
          `https://jeffybackend.jeff-realty.com/api/${propType}?filters[title][$contains]=${location}&filters[streetName][$contains]=${location}&filters[city][$contains]=${location}&filters[landmark][$contains]=${location}&filters[LGA][$contains]=${location}&populate[video][fields][0]=url&populate[image][fields][0]=url&fields[0]=*`
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
      <TextField
        select
        type={"select"}
        sx={{
          marginTop: "20px",
        }}
        defaultValue={"houses"}
        SelectProps={{
          native: true,
        }}
        helperText="select type of property to search"
        name={"search"}
        onChange={(e) => setPropType(e.target.value)}
      >
        <option value={"houses"}>Houses</option>
        <option value={"lands"}>Lands</option>
      </TextField>

      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>

      <main className="container">
        {data.length === 0 ? (
          <div className="empty">
            <Image src={search} />
          </div>
        ) : data.length !== 0 && propType === "lands" ? (
          <main>
            {data.data.map((item) => (
              <Card data={item} />
            ))}
          </main>
        ) : data.length !== 0 && propType === "lands" ? (
          <main>
            {data.data.map((item) => (
              <HouseModel data={item} />
            ))}
          </main>
        ) : null}
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
