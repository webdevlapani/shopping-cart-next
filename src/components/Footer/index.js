import { Box, Stack, useMediaQuery, Typography, Grid } from "@mui/material";
import React from "react";
import { useStyle } from "./useStyle";
import { useTheme } from "@mui/material";
import Image from "next/image";
import { F0, F1, F2, F3, F4 } from "../../assets/index";

const Footer = () => {
  const {
    container,
    footerContainer,
    aboutContainer,
    subContainer,
    descriptionContainer,
    subTextContainer,
    footerDescription,
    footerHeader,
    instagramContainer,
  } = useStyle();

  const theme = useTheme();

  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  const contactContent = [
    "156-677-124-442-2887",
    "wave@bloowatch.com",
    "Spain",
  ];
  const aboutContent = ["About us", "History", "Contact us"];

  return (
    <Box sx={container}>
      <Stack
        sx={footerContainer}
        direction={matchSM ? "column" : "row"}
        justifyContent="center"
        alignContent="center"
      >
        <Box sx={aboutContainer}>
          <Typography sx={footerHeader}>ABOUT</Typography>
          <Typography sx={[descriptionContainer, footerDescription]}>
            Bloowatch is specialized software for watersports schools (surfing,
            kitesurfing, sailing, and diving) and outdoor activity providers
            (skiing, climbing
          </Typography>
        </Box>
        <Box sx={subContainer}>
          <Typography sx={footerHeader}>CONTACT</Typography>
          <Box sx={descriptionContainer}>
            {contactContent.map((value, index) => (
              <Typography
                key={index}
                sx={[subTextContainer, footerDescription]}
                to="#"
              >
                {value}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box sx={subContainer}>
          <Typography sx={footerHeader}>USEFULL LINKS</Typography>
          <Box sx={descriptionContainer}>
            {aboutContent.map((value, index) => (
              <Typography
                key={index}
                sx={[subTextContainer, footerDescription]}
                to="#"
              >
                {value}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box sx={subContainer}>
          <Typography sx={footerHeader}>INSTAGRAM</Typography>
          <Grid
            container
            sx={instagramContainer}
            justifyContent={!matchSM ? "center" : "flex-start"}
            spacing="5"
          >
            {[F0, F1, F2, F3, F4].map((value, index) => (
              <Grid item key={index}>
                <Image src={value} alt="footer image" />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
