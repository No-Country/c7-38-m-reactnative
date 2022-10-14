import { createSlice } from "@reduxjs/toolkit";

const trainingSlice = createSlice({
  name: "training",
  initialState: {
    userId: "324sdfds234",
    nameTraining: "full gym",
    category: "",
    days: [
      {
        day: "lunes",
        hours: {
          hourStart: "17:00",
          hourEnd: "21:00",
        },
        exercises: [
          {
            nameExercise: "press de banca",
            series: 3,
            repetitions: 12,
            break: 2,
          },
          {
            nameExercise: "dominadas",
            series: 3,
            repetitions: 12,
            break: 2,
          },
        ],
      },
      {
        day: "martes",
        hours: {
          hourStart: "17:00",
          hourEnd: "21:00",
        },
        exercises: [
          {
            nameExercise: "press de banca",
            series: 3,
            repetitions: 12,
            break: 4,
          },
          {
            nameExercise: "dominadas",
            series: 3,
            repetitions: 12,
            break: 2,
          },
          {
            nameExercise: "curl biceps",
            series: 4,
            repetitions: 10,
            break: 3,
          },
        ],
      },
    ],
    hours: {
      hourStart: "17:00",
      hourEnd: "21:00",
    },
    date: {
      dateStart: "10-09",
      dateEnd: "20-09",
    },
  },
  reducers: {
    setTrainingName: (state, action) => {
      state.nameTraining = action.payload;
    },
    setTrainingCategory: (state, action) => {
      state.category = action.payload;
    },
    setTrainingDays: (state, action) => {
      state.days = action.payload;
    },
    setTrainingDate: (state, action) => {
      state.date = action.payload;
    },
    setTrainingHours: (state, action) => {
      state.hours = action.payload;
    },
    set: (state, action) => {},
    set: (state, action) => {},
    set: (state, action) => {},
    set: (state, action) => {},
  },
});

export const {
  setTrainingCategory,
  setTrainingDate,
  setTrainingDays,
  setTrainingHours,
  setTrainingName,
} = trainingSlice.actions;
export default trainingSlice.reducer;
