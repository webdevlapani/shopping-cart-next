import { createSlice } from "@reduxjs/toolkit";
import { tags } from "./Data/tags";

const initialState = {
  tags,
};

export const TagsSlice = createSlice({
  name: "tags",
  initialState,
});

export default TagsSlice.reducer;
