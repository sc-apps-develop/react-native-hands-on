import { View, Text } from 'react-native';
import { THEME } from '../../../resources/theme/theme';
import { Button } from '../../atoms/Button/Button';
import { headerStyle } from './styles';

interface HeaderProps {
  /**
   * ヘッダー中央に表示するテキストを指定します
   * 指定しない場合は何も表示されません
   */
  title?: string;
  /**
   * ログイン状態かどうかを指定します
   * true: ログインしている、false: ログインしていない
   * 指定していない場合はfalseで表示されます
   */
  isLoggedIn?: boolean;
}

/**
 * ヘッダーのコンポーネントです
 * 高さは$20固定、幅は親コンポーネントの100%です
 */
export const Header = (props: HeaderProps) => {
  const { title, isLoggedIn = false } = props;
  const buttonDiameter = THEME.size.$18;
  return (
    <View style={headerStyle.container}>
      <View>
        <Button
          width={buttonDiameter}
          height={buttonDiameter}
          onPress={() => {}}
          shape="ellipse"
          type="ghost-white"
          icon="bars"
        />
      </View>
      <View>
        <Text style={headerStyle.title}>{title}</Text>
      </View>
      <View>
        <Button
          width={buttonDiameter}
          height={buttonDiameter}
          onPress={() => {}}
          shape="ellipse"
          type="ghost-white"
          icon={isLoggedIn ? 'user' : 'question'}
        />
      </View>
    </View>
  );
};
