import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

function Custom404() {
  const router = useRouter();
  return (
    <StyledCustom>
      <div onClick={() => router.push("/")}>404: click to go home</div>
    </StyledCustom>
  );
}

export default Custom404;

const StyledCustom = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  background-color: #000;
  letter-spacing: -1px;
`;
