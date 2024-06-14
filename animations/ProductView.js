"use client";

import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedProductView = ({ children }) => {
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
    document
      .querySelector(".prev")
      .addEventListener("click", () => scrubTo(scrub.vars.totalTime - spacing));

    document
      .querySelector(".next")
      .addEventListener("click", () => scrubTo(scrub.vars.totalTime + spacing));

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
    <StyledAnimatedProductView>
      <div className="gallery" ref={galleryRef}>
        <ul className="cards" ref={cardsRef}>
          {Array.from({ length: 5 }, (_, i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <div className="actions">
          <button
            //  onClick={ scrubTo(scrub.vars.totalTime - spacing) }
            className="prev"
          >
            Prev
          </button>
          <button
            //  onClick={ scrubTo(scrub.vars.totalTime + spacing)}
            className="next"
          >
            Next
          </button>
        </div>
      </div>
    </StyledAnimatedProductView>
  );
};

export default AnimatedProductView;

export const StyledAnimatedProductView = styled.section`
  /* * {
    box-sizing: border-box;
  }
  body {
    background: #111;
    min-height: 100vh;
    padding: 0;
    margin: 0;
  } */
  .gallery {
    position: absolute;
    width: 100%;
    /* background-color: green; */
    height: 100vh;
    overflow: hidden;
  }

  .cards { width: 14rem;
    height: 18rem;
    position: absolute;
    width: 23rem;
    height: 30rem;
    /* border: 2px solid red; */
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .cards li {
    list-style: none;
    padding: 0;
    /* border: 2px solid orange; */
    margin: 0;
    width: 23rem;
    height: 30rem;
    /* text-align: center;
    line-height: 18rem; */
    /* font-size: 2rem; */
    font-family: sans-serif;
    /* background-color: #9d7cce; */
    position: absolute;
    top: 0;
    left: 0;
    /* border-radius: 0.8rem; */
  }

  .actions {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
  }

  /* button {
    display: inline-block;
    outline: none;
    border: none;
    padding: 8px 14px;
    background: #414141;
    background-image: -webkit-linear-gradient(top, #575757, #414141);
    background-image: -moz-linear-gradient(top, #575757, #414141);
    background-image: -ms-linear-gradient(top, #575757, #414141);
    background-image: -o-linear-gradient(top, #575757, #414141);
    background-image: linear-gradient(to bottom, #575757, #414141);
    text-shadow: 0px 1px 0px #414141;
    -webkit-box-shadow: 0px 1px 0px 414141;
    -moz-box-shadow: 0px 1px 0px 414141;
    box-shadow: 0px 1px 0px 414141;
    color: #ffffff;
    text-decoration: none;
    margin: 0 auto 10px;
    -webkit-border-radius: 4;
    -moz-border-radius: 4;
    border-radius: 4px;
    padding: 12px 25px;
    font-family: "Signika Negative", sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    font-size: 13px;
    line-height: 18px;
  } */

  button:hover {
    background: #57a818;
    background-image: -webkit-linear-gradient(top, #57a818, #4d9916);
    background-image: -moz-linear-gradient(top, #57a818, #4d9916);
    background-image: -ms-linear-gradient(top, #57a818, #4d9916);
    background-image: -o-linear-gradient(top, #57a818, #4d9916);
    background-image: linear-gradient(to bottom, #57a818, #4d9916);
    text-shadow: 0px 1px 0px #32610e;
    -webkit-box-shadow: 0px 1px 0px fefefe;
    -moz-box-shadow: 0px 1px 0px fefefe;
    box-shadow: 0px 1px 0px fefefe;
    color: #ffffff;
    text-decoration: none;
  }

  /* button {
    font-size: 20px;
    font-weight: 400;
  }

  a {
    color: #88ce02;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline; */
  /* } */
`;
