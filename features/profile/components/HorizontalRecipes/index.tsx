import React from "react";
import { View, Text, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import RecipeRow from "../../../recipe/components/RecipeRow";

import { Recipe } from "../../../../src/API";

import style from "./style";

interface Props {
  label: string;
  recipes: Record<string, Recipe>;
  recipeIds: string[];
}

const renderItem = (item: Recipe) => {
  return (
    <RecipeRow
      recipe={item}
      styleProp={{
        cardStyle: {
          width: Dimensions.get("window").height / 3.5,
          marginHorizontal: 8,
        },
      }}
    />
  );
};

const HorizontalRecipes: React.FC<Props> = ({ label, recipes, recipeIds }) => {
  const recipeList: Recipe[] = [];

  for (let i in recipeIds) {
    if (recipes[recipeIds[i]]) recipeList.push(recipes[recipeIds[i]]);
  }

  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <FlatList
        horizontal={true}
        data={recipeList}
        renderItem={({ item }) => renderItem(item)}
        ListEmptyComponent={
          <View style={style.textContainer}>
            <Text style={style.text}>No Recipes Here!</Text>
          </View>
        }
      />
    </View>
  );
};

export default HorizontalRecipes;
