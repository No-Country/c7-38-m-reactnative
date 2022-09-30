import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import ManageButtonStyles from "./style";
import { Ionicons } from "@expo/vector-icons";
import color from "../../../utils/colors";
import ListButtons from "./ListButtons";
import useDimensions from "../../../hooks/useDimensions";

const ManageButton = () => {
  const style = ManageButtonStyles;
  const { heightScreen, widthScreen } = useDimensions();
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <View style={style.touchable}>
      <View style={menuOpen ? style.menuOpen : style.menuClose}>
        {menuOpen ? <ListButtons /> : ""}
        <TouchableOpacity
          onPress={() => {
            setmenuOpen(!menuOpen);
          }}
        >
          <View style={menuOpen ? style.viewMenuOpen : style.viewMenuClose}>
            <Ionicons
              name="clipboard-outline"
              size={heightScreen * 0.03}
              color={menuOpen ? color.secondary : color.primary}
              style={style.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ManageButton;
