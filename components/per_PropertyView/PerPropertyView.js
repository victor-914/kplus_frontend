import React, { useState, useEffect } from "react";
import StyledPerProperty from "./PerPropertyView.styles";
import { MdLocationOn } from "react-icons/md";
import Details from "./_accessory/Details";
import { addCommasToNumber } from "../../utils/helperFunction";
import Breadcrumbs from "nextjs-breadcrumbs";
function PerPropertyView({ item }) {
  const [videoDetails, setVideoDetails] = useState("map");
  const [data, setData] = useState({});
  const [price, setPrice] = useState(0);
  const [propertyDescList, setPropertyDescList] = useState([]);
  useEffect(() => {
    setData(item?.data);
    setPrice(addCommasToNumber(data?.attributes?.price || 0));
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
    return () => {};
  }, [data, item]);

  const handleVideo = (item) => {
    const d = item;
    setMainPicture(d?.attributes?.url);
  };

  const checkActive = (activeValue, className) =>
    videoDetails === activeValue ? className : "";

  return (
    <StyledPerProperty>
      <div>
        <Breadcrumbs
          omitRootLabel
          activeItemClassName="brActive"
          omitIndexList={[1]}
          containerStyle={{
            width: "90%",
            margin: "auto",
            height: "auto",
            paddingTop: "11vh",
            position: "-webkit-sticky",
          }}
          listStyle={{
            display: "flex",
            marginLeft: "5px",
            padding: "5px",
            fontSize: "15px",
          }}
          inactiveItemStyle={{
            padding: "5px",
            //   color: `${Color.primaryColor}`,
            fontWeight: "700",
            color: "#000",
          }}
          transformLabel={(title) => "Back to all " + title}
        />
      </div>

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
              <video width="100%" height="100%" controls>
                <source
                  src="https://res.cloudinary.com/dntzesy05/video/upload/v1708012915/jeffy_5800d5b89f.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </main>

          {/* <PartOfPropertyView handleVideo={handleVideo} property={data} /> */}

          <div className="tabContainer">
            <header className="tabContainerHeader">
              <div
                onClick={() => setVideoDetails("details")}
                className={`overview tab ${checkActive("details", "active")}`}
              >
                {" "}
                Details
              </div>
            </header>
            <Details detail={propertyDescList} props={item} />
          </div>
        </section>
      </main>
    </StyledPerProperty>
  );
}

export default PerPropertyView;
