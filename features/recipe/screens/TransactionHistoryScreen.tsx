import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { AppState } from "../../../redux/types";
import { bindActionCreators, Dispatch } from "redux";
import { Recipe, Transaction } from "../../../src/API";
import { fetchTransactions } from "../../../redux/transactionActions";

interface Props {
  recipes: Record<string, Recipe>;
  transactions: Record<string, Transaction>;
  fetchTransactions: Function;
}

const TransactionHistoryScreen: React.FC<Props> = (props) => {
  React.useEffect(() => {
    props.fetchTransactions();
  }, []);

  return (
    <View style={{ padding: 8, backgroundColor: "white", height: "100%" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Recipe</Text>
        <Text>Price (CookingCoins)</Text>
      </View>
      {Object.values(props.transactions).map((transaction) => {
        return (
          <View
            key={transaction.id}
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>{props.recipes[transaction.recipe].title}</Text>
            <Text>{transaction.price}</Text>
          </View>
        );
      })}
    </View>
  );
};

const mapStateToProps = (state: AppState) => ({
  transactions: state.transaction.transactions,
  recipes: state.recipe.recipes,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchTransactions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionHistoryScreen);
