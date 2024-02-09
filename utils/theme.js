import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    custom: {
      bg: "#000",
    },
    background: {
      paper: "#fff",
      default: "#909f",
      sec: "#00e8",
    },

    text: {
      primary: "#000",
    },
    action: {
      hover: "#000",
    },
  },

  typography: {
    fontFamily: ['"Montserrat"', "Open Sans"].join(","),
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: "#fff", // Text color on hover
            backgroundColor: "#000", // Background color on hover
          },
        },
      },
    },
  },
});

export default theme;
