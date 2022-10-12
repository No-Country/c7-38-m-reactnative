import { View, Modal, TextInput, Text, Pressable } from "react-native";
import StyleFormProgress from "./style";
import { useState } from "react";



const FormProgress = ({visible, onAction}) => {

    const style = StyleFormProgress;
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
                        <Text style={style.title}>Cargar progreso</Text>
                        <TextInput
                        style={style.containerText}
                        placeholder="Fecha"
                        onChangeText={newText => setFecha(newText)} 
                        />
                        <TextInput
                            style={style.containerText}
                            placeholder="Peso"
                            onChangeText={newText => setPeso(newText)}
                        />
                        <TextInput
                            style={style.containerText}
                            placeholder="Descripcion"
                            onChangeText={newText => setDescripcion(newText)}
                        />
                        <TextInput
                            style={style.containerText}
                            placeholder="Cargar foto"
                            onChangeText={newText => setImagen(newText)}

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