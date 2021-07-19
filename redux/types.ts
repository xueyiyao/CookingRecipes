import { Recipe, Transaction, User } from "../src/API";

export type AppState = {
  recipe: {
    recipes: Record<string, Recipe>;
  };
  user: {
    user: User;
  };
  transaction: {
    transactions: Record<string, Transaction>;
  };
};

export type RecipesState = {
  recipes: Record<string, Recipe>;
};

export type GetRecipesAction = {
  type: string;
  payload: Record<string, Recipe>;
};

export type AddRecipeAction = {
  type: string;
  recipeData: Recipe;
};
export type EditRecipeAction = {
  type: string;
  recipeData: Recipe;
};
export type RemoveRecipeAction = {
  type: string;
  id: string;
};

export type RecipesAction =
  | GetRecipesAction
  | AddRecipeAction
  | EditRecipeAction
  | RemoveRecipeAction;

export type UserState = {
  user: User;
};

export type GetUserAction = {
  type: string;
  payload: User;
};

export type UpdateUserAction = {
  type: string;
  id: string;
  userData: User;
};

export type UserAction = GetUserAction | UpdateUserAction;

export type TransactionsState = {
  transactions: Record<string, Transaction>;
};

export type GetTransactionsAction = {
  type: string;
  payload: Record<string, Transaction>;
};

export type AddTransactionAction = {
  type: string;
  transactionData: Transaction;
};

export type TransactionsAction = GetTransactionsAction | AddTransactionAction;
