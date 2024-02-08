import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { GreetingButton } from "./GreetingButton";

export default function App() {
  const onPress = () => {
    alert("変数2");
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* <MyImage width={100} height={100} /> */}
      <GreetingButton buttonTitle="変数1" onPress={onPress} disabled={false} />
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
