import { createSlice } from "@reduxjs/toolkit";
import { categories } from "./Data/categories";

const initialState = {
  categories,
};

export const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
});

export default CategoriesSlice.reducer;
