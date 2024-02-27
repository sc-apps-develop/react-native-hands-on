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
      <PostItem imageUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqy4IKhb9PisIPr7hDY5u8RVCd_O9GE8KhrVVIYqCP8xHZWyogpKISD7xgb0HWcPAA3Yl1zPOd3qUL_1RuB45T2_A7aiIgd7T3RWoEIGRKtHbz-qYgP40AvXO17hmlLGYoPnstNawK8i4oXveX0PO7DxQXgUYtq868nELUv-nAZBJFfaixA6Xm1k-XlA/s917/mushitori_long_girl.png" userName='受け取ったユーザー名' postContent='受け取った投稿内容' />
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