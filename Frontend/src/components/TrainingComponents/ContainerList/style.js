import { StyleSheet } from "react-native";
import useDimensions from "../../../hooks/useDimensions";
import color from "../../../utils/colors";
import { font } from "../../../utils/fonts";

const { heightScreen, widthScreen } = useDimensions();

const ContainerListStyles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "space-between",
    alignItems: "center",
  },
  list: { marginBottom: 23 },
  textWithAdd: {
    color: color.secondary,
    fontSize: font.h2.fontSize,
    fontWeight: font.h2.fontWeight,
    textTransform: "capitalize",
  },
  text: {
    color: color.secondary,
    fontSize: font.h2.fontSize,
    fontWeight: font.h2.fontWeight,
    textTransform: "capitalize",
  },
  hours: { color: color.primary },
  containerText: {
    backgroundColor: color.primary,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    width: widthScreen * 0.9,
    height: heightScreen * 0.04,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: 'center',
  },
  addButton: {
    flex: 1 / 2,
    marginHorizontal: widthScreen * 0.04,
  },
});

export default ContainerListStyles;
