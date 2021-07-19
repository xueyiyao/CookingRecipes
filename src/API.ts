/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRecipeInput = {
  id?: string | null,
  author: string,
  title: string,
  description: string,
  price: number,
};

export type ModelRecipeConditionInput = {
  author?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelRecipeConditionInput | null > | null,
  or?: Array< ModelRecipeConditionInput | null > | null,
  not?: ModelRecipeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Recipe = {
  __typename: "Recipe",
  id: string,
  author: string,
  title: string,
  description: string,
  price: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRecipeInput = {
  id: string,
  author?: string | null,
  title?: string | null,
  description?: string | null,
  price?: number | null,
};

export type DeleteRecipeInput = {
  id: string,
};

export type CreateTransactionInput = {
  id?: string | null,
  seller: string,
  buyer: string,
  recipe: string,
  price: number,
};

export type ModelTransactionConditionInput = {
  seller?: ModelStringInput | null,
  buyer?: ModelStringInput | null,
  recipe?: ModelStringInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  not?: ModelTransactionConditionInput | null,
};

export type Transaction = {
  __typename: "Transaction",
  id: string,
  seller: string,
  buyer: string,
  recipe: string,
  price: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTransactionInput = {
  id: string,
  seller?: string | null,
  buyer?: string | null,
  recipe?: string | null,
  price?: number | null,
};

export type DeleteTransactionInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  recipes: Array< string >,
  favorites: Array< string >,
  transactions: Array< string >,
  coins: number,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  recipes?: ModelStringInput | null,
  favorites?: ModelStringInput | null,
  transactions?: ModelStringInput | null,
  coins?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  recipes: Array< string >,
  favorites: Array< string >,
  transactions: Array< string >,
  coins: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  recipes?: Array< string > | null,
  favorites?: Array< string > | null,
  transactions?: Array< string > | null,
  coins?: number | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelRecipeFilterInput = {
  id?: ModelIDInput | null,
  author?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelRecipeFilterInput | null > | null,
  or?: Array< ModelRecipeFilterInput | null > | null,
  not?: ModelRecipeFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelRecipeConnection = {
  __typename: "ModelRecipeConnection",
  items?:  Array<Recipe | null > | null,
  nextToken?: string | null,
};

export type ModelTransactionFilterInput = {
  id?: ModelIDInput | null,
  seller?: ModelStringInput | null,
  buyer?: ModelStringInput | null,
  recipe?: ModelStringInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelTransactionFilterInput | null > | null,
  or?: Array< ModelTransactionFilterInput | null > | null,
  not?: ModelTransactionFilterInput | null,
};

export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection",
  items?:  Array<Transaction | null > | null,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  recipes?: ModelStringInput | null,
  favorites?: ModelStringInput | null,
  transactions?: ModelStringInput | null,
  coins?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type CreateRecipeMutationVariables = {
  input: CreateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type CreateRecipeMutation = {
  createRecipe?:  {
    __typename: "Recipe",
    id: string,
    author: string,
    title: string,
    description: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRecipeMutationVariables = {
  input: UpdateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type UpdateRecipeMutation = {
  updateRecipe?:  {
    __typename: "Recipe",
    id: string,
    author: string,
    title: string,
    description: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRecipeMutationVariables = {
  input: DeleteRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type DeleteRecipeMutation = {
  deleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    author: string,
    title: string,
    description: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTransactionMutationVariables = {
  input: CreateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type CreateTransactionMutation = {
  createTransaction?:  {
    __typename: "Transaction",
    id: string,
    seller: string,
    buyer: string,
    recipe: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTransactionMutationVariables = {
  input: UpdateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type UpdateTransactionMutation = {
  updateTransaction?:  {
    __typename: "Transaction",
    id: string,
    seller: string,
    buyer: string,
    recipe: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTransactionMutationVariables = {
  input: DeleteTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type DeleteTransactionMutation = {
  deleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    seller: string,
    buyer: string,
    recipe: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    recipes: Array< string >,
    favorites: Array< string >,
    transactions: Array< string >,
    coins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    recipes: Array< string >,
    favorites: Array< string >,
    transactions: Array< string >,
    coins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    recipes: Array< string >,
    favorites: Array< string >,
    transactions: Array< string >,
    coins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetRecipeQueryVariables = {
  id: string,
};

export type GetRecipeQuery = {
  getRecipe?:  {
    __typename: "Recipe",
    id: string,
    author: string,
    title: string,
    description: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRecipesQueryVariables = {
  filter?: ModelRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipesQuery = {
  listRecipes?:  {
    __typename: "ModelRecipeConnection",
    items?:  Array< {
      __typename: "Recipe",
      id: string,
      author: string,
      title: string,
      description: string,
      price: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTransactionQueryVariables = {
  id: string,
};

export type GetTransactionQuery = {
  getTransaction?:  {
    __typename: "Transaction",
    id: string,
    seller: string,
    buyer: string,
    recipe: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransactionsQuery = {
  listTransactions?:  {
    __typename: "ModelTransactionConnection",
    items?:  Array< {
      __typename: "Transaction",
      id: string,
      seller: string,
      buyer: string,
      recipe: string,
      price: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    recipes: Array< string >,
    favorites: Array< string >,
    transactions: Array< string >,
    coins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      recipes: Array< string >,
      favorites: Array< string >,
      transactions: Array< string >,
      coins: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateRecipeSubscription = {
  onCreateRecipe?:  {
    __typename: "Recipe",
    id: string,
    author: string,
    title: string,
    description: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRecipeSubscription = {
  onUpdateRecipe?:  {
    __typename: "Recipe",
    id: string,
    author: string,
    title: string,
    description: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRecipeSubscription = {
  onDeleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    author: string,
    title: string,
    description: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTransactionSubscription = {
  onCreateTransaction?:  {
    __typename: "Transaction",
    id: string,
    seller: string,
    buyer: string,
    recipe: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTransactionSubscription = {
  onUpdateTransaction?:  {
    __typename: "Transaction",
    id: string,
    seller: string,
    buyer: string,
    recipe: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTransactionSubscription = {
  onDeleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    seller: string,
    buyer: string,
    recipe: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    recipes: Array< string >,
    favorites: Array< string >,
    transactions: Array< string >,
    coins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    recipes: Array< string >,
    favorites: Array< string >,
    transactions: Array< string >,
    coins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    recipes: Array< string >,
    favorites: Array< string >,
    transactions: Array< string >,
    coins: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
