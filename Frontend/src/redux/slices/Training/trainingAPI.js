import Axios from "axios";

export const trainingPost = async (form, _id) => {
  await Axios.post(`https://fitnessclub38.herokuapp.com/api/v1/training`, {
    ...form,
  })
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const trainingUpdate = async (form, _id) => {
  await Axios.patch(
    `https://fitnessclub38.herokuapp.com/api/v1/training/${_id}`,
    { ...form }
  )
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const exerciseUpdate = async (days, _id) => {
  await Axios.patch(
    `https://fitnessclub38.herokuapp.com/api/v1/training/${_id}`,
    { days: days }
  )
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
};
