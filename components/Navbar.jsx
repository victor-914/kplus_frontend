import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../assets/logobg.png";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import { useRouter } from "next/router";
import Image from "next/image";
import { MdLandscape } from "react-icons/md";
import { MdOtherHouses } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
import { LinkOffTwoTone } from "@mui/icons-material";
export const Navbar = () => {
  const router = useRouter();

  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "lands", "houses", "about", "contact"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => router.push(`${text === "Home" ? "/" : text}`)}
          >
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <MdLandscape />}
                {index === 2 && <MdOtherHouses />}
                {index === 3 && <AiOutlineProfile />}
                {index === 4 && <ContactsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#e8cd7a",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    // position: "fixed",
    // top: "0",
    // backgroundColor: "#e8cd7a",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: "",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    width: "100%",
    height: "80px",
    padding: "5px",
    borderRadius: "50%",
    backgroundColor: "#000",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <Box
            style={{
              width: "100px",
              height: "100px",
              padding: "3px",
              backgroundColor: "#000",
              borderRadius: "50%",
            }}
          >
            <Image src={logoImg} alt="logo" />
          </Box>
        </Box>

        <NavbarLinksBox>
          <NavLink onClick={() => router.push("/")} variant="body2">
            Home
          </NavLink>
          <NavLink onClick={() => router.push("/about")} variant="body2">
            About
          </NavLink>
          {/* <NavLink variant="body2">Features</NavLink> */}
          <NavLink onClick={() => router.push("/houses")} variant="body2">
            Houses
          </NavLink>
          <NavLink onClick={() => router.push("/lands")} variant="body2">
            Lands
          </NavLink>
          <NavLink variant="body2" onClick={() => router.push("/contact")}>
            Contact Us
          </NavLink>
        </NavbarLinksBox>
      </Box>

      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavLink variant="body2">Sign Up</NavLink>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Register"
        />
      </Box> */}
    </NavbarContainer>
  );
};

export default Navbar;
