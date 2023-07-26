import styled from "styled-components";
import { primaryColor2, tertiaryColor } from "../../utils/Colors";
const StyledTalktous = styled.section`
  .viewService_container {
    width: 100%;

    margin: auto;
    height: auto;
    margin: 0px 0px 80px 0px;
  }

  .view_decorator {
    display: none;
  }

  .viewService {
    width: 60%;

    overflow: hidden;
    height: 100%;
    text-align: center;
    margin: auto;
    background-color: #000;
    line-height: 1.5;

    padding-top: 50px;

    color: #fff;
  }

  .view_header {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -2px;
  }

  .view_subheader {
    font-size: 18px;

    margin: 10px 0px 10px 0px;
  }

  .work_withus {
    font-size: 22px;
    font-weight: 700;

    text-align: center;
    line-height: 2.4;
    width: 50%;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;

    letter-spacing: -1px;

    background-color: ${tertiaryColor};
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    & {
      height: 200px;

      margin-bottom: 10px;
    }

    .viewService_container {
      margin-top: 10px;
    }

    .view_decorator {
      display: none;
    }

    .viewService {
      width: 95%;
      height: auto;
      margin: auto;
      padding: 0px;
    }

    .view_header {
      font-size: 30px;
      letter-spacing: -2px;
      padding-left: 5px;
    }

    .view_subheader {
      margin: 0px;

      letter-spacing: -1px;
      padding-left: 10px;
    }

    .work_withus {
      line-height: 2.4;
      width: 50%;

      font-size: 18px;
      letter-spacing: -1px;

      background-color: ${tertiaryColor};
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    & {
      height: 200px;

      margin-bottom: 10px;
    }

    .viewService_container {
      margin-top: 10px;
    }

    .view_decorator {
      display: none;
    }

    .viewService {
      width: 95%;
      height: auto;
      margin: auto;
      padding: 0px;
    }

    .view_header {
      font-size: 30px;
      letter-spacing: -2px;
      padding-left: 5px;
    }

    .view_subheader {
      margin: 0px;

      letter-spacing: -1px;
      padding-left: 10px;
    }

    .work_withus {
      line-height: 2.4;
      width: 50%;

      font-size: 18px;
      letter-spacing: -1px;

      background-color: ${tertiaryColor};
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    & {
      height: 200px;
      margin-bottom: 40px;
    }

    .viewService_container {
      margin-top: 10px;
    }

    .view_decorator {
      display: none;
    }

    .viewService {
      width: 95%;
      height: auto;
      margin: auto;
      padding: 0px;
    }

    .view_header {
      font-size: 30px;
      letter-spacing: -2px;
      padding-left: 5px;
    }

    .view_subheader {
      margin: 0px;

      letter-spacing: -1px;
      padding-left: 10px;
    }

    .work_withus {
      line-height: 2.4;
      width: 50%;

      font-size: 18px;
      letter-spacing: -1px;

      background-color: ${tertiaryColor};
    }
  }
`;

export default StyledTalktous;
