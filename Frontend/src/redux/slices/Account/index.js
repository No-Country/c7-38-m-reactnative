import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
const accountSlice = createSlice({
  name: "account",
  initialState: {
    profile: "",
    userName: "",
    image: "https://cdn-icons-png.flaticon.com/512/3237/3237472.png",
    email: "",
    age: "",
    phone: "",
    weight: "",
    idealWeight: "",
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    setObjetive: (state, action) => {
      state.idealWeight = action.payload;
    },
    // setGetPokemon: (state, action) => {
    //   fetchAll();
    // },
  },
});
export const {
  setAge,
  setEmail,
  setImage,
  setObjetive,
  setPhone,
  setUserName,
  setWeight,
  // setGetPokemon,
} = accountSlice.actions;

// export const fetchAll = async (training, category) => {
//   await Axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => console.log(err));
// };

export const editInput = (label, value) => {
  if (label == "User") {
    return setUserName(value);
  }
  if (label == "Email") {
    return setEmail(value);
  }
  if (label == "Phone") {
    return setPhone(value);
  }
  if (label == "Weight") {
    return setWeight(value);
  }
  if (label == "Objetive") {
    return setObjetive(value);
  }
  if (label == "Image") {
    return setImage(value);
  }
};

export default accountSlice.reducer;
