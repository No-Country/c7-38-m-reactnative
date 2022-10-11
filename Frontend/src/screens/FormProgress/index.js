import { View, Modal, TextInput, Text, Pressable } from "react-native";
import StyleFormProgress from "./style";
import { useState } from "react";



const FormProgress = ({visible, onAction}) => {

    const style = StyleFormProgress;
    const [mostar, setMostrar] = useState(visible.visible)
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
                        <Text style={style.title}>Cargar progreso</Text>
                        <TextInput
                        style={style.containerText}
                        placeholder="Fecha"
                       /*  onChangeText={newText => setText(newText)} */
                        />
                        <TextInput
                            style={style.containerText}
                            placeholder="Peso"
                        /*     onChangeText={newText => setText(newText)} */
                        />
                        <TextInput
                            style={style.containerText}
                            placeholder="Descripcion"
                        /*     onChangeText={newText => setText(newText)} */
                        />
                        <TextInput
                            style={style.containerText}
                            placeholder="Cargar foto"
                       /*      onChangeText={newText => setText(newText)} */

                        />
                        <Pressable
                            style={[style.button]}
                            onPress={() => {onAction()
                            setMostrar(!mostar)}}
                        >
                            <Text style={style.buttonText}>Guardar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default FormProgress