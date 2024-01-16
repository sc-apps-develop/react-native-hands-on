import { ComponentProps } from 'react';
import { StyleSheet } from 'react-native';
import { THEME } from '../../../resources/theme/theme';
import { Button } from './Button';

export const provideButtonStyle = (
  type: ComponentProps<typeof Button>['type'],
  shape: ComponentProps<typeof Button>['shape'],
  disabled: boolean,
  width?: number,
  height?: number,
  iconSize?: number
) => {
  const typeStyle = getContentsStyle(type, disabled);
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      width: width ? width : 'auto',
      height: height ? height : 'auto',
      borderRadius: shape == 'ellipse' ? THEME.size.$15 : THEME.size.$3,
      padding: THEME.size.$5,
      ...typeStyle.container,
    },
    contents: {
      iconSize: iconSize ? iconSize : THEME.size.$8,
      ...typeStyle.contents,
    },
  });
};

const getContentsStyle = (
  type: ComponentProps<typeof Button>['type'],
  disabled: boolean
) => {
  if (disabled) return disabledStyle;
  switch (type) {
    case 'primary':
      return primaryStyle;
    case 'secondary':
      return secondaryStyle;
    case 'ghost-base':
      return ghostBaseStyle;
    case 'ghost-white':
      return ghostWhiteStyle;
    default:
      return primaryStyle;
  }
};

const primaryStyle = {
  container: {
    backgroundColor: THEME.color.accent.basic,
    borderColor: THEME.color.accent.basic,
    underlayColor: THEME.color.accent.dark,
  },
  contents: {
    margin: THEME.size.$2,
    color: THEME.color.white.basic,
  },
};
const secondaryStyle = {
  container: {
    backgroundColor: THEME.color.base.basic,
    borderColor: THEME.color.base.basic,
    underlayColor: THEME.color.base.dark,
  },
  contents: {
    margin: THEME.size.$2,
    color: THEME.color.white.basic,
  },
};
const ghostBaseStyle = {
  container: {
    backgroundColor: THEME.color.transparent.basic,
    borderColor: THEME.color.transparent.basic,
    underlayColor: THEME.color.transparent.dark,
  },
  contents: {
    color: THEME.color.base.basic,
  },
};
const ghostWhiteStyle = {
  container: {
    backgroundColor: THEME.color.transparent.basic,
    borderColor: THEME.color.transparent.basic,
    underlayColor: THEME.color.transparent.dark,
  },
  contents: {
    color: THEME.color.white.basic,
  },
};
const disabledStyle = {
  container: {
    backgroundColor: THEME.color.main.dark,
    borderColor: THEME.color.main.dark,
    underlayColor: THEME.color.main.dark,
  },
  contents: {
    margin: THEME.size.$2,
    color: THEME.color.white.basic,
  },
};
