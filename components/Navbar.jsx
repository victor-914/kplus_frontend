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
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
export const Navbar = () => {
  const router = useRouter();

  const isMobile = useMediaQuery("(min-width:800px)");

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
            text: "Blog",
            link: "/blog",
            // icon:
          },
          {
            _id: "hdhdh",
            text: "Profile",
            link: "/profile",
          },
          {
            _id: "hdkkd",
            text: "Lands",
            link: "/lands",
          },
          {
            _id: "hdh",
            text: "Houses",
            link: "/houses",
          },
          {
            _id: "hdoohdh",
            text: "List property",
            link: "sell",
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
    textAlign:"center",
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
    width: isMobile ? "90%" : "70%",
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
      link: "/profile",
    },
    {
      _id: "hdh",
      text: "Houses",
      link: "/houses",
    },

    {
      _id: "hdh",
      text: "Lands",
      link: "/lands",
    },
    {
      _id: "hdoohdh",
      text: "List property",
      link: "/sell",
    },
    {
      _id: "hdhdjsah",
      text: "Search",
      link: "/search",
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

        {isMobile && (
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
            <Button
              variant="contained"
              onClick={() => router.replace("/auth/signin")}
              sx={{
                backgroundColor: "#000 !important",
              }}
            >
              Login
            </Button>{" "}
          </NavbarLinksBox>
        )}
        {!isMobile && (
          <span
            style={{
              backgroundColor: "red",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              padding: "0px",
              margin: "0px",
            }}
          >
            <Drawer
              anchor="left"
              open={mobileMenu["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
            <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          </span>
        )}
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
