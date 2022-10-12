import { StyleSheet } from "react-native";
import useDimensions from "../../../hooks/useDimensions";
import color from "../../../utils/colors";
import { font } from "../../../utils/fonts";
const { heightScreen, widthScreen } = useDimensions();
const ModalInputStyles = StyleSheet.create({
  containerModal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "#0000004e",
    height: 800,
  },
  containerView: {
    paddingHorizontal: 40,
    borderRadius: 20,
    backgroundColor: color.secondary,
    elevation: 3,
    maxWidth: 300,
    marginBottom: 160,
    height: heightScreen * 0.18,
    justifyContent: "center",
  },
  iconInput: {
    position: "absolute",
    bottom: heightScreen * 0.01,
    left: widthScreen * 0.019,
    zIndex: 1,
  },

  iconCloseSelect: {
    position: "absolute",
    top: heightScreen * 0.01,
    right: widthScreen * 0.019,
  },
  pressableToSave: {
    backgroundColor: color.primary,
    marginTop: heightScreen * 0.03,
    paddingVertical: heightScreen * 0.01,
    borderRadius: 10,
    paddingHorizontal: widthScreen * 0.01,
    marginHorizontal: widthScreen * 0.1,
    elevation: 5,
  },
  input: {
    paddingRight: widthScreen * 0.1,
    paddingLeft: widthScreen * 0.13,
    width: widthScreen * 0.5,
    height: heightScreen * 0.05,
    borderRadius: 10,
    backgroundColor: color.secondary,
    elevation: 4,
    fontSize: font.b1.fontSize,
    color: color.whiteType,
  },
  textToSave: {
    color: color.secondary,
    textAlign: "center",
    fontSize: font.b1.fontSize,
    textTransform: "capitalize",
  },
});

export default ModalInputStyles;
