import * as yup from "yup";

export const trainingSchema = yup
  .string()
  .required("Training is required")
  .min(5, "Training must be at least 5 digits")
  .max(20, "Training must not exceed 20 digits")
  .matches(/^[aA-zZ\s]+$/, "Full name can only have letters");

export const categorySchema = yup.string().required("Category is required");

export const daysSchema = yup
  .array()
  .min(3, "Days must be at least 3")
  .required("Days is required");

export const dateSchema = yup.object({
  dateEnd: yup
    .string()
    .min(10, "DateEnd is required")
    .required("DateEnd is required"),
  dateStart: yup
    .string()
    .min(10, "DateEnd is required")
    .required("DateStart is required"),
});

export const hourSchema = yup.object({
  hourStart: yup
    .string()
    .min(5, "HourStart is required")
    .required("HourStart is required"),
  hourEnd: yup
    .string()
    .min(5, "HourEnd is required")
    .required("HourEnd is required"),
});

const schemaTrainingForm = yup.object().shape({
  training: trainingSchema,
  category: categorySchema,
  date: dateSchema,
  days: daysSchema,
  hours: hourSchema,
});

export const validation = async (formValues, state, error) => {
  await schemaTrainingForm
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
