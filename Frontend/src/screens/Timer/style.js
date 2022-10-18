import {StyleSheet} from 'react-native';
import color from '../../utils/colors';

const timerStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.whiteType,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: color.secondary
    },
    title: {
      color: color.whiteType,
      fontSize: 30,
      marginBottom: 10
    },
    minutes: {
      color: color.whiteType,
      fontSize:100,
      marginBottom:-30
    },
    seconds: {
      color: color.primary,
      fontSize:70,
      marginRight:-30,
      marginBottom: 10
    },
    containerButton: {
      flexDirection: 'row'
    },
    button: {
      backgroundColor: color.primary,
      padding:20,
      margin:20,
      borderRadius: 50,
      textAlign: 'center',
    },
});

export default timerStyles;