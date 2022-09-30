import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text } from "react-native";
import useDimensions from "../../../hooks/useDimensions";
import color from "../../../utils/colors";
import HeaderTrainingStyles from "./style";

const HeaderTraining = (props) => {
  const { category, nameTraining, date } = props;
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
        {date.startDate}{" "}
        <Ionicons
          name="calendar-sharp"
          size={heightScreen * 0.02}
          color={color.primary}
        />{" "}
        {date.endData}
      </Text>
    </>
  );
};

export default HeaderTraining;
