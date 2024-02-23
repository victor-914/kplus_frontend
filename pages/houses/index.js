import React, { useState, useEffect } from "react";
import HouseModel from "../../components/perModel/houseModel";
import api, { fetcher } from "../../utils/api";
import styled from "styled-components";
import HomeCarousel from "../../components/homeCarousel/HomeCarousel";
import Pagination from "../../components/pagination/Pagination";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Typography } from "@mui/material";

function HouseListing({ housesProps }) {
  const [pageIndex, setPageIndex] = useState(1);
  const [houses, setHouses] = useState([]);
  const router = useRouter();
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/houses?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=5`,
    fetcher,
    {
      fallbackData: housesProps,
    }
  );

  useEffect(() => {
    setHouses(data?.data);
    console.log(data);

    return () => {
      setHouses([]);
    };
  }, [data, houses, router.isReady]);

  return (
    <>
      <StyledListing>
        <Typography
          sx={{
            margin: "auto",
            paddingBottom: "40px",
            textAlign: "center",
          }}
          variant="h4"
          className="header"
        >
          Houses
        </Typography>
        <div className="landListing">
          {houses?.map((item) => (
            <HouseModel key={item.id} data={item} />
          ))}
        </div>
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
  try {
    const resHouse = await api.get(
      `/houses?populate=*&pagination[page]=1&pagination[pageSize]=5`
    );
    let housesProps = resHouse.data;

    return { props: { housesProps } };
  } catch (error) {
    return {};
  }
};
const StyledListing = styled.section`
  width: 95%;
  height: auto;
  margin: auto;
  padding-top: 40px;
  padding-bottom: 40px;

  .landListing {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  .container {
    width: auto;
  }
`;
