import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { THEME } from '../../../resources/theme/theme';
import { TopicAttr } from '../../../api/domain/topic_defs';
import { Button } from '../../atoms/Button/Button';
import { Toggle } from '../../atoms/Toggle/Toggle';
import { provideTopicStyle } from './styles';

interface TopicProps {
  /**
   * 表示するトピックを指定します
   */
  topic: TopicAttr;
}

export const Topic = (props: TopicProps) => {
  const { topic } = props;
  const [isFavorite, setIsFavorite] = useState(!!topic.isFavorite);
  const topicStyle = provideTopicStyle(topic.level);
  return (
    <View style={topicStyle.container}>
      <View style={topicStyle.header}>
        <Text style={topicStyle.headerTextArea}>{topic.title}</Text>
        <View style={topicStyle.headerButtonArea}>
          <Button
            type="ghost-base"
            icon="close"
            shape="ellipse"
            iconSize={THEME.size.$8}
            onPress={() => {}}
          />
        </View>
      </View>
      <View style={topicStyle.body}>
        <Text>{topic.text}</Text>
      </View>
      <View style={topicStyle.footer}>
        <Toggle
          value={isFavorite}
          type="icon"
          icon="heart"
          iconSize={THEME.size.$8}
          onPress={() => {
            setIsFavorite(!isFavorite);
          }}
        />
        <Text style={topicStyle.footerTextArea}>{topic.createdAt}</Text>
      </View>
    </View>
  );
};
