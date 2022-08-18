import { useTheme } from "@mui/material";

export const useStyle = () => {
  const theme = useTheme();

  return {
    main: {
      mt: "100px",
      pb: "100px",
      [theme.breakpoints.down("md")]: {
        px: "5%",
      },
    },
    ratingContainer: {
      mt: theme.spacing(3),
    },
    firstContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  };
};
