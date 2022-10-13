import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";

export const cameraPick = async (image, setImage) => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== "granted") {
    console.log("no hay permisos");
  } else {
    const result = await ImagePicker.launchCameraAsync();
    if (Platform.OS == "web") {
      console.log("cancelado, solo disponible en movil");
    }
    if (result.cancelled) {
      console.log("cancelado");
    }
    if (!result.cancelled && result.uri) {
      setImage(result.uri);
    }
  }
};

export const libraryPick = async (image, setImage) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (result.cancelled) {
    console.log("cancelado");
  }
  if (!result.cancelled && result.uri) {
    setImage(result.uri);
  }
};

export const saveImage = (setuserInfo, userInfo, image) => {
  setuserInfo({ ...userInfo, image: image });
};
