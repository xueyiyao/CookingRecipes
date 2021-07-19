import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);
