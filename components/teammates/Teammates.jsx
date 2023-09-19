import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import { tertiaryColor } from "../../utils/Colors";
import { teammates } from "../../utils/teammates";
function Teammates() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div
        style={{
          width: "90%",
          margin: "auto",
          fontSize: "40px",
          paddingBottom: "20px",
          paddingLeft: "8px",
          letterSpacing: "-2px",
          fontWeight: 800,
        }}
        className="header"
      >
        Our Team
        <div
          style={{
            width: "100px",
            height: "3px",
            backgroundColor: `${tertiaryColor}`,
            transform: "translateX(-50px)",
          }}
          className="liner"
        ></div>
      </div>
      <StyledTeammates>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={false}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {teammates.map((item) => (
            <div className="item_obj" key={item._id}>
              <Image src={item.img_src} layout="fill" id="team_img" />

              {item.content !== "" && (
                <main className="team-info">{item.content}</main>
              )}
            </div>
          ))}
        </Carousel>
      </StyledTeammates>
    </>
  );
}

export default Teammates;

const StyledTeammates = styled.section`
  width: 80%;
  height: auto;
  font-family: "RedRose", sans-serif;
  margin: auto;

  padding-bottom: 50px;

  .carousel-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .carousel-item-padding-40-px {
    border: 2px solid white;
    width: 30%;
    position: relative;
    box-shadow: 0px 0px 10px rgba(142, 134, 134, 0.5);
  }

  .item_obj {
    width: 80%;
    height: 80vh;
  }

  #team_img {
    border-radius: 10px;
  }

  .custom-dot-list-style li button {
    border: 2px solid #d9ab22;
  }

  .team-info {
    background-color: #d9ab22;
    z-index: 10;
    position: absolute;
    width: 100%;
    bottom: 50px;
    color: #000;
    text-align: center;
    text-transform:capitalize;
    letter-spacing: 0.7px;
    padding: 10px;
    font-weight: 800;
    border: 1px dashed #000;
  }
  @media (max-width: 768px) {
    width: 95%;
    margin: auto;
    height: 80vh;
    .carousel-container {
      height: 100%;
      width: 100%;
    }

    .carousel-item-padding-40-px {
      width: 40%;
    }

    .item_obj {
      position: relative;
      width: 100%;
      background-color:#000;
      height: 80vh;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) {
  }
`;
