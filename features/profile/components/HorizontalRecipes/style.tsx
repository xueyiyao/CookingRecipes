import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    // backgroundColor: "red",
  },

  label: {
    fontSize: 24,
    fontWeight: "700",

    marginTop: 4,
    marginHorizontal: 8,
  },

  textContainer: {
    width: Dimensions.get("window").height / 3.5,
    aspectRatio: 5 / 3,
  },

  text: {
    fontSize: 18,
    fontWeight: "400",

    marginHorizontal: 8,
  },
});
