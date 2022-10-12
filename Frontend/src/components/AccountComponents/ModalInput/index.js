import React, { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";
import ModalInputStyles from "./style";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import editInput from "./editInput";
import color from "../../../utils/colors";
const ModalInput = (props) => {
  const { icon, label, userInfo, setuserInfo, state, set } = props;
  const [inputValue, setInputValue] = useState();
  const [touchText, setTouchText] = useState(false);
  const style = ModalInputStyles;
  return (
    <Modal animationType="fade" transparent={true} visible={state}>
      <View style={style.containerModal}>
        <View style={style.containerView}>
          <Icon
            style={style.iconCloseSelect}
            name={"close-circle-outline"}
            size={20}
            color={"#767676"}
            onPress={() => set(false)}
          />
          <View>
            <Icon
              style={style.iconInput}
              name={icon}
              size={20}
              color={color.primary}
            />
            <TextInput
              style={style.input}
              placeholder={`Enter one ${label ? label.toLowerCase() : ""}`}
              placeholderTextColor={color.greyType}
              cursorColor={color.primary}
              keyboardType={
                label == "Phone" || label == "Weight" || label == "Objetive"
                  ? "numeric"
                  : "default"
              }
              onFocus={() => {
                setTouchText(true);
              }}
              onChangeText={(event) => {
                setInputValue(event);
              }}
            ></TextInput>
          </View>
          <Pressable
            style={style.pressableToSave}
            onPress={() => {
              editInput(label, inputValue, userInfo, setuserInfo), set(!state);
            }}
          >
            <Text style={style.textToSave}>Save changes</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ModalInput;
