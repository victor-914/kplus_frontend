import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
// import HomeIcon from "@mui/icons-material/Home";
// import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../assets/logobg.png";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
import Image from "next/image";
// import { MdLandscape } from "react-icons/md";
// import { MdOtherHouses } from "react-icons/md";
// import { AiOutlineProfile } from "react-icons/ai";
// import { FaDirections } from "react-icons/fa";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
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
        {[
          {
            _id: "dhhd",
            text: "Home",
            link: "/",
            // icon:<HomeIcon />
          },
          {
            _id: "dh",
            text: "Articles",
            link: "/articles",
            // icon:
          },
          {
            _id: "hdhdh",
            text: "Profile",
            link: "profile",
          },
          {
            _id: "hdkkd",
            text: "Lands",
            link: "lands",
          },
          {
            _id: "hdh",
            text: "Houses",
            link: "houses",
          },
          {
            _id: "hdoohdh",
            text: "Post a Property",
            link: "/profile/upload",
          },
          {
            _id: "hdhdjsah",
            text: "Search",
            link: "search",
          },
        ].map((item) => (
          <ListItem
            key={item?._id}
            disablePadding
            onClick={() => router.replace(`${item.link}`)}
          >
            <ListItemButton>
              <ListItemIcon>{/* icon */}</ListItemIcon>
              <ListItemText primary={item?.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const NavLink = styled(Typography)(({ theme, isActive }) => ({
    fontSize: "14px",
    color: isActive ? "#FFF" : "#000",
    textTransform: "uppercase",
    fontWeight: "800",
    cursor: "pointer",
    height: "100%",
    borderBottom: "1px solid transparent",
    "&:hover": {
      color: "#fff",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "10px",
    backgroundColor: "#d9ab22",
    width: "70%",
    gap: theme.spacing(3),
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
    flexDirection: "column",
    width: "100%",
    position: "sticky",
    zIndex: "200",
    top: 0,
    justifyContent: "space-between",
  }));

  const navArray = [
    {
      _id: "dhhd",
      text: "Home",
      link: "/",
      // icon:<HomeIcon />
    },
    {
      _id: "dh",
      text: "Blog",
      link: "/blog",
      // icon:
    },
    {
      _id: "hdhdh",
      text: "Profile",
      link: "profile",
    },

    {
      _id: "hdh",
      text: "Properties",
      link: "/properties",
    },
    {
      _id: "hdoohdh",
      text: "Post a Property",
      link: "/profile/upload",
    },
    {
      _id: "hdhdjsah",
      text: "Search",
      link: "search",
    },
  ];

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          width: "100%",
          borderTop: "1px solid #000",
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
            sx={{
              width: "80px",
              height: "80px",
              backgroundColor: "#000",
              borderRadius: "70%",
              p: "5px",
              position: "relative",
            }}
          >
            <Image
              layout="responsive"
              style={{
                margin: "4px",
              }}
              objectFit="contain"
              src={logoImg}
              alt="logo"
            />
          </Box>
        </Box>

        <NavbarLinksBox>
          {navArray.map((item) => (
            <NavLink
              isActive={router.pathname === `${item.link}`}
              onClick={() => router.replace(`${item.link}`)}
              variant="body2"
            >
              {item.text}
            </NavLink>
          ))}
          {/* <NavLink onClick={() => router.replace("/")} variant="body2">
            Home
          </NavLink>
          <NavLink onClick={() => router.replace("/articles")} variant="body2">
            Blog
          </NavLink>
          <NavLink onClick={() => router.replace("/houses")} variant="body2">
            Properties
          </NavLink>
          <NavLink variant="body2" onClick={() => router.replace("/contact")}>
            Sell with us
          </NavLink>
          <NavLink onClick={() => router.replace("/profile")} variant="body2">
            Profile
          </NavLink>
          <NavLink onClick={() => router.replace("/lands")} variant="body2">
            Search
          </NavLink> */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000 !important",
            }}
          >
            Login
          </Button>{" "}
        </NavbarLinksBox>
      </Box>

      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      > */}
      {/* <NavLink variant="body2">Sign Up</NavLink> */}
      {/* <Button
          // backgroundColor="#0F1B4C"
          // color="#fff"
          // buttonText="Register"
        />
        
        </Button> */}
      {/* </Box> */}
      {/* </Box> */}
    </NavbarContainer>
  );
};

export default Navbar;
