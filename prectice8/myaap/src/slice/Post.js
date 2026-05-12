import { createSlice } from "@reduxjs/toolkit";
const allpost = createSlice({
  name: "allpost",
  initialState: {
    userpost: [],
  },
  reducers: {
    userpost: (state, action) => {
      state.userpost = action.payload;
    },
  },
});
export const { userpost } = allpost.actions;
export default allpost.reducer;
