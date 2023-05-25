import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const userLocalSlice = createSlice({
  name: "userLogged",
  initialState,
  reducers: {
    cleanUserLocal() {
      localStorage.clear();
      return initialState;
    },
    includeUserLocal(_state, action) {
      localStorage.setItem("userLogged", action.payload);
      return action.payload;
    },
    getUserLocal(_state, action) {
      localStorage.getItem("userLogged");
      return action.payload;
    },
  },
});

export const { cleanUserLocal, includeUserLocal, getUserLocal } =
  userLocalSlice.actions;

export default userLocalSlice.reducer;
