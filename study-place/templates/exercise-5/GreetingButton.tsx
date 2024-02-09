import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

interface GreetingButtonProps {
  buttonTitle: string;
  onPress: () => void;
  disabled: boolean;
}

// スタイルを定義してね

export const GreetingButton = (props: GreetingButtonProps) => {
  const { buttonTitle, onPress, disabled } = props;

  // 定義したスタイルをそれぞれのコアコンポーネントに適用してね
  return (
    <View>
      <TouchableHighlight onPress={disabled ? () => {} : onPress}>
        <Text>{buttonTitle}</Text>
      </TouchableHighlight>
    </View>
  );
};
