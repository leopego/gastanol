import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
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
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 22,
    paddingHorizontal: 30,
    marginBottom: 24,
  },
  separator: {
    width: 1,
    height: 90,
    backgroundColor: "#3A3A3C",
  },
  awaitResultContainer: {
    width: "100%",
    height: 110,
    backgroundColor: "#636366",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  resultDefaultText: {
    fontSize: 17,
    color: "#48484A",
  },
});
