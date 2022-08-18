import { useTheme } from "@mui/material";

const useStyle = () => {
  return {
    tableContainer: {
      px: "20px",
      "& .MuiTableCell-root": {
        border: "none",
      },
    },
    tableSubContainer: {
      "& .MuiTable-root": {
        height: "20px",
      },
    },
    tableImage: {
      minWidth: "125px",
    },
    tableCloseIcon: {
      width: "75px",
      "& .MuiSvgIcon-root": {
        cursor: "pointer",
      },
    },
    quantityBtn: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "20px",
      pl: "21px",
    },
    separator: {
      height: "3px",
      backgroundColor: "black",
      borderBottom: "2px solid black",
    },
  };
};

export default useStyle;
