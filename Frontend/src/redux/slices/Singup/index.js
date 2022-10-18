import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
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

const postUser = async (user) => {
  await Axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const { setUser, setId, setPostUser } = singSlice.actions;
export default singSlice.reducer;
