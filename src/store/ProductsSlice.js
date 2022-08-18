import { createSlice } from "@reduxjs/toolkit";
import { products } from "./Data/products";

const initialState = {
  products,
  filteredProducts: [],
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    onSearchTermChange: (state, { payload }) => {
      state.filteredProducts = state.products.filter((product) =>
        product.name?.toLowerCase().includes(payload?.toLowerCase())
      );
    },
    onSortChange: (state, { payload }) => {
      function sort(a, b, isDescending) {
        if (a.sellingPrice < b.sellingPrice) {
          return isDescending ? -1 : 1;
        }
        if (a.sellingPrice > b.sellingPrice) {
          return isDescending ? 1 : -1;
        }
        return 0;
      }

      state.filteredProducts = Object.values(products).sort((a, b) =>
        sort(a, b, payload)
      );
    },
    onPriceChange: (state, { payload }) => {
      state.filteredProducts = state.products.filter(
        (product) =>
          product.sellingPrice > payload[0] && product.sellingPrice < payload[1]
      );
    },
    bestMatchProduct: (state, { payload }) => {
      state.filteredProducts = state.products
        .filter(
          (product) =>
            product.id !== payload.id &&
            product.category.some((c) =>
              payload.category.map((o) => o.id).includes(c.id)
            )
        )
        .slice(0, 3);
    },
  },
});

export const selectProductById = (state, id) =>
  state.products.products.find((product) => product.id === id);

export const {
  onSearchTermChange,
  onSortChange,
  onPriceChange,
  bestMatchProduct,
} = ProductsSlice.actions;

export default ProductsSlice.reducer;
