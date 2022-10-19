import Axios from "axios";

export const initAccount = async (account) => {
  const data = await Axios.post(
    `https://fitnessclub38.herokuapp.com/api/v1/profiles`,
    {
      ...account,
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

export const phoneUpdate = async (value, _id) => {
  await Axios.patch(
    `https://fitnessclub38.herokuapp.com/api/v1/profiles/${_id}`,
    { phone: value }
  )
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const userUpdate = async (value, _id) => {
  await Axios.patch(
    `https://fitnessclub38.herokuapp.com/api/v1/profiles/${_id}`,
    { userName: value }
  )
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const emailUpdate = async (value, _id) => {
  await Axios.patch(
    `https://fitnessclub38.herokuapp.com/api/v1/profiles/${_id}`,
    { email: value }
  )
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const weightUpdate = async (value, _id) => {
  await Axios.patch(
    `https://fitnessclub38.herokuapp.com/api/v1/profiles/${_id}`,
    { weight: value }
  )
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const objetiveUpdate = async (value, _id) => {
  await Axios.patch(
    `https://fitnessclub38.herokuapp.com/api/v1/profiles/${_id}`,
    { objetive: value }
  )
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const imageUpdate = async (value, _id) => {
  console.log(typeof value);
  await Axios.patch(
    `https://fitnessclub38.herokuapp.com/api/v1/profiles/${_id}`,
    {
      image: value ? value : "",
    }
  )
    .then((result) => {
      console.log(result.status);
    })
    .catch((err) => {
      console.log(err);
    });
};
