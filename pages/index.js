import Guide from "../components/Guide";
import Properties from "../components/Properties";
import GetStarted from "../components/GetStarted";
import React from "react";
import Teammates from "../components/teammates/Teammates";
import LandProperties from "../components/landProperties/LandProperties";
import Talktous from "../components/TalkToUs/Talktous";
import NewsStack from "../components/newGrid/NewsGrid";
import HomeCarousel from "../components/homeCarousel/HomeCarousel";
import FAQ from "../components/faq/FAQ";
import Testimonial from "../components/testimonial/Testimonial";
import styled from "styled-components";


export default function Home() {
 

  return (
    <StyledHome>
      <HomeCarousel />
      <Guide />
      <LandProperties />
      <NewsStack />
      <Properties />
      <Testimonial/>
      <GetStarted />
      <Teammates />
      <FAQ />
      <Talktous />
    </StyledHome>
  );
}

const StyledHome = styled.section`

  .panel{
    height:auto;
    padding: 10px 0px 50px 0px;
    width:100%;
  }
  
`;
