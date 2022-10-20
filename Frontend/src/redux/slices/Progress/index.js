import { createSlice } from "@reduxjs/toolkit";

const progressSlice = createSlice({
  name: "progress",
  initialState: {
    progress: [],
    idUser: "",
  },
  reducers: {
    setProgress: (state, action) => {
      console.log(action.payload);
      state.progress.push(action.payload);
    },
    setAllProgress: (state, action) => {
      state.progress = action.payload;
    },
    setDeleteProgress: (state, action) => {
      const newState = state.progress;
      newState.splice(action.payload, 1);
      state.progress = newState;
      console.log(action.payload);
    },
    setIdP: (state, action) => {
      console.log("change progress id", action.payload);
      state.idUser = action.payload;
    },
  },
});

export const { setProgress, setDeleteProgress, setIdP, setAllProgress } =
  progressSlice.actions;
export default progressSlice.reducer;
