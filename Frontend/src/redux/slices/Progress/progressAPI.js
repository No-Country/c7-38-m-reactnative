import Axios from 'axios'

export const progressPost = async (form, _id) => {
    await Axios.post(`https://fitnessclub38.herokuapp.com/api/v1/progress`,{
        ...form
    })
        .then((result) => {
            console.log(result.status);
        })
        .catch((err) => {
            console.log(err);
        })
};

export const progressUptdate = async (form, _id) => {
    await Axios.patch(`https://fitnessclub38.herokuapp.com/api/v1/progress/${_id}`),{
        ...form
    }
        .then((result) => {
            console.log(result.status);
        })
        .catch((err) => {
            console.log(err);
        })
};