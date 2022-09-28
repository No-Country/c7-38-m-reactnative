import {StyleSheet} from 'react-native';

const cronometroStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: '#151515'
    },
    titulo: {
      color: '#fff',
      fontSize: 30,
      marginBottom: 10
    },
    minutos: {
      color: '#fff',
      fontSize:100,
      marginBottom:-30
    },
    segundos: {
      color: '#FFE300',
      fontSize:70,
      marginRight:-30,
      marginBottom: 10
    },
    containerBotones: {
      flexDirection: 'row'
    },
    botones: {
      backgroundColor: '#FFE300',
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