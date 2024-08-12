import { Meta, StoryObj } from '@storybook/react';
import SearchBox from './SearchBox';

const meta: Meta = {
  title: 'Elements/SearchBox',
  component: SearchBox,
  argTypes: {
    defalutText: { control: 'text' },
    bgColor: { control: 'color' },
    fontColor: { control: 'color' },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    defalutText: 'Search',
    bgColor: '#161616',
    fontColor: '#000',
  },
};
