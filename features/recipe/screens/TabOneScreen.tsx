import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Recipe } from "../../../src/API";
import { AppState } from "../../../redux/types";

import RecipeHomeView from "../views/RecipeHomeView";

import { fetchRecipes } from "../../../redux/recipeActions";
import { fetchUser } from "../../../redux/userActions";

type Props = {
  recipes: Record<string, Recipe>;
  fetchRecipes: Function;
  fetchUser: Function;
};

const TabOneScreen: React.FC<Props> = (props) => {
  React.useEffect(() => {
    props.fetchRecipes();
    props.fetchUser();
  }, []);

  return <RecipeHomeView recipes={Object.values(props.recipes)} />;
};

const mapStateToProps = (state: AppState) => ({
  recipes: state.recipe.recipes,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchRecipes, fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabOneScreen);
