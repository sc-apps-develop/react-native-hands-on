import { Image, StyleSheet, View } from "react-native";

interface MyImageProps {
  width: number;
  height: number;
}

// 省略…
const styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },
  logo: {
    borderWidth: 5,
    borderColor: "red",
  },
});

export const MyImage = (props: MyImageProps) => {
  const { width, height } = props;
  return (
    <View style={styles.container}>
      <Image
        width={width}
        height={height}
        style={styles.logo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
    </View>
  );
};
