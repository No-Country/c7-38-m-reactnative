import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import InputStyles from "./style";
import color from "../../../../utils/colors";
import ModalInput from "../../ModalInput";
import manageModal from "./manageModal";
const Input = (props) => {
  const { icon, label, userInfo, state, set, inputChange, iconChange } = props;
  const style = InputStyles;
  return (
    <View style={style.inputView}>
      <View style={style.inputLabel}>
        <MaterialCommunityIcons name={icon} size={20} style={style.icon} />
        <Text style={style.textLabel}>{label}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          manageModal(
            icon,
            label,
            userInfo,
            state,
            set,
            inputChange,
            iconChange
          );
        }}
      >
        <View style={style.inputLabel2}>
          <Text style={style.textValue}>
            {userInfo ? userInfo : `Add your ${label}`}
            {(userInfo && label == "Weight") ||
            (userInfo && label == "Objetive")
              ? " kg"
              : ""}
          </Text>
          <MaterialCommunityIcons
            name={"square-edit-outline"}
            size={15}
            color={color.greyType}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
