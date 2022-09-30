import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import useDimensions from "../../../hooks/useDimensions";
import color from "../../../utils/colors";
import ManageButtonStyles from "./style";

const ListButtons = () => {
  const style = ManageButtonStyles;
  const { heightScreen, widthScreen } = useDimensions();

  return (
    <>
      <TouchableOpacity onPress={() => {}}>
        <View style={style.view2}>
          <Ionicons
            name="download-outline"
            size={heightScreen * 0.03}
            color={color.primary}
            style={style.icon}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <View style={style.view2}>
          <Ionicons
            name="md-trash-bin-outline"
            size={heightScreen * 0.03}
            color={color.primary}
            style={style.icon}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <View style={style.view2}>
          <Ionicons
            name="add-circle-outline"
            size={heightScreen * 0.03}
            color={color.primary}
            style={style.icon}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <View style={style.view2}>
          <Ionicons
            name="create-outline"
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
