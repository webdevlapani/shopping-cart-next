import React from "react";
import { useStyle } from "./useStyle";
import { Box, Typography } from "@mui/material";

const SubHeader = ({ pagename }) => {
  const { main, subHeaderTitle, titleContainer } = useStyle();

  return (
    <>
      <Box sx={main}>
        <Box sx={titleContainer}>
          <Typography variant="h3" sx={subHeaderTitle}>
            {pagename}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SubHeader;
