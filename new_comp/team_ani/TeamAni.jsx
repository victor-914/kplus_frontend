"use client"

import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import useSWR from "swr";
import { fetcher } from "../../utils/api";
import Card from "../../components/card/Card";
import { ReactLenis, useLenis } from 'lenis/react'
gsap.registerPlugin(ScrollTrigger);

function TeamAni() {
 
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/lands?populate=*&pagination[page]=1&pagination[pageSize]=10`,
    fetcher
  );
  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);

  // const lenis = new Lenis()


  let amountToScroll = scrollContentRef?.current?.offsetWidth - window.innerWidth

 
  let scrollContentWidth = scrollContentRef?.current?.offsetWidth


    useEffect(()=>{
      gsap.to(scrollContentRef.current,{
        x:-amountToScroll,
        ease:"none",
        scrollTrigger:{
          trigger:scrollContainerRef.current,
          start:"top 30px",
          end:  "+=" + `${amountToScroll}`,
          pin:true,
          scrub:true,

        }
      })
    })



  // useEffect(() => {
  //   const scrollContainer = scrollContainerRef.current;
  //   const scrollContent = scrollContentRef.current;

  //   gsap.to(scrollContent, {
  //     x: () =>
  //       `-${
  //         scrollContent.scrollWidth - document.documentElement.clientWidth
  //       }px`,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: scrollContainer,
  //       // pin: true,
  //       scrub: true,
  //       markers:true,
  //       end: () =>
  //         `+=${
  //           scrollContent.scrollWidth - document.documentElement.clientWidth
  //         }`,
  //     },
  //   });

  //   return () => {
  //     // Clean up the ScrollTrigger instance on component unmount
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <StyledTeamAni>
      <div className="container" ref={scrollContainerRef}>
        <div className="scroll-content" ref={scrollContentRef}>
          {data?.data?.map((item) => (
              <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </StyledTeamAni>
  );
}

export default TeamAni;

const StyledTeamAni = styled.section`
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  position: relative;
  border: 2px solid red;
  background-color: red;

.container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-content {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid purple;
  width: 400%; /* Adjust according to the number of sections */
}

.section {
  /* flex: 1; */
  min-width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* font-size: 2rem; */
  margin: auto;
  background: #eee;
  border: 1px solid blue;
}
`;
