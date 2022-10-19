import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
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
    _id: "",
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
    setId: (state, action) => {
      state._id = action.payload;
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
  setId,
} = accountSlice.actions;

export const editInput = (label, value, _id) => {
  if (label == "User") {
    userUpdate(value, _id);
    return setUserName(value);
  }
  if (label == "Email") {
    emailUpdate(value, _id);
    return setEmail(value);
  }
  if (label == "Phone") {
    phoneUpdate(value, _id);
    return setPhone(value);
  }
  if (label == "Weight") {
    weightUpdate(value, _id);
    return setWeight(value);
  }
  if (label == "Objetive") {
    objetiveUpdate(value, _id);
    return setObjetive(value);
  }
  if (label == "Image") {
    imageUpdate(value, _id);
    return setImage(value);
  }
};

export default accountSlice.reducer;
