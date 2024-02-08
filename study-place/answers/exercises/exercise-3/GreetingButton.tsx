// 使用するコアコンポーネントをインポートしてね
import { Text, TouchableHighlight, View } from "react-native";

/* ここでコンポーネントを宣言してね */
export const GreetingButton = () => {
  // ボタンが押下されたときはこのメソッドを動かしてね
  const onPress = () => {
    alert("Hello World");
  };
  // 表示内容（JSX）を返却してね
  return (
    <View>
      <TouchableHighlight onPress={onPress}>
        <Text>ここを押してね！</Text>
      </TouchableHighlight>
    </View>
  );
};
