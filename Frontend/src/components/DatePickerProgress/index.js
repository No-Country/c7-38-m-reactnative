import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { default as Calendar } from "react-native-modern-datepicker";
import color from "../../utils/colors";
import FormTrainingStyles from "../TrainingComponents/Forms/FormTraining/style";
import { Ionicons } from "@expo/vector-icons";
const DatePickerProgress = (props) => {
  const { fecha, setFecha } = props;
  const style = FormTrainingStyles;
  const [dateStart, setDateStart] = useState("00/00/00");
 /*  const [dateEnd, setDateEnd] = useState("00/00/00"); */
  const [collapse, setCollapse] = useState(false);
  const [complete, setcomplete] = useState(false);
  useEffect(() => {
    if (dateStart.length > 8) {
      setcomplete(true);
    } else {
      setcomplete(false);
    }
  }, [fecha]);

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
          <Text style={style.textCheck}>Date</Text>
          <Ionicons
            name={collapse ? "chevron-up-outline" : "chevron-down-outline"}
            size={15}
            color={color.secondary}
          />
        </View>
      </TouchableOpacity>
      <View style={collapse ? style.containerData : { display: "none" }}>
        <View style={style.hour}>
          <Text style={style.textHour}>
            <Ionicons
              name="ios-calendar-outline"
              size={15}
              color={color.greenType2}
            />
            {"   "}
            Date start
          </Text>
          <Text style={style.dataText}>{dateStart}</Text>
          <Ionicons
            name="create-outline"
            size={15}
            color={color.greyType}
            onPress={() => {
              setDateStart("");
            }}
          />
        </View>
         {dateStart ? (
          <></>
        ) : (
          <>
            <Calendar
              options={{
                backgroundColor: color.secondary,
                textHeaderColor: color.whiteType,
                textDefaultColor: color.whiteType,
                selectedTextColor: color.secondary,
                mainColor: color.primary,
                textSecondaryColor: color.primary,
                borderColor: "#242424",
              }}
              onSelectedChange={(date) => {
                setDateStart(date);
                setFecha(date);
              }}
              mode="calendar"
              minuteInterval={30}
              style={style.calendar}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default DatePickerProgress;
