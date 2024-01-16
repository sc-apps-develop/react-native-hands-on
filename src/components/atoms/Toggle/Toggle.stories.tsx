import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toggle } from './Toggle';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/Toggle',
  component: Toggle,
  // コンポーネントに与えるPropsのうち値を選択させたい（特定の入力方式に制限したい）場合はここで設定する
  // ユニオン型等、型によって自動で設定してくれるものもある
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: 50 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;
export const OffIcon = Template.bind({});
OffIcon.args = {
  value: false,
  type: 'icon',
  icon: 'apple',
};
export const OnIcon = Template.bind({});
OnIcon.args = {
  value: true,
  type: 'icon',
  icon: 'apple',
};
export const OffToggle = Template.bind({});
OffToggle.args = {
  value: false,
  type: 'toggle',
};
export const OnToggle = Template.bind({});
OnToggle.args = {
  value: true,
  type: 'toggle',
};
