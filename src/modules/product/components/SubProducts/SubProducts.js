import React from "react";
import { Box, Typography, Rating } from "@mui/material";
import Image from "next/image";
import { useStyle } from "./useStyle";
import { subProducts } from "../../type";

const SubProducts = () => {
  const { subProductContainer, subProductContent, priceTag, ratingContainer } =
    useStyle();

  return (
    <>
      {subProducts.map((item, index) => (
        <Box sx={subProductContainer} key={index}>
          <Image src={item.src} alt="sidebar product not found" />
          <Box alignItems="center" sx={subProductContent}>
            <Typography variant="body2" sx={priceTag}>
              {item.name}
            </Typography>
            <Rating
              sx={ratingContainer}
              name="half-rating"
              defaultValue={item.rating}
              precision={0.5}
            />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default SubProducts;
