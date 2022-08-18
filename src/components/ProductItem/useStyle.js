import { COLOR } from "../../constants/colors";
import theme from "../../theme";

export const useStyle = () => {
  return {
    wrapper: {
      position: "relative",
      maxWidth: 320,
      cursor: "pointer",
    },
    imageContainer: {
      position: "relative",
      overflow: "hidden",
      ":hover": {
        button: {
          bottom: 0,
        },
      },
      button: {
        position: "absolute",
        bottom: -40,
        transition: ".2s linear",
      },
      ":after": {
        content: '""',
        position: "absolute",
        backgroundColor: COLOR.lightGrey,
        width: "100%",
        height: 380,
        left: 0,
        zIndex: -1,
        bottom: 0,
      },
    },
    saleBadge: {
      position: "absolute",
      top: 20,
      left: 10,
      width: 70,
      height: 70,
      backgroundColor: COLOR.primary,
      fontFamily: ["Open-sans"].join(),
    },
    productDetails: {
      h4: {
        mt: theme.spacing(8),
        mb: theme.spacing(2),
      },
      ".MuiChip-root": {
        mt: theme.spacing(11),
        fontSize: 16,
        fontFamily: ["Open-sans"].join(),
      },
    },
    priceStyle: {
      backgroundColor: "transparent",
      textDecoration: "line-through",
    },
  };
};
