import { StyleSheet } from 'react-native';
import { THEME } from '../../../resources/theme/theme';
import { TopicAttr } from '../../../api/domain/topic_defs';

export const provideTopicStyle = (level: TopicAttr['level']) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: THEME.size.$3,
      paddingHorizontal: THEME.space.$5,
      paddingVertical: THEME.space.$2,
      backgroundColor: THEME.color.white.basic,
      borderLeftWidth: THEME.size.$3,
      ...getTopicColor(level),
    },
    header: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: THEME.space.$1,
      borderBottomColor: THEME.color.main.basic,
      borderBottomWidth: THEME.size.$1,
    },
    headerTextArea: {
      fontWeight: 'bold',
      fontSize: 19,
      color: THEME.color.base.basic,
    },
    headerButtonArea: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    body: {
      alignItems: 'center',
      marginVertical: THEME.space.$4,
    },
    footer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginVertical: THEME.space.$2,
    },
    footerTextArea: {
      color: THEME.color.main.dark,
    },
  });
};
const getTopicColor = (level: TopicAttr['level']) => {
  switch (level) {
    case 'information':
      return { borderLeftColor: THEME.color.blue };
    case 'important':
      return { borderLeftColor: THEME.color.green };
    case 'caution':
      return { borderLeftColor: THEME.color.yellow };
    case 'other':
      return { borderLeftColor: THEME.color.gray };
    default:
      return { borderLeftColor: THEME.color.main.dark };
  }
};
