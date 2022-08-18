import { useTheme } from "@mui/material";

export const useStyle = () => {
  const theme = useTheme();

  return {
    subProductContainer: {
      mt: theme.spacing(15),
      display: "flex",
    },
    subProductContent: {
      ml: theme.spacing(10),
    },
    priceTag: {
      fontWeight: "bold",
    },
    ratingContainer: {
      mt: theme.spacing(5),
    },
  };
};
