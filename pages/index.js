import Guide from "../components/Guide";
import Hero from "../components/Hero";
import Properties from "../components/Properties";
import Details from "../components/Details";
import GetStarted from "../components/GetStarted";
import React from "react";
import Teammates from "../components/teammates/Teammates";
import LandProperties from "../components/landProperties/LandProperties";
import Talktous from "../components/TalkToUs/Talktous";

export default function Home() {
  return (
    <>
      <Hero />
      <Guide />
      <LandProperties />
      <Details />
      <Properties />
      <GetStarted />
      <Teammates />
      <Talktous />
    </>
  );
}
