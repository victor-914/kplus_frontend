import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../utils/Colors";

const Styledfooter = styled.section`
  width: 100%;
  background-color: ${secondaryColor};
  height: auto;
  padding-top: 4vh;
  color: #fff;
  line-height: 2;
  position: relative;
  top: 0;
  margin-top: 40px;

  a {
    color: #fff;
  }

  .upper_content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 1px solid #747474;
    padding-bottom: 1%;
    position: relative;
  }

  header {
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: capitalize;
  }

  .content {
    width: 25%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .get_direction {
    line-height: 2;
    font-size: 18px;
  }

  .button a {
    text-transform: uppercase;
    color: #d9ab22;
    font-weight: 800;
    cursor: pointer;
  }

  .icon_holder {
    display: flex;
    justify-content: space-around;

    padding-top: 20px;
    font-size: 30px;
  }

  .discuss_what_next {
    line-height: 2;
    font-size: 18px;
  }

  .dotted_img {
    position: absolute;
    right: 6px;
    top: 0;
    transform: translateY(-23px);
  }

  .lower_content {
    padding: 10px;
    text-align: center;
  }

  #svg_img {
    width: 100px;
  }

  .dotted_img_bottom {
    width: 200px;
    height: 200px;
    background-color: transparent;
    border-radius: 50%;
    transform: translate(-100px, -50px);
    z-index: -2;
    border: 1px dashed #fff;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .upper_content {
      flex-direction: column;
    }

    .content {
      width: 95%;
      margin: auto;
      align-items: center;
      margin-top: 20px;
    }

    .get_direction {
      padding-left: 20px;
    }

    header {
      font-size: 30px;
      text-align: center;
    }

    .social_community {
      margin-top: 20px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .upper_content {
      flex-direction: column;
    }

    .content {
      width: 95%;
      margin: auto;
      align-items: center;
      margin-top: 20px;
    }

    .get_direction {
      padding-left: 20px;
    }

    header {
      font-size: 30px;
      text-align: center;
    }

    .social_community {
      margin-top: 20px;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    & {
    }
    .upper_content {
      flex-direction: column;
    }

    .content {
      width: 95%;
      margin: auto;
      align-items: center;
      margin-top: 20px;
    }

    .get_direction {
      padding-left: 20px;
    }

    header {
      font-size: 20px;
      text-align: center;
    }

    .social_community {
      margin-top: 20px;
    }
  }
`;

export default Styledfooter;
