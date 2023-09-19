import React, { useState, useEffect } from "react";
import HouseModel from "../../components/perModel/houseModel";
import api, { fetcher } from "../../utils/api";
import styled from "styled-components";
import HomeCarousel from "../../components/homeCarousel/HomeCarousel";
import Pagination from "../../components/pagination/Pagination";
import { useRouter } from "next/router";
import useSWR from "swr";

function HouseListing({ housesProps }) {
  const [pageIndex, setPageIndex] = useState(1);
  const [houses, setHouses] = useState([]);
  const router = useRouter();
  const { data } = useSWR(
    `https://jeffy-realty.onrender.com/api/houses?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=1`,
    fetcher,
    {
      fallbackData: housesProps,
    }
  );

  useEffect(() => {
    setHouses(data?.data);
    console.log(data)

    return () => {
      setHouses([]);
    };
  }, [data, houses, router.isReady]);

  return (
    <>
      {/* <HomeCarousel /> */}
      <StyledListing>
        {houses?.map((item) => (
          <HouseModel data={item} />
        ))}
      </StyledListing>
      <Pagination
        data={data?.meta}
        stateIndex={pageIndex}
        setstateIndex={setPageIndex}
      />
    </>
  );
}

export default HouseListing;

export const getStaticProps = async () => {
  const resLand = await api.get(
    `/houses?populate=*&pagination[page]=1&pagination[pageSize]=1`
  );
  let housesProps = resLand.data;

  return { props: { housesProps } };
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
    background-color: red;
  }
`;
