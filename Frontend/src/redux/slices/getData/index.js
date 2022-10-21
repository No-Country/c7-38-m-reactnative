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
        await dispatch(setSignIn(result.data));
      }
    })
    .catch((err) => {
      showToastWithGravity(err);
    });

  Axios.get(`https://fitnessclub38.herokuapp.com/api/v1/profiles/${idUser}`)
    .then(async (result) => {
      if (result.data.profile) {
        await dispatch(setAccount(result.data.profile));
      } else if (Account.phone == "") {
        initAccount(Account, idUser);
      }
    })
    .catch((err) => {
      showToastWithGravity(err);
    });

  Axios.get(`https://fitnessclub38.herokuapp.com/api/v1/training/${idUser}`)
    .then(async (result) => {
      if (result.data.idUser) {
        await dispatch(setTrainingForm(result.data));
      } else if (Training.days == "") {
        trainingPost(Training, idUser);
      }
    })
    .catch((err) => {
      showToastWithGravity(err);
    });
  Axios.get(`https://fitnessclub38.herokuapp.com/api/v1/progress/${idUser}`)
    .then(async (result) => {
      if (result.data.idUser) {
        await dispatch(setAllProgress(result.data.progress));
      } else if (Progress.progress == "") {
        progressPost(Progress, idUser);
      }
    })
    .catch((err) => {
      showToastWithGravity(err);
    });
};
