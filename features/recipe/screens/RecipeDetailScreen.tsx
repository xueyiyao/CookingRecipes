import React from "react";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { TabOneParamList, TabTwoParamList } from "../../../types";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { AppState } from "../../../redux/types";
import { Recipe, User } from "../../../src/API";
import { removeRecipe } from "../../../redux/recipeActions";
import { updateUserInfo } from "../../../redux/userActions";
import { addTransaction } from "../../../redux/transactionActions";
import { generateId } from "../../../utils/ids";

const handleFavorite = (
  recipeId: string,
  user: User,
  updateUserInfo: Function
) => {
  user.favorites.push(recipeId);
  updateUserInfo(user);
};

const handleUnfavorite = (
  recipeId: string,
  user: User,
  updateUserInfo: Function
) => {
  const indexNum = user.favorites.indexOf(recipeId);
  user.favorites.splice(indexNum, 1);
  updateUserInfo(user);
};

const handlePurchase = (
  recipeId: string,
  recipePrice: number,
  recipeAuthor: string,
  user: User,
  addTransaction: Function,
  updateUserInfo: Function
) => {
  if (recipePrice > user.coins) {
    Alert.alert("Not Enough Coins");
    return;
  }

  const transaction = {
    seller: recipeAuthor,
    buyer: user.id,
    recipe: recipeId,
    price: recipePrice,
    id: generateId(16),
  };

  user.recipes.push(recipeId);
  user.transactions.push(transaction.id);
  user.coins -= recipePrice;

  addTransaction(transaction);
  updateUserInfo(user);
};

const handleDelete = (
  recipeId: string,
  user: User,
  removeRecipe: Function,
  updateUserInfo: Function
) => {
  const indexNum = user.recipes.indexOf(recipeId);
  user.recipes.splice(indexNum, 1);

  const indexNumFavorites = user.favorites.indexOf(recipeId);
  if (indexNumFavorites !== -1) {
    user.favorites.splice(indexNumFavorites, 1);
  }

  removeRecipe(recipeId);
  updateUserInfo(user);
};

interface Props {
  recipes: Record<string, Recipe>;
  user: User;
  updateUserInfo: Function;
  addTransaction: Function;
  removeRecipe: Function;
}

const RecipeDetailScreen: React.FC<Props> = (props) => {
  const recipeId =
    useRoute<
      RouteProp<TabOneParamList | TabTwoParamList, "RecipeDetailScreen">
    >().params.recipeId;
  const navigation = useNavigation();

  const isFavorited = props.user.favorites.includes(recipeId);
  const canPurchase = !props.user.recipes.includes(recipeId);
  const authorId = props.recipes[recipeId]
    ? props.recipes[recipeId].author
    : "";

  if (props.recipes[recipeId]) {
    return (
      <View style={{ padding: 8, backgroundColor: "white", height: "100%" }}>
        <Text style={{ fontSize: 32, fontWeight: "600" }}>
          {props.recipes[recipeId].title}
        </Text>
        <Text
          style={{ fontSize: 16, fontWeight: "500" }}
        >{`Ingredients: ${props.recipes[recipeId].description}`}</Text>
        <Text
          style={{ fontSize: 16, fontWeight: "500" }}
        >{`Price: ${props.recipes[recipeId].price}`}</Text>
        <Text
          style={{ fontSize: 16, fontWeight: "500" }}
        >{`Author: ${authorId}`}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "pink",
            width: "96%",
            height: 48,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
            alignSelf: "center",
          }}
          onPress={
            isFavorited
              ? () => {
                  handleUnfavorite(recipeId, props.user, props.updateUserInfo);
                }
              : () => {
                  handleFavorite(recipeId, props.user, props.updateUserInfo);
                }
          }
        >
          {isFavorited ? (
            <Text>Favorited!</Text>
          ) : (
            <Text>Add to Favorites</Text>
          )}
        </TouchableOpacity>
        {authorId !== props.user.id ? (
          <TouchableOpacity
            disabled={!canPurchase}
            style={{
              backgroundColor: "lightskyblue",
              width: "96%",
              height: 48,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
              alignSelf: "center",
              marginTop: 8,
            }}
            onPress={
              canPurchase
                ? () => {
                    handlePurchase(
                      recipeId,
                      props.recipes[recipeId].price,
                      props.recipes[recipeId].author,
                      props.user,
                      props.addTransaction,
                      props.updateUserInfo
                    );
                  }
                : () => {}
            }
          >
            {canPurchase ? <Text>Purchase</Text> : <Text>Owned!</Text>}
          </TouchableOpacity>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 8,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "lightgreen",
                width: "47%",
                height: 48,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
                alignSelf: "center",
              }}
              onPress={() => {
                navigation.navigate("RecipeEditScreen", { recipeId: recipeId });
              }}
            >
              <Text>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "red",
                width: "47%",
                height: 48,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
                alignSelf: "center",
              }}
              onPress={() => {
                handleDelete(
                  recipeId,
                  props.user,
                  props.removeRecipe,
                  props.updateUserInfo
                );
                navigation.goBack();
              }}
            >
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  } else {
    return <View></View>;
  }
};

const mapStateToProps = (state: AppState) => ({
  recipes: state.recipe.recipes,
  user: state.user.user,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    { updateUserInfo, addTransaction, removeRecipe },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetailScreen);
