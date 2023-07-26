import Companies from "../components/Companies";
import Guide from "../components/Guide";
import Hero from "../components/Hero";
import Properties from "../components/Properties";
import Details from "../components/Details";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Guide />
      <Properties />
      <Details />
      <GetStarted />
      {/* <Footer /> */}
    </>
  );
}
