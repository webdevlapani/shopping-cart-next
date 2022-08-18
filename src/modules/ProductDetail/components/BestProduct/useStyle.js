import { useTheme } from "@mui/material";

export const useStyle = () => {
    const theme = useTheme();

    return {
        main: {
            py: "100px",
            [theme.breakpoints.down("md")]: {
                pt: "10px",
            }

        },
        innerContainer : {
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around'
        }
      
    };
};
