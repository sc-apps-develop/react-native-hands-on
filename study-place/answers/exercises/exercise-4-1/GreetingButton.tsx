import { Text, TouchableHighlight, View } from "react-native";

// インターフェースを定義
interface GreetingButtonProps {
  buttonTitle: string;
  onPress: () => void; // ←ボタンを押下した際の処理
  disabled: boolean;
}

export const GreetingButton = (props: GreetingButtonProps) => {
  // 分割代入
  const { buttonTitle, onPress, disabled } = props;

  return (
    <View>
      <TouchableHighlight onPress={disabled ? () => {} : onPress}>
        <Text>{buttonTitle}</Text>
      </TouchableHighlight>
    </View>
  );
};
