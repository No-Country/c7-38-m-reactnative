import Axios from "axios";

export const progressPost = async (form, idUser) => {
  await Axios.post(`https://fitnessclub38.herokuapp.com/api/v1/progress`, {
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

export const progressUpdate = async (progress, idUser) => {
  await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/progress`, {
    progress,
    idUser,
  })

    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
};
