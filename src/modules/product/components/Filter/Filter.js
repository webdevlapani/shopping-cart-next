import React, { useState } from "react";
import { Box, Typography, Slider, TextField } from "@mui/material";
import SubProducts from "../SubProducts/SubProducts";
import { useDispatch } from "react-redux";
import {
  onPriceChange,
  onSearchTermChange,
} from "../../../../store/ProductsSlice";
import { categoryList } from "../../type";
import { useStyle } from "./useStyle";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

const Filter = () => {
  const dispatch = useDispatch();

  const [price, setPrice] = useState([50, 200]);

  // STYLE
  const {
    filterWrapper,
    searchWrapper,
    priceWrapper,
    priceTag,
    categoryWrapper,
    category,
    subProductWrapper,
  } = useStyle();

  // PRODUCT SEARCH
  const onProductSearch = (e) => {
    dispatch(onSearchTermChange(e.target.value));
  };

  // PRICE HANDLER
  const onPriceHandler = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
    } else {
      setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
    }

    dispatch(onPriceChange(price));
  };

  return (
    <Box sx={filterWrapper}>
      <Box sx={searchWrapper}>
        <Typography variant="h5">SEARCH</Typography>
        <TextField
          fullWidth
          hiddenLabel
          variant="filled"
          placeholder="Search for a product"
          onChange={onProductSearch}
        />
      </Box>
      <Box sx={priceWrapper}>
        <Typography variant="h5">PRICE</Typography>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={price}
          onChange={onPriceHandler}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
          min={50}
          max={200}
        />
        <Typography variant="body1" sx={priceTag}>
          PRICE: ${price[0]} — ${price[1]}
        </Typography>
      </Box>
      <Box sx={categoryWrapper}>
        <Typography variant="h5">CATEGORY</Typography>
        {categoryList.map((item, index) => (
          <Typography variant="body2" sx={category} key={index}>
            {item}
          </Typography>
        ))}
      </Box>
      <Box sx={subProductWrapper}>
        <Typography variant="h5">RELATED PRODUCTS</Typography>
        <SubProducts />
      </Box>
    </Box>
  );
};

export default Filter;
