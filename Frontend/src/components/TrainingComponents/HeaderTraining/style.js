import { StyleSheet } from "react-native";
import color from "../../../utils/colors";
import { font } from "../../../utils/fonts";

const HeaderTrainingStyles = StyleSheet.create({
  subTitle: {
    flex: 1 / 6,
    color: color.whiteType,
    fontSize: font.h2.fontSize,
    textTransform: "capitalize",
    letterSpacing: 3,
    fontWeight: font.h2.fontWeight,
  },
  date: {
    flex: 1 / 9,
    color: color.whiteType,
    fontSize: font.h3.fontSize,
    letterSpacing: 3,
  },
});

export default HeaderTrainingStyles;
