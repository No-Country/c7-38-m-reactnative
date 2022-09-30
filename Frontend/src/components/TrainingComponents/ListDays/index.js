import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import ListDaysStyles from "./style";
import { Ionicons } from "@expo/vector-icons";
import color from "../../../utils/colors";
import useListClose from "../../../hooks/useListClose";
import useDimensions from "../../../hooks/useDimensions";

const ListDays = (props) => {
  const { exercises, hours } = props.item;
  const style = ListDaysStyles;
  const { heightScreen } = useDimensions();
  const { closeList, setcloseList } = useListClose();
  return (
    <View style={style.container}>
      <View style={style.textContainer}>
        <Text style={style.exercise}>
          <Ionicons
            name="stopwatch"
            size={heightScreen * 0.02}
            color={color.primary}
          />{" "}
          {hours.startHour} - {hours.endHour}
        </Text>
        {closeList ? (
          <>
            <Text style={style.exercise}>
              <Ionicons
                name="list"
                size={heightScreen * 0.02}
                color={color.primary}
              />{" "}
              {exercises.length}
            </Text>
          </>
        ) : (
          <></>
        )}
        <TouchableOpacity
          style={style.arrowList}
          onPress={() => {
            setcloseList(!closeList);
          }}
        >
          <View>
            <Ionicons
              name={closeList ? "chevron-down-sharp" : "chevron-up"}
              size={heightScreen * 0.025}
              color={color.primary}
              style={style.arrow}
            />
          </View>
        </TouchableOpacity>
      </View>
      {closeList ? (
        <></>
      ) : (
        <FlatList
          data={exercises}
          renderItem={({ item }) => {
            return (
              <View style={style.list}>
                <Text style={style.exercise}>
                  {" "}
                  <Ionicons
                    name="md-radio-button-on"
                    size={heightScreen * 0.013}
                    color={color.primary}
                  />
                  {"   "}
                  {item.nameExercise}
                </Text>

                <View>
                  <Text style={style.exercise}>
                    {"   "}
                    {item.repetitions}
                    {"   "}
                    <Ionicons
                      name="close-outline"
                      size={heightScreen * 0.023}
                      color={color.primary}
                    />
                    {"   "}
                    {item.series} {"   "}
                    <Ionicons
                      name="battery-charging"
                      size={heightScreen * 0.023}
                      color={color.greenType}
                    />
                    {"   "}
                    {item.break} min
                  </Text>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default ListDays;
