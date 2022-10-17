import React from 'react'
import { useState } from 'react';
import { StyleSheet, View, Button, Text ,ImageBackground, TouchableOpacity, TextInput, TouchableWithoutFeedback} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';
import { Formik } from 'formik'
import * as yup from 'yup';
import { globalStyles } from './globalStyles';
import { useSelector, useDispatch } from "react-redux";
import { setUser } from '../../redux/slices/Singup';



const reviewSchema = yup.object({
    username: yup.string().required().min(4).max(10),
    email: yup.string().email('Invalid Email').required('required'),
    password: yup.string().required().matches(/^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,
        'Need one special character',).min(8).max(15),
     confirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')   
})
export default function Sign ({ navigation }){
  const[secure, setSecure] = useState(true)
  const[cuenta, setCuenta]= useState([]);
  const{user} = useSelector((state)=>state.SingUp)
  const dispatch = useDispatch();
  function changeSecure(){
      if(secure === false ){
          setSecure(true)
          console.log(secure)
      } else if( secure === true){
          setSecure(false)
          console.log(secure)
      }
  }
  console.log(cuenta)
  console.log(user)
    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.logo}>
            <MaterialCommunityIcons name="weight-lifter" size={64} color="white" />
            <Text style={globalStyles.logoText}>Logo</Text>
            </View>
      <Formik
      initialValues={{username:'', email:'', password: '', confirm:''}}
      validationSchema={reviewSchema}
      onSubmit={(values,actions) => {
        actions.resetForm();
        setCuenta(values);
        dispatch(setUser(values))
      }}
      >
     {(props)=>(
        <View style={styles.form}>
            <TextInput
             style={globalStyles.input}
             placeholder= 'Username'
             backgroundColor='#fff'
             onChangeText={props.handleChange('username')}
             onBlur={props.handleBlur('username')} 
             value={props.values.username}
             name="username"
             />
        <Text style={globalStyles.errorText}>{props.touched.username && props.errors.username}</Text>
             <TextInput
             style={globalStyles.input}
             placeholder= 'Email'
             backgroundColor='#fff'
             onChangeText={props.handleChange('email')}
             onBlur={props.handleBlur('email')} 
             value={props.values.email}
             name="email"
             />
             
        <Text style={globalStyles.errorText}>{props.touched.email && props.errors.email}</Text>
             <View style={globalStyles.inputStyle}>
             <TextInput
             style={globalStyles.input1}
             placeholder= 'Password'
             backgroundColor='#fff'
             secureTextEntry ={secure}
             onChangeText={props.handleChange('password')}
             onBlur={props.handleBlur('password')} 
             value={props.values.password}
             name="password"
             />
             <TouchableWithoutFeedback onPress={changeSecure}>
             <Entypo name="eye" size={24} color="black" style={styles.icon} />
             </TouchableWithoutFeedback>
             </View>
             <Text style={globalStyles.errorText}>{props.touched.password && props.errors.password}</Text>
             <View style={globalStyles.inputStyle}>
             <TextInput
             style={globalStyles.input1}
             placeholder= 'Confirm Password'
             backgroundColor='#fff'
             secureTextEntry={secure}
             onChangeText={props.handleChange('confirm')}
             onBlur={props.handleBlur('confirm')} 
             value={props.values.confirm}
             name="confirm"
             />
             <TouchableWithoutFeedback onPress={changeSecure}>
              <Entypo name="eye" size={24} color="black" style={styles.icon} />
              </TouchableWithoutFeedback>
             </View>
             <Text style={globalStyles.errorText}>{props.touched.confirm && props.errors.confirm}</Text>
             <TouchableOpacity  onPress={props.handleSubmit}>
              {user.length !== 0 ?<Text style={styles.button1} onPress={()=>navigation.navigate('LogIn')}>Create Account</Text> :<Text style={styles.button1}>Create Account</Text>  }
            </TouchableOpacity>
            <Text style={styles.text}>Already have an Account?<Text style={styles.textColor} onPress={() => navigation.navigate('LogIn')}> Log In</Text></Text>
  
        </View>
     )}
      </Formik>
       
      </View>
    )
}

const styles = StyleSheet.create({
    form:{
        marginTop: 20,
        justifyContent:'center',
    },
    button1:{
        backgroundColor: "#FFE300",
        width: 250,
        textAlign:'center',
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderRadius: 15,
        fontSize: 18,
        marginLeft: 50,
        fontWeight: 'bold',
        textTransform:'uppercase'
      },
      text:{
        marginLeft: 70,
        marginTop: 15,
        color:'#fff'
      },
      textColor:{
        color: 'yellow'
      },
      icon:{
        position:'absolute',
        left: 320,
        top: 15

      }
})