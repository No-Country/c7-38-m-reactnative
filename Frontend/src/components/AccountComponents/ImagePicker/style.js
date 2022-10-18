import { StyleSheet } from "react-native";
import useDimensions from "../../../hooks/useDimensions";
import color from "../../../utils/colors";
const { heightScreen, widthScreen } = useDimensions();
const ImagePickerStyles = StyleSheet.create({
  containerImageAndName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: heightScreen * 0.04,
    marginTop: heightScreen * 0.06,
    borderRadius: 20,
  },
  image: {
    width: widthScreen * 0.34,
    height: widthScreen * 0.34,
    borderRadius: 100,
    elevation: 5,
    zIndex: 5,
  },
  iconChangeImage: {
    position: "absolute",
    top: heightScreen * 0.07,
    left: widthScreen * 0.75,
    backgroundColor: color.secondary,
    borderRadius: 100,
    borderColor: color.secondary,
    borderWidth: 1,
    elevation: 5,
    zIndex: 3,
  },
});

export default ImagePickerStyles;
