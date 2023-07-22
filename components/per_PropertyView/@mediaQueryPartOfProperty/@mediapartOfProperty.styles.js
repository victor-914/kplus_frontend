import styled from "styled-components";

const StyledMediaPartOfProperty = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  .searchBarContainer {
    width: 100%;
    height: 10vh;
  }

  .nav {
    width: 100%;
    height: 80%;
    background-color: #ecd591;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    /* background-color: red !important; */
    align-items: flex-start;
    padding-top: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .nav_SCROLL {
    overflow-y: scroll;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    margin: auto;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
  }

  .videoContainer {
    border: 2px solid rgba(0, 0, 0, 0);
    width: 30%;
    height: 25%;
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
    font-size: 10px;
    text-transform: capitalize;
    width: 100%;
    font-weight: 500;
    text-align: center;
  }
`;

export default StyledMediaPartOfProperty;
