import React, { useContext, useEffect } from "react";
import api from "../../utils/api";
import LandModel from "../../components/perModel/landModel";
import { useRouter } from "next/router";
import styled from "styled-components";
import { SpecimenContext } from "../../context/contextProvider";

function LandListing(props) {
  const router = useRouter();
  const { land, house, setLand, setHouse } = useContext(SpecimenContext);

  useEffect(() => {
    if (props.data.data) {
      setLand(props.data.data);
    }
    return () => {};
  }, []);
  return (
    <StyledListing className="landListing">
      {props?.data.data.map((item) => (
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

export const getStaticProps = async () => {
  const resLand = await api.get(`/lands?populate=*`);
  let data = resLand.data;
  return { props: { data } };
};

const StyledListing = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  .container {
    width: auto;
  }
`;

export default LandListing;
