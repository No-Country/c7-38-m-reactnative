import { Text, View } from "react-native";
import TrainingStyles from "./style";

const Training = (props) => {
  const style = TrainingStyles;
  return (
    <>
      <View style={style.container}>
        <Text style={style.text}>Pagina de Entrenamiento</Text>
      </View>
    </>
  );
};

export default Training;
