import { Text, TouchableHighlight, View } from "react-native";

export const GreetingButton = () => {
  const onPress = () => {
    alert("Hello World");
  };
  return (
    <View>
      <TouchableHighlight onPress={onPress}>
        <Text>ここを押してね！</Text>
      </TouchableHighlight>
    </View>
  );
};
