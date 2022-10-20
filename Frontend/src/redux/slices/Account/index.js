import { createSlice } from "@reduxjs/toolkit";
import {
  emailUpdate,
  imageUpdate,
  objetiveUpdate,
  phoneUpdate,
  userUpdate,
  weightUpdate,
} from "./accountAPI";

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
    objetive: "",
    idUser: "",
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
      state.objetive = action.payload;
    },
    setIdA: (state, action) => {
      console.log("change account id", action.payload);
      state.idUser = action.payload;
    },
    setAccount: (state, action) => {
      state.userName = action.payload.userName;
      state.image = action.payload.image;
      state.age = action.payload.age;
      state.email = action.payload.email;
      state.objetive = action.payload.objetive;
      state.weight = action.payload.weight;
      state.phone = action.payload.phone;
    },
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
  setIdA,
  setAccount,
} = accountSlice.actions;

export const editInput = (label, value, idUser) => {
  if (label == "User") {
    return setUserName(value);
  }
  if (label == "Email") {
    return setEmail(value);
  }
  if (label == "Phone") {
    phoneUpdate(value, idUser);
    return setPhone(value);
  }
  if (label == "Weight") {
    weightUpdate(value, idUser);
    return setWeight(value);
  }
  if (label == "Objetive") {
    objetiveUpdate(value, idUser);
    return setObjetive(value);
  }
  if (label == "Image") {
    imageUpdate(value, idUser);
    return setImage(value);
  }
};

export default accountSlice.reducer;
