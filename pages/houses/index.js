"use client";

import React, { useState, useEffect, useRef } from "react";
import api, { fetcher } from "../../utils/api";
import styled from "styled-components";
import HomeCarousel from "../../components/homeCarousel/HomeCarousel";
import Pagination from "../../components/pagination/Pagination";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { StyledAnimatedProductView } from "../../animations/ProductView";
import HouseModel from "../../components/perModel/houseModel";
gsap.registerPlugin(ScrollTrigger);
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

  const galleryRef = useRef(null);
  const cardsRef = useRef(null);
  const iteration = useRef(0);

  useEffect(() => {
    const spacing = 0.1;
    const snap = gsap.utils.snap(spacing);
    const cards = gsap.utils.toArray(cardsRef.current.children);
    const seamlessLoop = buildSeamlessLoop(cards, spacing);
    const scrub = gsap.to(seamlessLoop, {
      totalTime: 0,
      duration: 0.5,
      ease: "power3",
      paused: true,
    });

    const trigger = ScrollTrigger.create({
      start: 0,
      onUpdate(self) {
        if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
          wrapForward(self);
        } else if (
          self.progress < 1e-5 &&
          self.direction < 0 &&
          !self.wrapping
        ) {
          wrapBackward(self);
        } else {
          scrub.vars.totalTime = snap(
            (iteration.current + self.progress) * seamlessLoop.duration()
          );
          scrub.invalidate().restart();
          self.wrapping = false;
        }
      },
      end: "+=3000",
      pin: galleryRef.current,
    });

    function wrapForward(trigger) {
      iteration.current++;
      trigger.wrapping = true;
      trigger.scroll(trigger.start + 1);
    }

    function wrapBackward(trigger) {
      iteration.current--;
      if (iteration.current < 0) {
        iteration.current = 9;
        seamlessLoop.totalTime(
          seamlessLoop.totalTime() + seamlessLoop.duration() * 10
        );
        scrub.pause();
      }
      trigger.wrapping = true;
      trigger.scroll(trigger.end - 1);
    }

    function scrubTo(totalTime) {
      const progress =
        (totalTime - seamlessLoop.duration() * iteration.current) /
        seamlessLoop.duration();
      if (progress > 1) {
        wrapForward(trigger);
      } else if (progress < 0) {
        wrapBackward(trigger);
      } else {
        trigger.scroll(
          trigger.start + progress * (trigger.end - trigger.start)
        );
      }
    }

    //   document.querySelector(".next").addEventListener("click", () => );
    // document
    //   .querySelector(".prev")
    //   .addEventListener("click", () => scrubTo(scrub.vars.totalTime - spacing));

    // document
    //   .querySelector(".next")
    //   .addEventListener("click", () => scrubTo(scrub.vars.totalTime + spacing));

    return () => {
      trigger.kill();
      scrub.kill();
    };
  }, []);

  function buildSeamlessLoop(items, spacing) {
    const overlap = Math.ceil(1 / spacing);
    const startTime = items.length * spacing + 0.5;
    const loopTime = (items.length + overlap) * spacing + 1;
    const rawSequence = gsap.timeline({ paused: true });
    const seamlessLoop = gsap.timeline({
      paused: true,
      repeat: -1,
      onRepeat() {
        this._time === this._dur && (this._tTime += this._dur - 0.01);
      },
    });
    const l = items.length + overlap * 2;
    let time = 0;
    let i, index, item;

    gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 });

    for (i = 0; i < l; i++) {
      index = i % items.length;
      item = items[index];
      time = i * spacing;
      rawSequence
        .fromTo(
          item,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            zIndex: 100,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: "power1.in",
            immediateRender: false,
          },
          time
        )
        .fromTo(
          item,
          { xPercent: 400 },
          { xPercent: -400, duration: 1, ease: "none", immediateRender: false },
          time
        );
      i <= items.length && seamlessLoop.add("label" + i, time);
    }

    rawSequence.time(startTime);
    seamlessLoop
      .to(rawSequence, {
        time: loopTime,
        duration: loopTime - startTime,
        ease: "none",
      })
      .fromTo(
        rawSequence,
        { time: overlap * spacing + 1 },
        {
          time: startTime,
          duration: startTime - (overlap * spacing + 1),
          immediateRender: false,
          ease: "none",
        }
      );

    return seamlessLoop;
  }

  return (
    <>
      <StyledListing>
        <Typography
          sx={{
            margin: "auto",
            paddingBottom: "40px",
            textAlign: "center",
            position:"fixed",
            top:"0px"
          }}
          variant="h4"
          className="header"
        >
          Houses
        </Typography>
        <StyledAnimatedProductView>
          <div className="gallery" ref={galleryRef}>
            <ul className="cards" ref={cardsRef}>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              {/* <div className="landListing"> */}
              {houses?.map((item) => (
               <>
                <li>
                <HouseModel key={item.id} data={item} />
                </li> 
               </>
              ))}
              {/* </div> */}
            </ul>
          </div>
        </StyledAnimatedProductView>
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
  /* padding-top: 40px; */
  /* padding-bottom: 40px; */
  background-color: red;
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
`;
