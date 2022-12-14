import { Text, View } from "react-native";
import ContainerList from "../../components/TrainingComponents/ContainerList";
import TrainingStyles from "./style";
import { Ionicons } from "@expo/vector-icons";
import color from "../../utils/colors";
import ManageButton from "../../components/TrainingComponents/ManageButton";
import useDimensions from "../../hooks/useDimensions";
import HeaderTraining from "../../components/TrainingComponents/HeaderTraining";
import FormExercise from "../../components/TrainingComponents/Forms/FormExercise";
import FormTraining from "../../components/TrainingComponents/Forms/FormTraining";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { trainingUpdate } from "../../redux/slices/Training/trainingAPI";

const Training = () => {
  const style = TrainingStyles;
  const { heightScreen } = useDimensions();
  const { Training } = useSelector((state) => state);
  const { date, nameTraining, category, idUser } = useSelector(
    (state) => state.Training
  );

  useEffect(() => {
    trainingUpdate(Training, idUser);
  }, [Training]);

  return (
    <View style={style.container}>
      <View style={style.textContainer}>
        <FormExercise />
        <FormTraining />
        <Text style={style.title}>Training</Text>
        {nameTraining && category && date ? (
          <>
            <HeaderTraining />
          </>
        ) : (
          <></>
        )}
      </View>
      {nameTraining && category && date ? (
        <>
          <ContainerList />
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
