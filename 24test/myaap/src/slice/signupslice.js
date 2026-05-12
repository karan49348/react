import { createSlice } from "@reduxjs/toolkit";

const signupslice = createSlice({
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

export const { addApi } = signupslice.actions;
export default signupslice.reducer;
