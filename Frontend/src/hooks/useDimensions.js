import React from "react";
import { Dimensions } from "react-native";

function useDimensions() {
  const heightScreen = Dimensions.get("screen").height;
  const widthScreen = Dimensions.get("screen").width;
  return { heightScreen, widthScreen };
}

export default useDimensions;
