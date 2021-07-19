import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },

  form: {
    margin: 16,

    justifyContent: "center",
    // alignItems: "center",
  },

  fieldContainer: {
    marginBottom: 24,
  },

  label: {
    fontSize: 20,
    fontWeight: "600",
  },

  input: {
    fontSize: 18,

    marginTop: 4,
    backgroundColor: "whitesmoke",
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",

    margin: 16,
  },

  button: {
    height: 48,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "forestgreen",
    borderRadius: 8,
  },

  buttonText: { fontSize: 16, fontWeight: "700", color: "white" },
});
