import React, { useState } from "react";
import { propertyNavView } from "../../../utils/navVideo.array";
import StyledPartOfPropertyView from "./partOfPropertyView.styles";
function PartOfPropertyView({ handleVideo }) {
  return (
    <StyledPartOfPropertyView>
      <div className="navBar">
        <div className="navBar_SCROLL">
          {propertyNavView.map((item, _indx) => (
            <main
              className="videoContainer"
              key={_indx}
              onClick={() => handleVideo(item.videoSrcTitle)}
            >
              <div className="videoSrcContainer" key={item._key}>
                {item.videoSrc}
              </div>
              <header className="videoTitle" key={item._key1}>
                {item.videoSrcTitle}
              </header>
            </main>
          ))}
        </div>
      </div>
    </StyledPartOfPropertyView>
  );
}

export default PartOfPropertyView;
