import Axios from "axios";

export const postUser = async (
  user,
  setIdUser,
  setMsgError,
  dispatch,
  setId
) => {
  await Axios.post("https://fitnessclub38.herokuapp.com/api/v1/users/signin", {
    name: user.name,
    email: user.email,
    password: user.password,
  })
    .then((res) => {
      console.log(res.status, res.data._id);
      res.data
        ? dispatch(setId(res.data._id))
        : setMsgError("error can't create user");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logInUser = async (user, setIdUser, setMsgError) => {
  await Axios.post("https://fitnessclub38.herokuapp.com/api/v1/users/login", {
    ...user,
  })
    .then((res) => {
      console.log(res.status, res.data);
      res.data[0]
        ? (setIdUser(res.data[0]._id), setMsgError(""))
        : (setIdUser(false), setMsgError(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
