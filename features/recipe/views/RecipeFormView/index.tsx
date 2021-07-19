import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Text>Recipe Create</Text>
      <Text>Recipe title</Text>
      <TextInput
        defaultValue={title}
        onChangeText={(text) => setTitle(text)}
        style={{ backgroundColor: "whitesmoke" }}
      />
      <Text>Recipe Description</Text>
      <TextInput
        defaultValue={description}
        onChangeText={(text) => setDescription(text)}
        style={{ backgroundColor: "whitesmoke" }}
      />
      <Text>Recipe Price (CookingCoins)</Text>
      <TextInput
        defaultValue={price.toString()}
        keyboardType={"numeric"}
        onChangeText={(text) => setPrice(parseInt(text))}
        style={{ backgroundColor: "whitesmoke" }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          width: "96%",
          height: 48,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
          alignSelf: "center",
        }}
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
