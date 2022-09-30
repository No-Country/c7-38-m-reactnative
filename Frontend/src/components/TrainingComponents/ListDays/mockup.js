const mockUpTraining = {
  userId: "324sdfds234",
  nameTraining: "full training",
  category: "musculacion",
  days: [
    {
      day: "lunes",
      hours: {
        startHour: "17:00",
        endHour: "21:00",
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
        startHour: "16:00",
        endHour: "20:00",
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
    startHour: "17:00",
    endHour: "21:00",
  },
  date: {
    startDate: "10-09",
    endData: "20-09",
  },
};
export default mockUpTraining;
