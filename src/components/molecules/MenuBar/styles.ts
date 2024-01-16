import { StyleSheet } from 'react-native';
import { THEME } from '../../../resources/theme/theme';

export const menuBarStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: THEME.size.full,
    height: THEME.size.$20,
    paddingHorizontal: THEME.space.$3,
    backgroundColor: THEME.color.main.basic,
  },
});
