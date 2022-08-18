import { useTheme } from "@mui/material";

export const useStyle = () => {
  const theme = useTheme();
  return {
    footerHeader: {
      fontFamily: ["open-sans"].join(),
      color: "#FFFFFF",
      fontSize: "14px",
      fontWeight: "bold",
      letterSpacing: 0,
      lineHeight: "19px",
    },
    footerDescription: {
      fontFamily: ["open-sans"].join(),
      fontWeight: "400",
      color: "#FFFFFF",
      fontSize: "13px",
      letterSpacing: 0,
      lineHeight: "18px",
    },
    container: {
      backgroundColor: "black",
      minHeight: "464px",
    },
    footerContainer: {
      color: "white",
    },
    subContainer: {
      mt: theme.spacing(38),
      ml: theme.spacing(52),
      [theme.breakpoints.down("sm")]: {
        mt: theme.spacing(19),
        ml: theme.spacing(26),
      },
    },
    aboutContainer: {
      mt: theme.spacing(38),
      ml: theme.spacing(0),
      [theme.breakpoints.down("lg")]: {
        mt: theme.spacing(19),
        ml: theme.spacing(26),
      },
    },
    descriptionContainer: {
      maxWidth: "312px",
      mt: theme.spacing(24),
      [theme.breakpoints.down("sm")]: {
        mt: theme.spacing(12),
      },
    },
    instagramContainer: {
      mt: theme.spacing(24),
      [theme.breakpoints.down("sm")]: {
        mt: theme.spacing(12),
      },
    },
    subTextContainer: {
      display: "block",
      mt: theme.spacing(10),
      [theme.breakpoints.down("sm")]: {
        mt: theme.spacing(6),
      },
    },
  };
};
