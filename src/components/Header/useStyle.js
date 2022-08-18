import { useTheme } from "@mui/material";

export const useStyle = () => {
  const theme = useTheme();

  return {
    main: {
      height: "120px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      px: "5%",
    },
    header: {
      justifyContent: "space-between",
    },
    logo: {
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
    },
    menu: {
      mt: "20px",
      justifyContent: "space-around",
      width: "50%",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  };
};
