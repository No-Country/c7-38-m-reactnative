import {StyleSheet} from 'react-native';
import color from '../../utils/colors';

const cronometroStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.whiteType,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: color.secondary
    },
    titulo: {
      color: color.whiteType,
      fontSize: 30,
      marginBottom: 10
    },
    minutos: {
      color: color.whiteType,
      fontSize:100,
      marginBottom:-30
    },
    segundos: {
      color: color.primary,
      fontSize:70,
      marginRight:-30,
      marginBottom: 10
    },
    containerBotones: {
      flexDirection: 'row'
    },
    botones: {
      backgroundColor: color.primary,
      padding:20,
      margin:20,
      borderRadius: 50,
      textAlign: 'center',
    },
    desaparecerBotones: {
      display: 'none'
    }
  
});

export default cronometroStyles;