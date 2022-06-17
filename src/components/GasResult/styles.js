import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: 110,
    backgroundColor: "#636366",
    borderRadius: 24,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  contentContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "600",
    marginLeft: 14,
  },
  contentTextHighlight: {
    fontWeight: "800",
  },
});
