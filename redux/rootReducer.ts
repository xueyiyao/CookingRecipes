import { combineReducers } from "redux";
import { recipeReducer } from "./recipe/recipeReducer";
import { transactionReducer } from "./transaction/transactionReducer";
import { userReducer } from "./user/userReducer";

export default combineReducers({
  recipe: recipeReducer,
  user: userReducer,
  transaction: transactionReducer,
});
