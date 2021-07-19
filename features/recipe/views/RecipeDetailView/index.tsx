import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Recipe } from "../../../../src/API";

import style from "./style";

interface Props {
  recipe: Recipe;
  userId: string;
  isFavorited: boolean;
  canPurchase: boolean;
  handleFavorite: Function;
  handleUnfavorite: Function;
  handlePurchase: Function;
  handleDelete: Function;
}

const RecipeDetailView: React.FC<Props> = ({
  recipe,
  userId,
  isFavorited,
  canPurchase,
  handleFavorite,
  handleUnfavorite,
  handlePurchase,
  handleDelete,
}) => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Image
        source={{
          uri: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=",
        }}
        style={style.image}
      />
      <View style={style.textContainer}>
        <Text style={style.title}>{recipe.title}</Text>
        <Text style={style.text}>{`Ingredients: ${recipe.description}`}</Text>
        <Text style={style.text}>{`Price: ${recipe.price}`}</Text>
        {/* <Text style={style.text}>{`Author: ${recipe.author}`}</Text> */}
      </View>
      <View style={style.buttonContainer}>
        <TouchableOpacity
          style={[style.button, { backgroundColor: "pink" }]}
          onPress={
            isFavorited
              ? () => {
                  handleUnfavorite();
                }
              : () => {
                  handleFavorite();
                }
          }
        >
          {isFavorited ? (
            <Text>Favorited!</Text>
          ) : (
            <Text>Add to Favorites</Text>
          )}
        </TouchableOpacity>
        {recipe.author !== userId ? (
          <TouchableOpacity
            disabled={!canPurchase}
            style={[style.button, { backgroundColor: "lightskyblue" }]}
            onPress={
              canPurchase
                ? () => {
                    handlePurchase();
                  }
                : () => {}
            }
          >
            {canPurchase ? <Text>Purchase</Text> : <Text>Owned!</Text>}
          </TouchableOpacity>
        ) : (
          <View style={style.buttonRow}>
            <TouchableOpacity
              style={[style.buttonHalf, { backgroundColor: "lightgreen" }]}
              onPress={() => {
                navigation.navigate("RecipeEditScreen", {
                  recipeId: recipe.id,
                });
              }}
            >
              <Text>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[style.buttonHalf, { backgroundColor: "red" }]}
              onPress={() => {
                handleDelete();
                navigation.goBack();
              }}
            >
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default RecipeDetailView;
