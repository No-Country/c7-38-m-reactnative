import React from 'react'
import { StyleSheet, View,Text ,ImageBackground, TouchableOpacity} from 'react-native'


export default function Welcome ({ navigation }){
  return (
      <View style={styles.container}>
          <View style={styles.logo}>
          <Text style={styles.logoText}>Fitness Club</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.title}>Bienvenido a Fitness Club</Text>
          <Text style={styles.paragraph}>Una plataforma para poder llevar tu entrenamiento a otro nivel!</Text>
          <TouchableOpacity style onPress={() => navigation.navigate('Sign')}>
              <Text style={styles.button}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style>
              <Text style={styles.button1} onPress={() => navigation.navigate('LogIn')}>LogIn</Text>
          </TouchableOpacity>
          </View>
          
      </View>
  )
} 

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#111',
      justifyContent:'center'
    },
    title:{
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
    },
    textContainer:{
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center',
      marginVertical: '20%',
      gap: 20
    },
    paragraph:{
      fontSize: 20,
      fontWeight: 'semibold',
      color: 'white',
      marginVertical: 10,
      marginBottom: 0,
      alignSelf: 'center',
      textAlign:'center',
      marginTop:65
    },
    button:{
      backgroundColor: "#FFE300",
      width: 250,
      textAlign: 'center',
      paddingVertical: 12,
      paddingHorizontal: 14,
      borderRadius: 15,
      marginTop: 60,
      fontSize: 18,
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    button1:{
      backgroundColor: "#FFE300",
      width: 250,
      textAlign: 'center',
      paddingVertical: 12,
      paddingHorizontal: 14,
      borderRadius: 15,
      marginTop: 30,
      fontSize: 18,
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    logo:{
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center',
      marginTop:40
    },
    logoText:{
      fontSize: 35,
      fontWeight: 'bold',
      color:'#fff'
    }
})
