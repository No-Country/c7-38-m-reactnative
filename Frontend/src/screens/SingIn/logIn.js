import React from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { globalStyles } from "./globalStyles";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setId, setUser } from "../../redux/slices/Singup";
import { Formik } from "formik";
import { logInUser } from "../../redux/slices/Singup/singupAPI";

export default function LogIn({ navigation }) {
  const [secure, setSecure] = useState(true);
  const [idUser, setidUser] = useState();
  const [msgError, setMsgError] = useState();
  const { name, email } = useSelector((state) => state.SingUp);
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
      <View style={styles.logo1}>
        <Text style={globalStyles.logoText}>Fitness Club</Text>
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, actions) => {
          dispatch(setUser(values));
          await logInUser(values, setidUser, setMsgError);
          idUser ? dispatch(setId(idUser)) : "";
          actions.resetForm();
        }}
      >
        {(props) => (
          <View style={styles.logContainer}>
            <TextInput
              placeholder="Email"
              onChangeText={props.handleChange("email")}
              value={props.values.email}
              backgroundColor="#fff"
              style={globalStyles.inputLogin}
              name="email"
            />
            <View style={styles.inputStyle}>
              <TextInput
                style={styles.input1}
                onChangeText={props.handleChange("password")}
                placeholder="Password"
                backgroundColor="#fff"
                name="password"
                value={props.values.password}
                secureTextEntry={secure}
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
            <TouchableOpacity>
              <Text style={styles.button1} onPress={props.handleSubmit}>
                Log In
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: "red",
                textAlign: "center",
                fontSize: 15,
                marginVertical: 20,
              }}
            >
              {msgError ? msgError.message : ""}
            </Text>
            <Text style={styles.text}>
              Don't have an Account?
              <Text
                style={styles.textColor}
                onPress={() => navigation.navigate("Sign")}
              >
                {" "}
                Create Account
              </Text>
            </Text>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  logContainer: {
    marginTop: 50,
    justifyContent: "center",
  },
  logo1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  button1: {
    backgroundColor: "#FFE300",
    width: 250,
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 15,
    marginTop: 30,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    alignSelf: "center",
  },
  inputStyle: {
    flexDirection: "row",
  },
  input1: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 18,
  },
  icon: {
    position: "absolute",
    left: 320,
    top: 15,
  },
  text: {
    marginTop: 15,
    color: "#fff",
    textAlign: "center",
  },
  textColor: {
    color: "yellow",
  },
});
