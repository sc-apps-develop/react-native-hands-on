// import（コアコンポーネントを使用するのに必要）
import { StyleSheet, Text, View, Alert, Image, Button } from "react-native";

// メイン処理
export const CoreComponent = () => {
  return (
    // 課題：Text、Button、Imageを写経してください
    <View style={styles.container}></View>
  );
};

// スタイル適用（ここは気にしなくてよいです）
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  boldStyle: {
    fontWeight: "bold",
  },
  redStyle: {
    color: "red",
  },
});
