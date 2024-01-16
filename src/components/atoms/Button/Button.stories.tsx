import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/Button',
  component: Button,
  // コンポーネントに与えるPropsのうち値を選択させたい（特定の入力方式に制限したい）場合はここで設定する
  // ユニオン型等、型によって自動で設定してくれるものもある
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: 100 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  title: 'Button',
  type: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Button',
  type: 'secondary',
};
export const GhostBase = Template.bind({});
GhostBase.args = {
  title: 'Button',
  type: 'ghost-base',
};
export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Button',
  disabled: true,
};
export const Ellipse = Template.bind({});
Ellipse.args = {
  title: 'Button',
  shape: 'ellipse',
};
export const WithIcon = Template.bind({});
WithIcon.args = {
  title: 'Button',
  icon: 'play',
  shape: 'ellipse',
};
export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  icon: 'play',
};
