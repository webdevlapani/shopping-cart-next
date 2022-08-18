import { Container, Typography, Tabs, Tab, Rating } from "@mui/material";
import { Box } from "@mui/system";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import { useStyle } from "./useStyle";

import PropTypes from "prop-types";

const MoreDetails = ({ product }) => {
  const {
    main,
    mainContainer,
    ratingContainer,
    firstContainer,
    secondContainer,
    detailTabs,
  } = useStyle();
  const [value, setValue] = React.useState(0);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        sx={mainContainer}
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3, mt: "30px" }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container sx={main}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={detailTabs}
              scrollButtons="auto"
              variant="scrollable"
            >
              <Tab label="DESCRIPTION" {...a11yProps(0)} />
              <Tab label="ADDITIONAL INFORMATION" {...a11yProps(1)} />
              <Tab
                label={`REVIEWS (${product?.reviews?.length})`}
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {product?.discription}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {product?.additionalInformation}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {product?.reviews.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    my: "10px",
                    borderRadius: "5px",
                    p: "10px",
                    border: "1px solid #e7dbdb",
                  }}
                >
                  <Box sx={firstContainer}>
                    <Box sx={{ mt: "7px" }}>
                      <AccountCircleIcon />
                    </Box>
                    <Box sx={{ mx: "5px", letterSpacing: 1 }}>
                      <b>{item.name}</b>
                    </Box>
                  </Box>
                  <Box>
                    <Rating
                      sx={ratingContainer}
                      name="half-rating"
                      defaultValue={item.rating / 2}
                      precision={0.5}
                    />
                  </Box>
                  <Box sx={secondContainer}>
                    <Typography variant="body1">{item.description}</Typography>
                  </Box>
                </Box>
              );
            })}
          </TabPanel>
        </Box>
      </Container>
    </>
  );
};

export default MoreDetails;
