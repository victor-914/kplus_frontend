import { Box, Container, styled as styles, Typography } from "@mui/material";
import React from "react";
import HouseModel from "./perModel/houseModel";
import useSWR from "swr";
import { fetcher } from "../utils/api";
import styled from "styled-components";
import { useRouter } from "next/router";
const Properties = () => {
  const PropertiesBox = styles(Box)(({ theme }) => ({
    display: "flex",
    height:"auto",
    flexWrap:"wrap",
    justifyContent: "center",
    gap: "0px",
    marginTop:"50px",
  }));

  const PropertiesTextBox = styles(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  const router = useRouter();

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/houses?populate=*&pagination[page]=1&pagination[pageSize]=3`,
    fetcher
  );

  return (
    <Box sx={{ mt: 5, backgroundColor: "#f7eed3", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000", fontSize: "35px", fontWeight: "bold" }}
          >
            Latest Homes
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
            Everything you need to know when looking for a new home!
          </Typography>
        </PropertiesTextBox>

        <PropertiesBox>
          {data?.data?.map((item) => (
            <>
              <HouseModel key={item.id} data={item} />
              <HouseModel key={item.id} data={item} />{" "}
              <HouseModel key={item.id} data={item} />
              <HouseModel key={item.id} data={item} />
              <HouseModel key={item.id} data={item} />{" "}
              <HouseModel key={item.id} data={item} />
              <HouseModel key={item.id} data={item} />
              <HouseModel key={item.id} data={item} />{" "}
              <HouseModel key={item.id} data={item} />
              <HouseModel key={item.id} data={item} />
              <HouseModel key={item.id} data={item} />{" "}
              <HouseModel key={item.id} data={item} />
            </>
          ))}
        </PropertiesBox>
      </Container>
      <StyledBrowse
        onClick={() => router.push("houses")}
        className="browseContainer"
      >
        <button className="browseMoreBtn">Browse More Property</button>
      </StyledBrowse>
    </Box>
  );
};

export default Properties;

export const StyledBrowse = styled.div`
  width: 100%;
  padding-top: 8%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    padding: 20px;
    background-color: #000;
    cursor: pointer;
  }

  button:hover {
    background-color: #d9ab22;
    color: #000;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.317);
  }
`;
