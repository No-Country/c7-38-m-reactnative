import React from 'react'
import { StyleSheet, View, Button, Text ,ImageBackground, TouchableWithoutFeedback, TouchableOpacity, TextInput, Keyboard} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';
import { globalStyles } from './globalStyles'
import { useState } from 'react';


export default function LogIn ({ navigation }){
    const[secure, setSecure] = useState(true)

    function changeSecure(){
        if(secure === false ){
            setSecure(true)
            console.log(secure)
        } else if( secure === true){
            setSecure(false)
            console.log(secure)
        }
    }
  return(
    <TouchableOpacity  style={globalStyles.container} onPress={()=>Keyboard.dismiss}>
      <View style={styles.logo1}>
            <MaterialCommunityIcons name="weight-lifter" size={84} color="white" />
            <Text style={globalStyles.logoText}>Logo</Text>
            </View>
        <View style={styles.logContainer}>
            <TextInput
            placeholder='Email'
            backgroundColor='#fff'
            style={globalStyles.input}
             />
            <View style={styles.inputStyle}>
             <TextInput
            style={styles.input1}
            placeholder='Contraseña'
            backgroundColor='#fff'
            secureTextEntry={secure}
             />
             <TouchableWithoutFeedback onPress={changeSecure}>
             <Entypo name="eye" size={24} color="black" style={styles.icon} />
             </TouchableWithoutFeedback>
             </View>
             <TouchableOpacity>
                <Text style={styles.button1}>Ingresar</Text>
            </TouchableOpacity>
            <Text style={styles.text}>No tenes una cuenta?<Text style={styles.textColor} onPress={() => navigation.navigate('Sign')}> Crear cuenta</Text></Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    logContainer:{
        marginTop: 50,
        justifyContent:'center'
    },
    logo1:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 100
      },
      button1:{
        backgroundColor: "#FFE300",
        width: 250,
        textAlign:'center',
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderRadius: 15,
        marginTop: 30,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 50,
        textTransform:'uppercase'
      },
      inputStyle:{
        flexDirection:'row',
      },
      input1: {
        flex:1,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        fontSize: 18,
        borderRadius: 6,
        marginBottom: 18
      },
      icon:{
        position:'absolute',
        left: 320,
        top: 15
      },
      text:{
        marginLeft: 70,
        marginTop: 15,
        color:'#fff'
      },
      textColor:{
        color: 'yellow',
      },
})