import React, { useState, useEffect } from "react";
import NAVLISTARRAY from "../../utils/NavListArray";

import Image from "next/image";
import call from "/assets/call_icon.svg";
import styled from "styled-components";
import { primaryColor } from "../../utils/Colors";

function ContactNavBar() {

  const [navColor, setnavColor] = useState("transparent");
  const [color, setColor] = useState("#015998");
  const [shadow, setShadow] = useState("");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#fff") : setnavColor("transparent");
    window.scrollY > 10 ? setColor("#0089c8") : setColor("#0089c8");
    window.scrollY > 10
      ? setShadow("0px 4px 10px rgba(0, 0, 0, 0.25)")
      : setShadow("");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <StyledContactNavBar 
      style={{
        backgroundColor: `${navColor}`,
        color: `${color}`,
        boxShadow: `${shadow}`,
      }}
    >
      <div className="logo_section"></div>
      {NAVLISTARRAY.map((items) => (
        <div key={items.item} className={items.className}>
          {items.item}
        </div>
      ))}

      <div className="call_section">
        <div className="call_icon">
          <Image src={call} width="30px" />
        </div>
        <div className="call_number">082-452-1345</div>
      </div>
    </StyledContactNavBar >
  );
}

export default ContactNavBar;

export const StyledContactNavBar = styled.section`
  width: 100%;
  height: 90px;
  margin: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  

  z-index: 300;
  position: fixed;
  background-color: transparent;
  .logo_section {
    width: 30%;
    background-color: transparent;
    height: 100%;
  }

  .nav_target {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
  }

  .call_section {
    background-color: #fff;
    width: 12%;
    text-align: center;
    height: 48%;

    display: flex;
    justify-content: space-around;
    align-items: center;
    justify-content: space-around;
    color: #fff;
    background-color: ${primaryColor};
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .call_icon {
  }
   
   @media (min-width: 320px)   and (max-width:1024px){  
    display: none;
   }
`;
