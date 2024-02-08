import { Image, View } from "react-native";

// Propsの型を定義
interface MyImageProps {
  width: number;
  height: number;
}

export const MyImage = (props: MyImageProps) => {
  // 分割代入
  const { width, height } = props;
  return (
    <View>
      {/* ↓適用！ */}
      <Image
        width={width}
        height={height}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
    </View>
  );
};
