import { StyleSheet } from "react-native";
import color from "../../utils/colors";
import { font } from "../../utils/fonts";

const TrainingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.secondary,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1 / 4,
    color: color.primary,
    fontSize: font.h1.fontSize,
    textTransform: "capitalize",
    letterSpacing: 3,
    fontWeight: font.h1.fontWeight,
  },
  subTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyMessage: {
    color: color.primary,
    fontSize: font.h2.fontSize,
    letterSpacing: 2,
  },
});

export default TrainingStyles;
