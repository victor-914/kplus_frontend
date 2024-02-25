import React, { useEffect, useState } from "react";
import StyledDetails from "./Details.styles";
import { addCommasToNumber } from "../../../utils/helperFunction";
import { Button } from "@mui/material";
import { RiUserLine } from "react-icons/ri";
import { useRouter } from "next/router";
function Details({ detail, props }) {
  const [data, setData] = useState();
  const [price, setPrice] = useState();
  const [landSize, setLandSize] = useState();
  const router = useRouter();
  useEffect(() => {
    const filteredData = detail.filter(
      (item) =>
        item.k !== "createdAt" &&
        item.k !== "updatedAt" &&
        item.k !== "publishedAt" &&
        item.k !== "image" &&
        item.k !== "video" &&
        item.k !== "latitude" &&
        item.k !== "longititude" &&
        item.k !== "price" &&
        item.k !== "title" &&
        item.k !== "CofO" &&
        item.k !== "videoUrl" &&
        item.k !== "cloudinary_image"
    );
    setData(filteredData);
    setLandSize(props?.data?.attributes?.landSize);
    setPrice(props?.data?.attributes?.price);

    return () => {
      setData(null)
      setPrice(null)
      setLandSize(null)
    }
  }, [detail, props]);

  const message = `Hello Jeff Realty, I would like to enquire more on this property:(https://jeff-realty.com${router.asPath})`;

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

      <div className="realtorButton">
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          variant="contained"
        >
          <a
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            href={`https://api.whatsapp.com/send?phone=+2348120908844&text=${message}`}
            target="_blank"
          >
            Talk with a Realtor{" "}
            <span className="icon">
              {" "}
              <RiUserLine />
            </span>
          </a>
        </Button>
      </div>
    </StyledDetails>
  );
}

export default Details;
