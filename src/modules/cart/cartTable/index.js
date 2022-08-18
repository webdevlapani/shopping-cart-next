import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyle from "./useStyle";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCart,
} from "../../../store/CartSlice";

const CartTable = () => {
  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  const {
    tableHead,
    tableSubContainer,
    tableContainer,
    tableImage,
    tableCloseIcon,
    quantityBtn,
    separator,
  } = useStyle();

  const onRemoveHandler = (id) => () => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <TableContainer sx={tableContainer}>
      <Table sx={tableSubContainer}>
        <TableHead sx={tableHead}>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Typography variant="h3">PRODUCT</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">PRICE</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">QUANTITY</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">SUBTOTAL</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!cart.length && (
            <TableCell>
              <Typography variant="subtitle1">Cart is empty</Typography>
            </TableCell>
          )}

          {cart.map((cartItem) => (
            <TableRow key={cartItem.id}>
              <TableCell sx={tableCloseIcon}>
                <CloseIcon onClick={onRemoveHandler(cartItem.id)} />
              </TableCell>
              <TableCell sx={tableImage}>
                <Image
                  src={cartItem.productImg}
                  alt="Image is not found"
                  height="104px"
                  width="80px"
                />
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">
                  {cartItem.productName}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">
                  ${cartItem.productPrice}
                </Typography>
              </TableCell>
              <TableCell>
                <Stack flexDirection="row">
                  <Typography variant="subtitle1">{cartItem.qty} </Typography>
                  <Box sx={quantityBtn}>
                    <KeyboardArrowUpIcon
                      onClick={() => dispatch(increaseQuantity(cartItem.id))}
                    />
                    <Box sx={separator}></Box>
                    <KeyboardArrowDownIcon
                      onClick={() =>
                        cartItem.qty > 0 &&
                        dispatch(decreaseQuantity(cartItem.id))
                      }
                    />
                  </Box>
                </Stack>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">
                  ${cartItem.qty * cartItem.productPrice}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartTable;
