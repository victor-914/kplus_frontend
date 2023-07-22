import React from "react";
import { propertyNavView } from "../../../utils/navVideo.array";
import StyledMediaPartOfProperty from "./@mediapartOfProperty.styles";

function MediaPartOfProperty({ handleVideo }) {
  return (
    <StyledMediaPartOfProperty>
      <div className="nav">
        <div className="nav_SCROLL">
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
    </StyledMediaPartOfProperty>
  );
}

export default MediaPartOfProperty;
