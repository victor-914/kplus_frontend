import React, { useEffect, useState } from "react";
import { propertyDetails } from "../../../utils/propertyDetails.array";
import StyledDetails from "./Details.styles";

function Details({ detail }) {
  const [data, setData] = useState();

  useEffect(() => {
    const filteredData = detail.filter(
      (item) =>
        item.k !== "createdAt" &&
        item.k !== "updatedAt" &&
        item.k !== "publishedAt" &&
        item.k !== "images"
    );
    setData(filteredData);
  }, []);

  return (
    <StyledDetails>
      {
        <main className="detailsContainer">
          {data?.map((item) => (
            <li className="detailPerList" key={item.key}>
              <main className="detailTitle" key={item.key}>
                {item.k}
              </main>

              <aside className="detailValue">{item.v}</aside>
            </li>
          ))}
        </main>
      }
    </StyledDetails>
  );
}

export default Details;
