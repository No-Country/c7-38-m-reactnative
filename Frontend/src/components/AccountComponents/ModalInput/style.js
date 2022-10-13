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
  pressableDisable: {
    backgroundColor: color.secondary,
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
  textDisable: {
    color: color.primary,
    textAlign: "center",
    fontSize: font.b1.fontSize,
    textTransform: "capitalize",
  },

  containerViewImage: {
    paddingHorizontal: 40,
    borderRadius: 20,
    backgroundColor: color.secondary,
    elevation: 3,
    maxWidth: 300,
    marginBottom: 160,
    height: heightScreen * 0.38,
    justifyContent: "center",
  },
  image: {
    width: widthScreen * 0.34,
    height: widthScreen * 0.34,
    borderRadius: 100,
    elevation: 5,
    zIndex: 5,
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    height: heightScreen * 0.2,
  },
  containerTouchsImage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: heightScreen * 0.06,
  },
  touchableImage: {
    backgroundColor: color.secondary,
    borderRadius: 10,
    width: widthScreen * 0.21,
    height: heightScreen * 0.05,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    marginHorizontal: 10,
    borderColor: color.secondary,
    borderWidth: 3,
    flexDirection: "row",
  },
  touchableText: { color: color.greyType },
  containTouch: { flexDirection: "row" },
  icon: { marginHorizontal: widthScreen * 0.02 },
  containerErrorMsg: {
    justifyContent: 'flex-end',
    alignItems: "center",
  },
  errorMsg: {
    color: color.redType,
    textAlign: "center",
    fontSize: font.b2.fontSize,
  },
});

export default ModalInputStyles;
