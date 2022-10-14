import { StyleSheet } from "react-native";
import useDimensions from "../../hooks/useDimensions";
import color from "../../utils/colors";
import { font } from "../../utils/fonts";
const { heightScreen, widthScreen } = useDimensions();
const LoaderStyle = StyleSheet.create({
  modal: {
    backgroundColor: "#0000028e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    backgroundColor: color.secondary,
    justifyContent: "center",
    alignItems: "center",
    height: heightScreen * 0.05,
    width: widthScreen * 0.01,
    borderRadius: 20,
    padding: 40,
    paddingBottom: 20,
    elevation: 3,
  },
  iconReload: {
    marginTop: 18,
    elevation: 5,
    width: widthScreen * 0.04,
    height: widthScreen * 0.04,
    backgroundColor: color.primary,
    borderRadius: 40,
    zIndex: 5,
  },
  backgroundActivityIndicator: {
    backgroundColor: color.secondary,
    borderRadius: 100,
    width: widthScreen * 0.3,
    height: widthScreen * 0.3,
    elevation: 3,
  },
  iconReloadCenter: {
    position: "absolute",
    bottom: heightScreen * 0.02,
    left: widthScreen * 0.05,
    zIndex: 2,
    borderRadius: 10,
  },
  messageContainer: {
    width: widthScreen * 0.3,
    height: widthScreen * 0.1,
    justifyContent: 'flex-end',
    alignItems: "center",
  },
  message: {
    color: color.primary,
    textAlign: "center",
    fontSize: font.b1.fontSize,
    textTransform: "capitalize",
    letterSpacing: 2,
  },
});

export default LoaderStyle;
