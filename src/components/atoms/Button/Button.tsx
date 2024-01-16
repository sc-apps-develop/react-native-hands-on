import { ComponentProps } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import { provideButtonStyle } from './styles';

interface ButtonProps {
  /**
   * ボタンに表示される文字列を指定します
   * 指定しない場合、文字列は表示されません
   */
  title?: string;
  /**
   * ボタンのスタイルを指定します
   * primary、secondary、ghost-base、ghost-whiteのいずれかを指定してください
   * 指定しない場合、primaryで表示されます
   */
  type?: 'primary' | 'secondary' | 'ghost-base' | 'ghost-white';
  /**
   * ボタンの形を指定します
   * rectangle、ellipseのいずれかを指定してください
   * 指定しない場合、rectangleで表示されます
   */
  shape?: 'rectangle' | 'ellipse';
  /**
   * ボタン幅を指定します
   */
  width?: number;
  /**
   * ボタン高さを指定します
   */
  height?: number;
  /**
   * ボタンに表示されるIconを指定します
   * 指定しない場合、アイコンは表示されません
   */
  icon?: ComponentProps<typeof Icon>['name'];
  /**
   * Iconサイズを指定します
   * 指定しない場合、THEMEの$10が指定されます
   */
  iconSize?: number;
  /**
   * ボタンの活性非活性を指定します
   * true: 非活性、false: 活性
   * 指定しない場合、活性(false)で表示されます
   */
  disabled?: boolean;
  /**
   * ボタンが押下された際に1回呼ばれます
   */
  onPress: () => void;
}

/**
 * ボタンのコンポーネントです
 * 外部フレームワークをラップして実装しています
 * アプリ内でボタンを利用する場合はこのコンポーネントを利用してください
 */
export const Button = (props: ButtonProps) => {
  const {
    title,
    type,
    shape,
    width,
    height,
    icon,
    iconSize,
    disabled = false,
    onPress,
  } = props;
  const style = provideButtonStyle(
    type,
    shape,
    disabled,
    width,
    height,
    iconSize
  );
  return (
    <TouchableHighlight
      onPress={onPress}
      disabled={disabled}
      underlayColor={style.container.underlayColor}
      style={style.container}
    >
      <>
        {icon && (
          <Icon
            name={icon}
            size={style.contents.iconSize}
            style={style.contents}
          />
        )}
        {title && <Text style={style.contents}>{title}</Text>}
      </>
    </TouchableHighlight>
  );
};
