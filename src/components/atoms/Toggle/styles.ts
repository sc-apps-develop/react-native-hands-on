import { StyleSheet } from 'react-native';
import { THEME } from '../../../resources/theme/theme';

export const provideToggleStyle = (value: boolean, iconSize?: number) => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius: THEME.size.$15,
      padding: THEME.size.$5,
      backgroundColor: THEME.color.transparent.basic,
      borderColor: THEME.color.transparent.basic,
      underlayColor: THEME.color.transparent.dark,
    },
    contents: {
      iconSize: iconSize ? iconSize : THEME.size.$8,
      margin: THEME.size.$2,
      color: value ? THEME.color.accent.basic : THEME.color.base.basic,
    },
  });
};
