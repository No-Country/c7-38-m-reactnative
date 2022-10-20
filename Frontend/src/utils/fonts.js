import { Dimensions } from "react-native";

const heightScreen = Dimensions.get("screen").height;

export const font = {
  h1: {
    fontSize: heightScreen * 0.04,
    fontWeight: "700",
  },
  h2: {
    fontSize: heightScreen * 0.025,
    fontWeight: "600",
  },
  h3: {
    fontSize: heightScreen * 0.02,
    fontWeight: "500",
  },
  b1: {
    fontSize: heightScreen * 0.018,
    fontWeight: "500",
  },
  b2: {
    fontSize: heightScreen * 0.014,
    fontWeight: "500",
  },
};
