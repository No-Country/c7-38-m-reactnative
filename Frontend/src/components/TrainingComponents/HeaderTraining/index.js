import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import useDimensions from "../../../hooks/useDimensions";
import color from "../../../utils/colors";
import HeaderTrainingStyles from "./style";

const HeaderTraining = () => {
  const { category, nameTraining, date } = useSelector(
    (state) => state.Training
  );
  const { heightScreen } = useDimensions();
  const style = HeaderTrainingStyles;
  return (
    <>
      <Text style={style.subTitle}>
        {nameTraining}{" "}
        <Ionicons
          name="barbell"
          size={heightScreen * 0.025}
          color={color.primary}
        />{" "}
        {category}
      </Text>
      <Text style={style.date}>
        {date.dateStart}{" "}
        <Ionicons
          name="calendar-sharp"
          size={heightScreen * 0.02}
          color={color.primary}
        />{" "}
        {date.dateEnd}
      </Text>
    </>
  );
};

export default HeaderTraining;
