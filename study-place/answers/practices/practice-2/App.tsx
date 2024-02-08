import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, Alert } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ハロー, タカシ!</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
      <Image
        style={styles.tinyLogo}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
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
  boldStyle: {
    fontWeight: "bold",
  },
  redStyle: {
    color: "red",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
