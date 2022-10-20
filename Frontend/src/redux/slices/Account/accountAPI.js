import Axios from "axios";

export const initAccount = async (account, idUser) => {
  const data = await Axios.post(
    `https://fitnessclub38.herokuapp.com/api/v1/profiles`,
    {
      ...account,
      idUser: idUser,
    }
  )
    .then(async (result) => {
      console.log(result.status);
      return result.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const phoneUpdate = async (value, idUser) => {
  await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/profiles`, {
    phone: value,
    idUser,
  })
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const userUpdate = async (value, idUser) => {
  await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/profiles`, {
    userName: value,
    idUser,
  })
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
  await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/users`, {
    name: value,
    idUser,
  })
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const emailUpdate = async (value, idUser) => {
  await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/profiles`, {
    email: value,
    idUser,
  })
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
  await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/users`, {
    email: value,
    idUser,
  })
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const weightUpdate = async (value, idUser) => {
  await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/profiles`, {
    weight: value,
    idUser,
  })
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const objetiveUpdate = async (value, idUser) => {
  await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/profiles`, {
    objetive: value,
    idUser,
  })
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const imageUpdate = async (value, idUser) => {
  console.log(typeof value);
  await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/profiles`, {
    image: value ? value : "",
    idUser,
  })
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
};
