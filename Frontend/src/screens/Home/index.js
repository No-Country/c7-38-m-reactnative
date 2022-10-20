import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import homeStyles from "./style";
import { initAccount } from "../../redux/slices/Account/accountAPI";
import { initApp } from "../../redux/slices/initApp";
import { setIdT } from "../../redux/slices/Training";
import { setIdP } from "../../redux/slices/Progress";
import { setIdA } from "../../redux/slices/Account";
import { trainingPost } from "../../redux/slices/Training/trainingAPI";
import { progressPost } from "../../redux/slices/Progress/progressAPI";

const Home = () => {
  const { name } = useSelector((state) => state.SingUp);
  const { weight } = useSelector((state) => state.Account);
  const { objetive } = useSelector((state) => state.Account);
  const { days } = useSelector((state) => state.Training);
  const dispatch = useDispatch();
  const trainingDays = days.length;
  const weightDif = weight - objetive;
  const { idUser } = useSelector((state) => state.SingUp);
  const { Account, Training, Progress } = useSelector((state) => state);

  useEffect(() => {
    if (
      idUser != "" &&
      Account.idUser == "" &&
      Training.idUser == "" &&
      Progress.idUser == ""
    ) {
      initApp(idUser, dispatch, setIdT, setIdP, setIdA);
      setTimeout(() => {
        initAccount(Account, idUser);
        trainingPost(Training, idUser);
        progressPost(Progress, idUser);
      }, 2000);
    }
  }, []);

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
          <Text style={homeStyles.weight}>{weightDif} kg</Text>
          <Text style={homeStyles.weightText}>Difference</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
