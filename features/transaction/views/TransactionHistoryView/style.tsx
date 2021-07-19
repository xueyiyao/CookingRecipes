import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { padding: 16, backgroundColor: "white", height: "100%" },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "black",
  },

  label: { fontSize: 20, fontWeight: "600", marginVertical: 12 },

  text: { fontSize: 18, fontWeight: "400", marginVertical: 16 },
});
