import { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

const meta: Meta = {
  title: 'Layouts/Header',
  component: Header,
  argTypes: {
    logoText: { control: 'text' },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    logoText: 'Logo',
  },
};
