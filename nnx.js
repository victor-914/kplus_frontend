import React, { useState, useEffect } from "react";
import { FaRulerCombined } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import styled from "styled-components";
import { addCommasToNumber } from "../../utils/helperFunction";
import { useRouter } from "next/router";
function Card({ data }) {
  const [price, setPrice] = useState();
  useEffect(() => {
    setPrice(addCommasToNumber(data?.attributes?.price));
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

      <main className="content">
        <div className="content_text price">&#8358;{price}</div>

        <div className="content_text title">{data.attributes.title}</div>

        <div className="content_text address">
          <span>
            <MdLocationOn className="icon" />
          </span>
          {data?.attributes?.streetName +
            " " +
            data?.attributes?.city +
            " " +
            data?.attributes?.state}
        </div>

        <aside className="attributeCont">
          <div className="attribute">
            <FaRulerCombined />
            <div className="landSize">{data?.attributes?.landSize} sqft</div>
          </div>
          <div className="attributeMiddle">
            {/* <FaRulerCombined /> */}
            <div className="landSize">{/* {data.attributes.landSize} */}</div>
          </div>
          <div className="attribute">
            C of O
            <div className="landSize">
              <GrStatusGood className="good" />
            </div>
          </div>
        </aside>
      </main>
    </StyledCard>
  );
}

export default Card;

const StyledCard = styled.section`
  width: 350px;
  height: auto;
  position: relative;
  padding: 4px;
  cursor: pointer;
  border-radius: 7px;
  font-family: "Syne";
  border: 2px solid transparent;
  /* transition: border 0.3 ; */

  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.317);

  :hover {
    border: 2px solid #000;
  }

  .content {
    width: 100%;
    height: auto;
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
    width: 38%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 800;
    /* border-right: 1px dashed #d9ab22; */
  }

  .attributeMiddle {
    border-right: 2px dashed #d9ab22;
    border-left: 2px dashed #d9ab22;
    width: 10%;
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
