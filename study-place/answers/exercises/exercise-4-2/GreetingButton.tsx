import { Text, TouchableHighlight, View } from "react-native";

interface GreetingButtonProps {
  buttonTitle: string;
  onPress: () => void;
  disabled: boolean;
}

// 使いまわすだけなので、GreetingButtonに手を加える必要なし！

export const GreetingButton = (props: GreetingButtonProps) => {
  const { buttonTitle, onPress, disabled } = props;

  return (
    <View>
      <TouchableHighlight onPress={disabled ? () => {} : onPress}>
        <Text>{buttonTitle}</Text>
      </TouchableHighlight>
    </View>
  );
};
