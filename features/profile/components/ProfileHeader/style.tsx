import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",

    height: "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",

    backgroundColor: "whitesmoke",
  },

  leftColumn: {
    flexDirection: "column",

    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: "blue",
  },

  rightColumn: {
    flexDirection: "column",
    height: "80%",

    justifyContent: "space-evenly",
    alignItems: "center",

    // backgroundColor: "blue",
  },

  middleColumn: {
    flexDirection: "column",

    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: "red",
  },

  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
    opacity: 0.65,
  },

  username: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "600",
  },

  coinCount: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "500",
  },
});
