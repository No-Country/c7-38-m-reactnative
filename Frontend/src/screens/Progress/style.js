import {StyleSheet} from 'react-native';
import color from '../../utils/colors';
import { font } from '../../utils/fonts';
     
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
        marginLeft:20,
    }
}) 
    
    
    
export default StylesProgress;