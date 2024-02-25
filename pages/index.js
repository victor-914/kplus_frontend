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
export default function Home() {
  return (
    <>
      <HomeCarousel />
      <Guide />
      <LandProperties />
      <NewsStack />
      <Properties />
      <GetStarted />
      <Teammates /> 
      <FAQ />
      <Talktous />
    </>
  );
}
