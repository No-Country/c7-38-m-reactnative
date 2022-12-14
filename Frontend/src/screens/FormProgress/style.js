import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import color from "../../utils/colors";
import { font } from "../../utils/fonts";
const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

const StyleFormProgress = StyleSheet.create({
  containerModal: {
    flex: 1,
    backgroundColor: "#0000004e",
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: color.secondary,
  },
  vistaModal: {
    /*   margin: widthScreen * 0.05, */
    /*  height:heightScreen*0.6, */
    width: widthScreen * 0.8,
    backgroundColor: "#c4cccce6",
    backgroundColor: color.secondary,
    borderRadius: 20,
    /* padding: widthScreen*0.1, */
    justifyContent: "flex-start",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  viewModalHeader:{
    backgroundColor: color.primary,
    flexDirection:"row",
    width: widthScreen * 0.7,
    borderRadius: 10,
    marginVertical: heightScreen * 0.02,
    justifyContent:'center'
  },
  closeModal:{
    position:'absolute',
    marginLeft: widthScreen * 0.09,
    marginTop: heightScreen * 0.005
  },
  containerText: {
    marginVertical: heightScreen * 0.02,
    height: heightScreen * 0.05,
    width: widthScreen * 0.6,
    borderRadius: 15,
    backgroundColor: "#c4cccc",
    color: "#000",
    fontSize: font.b1.fontSize,
    fontWeight: font.b1.fontWeight,
  },
  button: {
    backgroundColor: color.primary,
    color: color.secondary,
    width: widthScreen * 0.4,
    height: heightScreen * 0.07,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: heightScreen * 0.08,
  },
  marginButton: {
    marginBottom: widthScreen * 0.05,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: font.h2.fontSize,
    fontWeight: font.h2.fontWeight,
    /*   marginBottom:heightScreen*0.03, */
    textTransform: "capitalize",
    letterSpacing: 2,
  },
  icon: { marginHorizontal: widthScreen * 0.02 },
  touchableText: { color: color.greyType },
  containTouch: {
    flexDirection: "row" ,

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
  containerTouchsImage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: heightScreen * 0.06,
    marginVertical: heightScreen * 0.02,
  },
  labelImage: { color: color.greyType, marginTop: heightScreen * 0.01 },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    height: heightScreen * 0.2,
  },
  image: {
    width: widthScreen * 0.30,
    height: widthScreen * 0.30,
    borderRadius: 100,
    elevation: 5,
    zIndex: 5,
  },
  textInput: {
    backgroundColor: color.secondary,
    color: color.whiteType,
    margin:8,
    textAlign:'center'
  },
  textInputImage: {
    backgroundColor: color.secondary,
    color: color.primary,
    margin:8,
    textAlign:'center'
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
  viewError: {
    justifyContent: "center",
    alignItems: "center",
    height: widthScreen * 0.08,
    width: widthScreen * 0.45,
  },
  textError: { color: color.redType, fontSize: 10 },
});

export default StyleFormProgress;
