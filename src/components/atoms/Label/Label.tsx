import { View, Text } from 'react-native';
import { provideLabelStyle } from './styles';

interface LabelProps {
  /**
   * 表示するテキストを指定します
   */
  title: string;
  /**
   * ラベルのスタイルを指定します
   * title、subTitle、paragraphTitle、paragraphのいずれかを指定してください
   */
  type: 'title' | 'subTitle' | 'paragraphTitle' | 'paragraph' | 'button';
}

/**
 * ラベルのコンポーネントです
 * CoreComponentのTextをラップして実装しています
 * アプリ内でラベルを利用する場合はこのコンポーネントを利用してください
 */
export const Label = (props: LabelProps) => {
  const { title, type } = props;
  const labelStyle = provideLabelStyle(type);
  return (
    <View style={labelStyle.container}>
      <Text style={labelStyle.font}>{title}</Text>
    </View>
  );
};
