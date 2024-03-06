import axios from "axios";
import React, { useState } from "react";
import { Widget } from "react-cloudinary-upload-widget";
import styled from "styled-components";
import { TextField, Button, Box } from "@mui/material";
import LabelStepper from "../../components/stepper/stepper";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Cookies from "js-cookie";
const VideoUpload = () => {
  const [formValues, setFormValues] = useState({
    price: "",
    status: "FOR SALE",
    landmark: "",
    title: "",
    lga: "",
    city: "",
    landSize: "",
    bathrooms: "",
    bedrooms: "",
    streetName: "",
    city: "",
    state: "",
    latitude: "",
    longititude: "",
    description: "",
    cloudinary_image: "",
    videoUrl: "",
    titleDocument:""
  });

  const router = useRouter();

  const [stepIndex, setStepIndex] = useState(0);

  const [uploadType, setUploadType] = useState("lands");
  const [token_id, setToken_id] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    const tokenID = Cookies.get("user_jwt");
    const user_id = Cookies.get("user_id");
    setToken(tokenID);
    setToken_id(user_id);

    return () => {
      setToken(null);
    };
  }, [token]);

  const handleSubmit = async () => {
    if (!formValues.cloudinary_image || !formValues.videoUrl) {
      toast.error("missing inputs");
      return;
    }
    try {
      const res = await axios.post(
        `https://jeffybackend.jeff-realty.com/api/${uploadType}`,
        formValues,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      res.status === 200 && toast.success("Upload success");

      router.push(`/${uploadType}/${res?.data?.id}`);
    } catch (error) {
      toast.error("Try again later!");
    }
  };

  const handleLand = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleImageSuccess = (res) => {
    if (res.event === "success") {
      setFormValues({ ...formValues, ["cloudinary_image"]: res.info.url });
      setStepIndex(3);
      toast.success("Image upload successful");
    }
  };

  const handleImageFailure = (res) => {
    toast.error("Failed! Try again");
  };

  const handleVideoSuccess = (res) => {
    if (res.event === "success") {
      setFormValues({ ...formValues, ["videoUrl"]: res.info.url });
      toast.success("upload successful");
      setStepIndex(4);
    }
  };

  const handleVideoFailure = (b) => {
    toast.error("Failed! Try again");
  };

  const handleNext = () => {
    if (stepIndex > 4 || stepIndex === 4) {
      setStepIndex(4);
    } else {
      setStepIndex(stepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (stepIndex <= 0 || stepIndex === 0) {
      setStepIndex(0);
    } else {
      setStepIndex(stepIndex - 1);
    }
  };

  const propertyUploadArray = [
    {
      _id: "323",
      type: "text",
      placeholder: "Name",
      onChange: handleLand,
      name: "title",
      labelText: "Name",
      value: formValues.title,
    },
    {
      _id: "32kjfjd3",
      type: "text",
      placeholder: "Title of Document",
      onChange: handleLand,
      name: "titleDocument",
      labelText: "Title of Document",
      value: formValues.titleDocument,
    },
    {
      _id: "wdids",
      type: "number",
      placeholder: "Bedrooms",
      onChange: handleLand,
      name: "bedrooms",
      labelText: "Bedrooms",
      value: formValues.bedrooms,
    },
    {
      _id: "wids",
      type: "number",
      placeholder: "Bathroom",
      onChange: handleLand,
      name: "bathrooms",
      labelText: "Bathrooms",
      value: formValues.bathrooms,
    },
    {
      _id: "323hd",
      type: "text",
      placeholder: "Landmark",
      onChange: handleLand,
      name: "landmark",
      labelText: "Landmark",
      value: formValues.landmark,
    },
    {
      _id: "323KKDhd",
      type: "text",
      placeholder: "e.g city...",
      onChange: handleLand,
      name: "city",
      labelText: "City",
      value: formValues.city,
    },
    {
      _id: "33423",
      type: "text",
      placeholder: "Street name",
      onChange: handleLand,
      name: "streetName",
      labelText: "street name",
      value: formValues.streetName,
    },
    {
      _id: "323kwdids",
      type: "text",
      placeholder: "Local government area",
      onChange: handleLand,
      name: "lga",
      labelText: "local government area",
      value: formValues.lga,
    },
    {
      _id: "kwhhhids",
      type: "text",
      placeholder: "State",
      onChange: handleLand,
      name: "state",
      labelText: "State",
      value: formValues.state,
    },
    {
      _id: "33jdjd423",
      type: "number",
      placeholder: "Price",
      onChange: handleLand,
      name: "price",
      labelText: "Price(N)",
      value: formValues.price,
    },
    {
      _id: "wids",
      type: "number",
      placeholder: "land size in sqft only",
      onChange: handleLand,
      name: "landSize",
      labelText: "Land size (sqft)",
      value: formValues.landSize,
    },

    {
      _id: "323kwdkdjjdjsids",
      type: "select",
      placeholder: "status",
      onChange: handleLand,
      name: "status",
      labelText: "status",
      value: formValues.status,
      helperText: "select property status",
      options: [
        {
          text: "FOR SALE",
          value: "FOR SALE",
        },
        {
          text: "FOR RENT",
          value: "FOR RENT",
        },
      ],
    },

    {
      _id: "323kwdids",
      type: "textarea",
      placeholder: "Property description",
      onChange: handleLand,
      name: "description",
      labelText: "property description",
      value: formValues.description,
    },
  ];

  return (
    <StyledUpload>
      <main className="uploadButtonCont">
        <div className="uploadTypeContainer">
          <Button
            sx={{
              color: `${uploadType === "houses" ? "#fff" : "#000"}`,
              backgroundColor: `${
                uploadType === "houses" ? "#000 !important" : "#fff"
              }`,
              marginTop: "20px",
            }}
            variant="contained"
            onClick={() => setUploadType("houses")}
          >
            upload house
          </Button>
          <Button
            sx={{
              marginTop: "20px",
              color: `${uploadType === "lands" ? "#fff" : "#000"}`,
              backgroundColor: `${
                uploadType === "lands" ? "#000 !important" : "#fff"
              }`,
            }}
            variant="contained"
            onClick={() => setUploadType("lands")}
          >
            upload land
          </Button>
        </div>
      </main>

      <LabelStepper step={stepIndex} />

      {stepIndex === 0 ? (
        <Box component="form" noValidate autoComplete="off">
          <section className="inputContainer">
            {propertyUploadArray.map((item) => {
              if (
                (item.name === "bathrooms" && uploadType === "lands") ||
                (item.name === "bedrooms" && uploadType === "lands") ||
                (item.name === "landSize" && uploadType === "houses") ||
                item.name === "description"
              ) {
                return null;
              }
              if (item.type === "select") {
                return (
                  <TextField
                    id={item._id}
                    select
                    type={item.type}
                    key={item._id}
                    sx={{
                      marginTop: "20px",
                    }}
                    defaultValue={"FOR SALE"}
                    label={item.labelText}
                    SelectProps={{
                      native: true,
                    }}
                    name={item.name}
                    onChange={handleLand}
                    helperText="Please select your propery status"
                  >
                    {item.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.text}
                      </option>
                    ))}
                  </TextField>
                );
              } else if (item.type === "textarea") {
                return (
                  <TextField
                    id={item._id}
                    key={item._id}
                    label={item.labelText}
                    onChange={handleLand}
                    multiline
                    name={item.name}
                    sx={{
                      marginTop: "20px",
                    }}
                    rows={10}
                    value={item.value}
                    variant="standard"
                  />
                );
              } else {
                return (
                  <TextField
                    id={item._id}
                    key={item._id}
                    label={item.labelText}
                    type={item.type}
                    sx={{
                      marginTop: "20px",
                    }}
                    value={item.value}
                    onChange={handleLand}
                    name={item.name}
                    fullWidth
                  />
                );
              }
            })}
          </section>
        </Box>
      ) : stepIndex === 1 ? (
        <section className="uploadMediaCont">
          <div className="uploadContainer">
            {propertyUploadArray.map((item) => {
              if (item.type !== "textarea") {
                return null;
              } else {
                return (
                  <TextField
                    id={item._id}
                    key={item._id}
                    label={item.labelText}
                    onChange={handleLand}
                    multiline
                    fullWidth
                    helperText="describe your property"
                    name={item.name}
                    sx={{
                      marginTop: "20px",
                    }}
                    rows={10}
                    value={item.value}
                    variant="standard"
                  />
                );
              }
            })}
          </div>
        </section>
      ) : stepIndex === 2 ? (
        <div className="upload-widget-imageContainer">
          <div className="upload-widget-image">
            <Widget
              sources={["local"]}
              resourceType={"image"}
              cloudName={"dv538fztp"}
              uploadPreset={"mkgzbh8o"}
              buttonText={"Upload Cover Image"}
              style={{
                color: "#000",
                border: "none",
                width: "auto",
                padding: "10px",
                border: "2px solid #000",
                backgroundColor: "#fff",
                borderRadius: "4px",
              }}
              folder={"jeff_realty"}
              cropping={false}
              multiple={false}
              autoClose={false}
              onSuccess={handleImageSuccess}
              onFailure={handleImageFailure}
              use_filename={true}
              destroy={true}
            />
          </div>
        </div>
      ) : stepIndex === 3 ? (
        <div className="upload-widget-imageContainer">
          <div className="upload-widget-image">
            <Widget
              sources={["local"]}
              resourceType={"video"}
              cloudName={"dv538fztp"}
              uploadPreset={"mkgzbh8o"}
              buttonText={"Upload Video"}
              style={{
                color: "#000",
                border: "none",
                width: "auto",
                padding: "10px",
                border: "1px solid #000",
                backgroundColor: "#fff",
                borderRadius: "4px",
              }}
              folder={"jeff_realty"}
              cropping={false}
              multiple={true}
              autoClose={false}
              onSuccess={handleVideoSuccess}
              onFailure={handleVideoFailure}
              use_filename={true}
              destroy={true}
            />
          </div>
        </div>
      ) : stepIndex === 4 ? (
        <div className="upload-widget-imageContainer">
          <div className="upload-widget-image">
            <Button onClick={handleSubmit} variant="contained">
              submit
            </Button>
          </div>
        </div>
      ) : null}

      <aside className="stepperContainer">
        <Button
          sx={{
            marginTop: "20px",
          }}
          variant="contained"
          onClick={handlePrev}
        >
          PREV
        </Button>
        <Button
          sx={{
            marginTop: "20px",
          }}
          variant="contained"
          onClick={handleNext}
        >
          NEXT
        </Button>
      </aside>
    </StyledUpload>
  );
};

export default VideoUpload;

const StyledUpload = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;

  .uploadButtonCont {
    width: 40%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 40px;
  }

  .backToProfileButton {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .uploadTypeContainer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 10vh;
  }

  .uploadMediaCont {
    width: 100%;
    height: 50vh;
    padding-top: 50px;
  }

  .uploadContainer {
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #000;
  }

  .stepperContainer {
    width: 40%;
    margin: auto;
    display: flex;
    justify-content: space-around;
  }

  .inputContainer {
    width: 50%;
    display: flex;
    margin: auto;
    flex-direction: column;
  }

  .upload-widget-buttons {
    width: 50%;
    height: 20vh;
    margin: auto;
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
  }

  .upload-widget-imageContainer {
    width: 100%;
    height: 40vh;
    padding-top: 30px;
  }

  .upload-widget-image {
    border-top: 2px solid #000;
    width: 60%;
    background-color: #827a7a48;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .inputContainer {
      width: 95%;
    }

    .uploadButtonCont {
      width: 100%;
      padding: 10px;
    }

    .uploadContainer {
      width: 90%;
      height: 80%;
      margin: auto;
      margin-bottom: 30px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .inputContainer {
      width: 95%;
    }
    .uploadButtonCont {
      width: 100%;
      padding: 10px;
    }

    .uploadTypeContainer {
      width: 100%;
    }

    .uploadContainer {
      width: 90%;
      margin: auto;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .uploadButtonCont {
      width: 100%;
      padding: 20px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
  }
`;
