import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useRef } from "react";
import Navbar from "./Navbar";
import heroImg from "../assets/hero_illustration.jpg";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { useRouter } from "next/router";
import { Link } from "react-router-dom";
// import styled from "styled-components";
const Hero = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/about");
    console.log("dd");
  };

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    // color: "#000336",
    color: "#987818",

    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#ffff", minHeight: "80vh" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "20px",
                color: "#000",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Jeffy Realty
            </Typography>
            <Title variant="h1">
              Discover a place where you'll love to live.
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#000", my: 4 }}
            >
              Be the first to get the best real estate deals before they hit the
              mass market! Hot foreclosure deals with one simple search!
            </Typography>

            <div className="moreBtn" onClick={() => router.push("/about")}>
              <button>More About Us</button>
            </div>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <Image
              src={heroImg}
              // layout="fixed"
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
