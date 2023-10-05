import styled from "styled-components";
import {
  primaryColor,
  primaryColor2,
  secondaryColor,
  tertiaryColor,
} from "../../utils/Colors";

const StyledContact = styled.section`
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;

  .empty_wedge {
    background-color: transparent;
    width: 100%;
    height: 30px;
  }

  .decorator_container {
    display: none;
  }

  .decorator_one {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    border-radius: 50%;
    transform: translate(160px, -200px);
    border: 2px dashed ${tertiaryColor};
    z-index: 1;
  }

  .decorator_two {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: ${primaryColor2};
    border-radius: 50%;
    transform: translate(230px, -240px);
    z-index: 1;
  }

  .decorator_three {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    border-radius: 50%;
    transform: translate(210px, -220px);
    z-index: 1;
    border: 2px dashed #747474;
  }

  .header_container {
    height: 200px;
    width: 90%;
    margin: auto;
  }

  .header_container header {
    font-size: calc(40px + 30 * ((100vw - 960px) / 540));
    line-height: calc(80px + 35 * ((100vw - 960px) / 540));
    font-weight: 700;
    letter-spacing: -2px;
  }

  .liner {
    width: 100px;
    height: 3px;
    background-color: ${tertiaryColor};

    transform: translateX(-50px);
  }

  .form_address_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 98%;
    margin: auto;
    height: auto;
    z-index: 10;
  }

  .divide {
    width: 48%;
    height: 45em;
  }

  .conversation {
    font-size: calc(35px + 5 * ((100vw - 767px) / 333));
    line-height: calc(40px + 15 * ((100vw - 767px) / 333));
    font-weight: 700;
  }

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
  }

  label {
    margin: 10px;
    font-weight: 800;
  }

  input {
    width: 100%;
    height: 40px;
    margin-top: 4px;
    border-radius: 5px;
    border: 1px solid #000;
    padding: 8px;
  }

  textarea {
    margin: 10px;
    margin-top: 30px;
    height: 250px;
    border-radius: 5px;
    padding: 8px;
    resize: none;
    color: #000;
    border: 1px solid #000;
  }

  .btnContainer{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }

  .submit {
    line-height: 4;
    width: 90%;
    margin: auto;
    color: #fff;
    padding-left: 20px;
    font-weight: 800;
    background-color: ${tertiaryColor};
  }

  .address {
    z-index: 100;
    background-color: ${secondaryColor};

    color: #fff;
  }

  .speak_to_us {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
  }

  .speak_tel {
    width: 50%;
  }

  .tel {
    font-size: 30px;
    font-weight: 700;
    padding-left: 20px;
    line-height: 2;
  }

  .email_container {
    font-size: 30px;
    font-weight: 700;
    line-height: 2;
    margin-top: 40px;
  }

  .email_container span {
    padding-left: 15px;
  }

  .email_liner {
    width: 100px;
    height: 3px;
    background-color: ${tertiaryColor};
    margin-top: 20px;
  }

  .speak_headOffice {
    width: 50%;
  }

  .address header {
    font-size: 15px;
    text-transform: uppercase;
    padding-top: 30px;
    padding-left: 20px;
    font-weight: 700;

    letter-spacing: 2px;
  }

  .address_divide {
    width: 100%;
    height: 50%;
  }

  .address_liner {
    width: 100px;
    height: 3px;
    background-color: ${tertiaryColor};
    margin-top: 20px;
  }

  .other_office {
    padding-top: 80px;
  }

  .address_container {
    display: flex;
  }

  .office {
    width: 50%;
  }

  .main_address {
    font-size: 30px;
    font-weight: 700;
    line-height: 2;
    padding-left: 15px;
  }

  .sub_address {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5;
    padding-left: 15px;
  }

  .direction {
    text-transform: uppercase;

    font-size: 17px;
    font-weight: 700;
    margin-top: 18px;
    padding-left: 15px;
    color: ${primaryColor};
  }

  .submit {
    background-color: red;
    line-height: 2.5;
    bottom: -50px;
    text-align: center;
    width: 40%;
    padding-left: 0px;
    text-transform: capitalize;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    background-color: ${tertiaryColor};
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    overflow-x: hidden;

    .header_container {
      height: 100px;
    }

    .header_container header {
      /* background-color: green ; */
      /* display: none; */
      font-size: calc(70px + 30 * ((100vw - 960px) / 540));
      /* line-height: calc(80px + 35 * ((100vw - 960px) / 540)); */
      font-weight: 700;
      letter-spacing: -2px;
    }

    .form_address_container {
      flex-direction: column;
    }

    .divide {
      /* background-color: red; */
      width: 95%;
      margin: auto;
    }

    .address {
      /* background-color: green; */
    }

    .conversation {
      font-size: calc(35px + 5 * ((100vw - 767px) / 333));
      line-height: calc(60px + 15 * ((100vw - 767px) / 333));
      font-weight: 700;
      margin-bottom: 10px;
    }

    .speak_to_us {
      flex-direction: column;
      height: auto;
    }

    .address_divide {
      /* background-color: red; */
    }

    .other_office {
      background-color: beige;
      padding: 0;
      display: NONE;
    }

    .submit {
      /* bottom: 150px; */
      width: 20%;
    }

    form {
      /* background-color: green; */
      /* display: none; */
      width: 90%;
      margin: auto;
      padding-left: 8px;
    }

    .submit {
      /* margin-bottom: 300px; */
      /* bottom: -50px; */
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    /* background-color: red; */
    overflow-x: hidden;

    .decorator_one,
    .decorator_two,
    .decorator_three {
      /* background-color: green; */
      display: none;
    }

    .header_container {
      height: 100px;
    }

    .header_container header {
      /* background-color: green ; */
      /* display: none; */
      font-size: calc(70px + 30 * ((100vw - 960px) / 540));
      /* line-height: calc(80px + 35 * ((100vw - 960px) / 540)); */
      font-weight: 700;
      letter-spacing: -2px;
    }

    .form_address_container {
      flex-direction: column;
    }

    .divide {
      /* background-color: red; */
      width: 95%;
      margin: auto;
    }

    .address {
      /* background-color: green; */
      margin-top: 40px;
    }

    .conversation {
      font-size: calc(35px + 5 * ((100vw - 767px) / 333));
      line-height: calc(60px + 15 * ((100vw - 767px) / 333));
      font-weight: 700;
      margin-bottom: 30px;
    }

    .speak_to_us {
      flex-direction: column;
      height: auto;
    }

    .address_divide {
      /* background-color: red; */
    }

    .other_office {
      background-color: beige;
      padding: 0;
      display: NONE;
    }

    .submit {
      background-color: red;
      line-height: 2.5;
      bottom: -20px;
      text-align: center;
      width: 40%;
      padding-left: 0px;
      text-transform: capitalize;
      cursor: pointer;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      background-color: ${tertiaryColor};
    }

    .speak_tel {
      /* background-color: red; */
      width: 100%;
    }

    .tel {
      font-size: 20px;
    }

    .email_container {
      font-size: 20px;
    }

    .speak_headOffice {
      width: 100%;
      /* background-color:rebeccapurple; */
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    /* background-color: red; */
    overflow-x: hidden;

    .decorator_container {
      /* background-color: green; */
      display: none;
    }

    .header_container {
      height: 100px;
    }

    .header_container header {
      /* background-color: green ; */
      /* display: none; */
      font-size: calc(70px + 30 * ((100vw - 960px) / 540));
      /* line-height: calc(80px + 35 * ((100vw - 960px) / 540)); */
      font-weight: 700;
      letter-spacing: -2px;
    }

    .form_address_container {
      flex-direction: column;
    }

    .divide {
      /* background-color: red; */
      width: 95%;
      margin: auto;
    }

    .address {
      /* background-color: green; */
    }

    .conversation {
      font-size: calc(35px + 5 * ((100vw - 767px) / 333));
      line-height: calc(60px + 15 * ((100vw - 767px) / 333));
      font-weight: 700;
      margin-bottom: 30px;
    }

    .speak_to_us {
      flex-direction: column;
      height: auto;
    }

    .address_divide {
      /* background-color: red; */
    }

    .other_office {
      background-color: beige;
      padding: 0;
      display: NONE;
    }

    .submit {
      bottom: 150px;
      width: 20%;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    /* background-color: red; */
    overflow-x: hidden;

    .decorator_one,
    .decorator_two,
    .decorator_three {
      /* background-color: green; */
      display: none;
    }

    .header_container {
      height: 100px;
    }

    .header_container header {
      /* background-color: green ; */
      /* display: none; */
      font-size: calc(70px + 30 * ((100vw - 960px) / 540));
      /* line-height: calc(80px + 35 * ((100vw - 960px) / 540)); */
      font-weight: 700;
      letter-spacing: -2px;
    }

    .form_address_container {
      flex-direction: column;
    }

    .divide {
      /* background-color: red; */
      width: 95%;
      margin: auto;
    }

    .address {
      /* background-color: green; */
      margin-top: 40px;
    }

    .conversation {
      font-size: calc(35px + 5 * ((100vw - 767px) / 333));
      line-height: calc(60px + 15 * ((100vw - 767px) / 333));
      font-weight: 700;
      margin-bottom: 30px;
    }

    .speak_to_us {
      flex-direction: column;
      height: auto;
    }

    .address_divide {
      /* background-color: red; */
    }

    .other_office {
      background-color: beige;
      padding: 0;
      display: NONE;
    }

    .submit {
      background-color: red;
      line-height: 2.5;
      bottom: -20px;
      text-align: center;
      width: 40%;
      padding-left: 0px;
      text-transform: capitalize;
      cursor: pointer;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      background-color: ${tertiaryColor};
    }

    .speak_tel {
      /* background-color: red; */
      width: 100%;
    }

    .tel {
      font-size: 20px;
    }

    .email_container {
      font-size: 20px;
    }

    .speak_headOffice {
      width: 100%;
      /* background-color:rebeccapurple; */
    }
  }
`;

export default StyledContact;
