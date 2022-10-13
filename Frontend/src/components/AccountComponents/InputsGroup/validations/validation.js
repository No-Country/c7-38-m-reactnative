import React from "react";
import * as yup from "yup";

const userNameSchema = yup
  .string()
  .min(5, "Exercise must be at least 5 digits")
  .max(20, "Exercise must not exceed 20 digits")
  .matches(/^[aA-zZ\s]+$/, "Full name can only have letters")
  .required();
const emailSchema = yup.string().email().required();

const phoneSchema = yup
  .string()
  .min(10, "Break must be at least 1 digits")
  .max(15, "Break must not exceed 2 digits.")
  .matches(/^\d+$/, "Break value not a number")
  .required();

export const weightSchema = yup
  .string()
  .min(1, "Break must be at least 1 digits")
  .max(3, "Break must not exceed 2 digits.")
  .matches(/^\d+$/, "Break value not a number")
  .required();

export const objetiveSchema = yup
  .string()
  .min(1, "Break must be at least 1 digits")
  .max(3, "Break must not exceed 2 digits.")
  .matches(/^\d+$/, "Break value not a number")
  .required();

const optionSchema = (label) => {
  if (label == "User") {
    return userNameSchema;
  }
  if (label == "Email") {
    return emailSchema;
  }
  if (label == "Phone") {
    return phoneSchema;
  }
  if (label == "Weight") {
    return weightSchema;
  }
  if (label == "Objetive") {
    return objetiveSchema;
  }
};

export const validation = async (label, value, state, error) => {
  const schema = optionSchema(label);
  await schema
    .validate(value)
    .then(() => {
      state(true);
      error(false);
    })
    .catch((err) => {
      state(false);
      error(err.errors[0]);
    });
};

export default validation;
