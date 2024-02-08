// import（コアコンポーネントを使用するのに必要）
import { StyleSheet, Text, View } from "react-native";

// メイン処理
export const Props = () => {
  return (
    // 課題：スタイル（色や太さ）と文字の異なるテキストを2つ作成しましょう
    // スタイルの適用は、<Text style={styles.boldstyle} > のようにやります
    // boldstyleとredstyleをそれぞれ適用させてください
    // 作成できたら、練習②の３．～５．のように、
    // App.tsxのreturn内に<Props />を追加するように編集してください。
    <View style={styles.container}></View>
  );
};

// スタイル適用
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
  boldStyle: {
    fontWeight: "bold",
  },
  redStyle: {
    color: "red",
  },
});
