import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemProgress from "../ItemProgress";
import StylesProgress from "./style";
import FormProgress from "../FormProgress";
import { useSelector } from "react-redux";
import color from "../../utils/colors";

const Progress = () => {
  const style = StylesProgress;
  const { progress } = useSelector((state) => state.Progress);
  const [modalVisible, setModalVisible] = useState(false);
  const [progressForm, setProgressForm] = useState(false);

  return (
    <SafeAreaView style={style.container}>
      {progress.length > 0 ? (
        <>
          <FlatList
            data={progress}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <ItemProgress item={item} index={index} />
            )}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
            ListHeaderComponent={() => (
              <Text style={style.title}>My Progress</Text>
            )}
          />

          <TouchableOpacity
            style={style.buttonPosition}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <View style={style.button}>
              <Text style={style.buttonText}>+</Text>
            </View>
          </TouchableOpacity>
        </>
      ) : (
        <View>
          <Text style={{ color: color.primary }}>Progress is empty</Text>
          <TouchableOpacity
            style={style.buttonPosition}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <View style={style.button}>
              <Text style={style.buttonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      <FormProgress
        visible={modalVisible}
        onAction={setModalVisible}
        state={progressForm}
        setState={setProgressForm}
      />
    </SafeAreaView>
  );
};

export default Progress;
