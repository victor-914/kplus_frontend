//import React from "react";
import Styledfooter from "./footer.styles";
import svg from "../../assets/whitelist_dot.png";
import Image from "next/image";
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
          Jeff Realty & Trade Solutions Ltd
          <br />
          No. 7 O'Conner street Presidential Road Enugu. <br />
          <div
            style={{
              width: "100%",
            }}
          >
            <a
              style={{ width: "100%", lineHeight: "2" }}
              target="_blank"
              href="tel:+2349064088365"
            >
              09064088365
            </a>
            <br />
            <a
              style={{ width: "100%", lineHeight: "2" }}
              target="_blank"
              href="tel:+2348120908844"
            >
              08120908844
            </a>
          </div>
        </div>
        <div className="social_community  ">
          <header>Join our social community</header>

          <div className="icon_holder">
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
          <div className="button" onClick={() => router.push("/contact")}>
            <a>Contact us</a>
          </div>
        </div>
      </div>
      <div className="lower_content">
        <div className="copyright">
          {" "}
          © {today.getFullYear()} Jeff Realty & Trade Solutions Ltd. All rights
          reserved.{" "}
        </div>
      </div>
    </Styledfooter>
  );
}

export default Footer;
