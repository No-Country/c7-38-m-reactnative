import Axios from "axios";

export const postUser = async (user) => {
    await Axios.post("https://fitnessclub38.herokuapp.com/api/v1/users/signin", {
        name : user.name,
        email: user.email,
        password: user.password

    })
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  export const logInUser = async (user) => {
    await Axios.post("https://fitnessclub38.herokuapp.com/api/v1/users/login", {
        ...user
    })
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  