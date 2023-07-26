import React, { useContext } from "react";
import HouseModel from "../../components/perModel/houseModel";
import api from "../../utils/api";
import styled from "styled-components";
import { SpecimenContext } from "../../context/contextProvider";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
function HouseListing(props) {
  const { land, house, setLand, setHouse } = useContext(SpecimenContext);

  useEffect(() => {
    if (props.data.data) {
      setHouse(props.data.data);
      console.log(house, "house@indexhouse");
    }
    return () => {};
  }, []);

  return (
    <>
      <StyledListing>
        {props?.data?.data?.map((item) => (
          <HouseModel data={item} />
        ))}
      </StyledListing>
      <Footer />
    </>
  );
}

export default HouseListing;

export const getStaticProps = async () => {
  const resLand = await api.get(`/houses?populate=*`);
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
  padding-bottom: 40px;

  .container {
    width: auto;
  }
`;
