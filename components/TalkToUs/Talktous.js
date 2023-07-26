import React from "react";
import StyledTalktous from "./Talktous.styles";
import Link from "next/link";

function Talktous() {
  return (
    <StyledTalktous>
      <div className="viewService_container">
        <div className="viewService">
          <div className="view_decorator"></div>
          <div className="view_header">Ready for some success stories?</div>
          <div className="view_subheader">
            Explore our catalogue of results achieved, challenges solved, and
            clients satisfied.
          </div>

          <div className="work_withus">
            <Link href="/contact">
              <a>TALK TO US</a>
            </Link>
          </div>
        </div>
      </div>
    </StyledTalktous>
  );
}

export default Talktous;
