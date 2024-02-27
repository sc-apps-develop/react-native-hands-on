// 使用するコアコンポーネントをインポートしてね
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

// コンポーネントを定義
export const PostItem = (props: PostItemProps) => {
  const {imageUrl, userName, postContent} = props;

  // JSXを返却
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
