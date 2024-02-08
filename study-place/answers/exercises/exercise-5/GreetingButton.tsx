import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

interface GreetingButtonProps {
  buttonTitle: string;
  onPress: () => void;
  disabled: boolean;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#06BEF0",
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

export const GreetingButton = (props: GreetingButtonProps) => {
  const { buttonTitle, onPress, disabled } = props;

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
