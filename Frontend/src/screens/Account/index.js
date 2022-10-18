import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import ImagePicker from "../../components/AccountComponents/ImagePicker";
import InputsGroup from "../../components/AccountComponents/InputsGroup";
import { useSelector } from "react-redux";
import AccountStyles from "./style";

const Account = () => {
  const style = AccountStyles;
  const [userInfo, setuserInfo] = useState({});
  const { Account } = useSelector((state) => state);

  return (
    <ScrollView style={style.main}>
      <ImagePicker userInfo={Account} setuserInfo={setuserInfo} />
      <InputsGroup userInfo={Account} setuserInfo={setuserInfo} />
    </ScrollView>
  );
};

export default Account;
