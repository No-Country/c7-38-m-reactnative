import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import useDimensions from "../../../hooks/useDimensions";
import {
  setDeleteTraining,
  setModalTraining,
} from "../../../redux/slices/Training";
import color from "../../../utils/colors";
import ManageButtonStyles from "./style";

const ListButtons = (props) => {
  const style = ManageButtonStyles;
  const { setmenuOpen } = props;
  const dispatch = useDispatch();
  const { heightScreen, widthScreen } = useDimensions();

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setmenuOpen(false);
        }}
      >
        <View style={style.view2}>
          <Icon
            name="file-download-outline"
            size={heightScreen * 0.03}
            color={color.primary}
            style={style.icon}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(setDeleteTraining()), setmenuOpen(false);
        }}
      >
        <View style={style.view2}>
          <Icon
            name="delete-outline"
            size={heightScreen * 0.03}
            color={color.primary}
            style={style.icon}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(setModalTraining(true), setmenuOpen(false));
        }}
      >
        <View style={style.view2}>
          <Icon
            name="notebook-plus-outline"
            size={heightScreen * 0.03}
            color={color.primary}
            style={style.icon}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ListButtons;
