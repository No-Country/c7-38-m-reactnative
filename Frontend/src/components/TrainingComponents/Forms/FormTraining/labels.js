import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  CheckBox,
  Image,
} from "react-native";
import color from "../../../../utils/colors";
import FormTrainingStyles from "./style";
import { validation } from "./validation/labelsValidation";
import useDimensions from "../../../../hooks/useDimensions";
import Select from "./select";
import Checks from "./checks";
import DatePicker from "./datePicker";
import HourPicker from "./hourPicker";
const { heightScreen, widthScreen } = useDimensions();
const LabelsFormTraining = () => {
  const style = FormTrainingStyles;
  const [toSend, setToSend] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [Form, setForm] = useState({
    training: "",
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
            console.log(Form);
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
