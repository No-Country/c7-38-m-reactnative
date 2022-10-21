import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";
import { globalStyles } from "./globalStyles";
import { useDispatch } from "react-redux";
import { setId, setSignIn } from "../../redux/slices/Singup";
import { postUser } from "../../redux/slices/Singup/singupAPI";

const reviewSchema = yup.object({
  name: yup.string().required().min(4).max(10),
  email: yup.string().email("invalid Email").required("required"),
  password: yup
    .string()
    .required()
    .matches(
      /^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,
      "need one special character"
    )
    .min(8)
    .max(15),
  confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords must match"),
});
export default function Sign({ navigation }) {
  const [secure, setSecure] = useState(true);
  const [cuenta, setCuenta] = useState([]);
  const [msgError, setMsgError] = useState();
  const dispatch = useDispatch();
  function changeSecure() {
    if (secure === false) {
      setSecure(true);
      console.log(secure);
    } else if (secure === true) {
      setSecure(false);
      console.log(secure);
    }
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.logo}>
        <Text style={globalStyles.logoText}>Fitness Club</Text>
      </View>
      <Text
        style={{
          color: "red",
          textAlign: "center",
          fontSize: 15,
          marginTop:10
        }}
      >
        {msgError ? msgError : ""}
      </Text>
      <Formik
        initialValues={{ name: "", email: "", password: "", confirm: "" }}
        validationSchema={reviewSchema}
        onSubmit={async (values, actions) => {
          setCuenta(values);
          await postUser(values, dispatch, setId, setMsgError);
          dispatch(setSignIn(values));
          actions.resetForm();
        }}
      >
        {(props) => (
          <View style={styles.form}>
            <TextInput
              style={globalStyles.input}
              placeholder="Username"
              backgroundColor="#fff"
              onChangeText={props.handleChange("name")}
              onBlur={props.handleBlur("name")}
              value={props.values.name}
              name="username"
            />
            <Text style={globalStyles.errorText}>
              {props.touched.name && props.errors.name}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Email"
              backgroundColor="#fff"
              onChangeText={props.handleChange("email")}
              onBlur={props.handleBlur("email")}
              value={props.values.email}
              name="email"
            />

            <Text style={globalStyles.errorText}>
              {props.touched.email && props.errors.email}
            </Text>
            <View style={globalStyles.inputStyle}>
              <TextInput
                style={globalStyles.input1}
                placeholder="Password"
                backgroundColor="#fff"
                secureTextEntry={secure}
                onChangeText={props.handleChange("password")}
                onBlur={props.handleBlur("password")}
                value={props.values.password}
                name="password"
              />
              <TouchableWithoutFeedback onPress={changeSecure}>
                <Entypo
                  name="eye"
                  size={24}
                  color="black"
                  style={styles.icon}
                />
              </TouchableWithoutFeedback>
            </View>
            <Text style={globalStyles.errorText}>
              {props.touched.password && props.errors.password}
            </Text>
            <View style={globalStyles.inputStyle}>
              <TextInput
                style={globalStyles.input1}
                placeholder="Confirm Password"
                backgroundColor="#fff"
                secureTextEntry={secure}
                onChangeText={props.handleChange("confirm")}
                onBlur={props.handleBlur("confirm")}
                value={props.values.confirm}
                name="confirm"
              />
              <TouchableWithoutFeedback onPress={changeSecure}>
                <Entypo
                  name="eye"
                  size={24}
                  color="black"
                  style={styles.icon}
                />
              </TouchableWithoutFeedback>
            </View>
            <Text style={globalStyles.errorText}>
              {props.touched.confirm && props.errors.confirm}
            </Text>
            <TouchableOpacity onPress={props.handleSubmit}>
              <Text style={styles.button1}>Create Account</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
              Already have an Account?
              <Text
                style={styles.textColor}
                onPress={() => navigation.navigate("LogIn")}
              >
                {" "}
                Log In
              </Text>
            </Text>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 30,
    justifyContent: "center",
  },
  button1: {
    backgroundColor: "#FFE300",
    width: 250,
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 15,
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  text: {
    marginTop: 15,
    color: "#fff",
    textAlign: "center",
  },
  textColor: {
    color: "yellow",
  },
  icon: {
    position: "absolute",
    left: 320,
    top: 15,
  },
});
