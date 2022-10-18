import React, { useEffect, useRef, useState } from "react";
import { Text, View, Modal, Animated } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import LoaderStyle from "./style";
import color from "../../utils/colors";
import useDimensions from "../../hooks/useDimensions";

const Loader = (props) => {
  const { state, stateEdit, iconLoad } = props;
  const [text, setText] = useState("");
  const animationFade = useRef(new Animated.Value(0)).current;
  const animationScale = useRef(new Animated.Value(0)).current;
  const { heightScreen, widthScreen } = useDimensions();
  useEffect(() => {
    Animated.timing(animationFade, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(animationScale, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      setText(".");
    }, 400);
    setTimeout(() => {
      setText("..");
    }, 700);
    setTimeout(() => {
      setText("...");
    }, 900);
    setTimeout(() => {
      setText(".");
    }, 1000);
    setTimeout(() => {
      setText("..");
    }, 1500);
    setTimeout(() => {
      setText("...");
    }, 2000);
    setTimeout(() => {
      stateEdit(false);
    }, 2100);
  }, [state]);

  return (
    <Modal visible={state} transparent={true} animationType="fade">
      <View style={LoaderStyle.modal}>
        <Animated.View
          style={[LoaderStyle.background, { opacity: animationFade }]}
        >
          <Icon
            color={color.primary}
            size={heightScreen * 0.06}
            name={iconLoad}
            style={LoaderStyle.iconReloadCenter}
          />

          <Animated.View
            style={[
              LoaderStyle.backgroundActivityIndicator,
              {
                opacity: animationFade,
                transform: [
                  {
                    rotate: animationScale.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["0deg", "1330deg"],
                    }),
                  },
                ],
              },
            ]}
          >
            <View style={LoaderStyle.iconReload} />
          </Animated.View>

          <View style={LoaderStyle.messageContainer}>
            <Text style={LoaderStyle.message}>Loading{text}</Text>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default Loader;
