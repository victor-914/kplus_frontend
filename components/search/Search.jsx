import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
// search button ==> search result page
function Search() {
  const [formValues, setFormValues] = useState({
    price: "",
    status: "",
    landmark: "",
    title: "",
    lga: "",
    city: "",
    bathrooms: "",
    bedrooms: "",
    streetname: "",
    city: "",
    latitude: "",
    longititude: "",
    description: "",
    videoUrl: "",
    videoUrl_2: "",
    videoUrl_3: "",
  });

  const router = useRouter();
  // console.log("🚀 ~ VideoUpload ~ formValues:", formValues);

  const [stepIndex, setStepIndex] = useState(0);
  // console.log("🚀 ~ VideoUpload ~ stepIndex:", stepIndex);

  const [uploadType, setUploadType] = useState("land");

  const handleLand = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const propertyUploadArray = [
    {
      _id: "323",
      type: "text",
      placeholder: "Where do you want to live",
      onChange: handleLand,
      name: "vicinity",
      labelText: "vicinity",
      value: formValues?.vicinty,
      helperText: "",
    },
    {
      _id: "323kwdids",
      type: "select",
      state: "houses",
      placeholder: "Type",
      onChange: handleLand,
      name: "status",
      labelText: "status",
      value: formValues.status,
      helperText: "select property status",
      options: [
        {
          text: "Shop",
          value: "Shop",
        },
        {
          text: "FOR RENT",
          value: "FOR RENT",
        },
      ],
    },

    {
      _id: "323kwdids",
      type: "select",
      state: "houses",
      placeholder: "Type",
      onChange: handleLand,
      name: "bedrooms",
      labelText: "No. of bedrooms",
      value: formValues?.bedroom,
      helperText: "select bedrooms",
      options: [
        {
          text: "1 bedroom",
          value: "1",
        },
        {
          text: "2 bedroom",
          value: "2",
        },
        {
          text: "3 bedroom",
          value: "3",
        },
        {
          text: "4 bedroom",
          value: "4",
        },
        {
          text: "5 bedroom",
          value: "5",
        },
        {
          text: "6 bedroom",
          value: "6",
        },
        {
          text: "7 bedroom",
          value: "7",
        },
        {
          text: "8 bedroom",
          value: "8",
        },
        {
          text: "10 bedroom",
          value: "10",
        },
        {
          text: "10 bedroom",
          value: "10",
        },
      ],
    },
  ];

  return (
    <StyledSearch>
      <header>find your next home</header>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <div>
          <Button>Buy</Button>
          <Button>Rent</Button>
        </div>
        <Button>House</Button>
        <Button>Land</Button>
      </ButtonGroup>

      <main></main>
    </StyledSearch>
  );
}

export default Search;

const StyledSearch = styled.section`
  width: 100%;
  height: 50vh;
  background-color: red;
`;
