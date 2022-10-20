import React, { useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import Loader from "../../Loader";
import ModalInput from "../ModalInput";
import Input from "./Input";
import InputsGroupStyles from "./style";

const InputsGroup = (props) => {
  const { userInfo, setuserInfo } = props;
  const style = InputsGroupStyles;
  const [inputSelect, setinputSelect] = useState();
  const [iconInput, setIconInput] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setloading] = useState(false);
  const { name, email } = useSelector((state) => state.SingUp);

  return (
    <View style={style.container}>
      <ModalInput
        icon={iconInput}
        label={inputSelect}
        userInfo={userInfo}
        state={modalVisible}
        set={setModalVisible}
        setuserInfo={setuserInfo}
        setloading={setloading}
      />
      {loading ? (
        <Loader state={loading} stateEdit={setloading} iconLoad={iconInput} />
      ) : (
        <></>
      )}
      <View>
        <View>
          <Input
            userInfo={name}
            label={"User"}
            icon={"account"}
            state={modalVisible}
            set={setModalVisible}
            inputChange={setinputSelect}
            iconChange={setIconInput}
          />
          <Input
            userInfo={email}
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
            userInfo={userInfo.objetive}
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
