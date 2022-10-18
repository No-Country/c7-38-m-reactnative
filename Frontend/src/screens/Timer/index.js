import React , {useState}from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import timerStyles from './style';

const Timer = () => {

  const styles = timerStyles;

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [intervals, setIntervals] = useState(null);
  const [paused, setPaused] = useState(true);
  const [started, setStarted] = useState(false);

  const empezarCronometro =  () => {
    setStarted(true);
    if(intervals != null && !paused) {
      return
    };

    setIntervals(
      setInterval(() => {
        changeTime();
      }, 1000)
    );

    setPaused(false);
  }

  const stopCronometro =  () => {
    if(intervals) {
      setStarted(false)
      setPaused(true);
      clearInterval(intervals)
    }
  }

  const resetCronometro =  () => {
    stopCronometro();
    setSeconds(0);
    setMinutes(0);
    setIntervals(null);
    setPaused(true);
    setStarted(false)
  }

  const changeTime =  () => {
    setSeconds((prevState) => {
      if(prevState + 1 == 60) {
        setMinutes(minutes + 1);
        return 0;
      }
      return prevState + 1;
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer</Text>
      <Text style={styles.minutes}º>
        {minutes < 10 ? '0' + minutes : minutes}
      </Text>
      <Text style={styles.seconds}>
        {seconds < 10 ? '0' + seconds : seconds}
      </Text>
      <View style={styles.containerButton}>

          {
              started == false ?        
              <TouchableOpacity style={styles.button}  onPress={empezarCronometro}>
                <Ionicons name="caret-forward" size={26} color="#111"/>
              </TouchableOpacity>
                : 
              <TouchableOpacity style={styles.button}  onPress={stopCronometro}>
                <AntDesign name="pause" size={26} color="#111" />
              </TouchableOpacity>
          }

        <TouchableOpacity  style={styles.button}  onPress={resetCronometro}>
          <Ionicons name="close" size={26} color="#111" />
        </TouchableOpacity>

      </View>
    </View>
  );

};


export default Timer;