import styled from "styled-components";

const StyledPartOfPropertyView = styled.section`
  width: 100%;
  height: 100vh;
  display: none;
  .searchBarContainer {
    width: 100%;
    height: 10vh;
  }

  .navBar {
    width: 100%;
    height: 80%;
    background-color: #ecd591;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: flex-start;
    padding-top: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    overflow-y: scroll;
  }

  .videoContainer {
    border: 2px solid rgba(0, 0, 0, 0);
    width: 40%;
    height: 30%;
    padding: 1%;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 4px;
  }

  .videoContainer:hover {
    background-color: #000;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }

  .videoContainer:hover .videoTitle {
    color: #fff;
  }

  .videoSrcContainer {
    width: 100%;
    height: 80%;
    position: relative;
  }

  .videoTitle {
    font-size: 13px;
    text-transform: capitalize;
    width: 100%;
    font-weight: 500;
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    height: 20vh;
    display: block;
    .navBar {
      width: 100%;
      margin: auto;
      border-radius: 0px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .navBar_SCROLL {
      box-shadow: none;
      overflow-x: scroll;
      overflow-y: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin: auto;
      width: 150vh;
      height: 100%;
      flex-wrap: nowrap !important;
    }

    .navBar::-webkit-scrollbar {
      width: 3px;
      height: 5px;
    }

    .navBar::-webkit-scrollbar-thumb {
      background: #1252ae;
    }

    .navBar::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
    }

    .videoContainer {
      min-width: 100px !important;
      width: 100px;
      height: 70%;
      margin-top: 0px;
      margin-right: 10px;
      margin-left: 10px;
    }

    .videoTitle {
      font-weight: 300;
      font-size: 13px;
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    height: 20vh;
    display: block;
    .navBar {
      width: 100%;
      margin: auto;
      border-radius: 0px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .navBar_SCROLL {
      box-shadow: none;
      overflow-x: scroll;
      overflow-y: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin: auto;
      width: 150vh;
      height: 100%;
      flex-wrap: nowrap !important;
    }

    .navBar::-webkit-scrollbar {
      width: 3px;
      height: 5px;
    }

    .navBar::-webkit-scrollbar-thumb {
      background: #1252ae;
    }

    .navBar::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
    }

    .videoContainer {
      min-width: 100px !important;
      width: 100px;
      height: 70%;
      margin-top: 0px;
      margin-right: 10px;
      margin-left: 10px;
    }

    .videoTitle {
      font-weight: 300;
      font-size: 13px;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 25vh;
    display: block;
    .navBar {
      width: 100%;
      margin: auto;
      border-radius: 0px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .navBar_SCROLL {
      box-shadow: none;
      overflow-x: scroll;
      overflow-y: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin: auto;
      width: 150vh;
      height: 100%;
      flex-wrap: nowrap !important;
    }

    .navBar::-webkit-scrollbar {
      width: 3px;
      height: 5px;
    }

    .navBar::-webkit-scrollbar-thumb {
      background: #1252ae;
    }

    .navBar::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
    }

    .videoContainer {
      min-width: 100px !important;
      width: 100px;
      height: 80%;
      margin-top: 0px;
      margin-right: 10px;
      margin-left: 10px;
    }

    .videoTitle {
      font-weight: 800;
      font-size: 10px;
    }
  }
`;

export default StyledPartOfPropertyView;
