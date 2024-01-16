import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from './Label';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'atoms/Label',
  component: Label,
  decorators: [
    (Story) => (
      <div style={{ width: 200 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;
export const Title = Template.bind({});
Title.args = {
  title: 'ラベル',
  type: 'title',
};
export const SubTitle = Template.bind({});
SubTitle.args = {
  title: 'ラベル',
  type: 'subTitle',
};
