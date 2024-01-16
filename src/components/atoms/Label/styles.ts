import { ComponentProps } from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import { THEME } from '../../../resources/theme/theme';
import { Label } from './Label';

export const provideLabelStyle = (
  type: ComponentProps<typeof Label>['type']
) => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: THEME.size.$5,
    },
    font: {
      ...(getFontStyle(type) as TextStyle),
    },
  });
};

const getFontStyle = (type: ComponentProps<typeof Label>['type']) => {
  switch (type) {
    case 'title':
      return {
        fontSize: 35,
        fontWeight: 'bold',
        color: THEME.color.base.basic,
      };
    case 'subTitle':
      return {
        fontSize: 30,
        fontWeight: 'normal',
        color: THEME.color.base.basic,
      };
    case 'paragraphTitle':
      return {
        fontSize: 25,
        fontWeight: 'bold',
        color: THEME.color.base.basic,
      };
    case 'paragraph':
      return {
        fontSize: 20,
        fontWeight: 'normal',
        color: THEME.color.base.basic,
      };
    case 'button':
      return {
        fontSize: 15,
        fontWeight: 'bold',
        color: THEME.color.base.basic,
      };
    default:
      return {
        fontSize: 20,
        fontWeight: 'bold',
        color: THEME.color.base.basic,
      };
  }
};
