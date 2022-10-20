import * as yup from 'yup'

export const weightSchema = yup
    .number()
    .min(0, 'Min value 0.')
    .max(700, 'Max value 700.')
    .typeError('Weight must be only numbers')
    .required('Weight is required')
    
export const descriptionSchema = yup
    .string()
    .min(5, "Description must be at least 5 digits")
    .max(80, "Description must not exceed 80 digits")
    .required('Description is required')

export const imageSchema = yup
    .string()
    .required('Image is required')

const schemaProgressForm = yup.object().shape({
    weight : weightSchema,
    description :descriptionSchema,
    image : imageSchema,
})

export const validation = async (Form, state, error) => {
    await schemaProgressForm
      .validate(Form)
      .then(() => {
        state(true);
        error(false);
      })
      .catch((err) => {
        state(false);
        error(err.errors[0]);
      });
  };




