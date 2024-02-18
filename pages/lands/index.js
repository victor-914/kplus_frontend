import React, { useContext, useEffect, useState } from "react";
import api, { fetcher } from "../../utils/api";
import { useRouter } from "next/router";
import styled from "styled-components";
import Pagination from "../../components/pagination/Pagination";
import useSWR from "swr";
import Card from "../../components/card/Card";
import { Typography } from "@mui/material";
function LandListing({ landsProps }) {
  const [pageIndex, setPageIndex] = useState(1);
  const [lands, setLands] = useState([]);
  const router = useRouter();
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/lands?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=10`,
    fetcher,
    {
      fallbackData: landsProps,
    }
  );

  useEffect(() => {
    setLands(data.data);
    return () => {
      setLands([]);
    };
  }, [data, lands, router.isReady]);
  return (
    <>
      <StyledListing>
        <Typography
          sx={{
            width:"80%",
            margin:"auto",
            paddingBottom:"40px"
          }}
        variant="h4" gutterBottom className="header">
          Lands
        </Typography>
        <div className="landListing">
          {lands?.map((item) => (
            <div
              className="container"
              onClick={() => router.push(`/lands/${item?.id}`)}
            >
              <Card data={item} />
            </div>
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

export const getStaticProps = async () => {
  const resLand = await api.get(
    `/lands?populate=*&pagination[page]=1&pagination[pageSize]=5`
  );
  let landsProps = resLand.data;
  return { props: { landsProps } };
};

const StyledListing = styled.section`
  width: 95%;
  height: auto;
  margin: auto;
  gap: 20px;
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

export default LandListing;
