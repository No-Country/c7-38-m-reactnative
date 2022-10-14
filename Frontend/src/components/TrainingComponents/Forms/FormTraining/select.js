import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch } from "react-redux";
import useDimensions from "../../../../hooks/useDimensions";
import color from "../../../../utils/colors";
import FormTrainingStyles from "./style";
const Select = (props) => {
  const { Form, setForm } = props;
  const style = FormTrainingStyles;
  const { heightScreen, widthScreen } = useDimensions();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [collapse, setCollapse] = useState(true);
  const [complete, setcomplete] = useState(false);
  const [items, setItems] = useState([
    {
      label: "Weight",
      value: "weight",
      icon: () => (
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/4612/4612369.png",
          }}
          style={style.iconStyle}
        />
      ),
    },
    {
      label: "Crossfit",
      value: "crossfit",
      icon: () => (
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3476/3476091.png",
          }}
          style={style.iconStyle}
        />
      ),
    },
    {
      label: "Running",
      value: "running",
      icon: () => (
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/384/384276.png",
          }}
          style={style.iconStyle}
        />
      ),
    },
  ]);

  useEffect(() => {
    if (
      Form.category &&
      Form.nameTraining.length > 5 &&
      Form.nameTraining.length < 20
    ) {
      setcomplete(true);
    } else {
      setcomplete(false);
    }
  }, [Form]);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setCollapse(!collapse);
        }}
      >
        <View
          style={
            collapse
              ? style.containerTextCheck2
              : style.containerTextCheckClose2
          }
        >
          <View
            style={
              complete
                ? {
                    backgroundColor: color.primary,
                    borderRadius: 100,
                    borderColor: color.greenType2,
                    borderWidth: 1,
                    elevation: 5,
                  }
                : {
                    backgroundColor: color.primary,
                    borderRadius: 100,
                    borderColor: color.redType,
                    borderWidth: 1,
                    elevation: 5,
                  }
            }
          >
            <Ionicons
              name={complete ? "checkmark" : "alert"}
              size={15}
              color={complete ? color.greenType2 : color.redType}
            />
          </View>
          <Text style={style.textCheck}>Name & Category</Text>
          <Ionicons
            name={collapse ? "chevron-up-outline" : "chevron-down-outline"}
            size={15}
            color={color.secondary}
          />
        </View>
      </TouchableOpacity>
      <View style={collapse ? style.containerData2 : { display: "none" }}>
        <TextInput
          style={style.textInput}
          onChangeText={(text) => {
            setForm({ ...Form, nameTraining: text });
          }}
          cursorColor={color.primary}
          placeholder="   Name Training   "
          placeholderTextColor={color.greyType}
        />
        <DropDownPicker
          placeholder="Select on category"
          theme="DARK"
          mode="BADGE"
          onChangeValue={(value) => {
            setForm({ ...Form, category: value });
          }}
          showBadgeDot={true}
          itemSeparator={true}
          style={{
            backgroundColor: color.secondary,
            borderColor: color.secondary,
            color: color.greyType,
            borderRadius: 10,
            elevation: 2,
            zIndex: 2,
            width: widthScreen * 0.5,
            marginHorizontal: widthScreen * 0.1,
            marginBottom: heightScreen * 0.01,
          }}
          arrowIconStyle={{
            width: 20,
            height: 20,
          }}
          showTickIcon={false}
          textStyle={{
            color: color.primary,
            textAlign: "center",
          }}
          placeholderStyle={{
            color: color.greyType,
          }}
          iconContainerStyle={{ marginStart: widthScreen * 0.04 }}
          dropDownContainerStyle={{
            backgroundColor: color.secondary,
            borderColor: color.secondary,
            elevation: 5,
            width: widthScreen * 0.5,
            marginHorizontal: widthScreen * 0.1,
          }}
          listItemLabelStyle={{
            color: color.primary,
          }}
          listItemContainerStyle={{
            backgroundColor: color.secondary,
          }}
          SelectedItemContainerStyle={{
            backgroundColor: color.primary,
          }}
          itemSeparatorStyle={{
            backgroundColor: "#242424",
            elevation: 5,
          }}
          SelectedItemLabelStyle={{
            fontWeight: "bold",
            color: color.secondary,
          }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
    </View>
  );
};

export default Select;
