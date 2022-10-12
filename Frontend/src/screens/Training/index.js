import { Text, View } from "react-native";
import ContainerList from "../../components/TrainingComponents/ContainerList";
import mockUpTraining from "../../components/TrainingComponents/ListDays/mockup";
import TrainingStyles from "./style";
import { Ionicons } from "@expo/vector-icons";
import color from "../../utils/colors";
import ManageButton from "../../components/TrainingComponents/ManageButton";
import useDimensions from "../../hooks/useDimensions";
import HeaderTraining from "../../components/TrainingComponents/HeaderTraining";
import FormExercise from "../../components/TrainingComponents/Forms/FormExercise";
import FormTraining from "../../components/TrainingComponents/Forms/FormTraining";
import { useState } from "react";

const Training = (props) => {
  const style = TrainingStyles;
  const { heightScreen } = useDimensions();
  const [trainingForm, setTrainingForm] = useState(false);
  const [exercise, setExercise] = useState(false);
  const { date, nameTraining, category } = mockUpTraining;
  return (
    <View style={style.container}>
      <View style={style.textContainer}>
        <FormExercise state={exercise} setState={setExercise}/>
        <FormTraining state={trainingForm} setState={setTrainingForm} />
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
          <ContainerList mockUp={mockUpTraining} exercise={exercise} setExercise={setExercise} />
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
      <ManageButton
        trainingForm={trainingForm}
        setTrainingForm={setTrainingForm}
      />
    </View>
  );
};

export default Training;
