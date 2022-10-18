import { createSlice } from "@reduxjs/toolkit";

const progressSlice = createSlice({
  name: "progress",
  initialState: {
    progress: [],
  },
  reducers: {
    setProgress: (state, action) => {
      console.log(action.payload);
      state.progress.push(action.payload);
    },
  },
});

export const { setProgress } = progressSlice.actions;
export default progressSlice.reducer;
