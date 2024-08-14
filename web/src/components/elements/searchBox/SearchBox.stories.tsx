import { Meta, StoryObj } from '@storybook/react';
import SearchBox from './SearchBox';

const meta: Meta = {
  title: 'Elements/SearchBox',
  component: SearchBox,
  argTypes: {
    defalutText: { control: 'text' },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    defalutText: '検索',
  },
};
