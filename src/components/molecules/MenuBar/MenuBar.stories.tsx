import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MenuBar } from './MenuBar';

export default {
  title: 'molecules/MenuBar',
  component: MenuBar,
  decorators: [
    (Story) => (
      <div style={{ width: 250 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof MenuBar>;

const Template: ComponentStory<typeof MenuBar> = (args) => (
  <MenuBar {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  menuItems: [
    { icon: 'home', onPress: () => {} },
    { icon: 'search', onPress: () => {} },
    { icon: 'map', onPress: () => {} },
    { icon: 'image', onPress: () => {} },
  ],
  initialSelectedItem: 0,
};
