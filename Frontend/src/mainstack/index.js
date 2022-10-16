import { Dimensions, Text, useWindowDimensions, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import color from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Training from "../screens/Training";
import Example from "../screens/Example";
import Progress from "../screens/Progress"
import Timer from "../screens/Timer/index";
import Account from "../screens/Account";
import InitialStack from "./initialStack";

const heightScreen = Dimensions.get("window").height;
const widthScreen = Dimensions.get("window").width;
//Instanciamos el stack
//cambios
const stack = createBottomTabNavigator();
const userId = "sdf53425342";
//Creamos el componente mainstack
const MainStack = (props) => {
  return (
    <NavigationContainer>
      {/* Cada una de las screen reprensenta cada vistra que vayamos a asignar */}
      {userId ? (
        <stack.Navigator initialRouteName={"Home"}>
          <stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarLabel: "Home",
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
                elevation: 5,
                height: heightScreen * 0.12,
                paddingBottom: heightScreen * 0.019,
                backgroundColor: color.secondary,
              },
              tabBarActiveTintColor: color.primary,
              tabBarInactiveTintColor: color.whiteType,
            }}
          />
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
                elevation: 5,
                height: heightScreen * 0.12,
                paddingBottom: heightScreen * 0.019,
                backgroundColor: color.secondary,
              },
              tabBarActiveTintColor: color.primary,
              tabBarInactiveTintColor: color.whiteType,
            }}
          />
          <stack.Screen
            name="Timer"
            component={Timer}
            options={{
              headerShown: false,
              tabBarLabel: "Timer",
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name="stopwatch-sharp"
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
                elevation: 5,
                height: heightScreen * 0.12,
                paddingBottom: heightScreen * 0.019,
                backgroundColor: color.secondary,
              },
              tabBarActiveTintColor: color.primary,
              tabBarInactiveTintColor: color.whiteType,
            }}
          />
          <stack.Screen
          name="Progress"
          component={Progress}
          options={{
            headerShown: false,
            tabBarLabel: "Progress",
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
          <stack.Screen
            name="Account"
            component={Account}
            options={{
              headerShown: false,
              tabBarLabel: "Account",
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name="person"
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
                elevation: 5,
                height: heightScreen * 0.12,
                paddingBottom: heightScreen * 0.019,
                backgroundColor: color.secondary,
              },
              tabBarActiveTintColor: color.primary,
              tabBarInactiveTintColor: color.whiteType,
            }}
          />
        </stack.Navigator>
      ) : (
        <stack.Navigator initialRouteName={"InitialStack"}>
          <stack.Screen
            name="InitialStack"
            component={InitialStack}
            options={{
              headerShown: false,
              tabBarStyle: { display: "none" },
            }}
          />
        </stack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default MainStack;
