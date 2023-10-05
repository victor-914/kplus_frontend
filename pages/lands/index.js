import React, { useContext, useEffect, useState } from "react";
import api, { fetcher } from "../../utils/api";
import { useRouter } from "next/router";
import styled from "styled-components";
import Pagination from "../../components/pagination/Pagination";
import useSWR from "swr";
import Card from "../../components/card/Card";
function LandListing({ landsProps }) {
  const [pageIndex, setPageIndex] = useState(1);
  const [lands, setLands] = useState([]);
  const router = useRouter();
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/lands?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=5`,
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
      <StyledListing className="landListing">
        {lands?.map((item) => (
          <div
            className="container"
            onClick={() => router.push(`/lands/${item.id}`)}
          >
            <Card data={item} />
          </div>
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

export const getStaticProps = async () => {
  const resLand = await api.get(
    `/lands?populate=*&pagination[page]=1&pagination[pageSize]=5`
  );
  let landsProps = resLand.data;
  return { props: { landsProps } };
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

export default LandListing;
