import registerRootComponent from "expo/build/launch/registerRootComponent";
import { View, Text } from "react-native";
import { Button } from "../components/atoms/Button/Button";

interface IndexProps {}

export const Index = () => {
  // TODO 要実装
  // メインページ
  return (
    <View>
      <Text>ここに何らかを表示したい</Text>
      <Button title="ボタン" onPress={() => {}} />
    </View>
  );
};

registerRootComponent(Index);
