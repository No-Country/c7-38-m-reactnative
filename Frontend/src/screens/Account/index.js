import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import ImagePicker from "../../components/AccountComponents/ImagePicker";
import InputsGroup from "../../components/AccountComponents/InputsGroup";
import { useDispatch, useSelector } from "react-redux";
import AccountStyles from "./style";
import { initAccount } from "../../redux/slices/Account/accountAPI";
import { setId } from "../../redux/slices/Account";

const Account = () => {
  const style = AccountStyles;
  const dispatch = useDispatch();
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
