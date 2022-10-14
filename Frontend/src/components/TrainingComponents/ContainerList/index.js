import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import ListDays from "../ListDays";
import ContainerListStyles from "./style";
import { Ionicons } from "@expo/vector-icons";
import useDimensions from "../../../hooks/useDimensions";
import { useSelector } from "react-redux";

const ContainerList = (props) => {
  const { heightScreen } = useDimensions();
  const { exercise, setExercise } = props;
  const { days } = useSelector((state) => state.Training);
  const style = ContainerListStyles;
  return (
    <View style={style.container}>
      <FlatList
        data={days}
        renderItem={({ item }) => {
          return (
            <View style={style.list}>
              <View style={style.containerText}>
                <TouchableOpacity
                  style={style.addButton}
                  onPress={() => {
                    setExercise(!exercise);
                  }}
                >
                  <Ionicons
                    name="add-circle-outline"
                    size={heightScreen * 0.02}
                    color="black"
                  />
                </TouchableOpacity>
                <Text style={style.text}>{item.day}</Text>
              </View>
              <ListDays item={item} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default ContainerList;
