import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import {
  setExercise,
  setModalExercise,
} from "../../../../redux/slices/Training";
import color from "../../../../utils/colors";
import FormExerciseStyles from "./style";
import { validation } from "./validation/labelsValidation";
const LabelsForm = () => {
  const [toSend, setToSend] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const showToastWithGravity = (msg) => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
  };
  const [Form, setForm] = useState({
    nameExercise: "",
    repetitions: "",
    series: "",
    break: "",
  });

  useEffect(() => {
    validation(Form, setToSend, setErrorMsg);
  }, [Form]);

  const style = FormExerciseStyles;
  return (
    <>
      <View style={style.containerLabels}>
        <View style={style.label}>
          <Text style={style.textModal}>Exercise</Text>
          <TextInput
            style={style.textInput}
            onChangeText={(text) => {
              setForm({ ...Form, nameExercise: text });
            }}
            cursorColor={color.primary}
          />
        </View>
        <View style={style.label}>
          <Text style={style.textModal}>Repetitions</Text>
          <TextInput
            keyboardType="numeric"
            cursorColor={color.primary}
            style={style.textInput}
            onChangeText={(text) => {
              setForm({ ...Form, repetitions: text });
            }}
          />
        </View>
        <View style={style.label}>
          <Text style={style.textModal}>Series</Text>
          <TextInput
            keyboardType="numeric"
            cursorColor={color.primary}
            style={style.textInput}
            onChangeText={(text) => {
              setForm({ ...Form, series: text });
            }}
          />
        </View>
        <View style={style.label}>
          <Text style={style.textModal}>Break</Text>
          <TextInput
            keyboardType="numeric"
            cursorColor={color.primary}
            style={style.textInput}
            onChangeText={(text) => {
              setForm({ ...Form, break: text });
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={toSend ? style.sendTouchOn : style.sendTouchOff}
        disabled={!toSend}
        onPress={() => {
          dispatch(setExercise(Form));
          dispatch(setModalExercise(false));
          showToastWithGravity("Exercises update is a success");
        }}
      >
        <Text style={toSend ? style.sendTextOn : style.sendTextOff}>
          Enviar
        </Text>
      </TouchableOpacity>

      <View style={toSend ? "" : style.viewError}>
        <Text style={style.textError}>{errorMsg}</Text>
      </View>
    </>
  );
};

export default LabelsForm;
