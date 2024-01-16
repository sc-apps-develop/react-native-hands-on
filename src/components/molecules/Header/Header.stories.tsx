import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'molecules/Header',
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ width: 250 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  title: 'sample',
  isLoggedIn: true,
};
export const LoggedOut = Template.bind({});
LoggedOut.args = {
  title: 'sample',
  isLoggedIn: false,
};
