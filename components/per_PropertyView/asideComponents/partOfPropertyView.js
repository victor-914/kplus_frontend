import React, { useState } from "react";
import StyledPartOfPropertyView from "./partOfPropertyView.styles";
import Image from "next/image";
import loading from "../../../assets/jeffLoading.webp";
function PartOfPropertyView({ handleVideo, property }) {
  return (
    <StyledPartOfPropertyView>
      <div className="navBar">
        <div className="navBar_SCROLL">
          {property?.attributes?.images?.data.map((item, _indx) => (
            <main
              className="videoContainer"
              key={_indx}
              onClick={() => handleVideo(item.id)}
            >
              <div className="videoSrcContainer" key={item.id}>
                <Image
                  src={item?.attributes?.url ? item?.attributes?.url : loading}
                  layout="fill"
                />
              </div>
            </main>
          ))}
        </div>
      </div>
    </StyledPartOfPropertyView>
  );
}

export default PartOfPropertyView;
