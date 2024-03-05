import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

// インターフェースを新しく定義
// ※ここ以外でも使いそうな型なので、別ファイルとして定義しておくのもあり！
export interface PostUser {
  imageUrl: string;
  userName: string;
}

export interface PostItemProps {
  postUser: PostUser; // PostUserを受け取るよう修正
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
  },
  buttons: {
    padding: 8
  }
});

export const PostItem = (props: PostItemProps) => {
  const {postUser, postContent} = props;
  const {imageUrl, userName} = postUser;

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
        <View>
          <Feather name="heart" size={16} color="black" />
        </View>
      </View>
    </View>
  );
};
