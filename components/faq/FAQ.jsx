import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
export default function FAQ() {
  const accordTxt = [
    {
      _id: "hdhd",
      header: "How do I list my property for sale with your company?",
      text: "Listing your property with us is easy. Simply follow the flow on the website or call our office, and our team of experienced consultants will guide you through the process.",
    },
    {
      _id: "jd",
      header: "How long does it take to sell a property with your company?",
      text: "Based on current estimation, it takes around 45 days to successfully sell a property on our app",
    },
    {
      _id: "jd",
      header:
        "How do I know if I'm getting a good deal when buying a property through your company?",
      text: "Rest assured, all our properties and users undergo a rigorous verification process, ensuring a trustworthy environment that eliminates any concerns about trustworthiness.",
    },
    {
      _id: "jd",
      header: "Can I view a property before making a purchase?",
      text: "Absolutely! You have the option to view properties through our app, featuring video tours and detailed screenshots. If you prefer a physical tour, we can arrange that as well. Your choice!",
    },
  ];

  return (
    <StyledFAQ>
      <main className="faqContainer">
        <header>Frequently Asked Question</header>

        {accordTxt.map((item) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>{item.header}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.text}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </main>
    </StyledFAQ>
  );
}

const StyledFAQ = styled.section`
  background-color: #edeaea;
  width: 100%;
  height: auto;
  padding-bottom: 40px;
  margin-bottom: 40px;

  .faqContainer {
    width: 60%;
    height: auto;
    margin: auto;
  }

  header {
    font-size: 35px;
    line-height: 3;
    font-weight: 700;
  }

  @media (min-width: 320px) and (max-width: 480px) {

    header {
      font-size: 24px;
      line-height: 3;
      width:100%;
      text-align: center;
    }

    .faqContainer {
      width: 90%;
      height: auto;
      margin: auto;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    header {
      font-size: 24px;
      line-height: 3;
      width:100%;
      text-align: center;
    }

    .faqContainer {
      width: 90%;
      height: auto;
      margin: auto;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    header {
      font-size: 24px;
      line-height: 3;
      width:100%;
      text-align: center;
    }

    .faqContainer {
      width: 90%;
      height: auto;
      margin: auto;
    }
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;
