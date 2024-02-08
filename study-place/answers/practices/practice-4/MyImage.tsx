import { Image, View } from "react-native";

interface MyImageProps {
  width: number;
  height: number;
}

export const MyImage = (props: MyImageProps) => {
  const { width, height } = props;
  return (
    <View>
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
