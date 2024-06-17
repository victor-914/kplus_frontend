import styled from "styled-components";
import React, {useRef}  from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { fetcher } from "../../utils/api";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { StyledSwiper } from "../landProperties/LandProperties";
import { StyledBrowse } from "../Properties";
export default function NewsStack() {
  const router = useRouter();
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/articles?populate=*&pagination[page]=1&pagination[pageSize]=5`,
    fetcher
  );
  const isSmallScreen = useMediaQuery("(min-width:600px)");
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
      {/* <main className="card-container">
        {data?.data?.map((item) => (
          <>
            <BlogCard key={item.id} data={item} />
          </>
        ))}
      </main> */}

      <StyledSwiper>
        <Swiper
          slidesPerView={isSmallScreen ? 2 : 1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data?.data?.map((item) => (
            <SwiperSlide className="swiperSlide">
                <BlogCard key={item.id} data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledSwiper>

      <StyledBrowse
        onClick={() => router.push("lands")}
        className="browseContainer"
      >
        <button className="browseMoreBtn">Read more</button>
      </StyledBrowse>{" "}
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
    padding: 20px;
    text-align: center;
    margin-bottom: 40px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .stack-header {
    width: 100%;
   }

   .card-container {
    width: 100%;
    margin: auto;
    gap: 10px;
   
  }

}

@media (min-width: 481px) and (max-width: 768px) {
  .stack-header {
    width: 100%;
   }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .stack-header {
    width: 100%;
   }
  
}

@media (min-width: 1025px) and (max-width: 1200px) {

}
`;

function BlogCard({ data }) {
  const router = useRouter();

  return (
    <StyledCard onClick={() => router.push(`/blog/${data?.id}`)}>
      <ImgContainer>
        <Image
          src={data?.attributes?.image?.data?.attributes?.url}
          alt="housePhoto"
          style={{ maxWidth: "100%" }}
          layout="fill"
          className="imgCard"
          objectFit="contain"
        />
      </ImgContainer>
      <h1 className="header_card">{data?.attributes?.title}</h1>

      <main className="content">
        <div className="content_text title">{data?.attributes?.content.slice(0,200)}......</div>

        <aside className="attributeCont">
          <Button
            sx={{
              border: "1px solid #000",
            }}
            onClick={() => router.push(`/blog/${data?.id}`)}
          >
            learn more
          </Button>
        </aside>
      </main>
    </StyledCard>
  );
}

const StyledCard = styled.section`
  width: 350px;
  height: auto;
  position: relative;
  padding: 3px;
  cursor: pointer;
  border-radius: 4px;
  background-color: #f7eed3;
  font-family: "Syne";
  border: 1px solid transparent;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.228);

  :hover {
    border: 1px solid #000;
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
    font-size: 16px;
    font-weight: normal;
    color: #000;
    padding: 10px;
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
  height: 20vh;
  position: relative;
  margin: auto;
  background-color: #90878753;

  .imgCard {
    :hover {
      transform: scale(1.3);
      transition: transform 0.8s;
    }
  }
`;
