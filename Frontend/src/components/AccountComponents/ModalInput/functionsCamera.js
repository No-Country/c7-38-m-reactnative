import * as ImagePicker from "expo-image-picker";
import { Platform, ToastAndroid } from "react-native";

const showToastWithGravity = (msg) => {
  ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
};
export const cameraPick = async (image, setImage) => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== "granted") {
    showToastWithGravity("You don't have permissions");
  } else {
    const result = await ImagePicker.launchCameraAsync();
    if (Platform.OS == "web") {
      showToastWithGravity("Only available on mobile");
    }
    if (result.cancelled) {
      showToastWithGravity("Camera capture cancelled");
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
    showToastWithGravity("Library capture cancelled");
  }
  if (!result.cancelled && result.uri) {
    setImage(result.uri);
  }
};
