import {StyleSheet} from 'react-native';
import color from '../../utils/colors';
import { Dimensions } from 'react-native';
import { font } from '../../utils/fonts';
const widthScreen = Dimensions.get("window").width;
     
const StylesProgress = StyleSheet.create({
     
    container:{
       flex:1,
       backgroundColor:color.secondary,
       justifyContent:'center',
       alignItems:'center'
    },
    text:{color:color.primary,},
    title:{
        fontSize:font.h1.fontSize,
        fontWeight:font.h1.fontWeight,
        color:color.primary,
        marginLeft: widthScreen*0.05,
        marginBottom: widthScreen*0.02,
        flex: 1 / 4,
        textTransform: "capitalize",
        letterSpacing: 3,
    },
    buttonPosition:{
        position:'absolute',
        right:60,
        bottom:70
    },
    button:{
        backgroundColor:color.primary,
        color:color.secondary,
        width:60,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold',
    }
}) 
    
    
    
export default StylesProgress;