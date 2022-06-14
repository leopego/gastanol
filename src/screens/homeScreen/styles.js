import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    backgroundColor: "#292929",
  },
  title: {
    textAlign: "center",
    color: "#8E8E93",
    fontSize: 15,
    marginBottom: 24,
  },
  pricesContainer: {
    width: "100%",
    height: 130,
    backgroundColor: "#636366",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 22,
    paddingHorizontal: 30,
  },
  gasContainer: {
    alignItems: "center",
  },

  gasTitleContainer: {
    width: 110,
    height: 34,
    backgroundColor: "#FF9F0A",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  gasTitle: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  priceText: {
    fontSize: 46,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  separator: {
    width: 1,
    height: 90,
    backgroundColor: "#D9D9D9",
  },
});
