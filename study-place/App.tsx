// import { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// import { getUniqueId } from "react-native-device-info";

export default function App() {
  // const [deviceId, setDeviceId] = useState<string>();
  // getUniqueId().then((id) => {
  //   setDeviceId(id);
  // });
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* <Text>{deviceId}</Text> */}
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
