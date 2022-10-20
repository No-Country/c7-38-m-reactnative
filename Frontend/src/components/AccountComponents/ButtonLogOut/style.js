import { StyleSheet } from "react-native";
import useDimensions from "../../../hooks/useDimensions";
import color from "../../../utils/colors";

const { heightScreen, widthScreen } = useDimensions();
const ButtonLogOutStyles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: heightScreen * 0.07,
    left: widthScreen * 0.84,
    backgroundColor: color.secondary,
    borderRadius: 100,
    borderColor: color.secondary,
    borderWidth: 1,
    elevation: 5,
    zIndex: 3,
  },
});

export default ButtonLogOutStyles;
