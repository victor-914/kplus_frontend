import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import logoImg from "../assets/logobg.png";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  RiHome2Line,
  RiBuilding2Line,
  RiAddLine,
  RiSearchLine,
} from "react-icons/ri";
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
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
export const Navbar = () => {
  const router = useRouter();
  const [token, setToken] = useState();

  const container = useRef();

  useGSAP(
    () => {

      
    },
    { scope: container }
  );

  useEffect(() => {
    const tok = Cookies.get("user_jwt");
    setToken(tok);
  });

  const handleLogState = () => {
    if (token) {
      Cookies.remove("user_jwt");
      toast.success("Logout successful");
    } else if (!token) {
      router.push("/auth/signin");
    }
  };

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

  const menu = [
    {
      _id: "dhjdjjshd",
      text: "Home",
      link: "/",
      icon: <RiHome2Line />,
    },
    // {
    //   _id: "dhjsjj",
    //   text: "Blog",
    //   link: "/blog",
    //   icon: <RiArticleLine />,
    // },
    // {
    //   _id: "hdjsjlalolhdh",
    //   text: "Upload property",
    //   link: "/profile",
    //   icon: <RiUserLine />,
    // },
    {
      _id: "hdjssjhdh",
      text: "Properties",
      link: "/properties",
      icon: <RiBuilding2Line />,
    },
    // {
    //   _id: "hdh",
    //   text: "Lands",
    //   link: "/lands",
    //   icon: <RiLandscapeLine />,
    // },
    {
      _id: "hdoohdh",
      text: "About",
      link: "/about",
      icon: <RiAddLine />,
    },
    {
      _id: "hdhdjsah",
      text: "Search",
      link: "/search",
      icon: <RiSearchLine />,
    },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menu.map((item) => (
          <>
            <ListItem
              key={item?._id}
              disablePadding
              onClick={() => router.push(`${item.link}`)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item?.text} />
              </ListItemButton>
            </ListItem>
          </>
        ))}
        {/* <ListItem>
          <Button
            variant="contained"
            onClick={handleLogState}
            sx={{
              backgroundColor: "#000 !important",
            }}
          >
            {token ? "Log out" : "Log in"}
          </Button>{" "}
        </ListItem> */}
      </List>
    </Box>
  );

  const NavLink = styled(Typography)(({ theme, isActive }) => ({
    fontSize: "14px",
    color: isActive ? "#FFF" : "#000",
    textTransform: "uppercase",
    fontWeight: "800",
    textAlign: "center",
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
      _id: "hdjssjhdh",
      text: "Properties",
      link: "/properties",
    },
    {
      _id: "hdoohdh",
      text: "About",
      link: "/about",
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
            onClick={() => router.push("/")}
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
          <NavbarLinksBox ref={container}>
            {navArray.map((item) => (
              <NavLink
                isActive={router.pathname === `${item.link}`}
                onClick={() => router.replace(`${item.link}`)}
                variant="body2"
              >
                {item.text}
              </NavLink>
            ))}
            {/* <Button
              variant="contained"
              onClick={handleLogState}
              sx={{
                backgroundColor: "#000 !important",
              }}
            >
              {token ? "Log out" : "Log in"}
            </Button>{" "} */}
          </NavbarLinksBox>
        )}
        {!isMobile && (
          <span
            style={{
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
