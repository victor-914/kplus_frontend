import { Box, styled, Typography } from "@mui/material";
import React from "react";
import bedroomsIcon from "../../assets/bedroomsIcon.png";
import bathroomsIcon from "../../assets/bathroomsIcon.png";
import spaceIcon from "../../assets/spaceIcon.png";
import Image from "next/image";
const HouseModel = ({ data }) => {
  const HouseBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: 350,
    backgroundColor: "#fff",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%",
    height: "35vh",
    position: "relative",
    margin: "auto",
    marginTop: "5px",
  }));

  return (
    <HouseBox>
      <ImgContainer>
        <Image
          src={data.attributes.images.data[0].attributes.url}
          alt="housePhoto"
          style={{ maxWidth: "100%" }}
          layout="fill"
        />
      </ImgContainer>

      <Box sx={{ padding: "1rem", backgroundColor: "#9878" }}>
        <Typography variant="body2" sx={{ lineHeight: "2" }}>
          Title: {data.attributes.title}
        </Typography>

        <Typography variant="body2" sx={{ fontWeight: "400" }}>
          N {data.attributes.price}
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          Address:{" "}
          {data.attributes.streetName +
            " " +
            data.attributes.city +
            " " +
            data.attributes.state}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <InfoBox>
            <Image src={bedroomsIcon} alt="bedroomsIcon" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {data.attributes.bedroom}
            </Typography>
          </InfoBox>

          <InfoBox>
            <Image src={bathroomsIcon} alt="bathroomssIcon" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {data.attributes.bathroom}
            </Typography>
          </InfoBox>

          {/* <InfoBox>
            <Image src={spaceIcon} alt="spaceIcon" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {space}
            </Typography>
          </InfoBox> */}
        </Box>
      </Box>
    </HouseBox>
  );
};

export default HouseModel;
