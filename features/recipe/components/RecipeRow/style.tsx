import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "black",
    width: "96%",
    overflow: "hidden",
    alignSelf: "center",
    borderRadius: 12,

    marginVertical: 8,
  },

  description: {
    position: "absolute",
    bottom: 12,
    zIndex: 1,

    marginLeft: 16,
    marginRight: 16,

    color: "white",
  },

  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    opacity: 0.65,
  },

  subtitle: {
    position: "absolute",
    top: 32,
    zIndex: 1,

    marginLeft: 16,
    marginRight: 16,

    color: "white",
  },

  title: {
    position: "absolute",
    top: 12,
    zIndex: 1,

    marginLeft: 16,
    marginRight: 16,

    fontSize: 16,
    fontWeight: "800",
    color: "white",
  },

  code: {
    position: "absolute",
    top: 12,
    right: 0,
    zIndex: 1,

    marginLeft: 16,
    marginRight: 16,

    color: "white",
  },
});
