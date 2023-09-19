import { Button, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import homeIllustration from "../assets/illustration.png";
import CustomButton from "./CustomButton";
import Image from "next/image";
const GetStarted = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#d9ab22",
    height: "416px",
    paddingTop: "40px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "40px",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    paddingTop: "40px",
    paddingBottom: "50px",
    [theme.breakpoints.down("md")]: {
      padding: "0",
      paddingTop: "50px",
      paddingBottom: "50px",
    },
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: "35px", color: "#000", fontWeight: "700" }}
          >
            Featured Properties
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#000", fontWeight: "500", my: 3 }}
          >
            Everything you need to know about houses!
          </Typography>

          <CustomButton
            backgroundColor="#000"
            color="#fff"
            buttonText="Get Started Now"
            getStartedBtn={true}
          />
        </Box>

        <Image
          src={homeIllustration}
          // layout="fixed"
          alt="illustration"
          style={{ maxWidth: "100%", width: "100%" }}
        />
      </CustomContainer>
    </CustomBox>
  );
};

export default GetStarted;
