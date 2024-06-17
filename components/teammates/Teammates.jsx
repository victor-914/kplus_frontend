import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import { tertiaryColor } from "../../utils/Colors";
import { teammates } from "../../utils/teammates";
function Teammates() {
  const people = [
    {
      name: "Rosa Lewis",
      title: "Senior UX/UI Designer",
      image: "images/image-1.png",
      color: "#782a2b",
    },
    {
      name: "John Willis",
      title: "Senior Full-Stack Developer",
      image: "images/image-2.png",
      color: "#37375e",
    },
    {
      name: "Sandy Rogers",
      title: "Senior Product Manager",
      image: "images/image-3.png",
      color: "#3e6e7c",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <main
      style={{
        padding: "50px 0px 30px 0px",
      }}
    >
      <StyledTeammates>
        <div id="header">
          <div>Our Team</div>
        </div>
        {/* <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={false}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {teammates.map((item) => (
            <div className="item_obj" key={item._id}>
              <Image src={item.img_src} layout="fill" id="team_img" />

              {item.content !== "" && (
                <main className="team-info">{item.content}</main>
              )}
            </div>
          ))}
        </Carousel> */}

          {teammates.map((person, index) => (
            <div
              className="person"
              key={index}
              style={{ "--color": person.color }}
            >
              <div className="container">
                <div className="container-inner">
                  <div className="circle"></div>
                  <Image src={person.img_src} alt={person.content} />
                </div>
              </div>
              <div className="divider"></div>
              <h1>{person.name}</h1>
              <p>{person.title}</p>
            </div>
          ))}
      </StyledTeammates>
    </main>
  );
}

export default Teammates;

const StyledPeopleList = styled.div`

`;

const StyledTeammates = styled.section`
   .person {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 20px;
  }

  .container {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container-inner {
    position: relative;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circle {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    border: 5px solid var(--color);
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .divider {
    width: 60px;
    height: 2px;
    background-color: var(--color);
    margin: 10px 0;
  }

  h1 {
    font-size: 1.5rem;
    margin: 10px 0;
  }

  p {
    font-size: 1rem;
    color: #555;
  }.person {
  /* border: 1px solid; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
}
.container {
  height: 312px;
  width: 400px;
  cursor: pointer;
  transform: scale(0.48);
  transition: transform 250ms 
    cubic-bezier(0.4, 0, 0.2, 1);
}
.circle {
  position: absolute;
  background: var(--color);
  height: 380px;
  width: 380px;
  top: 210px;
  left: 10px;
  border-radius: 50%;
}
.person img {
  position: relative;
  width: 340px;
  top: 164px;
  left: 22px;
  transform: translateY(20px) scale(1.15);
  transition: transform 250ms 
    cubic-bezier(0.4, 0, 0.2, 1);
}
.conianer-inner {
  position: relative;
  clip-path: path("M 390,400 C 390,504.9341 304.9341,590 200,590 95.065898,590 10,504.9341 10,400 V 10 H 200 390 Z");
  top: -200px;
}
.divider {
  height: 3px;
  width: 130px;
  border-radius: 5px;
  background: var(--color);
}
.person h1 {
  color: #464646;
  margin: 16px 0 0 0;
}
.person p {
  font-family: arial;
  color: #6e6e6e;
  font-size: 14px;
  margin-top: 5px;
}
/* hover */
.container:hover {
  transform: scale(0.54);
} 
.container:hover img {
  transform: translateY(0) scale(1.3);
}
`;
