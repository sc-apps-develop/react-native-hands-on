import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, Alert } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.boldStyle}>僕の名前はトム!</Text>
      <Text style={styles.redStyle}>北海道出身なんだ！</Text>
      <Text>よろしくね！</Text>
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
