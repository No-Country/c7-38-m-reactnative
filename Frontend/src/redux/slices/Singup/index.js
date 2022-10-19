import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import { postUser } from "./singupAPI";
const singSlice = createSlice({
  name: "SingUp",
  initialState: {
    user: "",
    id: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setPostUser: (state, action) => {
      postUser(action.payload);
    },
  },
});


export const { setUser, setId, setPostUser } = singSlice.actions;
export default singSlice.reducer;
