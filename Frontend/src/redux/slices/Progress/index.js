import { createSlice } from "@reduxjs/toolkit";

const progressSlice = createSlice({
  name: "progress",
  initialState: {
    progress: [],
    idUser: "",
  },
  reducers: {
    setProgress: (state, action) => {
      state.progress.push(action.payload);
    },
    setAllProgress: (state, action) => {
      state.progress = action.payload;
    },
    setDeleteProgress: (state, action) => {
      const newState = state.progress;
      newState.splice(action.payload, 1);
      state.progress = newState;
    },
    setIdP: (state, action) => {
      state.idUser = action.payload;
    },
  },
});

export const { setProgress, setDeleteProgress, setIdP, setAllProgress } =
  progressSlice.actions;
export default progressSlice.reducer;
