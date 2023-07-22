import React from "react";
import api from "../../utils/api";
import LandModel from "../../components/perModel/landModel";
import { useRouter } from "next/router";
import styled from "styled-components";
function LandListing(props) {
  const router = useRouter();

  return (
    <StyledListing className="landListing">
      {props.data.data.map((item) => (
        <div
          className="container"
          onClick={() => router.push(`/land/${item.id}`)}
        >
          <LandModel data={item} />
        </div>
      ))}
    </StyledListing>
  );
}

const StyledListing = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  .container {
    width: auto;
  }
`;

export default LandListing;

export const getStaticProps = async () => {
  const resLand = await api.get(`/lands?populate=*`);
  let data = resLand.data;
  return { props: { data } };
};
