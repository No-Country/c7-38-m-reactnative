import { View, Modal, TextInput, Text, Pressable, TouchableOpacity } from "react-native";
import StyleFormProgress from "./style";
import FormTrainingStyles from "../../components/TrainingComponents/Forms/FormTraining/style";
import { useState } from "react";
import DatePickerProgress from "../../components/DatePickerProgress";
import {Ionicons} from "@expo/vector-icons"
import color from "../../utils/colors";


const FormProgress = ({visible, onAction}) => {
    const guardarDatos = () =>{
        console.log(fecha)
        console.log(descripcion)
        console.log(peso)
        console.log(imagen)
    }

    const style = StyleFormProgress;
    const styleDate = FormTrainingStyles;
    const [mostar, setMostrar] = useState(visible.visible)
    const [fecha, setFecha] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [peso, setPeso] = useState("")
    const [imagen, setImagen] = useState("")
    return(
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={mostar}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!mostar);
                }}
            >
                <View style={style.containerModal}>
                    <View style={style.vistaModal}>
                        <View style={styleDate.viewModalHeader}>    
                            <Text style={style.title}>Cargar progreso</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    onAction()
                                    setMostrar(!mostar)}
                                }>
                                <Ionicons name="close-circle-outline" size={18} color="black" />
                            </TouchableOpacity>
                        </View>
                        <DatePickerProgress fecha={fecha} setFecha={setFecha} />
                        <TextInput
                            style={styleDate.textInput}
                            placeholder="Peso"
                            cursorColor={color.primary}
                            placeholderTextColor={color.greyType}
                            onChangeText={newText => setPeso(newText)}
                        />
                        <TextInput
                            style={styleDate.textInput}
                            placeholder="Descripcion"
                            cursorColor={color.primary}
                            placeholderTextColor={color.greyType}
                            onChangeText={newText => setDescripcion(newText)}
                        />
                        <TextInput
                            style={style.containerText}
                            placeholder="Cargar foto"
                            onChangeText={newText => setImagen(newText)}

                        />
                        <Pressable
                            style={[styleDate.sendTouchOn , , style.marginButton]}
                            onPress={() => {
                                onAction()
                                setMostrar(!mostar)
                                guardarDatos()
                            }}
                        >
                            <Text style={styleDate.sendTextOn}>Guardar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
   
}

export default FormProgress