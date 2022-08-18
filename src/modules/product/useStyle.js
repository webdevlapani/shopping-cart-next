import { useTheme } from "@mui/material";

export const useStyle = () => {
  const theme = useTheme();

  return {
    wrapper: {
      my: theme.spacing(50),
    },
    productHeader: {
      mb: theme.spacing(50),
    },
  };
};
