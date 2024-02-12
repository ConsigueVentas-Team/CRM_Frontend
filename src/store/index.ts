import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import categoriesReducer from "./categories/index"
import { useDispatch } from "react-redux";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

 
