import {StyleSheet} from 'react-native';
import color from '../../utils/colors';

const homeStyles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column',
      backgroundColor: color.secondary,
      justifyContent:'center',
      alignItems:'center',
    },
    title: {
      color: color.whiteType,
      fontSize: 30,
    },
    name:{
      color: color.primary,
    },
    text: {
      color: color.whiteType,
      fontSize: 25,
      paddingTop:25,
      paddingBottom:25,
    },

    containerWeight:{
      backgroundColor: color.primary,
      width:'75%',
      height:'8%',
      justifyContent:'center',
      marginBottom:2
    },
    weight:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:16,
    },
    weightText:{
      textAlign:'center',
      fontSize:14,
    },
    containerIdealWeight:{
      width:'74.5%',
      height:'8%',
      justifyContent:'center',
      flexDirection:'row',
    },
    weightDifference1:{
      backgroundColor: color.primary,
      justifyContent:'center',
      width:'50%',
      marginRight:1,
    },
    weightDifference2:{
      backgroundColor: color.primary,
      justifyContent:'center',
      width:'50%',
      marginLeft:1,
    }
  });

  export default homeStyles;