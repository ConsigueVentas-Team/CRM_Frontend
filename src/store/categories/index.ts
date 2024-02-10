// redux/productsSlice.js

import { CategoriaDetail } from "@/types/auth";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [] as CategoriaDetail[],
  isLoading: false,
} 

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    startLoadingCategories: (state) => {
      state.isLoading = true;
    },
    setCategories: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
  },
});

export const { setCategories, startLoadingCategories } =
categoriesSlice.actions;
export default categoriesSlice.reducer;
