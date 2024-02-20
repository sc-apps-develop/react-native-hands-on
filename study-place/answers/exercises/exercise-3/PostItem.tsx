// 使用するコアコンポーネントをインポートしてね
import {
  Image,
  Text,
  View,
} from 'react-native';

/* ここでコンポーネントを宣言してね */
export const PostItem = () => {

  // 表示内容（JSX）を返却してね
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
