import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FormTrainingStyles from "./style";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import color from "../../../../utils/colors";
import { Ionicons } from "@expo/vector-icons";

const Checks = (props) => {
  const { Form, setForm } = props;
  const style = FormTrainingStyles;
  const [days, setDays] = useState([]);
  const [collapse, setCollapse] = useState(false);
  const [complete, setcomplete] = useState(false);
  const deleteDay = (day) => {
    const index = days.map((e) => e.day).indexOf(day);
    days.splice(index, 1);
  };
  useEffect(() => {
    if (Form.days.length > 1) {
      setcomplete(true);
    } else {
      setcomplete(false);
    }
    setForm({ ...Form, days: days });
  }, [days]);

  return (
    <View
      style={{
        backgroundColor: color.secondary,
        borderRadius: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setCollapse(!collapse);
        }}
      >
        <View
          style={
            collapse ? style.containerTextCheck : style.containerTextCheckClose
          }
        >
          <View
            style={
              complete
                ? {
                    backgroundColor: color.primary,
                    borderRadius: 100,
                    borderColor: color.greenType2,
                    borderWidth: 1,
                    elevation: 5,
                  }
                : {
                    backgroundColor: color.primary,
                    borderRadius: 100,
                    borderColor: color.redType,
                    borderWidth: 1,
                    elevation: 5,
                  }
            }
          >
            <Ionicons
              name={complete ? "checkmark" : "alert"}
              size={15}
              color={complete ? color.greenType2 : color.redType}
            />
          </View>
          <Text style={style.textCheck}>Days</Text>
          <Ionicons
            name={collapse ? "chevron-up-outline" : "chevron-down-outline"}
            size={15}
            color={color.secondary}
          />
        </View>
      </TouchableOpacity>
      <View style={collapse ? style.containerChecks : { display: "none" }}>
        <View style={style.labelCheck}>
          <BouncyCheckbox
            style={style.checkbox}
            size={15}
            fillColor={color.primary}
            unfillColor={color.primary}
            text="Monday"
            iconStyle={{
              backgroundColor: color.secondary,
            }}
            innerIconStyle={{
              borderWidth: 0.5,
              backgroundColor: color.secondary,
              elevation: 5,
              borderWidth: 0.5,
              backgroundColor: color.secondary,
              elevation: 5,
            }}
            onPress={(isChecked) => {
              const data = { day: "monday", exercises: [] };
              isChecked ? setDays([...days, { ...data }]) : deleteDay(data.day);
            }}
          />
          <BouncyCheckbox
            style={style.checkbox}
            size={15}
            fillColor={color.primary}
            unfillColor={color.primary}
            text="Tuesday"
            iconStyle={{
              backgroundColor: color.secondary,
            }}
            innerIconStyle={{
              borderWidth: 0.5,
              backgroundColor: color.secondary,
              elevation: 5,
              borderWidth: 0.5,
              backgroundColor: color.secondary,
              elevation: 5,
            }}
            onPress={(isChecked) => {
              const data = { day: "tuesday", exercises: [] };
              isChecked ? setDays([...days, { ...data }]) : deleteDay(data.day);
            }}
          />
        </View>
        <View style={style.labelCheck}>
          <BouncyCheckbox
            style={style.checkbox}
            size={15}
            fillColor={color.primary}
            unfillColor={color.primary}
            text="Wednesday"
            iconStyle={{
              backgroundColor: color.secondary,
            }}
            innerIconStyle={{
              borderWidth: 0.5,
              backgroundColor: color.secondary,
              elevation: 5,
            }}
            onPress={(isChecked) => {
              const data = { day: "wednesday", exercises: [] };
              isChecked ? setDays([...days, { ...data }]) : deleteDay(data.day);
            }}
          />
          <BouncyCheckbox
            style={style.checkbox}
            size={15}
            fillColor={color.primary}
            unfillColor={color.primary}
            text="Thursday"
            iconStyle={{
              backgroundColor: color.secondary,
            }}
            innerIconStyle={{
              borderWidth: 0.5,
              backgroundColor: color.secondary,
              elevation: 5,
            }}
            onPress={(isChecked) => {
              const data = { day: "thursday", exercises: [] };
              isChecked ? setDays([...days, { ...data }]) : deleteDay(data.day);
            }}
          />
        </View>
        <View style={style.labelCheck}>
          <BouncyCheckbox
            style={style.checkbox}
            size={15}
            fillColor={color.primary}
            unfillColor={color.secondary}
            text="Friday "
            iconStyle={{
              backgroundColor: color.secondary,
            }}
            innerIconStyle={{
              borderWidth: 0.5,
              backgroundColor: color.secondary,
              elevation: 5,
            }}
            onPress={(isChecked) => {
              const data = { day: "friday", exercises: [] };
              isChecked ? setDays([...days, { ...data }]) : deleteDay(data.day);
            }}
          />
          <BouncyCheckbox
            style={style.checkbox}
            size={15}
            fillColor={color.primary}
            unfillColor={color.primary}
            text="Saturday"
            iconStyle={{
              backgroundColor: color.secondary,
            }}
            innerIconStyle={{
              borderWidth: 0.5,
              backgroundColor: color.secondary,
              elevation: 5,
            }}
            onPress={(isChecked) => {
              const data = { day: "saturday", exercises: [] };
              isChecked ? setDays([...days, { ...data }]) : deleteDay(data.day);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Checks;
