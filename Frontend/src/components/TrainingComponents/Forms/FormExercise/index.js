import { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import LabelsForm from "./labels";
import FormExerciseStyles from "./style";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setModalExercise } from "../../../../redux/slices/Training";

const FormExercise = (props) => {
  const style = FormExerciseStyles;
  const { modalExercise } = useSelector((state)=>state.Training)
  const dispatch = useDispatch()
  return (
    <Modal visible={modalExercise} animationType="fade" transparent={true}>
      <View style={style.modal}>
        <View style={style.viewModalHeader}>
          <Text style={style.textModalHeader}>Add Exercise</Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(setModalExercise(false))
            }}
          >
            <Ionicons name="close-circle-outline" size={18} color="black" />
          </TouchableOpacity>
        </View>
        <View style={style.viewModal}>
          <LabelsForm />
        </View>
      </View>
    </Modal>
  );
};
export default FormExercise;
