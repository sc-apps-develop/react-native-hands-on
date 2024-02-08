import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { GreetingButton } from "./GreetingButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <GreetingButton
        buttonTitle="ボタン1"
        onPress={() => alert("1のアラート!")}
        disabled={false}
      />
      <GreetingButton
        buttonTitle="ボタン2"
        onPress={() => console.log("2のコンソールログ!")}
        disabled={false}
      />
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
