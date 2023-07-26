import Guide from "../components/Guide";
import Hero from "../components/Hero";
import Properties from "../components/Properties";
import Details from "../components/Details";
import GetStarted from "../components/GetStarted";
import React from "react";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Guide />
      <Properties />
      <Details />
      <GetStarted />
      <Footer />
      {/* <Footer /> */}
    </>
  );
}
