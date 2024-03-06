import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TextField, Button, Box } from "@mui/material";
import EmptyPortfolio from "../empty/EmptyPortfolio";
import MyPropCard from "./MyPropCard";
import styled from "styled-components";
import api from "../../utils/api";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
export default function ProfileTabs({ user, land, house }) {
  const [value, setValue] = useState(0);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    customer_phoneNumber: "",
    customer_phoneNumber2: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
  });

  const [token, setToken] = useState();
  const [token_id, setToken_id] = useState();
  useEffect(() => {
    let tokenID = Cookies.get("user_jwt");
    let user_id = Cookies.get("user_id");
    setToken_id(user_id);
    setToken(tokenID);

    return () => {
      tokenID = null;
      user_id = null;
      setToken(null);
    };
  }, [token]);

  useEffect(() => {
    setFormValues({
      username: user?.username,
      email: user?.email,
      customer_phoneNumber: user?.phoneNumber,
      customer_phoneNumber2: user?.phoneNumber2,
      address: user?.address,
      city: user?.city,
      state: user?.state,
    });

    return () => {
      setFormValues(null);
    };
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

  const handleSave = async () => {
    try {
      const res = await api.put(
        `/users/${token_id}`,
        {
          username: formValues.username,
          email: formValues.email,
          address: formValues.address,
          phoneNumber: formValues.customer_phoneNumber,
          phoneNumber2: formValues.customer_phoneNumber2,
          city: formValues.city,
          state: formValues.state,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("update successful");

      setData(res?.data);
    } catch (error) {}
  };

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
            label="Phone Number 2"
            type="number"
            value={formValues.customer_phoneNumber2}
            onChange={handleTabChange}
            name="customer_phoneNumber2"
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
              <MyPropCard key={item.id} data={item} />
            ))}

            {land?.map((item) => (
              <MyPropCard key={item.id} data={item} />
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
