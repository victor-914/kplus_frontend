import React, { useState } from "react";
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TextField, Button, Box } from "@mui/material";
import EmptyPortfolio from "../empty/EmptyPortfolio";
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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function ProfileTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleTabChange = () => {};

  const handleSave = () => {};

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    customer_phoneNumber: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
  });

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab label="Details" {...a11yProps(0)} />
          <Tab label="Properties" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            margin: "auto",
          }}
        >
          <TextField
            label="Username"
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
      <TabPanel value={value} index={1} dir={theme.direction}>
        <EmptyPortfolio />
      </TabPanel>
    </Box>
  );
}
