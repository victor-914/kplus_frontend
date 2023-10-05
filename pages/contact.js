import React from "react";
import Contact from "../components/contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ContactPage() {
  return (
    <div>
      <ToastContainer />
      <Contact />
    </div>
  );
}

export default ContactPage;
