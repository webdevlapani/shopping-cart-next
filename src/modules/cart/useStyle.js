import { useTheme } from "@mui/material";

const useStyle = () => {
  const theme = useTheme();

  return {
    mainContainer: {
      px: "375px",
      pt: "200px",
      [theme.breakpoints.down("xl")]: {
        px: "75px",
      },
      [theme.breakpoints.down("md")]: {
        overflow: "scroll",
      },
      [theme.breakpoints.down("sm")]: {
        px: "20px",
        overflow: "scroll",
      },
    },
    buttonContainer: {
      "& .MuiButtonBase-root": {
        width: "200px",
        height: "50px",
        ml: "20px",
        [theme.breakpoints.down("sm")]: {
          ml: "0px",
          my: "20px",
        },
      },
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      },
      my: "80px",
    },
    totalCartContainer: {
      "& .MuiTypography-h2": {
        letterSpacing: "12.5px",
      },
    },
    subtotalContainer: {
      display: "flex",
      "& .MuiTypography-body1": {
        width: "258px",
        [theme.breakpoints.down("sm")]: {
          maxWidth: "143px",
        },
      },
      mt: "45px",
      input: {
        fontFamily: ["Open-sans"].join(),
        width: "300px",
        color: "#959595",
        border: "none",
        lineHeight: "19px",
        fontSize: "14px",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      },
      "input:focus": {
        outline: "none",
      },
    },
    checkoutButton: {
      height: "49px",
      width: "269px",
      mt: "50px",
      mb: "276px",
    },
  };
};

export default useStyle;
