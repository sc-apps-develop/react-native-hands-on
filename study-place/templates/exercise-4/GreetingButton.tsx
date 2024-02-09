import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

// interfaceを定義してね

// interfaceで定義した型のpropsを引数で受け取ってね
export const GreetingButton = () => {
  // 良ければ分割代入も使ってみてね
  const onPress = () => {
    alert("Hello World");
  };
  // propsで受け取った値をコンポーネントに反映してね
  return (
    <View>
      <TouchableHighlight onPress={onPress}>
        <Text>ここを押してね！</Text>
      </TouchableHighlight>
    </View>
  );
};
