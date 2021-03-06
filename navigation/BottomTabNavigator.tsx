/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../features/recipe/screens/TabOneScreen";
import TabTwoScreen from "../features/profile/screens/TabTwoScreen";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";
import RecipeDetailScreen from "../features/recipe/screens/RecipeDetailScreen";
import RecipeCreateScreen from "../features/recipe/screens/RecipeCreateScreen";
import RecipeEditScreen from "../features/recipe/screens/RecipeEditScreen";
import TransactionHistoryScreen from "../features/transaction/screens/TransactionHistoryScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-person" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: "Featured Recipes" }}
      />
      <TabOneStack.Screen
        name="RecipeDetailScreen"
        component={RecipeDetailScreen}
        options={{ headerTitle: "" }}
      />
      <TabOneStack.Screen
        name="RecipeEditScreen"
        component={RecipeEditScreen}
        options={{ headerTitle: "Edit Recipe" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "User Profile" }}
      />
      <TabTwoStack.Screen
        name="RecipeDetailScreen"
        component={RecipeDetailScreen}
        options={{ headerTitle: "" }}
      />
      <TabTwoStack.Screen
        name="RecipeCreateScreen"
        component={RecipeCreateScreen}
        options={{ headerTitle: "Create Recipe" }}
      />
      <TabTwoStack.Screen
        name="RecipeEditScreen"
        component={RecipeEditScreen}
        options={{ headerTitle: "Edit Recipe" }}
      />
      <TabTwoStack.Screen
        name="TransactionHistoryScreen"
        component={TransactionHistoryScreen}
        options={{ headerTitle: "Transaction History" }}
      />
    </TabTwoStack.Navigator>
  );
}
