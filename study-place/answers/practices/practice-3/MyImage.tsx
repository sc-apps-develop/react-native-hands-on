import { Image, View } from "react-native";

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
