import React, { useContext } from "react";
import { SpecimenContext } from "../../context/contextProvider";
function HouseListing() {
  const { specimen, setSpecimen } = useContext(SpecimenContext);
  console.log(specimen, "dhhd", "@jdjd");

  return <div>index</div>;
}

export default HouseListing;
