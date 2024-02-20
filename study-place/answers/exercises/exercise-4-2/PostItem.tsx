// 使用するコアコンポーネントをインポートしてね
import {
  Image,
  ImageSourcePropType,
  Text,
  View,
} from 'react-native';

interface PostItemProps {
  imageSource: ImageSourcePropType;
  userName: string;
  postContent: string;
}

// コンポーネントを定義
export const PostItem = (props: PostItemProps) => {
  const {imageSource, userName, postContent} = props;

  // JSXを返却
  return (
    <View>
      <View>
        <Image
          width={50}
          height={50}
          source={imageSource}
        />
        <Text>{userName}</Text>
      </View>
      <Text>{postContent}</Text>
    </View>
  );
};
