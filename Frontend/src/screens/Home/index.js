import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import homeStyles from "./style";
import { initAccount } from "../../redux/slices/Account/accountAPI";
import { initApp } from "../../redux/slices/initApp";
import { setIdT, setTrainingForm } from "../../redux/slices/Training";
import { setIdP, setAllProgress } from "../../redux/slices/Progress";
import { setAccount, setIdA } from "../../redux/slices/Account";
import { trainingPost } from "../../redux/slices/Training/trainingAPI";
import { progressPost } from "../../redux/slices/Progress/progressAPI";
import { getData } from "../../redux/slices/getData";
import { setSignIn } from "../../redux/slices/Singup";

const Home = () => {
  const { name } = useSelector((state) => state.SingUp);
  const { weight } = useSelector((state) => state.Account);
  const { objetive } = useSelector((state) => state.Account);
  const { days } = useSelector((state) => state.Training);
  const dispatch = useDispatch();
  const trainingDays = days.length;
  const weightDif = weight - objetive;
  const weightDifMore = objetive - weight;
  const { idUser } = useSelector((state) => state.SingUp);
  const { Account, Training, Progress } = useSelector((state) => state);

  const sets = {
    setAccount,
    setTrainingForm,
    setAllProgress,
    setSignIn,
  };
  const states = {
    Account,
    Training,
    Progress,
  };

  useEffect(() => {
    if (
      idUser != "" &&
      Account.idUser == "" &&
      Training.idUser == "" &&
      Progress.idUser == ""
    ) {
      initApp(idUser, dispatch, setIdT, setIdP, setIdA);
      getData(dispatch, idUser, states, sets);
    }
  }, [idUser]);

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.title}>
        Hello <Text style={homeStyles.name}>{name}</Text>
      </Text>

      <Text style={homeStyles.text}>You are training</Text>

      <CircularProgress
        radius={120}
        value={trainingDays}
        title={"Days"}
        titleColor="#fff"
        activeStrokeColor={"#ffe300"}
        inActiveStrokeColor={"#ffe300"}
        inActiveStrokeOpacity={trainingDays != 0 ? 1 : 0.4}
        duration={1}
      />
      <Text style={homeStyles.text}>Per week</Text>

      <View style={homeStyles.containerWeight}>
        <Text style={homeStyles.weight}>{weight} kg</Text>
        <Text style={homeStyles.weightText}>Actual weight</Text>
      </View>

      <View style={homeStyles.containerIdealWeight}>
        <View style={homeStyles.weightDifference1}>
          <Text style={homeStyles.weight}>{objetive} kg</Text>
          <Text style={homeStyles.weightText}>Ideal weight</Text>
        </View>

        <View style={homeStyles.weightDifference2}>
          <Text style={homeStyles.weight}>
            {weight >= objetive ? "-" + weightDif : "+" + weightDifMore} kg
          </Text>
          <Text style={homeStyles.weightText}>Difference</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
