import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    profile: "4as34sad",
    userName: "juancito",
    image: "https://cdn-icons-png.flaticon.com/512/3237/3237472.png",
    email: "valeru.251@gmail.com",
    age: "22",
    phone: "3512505784",
    weight: "84",
    idealWeight: "64",
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
} = accountSlice.actions;

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
