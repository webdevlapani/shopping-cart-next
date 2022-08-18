import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
    },
    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
    increaseQuantity: (state, { payload }) => {
      const itemIndex = state.cart.findIndex((item) => item.id === payload);
      state.cart[itemIndex].qty = state.cart[itemIndex].qty + 1;
    },
    decreaseQuantity: (state, { payload }) => {
      const itemIndex = state.cart.findIndex((item) => item.id === payload);
      state.cart[itemIndex].qty = state.cart[itemIndex].qty - 1;
    },
  },
});

export const getSubtotal = (state) =>
  state.cart.cart.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.productPrice * currentValue.qty,
    0
  );

export const {
  addToCart,
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
