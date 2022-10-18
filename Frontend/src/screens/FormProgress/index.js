import {
  View,
  Modal,
  TextInput,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
  TouchableOpacityComponent,
  Image,
} from "react-native";
import StyleFormProgress from "./style";
import FormTrainingStyles from "../../components/TrainingComponents/Forms/FormTraining/style";
import { useState } from "react";
import DatePickerProgress from "../../components/DatePickerProgress";
import { Ionicons } from "@expo/vector-icons";
import color from "../../utils/colors";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import ImagePicker from "../../components/AccountComponents/ImagePicker";
import { useDispatch, useSelector } from "react-redux";
import {
  cameraPick,
  libraryPick,
} from "../../components/AccountComponents/ModalInput/functionsCamera";
import { setProgress } from "../../redux/slices/Progress";
const FormProgress = ({ visible, onAction }) => {
  const style = StyleFormProgress;
  const styleDate = FormTrainingStyles;
  const dispatch = useDispatch();
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [peso, setPeso] = useState("");
  const [imagen, setImagen] = useState("");
  const [userInfo, setuserInfo] = useState({});
  const { Account } = useSelector((state) => state);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
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
                  onAction(false);
                }}
              >
                <Ionicons name="close-circle-outline" size={18} color="black" />
              </TouchableOpacity>
            </View>
            <DatePickerProgress fecha={fecha} setFecha={setFecha} />
            <TextInput
              style={styleDate.textInput}
              placeholder="Peso"
              cursorColor={color.primary}
              placeholderTextColor={color.greyType}
              onChangeText={(newText) => setPeso(newText)}
            />
            <TextInput
              style={styleDate.textInput}
              placeholder="Descripcion"
              cursorColor={color.primary}
              placeholderTextColor={color.greyType}
              onChangeText={(newText) => setDescripcion(newText)}
            />
            <Text style={style.labelImage}>Add your progress image</Text>
            <View style={style.containerImage}>
              <Image
                source={{
                  uri: imagen
                    ? imagen
                    : "https://cdn-icons-png.flaticon.com/512/5038/5038308.png",
                }}
                style={style.image}
              />
            </View>
            <View style={style.containerTouchsImage}>
              <TouchableOpacity
                style={style.touchableImage}
                onPress={() => {
                  cameraPick(imagen, setImagen);
                }}
              >
                <View style={style.containTouch}>
                  <Icon
                    name={"camera-image"}
                    size={15}
                    color={color.primary}
                    style={style.icon}
                  />
                  <Text style={style.touchableText}>Camera</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.touchableImage}
                onPress={() => {
                  libraryPick(imagen, setImagen);
                }}
              >
                <View style={style.containTouch}>
                  <Icon
                    name={"image-search"}
                    size={15}
                    color={color.primary}
                    style={style.icon}
                  />
                  <Text style={style.touchableText}>Library</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Pressable
              style={[styleDate.sendTouchOn, , style.marginButton]}
              onPress={() => {
                onAction(false);
                dispatch(setProgress({ fecha, peso, descripcion, imagen }));
              }}
            >
              <Text style={styleDate.sendTextOn}>Guardar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FormProgress;
