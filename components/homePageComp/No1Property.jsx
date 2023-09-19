import React from "react";
import styled from "styled-components";

function No1Property() {
  return (
    <StyledProp>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div class="about-img position-relative overflow-hidden p-5 pe-0">
                {/* <img class="img-fluid w-100" src="img/about.jpg" /> */}
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 class="mb-4">#1 Place To Find The Perfect Property</h1>
              <p class="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>Tempor erat elitr
                rebum at clita
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>Aliqu diam amet
                diam et eos
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>Clita duo justo
                magna dolore erat amet
              </p>
              <a class="btn btn-primary py-3 px-5 mt-3" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledProp>
  );
}

export default No1Property;

const StyledProp = styled.section`
    font-family: "Heebo",sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #666565;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    box-sizing: border-box;
    width: 100%;
    padding-right: var(--bs-gutter-x, .75rem);
    padding-left: var(--bs-gutter-x, .75rem);
    margin-right: auto;
    margin-left: auto;
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
`;
