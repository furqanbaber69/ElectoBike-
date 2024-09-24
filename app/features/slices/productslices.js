import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "images",
      description: "i am here",
      price: 50,
      image: "image",
      rating: {
        rate: 3.5,
        count: 120,
      },
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    addProduct(state, action) {
      state.products.push(action.payload);
    },
  },
});

export const { setProducts, addProduct } = productSlice.actions;

export default productSlice.reducer;
