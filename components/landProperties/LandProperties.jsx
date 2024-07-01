import {
  Box,
  Container,
  styled as styles,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useRef } from "react";
import useSWR from "swr";
import styled from "styled-components";
import Card from "../card/Card";
import { fetcher } from "../../utils/api";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
const LandProperties = () => {
  const propBoxRef = useRef();
  const isSmallScreen = useMediaQuery("(min-width:600px)");

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/lands?populate=*&pagination[page]=1&pagination[pageSize]=10`,
    fetcher
  );

  const PropertiesBox = styles(Box)(({ theme }) => ({
    display: "flex",
    height: "auto",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "50px",
  }));

  const PropertiesTextBox = styles(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  const router = useRouter();

  return (
    <Box sx={{ width: "100%", mt: 5, py: 10, backgroundColor: "#f7eed3" }}>
      <Container
        sx={{
          width: "100%",
          //  backgroundColor: "#f7eed3",
          textAlign: "center",
          padding: "20px 0px 20px 0px",
        }}
      >
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000", fontSize: "35px", fontWeight: "bold" }}
          >
            Latest Square meters! of Lands
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
            Everything you need to know when looking for a new Plots !
          </Typography>
        </PropertiesTextBox>
      </Container>
      <StyledSwiper>
      <Swiper
          slidesPerView={isSmallScreen ? 2 : 1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data?.data?.map((item) => (
            <SwiperSlide  key={item.id} className="swiperSlide">
              <Card key={item.id} data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledSwiper>
      <StyledBrowse
        onClick={() => router.push("lands")}
        className="browseContainer"
      >
        <button className="browseMoreBtn">Browse More Property</button>
      </StyledBrowse>{" "}
    </Box>
  );
};

export default LandProperties;

export const StyledSwiper = styled.div`
  width: 80%;
  margin: auto;
  height: auto;
  padding: 50px 0px 20px 0px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    font-size: 18px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledBrowse = styled.div`
  width: 100%;
  padding-top: 4%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    padding: 20px;
    background-color: #000;
    cursor: pointer;
  }

  button:hover {
    background-color: #d9ab22;
    color: #000;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.317);
  }
`;
