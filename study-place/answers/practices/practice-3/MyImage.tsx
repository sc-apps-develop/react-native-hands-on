// コアコンポーネント「Image」と「View」を使うのでインポート！
import { Image, View } from "react-native";

// コンポーネントを定義
export const MyImage = () => {
  return (
    <View>
      <Image
        width={50}
        height={50}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
    </View>
  );
};
