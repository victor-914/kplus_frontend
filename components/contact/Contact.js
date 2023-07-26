import React from "react";
import NavBar from "../navBar/NavBar";
import StyledContact from "./Contact.styles";
import ContactNavBar from "./contactNavbar";

function Contact() {
  return (
    <>
      <ContactNavBar />
      <NavBar />
      <StyledContact>
        <div className="empty_wedge"></div>
        <div className="decorator_container">
          <div className="decorator_one"></div>
          <div className="decorator_two"></div>
          <div className="decorator_three"></div>
        </div>
        <div className="header_container">
          <header>Contact Us</header>
          <div className="liner"></div>
        </div>
        <div className="form_address_container">
          <div className="form divide">
            <div className="conversation ">Let's start a conversation.</div>
            <div className="input_container">
              <form className="form">
                <label>
                  FirstName:
                  <input type="text" name="name" />
                </label>
                <label>
                  LastName:
                  <input type="text" name="name" />
                </label>

                <label>
                  Email:
                  <input type="text" name="name" />
                </label>
                <label>
                  Phone No:
                  <input type="text" name="name" />
                </label>

                <label>
                  Company Name:
                  <input type="text" name="name" />
                </label>

                <textarea placeholder="Tell us something"></textarea>
              </form>
              <div className="submit">Submit</div>
            </div>
          </div>
          <div className="address divide">
            <div className="speak_to_us address_divide">
              <div className="speak_tel">
                <header>Speak to us</header>
                <aside className="address_liner"></aside>

                <div className="tel_container">
                  <div className="tel">(+234)30444614</div>
                  <div className="tel">(+234)24700092</div>
                </div>

                <div className="email_container">
                  <header>Email us</header>
                  <aside className="email_liner"></aside>
                  <span>henagltd@gmail.com</span>
                </div>
              </div>
              <div className="speak_headOffice">
                <header>Visit WLT</header>
                <aside className="address_liner"></aside>
                <div className="speak_container">
                  <div className="main_address">Head Office</div>
                  <div className="sub_address">
                    10, Aimure Avenue, GRA, <br />
                    Benin City Edo .
                  </div>
                  
                  <div className="direction">
                    Get directions
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledContact>
    </>
  );
}

export default Contact;
