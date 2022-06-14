import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/homeScreen";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "#292929", flex: 1 }}>
      <StatusBar />
      <HomeScreen />
    </SafeAreaView>
  );
}
