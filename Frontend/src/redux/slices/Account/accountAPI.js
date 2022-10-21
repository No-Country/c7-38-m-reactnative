import Axios from "axios";
import { ToastAndroid } from "react-native";
const showToastWithGravity = (msg) => {
  ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
};
export const initAccount = async (account, idUser) => {
  const data = await Axios.post(
    `https://fitnessclub38.herokuapp.com/api/v1/profiles`,
    {
      ...account,
      idUser: idUser,
    }
  )
    .then((result) => {})
    .catch((err) => {
      showToastWithGravity(err);
    });
};

export const phoneUpdate = async (value, idUser) => {
  await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/profiles`, {
    phone: value,
    idUser,
  })
    .then((result) => {
      showToastWithGravity("Phone update is a success");
    })
    .catch((err) => {
      showToastWithGravity(err);
    });
};
export const userUpdate = async (value, idUser) => {
  await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/profiles`, {
    userName: value,
    idUser,
  })
    .then((result) => {
      showToastWithGravity("Name update is a success");
    })
    .catch((err) => {
      showToastWithGravity(err);
    });
  await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/users`, {
    name: value,
    idUser,
  })
    .then((result) => {})
    .catch((err) => {
      showToastWithGravity(err);
    });
};

export const emailUpdate = async (value, idUser) => {
  await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/profiles`, {
    email: value,
    idUser,
  })
    .then((result) => {
      showToastWithGravity("Email update is a success");
    })
    .catch((err) => {
      showToastWithGravity(err);
    });
  await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/users`, {
    email: value,
    idUser,
  })
    .then((result) => {})
    .catch((err) => {
      showToastWithGravity(err);
    });
};

export const weightUpdate = async (value, idUser) => {
  await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/profiles`, {
    weight: value,
    idUser,
  })
    .then((result) => {
      showToastWithGravity("Weight update is a success");
    })
    .catch((err) => {
      showToastWithGravity(err);
    });
};

export const objetiveUpdate = async (value, idUser) => {
  await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/profiles`, {
    objetive: value,
    idUser,
  })
    .then((result) => {
      showToastWithGravity("Objetive update is a success");
    })
    .catch((err) => {
      showToastWithGravity(err);
    });
};
export const imageUpdate = async (value, idUser) => {
  await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/profiles`, {
    image: value ? value : "",
    idUser,
  })
    .then((result) => {
      showToastWithGravity("Image update is a success");
    })
    .catch((err) => {
      showToastWithGravity(err);
    });
};
