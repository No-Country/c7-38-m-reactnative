import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  CheckBox,
} from "react-native";
import FormTrainingStyles from "./style";
import { validation } from "./validation/labelsValidation";
import Select from "./select";
import Checks from "./checks";
import DatePicker from "./datePicker";
import HourPicker from "./hourPicker";
import { useDispatch } from "react-redux";
import {
  setModalTraining,
  setTrainingForm,
} from "../../../../redux/slices/Training";

const LabelsFormTraining = () => {
  const style = FormTrainingStyles;
  const dispatch = useDispatch();
  const [toSend, setToSend] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [Form, setForm] = useState({
    nameTraining: "",
    category: "",
    days: [],
    date: {
      dateStart: "",
      dateEnd: "",
    },
    hours: {
      hourStart: "",
      hourEnd: "",
    },
  });

  useEffect(() => {
    validation(Form, setToSend, setErrorMsg);
  }, [Form]);

  return (
    <>
      <View style={style.containerLabels}>
        <View style={style.label}>
          <Select Form={Form} setForm={setForm} />
        </View>
        <View style={style.label}>
          <Checks Form={Form} setForm={setForm} />
        </View>
        <View style={style.label}>
          <DatePicker Form={Form} setForm={setForm} />
        </View>
        <View style={style.label}>
          <HourPicker Form={Form} setForm={setForm} />
        </View>
      </View>
      <View style={style.label}>
        <TouchableOpacity
          style={toSend ? style.sendTouchOn : style.sendTouchOff}
          disabled={!toSend}
          onPress={() => {
            dispatch(setTrainingForm(Form));
            dispatch(setModalTraining(false));
          }}
        >
          <Text style={toSend ? style.sendTextOn : style.sendTextOff}>
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={toSend ? "" : style.viewError}>
        <Text style={style.textError}>{errorMsg}</Text>
      </View>
    </>
  );
};

export default LabelsFormTraining;
