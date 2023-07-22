import Image from "next/image";
import React, { useState } from "react";
import StyledPerProperty from "./PerPropertyView.styles";
import agentProfile from "../../assets/ty.jpg";
import { propertyNavView } from "../../utils/navVideo.array";
import { MdLocationOn } from "react-icons/md";
import { RiHeartFill } from "react-icons/ri";
import { MdLocalPostOffice } from "react-icons/md";
import Details from "./_accessory/Details";
import GoogleMap from "./_accessory/GoogleMap";
import PartOfPropertyView from "./asideComponents/partOfPropertyView";
import MediaPartOfProperty from "./@mediaQueryPartOfProperty/@mediapartOfProperty";
import { useEffect } from "react";

function PerPropertyView({ item }) {
  const defaultVideo = propertyNavView[0].videoSrc;
  const defaultVideoTitle = propertyNavView[0].videoSrcTitle;
  const [videoTitle, setVideoTitle] = useState(defaultVideoTitle);
  const [videoDetails, setVideoDetails] = useState("details");
  const [video, setVideo] = useState(defaultVideo);

  // const [data, setData] = useState(item[0]);
  // console.log(item, "data", data, "dhdhdhdh");

  const handleVideo = (id) => {
    propertyNavView.map((item) => {
      if (item.videoSrcTitle === id) {
        setVideo(item.videoSrc);
        setVideoTitle(item.videoSrcTitle);
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
            <div className="houseTitle">Luxury house for rent</div>
            <div className="houseLocation">
              <div className="locationId">
                <MdLocationOn />
              </div>
              <div className="locationTitle">Opposite bello airport, Abuja</div>
            </div>
          </main>
          <aside className="priceDurationContainer">
            <div className="price">N200,000</div>
          </aside>
        </header>
        <section className="heroPage">
          {/* <div className="sectionTitle">{videoTitle}</div> */}

          <main className="videoView">
            <div className="videoHeroContainer">{video}</div>
            <div className="videoNav leftVideoNav">{"<"}</div>
            <div className="videoNav rightVideoNav">{">"}</div>
          </main>

          <PartOfPropertyView
            handleVideo={handleVideo}
            setVideo={setVideo}
            video={video}
            videoDetails={videoDetails}
            videoTitle={videoTitle}
          />

          <div className="tabContainer">
            <header className="tabContainerHeader">
              <div
                onClick={() => setVideoDetails("details")}
                className={`overview tab ${checkActive("details", "active")}`}
              >
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
              <Details />
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
        {/* <header className="agentProfile">
          <div className="agentProfileName">Veristas House Sourcing Agency</div>
          <main className="agentPicture">
            <span className="OnlineIndicator"></span>
            <Image src={agentProfile} layout="fill" id="agentProfile" />
          </main>
        </header> */}

        <MediaPartOfProperty handleVideo={handleVideo} />
      </aside>
    </StyledPerProperty>
  );
}

export default PerPropertyView;
