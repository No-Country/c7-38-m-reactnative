import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import ManageButtonStyles from "./style";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
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
        {menuOpen ? <ListButtons setmenuOpen={setmenuOpen}/> : ""}
        <TouchableOpacity
          onPress={() => {
            setmenuOpen(!menuOpen);
          }}
        >
          <View style={menuOpen ? style.viewMenuOpen : style.viewMenuClose}>
            <Icon
              name="notebook"
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
