import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "black",
    width: "100%",
    overflow: "hidden",
    alignSelf: "center",
    borderRadius: 12,

    marginVertical: 8,
  },

  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    opacity: 0.65,
  },

  title: {
    position: "absolute",
    top: 12,
    zIndex: 1,

    marginLeft: 16,
    marginRight: 16,

    fontSize: 24,
    fontWeight: "800",
    color: "white",
  },
});
