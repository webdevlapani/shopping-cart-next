import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import { getSubtotal } from "../../store/CartSlice";
import CartTable from "./cartTable";
import useStyle from "./useStyle";

const CartModule = () => {
  const cartSubtotal = useSelector((state) => getSubtotal(state));

  const {
    mainContainer,
    buttonContainer,
    totalCartContainer,
    subtotalContainer,
    checkoutButton,
  } = useStyle();

  return (
    <Box sx={mainContainer}>
      <CartTable />
      <Box sx={buttonContainer}>
        <Button variant="contained">APPLY COUPON</Button>
        <Button variant="contained">UPDATE CART</Button>
      </Box>
      <Box sx={totalCartContainer}>
        <Typography variant="h2">CART TOTAL</Typography>
        <Box sx={subtotalContainer}>
          <Typography variant="body1">SUBTOTAL</Typography>
          <Typography variant="body2">${cartSubtotal}</Typography>
        </Box>
        <Box sx={subtotalContainer}>
          <Typography variant="body1">SHIPPING</Typography>
          <Box>
            <input
              type="text"
              placeholder="Enter your address to view shipping options."
            />
            <Typography
              variant="body2"
              sx={{ color: "#000", lineHeight: "19px" }}
            >
              Calculate shipping
            </Typography>
          </Box>
        </Box>
        <Box sx={subtotalContainer}>
          <Typography variant="body1">TOTAL</Typography>
          <Typography variant="body2">${cartSubtotal}</Typography>
        </Box>
        <Button variant="contained" sx={checkoutButton}>
          PROCEED TO CHECKOUT
        </Button>
      </Box>
    </Box>
  );
};

export default CartModule;
