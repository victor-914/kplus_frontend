import React from "react";
import Styledfooter from "./footer.styles";
import svg from "../../assets/whitelist_dot.png";
import Image from "next/image";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { useRouter } from "next/router";
function Footer() {
  const today = new Date();
  const router = useRouter();
  return (
    <Styledfooter>
      <div className="upper_content">
        <div className="get_direction content">
          <header>Head Office:</header>
          WhiteList Company Ltd, 10, Aimure Avenue, GRA,
          <br />
          Benin City Edo State. <br />
          TEL:08030444614; 08024700092
        </div>
        <div className="social_community  ">
          <header>Join our social community</header>

          <div className="icon_holder">
            <div className="social_icon">
              <AiOutlineFacebook />
            </div>
            <div className="social_icon">
              <AiOutlineTwitter />
            </div>

            <div className="social_icon">
              <a
                target="_blank"
                href="https://instagram.com/jefftradesolutions_?igshid=MzRlODBiNWFlZA=="
              >
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="discuss_what_next content">
          <div className="dotted_img">
            <Image src={svg} layout="fixed" id="hero_img" alt="svg" />
          </div>
          <header>Let's Discuss What's Next</header>
          Have a project or a question? <br /> We'd love to hear from you.
          <div className="button" onClick={() => router.push("/about")}>
            <a>Contact us</a>
          </div>
        </div>
      </div>
      <div className="lower_content">
        <div className="copyright">
          {" "}
          © {today.getFullYear()} Jeffy Realty Ltd. All rights reserved.{" "}
        </div>
      </div>
    </Styledfooter>
  );
}

export default Footer;
