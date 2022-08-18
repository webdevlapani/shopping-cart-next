import { createTheme } from "@mui/material";
import { COLOR } from "./constants/colors";

const theme = createTheme({
  palette: { primary: { main: "#0C0EB6" }, secondary: { main: "#000" } },
  typography: {
    h2: {
      textTransform: "uppercase",
      fontSize: 32,
      fontFamily: ["Open-sans"].join(),
      fontWeight: "bold",
    },
    h3: {
      textTransform: "uppercase",
      fontSize: 16,
      fontFamily: ["Open-sans"].join(),
      fontWeight: "bold",
    },
    h4: {
      fontSize: 19,
      textTransform: "uppercase",
      fontFamily: ["Open-sans"].join(),
    },
    h5: {
      textTransform: "uppercase",
      fontSize: 18,
      fontFamily: ["Open-sans"].join(),
    },
    h6: {
      color: COLOR.primary,
      fontSize: 14,
      fontFamily: ["Open-sans"].join(),
    },
    body1: {
      fontSize: 14,
      color: COLOR.secondary,
      fontFamily: ["Open-sans"].join(),
    },
    body2: {
      fontSize: 14,
      color: COLOR.grey,
      fontFamily: ["Open-sans"].join(),
    },
    subtitle1: {
      fontSize: 14,
      color: COLOR.secondary,
      fontFamily: ["Open-sans"].join(),
      fontWeight: "bold",
    },
  },
  spacing: 2,
  components: {
    MuiButton: {
      defaultProps: { disableRipple: true },
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
          fontSize: 16,
          fontFamily: ["Open-sans"].join(),
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

export default theme;
