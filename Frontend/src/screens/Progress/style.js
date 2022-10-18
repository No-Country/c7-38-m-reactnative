import { StyleSheet } from "react-native";
import color from "../../utils/colors";
import { Dimensions } from "react-native";
import { font } from "../../utils/fonts";
const widthScreen = Dimensions.get("window").width;

const StylesProgress = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.secondary,
    justifyContent: "center",
    alignItems: "center",
    paddingTop:30
  },
  text: { color: color.primary },
  title: {
    fontSize: 25,
    fontWeight: font.h1.fontWeight,
    color: color.primary,
    marginLeft: widthScreen * 0.05,
    marginBottom: widthScreen * 0.02,
    flex: 1 / 4,
    textTransform: "capitalize",
    letterSpacing: 3,
    textAlign: "center",
  },
  buttonPosition: {
    position: "absolute",
    right: 50,
    bottom: 70,
  },
  button: {
    backgroundColor: color.primary,
    color: color.secondary,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  containerProgressEmpty:{
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
  },
  buttonPositionProgressEmpty: {
    position:'absolute',
    bottom:70,
    left:177
  },
  titleProgressEmpty:{
    fontSize:30,
    color: color.primary,
    bottom:200,
    fontWeight:'bold',
    alignSelf:'center',
    letterSpacing:2
  },
  iconProgressEmpty: {
    alignSelf:'center',
    bottom:5
  }

});

export default StylesProgress;
