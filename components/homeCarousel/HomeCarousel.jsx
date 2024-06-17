import React, { useState, useRef } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useRouter } from "next/router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logoImg from "../../assets/logobg.png";
import Image from "next/image";
function HomeCarousel() {
  const [search, setSearch] = useState();
  const container = useRef();

  useGSAP(
    () => {
      var tl = gsap.timeline();
      tl.to(".logo", {
        duration: 2,
        delay:1,
        scale: 0.7,
        rotate: 360,
        opacity: 1,
      });
      tl.to(".logo", {
        opacity: 0,
        duration: 0.5,
        ease: "bounce.inOut",
      });
      tl.to(".cover", {
        duration: 1.5,
        zIndex: 0,
        opacity: 1,
        position: "absolute",
        margin: 0,
        height: "100%",
        width: "100%",
        ease: "sine",
        backgroundColor: "#000000a3",
      });
      tl.from(".searchBar", {
        y: 260,
        duration: 0.6,
        opacity: 0,
      });
    },
    { scope: container }
  );

  const router = useRouter();
  return (
    <StyledSearch ref={container}>
      <div className="cover">
        <Image className="logo" src={logoImg} alt={"logo"} />
      </div>

      <main className="main">
        <h1>Buy and Sell Properties.</h1>
        <h3>
          At Jeff Realty, we provide you with the best platform to easily  buy trusted properties. Our intuitive platform is designed to
          provide you with the most comprehensive real estate solutions, all in
          one place.
        </h3>
      </main>

      <div className="searchBarContainer">
        <aside className="searchBar">  
          <div className="searchTextField">
            <TextField
              placeholder="search by location"
              fullWidth
              id="fullWidth"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div
            className="searchButton"
            onClick={() =>
              search &&
              router.push({ pathname: "/search", query: { keyword: search } })
            }
          >
            <button className="searchIconCont">
              <ArrowRightAltIcon className="searchIcon" />
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
  height: auto;
  background-size: cover;
  position: relative;
  animation: changeBackground 10s infinite;
  background-position: contain;
  display: flex;
  flex-direction: column;
  margin-bottom: 15vh;
  padding: 4px 0px 10px 0px;

  .cover {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 500;
    top: 0;
    background-color: #000;
    justify-content: center;
    display: flex;
    align-items: center;
  }

  .logo {
   
    transform:rotate(180)
  }

  .main {
    width: 100%;
    height: 50vh;
    z-index: 2;
    text-align: center;
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
  }

  .main h1 {
    font-weight: 800;
    font-size: 40px;
    line-height: 2;
    text-transform: uppercase;
  }

  .main h3 {
    font-weight: 400;
    font-size: 20px;
    width: 50%;
    margin: auto;
    line-height: 2;
    /* padding: 10px; */
  }

  .searchBarContainer {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 10px;
    /* transform: translateY(-1vh); */
    z-index: 2;
    display: flex;
    /* background-color: green; */
    justify-content: center;
    align-items: center;
  }

  .searchBarSelect {
    width: 20%;
  }

  .searchIconCont {
    width: 10%;
    transition: 0.5s;
  }

  .searchIconCont:hover .searchIcon {
    transform: translateX(20px);
  }

  .searchIcon:hover {
    transform: translateX(20px);
    transition: 0.5s;
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

  .searchButton button {
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

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 50vh;
    .main h1 {
      font-size: 20px;
    }

    .main h3 {
      font-weight: 400;
      font-size: 16px;
      width: 100%;
      margin: auto;
      line-height: 1.5;
    }

    .main {
      width: 100%;
      height: 50%;
      z-index: 2;
      text-align: center;
      color: #fff;
    }

    .searchBarContainer {
      width: 100%;
    }

    .searchBar {
      width: 80%;
    }

    .searchButton button {
      height: 100%;
      text-transform: capitalize;
      font-size: 10px;
      width: auto;
      padding: 8px 3px 8px 3px;
      text-align: center;
    }

    .searchBarContainer {
      /* transform: translateY(9vh); */
      z-index: 2;
    }

   
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    height: 30vh;
    .main h1 {
      font-size: 20px;
    }

    .main h3 {
      font-weight: 400;
      font-size: 16px;
      width: 100%;
      margin: auto;
      line-height: 1.5;
    }

    .main {
      width: 100%;
      height: 50%;
      padding-top: 20px;
      z-index: 2;
      text-align: center;
      color: #fff;
    }

    .searchBarContainer {
      width: 100%;
    }

    .searchBar {
      width: 80%;
    }

    .searchBarContainer {
      /* transform: translateY(8vh); */
      z-index: 2;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    height: 30vh;
    .main h1 {
      font-size: 20px;
    }

    .main h3 {
      font-weight: 400;
      font-size: 16px;
      width: 100%;
      margin: auto;
      line-height: 1.5;
    }

    .main {
      width: 100%;
      height: 50%;
      padding-top: 20px;
      z-index: 2;
      text-align: center;
      color: #fff;
    }

    .searchBarContainer {
      width: 100%;
    }

    .searchBar {
      width: 80%;
    }

    .searchBarContainer {
      transform: translateY(8vh);
      z-index: 2;
    }
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;
