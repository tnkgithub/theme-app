import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta = {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    inText: { control: 'text' },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    inText: 'button',
  },
};

export const imageButton: StoryObj = {
  args: {
    inText: 'images',
  },
};

export const titleButton: StoryObj = {
  args: {
    inText: 'title',
  },
};
