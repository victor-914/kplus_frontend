import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaRulerCombined } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiBed } from "react-icons/gi";
import { FaToilet } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import Image from "next/image";
import { addCommasToNumber } from "../../utils/helperFunction";
import { Button } from "@mui/material";
export default function MyPropCard({ data }) {
  const [price, setPrice] = useState();
  useEffect(() => {
    setPrice(addCommasToNumber(data?.price));
    return () => {};
  }, []);
  const router = useRouter();
  const handleRouting = (id) => {
    if (data?.landSize) {
      router.push(`/lands/${id}`);
    } else {
      router.push(`/houses/${id}`);
    }
  };
  return (
    <StyledCard onClick={() => handleRouting(data?.id)}>
      <ImgContainer>
        <Image
          src={data?.image?.url}
          alt="housePhoto"
          style={{ maxWidth: "100%" }}
          layout="fill"
          className="imgCard"
        />
        <span className="propStatus">for sale</span>
      </ImgContainer>

      <main className="content">
        <div className="content_text price">&#8358;{price}</div>

        <div className="content_text title">{data?.title}</div>

        <div className="content_text address">
          <span>
            <MdLocationOn className="icon" />
          </span>
          {data?.streetName + " " + data?.city + " " + data?.state}
        </div>

        {data?.bathroom && (
          <aside className="attributeCont">
            <div className="attribute">
              <GiBed />
              <div className="landSize">{data?.bedroom} Bed</div>
            </div>
            <div className="attributeMiddle"></div>
            <div className="attribute">
              <FaToilet />
              <div className="landSize">{data?.bathroom} Bath</div>
            </div>
          </aside>
        )}

        {data?.landSize && (
          <aside className="attributeCont">
            <div className="attribute">
              <FaRulerCombined />
              <div className="landSize">{data?.landSize}</div>
            </div>
            <div className="attributeMiddle"></div>
            <div className="attribute">
              C of O
              <div className="landSize">
                <GrStatusGood className="good" />
              </div>
            </div>
          </aside>
        )}

        <div className="buttonCont">
          <Button
            sx={{
              backgroundColor: "#d9ab22 !important",
              color: "#fff !important",
            }}
          >
            view
          </Button>
          <Button
            sx={{
              backgroundColor: "#d9ab22 !important",
              color: "#fff !important",
            }}
          >
            edit
          </Button>
        </div>
      </main>
    </StyledCard>
  );
}

const StyledCard = styled.section`
  width: 370px;
  height: auto;
  position: relative;
  padding: 7px;
  cursor: pointer;
  border-radius: 7px;
  font-family: "Syne";
  border: 2px solid transparent;
  transition: 0.3;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.317);

  :hover {
    border: 2px solid #000;
  }

  .buttonCont {
    padding: 8px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: auto;
    border-top: 1px dashed #000;
    margin: 8px 0px 0px 0px;
  }

  .propStatus {
    padding: 7px;
    text-transform: capitalize;
    top: 5px;
    left: 5px;
    border-radius: 4.1;
    font-weight: 600;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.317);

    position: absolute;
    background-color: #d9ab22;
  }

  .content {
    width: 100%;
    height: auto;
  }

  .price {
    padding: 5px;
    font-size: 20px;
    font-weight: 800;
    color: #d9ab22;
    letter-spacing: 0.5px;
  }
  .title {
    padding: 5px;
    font-size: 20px;
    font-weight: 800;
    color: #000;
    text-transform: capitalize;
    letter-spacing: 0.5px;
  }

  .address {
    width: 100%;
    font-size: 16px;
    font-weight: 300;
    color: #555151;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: flex-start;
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
  }

  .attribute {
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 800;
    /* border-right: 1px dashed #d9ab22; */
  }

  .attributeMiddle {
    border-right: 2px dashed #d9ab22;
    border-left: 2px dashed #d9ab22;
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .landSize {
    font-weight: 800;
  }

  .good {
    background-color: #2ba303;
    border-radius: 50%;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 20vh;
  position: relative;
  margin: auto;
  margin-top: 5px;

  .imgCard {
    :hover {
      transform: scale(2);
      transition: transform 0.8s;
    }
  }
`;
