import { useTheme } from "@mui/material";

export const useStyle = () => {
  const theme = useTheme();

  return {
    filterWrapper: {
      h5: {
        mb: theme.spacing(6),
        fontWeight: "bold",
      },
      "div > div": {
        input: {
          height: "30px",
        },
        borderRadius: 0,
        ":after": {
          content: "none",
        },
        ":before": {
          content: "none",
        },
      },
    },
    category: {
      fontWeight: 600,
      m: theme.spacing(5),
    },
    subProductWrapper: {
      mt: theme.spacing(30),
    },
    categoryWrapper: {
      mt: theme.spacing(30),
    },
    priceTag: {
      fontWeight: "bold",
    },
    searchWrapper: {
      mt: theme.spacing(30),
      maxWidth: "337px",
    },
    priceWrapper: {
      mt: theme.spacing(30),
      maxWidth: "313px",
    },
  };
};
