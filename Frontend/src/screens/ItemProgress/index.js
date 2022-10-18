import { View, Text, Image, TouchableOpacity } from "react-native";
import StylesItemProgress from "./style";
import Ionicons from '@expo/vector-icons/Ionicons';
import { setDeleteProgress } from "../../redux/slices/Progress";

const ItemProgress = ({ item,index }) => {
  const style = StylesItemProgress;

  return (
    <View style={style.container}>
      <Image source={{ uri: item.image }} style={style.img} />
      <View style={style.textContainer}>
        <Text style={style.text}>{item.date}</Text>
        <Text style={style.text}>{item.description}</Text>
      </View>
      <TouchableOpacity key={index + 1}>
        <Ionicons name="trash" size={30} color="#fff300" />
      </TouchableOpacity>
    </View>
  );
};

export default ItemProgress;
