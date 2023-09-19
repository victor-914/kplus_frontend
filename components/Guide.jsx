import { Box, styled, Typography } from "@mui/material";
import React from "react";
import buyIcon from "../assets/buy_icon.png";
import sellIcon from "../assets/sell_icon.png";
import rentIcon from "../assets/rent_icon.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";
import { useRouter } from "next/router";

const Guide = () => {
  const router = useRouter();
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000", my: 3 }}
      >
        How it works?
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#000",
            textAlign: "center",
          }}
        >
          Everything you need to know when you want to buy, rent or sell - All
          in one place
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
          <Image src={buyIcon} alt="buyIcon" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#000",
              my: 1,
            }}
          >
            Buying Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              onClick={() => router.push("/guides")}
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#000" }}
            >
              How to buy Land
            </Typography>
            <ArrowRightAltIcon style={{ color: "#000" }} />
          </Box>
        </GuideBox>

        <GuideBox>
          <Image src={rentIcon} alt="buyIcon" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#000",
              my: 1,
            }}
          ></Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
        </GuideBox>

        <GuideBox>
          <Image src={sellIcon} alt="buyIcon" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Renting Guides
          </Typography>
          <Box
            onClick={() => router.push("/guides")}
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#000" }}
            >
              How to Rent
            </Typography>
            <ArrowRightAltIcon style={{ color: "#000" }} />
          </Box>
        </GuideBox>
      </GuidesBox>
    </Box>
  );
};

export default Guide;
