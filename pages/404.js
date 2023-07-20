import React from "react";
import styled from "styled-components";
function Custom404() {
  return (
    <StyledCustom>
      <div>No Content Yet</div>
    </StyledCustom>
  );
}

export default Custom404;

const StyledCustom = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -1px;
`;
