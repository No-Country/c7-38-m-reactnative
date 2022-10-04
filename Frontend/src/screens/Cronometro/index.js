import React , {useState}from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import cronometroStyles from './style';

const Cronometro = () => {

  const styles = cronometroStyles;

  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [intervalo, setIntervalo] = useState(null);
  const [pausado, setPausado] = useState(true);
  const [empezado, setEmpezado] = useState(false);

  const empezarCronometro =  () => {
    setEmpezado(true);
    if(intervalo != null && !pausado) {
      return
    };

    setIntervalo(
      setInterval(() => {
        cambiarTiempo();
      }, 1000)
    );

    setPausado(false);
  }

  const pararCronometro =  () => {
    if(intervalo) {
      setEmpezado(false)
      setPausado(true);
      clearInterval(intervalo)
    }
  }

  const resetearCronometro =  () => {
    pararCronometro();
    setSegundos(0);
    setMinutos(0);
    setIntervalo(null);
    setPausado(true);
    setEmpezado(false)
  }

  const cambiarTiempo =  () => {
    setSegundos((prevState) => {
      if(prevState + 1 == 60) {
        setMinutos(minutos + 1);
        return 0;
      }
      return prevState + 1;
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cronómetro</Text>
      <Text style={styles.minutos}º>
        {minutos < 10 ? '0' + minutos : minutos}
      </Text>
      <Text style={styles.segundos}>
        {segundos < 10 ? '0' + segundos : segundos}
      </Text>
      <View style={styles.containerBotones}>

          {
            empezado == false ?        
              <TouchableOpacity style={styles.botones}  onPress={empezarCronometro}>
                <Ionicons name="caret-forward" size={26} color="#111"/>
              </TouchableOpacity>
                : 
              <TouchableOpacity style={styles.botones}  onPress={pararCronometro}>
                <AntDesign name="pause" size={26} color="#111" />
              </TouchableOpacity>
          }

        <TouchableOpacity  style={styles.botones}  onPress={resetearCronometro}>
          <Ionicons name="close" size={26} color="#111" />
        </TouchableOpacity>


      </View>
    </View>
  );

};


export default Cronometro;