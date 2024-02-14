import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { FaRulerCombined } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { addCommasToNumber } from "../../utils/helperFunction";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
export default function NewsStack() {
  return (
    <StyledStack>
      <header className="stack-header">
        <Typography
          sx={{ color: "#000", fontSize: "35px", fontWeight: "bold" }}
        >
          Recent from Blog
        </Typography>
        <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
          Knowledge is Wealth
        </Typography>
      </header>
      <main className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </StyledStack>
  );
}

const StyledStack = styled.section`
  width: 100%;
  height: auto;
  padding: 30px;
  margin-top: 40px;

  .card-container {
    width: 70%;
    margin: auto;
    gap: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .stack-header {
    width: 60%;
    font-weight: 800;
    margin: auto;
    font-size: 18px;
    text-transform: capitalize;
    padding: 10px;
  }
`;

function Card({ data }) {
  const [price, setPrice] = useState();
  useEffect(() => {
    // setPrice(addCommasToNumber(data?.attributes?.price));
    return () => {};
  }, []);

  const router = useRouter();

  return (
    <StyledCard onClick={() => router.push(`/lands/${data?.id}`)}>
      <ImgContainer>
        {/* <Image
          src={data?.attributes?.images?.data?.[0]?.attributes?.url}
          alt="housePhoto"
          style={{ maxWidth: "100%" }}
          layout="fill"
          className="imgCard"
        /> */}
      </ImgContainer>
      <h1 className="header_card">Sample post</h1>

      <main className="content">
        <div className="content_text title">
          This blog post shows a few different types of content that are
          supported and styled with Material styles. Basic typography, images,
          and code are all supported. You can extend these by modifying
          Markdown.js.
        </div>

        <aside className="attributeCont">
          <div className="attribute">
            <div className="landSize">Share</div>
          </div>

          <div className="attribute">learn more</div>
        </aside>
      </main>
    </StyledCard>
  );
}

const StyledCard = styled.section`
  width: 370px;
  height: auto;
  position: relative;
  padding: 3px;
  cursor: pointer;
  border-radius: 4px;
  font-family: "Syne";
  border: 2px solid transparent;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.228);

  :hover {
    border: 2px solid #000;
  }

  .header_card {
    padding: 4px;
    text-align: start;
    font-weight: 600;
  }

  .content {
    width: 100%;
    height: auto;
  }

  .title {
    padding: 5px;
    font-size: 16px;
    font-weight: normal;
    color: #000;
    /* text-transform: capitalize; */
    letter-spacing: 0.5px;
  }

  .icon {
    color: #d9ab22;
    font-size: 20px;
    margin-right: 7px;
  }

  .attributeCont {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-top: 1px dashed #d9ab22;
    margin-top: 5px;
    text-transform: uppercase;
  }

  .attribute {
    width: 38%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
    /* border-right: 1px dashed #d9ab22; */
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 15vh;
  position: relative;
  margin: auto;
  margin-top: 5px;
  background-color: green;

  .imgCard {
    :hover {
      transform: scale(2);
      transition: transform 0.8s;
    }
  }
`;
