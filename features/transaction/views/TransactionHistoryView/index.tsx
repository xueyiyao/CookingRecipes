import React from "react";
import { View, Text, FlatList } from "react-native";
import { Recipe, Transaction } from "../../../../src/API";

import style from "./style";

const renderItem = (item: [Transaction, string]) => {
  return (
    <View key={item[0].id} style={style.row}>
      <Text style={style.text}>{item[1]}</Text>
      <Text style={style.text}>{item[0].price}</Text>
    </View>
  );
};

interface Props {
  recipes: Record<string, Recipe>;
  transactions: Record<string, Transaction>;
}

const TransactionHistoryView: React.FC<Props> = ({ recipes, transactions }) => {
  const tableRow: [Transaction, string][] = [];

  Object.values(transactions).forEach((transaction) => {
    tableRow.push([transaction, recipes[transaction.recipe].title]);
  });

  return (
    <View style={style.container}>
      <View style={style.row}>
        <Text style={style.label}>Recipe</Text>
        <Text style={style.label}>Price (CookingCoins)</Text>
      </View>
      <FlatList data={tableRow} renderItem={({ item }) => renderItem(item)} />
    </View>
  );
};

export default TransactionHistoryView;
