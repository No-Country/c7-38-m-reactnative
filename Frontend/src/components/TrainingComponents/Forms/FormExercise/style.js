import { StyleSheet } from "react-native";
import useDimensions from "../../../../hooks/useDimensions";
import color from "../../../../utils/colors";
import { font } from "../../../../utils/fonts";
const { heightScreen, widthScreen } = useDimensions();
const FormExerciseStyles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "#0000004e",
    justifyContent: "center",
    alignItems: "center",
  },
  viewModalHeader: {
    width: widthScreen * 0.6,
    backgroundColor: color.primary,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
    height: heightScreen * 0.04,
    flexDirection: "row",
  },
  textModalHeader: {
    fontSize: font.h2.fontSize,
    fontWeight: font.h2.fontWeight,
    textTransform: "capitalize",
    letterSpacing: 2,
    marginLeft: widthScreen * 0.09,
    marginEnd: widthScreen * 0.03,
  },
  viewModal: {
    backgroundColor: color.secondary,
    width: widthScreen * 0.6,
    height: heightScreen * 0.3,
    justifyContent: "center",
    alignItems: "center",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  textModal: { color: color.primary },
  textInput: {
    backgroundColor: color.secondary,
    borderColor: "#040C0C",
    borderWidth: 0.2,
    borderStyle: "solid",
    color: color.primary,
    height: heightScreen * 0.03,
    width: widthScreen * 0.26,
    borderRadius: 5,
    elevation: 5,
    paddingStart: widthScreen * 0.026,
  },
  label: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: heightScreen * 0.02,
    borderRadius: 20,
  },
  containerLabels: {
    height: heightScreen * 0.199,
    width: widthScreen * 0.5,
  },
  sendTouchOff: {
    backgroundColor: color.secondary,
    width: widthScreen * 0.45,
    height: heightScreen * 0.05,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: color.primary,
    borderWidth: 0.2,
    elevation: 10,
  },
  sendTextOff: { color: color.primary },
  sendTextOn: { color: color.secondary },
  sendTouchOn: {
    backgroundColor: color.primary,
    width: widthScreen * 0.45,
    height: heightScreen * 0.05,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  viewError: {
    justifyContent: "center",
    alignItems: "center",
    height: widthScreen * 0.08,
    width: widthScreen * 0.45,
  },
  textError: { color: color.redType, fontSize: font.b2.fontSize },
});

export default FormExerciseStyles;
