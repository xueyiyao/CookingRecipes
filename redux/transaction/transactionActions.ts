import { Transaction } from "../../src/API";
import { Dispatch } from "redux";
import { API, graphqlOperation } from "aws-amplify";
import { AddTransactionAction, GetTransactionsAction } from "../types";
import { listTransactions } from "../../src/graphql/queries";
import { TRANSACTIONS_ACTION_TYPES } from "../actions";
import { createTransaction } from "../../src/graphql/mutations";

const readSuccess = (
  transactions: Record<string, Transaction>
): GetTransactionsAction => {
  return {
    type: TRANSACTIONS_ACTION_TYPES.GET_TRANSACTIONS,
    payload: transactions,
  };
};

const addSuccess = (transaction: Transaction): AddTransactionAction => {
  return {
    type: TRANSACTIONS_ACTION_TYPES.ADD_TRANSACTION,
    transactionData: transaction,
  };
};

export const fetchTransactions = () => (dispatch: Dispatch) => {
  API.graphql(graphqlOperation(listTransactions)).then((transactionData) => {
    const transactions: Record<string, Transaction> = {};

    const transactionList: Transaction[] =
      transactionData.data.listTransactions.items;
    transactionList.forEach((transaction) => {
      transactions[transaction.id] = transaction;
    });

    dispatch(readSuccess(transactions));
  });
};

export const addTransaction =
  (transaction: Transaction) => (dispatch: Dispatch) => {
    API.graphql(graphqlOperation(createTransaction, { input: transaction }))
      .then(() => {
        transaction["createdAt"] = new Date().toISOString();
        transaction["updatedAt"] = transaction.createdAt;

        dispatch(addSuccess(transaction));
      })
      .catch((error) => {
        console.log(error);
      });
  };
