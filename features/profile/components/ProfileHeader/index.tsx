import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

import style from "./style";
import { User } from "../../../../src/API";
import { useNavigation } from "@react-navigation/native";

interface Props {
  user: User;
}

const ProfileHeader: React.FC<Props> = ({ user }) => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={style.leftColumn}>
        <FontAwesome5 name={"coins"} size={40} color={"orange"} />
        <Text style={style.coinCount}>{user.coins}</Text>
      </View>
      <View style={style.middleColumn}>
        <Image
          source={{
            uri: "https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg",
          }}
          style={style.profileImage}
        />
        <Text style={style.username}>{user.username}</Text>
      </View>
      <View style={style.rightColumn}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RecipeCreateScreen");
          }}
        >
          <Ionicons name={"add-circle-outline"} size={40} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("TransactionHistoryScreen");
          }}
        >
          <Ionicons name={"ios-file-tray-full-outline"} size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;
