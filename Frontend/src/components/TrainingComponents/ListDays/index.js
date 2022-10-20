import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import ListDaysStyles from "./style";
import { Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../../../utils/colors";
import useListClose from "../../../hooks/useListClose";
import useDimensions from "../../../hooks/useDimensions";
import { useDispatch, useSelector } from "react-redux";
import { setDaySelected, setModalExercise } from "../../../redux/slices/Training";

const ListDays = (props) => {
  const { exercises, day } = props.item;
  const { hours } = useSelector((state) => state.Training);
  const style = ListDaysStyles;
  const { heightScreen } = useDimensions();
  const { closeList, setcloseList } = useListClose();
  const dispatch = useDispatch()
  return (
    <View style={style.container}>
      <View style={style.textContainer}>
        {closeList ? (
          <TouchableOpacity
            style={style.addButton}
            onPress={() => {
              dispatch(setDaySelected(day))
              dispatch(setModalExercise(true))

            }}
          >
            <MaterialCommunityIcons
              name="text-box-plus-outline"
              size={heightScreen * 0.022}
              color={color.primary}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
        <Text style={style.exercise}>
          <Ionicons
            name="stopwatch"
            size={heightScreen * 0.022}
            color={color.primary}
          />{" "}
          {hours.hourStart} - {hours.hourEnd}
        </Text>
        {closeList ? (
          <>
            <Text style={style.exercise}>
              <Ionicons
                name="list"
                size={heightScreen * 0.022}
                color={color.primary}
              />{" "}
              {exercises ? exercises.length : 0}
            </Text>
          </>
        ) : (
          <></>
        )}
        <TouchableOpacity
          style={style.arrowList}
          disabled={!exercises.length > 0}
          onPress={() => {
            setcloseList(!closeList);
          }}
        >
          <View>
            <Ionicons
              name={closeList ? "chevron-down-sharp" : "chevron-up"}
              size={heightScreen * 0.025}
              color={exercises.length > 0?color.primary:color.secondary}
              style={style.arrow}
            />
          </View>
        </TouchableOpacity>
      </View>
      {closeList ? (
        <></>
      ) : (
        <FlatList
          data={exercises ? exercises : []}
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
