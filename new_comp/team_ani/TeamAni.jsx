"use client";

import React, { useRef, useEffect } from "react";
import styled from "styled-components";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
import useSWR from "swr";
import { fetcher } from "../../utils/api";
import Card from "../../components/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import {register} from "swiper/element/bundle"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

register()

// import required modules
// import { Pagination } from ."swiper/modules";

function TeamAni() {
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/lands?populate=*&pagination[page]=1&pagination[pageSize]=10`,
    fetcher
  );
  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);

  return (
    <StyledTeamAni>
      {/* <div className="container" ref={scrollContainerRef}>
        <div className="scroll-content" ref={scrollContentRef}>
          {data?.data?.map((item) => (
              <Card key={item.id} data={item} />
          ))}
        </div>
      </div> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </StyledTeamAni>
  );
}

export default TeamAni;

const StyledTeamAni = styled.section`
  width: 100%;
  height: 100vh;
  /* overflow-x: hidden;
  position: relative;
  border: 2px solid red; */
  background-color: red;
  position: relative;
  /* height: 100%; */

  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;

  .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
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
