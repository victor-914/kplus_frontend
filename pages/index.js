import Companies from "../components/Companies";
import Guide from "../components/Guide";
import Hero from "../components/Hero";
import Properties from "../components/Properties";
import Details from "../components/Details";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import api from "../utils/api";

import { useContext, useEffect, useLayoutEffect } from "react";
// import { Toast } from "react-toastify/dist/components";
import { toast } from "react-toastify";
import { SpecimenContext } from "../context/contextProvider";

export default function Home(props) {
  const { specimen, setSpecimen } = useContext(SpecimenContext);

  useEffect(() => {
    setSpecimen(props);

    return () => {};
  }, []);

  return (
    <>
      <Hero />
      {/* <Companies /> */}
      <Guide />
      <Properties />
      <Details />
      <GetStarted />
      <Footer />
    </>
  );
}
