import { StyleSheet } from "react-native";
import useDimensions from "../../../../hooks/useDimensions";
import color from "../../../../utils/colors";
import { font } from "../../../../utils/fonts";
const { heightScreen, widthScreen } = useDimensions();
const InputStyles = StyleSheet.create({
  inputView: {
    backgroundColor: color.secondary,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "#0000",
    borderWidth: 1,
    marginBottom: heightScreen * 0.04,
  },
  inputLabel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: widthScreen * 0.3,
    height: heightScreen * 0.08,
    backgroundColor: color.primary,
    paddingHorizontal: 14,
    marginEnd: 10,
    borderRadius: 20,
    elevation: 13,
  },
  inputLabel2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: widthScreen * 0.6,
    height: heightScreen * 0.08,
    backgroundColor: color.secondary,
    paddingHorizontal: widthScreen * 0.06,
    borderColor: color.secondary,
    borderWidth: 6,
    borderRadius: 20,
    elevation: 13,
  },
  textLabel: {
    color: color.secondary,
    fontSize: font.h3.fontSize,
    letterSpacing: 1,
  },
  textValue: {
    color: color.primary,
    fontSize: font.b1.fontSize,
    textTransform: "capitalize",
    letterSpacing: 1,
  },
  icon: { marginEnd: widthScreen * 0.021 },
});

export default InputStyles;
