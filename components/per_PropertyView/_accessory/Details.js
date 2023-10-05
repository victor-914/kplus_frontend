import React, { useEffect, useState } from "react";
import StyledDetails from "./Details.styles";
import { addCommasToNumber } from "../../../utils/helperFunction";

function Details({ detail, props }) {
  const [data, setData] = useState();
  const [price, setPrice] = useState();
  const [landSize, setLandSize] = useState();
  useEffect(() => {
    const filteredData = detail.filter(
      (item) =>
        item.k !== "createdAt" &&
        item.k !== "updatedAt" &&
        item.k !== "publishedAt" &&
        item.k !== "images" &&
        item.k !== "latitude" &&
        item.k !== "longititude" &&
        item.k !== "price" &&
        item.k !== "landSize" &&
        item.k !== "CofO"
    );
    setData(filteredData);
    setLandSize(props?.data?.attributes?.landSize);
    setPrice(props?.data?.attributes?.price);
  }, []);

  return (
    <StyledDetails>
      {
        <main className="detailsContainer">
          <li className="detailPerList">
            <main className="detailTitle">Price</main>

            <aside className="detailValue">
              &#8358; {addCommasToNumber(parseInt(price))}
            </aside>
          </li>
          {landSize && (
            <li className="detailPerList">
              <main className="detailTitle">Size</main>

              <aside className="detailValue">
                {addCommasToNumber(parseInt(landSize))} SqFt
              </aside>
            </li>
          )}
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
