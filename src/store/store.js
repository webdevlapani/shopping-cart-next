import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./ProductsSlice";
import CategoriesReducer from "./CategoriesSlice";
import TagsReducer from "./TagsSlice";
import CartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    products: ProductsReducer,
    categories: CategoriesReducer,
    tags: TagsReducer,
    cart: CartReducer,
  },
});

export default store;
