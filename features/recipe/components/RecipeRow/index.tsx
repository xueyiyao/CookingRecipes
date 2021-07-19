import React from "react";
import { TouchableHighlight, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Recipe } from "../../../../src/API";

import style from "./style";

interface Props {
  recipe: Recipe;
  styleProp?: {
    cardStyle: {
      width: number;
      marginHorizontal: number;
    };
  };
}

const RecipeRow: React.FC<Props> = ({ recipe, styleProp }) => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={styleProp ? [style.card, styleProp.cardStyle] : style.card}
      onPress={() => {
        navigation.navigate("RecipeDetailScreen", { recipeId: recipe.id });
      }}
    >
      <View>
        <Text style={styleProp ? [style.title, { fontSize: 20 }] : style.title}>
          {recipe.title}
        </Text>
        <Image
          source={{
            uri: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=",
          }}
          style={style.image}
        />
      </View>
    </TouchableHighlight>
  );
};

export default RecipeRow;
