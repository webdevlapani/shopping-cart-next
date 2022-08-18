import { useTheme } from "@mui/material";

export const useStyle = () => {
  const theme = useTheme();

  return {
    main: {
      pt: "100px",
      [theme.breakpoints.down("md")]: {
        pt: "10px",
      },
    },
    overviewContainer: {
      width: "100%",
      mr: "20px",
    },
    imageContainer: {
      backgroundColor: "#FAFAFA",
      height: "100%",
      width: "25vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      p: "30px",
      [theme.breakpoints.down("md")]: {
        width: "100vw",
        p: "0px",
      },
    },
    image: {
      height: "100%",
      width: "100%",
    },
    overviewDetail: {
      p: "30px",

      ml: "20px",
    },
    productTitle: {
      textTransform: "uppercase",
    },
    priceContainer: {
      my: "20px",
    },
    price: {
      backgroundColor: "#0C0EB7",
      color: "white",
      py: "5px",
      px: "16px",
    },
    discount: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mx: "20px",
    },
    productDetail: {
      my: "40px",
    },
    quantity: {
      border: "none",
      width: "15px",
      mr: "8px",
      ":after": {
        content: "none",
      },
      ":before": {
        content: "none",
      },
    },
    quantityBtn: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "20px",
    },
    addToCartContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    separator: {
      height: "3px",
      backgroundColor: "black",
      borderBottom: "2px solid black",
    },
    addtocartbtn: {
      ml: "20px",
      border: "1px solid black",
      color: "black",
    },
    SKU: {
      my: "30px",
      mt: "50px",
    },
    category: {
      my: "30px",
    },
    tags: {
      my: "30px",
    },
  };
};
