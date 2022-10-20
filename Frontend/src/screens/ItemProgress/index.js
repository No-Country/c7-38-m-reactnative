import { View, Text, Image, TouchableOpacity } from "react-native";
import StylesItemProgress from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { setDeleteProgress } from "../../redux/slices/Progress";
import { useDispatch } from "react-redux";

const ItemProgress = ({ item, index }) => {
  const style = StylesItemProgress;
  const dispatch = useDispatch();

  return (
    <View style={style.container}>
      <Image source={{ uri: item.image }} style={style.img} key={index} />
      <View style={style.textContainer}>
        <Text style={style.textDate}>{item.date}</Text>
        <Text style={style.textDescription}>{item.description}</Text>
        <Text style={style.textWeight}>{item.weight} Kg</Text>
      </View>
      <TouchableOpacity onPress={() => dispatch(setDeleteProgress(index))}>
        <Ionicons name="trash" size={20} color="#fff300" />
      </TouchableOpacity>
    </View>
  );
};

export default ItemProgress;
