import {
  View,
  Modal,
  TextInput,
  Text,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import StyleFormProgress from "./style";
import FormTrainingStyles from "../../components/TrainingComponents/Forms/FormTraining/style";
import { validation } from "../../components/ProgressComponents/FormProgress/labelsValidation";
import { useState, useEffect } from "react";
import DatePickerProgressComponent from "../../components/DatePickerProgressComponent/index";
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
import {
  progressUpdate,
  progressUptdate,
} from "../../redux/slices/Progress/progressAPI";
const FormProgress = ({ visible, onAction }) => {
  const style = StyleFormProgress;
  const styleDate = FormTrainingStyles;
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const { Progress } = useSelector((state) => state);
  const [toSend, setToSend] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [Form, setForm] = useState({
    date: "",
    weight: "",
    description: "",
  });

  useEffect(() => {
      validation({...Form,image,date}, setToSend, setErrorMsg);
  }, [Form,image,date]);

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
            <View style={style.viewModalHeader}>
              <Text style={style.title}>Add Progress</Text>
              <TouchableOpacity
                onPress={() => {
                  onAction(false);
                }}
              >
                <Ionicons
                  name="close-circle-outline"
                  size={18}
                  color="black"
                  style={style.closeModal}
                />
              </TouchableOpacity>
            </View>
            <Text style={style.textInputImage}>Add your progress image</Text>
            <View style={style.containerImage}>
              <Image
                source={{
                  uri: image
                    ? image
                    : "https://cdn-icons-png.flaticon.com/512/5038/5038308.png",
                }}
                style={style.image}
              />
            </View>
            <View style={style.containerTouchsImage}>
              <TouchableOpacity
                style={style.touchableImage}
                onPress={() => {
                  cameraPick(image, setImage);
                }}
              >
                <View style={style.containTouch}>
                  <Icon
                    name={"camera-image"}
                    size={19}
                    color={color.primary}
                    style={style.icon}
                  />
                  <Text style={style.touchableText}>Camera</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.touchableImage}
                onPress={() => {
                  libraryPick(image, setImage);
                }}
              >
                <View style={style.containTouch}>
                  <Icon
                    name={"image-search"}
                    size={19}
                    color={color.primary}
                    style={style.icon}
                  />
                  <Text style={style.touchableText}>Library</Text>
                </View>
              </TouchableOpacity>
            </View>

            <DatePickerProgressComponent date={date} setFecha={setDate} />
            <TextInput
              style={style.textInput}
              placeholder="Weight"
              cursorColor={color.primary}
              placeholderTextColor={color.greyType}
              onChangeText={(newText) => setForm({ ...Form, weight: newText })}
            />
            <TextInput
              style={style.textInput}
              placeholder="Description"
              cursorColor={color.primary}
              placeholderTextColor={color.greyType}
              onChangeText={(newText) =>
                setForm({ ...Form, description: newText })
              }
            />
            
            <Pressable
              style={toSend ? style.sendTouchOn : style.sendTouchOff}
              disabled={!toSend}
              onPress={() => {
                onAction(false);
                dispatch(
                  setProgress({
                    weight: Form.weight,
                    description: Form.description,
                    date: date,
                    image: image,
                  })
                );

                setForm({
                  date: "",
                  weight: "",
                  description: "",
                });

                setImage("");
              }}
            >
              <Text style={toSend ? style.sendTextOn : style.sendTextOff}>
                Save
              </Text>
            </Pressable>
            <View style={toSend ? "" : style.viewError}>
              <Text style={style.textError}>{errorMsg}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FormProgress;
