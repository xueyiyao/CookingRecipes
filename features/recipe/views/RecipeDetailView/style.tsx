import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },

  textContainer: {
    margin: 16,
  },

  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },

  title: { fontSize: 32, fontWeight: "600" },

  text: { fontSize: 16, fontWeight: "500", marginVertical: 8 },

  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",

    margin: 16,
  },

  buttonText: { fontSize: 16, fontWeight: "700", color: "white" },

  button: {
    height: 48,
    width: "100%",

    justifyContent: "center",
    alignItems: "center",

    marginTop: 8,
    borderRadius: 8,
  },

  buttonRow: {
    flexDirection: "row",

    justifyContent: "space-between",

    marginTop: 8,
  },

  buttonHalf: {
    height: 48,
    width: "49%",

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 8,
  },
});
