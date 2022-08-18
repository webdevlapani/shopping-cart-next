import { useTheme } from "@mui/material";
export const useStyle = () => {
    const theme = useTheme();

    return {
        main: {
            
            backgroundColor: "#0C0EB7",
        },
        titleContainer: {
            height: "212px",
            display: "flex",
            flexDirection:'row',
            alignItems:'center',
            [theme.breakpoints.down("md")]: {
                height: "190px",
            }
        },
        subHeaderTitle: {
            color: "white",
            textTransform: 'uppercase',
            mx: "10%",
            fontSize:'34.16px',
        },
    };
};
