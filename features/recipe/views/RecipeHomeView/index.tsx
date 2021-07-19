import React from "react";
import { SafeAreaView, Text, FlatList } from "react-native";
import { Recipe } from "../../../../src/API";
import RecipeRow from "../../components/RecipeRow";

import style from "./style";

interface Props {
  recipes: Recipe[];
}

const renderItem = (item: Recipe) => {
  return <RecipeRow recipe={item} />;
};

const RecipeHomeView: React.FC<Props> = ({ recipes }) => {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>Featured Recipes</Text>
      <FlatList data={recipes} renderItem={({ item }) => renderItem(item)} />
    </SafeAreaView>
  );
};

export default RecipeHomeView;
