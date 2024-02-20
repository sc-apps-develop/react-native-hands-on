// 使用するコアコンポーネントをインポートしてね
import {
  Image,
  Text,
  View,
} from 'react-native';

// interfaceを定義してね

// interfaceで定義した型のpropsを引数で受け取ってね
export const PostItem = () => {

  // 良ければ分割代入も使ってみてね

  // propsで受け取った値をコンポーネントに反映してね
  return (
    <View>
      <View>
        <Image
          width={50}
          height={50}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text>ユーザー名</Text>
      </View>
      <Text>投稿内容！！</Text>
    </View>
  );
};