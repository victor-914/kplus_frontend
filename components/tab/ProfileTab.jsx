import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {  Box } from "@mui/material";
import EmptyPortfolio from "../empty/EmptyPortfolio";
import styled from "styled-components";
import Cookies from "js-cookie";
import {useSelector} from "react-redux"
import CardProperty from "../new/components/CardProperty";
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

 
  const favorites = useSelector(state => state.favorites.favorites);
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab label="Favourites Properties" />
        </Tabs>
      </AppBar>


      <div style={{
        width:"100%",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-around"
      }}>
        <>
          {favorites.length === 0 && <EmptyPortfolio />}

          <StyledPropListing className="propertyListing">
            {favorites?.map((item) => (
               <CardProperty property={item}/>
            ))}

           
          </StyledPropListing>
        </>
      </div>
    </Box>
  );
}

const StyledPropListing = styled.section`
  width: 40%;
  display: flex;
  flex-direction: row;
  padding-top:30px;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
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
