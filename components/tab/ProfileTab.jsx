import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TextField, Button, Box } from "@mui/material";
import EmptyPortfolio from "../empty/EmptyPortfolio";
import MyPropCard from "./MyPropCard";
import styled from "styled-components";
export default function ProfileTabs({ user, land, house }) {
  console.log("🚀 ~ ProfileTabs ~ house:", house);
  console.log("🚀 ~ ProfileTabs ~ land:", land);
  const [value, setValue] = useState(0);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    customer_phoneNumber: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
  });

  useEffect(() => {
    setFormValues({
      username: user?.username,
      email: user?.email,
      customer_phoneNumber: user?.phoneNumber,
      address: user?.address,
      city: user?.city,
      state: user?.state,
    });

    return () => {};
  }, [user]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleTabChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSave = () => {};

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab label="Details" />
          <Tab label="Properties" />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            margin: "auto",
          }}
        >
          <TextField
            label="Fullname"
            text="text"
            value={formValues.username}
            onChange={handleTabChange}
            fullWidth
            name="username"
            sx={{
              marginTop: "20px",
            }}
          />

          <TextField
            label="Phone Number"
            type="number"
            value={formValues.customer_phoneNumber}
            onChange={handleTabChange}
            name="customer_phoneNumber"
            fullWidth
            sx={{
              marginTop: "20px",
            }}
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleTabChange}
            fullWidth
            sx={{
              marginTop: "20px",
            }}
          />
          <TextField
            label="Address"
            type="text"
            value={formValues.address}
            onChange={handleTabChange}
            fullWidth
            name="address"
            sx={{
              marginTop: "20px",
            }}
          />
          <TextField
            type="text"
            label="City"
            value={formValues.city}
            name="city"
            onChange={handleTabChange}
            fullWidth
            sx={{
              marginTop: "20px",
            }}
          />
          <TextField
            label="State"
            type="text"
            name="state"
            value={formValues.state}
            onChange={handleTabChange}
            fullWidth
            sx={{
              marginTop: "20px",
            }}
          />
          <TextField
            label="country"
            type="text"
            name="country"
            value={formValues.state}
            onChange={handleTabChange}
            fullWidth
            sx={{
              marginTop: "20px",
            }}
          />
          <Button
            sx={{
              marginTop: "20px",
              color: "#000",
            }}
            variant="contained"
            // color="primary"
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <>
          {land?.length === 0 && house?.length === 0 && <EmptyPortfolio />}

          <StyledPropListing className="propertyListing">
            {house?.map((item) => (
              <MyPropCard data={item} />
            ))}

            {land?.map((item) => (
              <MyPropCard data={item} />
            ))}
          </StyledPropListing>
        </>
      </TabPanel>
    </Box>
  );
}

const StyledPropListing = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      style={{
        width: "100% !important",
      }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}
