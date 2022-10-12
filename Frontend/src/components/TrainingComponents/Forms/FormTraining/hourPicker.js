import React, { useEffect, useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { default as Time } from "react-native-modern-datepicker";
import color from "../../../../utils/colors";
import FormTrainingStyles from "./style";
import { Ionicons } from "@expo/vector-icons";

const HourPicker = (props) => {
  const { Form, setForm } = props;
  const style = FormTrainingStyles;
  const [complete, setcomplete] = useState(false);
  const [hourStart, setHourStart] = useState("-:-");
  const [hourEnd, setHourEnd] = useState("-:-");
  const [collapse, setCollapse] = useState(false);
  useEffect(() => {
    if (hourEnd.length > 4 && hourStart.length > 4) {
      setcomplete(true);
      console.log("complete");
    } else {
      console.log("incomplete");
      setcomplete(false);
    }
  }, [Form]);
  return (
    <View>
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
          <Text style={style.textCheck}>Hours</Text>
          <Ionicons
            name={collapse ? "chevron-up-outline" : "chevron-down-outline"}
            size={15}
            color={color.secondary}
          />
        </View>
      </TouchableOpacity>
      <View style={collapse ? style.containerData : { display: "none" }}>
        {hourEnd ? (
          <View style={style.hour}>
            <Text style={style.textHour}>
              <Ionicons
                name="md-alarm-outline"
                size={15}
                color={color.greenType2}
              />
              {"  "}Hour start
            </Text>
            <Text style={style.dataText}>{hourStart}</Text>
            <Ionicons
              name="create-outline"
              size={15}
              color={color.greyType}
              onPress={() => {
                setHourStart("");
              }}
            />
          </View>
        ) : (
          <></>
        )}
        {hourStart ? (
          <></>
        ) : (
          <>
            <Time
              mode="time"
              options={{
                backgroundColor: color.secondary,
                textHeaderColor: color.whiteType,
                textDefaultColor: color.whiteType,
                selectedTextColor: color.secondary,
                mainColor: color.primary,
                textSecondaryColor: color.primary,
                borderColor: "#242424",
              }}
              style={style.timePicker}
              minuteInterval={5}
              onTimeChange={(time) => {
                setHourStart(time);
                setForm({
                  ...Form,
                  hours: { hourStart: time, hourEnd: hourEnd },
                });
              }}
            />
          </>
        )}
        <View style={style.hour}>
          <Text style={style.textHour}>
            <Ionicons name="md-alarm-outline" size={15} color={color.redType} />
            {"  "}Hour end
          </Text>
          <Text style={style.dataText}>{hourEnd}</Text>
          <Ionicons
            name="create-outline"
            size={15}
            color={color.greyType}
            onPress={() => {
              setHourEnd("");
            }}
          />
        </View>
        {hourEnd ? (
          <></>
        ) : (
          <>
            <Time
              mode="time"
              options={{
                backgroundColor: color.secondary,
                textHeaderColor: color.whiteType,
                textDefaultColor: color.whiteType,
                selectedTextColor: color.secondary,
                mainColor: color.primary,
                textSecondaryColor: color.primary,
                borderColor: "#242424",
              }}
              style={style.timePicker}
              minuteInterval={5}
              onTimeChange={(time) => {
                setHourEnd(time);
                setForm({
                  ...Form,
                  hours: { hourStart: hourStart, hourEnd: time },
                });
              }}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default HourPicker;
