import Image from "next/image";
import React, { useState, useEffect, useLayoutEffect } from "react";
import StyledPerProperty from "./PerPropertyView.styles";
import { MdLocationOn } from "react-icons/md";
import { MdLocalPostOffice } from "react-icons/md";
import Details from "./_accessory/Details";
import GoogleMap from "./_accessory/GoogleMap";
import PartOfPropertyView from "./asideComponents/partOfPropertyView";
import MediaPartOfProperty from "./@mediaQueryPartOfProperty/@mediapartOfProperty";
import loading from "../../assets/jeffLoading.webp";
import { addCommasToNumber } from "../../utils/helperFunction";

function PerPropertyView({ item }) {
  const [videoDetails, setVideoDetails] = useState("details");
  const [data, setData] = useState({});
  const [imgSrc, setImgSrc] = useState("");
  const [mainPicture, setMainPicture] = useState(loading);
  const [price, setPrice] = useState(0);
  const [propertyDescList, setPropertyDescList] = useState([]);
  useEffect(() => {
    setData(item?.data);
    setPrice(addCommasToNumber(data?.attributes?.price || 0));
    setImgSrc(item?.data?.attributes?.images?.data[1]?.attributes?.url);
    const handlePropertyDescList = (item) => {
      let ent = Object.entries(item || {});
      let arr = [];
      let i = 0;
      while (i < ent.length) {
        arr.push({
          k: ent[i][0],
          v: ent[i][1],
        });
        i++;
      }

      return setPropertyDescList(arr);
    };
    handlePropertyDescList(data?.attributes);
    // handleVideo()
    return () => {};
  }, [data]);

  const handleVideo = (id) => {
    data.attributes?.images?.data?.map((item) => {
      if (item.id.toString() === id.toString()) {
        setMainPicture(item?.attributes?.url);
        // console.log(item?.attributes?.url, "mainPicture");
      } else {
        setMainPicture(
          item?.data?.attributes?.images?.data[0]?.attributes?.url
        );
      }
    });
  };

  const checkActive = (activeValue, className) =>
    videoDetails === activeValue ? className : "";

  return (
    <StyledPerProperty>
      <main className="heroPageContainer">
        <header className="header">
          <main className="titleContainer">
            <div className="houseTitle">{data?.attributes?.title}</div>
            <div className="houseLocation">
              <div className="locationId">
                <MdLocationOn />
              </div>
              <div className="locationTitle">
                {data?.attributes?.streetName +
                  " " +
                  data?.attributes?.city +
                  " " +
                  data?.attributes?.state}
              </div>
            </div>
          </main>
          <aside className="priceDurationContainer">
            <div className="price">&#8358; {price}</div>
          </aside>
        </header>
        <section className="heroPage">
          <main className="videoView">
            <div className="videoHeroContainer">
              <Image
                src={mainPicture}
                layout="fill"
                style={{ borderRadius: "20px" }}
              />
            </div>
            <div className="videoNav leftVideoNav">{"<"}</div>
            <div className="videoNav rightVideoNav">{">"}</div>
          </main>

          <PartOfPropertyView handleVideo={handleVideo} property={data} />

          <div className="tabContainer">
            <header className="tabContainerHeader">
              <div
                onClick={() => setVideoDetails("details")}
                className={`overview tab ${checkActive("details", "active")}`}
              >
                {" "}
                Details
              </div>
              <div
                onClick={() => setVideoDetails("map")}
                className={`details tab ${checkActive("map", "active")}`}
              >
                Map
              </div>
            </header>
            {videoDetails === "details" ? (
              <Details detail={propertyDescList} />
            ) : videoDetails === "map" ? (
              <GoogleMap />
            ) : (
              ""
            )}
          </div>
          <section className="tabDescriptionButtonContainer">
            <button className="tabButton">
              <div className="tabButtonIcon">
                <MdLocalPostOffice />
              </div>
              <div className="tabButtonText">Contact Us</div>
            </button>
          </section>
        </section>
      </main>

      <aside className="navigationContainer">
        <MediaPartOfProperty handleVideo={handleVideo} property={data} />
      </aside>
    </StyledPerProperty>
  );
}

export default PerPropertyView;
