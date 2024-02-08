import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { GreetingButton } from "./GreetingButton";

export default function App() {
  // ボタンが押下された際の処理を外出ししたので、ここに記載
  const onPress = () => {
    alert("変数2");
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <GreetingButton buttonTitle="変数1" onPress={onPress} disabled={false} />
      {/* ↑追記！ */}
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
