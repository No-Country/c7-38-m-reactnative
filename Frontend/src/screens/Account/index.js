import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import ImagePicker from "../../components/AccountComponents/ImagePicker";
import InputsGroup from "../../components/AccountComponents/InputsGroup";
import { useSelector } from "react-redux";
import AccountStyles from "./style";
import ButtonLogOut from "../../components/AccountComponents/ButtonLogOut";
import { emailUpdate, userUpdate } from "../../redux/slices/Account/accountAPI";

const Account = () => {
  const style = AccountStyles;
  const { Account } = useSelector((state) => state);
  const { userName, email, idUser } = useSelector((state) => state.Account);
  useEffect(() => {
    if (userName) {
      userUpdate(userName, idUser);
    }
    if (email) {
      emailUpdate(email, idUser);
    }
  }, [Account]);

  return (
    <ScrollView style={style.main}>
      <ButtonLogOut />
      <ImagePicker userInfo={Account} />
      <InputsGroup userInfo={Account} />
    </ScrollView>
  );
};

export default Account;
