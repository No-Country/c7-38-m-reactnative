import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setId } from "../../../redux/slices/Singup";
import color from "../../../utils/colors";
import ButtonLogOutStyles from "./style";

const ButtonLogOut = () => {
  const style = ButtonLogOutStyles;
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={style.icon}
      onPress={() => {
        dispatch(setId(""));
      }}
    >
      <MaterialCommunityIcons
        name={"logout"}
        size={20}
        color={color.greyType}
      />
    </TouchableOpacity>
  );
};
export default ButtonLogOut;
