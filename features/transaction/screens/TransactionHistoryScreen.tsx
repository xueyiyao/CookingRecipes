import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../../redux/types";
import { bindActionCreators, Dispatch } from "redux";
import { Recipe, Transaction } from "../../../src/API";
import { fetchTransactions } from "../../../redux/transactionActions";
import TransactionHistoryView from "../views/TransactionHistoryView";

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
    <TransactionHistoryView
      recipes={props.recipes}
      transactions={props.transactions}
    />
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
