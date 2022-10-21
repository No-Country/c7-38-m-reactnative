import Axios from "axios";
import { ToastAndroid } from "react-native";
const showToastWithGravity = (msg) => {
  ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
};
export const postUser = async (user, dispatch, setId, setMsgError) => {
  await Axios.post("https://fitnessclub38.herokuapp.com/api/v1/users/signin", {
    name: user.name,
    email: user.email,
    password: user.password,
  })
    .then((res) => {
      showToastWithGravity("SignIn is a success");
      res.data._id ? dispatch(setId(res.data._id)) : setMsgError(res.data);
    })
    .catch((err) => {
      showToastWithGravity(err);
    });
};

export const logInUser = async (user, setMsgError, dispatch, setId) => {
  await Axios.post("https://fitnessclub38.herokuapp.com/api/v1/users/login", {
    ...user,
  })
    .then((res) => {
      showToastWithGravity("LogIn is a success");
      res.data[0] ? dispatch(setId(res.data[0]._id)) : setMsgError(res.data);
    })
    .catch((err) => {
      showToastWithGravity(err);
    });
};
