import { StyleSheet } from "react-native";
import { theme } from "../../utils";

export const styles = StyleSheet.create({
  gasContainer: {
    alignItems: "center",
  },

  gasTitleContainer: {
    width: 110,
    height: 34,
    backgroundColor: theme.colors.orange,
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
});
