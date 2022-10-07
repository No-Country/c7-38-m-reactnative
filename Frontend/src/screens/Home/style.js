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
    titulo: {
      color: color.whiteType,
      fontSize: 30,
    },
    nombre:{
      color: color.primary,
    },
    texto: {
      color: color.whiteType,
      fontSize: 25,
      paddingTop:25,
      paddingBottom:25,
    },
    textoSecundario: {
      color: color.primary,
      fontSize: 25,
    },
    boton: {  
      fontSize:20,
      backgroundColor: color.primary,
      padding:10,
      borderRadius:20,
      marginTop:25,
    },
    containerPeso:{
      backgroundColor: color.primary,
      width:'75%',
      height:'8%',
      justifyContent:'center',
      marginBottom:2
    },
    peso:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:16,
    },
    pesoTexto:{
      textAlign:'center',
      fontSize:14,
    },
    containerPesoIdeal:{
      width:'74.5%',
      height:'8%',
      justifyContent:'center',
      flexDirection:'row',
    },
    pesoDiferencia1:{
      backgroundColor: color.primary,
      justifyContent:'center',
      width:'50%',
      marginRight:1,
    },
    pesoDiferencia2:{
      backgroundColor: color.primary,
      justifyContent:'center',
      width:'50%',
      marginLeft:1,
    }
  });

  export default homeStyles;