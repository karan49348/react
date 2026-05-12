import { createSlice } from "@reduxjs/toolkit";

const sclice = createSlice({
  name: "karan",
  initialState: {
    products: [],
  },
  reducers: {
    addApi: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addApi } = sclice.actions;

export default sclice.reducer;
