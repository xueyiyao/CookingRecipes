import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import style from "./style";

interface Props {
  title?: string;
  description?: string;
  price?: number;
  buttonTitle: string;
  onPress: Function;
}

const RecipeFormView: React.FC<Props> = (props) => {
  const [title, setTitle] = useState(props.title ?? "");
  const [description, setDescription] = useState(props.description ?? "");
  const [price, setPrice] = useState(props.price ?? 0);
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={style.fieldContainer}>
        <Text style={style.label}>Recipe Title</Text>
        <TextInput
          defaultValue={title}
          onChangeText={(text) => setTitle(text)}
          style={style.input}
        />
      </View>
      <View style={style.fieldContainer}>
        <Text style={style.label}>Recipe Description</Text>
        <TextInput
          defaultValue={description}
          onChangeText={(text) => setDescription(text)}
          style={style.input}
        />
      </View>
      <Text style={style.label}>Recipe Price (CookingCoins)</Text>
      <View style={style.fieldContainer}>
        <TextInput
          defaultValue={price.toString()}
          keyboardType={"numeric"}
          onChangeText={(text) => setPrice(parseInt(text))}
          style={style.input}
        />
      </View>
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          props.onPress(title, description, price);
          navigation.goBack();
        }}
      >
        <Text>{props.buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecipeFormView;
