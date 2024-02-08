import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { MyImage } from "./MyImage";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <MyImage width={100} height={100} /> {/* ←追記！ */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
