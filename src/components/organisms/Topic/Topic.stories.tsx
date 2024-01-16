import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Topic } from './Topic';

export default {
  title: 'organisms/Topic',
  component: Topic,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: 500, padding: 30, backgroundColor: '#F0F0F0' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Topic>;

const Template: ComponentStory<typeof Topic> = (args) => <Topic {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  topic: {
    title: 'タイトル',
    text: '本文ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー本文',
    level: 'information',
    isFavorite: false,
    createdAt: '20XX/MM/DD HH:MM',
  },
};
