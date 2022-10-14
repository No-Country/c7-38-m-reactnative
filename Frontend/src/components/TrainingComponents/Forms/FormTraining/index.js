import { useState } from "react";
import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";
import FormTrainingStyles from "./style";
import { Ionicons } from "@expo/vector-icons";
import LabelsFormTraining from "./labels";
import { useDispatch, useSelector } from "react-redux";
import { setModalTraining } from "../../../../redux/slices/Training";
const FormTraining = (props) => {
  const style = FormTrainingStyles;
  const { modalTraining } = useSelector((state) => state.Training);
  const dispatch = useDispatch()
  return (
    <Modal visible={modalTraining} animationType="fade" transparent={true}>
      <View style={style.modal}>
        <View style={style.viewModal}>
          <View style={style.viewModalHeader}>
            <Text style={style.textModalHeader}>Add Training</Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(setModalTraining(false))
              }}
            >
              <Ionicons name="close-circle-outline" size={18} color="black" />
            </TouchableOpacity>
          </View>
          <View style={style.viewModal}>
            <LabelsFormTraining />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default FormTraining;
