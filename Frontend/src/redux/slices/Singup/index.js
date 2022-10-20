import { createSlice } from "@reduxjs/toolkit";

const singSlice = createSlice({
  name: "SingUp",
  initialState: {
    name: "",
    email: "",
    idUser: "",
  },
  reducers: {
    setUser: (state, action) => {
      if (!state.email) {
        state.email = action.payload.email;
      }
    },
    setId: (state, action) => {
      console.log(action.payload);
      state.idUser = action.payload;
    },
    setSignIn: (state, action) => {
      console.log(action.payload);
      if (!state.email && !state.name) {
        state.email = action.payload.email;
        state.name = action.payload.name;
      }
    },
  },
});

export const { setUser, setId, setSignIn } = singSlice.actions;
export default singSlice.reducer;
