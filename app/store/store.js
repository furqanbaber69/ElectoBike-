import { configureStore, ReducerType } from "@reduxjs/toolkit";
import productReducers from "@/app/features/slices/productslices";
export const store = configureStore({
  reducer: {
    product: productReducers,
  },
});
