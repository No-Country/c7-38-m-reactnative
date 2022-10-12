import React from 'react';
import { useSelector } from 'react-redux';
import {Text, View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import homeStyles from './style';



const Home = () => {

  const { nombre } = useSelector((state) => state.nombre);
  const valor = 100;
  const peso = 88.5;
  const pesoIdeal = 82;
  const diferencia = peso - pesoIdeal


  return (
    <View style={homeStyles.container}>
        <Text style={homeStyles.titulo}>
          Hola <Text style={homeStyles.nombre}>{nombre}</Text>
        </Text>

        <Text style={homeStyles.texto}>
          Completaste el
        </Text>

        <CircularProgress
          radius={120}
          valueSuffix={'%'}
          value={valor}
          textColor= '#222'
          fontSize={20}
          activeStrokeColor={'#ffe300'}
          inActiveStrokeColor={'#ffe300'}
          inActiveStrokeOpacity={0.2} 
          duration={1500}
        />
        <Text style={homeStyles.texto}>
          De tu entrenamiento
        </Text>
        
        <View style={homeStyles.containerPeso}>
          <Text style={homeStyles.peso}>
            {peso} kg
          </Text>
          <Text  style={homeStyles.pesoTexto}>
            Peso actual
          </Text>
        </View>

        <View style={homeStyles.containerPesoIdeal}>
          <View  style={homeStyles.pesoDiferencia1}>
            <Text style={homeStyles.peso}>
              {pesoIdeal} kg
            </Text>
            <Text style={homeStyles.pesoTexto}>
              Peso ideal
            </Text>
          </View>

          <View style={homeStyles.pesoDiferencia2}>
            <Text style={homeStyles.peso}>
              {diferencia} kg
            </Text>
            <Text style={homeStyles.pesoTexto}>
              Diferencia
            </Text>
          </View>
        </View>
    </View>
  );

};


export default Home;