import React from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Alert, View } from "react-native";
import { TabOneParamList, TabTwoParamList } from "../../../types";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { AppState } from "../../../redux/types";
import { Recipe, User } from "../../../src/API";
import { removeRecipe } from "../../../redux/recipeActions";
import { updateUserInfo } from "../../../redux/userActions";
import { addTransaction } from "../../../redux/transactionActions";
import { generateId } from "../../../utils/ids";

import RecipeDetailView from "../views/RecipeDetailView";

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

  const isFavorited = props.user.favorites.includes(recipeId);
  const canPurchase = !props.user.recipes.includes(recipeId);

  if (props.recipes[recipeId]) {
    return (
      <RecipeDetailView
        recipe={props.recipes[recipeId]}
        userId={props.user.id}
        isFavorited={isFavorited}
        canPurchase={canPurchase}
        handleFavorite={() => {
          handleFavorite(recipeId, props.user, props.updateUserInfo);
        }}
        handleUnfavorite={() => {
          handleUnfavorite(recipeId, props.user, props.updateUserInfo);
        }}
        handlePurchase={() => {
          handlePurchase(
            recipeId,
            props.recipes[recipeId].price,
            props.recipes[recipeId].author,
            props.user,
            props.addTransaction,
            props.updateUserInfo
          );
        }}
        handleDelete={() => {
          handleDelete(
            recipeId,
            props.user,
            props.removeRecipe,
            props.updateUserInfo
          );
        }}
      />
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
