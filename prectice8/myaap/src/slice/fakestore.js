import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fachapi = createAsyncThunk("fatch", async () => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data.products;
});

const fakestore = createSlice({
  name: "fakestore",
  initialState: {
    producat: [],
    lodding: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fachapi.pending, (state) => {
        state.lodding = true;
      })
      .addCase(fachapi.fulfilled, (state, action) => {
        state.lodding = false;
        state.producat = action.payload;
      })
      .addCase(fachapi.rejected, (state) => {
        state.lodding = false;
      });
  },
});

export default fakestore.reducer;
