import React from "react";
import carousel1 from "../../assets/carousel-1.jpg";
import Image from "next/image";
import styled from "styled-components";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
function HomeCarousel() {
  return (
    <StyledSearch>
      <div className="cover"></div>

      <main className="main">
        <h1>Buy, Sell and Rent Properties.</h1>
        <h3>
          At Jeffy Realty, we provide you with the best platform to easily rent,
          sell, buy trusted properties. Our intuitive platform is designed to provide you with the most
          comprehensive real estate solutions, all in one place.
        </h3>
        <main></main>
      </main>

      <div className="searchBarContainer">
        <aside className="searchBar">
          {/* <div className="searchBarSelect">
            <Select
              sx={{
                width: "100%",
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={9}
              label="searchBy"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div> */}
          <div className="searchTextField">
            <TextField fullWidth id="fullWidth" />
          </div>
          <div className="searchButton">
            <button
           
            >
              search
            </button>
          </div>
        </aside>
      </div>
    </StyledSearch>
  );
}

export default HomeCarousel;

const StyledSearch = styled.section`
  width: 100%;
  height: 50vh;
  background-size: cover;
  position: relative;
  animation: changeBackground 10s infinite;
  background-position: contain;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15vh;

  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #000000a3;
  }

  .main {
    width: 100%;
    height: 50%;
    z-index: 2;
    text-align: center;
    color: #fff;
  }

  .main h1 {
    font-weight: 800;
    font-size: 40px;
  }

  .main h3 {
    font-weight: 400;
    font-size: 20px;
    width: 50%;
    margin: auto;
    line-height: 2;
    padding: 10px;
  }

  .searchBarContainer {
    width: 100%;
    height: 12vh;
    transform: translateY(13vh);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .searchBarSelect {
    width: 20%;
  }

  .searchTextField {
    width: 90%;
  }

  .searchBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    width: 60%;
    margin: auto;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.403);
  }

  .searchButton {
    width: 10%;
    height: 100%;
    position: relative;
  }

  .searchButton button{
    height: 100%;
    text-transform: capitalize;
    font-size: 18px;
    width: 100%;
    text-align: center;
  }

  @keyframes changeBackground {
    0% {
      background-image: url("/jeffy_hero.jpg");
    }
    20% {
      background-image: url("/jeffyHero2.jpg");
    }
    40% {
      background-image: url("/jeffyHero3.jpg");
    }
    60% {
      background-image: url("/jeffyHero4.jpg");
    }
    80% {
      background-image: url("/jeffyHero5.jpg");
    }
    100% {
      background-image: url("/jeffy_hero.jpg");
    }
  }
`;
