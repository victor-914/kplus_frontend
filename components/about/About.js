import React from "react";
import StyledAbout from "./About.styles";
import Image from "next/image";
import smile from "../../assets/smile.png";
import shake_hand from "../../assets/shake_hand.webp";
import Talktous from "../TalkToUs/Talktous";

export const width = "100%";
export const height = "100%";

function AboutPage() {
  return (
    <>
      <StyledAbout>
        <div className="decorator_container">
          <div className="decorator_one"></div>
          <div className="decorator_two"></div>
          <div className="decorator_three"></div>
        </div>

        <div className="header">
          Company
          <div className="liner"></div>
        </div>
        <div className="our_vision padding">
          <header>Our Vision</header>
          <div className="our_vision_text text ">
            Welcome to <span>Jeffy Real Estate</span>, where we envision a world
            where every individual can find their dream home and invest in real
            estate with confidence. Our vision is driven by a commitment to
            excellence, innovation, and personalized service, making us the
            go-to destination for all your real estate needs. At Jeffy Real
            Estate, we believe that a home is not just a physical space; it is a
            reflection of your dreams, aspirations, and the place where
            beautiful memories are created. Our vision is to be the leading real
            estate company that understands and fulfills the unique desires of
            each client. Whether you are a first-time homebuyer, a seasoned
            investor, or a family looking to upsize, we strive to provide a
            seamless and rewarding real estate journey for all. In pursuit of
            our vision, we aim to embrace cutting-edge technologies, industry
            trends, and sustainable practices to ensure that our clients receive
            the highest level of service. By fostering a culture of trust,
            integrity, and professionalism, we seek to set new benchmarks in the
            real estate industry, enhancing the lives of individuals and
            communities we serve. Join us in our vision, as we take you on a
            transformative experience, turning your real estate dreams into
            reality.
          </div>
        </div>
        <div className="about_us padding">
          <header id="about_us_header">About Us</header>
          <div className="text about_text">
            Welcome to <span>Jeffy Real Estate</span>, your trusted partner in
            the world of real estate. Founded with a vision to redefine the real
            estate experience, we take pride in offering unparalleled services,
            cutting-edge solutions, and a customer-centric approach that sets us
            apart in the industry. Our journey began with a simple belief that
            real estate transactions should be more than just transactions; they
            should be transformative experiences that enrich lives and build
            lasting connections. At the heart of our company lies a deep
            <span> commitment to our clients</span>. We understand that buying,
            selling, or investing in real estate can be a significant decision,
            both financially and emotionally. That's why we prioritize
            understanding your unique needs and aspirations, ensuring that we
            provide tailored solutions to match them perfectly. Our team is
            comprised of seasoned real estate professionals who bring a wealth
            of knowledge and experience to the table. Their expertise spans
            various facets of the industry, including residential, commercial,
            and investment properties. With a pulse on the ever-changing market
            trends, we equip our clients with the most up-to-date information to
            make well-informed choices.
          </div>
        </div>

        <div className="our_coreValue padding">
          <header className="core">Our Core Value</header>
          <div className="flex">
            <div className="image_holder">
              <Image
                src={shake_hand}
                layout="responsive"
                className="shake_img"
                max-width={width}
                max-height={height}
                position="absolute"
              />
            </div>
            <div className="text" id="our_coreValue_text">
              • Client satisfaction is our priority <br />
              • Safety is never compromised. <br />
              • Compliance with government and industry regulations <br />
              • Provide and retain high quality with on schedule services.
              <br />
              • We take our clients/customers as partners. <br />
              • To generate reasonable returns on the assets entrusted to us by
              our shareholders. <br />
              • To always show concern for the well-being of our employees and
              co-workers. <br />
              • To promote teamwork. <br />• Strive for efficiency in all that
              we do
            </div>
          </div>
        </div>
        <div className="our_missionStatement  padding">
          <header id="mission_header">Our Mission Statement</header>

          <div className="flex">
            <div className="text" id="our_missionStatement_text">
              At <span>Jeffy Real Estate</span>, our mission is to redefine the
              real estate experience by offering unparalleled services and a
              <span> customer-centric approach </span> . We are committed to
              understanding our clients' unique needs and aspirations, providing
              tailored solutions that match them perfectly. With a team of
              seasoned professionals, we bring expertise in residential,
              commercial, and investment properties, ensuring our clients
              receive the most up-to-date market information to make
              well-informed decisions.{" "}
              <span>
                Embracing innovation and technology, we streamline the buying
                and selling process{" "}
              </span>
              , offering virtual property tours and advanced market analysis for
              efficiency and convenience.
            </div>
            <div id="image_holder">
              <Image
                src={smile}
                layout="fixed"
                className="hero_im"
                position="absolute"
              />
            </div>
          </div>
        </div>
        <Talktous />
      </StyledAbout>
    </>
  );
}

export default AboutPage;
