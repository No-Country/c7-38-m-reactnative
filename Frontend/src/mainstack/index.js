import { Dimensions, Text, useWindowDimensions, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import color from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";
import Training from "../screens/Training";
import Example from "../screens/Example";
const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
//Instanciamos el stack
//cambios
const stack = createBottomTabNavigator();

//Creamos el componente mainstack
const MainStack = (props) => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Training">
        {/* Cada una de las screen reprensenta cada vistra que vayamos a asignar */}
        <stack.Screen
          name="Training"
          component={Training}
          options={{
            headerShown: false,
            tabBarLabel: "Training",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="barbell"
                color={focused ? color.primary : color.whiteType}
                size={heightScreen * 0.04}
                style={{ marginTop: widthScreen * 0.01 }}
              />
            ),
            tabBarLabelStyle: {
              fontSize: heightScreen * 0.02,
            },
            tabBarLabelPosition: "below-icon",
            tabBarStyle: {
              borderTopWidth: 1,
              borderTopColor: color.secondary,
              elevation:5,
              height: heightScreen * 0.12,
              paddingBottom: heightScreen * 0.019,
              backgroundColor:color.secondary
            },
            tabBarActiveTintColor: color.primary,
            tabBarInactiveTintColor: color.whiteType,
          }}
        />
            <stack.Screen
          name="Example"
          component={Example}
          options={{
            headerShown: false,
            tabBarLabel: "Example",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-home"
                color={focused ? color.primary : color.whiteType}
                size={heightScreen * 0.04}
                style={{ marginTop: widthScreen * 0.01 }}
              />
            ),
            tabBarLabelStyle: {
              fontSize: heightScreen * 0.02,
            },
            tabBarLabelPosition: "below-icon",
            tabBarStyle: {
              borderTopWidth: 1,
              borderTopColor: color.secondary,
              elevation:5,
              height: heightScreen * 0.12,
              paddingBottom: heightScreen * 0.019,
              backgroundColor:color.secondary
            },
            tabBarActiveTintColor: color.primary,
            tabBarInactiveTintColor: color.whiteType,
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
