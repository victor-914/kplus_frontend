// CustomTheme.js
import { createTheme } from "@mui/material/styles";
export const secondaryColor = "#000";
export const tertiaryColor = "#d9ab22";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d9ab22", // Change this to your primary color
    },

    // You can add more custom colors if needed
    // For example:
    // customColor: {
    //   main: '#ff9800',
    // }
  },
});

export default theme;
