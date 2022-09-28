import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';
import color from '../../utils/colors';
import { font } from '../../utils/fonts';
const widthScreen = Dimensions.get("window").width;

const StylesItemProgress = StyleSheet.create({
    container:{
       flex:1,
       flexDirection:"row",
       backgroundColor:color.secondary,
       marginTop:10,
       paddingHorizontal:20,
       width:widthScreen,
    },
    textContainer:{
        flex:1,
        flexDirection:"column",
        paddingRight:10,
    },
    text:{
        color:color.primary,
        marginBottom:20,
    },
    title:{
        fontSize:font.h1.fontSize,
        fontWeight:font.h1.fontWeight,
        color:color.primary
    },
    img:{
        height: 120,
        width: 120,
        marginRight: 10,
        borderRadius:20,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:color.primary,
    },
    
}) 
    
    
    
export default StylesItemProgress;