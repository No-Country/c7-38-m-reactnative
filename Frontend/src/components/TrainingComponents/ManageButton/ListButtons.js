import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import useDimensions from "../../../hooks/useDimensions";
import {
  setDeleteTraining,
  setModalTraining,
} from "../../../redux/slices/Training";
import color from "../../../utils/colors";
import Loader from "../../Loader";
import ManageButtonStyles from "./style";

const ListButtons = (props) => {
  const style = ManageButtonStyles;
  const { setmenuOpen } = props;
  const dispatch = useDispatch();
  const { heightScreen } = useDimensions();
  const [loading, setloading] = useState(false);
  const [iconLoad, seticonLoad] = useState("arm-flex-outline");

  return (
    <>
      {loading ? (
        <Loader state={loading} stateEdit={setloading} iconLoad={iconLoad} />
      ) : (
        <></>
      )}
      <TouchableOpacity
        onPress={() => {
          seticonLoad("file-download-outline");
          setloading(true),
            setTimeout(() => {
              setmenuOpen(false);
            }, 2100);
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
          seticonLoad("delete-outline");
          setloading(true),
            setTimeout(() => {
              dispatch(setDeleteTraining()), setmenuOpen(false);
            }, 2100);
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
          seticonLoad("notebook-plus-outline");
          setloading(true),
            setTimeout(() => {
              dispatch(setModalTraining(true), setmenuOpen(false));
            }, 2100);
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
