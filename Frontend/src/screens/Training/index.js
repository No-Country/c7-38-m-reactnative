import { Text, View } from "react-native";
import ContainerList from "../../components/TrainingComponents/ContainerList";
import mockUpTraining from "../../components/TrainingComponents/ListDays/mockup";
import TrainingStyles from "./style";
import { Ionicons } from "@expo/vector-icons";
import color from "../../utils/colors";
import ManageButton from "../../components/TrainingComponents/ManageButton";
import useDimensions from "../../hooks/useDimensions";
import HeaderTraining from "../../components/TrainingComponents/HeaderTraining";

const Training = (props) => {
  const style = TrainingStyles;
  const { heightScreen } = useDimensions();
  const { date, nameTraining, category } = mockUpTraining;
  return (
    <View style={style.container}>
      <View style={style.textContainer}>
        <Text style={style.title}>Training</Text>
        {mockUpTraining ? (
          <>
            <HeaderTraining
              category={category}
              nameTraining={nameTraining}
              date={date}
            />
          </>
        ) : (
          <></>
        )}
      </View>
      {mockUpTraining ? (
        <>
          <ContainerList mockUp={mockUpTraining} />
        </>
      ) : (
        <View style={style.emptyContainer}>
          <Ionicons
            name="md-barbell"
            size={heightScreen * 0.07}
            color={color.primary}
          />
          <Text style={style.emptyMessage}>Training is empty</Text>
        </View>
      )}
      <ManageButton />
    </View>
  );
};

export default Training;
