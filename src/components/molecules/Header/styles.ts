import { StyleSheet } from 'react-native';
import { THEME } from '../../../resources/theme/theme';

export const headerStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: THEME.size.full,
    height: THEME.size.$30,
    paddingTop: THEME.space.$3,
    paddingHorizontal: THEME.space.$3,
    backgroundColor: THEME.color.accent.basic,
    borderBottomLeftRadius: THEME.size.$10,
    borderBottomRightRadius: THEME.size.$10,
  },
  title: {
    color: THEME.color.white.basic,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
