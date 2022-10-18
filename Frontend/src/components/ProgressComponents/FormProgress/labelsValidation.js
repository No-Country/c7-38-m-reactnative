import * as yup from 'yup'

export const dateSchema = yup
    .string()
    .required('Date start is required')

export const weightSchema = yup
    .string()
    .required('Weight is required')

export const descriptionSchema = yup
    .string()
    .required('Description is required')

const schemaProgressForm = yup.object().shape({
    date : dateSchema,
    weight : weightSchema,
    description :descriptionSchema,
})

export const validation = async (validDate,validWeight,validDescription, state, error) => {
    await schemaProgressForm
      .validate(validDate,validWeight,validDescription)
      .then(() => {
        state(true);
        error(false);
      })
      .catch((err) => {
        state(false);
        error(err.errors[0]);
      });
  };

