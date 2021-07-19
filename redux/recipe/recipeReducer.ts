import { Recipe } from "../../src/API";
import { RECIPES_ACTION_TYPES } from "../actions";
import {
  AddRecipeAction,
  EditRecipeAction,
  GetRecipesAction,
  RecipesAction,
  RecipesState,
  RemoveRecipeAction,
} from "../types";

const initialState = {
  recipes: {},
};

export const recipeReducer = (
  state: RecipesState = initialState,
  action: RecipesAction
) => {
  switch (action.type) {
    case RECIPES_ACTION_TYPES.GET_RECIPES: {
      const { payload } = <GetRecipesAction>action;

      return {
        recipes: payload,
      };
    }
    case RECIPES_ACTION_TYPES.ADD_RECIPE: {
      const { recipeData } = <AddRecipeAction>action;
      const temp: Record<string, Recipe> = {};
      temp[recipeData.id] = recipeData;

      return {
        recipes: { ...state.recipes, ...temp },
      };
    }
    case RECIPES_ACTION_TYPES.EDIT_RECIPE: {
      const { recipeData } = <EditRecipeAction>action;
      state.recipes[recipeData.id] = recipeData;

      return {
        recipes: { ...state.recipes },
      };
    }
    case RECIPES_ACTION_TYPES.REMOVE_RECIPE: {
      const { id } = <RemoveRecipeAction>action;
      delete state.recipes[id];

      return {
        recipes: { ...state.recipes },
      };
    }
    default:
      return state;
  }
};
