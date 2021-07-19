import React from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { TabOneParamList, TabTwoParamList } from "../../../types";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { AppState } from "../../../redux/types";
import { editRecipe } from "../../../redux/recipe/recipeActions";
import { Recipe } from "../../../src/API";

import RecipeFormView from "../views/RecipeFormView";

const handleEdit = (
  title: string,
  description: string,
  price: number,
  oldRecipe: Recipe,
  editRecipe: Function
) => {
  const recipe = { ...oldRecipe };
  recipe["title"] = title;
  recipe["description"] = description;
  recipe["price"] = price;

  editRecipe(recipe);
};

interface Props {
  recipes: Record<string, Recipe>;
  editRecipe: Function;
}

const RecipeEditScreen: React.FC<Props> = (props) => {
  const recipeId =
    useRoute<
      RouteProp<TabOneParamList | TabTwoParamList, "RecipeDetailScreen">
    >().params.recipeId;

  const recipe = props.recipes[recipeId];

  return (
    <RecipeFormView
      title={recipe.title}
      description={recipe.description}
      price={recipe.price}
      buttonTitle={"Done"}
      onPress={(title: string, description: string, price: number) =>
        handleEdit(title, description, price, recipe, props.editRecipe)
      }
    />
  );
};

const mapStateToProps = (state: AppState) => ({
  recipes: state.recipe.recipes,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ editRecipe }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEditScreen);
