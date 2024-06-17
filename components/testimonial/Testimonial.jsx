import React, { useRef, useEffect } from "react";
import { reviews } from "./Data";
import Quote from "../../assets/blockquote.svg";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { register } from "swiper/element/bundle";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

function Testimonial() {
  const containerRef = useRef();
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            padding: 8px 16px;
            color:#d9ab22;
          },
          .swiper-pagination-bullet{
            width: 40px;
            height: 40px;
            background-color:red;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <StyledTestimonal ref={containerRef}>
      <section className="testimonial-container">
        <div className="title">
          <h2>Testimonial</h2>
          <p>What our customers are saying.</p>
        </div>

        <div className="slider-container">
          {/* <blockquote>
            <Image className="top-quote quote" src={Quote} alt="quote" />
            <Image className="bottom-quote quote" src={Quote} alt="quote" />
          </blockquote> */}

          <swiper-container
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            ref={swiperRef}
            init="false"
          >
            {reviews.map((review) => (
              <swiper-slide class="swiperSlide" key={review.id}>
                <main>
                  <img className="review-img" src={review.image} alt="" />
                  <div className="content">
                    <p className="text">{review.text}</p>
                    <div className="info">
                      <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                      </div>
                      <p className="user">{review.name}</p>
                    </div>
                  </div>
                </main>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </section>
    </StyledTestimonal>
  );
}

export default Testimonial;

const StyledTestimonal = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  /* display: flex;
  align-items: center;
  justify-content: center; */

  .slider-container {
    /* padding: 30px; */
    /* display: flex; */
    /* align-items: center; */
  }

  img {
    max-width: 100%;
    display: block;
  }

  .mySwiper {
    border: 2px solid green;
  }

  /* Testimonial container */
  .testimonial-container {
    width: 80%;
    margin: auto;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding: 50px 0px 40px 0px;
    background-color: #fff;
  }

  .swiperSlide main {
    width: 80%;
    margin: auto;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.317);

    border-radius: 8px;
    background-color: #f7eed3;
    display: flex;
    padding: 20px;
    align-items: center;
  }

  .title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .title h2 {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 3rem;
    line-height: 1.5;
  }

  .content {
    width: 80%;
    padding: 10px;
    margin: auto;
  }

  /* Slider container */
  .slider-container {
    position: relative;
    user-select: none;
    padding-inline: 1rem;
  }

  .slider-container .quote {
    position: absolute;
    z-index: -1;
  }

  .slider-container .top-quote {
    position: absolute;
    top: -1rem;
    left: -1rem;
  }

  .slider-container .bottom-quote {
    position: absolute;
    bottom: -3rem;
    right: -0.5rem;
    transform: rotate(180deg);
  }

  .slider-container .review-img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    margin-inline: auto;
  }

  .slider-container .content .text {
    color: #484646;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  .slider-container .content .rating {
    display: inline-block;
    line-height: 1;
  }

  .slider-container .content .star {
    color: #d9ab22;
    font-size: 1.1rem;
  }

  .slider-container .content .user {
    font-weight: 600;
  }

  @media (max-width: 576px) {
    .testimonial-container {
      width: 100%;
      padding: 0px;
    }

    .swiperSlide {
      width: 100%;
      height: auto;
    }

    .swiperSlide main {
      width: 90%;
      margin: auto;
      height: auto;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.317);
      border-radius: 8px;
      background-color: #f7eed3;
      display: flex;
      flex-direction: column;
      padding: 20px;
      align-items: center;
    }

    .content{
      width: 90%;
      text-align: center;
    }
  }
`;
