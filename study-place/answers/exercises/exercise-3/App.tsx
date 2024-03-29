import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
} from 'react-native';

import { PostItem } from './PostItem';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <PostItem />
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