// slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialCategoryState = {
  selectedCategory: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState: initialCategoryState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
