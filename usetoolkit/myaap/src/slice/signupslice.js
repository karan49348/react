import { createSlice, isAction } from "@reduxjs/toolkit";

const signupslice = createSlice({
  name: "karan",
  initialState: {
    user: [],
  },
  reducers: {
    adduser: (state, action) => {
      state.user.push(action.payload);
    },
  },
});

export const { adduser } = signupslice.actions;

export default signupslice.reducer;
