import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Typography, Stepper, Step, StepLabel, Button } from "@mui/material";
import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  Person as PersonIcon,
  Edit as EditIcon,
  Home as HomeIcon,
  AddPhotoAlternate as AddPhotoAlternateIcon,
  VideoLibrary as VideoLibraryIcon,
} from "@mui/icons-material";
import { Checkbox, FormControlLabel } from "@mui/material";
import TermsAndConditions from "../components/termCondition/TC";
import { useRouter } from "next/router";
import api from "../utils/api";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import Privacy from "../components/termCondition/Privacy";
const StyledSell = styled.section`
  width: 60%;
  margin: auto;
  height: auto;
  .introduction {
    line-height: 2;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 95%;
    margin: auto;
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;

export default function Sell() {
  const [activeStep, setActiveStep] = useState(0);
  const [checked, setChecked] = useState(false);
  const [pchecked, setPChecked] = useState(false);
  const router = useRouter();
  const [token, setToken] = useState();
  const [data, setData] = useState();
  const [token_id, setToken_id] = useState();
  useEffect(() => {
    setActiveStep(0);
    setToken_id(Cookies.get("user_id"));
    setToken(Cookies.get("user_jwt"));
    return () => {
      setToken(null);
      setData(null);
      setChecked(null);
      setActiveStep(null);
    };
  }, [token]);

  const updateTC = async () => {
    try {
      //  if(!token)
      if (checked) {
        localStorage.setItem("tcAgree", JSON.stringify("true"));
        const res = await api.put(
          `/users/${token_id}`,
          {
            isTermsAppliedAgreed: checked,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toast.success("Terms & Privacy Policy Agreed");
        router.push("/profile");

        setData(res?.data);
      } else {
        toast.error("Agree to Terms and Conditions");
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  const handleNext = () => {
    if (activeStep === 1 && !pchecked) {
      setActiveStep(1);
      toast.error("Agree to privacy policy first!");
      return;
    } else if (activeStep === 2 && !checked) {
      setActiveStep(2);
      toast.error("Agree to terms and privacy policy first!");
      return;
    } else if (activeStep === 2 && checked) {
      setActiveStep(3);
    } else if (activeStep === 3) {
      updateTC();
    } else {
      setActiveStep(activeStep >= 3 ? 3 : activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep < 0 ? 0 : activeStep - 1);
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const handlePCheckboxChange = (event) => {
    setPChecked(event.target.checked);
  };

  const steps = ["Intro", "Privacy", "T&Cs", "Guidelines"];

  const stepsArray = [
    {
      label: "Accept Terms",
      icon: <CheckCircleOutlineIcon />,
      content: "Please accept the terms and conditions before proceeding.",
    },
    {
      label: "Sign In",
      icon: <PersonIcon />,
      content: "Sign in to continue.",
    },
    {
      label: "Fill Extra Information",
      icon: <EditIcon />,
      content: "Fill in any additional information.",
    },
    {
      label: "Fill Property Information",
      icon: <HomeIcon />,
      content: "Provide details about the property.",
    },
    {
      label: "Upload Cover Image",
      icon: <AddPhotoAlternateIcon />,
      content: "Upload a cover image for the property.",
    },
    {
      label: "Upload Video (<100MB)",
      icon: <VideoLibraryIcon />,
      content: "Upload a video for the property (less than 100MB).",
    },
  ];

  return (
    <StyledSell>
      <Stepper
        sx={{
          padding: "40px 0px 40px 0px",
        }}
        activeStep={activeStep}
        orientation="horizontal"
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <main>
          {activeStep === 0 ? (
            <div
              className="introduction"
              style={{
                paddingBottom: "50px",
              }}
            >
              <Typography variant="h4" gutterBottom className="header">
                Introduction
              </Typography>
              <article
                style={{
                  textAlign: "justify",
                }}
              >
                Welcome to Jeffy Real Estate, your trusted partner in the world
                of real estate. Founded with a vision to redefine the real
                estate experience, we take pride in offering unparalleled
                services, cutting-edge solutions, and a customer-centric
                approach that sets us apart in the industry. Our journey began
                with a simple belief that real estate transactions should be
                more than just transactions; they should be transformative
                experiences that enrich lives and build lasting connections. At
                the heart of our company lies a deep commitment to our clients.
                We understand that buying, selling, or investing in real estate
                can be a significant decision, both financially and emotionally.
                That's why we prioritize understanding your unique needs and
                aspirations, ensuring that we provide tailored solutions to
                match them perfectly. Our team is comprised of seasoned real
                estate professionals who bring a wealth of knowledge and
                experience to the table. Their expertise spans various facets of
                the industry, including residential, commercial, and investment
                properties. With a pulse on the ever-changing market trends, we
                equip our clients with the most up-to-date information to make
                well-informed choices.
              </article>
            </div>
          ) : activeStep === 3 ? (
            <div className="guideline">
              <Typography variant="h4" gutterBottom className="header">
                Guidelines
              </Typography>

              <Stepper activeStep={activeStep} orientation="vertical">
                {stepsArray.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel icon={step.icon}>{step.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div></div>
            </div>
          ) : activeStep === 2 ? (
            <div className="terms&condition">
              <TermsAndConditions />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleCheckboxChange}
                    color="primary"
                  />
                }
                label="I agree to the Terms & Condition"
              />
            </div>
          ) : activeStep === 1 ? (
            <>
              <Privacy />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={pchecked}
                    onChange={handlePCheckboxChange}
                    color="primary"
                  />
                }
                label="I agree to Privacy Policy"
              />
            </>
          ) : null}
        </main>

        <div>
          <br />
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            style={{ marginRight: "10px" }}
          >
            Back
          </Button>
          <Button
            // disabled={activeStep === 3}
            variant="outlined"
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </StyledSell>
  );
}
