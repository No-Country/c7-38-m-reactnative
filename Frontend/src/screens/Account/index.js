import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import ImagePicker from "../../components/AccountComponents/ImagePicker";
import InputsGroup from "../../components/AccountComponents/InputsGroup";
import { useSelector } from "react-redux";
import AccountStyles from "./style";
import ButtonLogOut from "../../components/AccountComponents/ButtonLogOut";

const Account = () => {
  const style = AccountStyles;
  const { Account } = useSelector((state) => state);

  return (
    <ScrollView style={style.main}>
      <ButtonLogOut />
      <ImagePicker userInfo={Account} />
      <InputsGroup userInfo={Account} />
    </ScrollView>
  );
};

export default Account;
