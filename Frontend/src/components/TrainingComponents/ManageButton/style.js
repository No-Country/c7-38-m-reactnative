import { StyleSheet } from "react-native";
import useDimensions from "../../../hooks/useDimensions";
import color from "../../../utils/colors";

const { heightScreen, widthScreen } = useDimensions();

const ManageButtonStyles = StyleSheet.create({
  touchable: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  viewMenuOpen: {
    backgroundColor: color.primary,
    width: heightScreen * 0.067,
    height: heightScreen * 0.067,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginLeft: 15,
    elevation: 5,
    borderColor: color.secondary,
    borderWidth: 1,
  },
  viewMenuClose: {
    backgroundColor: color.secondary,
    width: heightScreen * 0.067,
    height: heightScreen * 0.067,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginLeft: 15,
    elevation: 5,
    borderColor: color.secondary,
    borderWidth: 1,
  },
  view2: {
    backgroundColor: color.secondary,
    width: heightScreen * 0.067,
    height: heightScreen * 0.067,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginLeft: 12,
  },
  menuOpen: {
    backgroundColor: color.secondary,
    height: heightScreen * 0.072,
    margin: heightScreen * 0.027,
    paddingLeft: widthScreen * 0.01,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 30,
    borderTopEndRadius: 30,
    borderTopStartRadius: 20,
    elevation: 5,
    borderColor: color.secondary,
    borderWidth: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  menuClose: {
    height: heightScreen * 0.072,
    margin: heightScreen * 0.027,
    borderWidth: 2,
    borderColor: color.secondary,
  },
  icon: {},
});

export default ManageButtonStyles;
