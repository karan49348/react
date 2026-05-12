 import { createSlice } from "@reduxjs/toolkit";
 const alluser=createSlice({
  name:'allusr',
  initialState:{
    userdata:[]
  }, 
  reducers:{
    userdata:(state,action)=>{
      state.userdata=action.payload;
    }
  }
 })
  export const{userdata}=alluser.actions;
  export default alluser.reducer;