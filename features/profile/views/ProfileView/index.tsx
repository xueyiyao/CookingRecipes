import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import { Recipe, User } from "../../../../src/API";
import HorizontalRecipes from "../../components/HorizontalRecipes";
import ProfileHeader from "../../components/ProfileHeader";

import style from "./style";

interface Props {
  recipes: Record<string, Recipe>;
  user: User;
}

const ProfileView: React.FC<Props> = ({ recipes, user }) => (
  <SafeAreaView style={style.container}>
    <ProfileHeader user={user} />
    <View style={style.listsContainer}>
      <HorizontalRecipes
        label={"My Recipes"}
        recipes={recipes}
        recipeIds={user.recipes}
      />
      <HorizontalRecipes
        label={"Favorites"}
        recipes={recipes}
        recipeIds={user.favorites}
      />
    </View>
  </SafeAreaView>
);

export default ProfileView;
