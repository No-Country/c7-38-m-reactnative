import Axios from "axios";
import { initAccount } from "../Account/accountAPI";
import { progressPost } from "../Progress/progressAPI";
import { trainingPost } from "../Training/trainingAPI";

export const getData = (dispatch, idUser, states, sets) => {
  const { Account, Training, Progress } = states;
  const { setAccount, setTrainingForm, setAllProgress, setSignIn } = sets;
  Axios.get(`https://fitnessclub38.herokuapp.com/api/v1/users/${idUser}`)
    .then(async (result) => {
      if (result.data._id) {
        console.log("exist user");
        await dispatch(setSignIn(result.data));
      }
    })
    .catch((err) => {
      console.log(err);
    });

  Axios.get(`https://fitnessclub38.herokuapp.com/api/v1/profiles/${idUser}`)
    .then(async (result) => {
      if (result.data.profile) {
        console.log("exist profile");
        await dispatch(setAccount(result.data.profile));
      } else if (Account.phone == "") {
        console.log("create profile");
        initAccount(Account, idUser);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  Axios.get(`https://fitnessclub38.herokuapp.com/api/v1/training/${idUser}`)
    .then(async (result) => {
      if (result.data.idUser) {
        console.log("exist training");
        await dispatch(setTrainingForm(result.data));
      } else if (Training.days == "") {
        console.log("create training");
        trainingPost(Training, idUser);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  Axios.get(`https://fitnessclub38.herokuapp.com/api/v1/progress/${idUser}`)
    .then(async (result) => {
      if (result.data.idUser) {
        console.log("exist progress");
        await dispatch(setAllProgress(result.data.progress));
      } else if (Progress.progress == "") {
        console.log("create progress");
        progressPost(Progress, idUser);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
