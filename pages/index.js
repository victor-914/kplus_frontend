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
  setSpecimen(props);
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

export const getStaticProps = async () => {
  try {
    const resLand = await api.get(`/lands?populate=*`);
    const resHouse = await api.get(`/houses?populate=*`);
    let data = {
      house: resLand.data,
      land: resHouse.data,
    };
    return { props: { data } };
  } catch (error) {
    throw error;
  }
};

// export const getStaticPaths = async () => {
//   const paths = specimens.map((model) => ({
//     params: { catergory: model.catergory, modelId: model._id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
