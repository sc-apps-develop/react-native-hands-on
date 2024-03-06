/**
 * 演習6のテンプレート
 */

// 使用するコアコンポーネントをインポートしてね
import {
  ScrollView,
  StyleSheet,
} from 'react-native'; // ←この行のコメントアウトは解除する

import {
  PostItem,
  PostItemProps,
} from './PostItem'; // ←この行のコメントアウトは解除する

interface PostListProps {
  itemList: PostItemProps[]
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30
  }
});

export const PostList = (props: PostListProps) => {
  const {itemList} = props;

  // 表示内容（JSX）を返却してね
  return <ScrollView style={styles.container}>
    {itemList.map((item, index) => {
      return (<PostItem key={index} {...item}/>)
    })}
  </ScrollView>;
}
