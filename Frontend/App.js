import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainStack from "./src/mainstack";
import store from "./src/redux/store";
import { Provider } from "react-redux";

export default function App() {
  return <Provider store={store}>
          <MainStack />
        </Provider>
;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
