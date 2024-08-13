import { Meta, StoryObj } from '@storybook/react';
import SearchBer from './SearchBer';

const meta: Meta = {
  title: 'Elements/SearchBer',
  component: SearchBer,
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
