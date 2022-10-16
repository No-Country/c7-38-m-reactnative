import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';
import color from '../../utils/colors';
import { font } from '../../utils/fonts';
const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;



const StyleFormProgress = StyleSheet.create({
    containerModal:{
        flex:1,
        backgroundColor: "#0000004e",
        justifyContent:'center',
        alignItems:'center',
    },
    picker: {
        flex:1,
        flexDirection:'row',
        backgroundColor:color.secondary
      },
    vistaModal:{
      /*   margin: widthScreen * 0.05, */
       /*  height:heightScreen*0.6, */
        width:widthScreen * 0.8,
        backgroundColor: "#c4cccce6",
        backgroundColor: color.secondary,
        borderRadius: 20,
        /* padding: widthScreen*0.1, */
        justifyContent: "flex-start",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    containerText:{
        marginVertical:heightScreen*0.02,
        height:heightScreen*0.05,
        width:widthScreen*0.6,
        borderRadius:15,
        backgroundColor: "#c4cccc",
        color:"#000",
        fontSize:font.b1.fontSize,
        fontWeight:font.b1.fontWeight,
        
    },
    button:{
        backgroundColor:color.primary,
        color:color.secondary,
        width:widthScreen*0.4,
        height:heightScreen*0.07,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:heightScreen*0.08,
    },
    marginButton:{
        marginBottom: widthScreen * 0.05,
    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold',
    },
    title:{
        fontSize: font.h2.fontSize,
        fontWeight: font.h2.fontWeight,
      /*   marginBottom:heightScreen*0.03, */
        textTransform: "capitalize",
        letterSpacing: 2,
    }
 })

export default StyleFormProgress