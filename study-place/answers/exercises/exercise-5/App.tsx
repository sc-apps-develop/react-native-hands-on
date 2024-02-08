import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { GreetingButton } from "./GreetingButton";

export default function App() {
  const onPress = () => {
    alert("Hello World");
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <GreetingButton
        buttonTitle="ここを押してね！"
        onPress={onPress}
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
