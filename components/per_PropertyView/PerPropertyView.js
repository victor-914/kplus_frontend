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
function PerPropertyView(item) {
  const [videoDetails, setVideoDetails] = useState("details");
  const [data, setData] = useState();
  const [mainPicture, setMainPicture] = useState();

  useEffect(() => {
    setData(item?.item.data[0]);

    return () => {};
  }, [item]);

  const handleVideo = (id) => {
    data.attributes?.images?.data?.map((item) => {
      if (item.id.toString() === id.toString()) {
        setMainPicture(item.attributes.url);
      } else {
        setMainPicture(data?.attributes?.images?.data[0]?.attributes?.url);
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
            <div className="price">N {data?.attributes?.price}</div>
          </aside>
        </header>
        <section className="heroPage">
          <main className="videoView">
            <div className="videoHeroContainer">
              <Image
                src={
                  data?.attributes?.images?.data[0]?.attributes?.url
                    ? mainPicture
                    : loading
                }
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
              <Details detail={data} />
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
