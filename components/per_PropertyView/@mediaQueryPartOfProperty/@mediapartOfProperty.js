import React from "react";
import StyledMediaPartOfProperty from "./@mediapartOfProperty.styles";
import Image from "next/image";
function MediaPartOfProperty({ handleVideo, property }) {
  return (
    <StyledMediaPartOfProperty>
      <div className="nav">
        <div className="nav_SCROLL">
          {property?.attributes?.images?.data.map((item, _indx) => (
            <main
              className="videoContainer"
              key={_indx}
              onClick={() => handleVideo(item)}
            >
              <div className="videoSrcContainer" key={item._key}>
                <Image src={item?.attributes?.url} layout="fill" />
              </div>
            </main>
          ))}
        </div>
      </div>
    </StyledMediaPartOfProperty>
  );
}

export default MediaPartOfProperty;
