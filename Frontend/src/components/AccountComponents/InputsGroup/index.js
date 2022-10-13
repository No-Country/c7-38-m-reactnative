import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import ModalInput from "../ModalInput";
import Input from "./Input";
import InputsGroupStyles from "./style";

const InputsGroup = (props) => {
  const { userInfo, setuserInfo } = props;
  const style = InputsGroupStyles;
  const [inputSelect, setinputSelect] = useState();
  const [iconInput, setIconInput] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={style.container}>
      <ModalInput
        icon={iconInput}
        label={inputSelect}
        userInfo={userInfo}
        state={modalVisible}
        set={setModalVisible}
        setuserInfo={setuserInfo}
      />
      <View>
        <View style={style.DataContainer}>
          <Input
            userInfo={userInfo.userName}
            label={"User"}
            icon={"account"}
            state={modalVisible}
            set={setModalVisible}
            inputChange={setinputSelect}
            iconChange={setIconInput}
          />
          <Input
            userInfo={userInfo.email}
            label={"Email"}
            icon={"email"}
            state={modalVisible}
            set={setModalVisible}
            inputChange={setinputSelect}
            iconChange={setIconInput}
          />
          <Input
            userInfo={userInfo.phone}
            label={"Phone"}
            icon={"cellphone"}
            state={modalVisible}
            set={setModalVisible}
            inputChange={setinputSelect}
            iconChange={setIconInput}
          />

          <Input
            userInfo={userInfo.weight}
            label={"Weight"}
            icon={"weight"}
            state={modalVisible}
            set={setModalVisible}
            inputChange={setinputSelect}
            iconChange={setIconInput}
          />
          <Input
            userInfo={userInfo.idealWeight}
            label={"Objetive"}
            icon={"account-check"}
            state={modalVisible}
            set={setModalVisible}
            inputChange={setinputSelect}
            iconChange={setIconInput}
          />
        </View>
      </View>
    </View>
  );
};

export default InputsGroup;
