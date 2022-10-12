import React from 'react'
import { StyleSheet, View,Text ,ImageBackground, TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'


export default function Welcome (){
  return (
      <ImageBackground source={require('../assets/assests1.webp')} style={styles.container}>
          <View style={styles.logo}>
          <MaterialCommunityIcons name="weight-lifter" size={64} color="black" />
          <Text style={styles.logoText}>Logo</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.title}>Bienvenido a Fitness Club</Text>
          <Text style={styles.paragraph}>Una plataforma para poder llevar tu entrenamiento a otro nivel!</Text>
          <TouchableOpacity style>
              <Text style={styles.button}>Crear cuenta</Text>
          </TouchableOpacity>
          <TouchableOpacity style>
              <Text style={styles.button1}>Ingresar</Text>
          </TouchableOpacity>
          </View>
          
      </ImageBackground>
  )
} 

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
    },
    title:{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white'
    },
    textContainer:{
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center',
      marginVertical: '50%',
      gap: 20
    },
    paragraph:{
      fontSize: 22,
      fontWeight: 'semibold',
      color: 'white',
      marginVertical: 10,
      marginBottom: 15,
      alignSelf: 'flex-start'
    },
    button:{
      backgroundColor: "#FFE300",
      width: 250,
      textAlign: 'center',
      paddingVertical: 12,
      paddingHorizontal: 14,
      borderRadius: 15,
      marginTop: 140,
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
      alignItems: 'center'
    },
    logoText:{
      fontSize: 35,
      fontWeight: 'bold'
    }
})
