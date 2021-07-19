import { Recipe } from "../src/API";
import { Dispatch } from "redux";
import { API, graphqlOperation } from "aws-amplify";
import { listRecipes } from "../src/graphql/queries";
import {
  AddRecipeAction,
  GetRecipesAction,
  EditRecipeAction,
  RemoveRecipeAction,
} from "./types";
import { RECIPES_ACTION_TYPES } from "./actions";
import {
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from "../src/graphql/mutations";

const readSuccess = (recipes: Record<string, Recipe>): GetRecipesAction => {
  return { type: RECIPES_ACTION_TYPES.GET_RECIPES, payload: recipes };
};

const addSuccess = (recipe: Recipe): AddRecipeAction => {
  return { type: RECIPES_ACTION_TYPES.ADD_RECIPE, recipeData: recipe };
};

const editSuccess = (recipe: Recipe): EditRecipeAction => {
  return { type: RECIPES_ACTION_TYPES.EDIT_RECIPE, recipeData: recipe };
};

const removeSuccess = (recipeId: string): RemoveRecipeAction => {
  return { type: RECIPES_ACTION_TYPES.REMOVE_RECIPE, id: recipeId };
};

export const fetchRecipes = () => (dispatch: Dispatch) => {
  API.graphql(graphqlOperation(listRecipes)).then((recipeData) => {
    const recipes: Record<string, Recipe> = {};

    const recipeList: Recipe[] = recipeData.data.listRecipes.items;
    recipeList.forEach((recipe) => {
      recipes[recipe.id] = recipe;
    });

    dispatch(readSuccess(recipes));
  });
};

export const addRecipe = (recipe: Recipe) => (dispatch: Dispatch) => {
  API.graphql(graphqlOperation(createRecipe, { input: recipe }))
    .then(() => {
      recipe["createdAt"] = new Date().toISOString();
      recipe["updatedAt"] = recipe.createdAt;

      dispatch(addSuccess(recipe));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const editRecipe = (recipe: Recipe) => (dispatch: Dispatch) => {
  const recipeCopy: Record<string, any> = { ...recipe };
  delete recipeCopy["createdAt"];
  delete recipeCopy["updatedAt"];

  API.graphql(graphqlOperation(updateRecipe, { input: recipeCopy }))
    .then(() => {
      recipe["updatedAt"] = new Date().toISOString();

      dispatch(editSuccess(recipe));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const removeRecipe = (recipeId: string) => (dispatch: Dispatch) => {
  API.graphql(graphqlOperation(deleteRecipe, { input: { id: recipeId } }))
    .then(() => {
      dispatch(removeSuccess(recipeId));
    })
    .catch((error) => {
      console.log(error);
    });
};
