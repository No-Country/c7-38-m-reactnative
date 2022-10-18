import { StyleSheet} from "react-native";
import useDimensions from "../../../hooks/useDimensions";
import color from "../../../utils/colors";
import { font } from "../../../utils/fonts";
const {widthScreen} = useDimensions()

const ListDaysStyles = StyleSheet.create({
  container: {
    backgroundColor: color.secondary,
    padding: widthScreen * 0.02,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    borderColor: '#000',
    borderBottomWidth: 0.2,
    borderEndWidth: 0.2,
    borderLeftWidth: 0.2,
    elevation:5
  },
  list: {
    margin: widthScreen * 0.02,
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    marginHorizontal: widthScreen * 0.02,
  },
  textContainer: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: widthScreen * 0.02,
  },
  exercise: {
    color: color.whiteType,
    textTransform: "capitalize",
    fontSize: font.b1.fontSize,
  },
  arrow: { paddingStart: 30 },
  separator: { flexDirection: "row" },
  separator2: { paddingEnd: widthScreen * 0.02},
});

export default ListDaysStyles;
