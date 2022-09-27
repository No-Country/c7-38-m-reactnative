import { Text, View } from "react-native";
import ExampleStyles from "./style";

const Example = (props) => {
  const style = ExampleStyles;
  return (
    <>
      <View style={style.container}>
        <Text style={style.text}>Pagina de Ejemplo</Text>
      </View>
    </>
  );
};

export default Example;
