import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import homeStyles from "./style";

const Home = () => {
  const { userName } = useSelector((state) => state.Training);
  const { weight } = useSelector((state) => state.Account);
  const { idealWeight } = useSelector((state) => state.Account);
  const { days } = useSelector((state) => state.Training);
  const weightDif = weight - idealWeight;
  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.title}>
        Hello <Text style={homeStyles.name}>{userName}</Text>
      </Text>

      <Text style={homeStyles.text}>You completed</Text>

      <CircularProgress
        radius={120}
        valueSuffix={"%"}
        value={days.length}
        textColor="#222"
        fontSize={20}
        activeStrokeColor={"#ffe300"}
        inActiveStrokeColor={"#ffe300"}
        inActiveStrokeOpacity={0.2}
        duration={1500}
      />
      <Text style={homeStyles.text}>of your training</Text>

      <View style={homeStyles.containerWeight}>
        <Text style={homeStyles.weight}>{weight} kg</Text>
        <Text style={homeStyles.weightText}>Actual weight</Text>
      </View>

      <View style={homeStyles.containerIdealWeight}>
        <View style={homeStyles.weightDifference1}>
          <Text style={homeStyles.weight}>{idealWeight} kg</Text>
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
