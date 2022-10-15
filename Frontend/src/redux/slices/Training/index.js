import { createSlice } from "@reduxjs/toolkit";

const trainingSlice = createSlice({
  name: "training",
  initialState: {
    userId: "",
    nameTraining: "",
    category: "",
    days: [],
    hours: {
      hourStart: "",
      hourEnd: "",
    },
    date: {
      dateStart: "",
      dateEnd: "",
    },
    modalExercise: false,
    modalTraining: false,
    daySelected: "",
  },
  reducers: {
    setTrainingForm: (state, action) => {
      state.nameTraining = action.payload.nameTraining;
      state.category = action.payload.category;
      state.days = action.payload.days;
      state.date = action.payload.date;
      state.hours = action.payload.hours;
    },
    setModalTraining: (state, action) => {
      state.modalTraining = action.payload;
    },
    setModalExercise: (state, action) => {
      state.modalExercise = action.payload;
    },
    setExercise: (state, action) => {
      const dayIndex = state.days.map((e) => e.day).indexOf(state.daySelected);
      const exercises = state.days[dayIndex].exercises;
      exercises.push(action.payload);
    },
    setDaySelected: (state, action) => {
      state.daySelected = action.payload;
    },
    setDeleteTraining: (state) => {
      state.nameTraining = "";
      state.category = "";
      state.days = "";
      state.date = "";
      state.hours = "";
    },
  },
});

export const {
  setModalExercise,
  setTrainingForm,
  setExercise,
  setDaySelected,
  setModalTraining,
  setDeleteTraining,
} = trainingSlice.actions;
export default trainingSlice.reducer;
