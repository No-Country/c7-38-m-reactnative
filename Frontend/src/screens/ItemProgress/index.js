import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../../utils/colors";
import StylesItemProgress from "./style";

const ItemProgress = ( {item, index} ) => {
    console.log(index)
    const style = StylesItemProgress; 
    
    return (
        
        <View style={style.container}>
            <Image
                source={{uri:item.img}}
                style={style.img}
            />
            <View style={style.textContainer}>
                <Text style={style.text}>{item.fecha}</Text>
                <Text style={style.text}>{item.descripcion}</Text>
            </View>
            <Text style={style.text}>{index + 1}</Text>
        </View>
        
    )
}

export default ItemProgress