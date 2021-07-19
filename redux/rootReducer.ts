import { combineReducers } from "redux";
import { recipeReducer } from "./recipeReducer";
import { transactionReducer } from "./transactionReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  recipe: recipeReducer,
  user: userReducer,
  transaction: transactionReducer,
});
