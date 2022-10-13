import React, { useEffect, useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ModalInputStyles from "./style";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import editInput from "./editInput";
import color from "../../../utils/colors";
import { cameraPick, libraryPick, saveImage } from "./functionsCamera";
import validation from "../InputsGroup/validations/validation";

const ModalInput = (props) => {
  const { icon, label, userInfo, setuserInfo, state, set } = props;
  const [inputValue, setInputValue] = useState();
  const [touchText, setTouchText] = useState(false);
  const [toSend, setToSend] = useState(false);
  const [erorrMsg, setErorrMsg] = useState(false);
  const [image, setImage] = useState(null);
  const style = ModalInputStyles;
  useEffect(() => {
    if (inputValue) {
      validation(label, inputValue, setToSend, setErorrMsg);
    }
  }, [inputValue]);

  return (
    <Modal animationType="fade" transparent={true} visible={state}>
      <View style={style.containerModal}>
        {label === "Image" ? (
          <View style={style.containerViewImage}>
            <Icon
              style={style.iconCloseSelect}
              name={"close-circle-outline"}
              size={15}
              color={"#767676"}
              onPress={() => set(false)}
            />
            <View style={style.containerImage}>
              <Image
                source={{
                  uri: image
                    ? image
                    : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png",
                }}
                style={style.image}
              />
            </View>

            <View style={style.containerTouchsImage}>
              <TouchableOpacity
                style={style.touchableImage}
                onPress={() => {
                  cameraPick(image, setImage, setuserInfo);
                }}
              >
                <View style={style.containTouch}>
                  <Icon
                    name={"camera-image"}
                    size={15}
                    color={color.primary}
                    style={style.icon}
                  />
                  <Text style={style.touchableText}>Camera</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.touchableImage}
                onPress={() => {
                  libraryPick(image, setImage, setuserInfo);
                }}
              >
                <View style={style.containTouch}>
                  <Icon
                    name={"image-search"}
                    size={15}
                    color={color.primary}
                    style={style.icon}
                  />
                  <Text style={style.touchableText}>Library</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={style.pressableToSave}
              onPress={() => {
                saveImage(setuserInfo, userInfo, image);
                set(!state);
              }}
            >
              <Text style={style.textToSave}>Save changes</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={style.containerView}>
            <Icon
              style={style.iconCloseSelect}
              name={"close-circle-outline"}
              size={15}
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
            <TouchableOpacity
              style={toSend ? style.pressableToSave : style.pressableDisable}
              disabled={!toSend}
              onPress={() => {
                editInput(label, inputValue, userInfo, setuserInfo),
                  set(!state);
              }}
            >
              <Text style={toSend ? style.textToSave : style.textDisable}>
                Save changes
              </Text>
            </TouchableOpacity>
            <View style={style.containerErrorMsg}>
              <Text style={style.errorMsg}>{erorrMsg}</Text>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default ModalInput;
