import styled from "styled-components";

const StyledPerProperty = styled.section`
  height: auto;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-evenly;

  .active {
    border-bottom: 5px solid #d9ab22;
  }

  .heroPageContainer {
    width: 70%;
    height: inherit;
  }

  .breadCrumbContainer {
    width: 90%;
    display: flex;
    height: auto;
    justify-content: flex-end;
    align-items: center;
    margin: auto;
    line-height: 1.5;
    margin-bottom: 41px;
  }

  .breadCrumb {
    width: 98.1%;
    line-height: 2;
    display: flex;
    color: rgba(0, 0, 0, 0.45);
    font-size: 13px;
    font-weight: 400;
  }

  #presentBreadCrumb {
    margin-left: 5px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
  }

  .header {
    width: 95%;
    height: 10vh;
    display: flex;
    margin: auto;
  }

  .titleContainer {
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .houseTitle {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.5;
    color: #333;
    text-transform: capitalize;
  }

  .houseLocation {
    color: #333;
    font-weight: 400;
    letter-spacing: 0.3px;
    display: flex;
    align-items: center;
    opacity: 0.5;
    line-height: 1.5;
  }

  .locationId {
    /* line-height: 2; */
    margin-right: 5px;
    font-size: 20px;
  }

  .locationTitle {
    font-weight: 500;
    text-transform: capitalize;
  }

  .priceDurationContainer {
    width: 30%;
    height: 100%;
    /* background-color: purple; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000;
  }

  .price {
    width: 100%;
    font-size: 25px;
    height: auto;
    line-height: 1.5;
    font-weight: 700;
    text-align: end;
    letter-spacing: 0.5px;
    /* background-color: green; */
  }

  .duration {
    text-align: end;
    opacity: 0.7;
    width: 100%;
  }

  .heroPage {
    width: 100%;
    height: 100%;
    /* background: purple; */
  }

  .videoView {
    width: 95%;
    height: 50vh;
    /* background-color: red; */
    margin: auto;
    margin-top: 20px;
    position: relative;
    /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); */
  }

  .videoHeroContainer {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 7px;
  }

  .videoNav {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 41%;
    cursor: pointer;
    color: #fff;
    background-color: #d9ab22;
    font-size: 20px;
    font-weight: 800;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }

  .videoNav:hover {
    background-color: #000;
    color: #d9ab22;
  }

  .leftVideoNav {
    left: -14px;
  }

  .rightVideoNav {
    right: -14px;
  }

  #videoSrc {
    border-radius: 20px;
  }

  .tabContainer {
    width: 95%;
    height: auto;
    margin: auto;
    margin-top: 10px;
  }

  .tabContainerHeader {
    width: 95%;
    height: 15%;
    margin: auto;
    /* background-color: purple; */
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #000;
    /* padding-bottom: 5px; */
    margin-top: 20px;
  }

  .tab {
    width: 25%;
    line-height: 2;
    text-transform: uppercase;
    font-weight: 500;
    /* background-color: red; */
    text-align: center;
    padding: 5px;
    cursor: pointer;
  }

  .tab:hover {
    border-bottom: 5px solid #d9ab22;
  }

  .tabDescriptionButtonContainer {
    width: 55%;
    height: 8vh;
    position: fixed;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .tabButton {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25%;
    height: 35px;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    outline: none;
    background-color: #000;
    color: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }

  .tabButton:hover {
    color: #1252ae;
    background-color: #fff;
  }

  .tabButton:hover .tabButtonIcon {
    color: #1252ae;
  }

  .tabButtonIcon {
    width: 15%;
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    /* background-color: #ddebf2; */
  }

  .tabButtonText {
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    text-align: center;
  }

  /* ========================================================= */

  .navigationContainer {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .agentProfile {
    width: 100%;
    height: 10%;
    margin-top: 5%;
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .agentProfileName {
    width: 75%;
    height: 100%;
    margin: auto;
    display: flex;
    place-items: center;
    font-weight: 500;
    font-size: 15px;
  }

  .agentPicture {
    width: 20%;
    height: 70%;
    border-radius: 10px;
    position: relative;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }

  #agentProfile {
    border-radius: 10px;
  }

  .OnlineIndicator {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: #1252ae;
    z-index: 100;
    position: absolute;
    top: -3px;
    right: -5px;
    border: 2px solid #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    position: relative;
    /* overflow-y: scroll; */

    .navigationContainer {
      display: none;
    }

    .heroPageContainer {
      width: 100%;
      height: auto;
      /* overflow-y: auto; */
    }

    .breadCrumbContainer {
      margin-bottom: 0px;
    }

    .header {
      /* background-color: red; */
      flex-direction: column;
      height: 20vh;
    }

    .titleContainer {
      /* background-color: red; */
      width: 90%;
      margin: auto;
    }

    .houseLocation {
    }

    .houseTitle {
      font-size: 20px;
    }

    .priceDurationContainer {
      width: 90%;
      margin: auto;
    }

    .price {
      font-size: 20px;
      font-weight: 500;
      text-align: start;
    }

    .duration {
      text-align: start;
      font-size: 14px;
    }

    .heroPage {
      /* background-color: red; */
      height: auto !important;
    }

    .sectionTitle {
      line-height: 1.5;
      text-transform: capitalize;
      font-size: 18px;
      font-weight: 500;
      width: 80%;
      height: auto;
      margin: auto;
      text-align: end;
    }

    .videoView {
      width: 100%;
      height: 37vh;
      /* background-color: green; */
      margin-top: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .videoHeroContainer {
      width: 90%;
      height: 90%;
      border-radius: 1px;
    }

    .videoNav {
      display: none;
    }

    .tabDescriptionButtonContainer {
      width: 100%;
      margin: auto;
    }

    .tabButton {
      width: 20%;
      text-transform: capitalize;
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    position: relative;
    /* overflow-y: scroll; */

    .navigationContainer {
      display: none;
    }

    .heroPageContainer {
      width: 100%;
      height: auto;
      /* overflow-y: auto; */
    }

    .breadCrumbContainer {
      margin-bottom: 0px;
    }

    .header {
      /* background-color: red; */
      flex-direction: column;
      height: 20vh;
    }

    .titleContainer {
      /* background-color: red; */
      width: 90%;
      margin: auto;
    }

    .houseLocation {
    }

    .houseTitle {
      font-size: 20px;
    }

    .priceDurationContainer {
      width: 90%;
      margin: auto;
    }

    .price {
      font-size: 20px;
      font-weight: 500;
      text-align: start;
    }

    .duration {
      text-align: start;
      font-size: 14px;
    }

    .heroPage {
      /* background-color: red; */
      height: auto !important;
    }

    .sectionTitle {
      line-height: 1.5;
      text-transform: capitalize;
      font-size: 18px;
      font-weight: 500;
      width: 80%;
      height: auto;
      margin: auto;
      text-align: end;
    }

    .videoView {
      width: 100%;
      height: 37vh;
      /* background-color: green; */
      margin-top: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .videoHeroContainer {
      width: 90%;
      height: 90%;
      border-radius: 1px;
    }

    .videoNav {
      display: none;
    }

    .tabDescriptionButtonContainer {
      width: 100%;
      margin: auto;
    }

    .tabButton {
      width: 20%;
      text-transform: capitalize;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    position: relative;
    /* overflow-y: scroll; */

    .navigationContainer {
      display: none;
    }

    .heroPageContainer {
      width: 100%;
      height: auto;
      /* overflow-y: auto; */
    }

    .breadCrumbContainer {
      margin-bottom: 0px;
    }

    .header {
      /* background-color: red; */
      flex-direction: column;
      height: 20vh;
    }

    .titleContainer {
      /* background-color: red; */
      width: 90%;
      margin: auto;
    }

    .houseLocation {
    }

    .houseTitle {
      font-size: 20px;
    }

    .priceDurationContainer {
      width: 90%;
      margin: auto;
    }

    .price {
      font-size: 20px;
      font-weight: 500;
      text-align: start;
    }

    .duration {
      text-align: start;
      font-size: 14px;
    }

    .heroPage {
      /* background-color: red; */
      height: auto !important;
    }

    .sectionTitle {
      line-height: 1.5;
      text-transform: capitalize;
      font-size: 18px;
      font-weight: 500;
      width: 80%;
      height: auto;
      margin: auto;
      text-align: end;
    }

    .videoView {
      width: 100%;
      height: 37vh;
      /* background-color: green; */
      margin-top: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .videoHeroContainer {
      width: 90%;
      height: 90%;
      border-radius: 1px;
    }

    .videoNav {
      display: none;
    }

    .tabDescriptionButtonContainer {
      width: 100%;
      margin: auto;
    }

    .tabButton {
      width: 35%;
    }
  }
`;

export default StyledPerProperty;
