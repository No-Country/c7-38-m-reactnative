import * as yup from "yup";

const exerciseSchema = yup
  .string()
  .min(5, "Exercise must be at least 5 digits")
  .max(20, "Exercise must not exceed 20 digits")
  .matches(/^[aA-zZ\s]+$/, "Full name can only have letters")
  .required();
const repSchema = yup
  .string()
  .min(1, "Repetiton must be at least 1 digits")
  .max(2, "Repetiton must not exceed 2 digits.")
  .matches(/^\d+$/, "Repetiton value not a number")
  .required();

const serieSchema = yup
  .string()
  .min(1, "Serie must be at least 1 digits")
  .max(2, "Serie must not exceed 2 digits.")
  .matches(/^\d+$/, "Serie value not a number")
  .required();

export const breakSchema = yup
  .string()
  .min(1, "Break must be at least 1 digits")
  .max(2, "Break must not exceed 2 digits.")
  .matches(/^\d+$/, "Break value not a number")
  .required();

const schemaExerciseForm = yup.object().shape({
  exercise: exerciseSchema,
  repetitions: repSchema,
  series: serieSchema,
  break: breakSchema,
});

export const validation = async (formValues, state, error) => {
  await schemaExerciseForm
    .validate(formValues)
    .then(() => {
      state(true);
      error(false);
    })
    .catch((err) => {
      console.log("error: ", err.errors[0]);
      state(false);
      error(err.errors[0]);
    });
};
