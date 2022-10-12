import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ImagePickerStyles from "./style";
import color from "../../../utils/colors";
import ModalInput from "../ModalInput";
import manageModal from "../InputsGroup/Input/manageModal";
const ImagePicker = (props) => {
  const { userInfo, setuserInfo } = props;
  const style = ImagePickerStyles;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={style.containerImageAndName}>
      <ModalInput
        icon={"image"}
        label={"Image"}
        userInfo={userInfo}
        state={modalVisible}
        set={setModalVisible}
        setuserInfo={setuserInfo}
      />
      <Image
        source={{
          uri: userInfo.image
            ? userInfo.image
            : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png",
        }}
        style={style.image}
      />
      <TouchableOpacity
        style={style.iconChangeImage}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <MaterialCommunityIcons
          name={"image-edit"}
          size={20}
          color={color.greyType}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ImagePicker;
