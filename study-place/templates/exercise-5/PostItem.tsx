import {
  Image,
  Text,
  View,
} from 'react-native';

interface PostItemProps {
  imageUrl: string;
  userName: string;
  postContent: string;
}

// スタイルの定義を追加してね

export const PostItem = (props: PostItemProps) => {
  const {imageUrl, userName, postContent} = props;

  // 定義したスタイルをコンポーネントに適用してね
  // （必要に応じてコンポーネントの構成を変更してね）
  return (
    <View>
      <View>
        <Image
          width={50}
          height={50}
          source={{
            uri: imageUrl,
          }}
        />
        <Text>{userName}</Text>
      </View>
      <Text>{postContent}</Text>
    </View>
  );
};
