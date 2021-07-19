import * as React from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import EditScreenInfo from "../../../components/EditScreenInfo";
import { Text, View } from "../../../components/Themed";

import { API, graphqlOperation } from "aws-amplify";
import { getUser, listRecipes } from "../../../src/graphql/queries";
import { AppState, UserState } from "../../../redux/types";
import { Recipe, User } from "../../../src/API";

import ProfileView from "../views/ProfileView";

import { fetchUser } from "../../../redux/userActions";

type Props = {
  user: User;
  recipes: Record<string, Recipe>;
  fetchUser: () => void;
};

const TabTwoScreen: React.FC<Props> = (props) => {
  React.useEffect(() => {
    // props.fetchUser();
  }, []);

  // console.log("User:", props.user);

  return <ProfileView recipes={props.recipes} user={props.user} />;
};

const mapStateToProps = (state: AppState) => ({
  user: state.user.user,
  recipes: state.recipe.recipes,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabTwoScreen);
