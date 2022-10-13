import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import ImagePicker from "../../components/AccountComponents/ImagePicker";
import InputsGroup from "../../components/AccountComponents/InputsGroup";
import ModalInput from "../../components/AccountComponents/ModalInput";
import AccountStyles from "./style";

const Account = () => {
  const style = AccountStyles;
  const [userInfo, setuserInfo] = useState({
    profile: "4as34sad",
    userName: "juancito",
    image: "https://cdn-icons-png.flaticon.com/512/3237/3237472.png",
    email: "valeru.251@gmail.com",
    age: "22",
    phone: "3512505784",
    weight: "84",
    idealWeight: "64",
  });
  return (
    <ScrollView style={style.main}>
      <ImagePicker userInfo={userInfo} setuserInfo={setuserInfo} />
      <InputsGroup userInfo={userInfo} setuserInfo={setuserInfo} />
    </ScrollView>
  );
};

export default Account;
