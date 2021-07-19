import { USER_ACTION_TYPES } from "./actions";
import {
  GetUserAction,
  UpdateUserAction,
  UserAction,
  UserState,
} from "./types";
import { User } from "../src/API";

const initialState = {
  user: {
    coins: 0,
    createdAt: new Date().toISOString(),
    favorites: [],
    id: "",
    recipes: [],
    transactions: [],
    updatedAt: new Date().toISOString(),
    username: "",
  },
};

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
) => {
  switch (action.type) {
    case USER_ACTION_TYPES.GET_USER: {
      const { payload } = <GetUserAction>action;
      return {
        user: payload,
      };
    }
    case USER_ACTION_TYPES.UPDATE_USER: {
      const { userData } = <UpdateUserAction>action;
      console.log("userData", userData);
      return {
        user: {
          ...userData,
        },
      };
    }
    default:
      return state;
  }
};
