import React, { ComponentProps } from 'react';
import { View, TouchableHighlight, Switch } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import { provideToggleStyle } from './styles';

interface ToggleProps {
  /**
   * 初期値を指定します
   * true: ON、false: OFF
   * 指定しない場合、falseで表示されます
   */
  value: boolean;
  /**
   * ボタンのスタイルを指定します
   * toggle、iconのいずれかを指定してください
   * 指定しない場合、toggleで表示されます
   */
  type?: 'toggle' | 'icon';
  /**
   * ボタンに表示されるIconを指定します
   * typeがiconの場合は必須です
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
   * 押下された際に1回呼ばれます
   */
  onPress?: () => void;
}

/**
 * トグルボタンのコンポーネントです
 * 外部フレームワークをラップして実装しています
 * アプリ内でボタンを利用する場合はこのコンポーネントを利用してください
 */
export const Toggle = (props: ToggleProps) => {
  const {
    value = false,
    type,
    icon,
    iconSize,
    disabled = false,
    onPress,
  } = props;
  const theme = provideToggleStyle(value, iconSize);
  const onChange = () => {
    onPress && onPress();
  };
  return type == 'toggle' ? (
    <View style={theme.container}>
      <Switch
        value={value}
        onValueChange={onChange}
        disabled={disabled}
      ></Switch>
    </View>
  ) : (
    <TouchableHighlight
      onPress={onChange}
      disabled={disabled}
      underlayColor={theme.container.underlayColor}
      style={theme.container}
    >
      <>
        {icon && (
          <Icon
            name={icon}
            size={theme.contents.iconSize}
            style={theme.contents}
          />
        )}
      </>
    </TouchableHighlight>
  );
};
