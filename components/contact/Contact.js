import React, { useState } from "react";
import StyledContact from "./Contact.styles";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  console.log(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("email sent successfully");
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          }
        },
        (error) => {
          toast.error("email failed, try again");
        }
      );
  };

  return (
    <>
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
              <form>
                <label>
                  Full Name
                  <input
                    value={formData.name}
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Email:
                  <input
                    value={formData.email}
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                  />
                </label>

                <textarea
                  onChange={handleChange}
                  name="message"
                  value={formData.message}
                  required
                  placeholder="Tell us something"
                ></textarea>
              </form>
              <div className="btnContainer">
                <button onClick={sendEmail} className="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="address divide">
            <div className="speak_to_us address_divide">
              <div className="speak_tel">
                <header>Speak to us</header>
                <aside className="address_liner"></aside>

                <div className="tel_container">
                  <a className="tel" target="_blank" href="tel:+2348120908844">
                    08120908844
                  </a>
                  <br />
                  <a className="tel" target="_blank" href="tel:+2349064088365">
                    09064088365
                  </a>
                </div>

                <div className="email_container">
                  <header>Email us</header>
                  <aside className="email_liner"></aside>
                  <span>
                    <a href="mailto:services@jeff-realty.com">
                      services@jeff-realty.com
                    </a>
                  </span>
                </div>
              </div>
              <div className="speak_headOffice">
                <header>Visit WLT</header>
                <aside className="address_liner"></aside>
                <div className="speak_container">
                  <div className="main_address">Head Office</div>
                  <div className="sub_address">
                    No. 7 O'Conner street Presidential Road Enugu. <br /> <br />
                  </div>

                  {/* <div className="direction">Get directions</div> */}
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
