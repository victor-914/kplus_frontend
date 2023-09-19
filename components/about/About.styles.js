import styled from "styled-components";
import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from "../../utils/Colors";

const StyledAbout = styled.section`
  width: 95%;
  margin: auto;
  line-height: 1.5;

  .decorator_container {
    display: none;
  }

  .decorator_one {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    border-radius: 50%;
    transform: translate(60px, -150px);
    border: 2px dashed ${tertiaryColor};
    z-index: 1;
  }

  .decorator_two {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    border-radius: 50%;
    transform: translate(80px, -200px);
    z-index: 1;
  }

  .decorator_three {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    border-radius: 50%;
    transform: translate(100px, -200px);
    z-index: 1;
    border: 2px dashed #747474;
  }

  .header {
    width: 95%;
    margin: auto;
    height: 50%;
    font-size: calc(40px + 30 * ((100vw - 960px) / 540));
    line-height: calc(80px + 35 * ((100vw - 960px) / 540));
    padding-top: 30px;
    padding-left: 30px;
    letter-spacing: -2px;
    font-weight: 800;
  }

  .liner {
    width: 100px;
    height: 3px;
    background-color: ${tertiaryColor};
    transform: translateX(-50px);
  }

  .our_vision_text {
    width: 60%;
    margin: auto;
  }

  .text {
    width: 60%;
    margin: auto;
    padding-left: 10px;
    border-left: 1px solid ${tertiaryColor};
    font-weight: 300;
    text-align: justify;
    font-size: 18px;
  }

  span {
    font-weight: 800;
    color: ${tertiaryColor};
  }

  .padding {
    margin-bottom: 80px;
  }

  #hero_img {
    width: 500px;
    height: 400px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .image_holder {
    width: 50%;
    overflow-x: hidden;
  }

  .about_us {
    background-color: ${secondaryColor};
    color: #fff;
    padding-bottom: 20px;
  }

  .core {
    transform: translate(20%, 30px);
  }

  .our_coreValue {
    width: 93%;
    margin: auto;
    padding-bottom: 20px;
  }

  #our_coreValue_text {
    margin-left: 50px;
    padding-left: 10px;
    width: 47%;
  }

  .our_missionStatement {
    background-color: #ededed;
    margin-top: 80px;

  }

  #our_missionStatement_text {
    /* margin-left: 10%; */
    line-height: 1.4;
  }

  #mission_header {
    text-align: start;
    padding-left: 20%;
    font-size: 20px;
    background-color: red;
    transform: translateY(50px);
  }

  #image_holder {
    position: relative;
    /* transform: translateX(100px); */
  }

  header {
    font-size: calc(30px + 30 * ((100vw - 960px) / 540));
    line-height: calc(70px + 35 * ((100vw - 960px) / 540));
    text-align: center;
    font-weight: 700;
    letter-spacing: -2px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .decorator_container {
      display: none;
    }

    .header {
      font-size: calc(70px + 30 * ((100vw - 960px) / 540));
      padding-top: 30px;
    }

    .our_vision {
      margin-top: 40px;
    }

    .our_vision header {
      font-size: 30px;
      line-height: 2;
      color: #000;
    }

    .our_vision_text {
      width: 90%;
    }

    #about_us_header {
      font-size: 30px;
      line-height: 2;
    }

    .about_text {
      width: 90%;
      line-height: 1.4;
    }

    .text {
      font-size: 15px;
    }

    .core {
      font-size: 30px;
      line-height: 2;
      transform: translate(0%, 0px);
    }

    .flex {
      flex-direction: column;
    }

    .our_coreValue {
    }

    .shake_img {
    }

    .image_holder {
      height: 100%;
      width: 100%;
      position: relative;
    }

    #our_coreValue_text {
      width: 90%;
      margin: auto;
      margin-top: 30px;
      font-size: 14px;
      line-height: 1.4;
    }

    header {
      font-size: 30px;
      line-height: 2;
    }

    .our_missionStatement {
      margin-top: 40px;
      /* display: none; */
    }

    #mission_header {
      padding-left: 0px;
      margin: auto;
      text-align: center;
      transform: translateY(0px);
    }

    #our_missionStatement_text {
      width: 83%;
    }

    #hero_img {
      bottom: 0px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .decorator_container {
      display: none;
    }

    .header {
      font-size: calc(70px + 30 * ((100vw - 960px) / 540));
      padding-top: 100px;
    }

    .our_vision {
      margin-top: 40px;
    }

    .our_vision header {
      font-size: 30px;
      line-height: 2;
      color: #000;
    }

    .our_vision_text {
      width: 90%;
    }

    #about_us_header {
      font-size: 30px;
      line-height: 2;
    }

    .about_text {
      width: 90%;
      line-height: 1.4;
    }

    .text {
      font-size: 15px;
    }

    .core {
      font-size: 30px;
      line-height: 2;
      transform: translate(0%, 0px);
    }

    .flex {
      flex-direction: column;
    }

    .our_coreValue {
    }

    .shake_img {
    }

    .image_holder {
      height: 100%;
      width: 100%;
      position: relative;
    }

    #our_coreValue_text {
      width: 90%;
      margin: auto;
      margin-top: 30px;
      font-size: 14px;
      line-height: 1.4;
    }

    header {
      font-size: 30px;
      line-height: 2;
    }

    .our_missionStatement {
      margin-top: 40px;
    }

    #mission_header {
      padding-left: 0px;

      margin: auto;
      text-align: center;
      transform: translateY(0px);
    }

    #our_missionStatement_text {
      width: 83%;
    }

    #hero_img {
      bottom: 0px;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .decorator_container {
      display: none;
    }

    .header {
      font-size: calc(70px + 30 * ((100vw - 960px) / 540));
      padding-top: 100px;
    }

    .our_vision {
      margin-top: 40px;
    }

    .our_vision header {
      font-size: 30px;
      line-height: 2;
      color: #000;
    }

    .our_vision_text {
      width: 90%;
    }

    #about_us_header {
      font-size: 30px;
      line-height: 2;
    }

    .about_text {
      width: 90%;
      line-height: 1.4;
    }

    .text {
      font-size: 15px;
    }

    .core {
      font-size: 30px;
      line-height: 2;
      transform: translate(0%, 0px);
    }

    .flex {
      flex-direction: column;
    }

    .our_coreValue {
    }

    .shake_img {
    }

    .image_holder {
      height: 100%;
      width: 100%;
      position: relative;
    }

    #our_coreValue_text {
      width: 90%;
      margin: auto;
      margin-top: 30px;
      font-size: 14px;
      line-height: 1.4;
    }

    header {
      font-size: 30px;
      line-height: 2;
    }

    .our_missionStatement {
      margin-top: 40px;
    }

    #mission_header {
      padding-left: 0px;

      margin: auto;
      text-align: center;
      transform: translateY(0px);
    }

    #our_missionStatement_text {
      width: 83%;
    }

    #hero_img {
      bottom: 0px;
    }
  }
`;

export default StyledAbout;
