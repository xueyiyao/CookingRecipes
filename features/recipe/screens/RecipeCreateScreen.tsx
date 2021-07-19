import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { AppState } from "../../../redux/types";
import { addRecipe } from "../../../redux/recipeActions";
import { updateUserInfo } from "../../../redux/userActions";
import { User } from "../../../src/API";
import { generateId } from "../../../utils/ids";

import RecipeFormView from "../views/RecipeFormView";

const handleSubmit = (
  title: string,
  description: string,
  price: number,
  user: User,
  addRecipe: Function,
  updateUserInfo: Function
) => {
  const recipe = {
    title: title,
    author: user.id,
    description: description,
    price: price,
    id: generateId(16),
  };

  user.recipes.push(recipe.id);

  addRecipe(recipe);
  updateUserInfo(user);
};

interface Props {
  user: User;
  addRecipe: Function;
  updateUserInfo: Function;
}

const RecipeCreateScreen: React.FC<Props> = (props) => {
  return (
    <RecipeFormView
      buttonTitle="Submit"
      onPress={(title: string, description: string, price: number) =>
        handleSubmit(
          title,
          description,
          price,
          props.user,
          props.addRecipe,
          props.updateUserInfo
        )
      }
    />
  );
};

const mapStateToProps = (state: AppState) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ addRecipe, updateUserInfo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCreateScreen);
