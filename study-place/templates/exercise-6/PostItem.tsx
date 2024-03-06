import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// 新しくインターフェースを作って、PostUserを定義してね

// PostUser型の変数と、postContentを受け取るように編集してみてね
interface PostItemProps {
  imageUrl: string;
  userName: string;
  postContent: string;
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#999999",
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    gap: 8,

    width: "80%",
    paddingBottom: 8,
    paddingHorizontal: 8,
    marginVertical: 8,
    marginHorizontal: "auto",

  },
  image: {
    width: 50,
    height: 50
  },
  userNameText: {
    fontWeight: "bold",
    fontSize: 16
  },
  contentText: {
    fontSize: 18,
  }
});

export const PostItem = (props: PostItemProps) => {
  const {imageUrl, userName, postContent} = props;

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      <View>
        <Text style={styles.userNameText}>{userName}</Text>
        <Text style={styles.contentText}>{postContent}</Text>
        {/* ここら辺にいいねボタンを表示できると良いかも */}
      </View>
    </View>
  );
};
