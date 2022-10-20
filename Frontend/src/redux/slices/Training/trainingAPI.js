import Axios from "axios";

export const trainingPost = async (form, idUser) => {
  await Axios.post(`https://fitnessclub38.herokuapp.com/api/v1/training`, {
    ...form,
    idUser: idUser,
  })
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const trainingUpdate = async (form, idUser) => {
  const { date, nameTraining, category, days, hours } = form;
  await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/training`, {
    date,
    nameTraining,
    category,
    idUser,
    days,
    hours,
    idUser,
  })
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
};
