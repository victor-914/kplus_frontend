import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaRulerCombined } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiBed } from "react-icons/gi";
import styled from "styled-components";
import { addCommasToNumber } from "../../utils/helperFunction";
import { FaToilet } from "react-icons/fa";
import { useRouter } from "next/router";
function HouseModel({ data }) {
  const [price, setPrice] = useState();
  useEffect(() => {
    setPrice(addCommasToNumber(data.attributes.price));
    return () => {};
  }, []);
  const router = useRouter();

  return (
    <StyledCard onClick={() => router.push(`/houses/${data.id}`)}>
      <ImgContainer>
        <Image
          src={data.attributes.images.data[0].attributes.url}
          alt="housePhoto"
          style={{ maxWidth: "100%" }}
          layout="fill"
          className="imgCard"
        />
        <span className="propStatus">for sale</span>
      </ImgContainer>

      <main className="content">
        <div className="content_text price">&#8358;{price}</div>

        <div className="content_text title">{data.attributes.title}</div>

        <div className="content_text address">
          <span>
            <MdLocationOn className="icon" />
          </span>
          {data.attributes.streetName +
            " " +
            data.attributes.city +
            " " +
            data.attributes.state}
        </div>

        <aside className="attributeCont">
          <div className="attribute">
            <GiBed />
            <div className="landSize">{data.attributes.bedroom} Bed</div>
          </div>
          <div className="attributeMiddle">
            {/* <FaToilet /> */}
            <div className="landSize"></div>
          </div>
          <div className="attribute">
            <FaToilet />
            <div className="landSize">{data.attributes.bathroom} Bath</div>
          </div>
        </aside>
      </main>
    </StyledCard>
  );
}

export default HouseModel;

const StyledCard = styled.section`
  width: 350px;
  height: auto;
  position: relative;
  padding: 7px;
  cursor: pointer;
  border-radius: 7px;
  font-family: "Syne";
  border: 2px solid transparent;
  /* transition: border 0.3 ; */

  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.317);

  :hover {
    border: 2px solid #000;
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
  height: 30vh;
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
