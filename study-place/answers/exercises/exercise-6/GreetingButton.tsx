import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

// プロパティ「buttonBackgroundColor（任意）」を追加
interface GreetingButtonProps {
  buttonTitle: string;
  onPress: () => void;
  disabled: boolean;
  buttonBackgroundColor?: string;
}

// ボタンの背景色を受け取り、スタイルを返却する関数を定義
const generateStyles = (buttonBackgroundColor: string) => {
  return StyleSheet.create({
    button: {
      backgroundColor: buttonBackgroundColor,
      borderRadius: 20,
      alignItems: "center",
      paddingHorizontal: 60,
      paddingVertical: 20,
    },
    buttonText: {
      color: "#FFFFFF",
      fontSize: 30,
      textAlign: "center",
    },
  });
};

export const GreetingButton = (props: GreetingButtonProps) => {
  const { buttonTitle, onPress, disabled, buttonBackgroundColor } = props;

  const styles = generateStyles(buttonBackgroundColor || "#06BEF0");

  return (
    <View>
      <TouchableHighlight
        style={styles.button}
        onPress={disabled ? () => {} : onPress}
      >
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableHighlight>
    </View>
  );
};
