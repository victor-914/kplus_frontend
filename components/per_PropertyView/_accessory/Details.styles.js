import styled from "styled-components";

const StyledDetails = styled.section`
  width: 94%;
  height: auto;
  margin: auto;
  text-transform: capitalize;
  padding-bottom: 30px;

  .realtorButton {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
  }

  .icon{
    margin: 5px;
  }

  .detailsContainer {
    width: 95%;
    height: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin-top: 30px;
  }

  .detailPerList {
    display: flex;
    width: 95%;
    height: auto;
    padding: 8px;
    justify-content: space-between;
    margin: auto;
    text-transform: uppercase;
    font-weight: 800;
    background-color: green;
    /* border-radius: 2px; */
  }

  .detailPerList:nth-child(odd) {
    background-color: #d9ab22;
    color: #000;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  }

  .detailPerList:nth-child(even) {
    background-color: #ecd591;
    color: #000;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }

  .detailTitle {
    width: 30%;
    height: 100%;
    display: flex;
    font-weight: 800;
    align-items: center;
    justify-content: flex-start;
    text-transform:uppercase;
    font-size: 18px;
  }
  .detailValue {
    display: flex;
    width: 60%;
    height: 100%;
    font-weight: 800;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .subArrayItem {
    margin-left: 10px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin: auto;
    /* background-color: red; */
    .detailsContainer {
      width: 100%;
      margin: auto;
      /* background-color: #1252ae; */
      margin-top: 10px;
    }

    .detailPerList {
      width: 90%;
      margin: auto;
      /* padding: 8px; */
      /* line-height: 1.2; */
    }

    .detailTitle {
      font-weight: 300;
    }

    .detailValue {
      justify-content: flex-end;
      font-weight: 300;
    }
  }
`;

export default StyledDetails;
