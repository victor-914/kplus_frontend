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
import ProductView from "../animations/ProductView";
import TeamAni from "../new_comp/team_ani/TeamAni";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Testimonial from "../components/testimonial/Testimonial";
import styled from "styled-components";


export default function Home() {
  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.utils.toArray(".panel").forEach((panel, i) => {
  //     ScrollTrigger.create({
  //       trigger: panel,
  //       start: "top 20%",
  //       end: "bottom 150px",
  //       pin: true,
  //       scrub:true,
  //       markers:false,
  //     });
  //   });

    // ScrollTrigger.create({
    //   trigger: "#red",
    //   start: "top center",
    //   end: "+=200", // 200px past the start
    //   pin: "#red-content",
    // });
  // });

  return (
    <StyledHome>
      <HomeCarousel />
      <Guide />
      {/* <TeamAni /> */}
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
    /* border: 2px solid red; */
  }
  
`;
