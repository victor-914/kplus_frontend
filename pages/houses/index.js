"use client";

import React, { useState, useEffect, useRef } from "react";
import api, { fetcher } from "../../utils/api";
import styled from "styled-components";
import Pagination from "../../components/pagination/Pagination";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Typography } from "@mui/material";
import { StyledAnimatedProductView } from "../../animations/ProductView";
import HouseModel from "../../components/perModel/houseModel";
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
            position: "fixed",
            top: "0px",
          }}
          variant="h4"
          className="header"
        >
          Houses
        </Typography>
        <div className="gallery">
          {houses?.map((item) => (
            <>
              <HouseModel key={item.id} data={item} />
            </>
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

    return { props: { housesProps }, revalidate: 60 };
  } catch (error) {
    return {};
  }
};
const StyledListing = styled.section`
  width: 95%;
  height: auto;
  margin: auto;
  box-sizing: border-box;

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

  .gallery{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;
