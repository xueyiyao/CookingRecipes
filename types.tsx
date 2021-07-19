/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  RecipeDetailScreen: {
    recipeId: string;
  };
  RecipeEditScreen: {
    recipeId: string;
  };
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
  RecipeDetailScreen: {
    recipeId: string;
  };
  RecipeCreateScreen: undefined;
  RecipeEditScreen: {
    recipeId: string;
  };
  TransactionHistoryScreen: undefined;
};
