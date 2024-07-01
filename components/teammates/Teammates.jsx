import Image from "next/image";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "@mui/material";
import styled from "styled-components";
import { teammates } from "../../utils/teammates";
import "swiper/css";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
function Teammates() {
  const isSmallScreen = useMediaQuery("(min-width:600px)");

  return (
    <StyledTeammates>
      <div id="header">Our Team</div>


      <IoIosArrowForward className="swiper-button image-swiper-button-next" />
      <IoIosArrowBack className="swiper-button image-swiper-button-prev" />
      <Swiper
        slidesPerView={isSmallScreen ? 2 : 1}
        spaceBetween={20}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {teammates.map((person, index) => (
          <SwiperSlide key={person.name} className="swiperSlide">
            <div className="person" key={index}>
              <div className="container-inner">
                <Image
                  layout="fill"
                  src={person.img_src}
                  alt={person.content}
                />
              </div>

              <h1>{person.name}</h1>
              <p>{person.title}</p>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </StyledTeammates>
  );
}

export default Teammates;

const StyledTeammates = styled.section`
  margin: 20px 0px 0px 0px;
  position: relative;

  #header {
    text-align: center;
    line-height: 3;
    font-size: 45px;
    font-weight: 700;
  }



  .swiper-button {
    position: absolute;
    top: 50%;
  }

  .swiper-pagination{
    /* background-color: red; */
  }

  .image-swiper-button-next {
    font-size: 40px;
    right: 20px;
  }

  .image-swiper-button-prev {
    font-size: 40px;
    left: 20px;
  }

  .swiper-button-disabled{
   color: #2b282883;
  } 

  padding: 40px 0px 40px 0px;
  background-color: #f7eed3;

  .mySwiper {
    border: 1px solid #aca69166;
    border-radius: 10px;
    width: 80%;
    margin: auto;
  }

  .swiperSlide {
    display: flex;
    align-items: center;
    height: auto;
    justify-content: center;
    margin: 40px 0px 40px 0px;
  }

  .person {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  #img {
    object-fit: contain;
  }

  h1 {
    text-align: center;
    line-height: 3;
    font-size: 18px;
    font-weight: 700;
  }

  .container-inner {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;
