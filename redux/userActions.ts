import { User, Recipe } from "../src/API";
import { Dispatch } from "redux";
import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "../src/graphql/queries";
import { GetUserAction, UpdateUserAction } from "./types";
import { USER_ACTION_TYPES } from "./actions";
import { updateUser } from "../src/graphql/mutations";

const readSuccess = (user: User): GetUserAction => {
  return { type: USER_ACTION_TYPES.GET_USER, payload: user };
};

const updateSuccess = (userId: string, user: User): UpdateUserAction => {
  return { type: USER_ACTION_TYPES.UPDATE_USER, id: userId, userData: user };
};

export const fetchUser = () => (dispatch: Dispatch) => {
  API.graphql(graphqlOperation(getUser, { id: "JOZwdpXRu7I4Zphs" })).then(
    (userData) => {
      const user: User = userData.data.getUser;
      dispatch(readSuccess(user));
    }
  );
};

export const updateUserInfo = (user: User) => (dispatch: Dispatch) => {
  const userCopy: Record<string, any> = { ...user };
  delete userCopy["createdAt"];
  delete userCopy["updatedAt"];

  API.graphql(graphqlOperation(updateUser, { input: userCopy })).then(() => {
    user["updatedAt"] = new Date().toISOString();
    dispatch(updateSuccess(user.id, user));
  });
};
