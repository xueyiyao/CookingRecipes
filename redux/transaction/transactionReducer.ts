import { Transaction } from "../../src/API";
import { TRANSACTIONS_ACTION_TYPES } from "../actions";
import {
  AddTransactionAction,
  GetTransactionsAction,
  TransactionsAction,
  TransactionsState,
} from "../types";

const initialState = {
  transactions: {},
};

export const transactionReducer = (
  state: TransactionsState = initialState,
  action: TransactionsAction
) => {
  switch (action.type) {
    case TRANSACTIONS_ACTION_TYPES.GET_TRANSACTIONS: {
      const { payload } = <GetTransactionsAction>action;
      return {
        transactions: payload,
      };
    }
    case TRANSACTIONS_ACTION_TYPES.ADD_TRANSACTION: {
      const { transactionData } = <AddTransactionAction>action;
      const temp: Record<string, Transaction> = {};
      temp[transactionData.id] = transactionData;
      return {
        transactions: { ...state.transactions, ...temp },
      };
    }
    default:
      return state;
  }
};
